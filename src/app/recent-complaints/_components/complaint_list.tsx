import React from 'react';
import Link from 'next/link';

const ComplaintList = () => {
    const complaints = [
        { id: '1010000023456', date: 'June 1, 2024', status: 'Resolved' },
        { id: '1010384859577', date: 'June 21, 2024', status: 'In Attention' },
        { id: '1010384000000', date: 'June 23, 2024', status: 'Rejected' },
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
            default:
                badgeClass = 'px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600';
                break;
        }
        return <span className={badgeClass}>{status}</span>;
    };

    return (
        <div className="space-y-6">
            {complaints.map((caseData, index) => (
                <div key={index} className="p-6 bg-white shadow-md rounded-md">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-semibold">Case ID: {caseData.id}</h3>
                            <p className="text-sm text-gray-500">Issued On {caseData.date}</p>
                        </div>
                        {/* Status Badge */}
                        {renderStatusBadge(caseData.status)}
                    </div>
                    <p className="mt-4 text-sm text-gray-600 overflow-hidden h-[3rem] w-3/4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
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
