import React from 'react'
import { cart } from '../../assets'

const CartDetails = () => {
  return (
        <div className='mt-[100px] max-w-[720px] m-auto'>
            <div className='fixed w-full sm:w-[720px] m-auto bottom-0'>
                <div className='py-2 px-2 h-[50px] bg-[#F44336] border rounded-xl m-3 flex justify-between items-center'>
                    <div>
                        <h1 className='text-[14px] font-semibold mr-2 text-white'>1 Item | ₹ 180</h1>
                    </div>
                    <div className='flex justify-end items-center'>
                        <h1 className='text-[14px] font-semibold mr-2 text-white'>
                            <a href="/cart">View Cart</a>
                        </h1>
                        <img src={ cart } alt="cart" className='w-[18px]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDetails