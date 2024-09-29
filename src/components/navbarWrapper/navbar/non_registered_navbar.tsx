import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NonRegisteredNavbar = () => {

    return (
        <div className='bg-accent_blue h-[4rem] flex flex-row items-center px-4 justify-between text-white'>
            <div className='flex flex-row justify-between gap-x-20 items-center'>
                <div className='flex flex-row gap-x-4'>
                    {/* <KPLBImage /> */}
                    <AgencyImage />
                    <div className='flex flex-col'>
                        <div className='lato-bold'>
                            SISPAA 2.0
                        </div>
                        <div className='lato-thin text-xs'>
                            Sistem Pengurusan Aduan Awam Melaka
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

const AgencyImage = () => {
    return (
        <div className='relative w-[50px] h-[42px]'>
            <Image 
                src='/images/melaka_sispaa_icon.png' 
                alt='SelangorSISPAA' 
                fill={true} />
        </div>
    )
}