import React from 'react';
import { bag, home, logo, map, search, user } from '../../assets';

const NavBar = () => {

	return (
		
		<div>
			<div className='flex justify-between items-center px-5 sm:px-10 h-[70px] shadow-lg'>
                <div className='w-[90px]'>
                    <a href="/">
                        <img src={logo} alt="image" className='w-full block'/>
                    </a>
                </div>
				<div className='hidden sm:flex justify-center items-center'>
					<div className='mr-6'>
                        <a href="/" className='flex justify-start items-center text-[16px] font-normal text-[#97073B]'>
                            <img src={home} alt="image" className='mr-2 w-[20px] block'/>
                            Home
                        </a>
                    </div>
                    <div className='mr-6'>
                        <a href="/search" className='flex justify-start items-center text-[16px] font-normal text-[#97073B]'>
                            <img src={search} alt="image"  className='mr-2 w-[20px] block'/>
                            Search
                        </a>
                    </div>
                    <div className='mr-6'>
                        <a href="/cart" className='flex justify-start items-center text-[16px] font-normal text-[#97073B]'>
                            <img src={bag} alt="image"  className='mr-2 w-[20px] block'/>
                            Cart
                        </a>
                    </div>
                    <div className='mr-6'>
                        <a href="/account" className='flex justify-start items-center text-[16px] font-normal text-[#97073B]'>
                            <img src={user} alt="image"  className='mr-2 w-[20px] block'/>
                            Account
                        </a>
                    </div>
				</div>
                <div className='flex justify-end items-center'>
                    <img src={map} alt="image" className='w-[20px]'/>
                    <h2 className='ml-1 text-[16px] border-b-2 border-orange-400 font-bold text-[#97073B]'>Tirur, Malappuram</h2>
                </div>
			</div>
		</div>
	)
}

export default NavBar