import React from 'react';
import { ComplatDetailType } from '../../_shareDummyData';


const timelineData = [
    {
		icon: '📄',
		title: 'Complaint Received',
		description: 'Your complaint was received on June 1, 2024',
    },
    {
		icon: '✔️',
		title: 'Verified',
		description: 'Your complaint was verified by JKR on June 4, 2024',
    },
    {
		icon: '🛠️',
		title: 'Action',
		description: 'The authorities had started working on June 5, 2024',
    },
    {
		icon: '✅',
		title: 'Problem Resolved',
		description: 'Problem had been solved successfully on June 6, 2024',
    },
    {
		icon: '📂',
		title: 'File Closed',
		description: 'File had been closed on June 9, 2024',
    },
];

const MainBodyPage = ({dummyData}: {dummyData: ComplatDetailType}) => {

	const getStatusStyle = (status: string) => {
		switch (status) {
			case 'Pending':
				return 'bg-yellow-200 text-yellow-600';
			case 'Resolved':
				return 'bg-green-200 text-green-600';
			case 'Rejected':
				return 'bg-red-200 text-red-600';
			default:
				return 'bg-gray-200 text-gray-600';
		}
	}

    return (
        <div className='p-4 flex flex-col gap-y-12'>
			<div className='flex flex-col gap-y-4'>
				<div className='flex gap-x-4 items-center'>
					<div className='lato-bold text-2xl'>Case ID: {dummyData.ID}</div>
					<div className={`${getStatusStyle(dummyData.status)} rounded-md px-4 h-fit`}>{dummyData.status}</div>
				</div>
				<div className='text-gray-500'>View the status of your complaint through the different stages.</div>
			</div>

			{/* Details */}
			<div className=''>
				<div className="relative px-5 border-gray-300">
					{/* Timeline */}
					{timelineData.map((event, index) => (
						<div key={index} className="mb-10 ml-4 z-30">
						<div className="flex items-center mb-2">
							<div className="bg-gray-100 text-gray-700 mr-4 w-8 h-8 flex justify-center items-center rounded-full shadow-lg">
								<div className="text-xl z-40 bg-white p-2 rounded-full">{event.icon}</div>
							</div>
							<div className="ml-4">
								<h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
								<p className="text-sm text-gray-500">{event.description}</p>
							</div>
						</div>
						</div>
					))}
					{/* Vertical line that is absolute at the background */}
					<div className="absolute top-1 left-12 z-10 w-1 h-[90%] bg-gray-300"></div>
				</div>
			</div>
		</div>
    )
}
export default MainBodyPage;