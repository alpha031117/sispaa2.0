import React from 'react';
import Link from 'next/link';

const ComplaintList = () => {
    const complaints = [
        { 
            id: "101", 
            title: 'Noise Complaint: Construction Site', 
            date: 'June 1, 2024', 
            status: 'Resolved', 
            content: "Residents in the vicinity have reported persistent noise disturbances from the construction site located at 123 Main St. The noise levels, particularly during early morning hours, are affecting the quality of life and sleep of nearby residents. It is requested that construction hours be adjusted to mitigate these disturbances." 
        },
        { 
            id: "102", 
            title: 'Request for Streetlight Repair', 
            date: 'June 21, 2024', 
            status: 'In Attention', 
            content: "The streetlight at the intersection of 5th Avenue and Oak Street has been malfunctioning for several weeks. This has led to poor visibility at night, posing a safety risk for pedestrians and drivers alike. Immediate repair is requested to ensure public safety." 
        },
        { 
            id: "103", 
            title: 'Pothole Issue on Main St.', 
            date: 'June 23, 2024', 
            status: 'Rejected', 
            content: "A significant pothole on Main St. has been causing damage to vehicles and posing a hazard for cyclists. Several residents have reported issues, and there is concern for the potential for accidents. Prompt action is needed to repair the pothole and ensure safe passage for all road users." 
        },
        { 
            id: "104", 
            title: 'Request for Park Maintenance', 
            date: 'July 1, 2024', 
            status: 'Under Investigation', 
            content: "The local park has seen a decline in maintenance, with broken benches, overgrown grass, and litter scattered throughout the area. This has made it less enjoyable for families and children who frequent the park. It is requested that the maintenance team address these issues to restore the park to a safe and pleasant state." 
        },
        { 
            id: "105", 
            title: 'Illegal Dumping Report', 
            date: 'July 5, 2024', 
            status: 'Resolved', 
            content: "Residents have observed illegal dumping occurring in the alley behind the community center. The dumped materials include hazardous waste and construction debris, which pose health and safety risks. Quick removal and increased surveillance in the area are necessary to prevent further incidents." 
        },
        { 
            id: "106", 
            title: 'Complaint About Traffic Signal Malfunction', 
            date: 'July 10, 2024', 
            status: 'In Attention', 
            content: "The traffic signal at the intersection of 1st and Elm has been malfunctioning intermittently, leading to confusion and potential accidents at the busy intersection. Drivers and pedestrians are unsure when it is safe to proceed. Immediate attention to fix the signal is needed to ensure safety for all road users." 
        },
    ];

    const renderStatusBadge = (status: string) => {
        let badgeClass = '';
        switch (status) {
            case 'Resolved':
                badgeClass = 'px-3 py-1 rounded-full text-sm bg-green-100 text-green-600';
                break;
            case 'In Attention':
                badgeClass = 'px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600';
                break;
            case 'Rejected':
                badgeClass = 'px-3 py-1 rounded-full text-sm bg-red-100 text-red-600';
                break;
            case 'Under Investigation':
                badgeClass = 'px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-600';
                break;
            default:
                badgeClass = 'px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600';
                break;
        }
        return <span className={badgeClass}>{status}</span>;
    };

    return (
        <div className="space-y-6">
            {complaints.map((caseData) => (
                <div key={caseData.id} className="p-6 bg-white shadow-md rounded-md">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-semibold">Complaint: {caseData.title}</h3>
                            <p className="text-sm text-gray-500">Issued On {caseData.date}</p>
                        </div>
                        {/* Status Badge */}
                        {renderStatusBadge(caseData.status)}
                    </div>
                    <p className="mt-4 text-sm text-gray-600 overflow-hidden w-3/4">
                        {caseData.content}
                    </p>
                    <Link href={`/complaint-detail/${caseData.id}`}>
                        <p className="text-blue-500 mt-2 inline-block">See Details</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ComplaintList;
