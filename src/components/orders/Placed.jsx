import React from 'react'
import { checkmark } from '../../assets'

const Placed = () => {
  return (
        <div className='px-5 sm:px-10 max-w-[720px] m-auto mt-3'>
            <div className='px-20 py-10 flex justify-center items-center w-[70%] sm:w-[50%] m-auto'>
                <img src={checkmark} alt="placed" className='w-full'/>
            </div>
            <h1 className='font-bold text-[18px] mb-2 text-center text-[#97073B]'>CONGRATULATIONS!</h1>
            <h1 className='font-normal text-[12px] w-[70%] m-auto text-center text-[#97073B]'>You successfully maked a order, enjoy our service!</h1>
            <div className='w-full text-center mt-20'>
                <a href="/orders" className='w-full block bg-[#F44336] py-2 px-5 text-[16px] font-bold text-white rounded-md'>TRACK ORDER</a>
            </div>    
        </div>
    )
}

export default Placed