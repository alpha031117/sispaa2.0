'use client';

import React from 'react';
import { useParams, usePathname } from 'next/navigation';
import MainBody from './_components/mainBody';
import RightPanel from './_components/rightPanel';
import { dummyData } from './_shareDummyData';



const ComplaintDetailPage = () => {
	const params = useParams();
	const { ID } = params as { ID: string };
	const pathname = usePathname();

    // Find the specific complaint based on ID
    const selectedComplaint = dummyData.find(complaint => complaint.ID === ID);

    if (!selectedComplaint) {
        return <div>Complaint not found.</div>;
    }

    return (
        <div className='p-4'>
            {/* Uncomment the Breadcrumb if needed */}
            {/* <Breadcrumb /> */}
            <div className='flex flex-row justify-between'>
                <div className='w-3/5'>
                    <MainBody dummyData={selectedComplaint} pathname={pathname} />
                </div>
                <div className='w-2/5'>
                    <RightPanel dummyData={selectedComplaint} pathname={pathname} />
                </div>
            </div>
        </div>
    );
}

export default ComplaintDetailPage;