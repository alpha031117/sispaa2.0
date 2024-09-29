import React from 'react';
import { ComplatDetailType } from '../../_shareDummyData';

const RightPanelPage = ({dummyData}: {dummyData: ComplatDetailType}) => {

    return (
        <div className='flex flex-col items-center gap-y-12'>
            {/* Complaint Report */}
            <div className='p-4 w-[20rem] rounded-md shadow-xl bg-gray-100'>
                <div>Complaint Report</div>
                <div className='flex items-center justify-center m-3 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-block text-red-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <span className='inline-block'>Download Report</span>
                </div>
            </div>

            {/* Remark */}
            <div className='p-4 w-[20rem] rounded-md shadow-xl bg-gray-100'>
                <div>Remarks</div>
                <div className='m-3 lato-thin text-sm'>{dummyData.remarks}</div>
            </div>
        </div>
    )
}
export default RightPanelPage;