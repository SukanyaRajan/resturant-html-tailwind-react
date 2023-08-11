import React from 'react'
import { arrow } from '../../assets'

const AccountNav = () => {
  return (
        <div className='h-[70px] px-5 sm:px-10 flex justify-start items-center shadow-md'>
            <div className='w-[20px] sm:w-[30px]'>
                <a href="/">
                    <img src={arrow} alt="arrow" className='w-[16px] sm:w-[24px]'/>
                </a>
            </div>
            <div className='w-full text-center'>
                <h1 className='font-bold text-[18px] sm:text-[24px] text-[#97073B]'>Account</h1>
            </div>
        </div>
    )
}

export default AccountNav