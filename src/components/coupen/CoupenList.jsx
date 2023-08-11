import React from 'react'

const CoupenList = () => {
  return (
        <div className='px-5 sm:px-10 max-w-[720px] m-auto mt-5 sm:mt-10'>
            <div className='p-3 sm:p-5 rounded-md shadow-md border flex justify-between items-start mb-3'>
                <div>
                    <h1 className='font-semibold text-[16px] pb-5 SBI40N'></h1>
                    <h3 className='text-[14px] font-bold text-[#F44336] pb-2 border-b'>
                        Maximum discount upto ₹ 120 on orders above ₹ 200
                    </h3>
                </div>
                <div>
                    <a href="#" className='w-[30%] sm-[20%] bg-[#47cdf2] py-2 px-5 text-[12px] font-bold text-white rounded-md'>APPLY</a>
                </div>
            </div>
            <div className='p-3 sm:p-5 rounded-md shadow-md border flex justify-between items-start mb-3 grayscale'>
                <div>
                    <h1 className='font-semibold text-[16px] pb-5 '>AXIS30</h1>
                    <h3 className='text-[14px] text-[#97073B] font-bold b-2 border-b'>
                        Maximum discount upto ₹ 50 on orders above ₹ 500
                    </h3>
                </div>
                <div>
                    <a href="#" className='w-[30%] sm-[20%] bg-[#47cdf2] py-2 px-5 text-[12px] font-bold text-white rounded-md'>APPLY</a>
                </div>
            </div> 
        </div>
    )
}

export default CoupenList