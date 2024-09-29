'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UserCircleComponent = () => {
    const [renderMenu, setRenderMenu] = useState(false);

    const handleClick = () => {
        setRenderMenu(!renderMenu);
    };

    return (
        <div className='flex flex-row gap-x-2 items-center'>
            <div 
                className='cursor-pointer'
                onClick={handleClick} 
            >
                <UserCircle />
            </div>
            {renderMenu && (
                <div className='absolute right-[1rem] top-[4rem] shadow-lg text-gray-950 text-sm border bg-white rounded-lg overflow-hidden'>
                    <div className='flex flex-col justify-start items-center'>
                        <Link href={'/'}><div className='hover:bg-gray-200 p-2 px-4'>Logout</div></Link>
                        <Link href={'/setting'}><div className='hover:bg-gray-200 p-2 px-4'>Settings</div></Link>
                    </div>
                </div>
            )}
        </div>
    );
};
export default UserCircleComponent;

const UserCircle = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-8">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
        </svg>
    )
}