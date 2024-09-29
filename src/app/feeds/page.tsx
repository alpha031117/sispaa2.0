"use client";

import React from 'react';
import { FeedCard } from './_components/feed_cards';

type Feed = {
    ID: string;
    title: string;
    content: string;
    date: string;
    agency: string;
    status: string;
    complaintIds: string[];
    icon: string;
};

const mockFeeds: Feed[] = [
    {
        ID: '101',
        title: 'Noise Complaint: Construction Site',
        content: 'Residents reported persistent noise disturbances from the construction site at 123 Main St.',
        date: '2024-06-01',
        agency: 'Jabatan Keselamatan Jalan Raya',
        status: 'Resolved',
        complaintIds: ['Construction Site Noise Complaint'],
        icon: '/images/Jabatan Keselamatan Jalan Raya.png' // Change to your actual image path
    },
    {
        ID: '102',
        title: 'Request for Streetlight Repair',
        content: 'Streetlight at 5th Avenue has been malfunctioning for weeks.',
        date: '2024-06-21',
        agency: 'Jabatan Keselamatan Jalan Raya',
        status: 'In Attention',
        complaintIds: ['Ligth Malfunction at 5th Avenue', 'Streetlight Repair Request'],
        icon: '/images/Jabatan Keselamatan Jalan Raya.png' // Change to your actual image path
    },
    {
        ID: '103',
        title: 'Pothole Issue on Main St.',
        content: 'Significant pothole on Main St. causing damage to vehicles.',
        date: '2024-06-23',
        agency: 'Jabatan Keselamatan Jalan Raya',
        status: 'Rejected',
        complaintIds: ['Main St. Pothole Issue', 'Pothole Repair Request', 'Pothole Damage Report'],
        icon: '/images/Jabatan Keselamatan Jalan Raya.png' // Change to your actual image path
    },
];

const FeedPage = () => {
    // const [feeds, setFeeds] = useState(mockFeeds);

    const groupFeedsByMonth = (): [string, typeof mockFeeds][] => {
        const grouped = mockFeeds.reduce((acc: { [key: string]: typeof mockFeeds }, feed) => {
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
                        <FeedCard key={feed.ID} feed={feed} />
                    ))}
                </div>
            ))}
        </main>
    );
};

export default FeedPage;
