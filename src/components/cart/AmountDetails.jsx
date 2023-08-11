import React from 'react'

const AmountDetails = () => {
  return (
    <div className='px-5 sm:px-10 max-w-[720px] m-auto mt-3'>
      <div className='p-3 sm:p-5 rounded-xl shadow-md border'>
        <h1 className='font-bold text-[14px] mb-3 text-[#97073B]'>BILL DETAILS</h1>
        <div className='flex justify-between items-center pb-2 mb-2 border-b'>
          <h1 className='font-normal text-[14px] text-[#97073B]'>Item Total</h1>
          <h1 className='font-normal text-[14px] text-[#97073B]'>₹ 330</h1>
        </div>
        <div className='flex justify-between items-center pb-2 mb-2 border-b'>
          <h1 className='font-normal text-[14px] text-[#97073B]'>Offer Applied</h1>
          <h1 className='font-normal text-[14px] text-[#97073B]'>- ₹ 50</h1>
        </div>
        <div className='flex justify-between items-center pb-2 mb-2 border-b'>
          <h1 className='font-normal text-[14px] text-[#97073B]'>Delivery Charge</h1>
          <h1 className='font-normal text-[14px] text-[#97073B]'>₹ 50</h1>
        </div>
        <div className='flex justify-between items-center pb-2'>
          <h1 className='font-bold text-black text-[14px]'>To Pay</h1>
          <h1 className='font-bold text-black text-[14px]'>₹ 330</h1>
        </div>
      </div>
    </div>
  )
}

export default AmountDetails