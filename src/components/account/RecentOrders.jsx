import React from 'react'
import { rest1 } from '../../assets'

const RecentOrders = () => {
  return (
        <div>
            <h1 className='text-[#97073B] font-bold text-[18px] mb-3 sm:mb-5'>Recent Orders</h1>
            <div className='grid grid-cols-1 gap-5'>
                <div className='p-3 sm:p-5 rounded-xl shadow-md border mb-4 col-span-1'>
                    <div className='flex justify-between items-start mb-2 border-b pb-2'>
                        <div className='w-[15%]'>
                            <img src={rest1} alt="image" className='w-full rounded-md' />
                        </div>
                        <div className='w-[82%]'>
                            <div className='flex justify-between items-center mb-2'>
                                <h1 className='font-bold text-[14px] text-[#97073B]'>Al Faham Full</h1>
                                <h1 className='font-semibold text-[12px] underline '>#164</h1>
                            </div>
                            <h1 className='font-bold text-[12px] '>₹ 330 | 2 items</h1>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="/track" className='bg-[#47cdf2] py-2 px-3 text-[12px] font-bold text-white rounded-md'>TRACK ORDER</a>
                        <h1 className='font-bold text-[12px] text-[#F44336]'>Preparing</h1>
                    </div>
                </div>
                <div className='p-3 sm:p-5 rounded-xl shadow-md border mb-4 col-span-1'>
                    <div className='flex justify-between items-start mb-2 border-b pb-2'>
                        <div className='w-[15%]'>
                            <img src={rest1} alt="image" className='w-full rounded-md'/>
                        </div>
                        <div className='w-[82%]'>
                            <div className='flex justify-between items-center mb-2'>
                                <h1 className='font-bold text-[14px] text-[#97073B]'>Al Faham Full</h1>
                                <h1 className='font-semibold text-[12px] underline'>#164</h1>
                            </div>
                            <h1 className='font-bold text-[12px]'>₹ 330 | 2 items</h1>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="/track" className='bg-[#47cdf2] py-2 px-3 text-[12px] font-bold text-white rounded-md'>TRACK ORDER</a>
                        <h1 className='font-bold text-[12px] text-[#F44336]'>Preparing</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentOrders