import React from 'react';

const StatusCard = () => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5 mb-8">
            {[
                { label: 'Total Complaints', count: 5, color: "text-gray-500" },
                { label: 'In Attention', count: 5, color: "text-[#80A4F3]" },
                { label: 'Under Investigation', count: 5, color: "text-[#2563EB]" },
                { label: 'Resolved', count: 5, color: "text-[#10B981]" },
                { label: 'Rejected', count: 5, color: "text-[#EF4444]" },
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
