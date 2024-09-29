'use client';

import React from 'react';
import MainBodyPage from './_components/mainBody';
import RightPanelPage from './_components/rightPanel';
import { dummyData } from '../_shareDummyData';
import { useParams } from 'next/navigation';

const TrackingStatus = () => {
    const params = useParams();
    const { ID } = params as { ID: string };

    dummyData.ID = ID;

    return (
        <div className='p-4'>
            {/* <Breadcrumb /> */}
			<div className='flex flex-row justify-between'>
				<div className='w-3/5 '>
					<MainBodyPage dummyData={dummyData}/>
				</div>
				<div className='w-2/5'>
					<RightPanelPage dummyData={dummyData}/>
				</div>
			</div>
        </div>
    )
}
export default TrackingStatus;