import React from 'react'
import { FooterNav, SearchNav } from '../components'
import { search } from '../assets'

const Search = () => {
  return (
    <div>
        <SearchNav />

        <div className='px-5 sm:px-10 py-5 sm:py-10'>
          <div className='py-3 px-5 rounded-xl border-2 flex justify-between items-center'>
            <input type="text" placeholder='Search..' className='w-full outline-none text-[#97073B] placeholder:text-[#515151] placeholder:text-[16px]' />
            <div className='w-[18px]'>
              <img src={ search } alt="image" className='w-[18px] block'/>
            </div>
          </div>
        </div>

        <FooterNav />
    </div>
  )
}

export default Search