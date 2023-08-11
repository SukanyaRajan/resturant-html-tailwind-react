import React from 'react'
import { search } from '../../assets'

const LocationSearch = () => {
  return (
        <div className='px-5 sm:px-10 py-5 sm:py-10 max-w-[720px] m-auto'>
            <div className='py-3 px-5 rounded-xl border-2 flex justify-between items-center'>
                <input type="text" placeholder='Search location' className='w-full outline-none plcaholder:text-[#515151] placeholder:text-[16px]' />
                <div className='w-[18px]'>
                    <img src={search} alt="search" className='w-[18px] block' />
                </div>
            </div>
            <div className='w-full text-center mt-5'>
                <a href="/address/add" className='w-full block bg-[#F44336] py-2 px-5 text-[16px] font-bold text-white rounded-md'>USE GPS LOCATION</a>
            </div>
        </div>
    )
}

export default LocationSearch