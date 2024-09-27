import React from 'react';
import Link from 'next/link';
import { ComplatDetailType } from '../_shareDummyData';

const MainBody = ({dummyData, pathname}: {dummyData: ComplatDetailType, pathname: string}) => {
    const trackingPath = `${pathname}/tracking-status`;

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
			<div className='lato-bold text-2xl'>Case ID: {dummyData.ID}</div>

			{/* Details */}
			<div className='flex flex-row justify-between'>
				<div><span className='text-gray-600'>Submitted By:</span><br/> {dummyData.name}</div>
				<div><span className='text-gray-600'>Issued Date:</span><br/> {dummyData.issued_date}</div>
			</div>

			{/* Complaint */}
			<div>
				<div className='text-gray-600'>Complaint:</div>
				<div>{dummyData.complaint_details}</div>
			</div>

			{/* Attachment */}
			<div>
				<span className='text-gray-600'>Attachment:</span><br/>
				<div className='flex flex-row'>
					{dummyData.attachment.map((attachment, index) => (
						<div 
							key={index}
							className='bg-gray-200 py-2 px-4 m-2 rounded-md flex justify-center items-center'>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-block">
									<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
								</svg>
								<span className="inline-block ml-2">
									<div>
										{attachment.name}
									</div>
									<div className='text-gray-500 text-xs'>
										{attachment.size}
									</div>
								</span>
						</div>
					))}
				</div>
			</div>

			{/* Complaint Status */}
			<div className='flex flex-col gap-y-8'>
				<div className='flex flex-row justify-between'>
					<Link href={trackingPath} className='flex flex-row gap-x-2 hover:text-accent_blue'>
						<div>Complaint Status</div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
							<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
						</svg>
					</Link>
					<div className={`${getStatusStyle(dummyData.status)} rounded-md px-4 `}>{dummyData.status}</div>
				</div>
				<div className='grid grid-cols-3'>
					<div><span className='text-gray-600'>Status Update Date:</span><br/> {dummyData.status_update_date}</div>
					<div className='text-gray-600 justify-self-end'><span>Resolution Time:</span><br/> {dummyData.resolution_time}</div>
				</div>
			</div>
		</div>
    )
}
export default MainBody;