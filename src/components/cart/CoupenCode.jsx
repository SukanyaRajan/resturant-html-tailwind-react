import React from 'react'
import { discount } from '../../assets'

const CoupenCode = () => {
  return (
    <div className='px-5 sm:px-10 max-w-[720px] m-auto mt-3'>
      <div className='p-3 sm:p-5 rounded-md shadow-md border'>
        <form action="" className='flex justify-between items-center mb-3 border-b pb-3'>
          <input type="text" placeholder='Coupen Code' className='w-[70%] sm:w-[80%] outline-none px-5 py-2' />
          <input type="submit" value="APPLY" className='w-[30%] sm:w-[20%] bg-[#47cdf2] py-2 px-5 text-[12px] font-bold text-white rounded-md' />
        </form>
        <div className='flex justify-start items-center'>
          <div className='w-[16px] mr-2'>
            <img src={ discount } alt="image" className='w-full block' />
          </div>
          <div>
            <a href="/offers" className='text-[14px] font-bold text-[#F44336]'>View All Offers</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoupenCode