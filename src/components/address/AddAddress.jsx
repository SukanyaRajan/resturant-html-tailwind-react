import React from 'react'

const AddAddress = () => {
  return (
        <div className='px-5 sm:px-10 max-w-[720px] m-auto mt-5 sm:mt-10 h-screen'>
            <div className='h-2/6 bg-gray-300 rounded-xl'></div>
            <form action="" className='mt-3'>
                <p className='font-semibold text[16px] mb-1 text-[#97073B]'>Address</p>
                <input type="text" value="kuttippuram kerala india 676561" disabled className='w-full py-2 px-5 rounded-md bg-white border-2' />
                <p className='font-semibold text-[16px] mb-1 mt-3 text-[#97073B]'>Appartment</p>
                <input type="text" className='outline-none w-full py-2 px-5 rounded-md bg-white border-2' />
                <p className='font-semibold text-[16px] mb-1 mt-3 text-[#97073B]'>Landmark</p>
                <input type="text" className='outline-none w-full py-2 px-5 rounded-md bg-white border-2' />
                <p className='font-semibold text-[16px] mb-1 mt-3 text-[#97073B]'>Label as</p>
                <div className='flex justify-between items-center mb-5'>
                    <a href="#" className='w-[30%] bg-[#F44336] py-2 px-5 text-[16px] font-bold text-white rounded-md'>HOME</a>
                    <a href="#" className='w-[30%] bg-white py-2 px-5 text-[16px] font-bold rounded-md text-[#97073B]'>WORK</a>
                    <a href="#" className='w-[30%] bg-white py-2 px-5 text-[16px] font-bold rounded-md text-[#97073B]'>OTHER</a>
                </div>
                <input type="submit" value="SAVE ADDRESS" className='w-full bg-[#F44336] py-2 px-5 text-[16px] font-bold text-white rounded-md'/>
            </form>
        </div>
    )
}

export default AddAddress