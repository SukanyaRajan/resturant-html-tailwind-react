import React from 'react'

const AddressDetails = () => {
  return (
    <div className='px-5 sm:px-10 max-w-[720px] m-auto mt-4'>
      <div className='p-3 sm:p-5 rounded-md shadow-md border mb-4'>
        <h1 className='font-semibold text[14px] pb-2 border-b mb-3 text-[#97073B]'>DELIVER TO</h1>
        <div className='flex justify-between items-center'>
          <h3 className='text-[14px] font-normal w-[70%] sm:w-[80%] text-[#97073B]'>
            Kuttippuram, Kerala 679571, India, Home Address
          </h3>
          <a href="/address" className='w-[30%] sm:w-[20%] bg-[#47cdf2] py-2 px-5 text-[12px] font-bold text-white rounded-md '>CHANGE</a>
        </div>
      </div>
      <div className='w-full text-center mb-10'>
        <a href="/checkout" className='w-full block bg-[#F44336] py-2 px-5 text-[16px font-bold text-white rounded-md]'>COUNTINUE</a>
      </div>
    </div>
  )
}

export default AddressDetails