import React from 'react'

const CheckoutDetails = () => {
  return (
        <div className='px-5 sm:px-10 max-w-[720px] m-auto mt-3'>
            <div className='p-3 sm:p-5 rounded-xl shadow-md border'>
                <h1 className='font-bold text-[14px] mb-3 text-[#97073B]'>PAYMENT METHOD</h1>
                <form action="">
                    <div className='mb-2 pb-2 border-b flex justify-start items-center'>
                        <input type="radio" name="method" className='mr-2' />
                        <span className='font-semibold text-[14px] text-[#97073B]'>CREDIT / DEBIT / UPI</span>
                    </div>
                    <div className='mb-2 pb-2 border-b flex justify-start items-center'>
                        <input type="radio" name="method" className='mr-2' />
                        <span className='font-semibold text-[14px] text-[#97073B]'>COD</span>
                    </div>
                </form>
            </div>
            <div className='w-full text-center my-5'>
                <a href="/placed" className='w-full block bg-[#F44336] py-2 px-5 text-[16px] font-bold text-white rounded-md'>PLACE ORDER</a>
            </div>    
        </div>
    )
}

export default CheckoutDetails