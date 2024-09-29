import React from 'react';

const StatusCard = () => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5 mb-8">
            {[
                { label: 'Total Complaints', count: 6, color: "text-gray-600" },
                { label: 'In Attention', count: 2, color: "text-blue-600" },
                { label: 'Under Investigation', count: 1, color: "text-yellow-500" },
                { label: 'Resolved', count: 2, color: "text-green-600" },
                { label: 'Rejected', count: 1, color: "text-red-600" },
            ].map((status, index) => (
                <div key={index} className="p-6 bg-white shadow-md rounded-md">
                    <h3 className="text-sm font-semibold text-black">{status.label}</h3>
                    <p className={`mt-3 text-2xl font-medium ${status.color}`}>{status.count}</p>
                </div>
            ))}
        </div>
    );
}

export default StatusCard;
