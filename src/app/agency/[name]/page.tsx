'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
// import Breadcrumb from '@/components/breadcrumb';
import Link from 'next/link';

type PostFeedType = {
    ID: number;
    agency: string;
    posted_date: string;
    post_details: string;
}

const dummyPostData: PostFeedType[] = [
    {
        ID: 1,
        agency: 'Jabatan Keselamatan Jalan Raya',
        posted_date: '2021-10-01',
        post_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        ID: 2,
        agency: 'Jabatan Alam Sekitar',
        posted_date: '2021-10-01',
        post_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]

const EachAgencyPage = () => {
    const { name } = useParams() as { name: string };

    // Change %20 to space
    const formattedName = name.replace(/%20/g, ' ');


    return (
            <div className='p-4'>
                {/* <Breadcrumb /> */}

                <div className='grid grid-cols-1 gap-y-12 justify-items-center'>
                    {/* Hero */}
                    <div className='flex flex-col items-center gap-y-4'>
                        <Image src={`/images/Jabatan Keselamatan Jalan Raya.png`} alt="Agency" width={200} height={200} />
                        <div className='text-2xl'>{formattedName}</div>
                    </div>

                    {/* Post Feed */}
                    <div className='w-1/2 flex flex-col items-center'>
                        <div className='text-xl lato-semibold'>Post Feeds</div>
                        <div className='border border-gray-300 rounded-md shadow-lg'>
                            {dummyPostData.map((post, index) => (
                                <>
                                    <Link href={`/feeds#${post.ID}`}>
                                        <div key={index} className='p-4 w-full'>
                                            <div className='flex flex-row justify-between items-center'>
                                                <div className='text-lg'>{post.agency}</div>
                                                <div className='text-sm text-gray-500'>{post.posted_date}</div>
                                            </div>
                                    
                                                <div className='text-xs line-clamp-2 w-4/5 pl-2'>{post.post_details}</div>
                                        </div>
                                    </Link>
                                    <hr className='text-gray-700 w-4/5 mx-auto'/>
                                </>
                            ))}
                            <Link href={'/feeds'} className='w-fit'>
                                <div className='relative top-3 mx-auto w-fit rounded-xl bg-accent_blue py-1 px-2 text-white'>
                                    Show all posts →
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Complain Management KPI */}
                    <div className='grid grid-cols-[2fr,1fr,1fr,1fr,1fr] w-1/2 gap-y-8 justify-items-center'>
                       {/* Header */}
                       <div></div>
                       <div>General</div>
                       <div>Infrastructure</div>
                       <div>Service</div>
                       <div>Security</div>

                       {/*In Investigation */}
                        <div className='text-lg justify-self-start flex items-center gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <div className='inline-block'>
                                <div className='flex flex-col space-y-[-8px]'>
                                    <div>In Investigation</div>
                                    <div className='text-green-500'>+7 <span className='text-xs'>last 24 hrs</span></div>
                                </div>
                            </div>
                        </div>
                        <div>9 <span className='text-green-500'>+2</span></div>
                        <div>9 <span className='text-green-500'>+2</span></div>
                        <div>9 <span className='text-green-500'>+2</span></div>
                        <div>9 <span className='text-green-500'>+1</span></div>

                        {/* Resolved */}
                        <div className='text-lg justify-self-start flex items-center gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            <div className='inline-block'>
                                <div className='flex flex-col space-y-[-8px]'>
                                    <div>Resolved</div>
                                    <div className='text-green-500'>+9 <span className='text-xs'>last 24 hrs</span></div>
                                </div>
                            </div>
                        </div>
                        <div>9 <span className='text-green-500'>+2</span></div>
                        <div>9 <span className='text-green-500'>+3</span></div>
                        <div>9 <span className='text-green-500'>+2</span></div>
                        <div>9 <span className='text-green-500'>+2</span></div>
                    </div>
                </div>
            </div>
    )
}
export default EachAgencyPage;