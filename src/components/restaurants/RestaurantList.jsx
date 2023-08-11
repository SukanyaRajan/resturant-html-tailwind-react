import React from 'react'
import { clock, discount, rest1, rest2, rest3, star } from '../../assets'

const RestaurantList = () => {
  return (
        <div className='px-5 sm:px-10 mt-5 sm:mt-10 mb-5'>
        <h1 className='text-[18px] font-bold mb-3 sm:mb-5 text-[#97073B]'>Available Restaurants</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5'>
            <div className='p-3 sm:p-5 md:p-7 border rounded-md flex justify-between items-start'>
                <div className='w-[30%] sm:[24%] mr-8'>
                    <a href="/restaurant">
                        <img src={ rest1 } alt="image" className='w-full rounded-md shadow-lg'/>
                    </a>
                </div>
                <div className='w-[70%] sm:w-[73%]'>
                    <h1 className='font-bold mb-1 text-[16px] text-[#97073B]'><a href="/restaurant">Manama Restaurant</a></h1>
                    <p className='font-normal mb-3 text-[12px] text-[#C57504]'>Tasty and Healthy Foods</p>
                    <div className='flex justify-start items-center'>
                        <img src={ star } alt="image" className='w-[16px] mr-2'/>
                        <p className='text-[14px] font-bold mr-5 text-[#97073B]'>4.2</p>
                        <img src={ clock } alt="image" className='w-[16px] mr-2'/>
                        <p className='text-[14px] font-bold mr-5 text-[#97073B]'>30 mins</p>
                    </div>
                    <div className='flex justify-start items-center mt-3'>
                        <img src={ discount } alt="image" className='w-[14px] mr-2'/>
                        <p className='text-[12px] text-[#F44336] font-bold mr-5'>**UPTO 50% DISCOUNT</p>
                    </div>
                </div>
            </div>
            <div className='p-3 sm:p-5 md:p-7 border rounded-md flex justify-between items-start'>
                <div className='w-[30%] sm:[24%] mr-8'>
                    <a href="/restaurant">
                        <img src={ rest2 } alt="image" className='w-full rounded-md shadow-lg'/>
                    </a>
                </div>
                <div className='w-[70%] sm:w-[73%]'>
                    <h1 className='font-bold mb-1 text-[16px] text-[#97073B]'><a href="/restaurant">Pizza Hut</a></h1>
                    <p className='font-normal mb-3 text-[12px] text-[#C57504]'>Tasty and Healthy Foods</p>
                    <div className='flex justify-start items-center'>
                        <img src={ star } alt="image" className='w-[16px] mr-2'/>
                        <p className='text-[14px] font-bold mr-5 text-[#97073B]'>4.2</p>
                        <img src={ clock } alt="image" className='w-[16px] mr-2'/>
                        <p className='text-[14px] font-bold mr-5 text-[#97073B]'>30 mins</p>
                    </div>
                    <div className='flex justify-start items-center mt-3'>
                        <img src={ discount } alt="image" className='w-[14px] mr-2'/>
                        <p className='text-[12px] text-[#F44336] font-bold mr-5'>**UPTO 50% DISCOUNT</p>
                    </div>
                </div>
            </div>
            <div className='p-3 sm:p-5 md:p-7 border rounded-md flex justify-between items-start'>
                <div className='w-[30%] sm:[24%] mr-8'>
                    <a href="/restaurant">
                        <img src={ rest3 } alt="image" className='w-full rounded-md shadow-lg'/>
                    </a>
                </div>
                <div className='w-[70%] sm:w-[73%]'>
                    <h1 className='font-bold mb-1 text-[16px] text-[#97073B]'><a href="/restaurant">Biriyani Center</a></h1>
                    <p className='font-normal mb-3 text-[12px] text-[#C57504]'>Tasty and Healthy Foods</p>
                    <div className='flex justify-start items-center'>
                        <img src={ star } alt="image" className='w-[16px] mr-2'/>
                        <p className='text-[14px] font-bold mr-5 text-[#97073B]'>4.2</p>
                        <img src={ clock } alt="image" className='w-[16px] mr-2'/>
                        <p className='text-[14px] font-bold mr-5 text-[#97073B]'>30 mins</p>
                    </div>
                    <div className='flex justify-start items-center mt-3'>
                        <img src={ discount } alt="image" className='w-[14px] mr-2'/>
                        <p className='text-[12px] text-[#F44336] font-bold mr-5'>**UPTO 50% DISCOUNT</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RestaurantList