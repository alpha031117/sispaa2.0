import React from 'react';
import Link from 'next/link';

const DashboardA = () => {


    return (
        <div className='flex flex-row justify-between gap-x-[54px] h-[8rem]'>
            <div className='flex flex-col w-[300px] shadow-lg p-4 rounded-lg bg-secondary_white justify-between'>
                <div className='lato-semibold'>Total Complaints</div>
                <div className='text-gray-500'>11</div>
                <Link href={'/create-complaint'} className='self-end text-sm lato-semibold bg-accent_blue text-white pl-3 pr-7 py-1.5 rounded-md'>+ &nbsp; File a Complaint</Link>
            </div>
            <div className='flex flex-col w-[300px] shadow-lg p-4 rounded-lg bg-secondary_white justify-start gap-y-4'>
                <div className='lato-semibold'>This Week</div>
                <div className='text-blue-500 text-xl ml-4'>2</div>
            </div>
            <div className='flex flex-col w-[300px] shadow-lg p-4 rounded-lg bg-secondary_white justify-start gap-y-4'>
                <div className='lato-semibold'>This Month</div>
                <div className='text-green-500 text-xl ml-4'>5</div>
            </div>
        </div>
    )
}
export default DashboardA;