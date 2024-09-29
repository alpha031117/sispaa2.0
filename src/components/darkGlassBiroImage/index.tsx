import React from 'react';
import Image from 'next/image';

const DarkGlassBiroImage = () => {
    const imageURL = '/images/biro_main_bg.jpg';
    const iconURL = '/images/kplb.png';

    return (
        <div className="relative w-full h-[206px]">
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
                <div className='text-white absolute left-[390px] top-[36px] text-[52px] bebas-neue-regular title-standout-text'>
                    sistem pengurusan aduan
                </div>
                <div className='absolute left-[390px] top-[95px] text-2xl italic font-semibold smartSelangor-standout-text'>
                    <span className='text-blue-400'>Biro </span><span className='text-red-600'>Pengaduan Awam</span>
                </div>
                <div className='absolute left-[200px] top-[36px]'>
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