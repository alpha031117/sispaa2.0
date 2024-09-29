import React from 'react';

const DashboardB = () => {


    return (
        <div className='w-[60rem]'>
            <div className='lato-bold text-xl'>Recent Complaints</div>
            <div className='grid grid-cols-[1fr_2fr_2fr_1fr_1fr] justify-items-center gap-y-4'>
              <div className='text-gray-500'></div>
              {/* <div className='text-gray-500'>Case ID</div> */}
              <div className='text-gray-500'>Complain Title</div>
              <div className='text-gray-500'>Date</div>
              <div className='text-gray-500'>Status</div>
              <hr className='col-span-5 w-full border-t border-gray-300' />
            
              {/* Dummy Data */}
              <div className='text-sm'>1</div>
              {/* <div className='text-sm'>1010000023456</div> */}
              <div className='text-sm'>Electric Pole Spoiled</div>
              <div className='text-sm'>12/12/2021</div>
              <div className='text-sm text-blue-500'>Pending</div>
              <hr className='col-span-5 w-full border-t border-gray-300' />
            
              <div className='text-sm'>2</div>
              {/* <div className='text-sm'>1010000023456</div> */}
              <div className='text-sm'>Electric Pole Spoiled</div>
              <div className='text-sm'>13/12/2021</div>
              <div className='text-sm text-green-500'>Resolved</div>
              <hr className='col-span-5 w-full border-t border-gray-300' />

              <div className='text-sm'>3</div>
              {/* <div className='text-sm'>1010000023456</div> */}
              <div className='text-sm'>Electric Pole Spoiled</div>
              <div className='text-sm'>13/12/2021</div>
              <div className='text-sm text-green-500'>Resolved</div>
              <hr className='col-span-5 w-full border-t border-gray-500' />
            </div>

            <hr className='pt-[1rem]'/>
        </div>
    )
}
export default DashboardB;