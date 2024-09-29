'use client';

import React from 'react'
import { useParams, usePathname } from 'next/navigation';
import MainBody from './_components/mainBody';
import RightPanel from './_components/rightPanel';
import { dummyData } from './_shareDummyData';



const ComplaintDetailPage = () => {
	const params = useParams();
	const { ID } = params as { ID: string };
	const pathname = usePathname();


	dummyData.ID = ID;


	return (
		<div className='p-4'>
		{/* <Breadcrumb /> */}
			<div className='flex flex-row justify-between'>
				<div className='w-3/5 '>
					<MainBody dummyData={dummyData} pathname={pathname}/>
				</div>
				<div className='w-2/5'>
					<RightPanel dummyData={dummyData} pathname={pathname}/>
				</div>
			</div>
		</div>
	)
}

export default ComplaintDetailPage;