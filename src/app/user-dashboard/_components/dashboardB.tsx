import React from 'react';

const mockData = [
    {
        ID: '101',
        title: 'Noise Complaint: Construction Site',
        date: 'June 1, 2024',
        status: 'Resolved',
    },
    {
        ID: '102',
        title: 'Request for Streetlight Repair',
        date: 'June 21, 2024',
        status: 'In Attention',
    },
    {
        ID: '103',
        title: 'Pothole Issue on Main St.',
        date: 'June 23, 2024',
        status: 'Rejected',
    },
    {
        ID: '104',
        title: 'Request for Park Maintenance',
        date: 'July 1, 2024',
        status: 'Under Investigation',
    },
];

// Mapping of status to colors
const statusColorMap: { [key: string]: string } = {
    'In Attention': 'text-blue-600',
    'Under Investigation': 'text-yellow-500',
    'Resolved': 'text-green-600',
    'Rejected': 'text-red-600',
};

const DashboardB = () => {
    return (
        <div className='w-[60rem]'>
            <div className='lato-bold text-xl'>Recent Complaints</div>
            <div className='grid grid-cols-[1fr_2fr_2fr_1fr_1fr] justify-items-center gap-y-4'>
                <div className='text-gray-500'></div>
                <div className='text-gray-500 mt-5'>Complain Title</div>
                <div className='text-gray-500 mt-5'>Date</div>
                <div className='text-gray-500 mt-5'>Status</div>
                <hr className='col-span-5 w-full border-t border-gray-300' />
                
                {mockData.map((complaint, index) => (
                    <React.Fragment key={complaint.ID}>
                        <div className='text-sm'>{index + 1}</div>
                        <div className='text-sm'>{complaint.title}</div>
                        <div className='text-sm'>{complaint.date}</div>
                        <div className={`text-sm ${statusColorMap[complaint.status as keyof typeof statusColorMap] || 'text-gray-500'}`}>
                            {complaint.status}
                        </div>
                        <hr className='col-span-5 w-full border-t border-gray-300' />
                    </React.Fragment>
                ))}
            </div>
            <hr className='pt-[1rem]' />
        </div>
    );
};

export default DashboardB;
