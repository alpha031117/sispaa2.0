import React from 'react';

const StatusCard = () => {
    return(
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5 mb-8">
            {[
                { label: 'Total Complaints', count: 5 },
                { label: 'In Attention', count: 5 },
                { label: 'Under Investigation', count: 5 },
                { label: 'Resolved', count: 5 },
                { label: 'Rejected', count: 5 },
            ].map((status, index) => (
                <div key={index} className="p-6 bg-white shadow-md rounded-md">
                    <h3 className="text-sm font-semibold text-gray-600">{status.label}</h3>
                    <p className="text-2xl font-bold">{status.count}</p>
                </div>
            ))}
        </div>
    );
}

export default StatusCard;