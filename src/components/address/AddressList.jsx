import React from 'react'
import { checkmark, delet, edit, house, tick, work } from '../../assets'

const AddressList = () => {
  return (
        <div className='px-5 sm:px-10 max-w-[720px] m-auto mt-5 sm:mt-10'>
            <div className='w-full text-center mb-5'>
                <a href="/locations" className='w-full block bg-[#F44336] py-2 px-5 text-[16px] font-bold text-white rounded-md' >ADD NEW ADDRESS</a>
            </div>
            <div className='flex justify-between items-center bg-gray-100 rounded-lg p-3 sm:p-5 mb-5'>
                <div className='w-[15%] h-full'>
                    <div className='w-full p-2 sm:p-3 h-full flex justify-center items-center bg-white rounded-full'>
                        <img src={house} alt="image" className='w-full block' />
                    </div>
                </div>
                <div className='w-[80%]'>
                    <div className='flex justify-between items-center mb-3 w-full'>
                        <h1 className='font-bold text-[14px] text-[#97073B]'>HOME</h1>
                        <div>
                            <div className='flex justify-end items-center'>
                                <a href="#">
                                    <img src={checkmark} alt="image" className='w-[20px] mr-4'/>
                                </a>
                                <a href="#">
                                    <img src={edit} alt="image" className='w-[18px] mr-4'/>
                                </a>
                                <a href="#">
                                    <img src={delet} alt="image" className='w-[18px]'/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-[14px] font-normal text-[#97073B]'>
                        Kuttippuram, Kerala 679571, Inidia, Home Address
                    </h3>
                </div>
            </div>
            <div className='flex justify-between items-center bg-gray-100 rounded-lg p-3 sm:p-5 mb-5'>
                <div className='w-[15%] h-full'>
                    <div className='w-full p-2 sm:p-3 h-full flex justify-center items-center bg-white rounded-full'>
                        <img src={work} alt="image" className='w-full block' />
                    </div>
                </div>
                <div className='w-[80%]'>
                    <div className='flex justify-between items-center mb-3 w-full'>
                        <h1 className='font-bold text-[14px] text-[#97073B]'>WORK</h1>
                        <div>
                            <div className='flex justify-end items-center'>
                                <a href="#">
                                    <img src={tick} alt="image" className='w-[20px] mr-4'/>
                                </a>
                                <a href="#">
                                    <img src={edit} alt="image" className='w-[18px] mr-4'/>
                                </a>
                                <a href="#">
                                    <img src={delet} alt="image" className='w-[18px]'/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-[14px] font-normal text-[#97073B]'>
                        Kuttippuram, Kerala 679571, Inidia, Home Address
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default AddressList