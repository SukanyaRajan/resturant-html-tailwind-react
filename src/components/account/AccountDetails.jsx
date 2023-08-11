import React from 'react'
import { address, cart, logout, man } from '../../assets'

const AccountDetails = () => {
  return (
        <div>
            <div className='p-3 sm:p-6 border-2 rounded-xl grid grid-cols-4 gap-5 mb-4'>
                <div className='col-span-1'>
                    <img src={man} alt="user" className='w-full' />
                </div>
                <div className='col-span-3 text-[#97073B]'>
                    <h1 className='text-[14px] font-semibold mb-2'>Manu</h1>
                    <h1 className='text-[14px] font-semibold mb-2'>+91 9846735628</h1>
                    <h1 className='text-[14px] font-semibold mb-2'>manu@gmail.com</h1>
                </div>
            </div>
            <div className='px-10'>
                <div className='px-5 py-1 bg-[#47cdf2] border-2 rounded-xl flex justify-start items-center'>
                    <div className='w-[24px] sm:w-[32px] mr-3'>
                        <img src={address} alt="user" className='w-full p-1'/>
                    </div>
                    <h1 className='text-[16px] text-white font-semibold'>
                        <a href="/address">Manage Addresses</a>
                    </h1>
                </div>
                <div className='px-5 py-1 bg-[#47cdf2] border-2 rounded-xl flex justify-start items-center mt-4'>
                    <div className='w-[24px] sm:w-[32px] mr-3'>
                        <img src={cart} alt="user" className='w-full p-1'/>
                    </div>
                    <h1 className='text-[16px] text-white font-semibold'>
                        <a href="/orders">Orders</a>
                    </h1>
                </div>
                <div className='px-5 py-1 bg-[#47cdf2] border-2 rounded-xl flex justify-start items-center mt-4'>
                    <div className='w-[24px] sm:w-[32px] mr-3'>
                        <img src={logout} alt="user" className='w-full p-1'/>
                    </div>
                    <h1 className='text-[16px] text-white font-semibold'>
                        <a href="/login">Logout</a>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default AccountDetails