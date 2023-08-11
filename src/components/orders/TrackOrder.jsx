import React from 'react'
import { man } from '../../assets'

const TrackOrder = () => {
  return (
        <div className='px-5 sm:px-10 max-w-[720px] m-auto mt-5 sm:mt-10 h-screen'>
            <div className='h-3/6 bg-gray-300 rounded-xl'></div>
            <div className='p-3 sm:p-5 rounded-xl shadow-md border mt-4'>
                <div className='w-[15%]'>
                    <img src={man} alt="image" className='w-full rounded-md' />
                </div>
                <div className='w-[82%]'>
                    <h1 className='font-normal mb-1 text-[12px] text-[#97073B]'>Delivery agent Details</h1>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold text-[14px] text-[#97073B]'>Manu</h1>
                        <a href="#" className='bg-[#47cdf2] py-2 px-3 text-[12px] font-bold text-white rounded-md'>CALL</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackOrder