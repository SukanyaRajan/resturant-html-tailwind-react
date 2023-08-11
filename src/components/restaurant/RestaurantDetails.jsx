import React from 'react'
import { clock, discount, rest1, star } from '../../assets'

const RestaurantDetails = () => {
  return (
        <div className='p-5 sm:p-10 max-w-[720px] m-auto'>
            <div className='flex justify-between items-start shadow-md p-3 rounded-md'>
                <div className='w-[30%] sm:[24%] mr-4'>
                    <img src={ rest1 } alt="star" className='w-full rounded-md shadow-lg'/>
                </div>
                <div className='w-[70%] sm:w-[73%]'>
                    <h1 className='font-bold mb-1 text-[16px] text-[#97073B]'>Manama Restaurant</h1>
                    <p className='font-normal mb-3 text-[12px] text-[#97073B]'>Tasty and healthy foods</p>
                    <div className='flex justify-start items-center'>
                        <img src={ star } alt="star" className='w-[16px] mr-2'/>
                        <p className='text-[14px] font-bold mr-5 text-[#97073B]'>4.2</p>
                        <img src={ clock } alt="clock" className='w-[16px] mr-2'/>
                        <p className='text-[14px] font-bold mr-5 text-[#97073B]'>30 mins</p>
                    </div>
                    <div className='flex justify-start items-center mt-3'>
                        <img src={ discount } alt="discount" className='w-[14px] mr-2'/>
                        <p className='text-[12px] text-[#F44336] font-bold mr-5'>**UPTO 50% DISCOUNT</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default RestaurantDetails