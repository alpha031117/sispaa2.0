"use client";

import React, { useState } from 'react';
import { FeedCard } from './_components/feed_cards';

const mockFeeds = [
    {
        id: 1,
        title: "Successful resolution of Hospital Waiting Time",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit, augue nec fringilla tincidunt, lacus libero ornare ex, quis lacinia dui neque id purus. Etiam ac orci faucibus libero egestas consequat. Aliquam nec congue justo. Proin dignissim placerat purus at efficitur. Nullam egestas lacus ac libero feugiat commodo. Donec eros lacus, aliquet ut varius et, varius a turpis. Maecenas sollicitudin eget mauris eget mattis. Nunc porttitor ultricies nibh, ac egestas metus viverra vel. In vitae interdum metus, a finibus dolor. Nulla ut placerat sapien. Maecenas molestie, urna ac scelerisque tempus, sem magna dictum mi, et suscipit enim velit eu mi. Nunc placerat non mauris at accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit, augue nec fringilla tincidunt, lacus libero ornare ex, quis lacinia dui neque id purus. Etiam ac orci faucibus libero egestas consequat. Aliquam nec congue justo. Proin dignissim placerat purus at efficitur. Nullam egestas lacus ac libero feugiat commodo. Donec eros lacus, aliquet ut varius et, varius a turpis. Maecenas sollicitudin eget mauris eget mattis. Nunc porttitor ultricies nibh, ac egestas metus viverra vel. In vitae interdum metus, a finibus dolor. Nulla ut placerat sapien. Maecenas molestie, urna ac scelerisque tempus, sem magna dictum mi, et suscipit enim velit eu mi. Nunc placerat non mauris at accumsan.",
        date: "2024-06-15",
        agency: "District and Land Offices",
        status: "Resolved",
        complaintIds: ["1010000023456"]
    },
    {
        id: 2,
        title: "Successful resolution of Hospital Waiting Time",
        content: "We are pleased to announce that we have successfully reduced hospital waiting times by 30% through the implementation of a new appointment system.",
        date: "2024-06-10",
        agency: "District and Land Offices",
        status: "Resolved",
        complaintIds: ["1010000023456", "1010384356777", "1010384000000"]
    },
    {
        id: 3,
        title: "Successful resolution of Hospital Waiting Time",
        content: "We are pleased to announce that we have successfully reduced hospital waiting times by 30% through the implementation of a new appointment system.",
        date: "2024-05-15",
        agency: "District and Land Offices",
        status: "Resolved",
        complaintIds: ["1010000023456", "1010384859577"]
    },
];

const FeedPage = () => {
    const [feeds, setFeeds] = useState(mockFeeds);

    const groupFeedsByMonth = (): [string, typeof mockFeeds][] => {
        const grouped = feeds.reduce((acc: { [key: string]: typeof mockFeeds }, feed) => {
            const date = new Date(feed.date);
            const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });
            if (!acc[monthYear]) {
                acc[monthYear] = [];
            }
            acc[monthYear].push(feed);
            return acc;
        }, {});

        return Object.entries(grouped).sort((a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime());
    };

    return (
        <main className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">Agency Feeds</h2>
            {groupFeedsByMonth().map(([monthYear, monthFeeds]) => (
                <div className="mb-10" key={monthYear}>
                    <h3 className="text-xl font-semibold mb-4 text-gray-600">{monthYear}</h3>
                    {monthFeeds.map((feed) => (
                        <FeedCard key={feed.id} feed={feed} />
                    ))}
                </div>
            ))}
        </main>
    );
};

export default FeedPage;
