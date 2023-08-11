import React from 'react'
import { non, rest1, veg } from '../../assets'

const RestaurantItems = () => {
  return (
        <div className='p-5 sm:p-10 max-w-[720px] m-auto text-[#97073B]'>
            <div className='border-b-4 mt-5'>
                <h1 className='font-bold text-[18px] mb-5 sm:mb-10 text-[#97073B]'>AL FAHAM</h1>
                <div className='flex justify-start items-start mt-3 pb-3 border-b border-gray-200'>
                    <div className='w-full'>
                        <img src={ non } alt="image" className='w-[12px]'/>
                        <h1 className='font-bold text-[16px] mb-1 text-[#97073B]'>Peper Al Faham</h1>
                        <h3 className='font-semibold text-[16px] mb-4'>₹ 180</h3>
                        <a href="#" className='bg-[#47cdf2] border-2 py-1 px-3 text-white rounded-md text-[12px] font-semibold'>ADD</a>
                    </div>
                    <div className='w-[30%] mr-3'>
                        <img src={ rest1 } alt="image" className='w-full rounded-md shadow-md'/>
                    </div>
                </div>
                <div className='flex justify-start items-start mt-3 pb-3 border-b border-gray-200'>
                    <div className='w-full'>
                        <img src={ non } alt="image" className='w-[12px]'/>
                        <h1 className='font-bold text-[16px] mb-1 text-[#97073B]'>Normal Al Faham</h1>
                        <h3 className='font-semibold text-[16px] mb-4'>₹ 150</h3>
                        <a href="#" className='bg-[#47cdf2] border-2 py-1 px-3 text-white rounded-md text-[12px] font-semibold'>ADD</a>
                    </div>
                    <div className='w-[30%] mr-3'>
                        <img src={ rest1 } alt="image" className='w-full rounded-md shadow-md'/>
                    </div>
                </div>
                <div className='flex justify-start items-start mt-3 pb-3 border-b border-gray-200'>
                    <div className='w-full'>
                        <img src={ non } alt="image" className='w-[12px]'/>
                        <h1 className='font-bold text-[16px] mb-1 text-[#97073B]'>Peri Peri Al Faham</h1>
                        <h3 className='font-semibold text-[16px] mb-4'>₹ 180</h3>
                        <a href="#" className='bg-[#47cdf2] border-2 py-1 px-3 text-white rounded-md text-[12px] font-semibold'>ADD</a>
                    </div>
                    <div className='w-[30%] mr-3'>
                        <img src={ rest1 } alt="image" className='w-full rounded-md shadow-md'/>
                    </div>
                </div>
            </div>
            <div className='border-b-4 mt-5'>
                <h1 className='font-bold text-[18px] mb-5 sm:mb-10'>BIRIYANI</h1>
                <div className='flex justify-start items-start mt-3 pb-3 border-b border-gray-200'>
                    <div className='w-full'>
                        <img src={ non } alt="image" className='w-[12px]'/>
                        <h1 className='font-bold text-[16px] mb-1 text-[#97073B]'>Chicken Biriyani</h1>
                        <h3 className='font-semibold text-[16px] mb-4'>₹ 160</h3>
                        <a href="#" className='bg-[#47cdf2] border-2 py-1 px-3 text-white rounded-md text-[12px] font-semibold'>ADD</a>
                    </div>
                    <div className='w-[30%] mr-3'>
                        <img src={ rest1 } alt="image" className='w-full rounded-md shadow-md'/>
                    </div>
                </div>
                <div className='flex justify-start items-start mt-3 pb-3 border-b border-gray-200'>
                    <div className='w-full'>
                        <img src={ non } alt="image" className='w-[12px]'/>
                        <h1 className='font-bold text-[16px] mb-1 text-[#97073B]'>Beef Biriyani</h1>
                        <h3 className='font-semibold text-[16px] mb-4'>₹ 180</h3>
                        <a href="#" className='bg-[#47cdf2] border-2 py-1 px-3 text-white rounded-md text-[12px] font-semibold'>ADD</a>
                    </div>
                    <div className='w-[30%] mr-3'>
                        <img src={ rest1 } alt="image" className='w-full rounded-md shadow-md'/>
                    </div>
                </div>
                <div className='flex justify-start items-start mt-3 pb-3 border-b border-gray-200'>
                    <div className='w-full'>
                        <img src={ veg } alt="image" className='w-[12px]'/>
                        <h1 className='font-bold text-[16px] mb-1 text-[#97073B]'>Veg Biriyani</h1>
                        <h3 className='font-semibold text-[16px] mb-4'>₹ 120</h3>
                        <a href="#" className='bg-[#47cdf2] border-2 py-1 px-3 text-white rounded-md text-[12px] font-semibold'>ADD</a>
                    </div>
                    <div className='w-[30%] mr-3'>
                        <img src={ rest1 } alt="image" className='w-full rounded-md shadow-md'/>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default RestaurantItems