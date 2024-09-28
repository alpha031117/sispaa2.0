import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NonRegisteredNavbar = () => {

    return (
        <div className='bg-accent_blue h-[4rem] flex flex-row items-center px-4 justify-between rounded-b-lg text-white'>
            <div className='flex flex-row justify-between gap-x-20 items-center'>
                <div className='flex flex-row gap-x-4'>
                    <KPLBImage />
                    <div className='flex flex-col'>
                        <div className='lato-bold'>
                            SISPAA 2.0
                        </div>
                        <div className='lato-thin text-xs'>
                            Sistem Pengurusan Aduan Awam
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between gap-x-16'>
                    <Link href="/feeds">Feeds</Link>
                </div>
            </div>
            <div className='flex flex-row gap-x-8 items-center'>
                <div>
                    EN/MY
                </div>
            </div>
        </div>
    )
}
export default NonRegisteredNavbar;





// This is KPLB image, custom function because of the width and height issue, as next/Image give issue for resolution when small size
const KPLBImage = () => {
    return (
        <div className='relative w-[56px] h-[42px]'>
            <Image 
                src='/images/kplb.png' 
                alt='KPLB' 
                fill={true} />
        </div>
    )
}

const UserCircle = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-8">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
        </svg>
    )
}