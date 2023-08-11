import React from 'react';
import { bag, home, search, user } from '../assets';

const FooterNav = () => {
  return (
    <div className='flex sm:hidden mt-[100px]'>
      <div className='fixed w-full bottom-0'>
        <div className='p-2 h-[70px] bg-white border rounded-xl m-3 flex justify-between items-center'>
          <div className='w-[24%]'>
            <a href="/" className='flex justify-center'><img src={ home } alt="image" className='w-1/4 ss:w-1/6 block'/></a>
            <h3 className='text-center font-semibold text-[#97073B]'><a href="/" className='text-[10px]'>Home</a></h3>
          </div>

         <div className='w-[24%]'>
            <a href="/search" className='flex justify-center'><img src={ search } alt="image" className='w-1/4 ss:w-1/6 block'/></a>
            <h3 className='text-center font-semibold text-[#97073B]'><a href="/search" className='text-[10px]'>Search</a></h3>
         </div>

         <div className='w-[24%]'>
            <a href="/cart" className='flex justify-center'><img src={ bag } alt="image" className='w-1/4 ss:w-1/6 block'/></a>
            <h3 className='text-center font-semibold text-[#97073B]'><a href="/cart" className='text-[10px]'>Cart</a></h3>
         </div>

         <div className='w-[24%]'>
            <a href="/account" className='flex justify-center'><img src={ user } alt="image" className='w-1/4 ss:w-1/6 block'/></a>
            <h3 className='text-center font-semibold text-[#97073B]'><a href="/account" className='text-[10px]'>Account</a></h3>
         </div>
        </div>
      </div>
    </div>
  )
}

export default FooterNav