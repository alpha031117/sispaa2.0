import React from 'react';
import Image from 'next/image';

const DarkGlassBiroImage = () => {
    const imageURL = '/images/biro_page_background.png';
    const iconURL = '/images/biro_sispa_icon.png';

    return (
        <div className="relative w-[1000px] h-[206px]">
            <Image
                src={imageURL}
                alt="Dark Glass Biro Image"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md rounded-lg border border-gray-200 shadow-lg"></div> */}

            <div className='relative'>
                <div className='absolute left-[390px] top-[36px] text-[52px] bebas-neue-regular title-standout-text'>
                    sistem pengurusan aduan
                </div>
                <div className='absolute left-[520px] top-[95px] text-2xl italic font-semibold smartSelangor-standout-text'>
                    <span className='text-blue-400'>#Smart</span><span className='text-red-600'>Selangor</span>
                </div>
                <div className='absolute right-[60px] top-[10px]'>
                    <Image
                        src={iconURL}
                        alt="Biro Sispa Icon"
                        width={128}
                        height={128}
                    />
                </div>
            </div>
        </div>
    )
}
export default DarkGlassBiroImage;