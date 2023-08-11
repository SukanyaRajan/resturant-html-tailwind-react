import React from 'react'

const CartItems = () => {
  return (
    <div className='px-5 sm:px-10 max-w-[720px] m-auto'>
      <div className='p-3 sm:p-5 rounded-md shadow-md border'>
        <h1 className='font-semibold text-[14px] pb-2 border-b mb-3 text-[#97073B]'>ITEMS IN CART</h1>
        <div className='mb-2 border-b pb-2 flex justify-between items-center'>
          <div className='w-[70%]'>
            <h1 className='font-semibold text-[14px] text-[#97073B]'>Peri Peri Al Faham</h1>
            <h1 className='font-bold text-black text-[14px]'>₹ 180</h1>
          </div>
          <div className='w-[30%]'>
            <form action="" className='flex justify-start'>
              <a href="#" className='p-2 w-[30px] text-white bg-[#47cdf2] rounded-l-lg'>-</a>
              <input type="number" value="1" name="qty" disabled className='p-2 border-b border-t w-[30px]' />
              <a href="#" className='p-2 w-[30px] text-white bg-[#47cdf2] rounded-r-lg'>+</a>
            </form>
          </div>
        </div>
        <div className='mb-2 border-b pb-2 flex justify-between items-center'>
          <div className='w-[70%]'>
            <h1 className='font-semibold text-[14px] text-[#97073B]'>Biriyani Full</h1>
            <h1 className='font-bold text-black text-[14px]'>₹ 150</h1>
          </div>
          <div className='w-[30%]'>
            <form action="" className='flex justify-start'>
              <a href="#" className='p-2 w-[30px] text-white bg-[#47cdf2] rounded-l-lg'>-</a>
              <input type="number" value="1" name="qty" disabled className='p-2 border-b border-t w-[30px]'/>
              <a href="#" className='p-2 w-[30px] text-white bg-[#47cdf2] rounded-r-lg'>+</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems