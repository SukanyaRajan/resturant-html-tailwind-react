import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import { cat1, cat2, cat3, cat4, cat5, cat6, cat7 } from '../../assets';


const CategoryList = () => {
  return (
        <div className='px-5 sm:px-10'>
        <h1 className='text-[18px] font-bold mb-3 mt-4 text-[#97073B]'>Filter By Category</h1>
        <Swiper 
            spaceBetween={20}
            breakpoints={{
                0: {
                    slidesPerView: 4,
                },
                400: {
                    slidesPerView: 4,
                },
                639: {
                    slidesPerView: 5,
                },
                865: {
                    slidesPerView: 5,
                },
                1000: {
                    slidesPerView: 6,
                },
            }}
            className='mySwiper'>

                <SwiperSlide>
                    <div className='w-full'>
                        <a href="/restaurants" className='w-[100%] block'>
                            <img src={cat1} alt="image" className='w-[100%] block'/>
                        </a>
                        <h1 className='text-center font-semibold text-[16px] text-[#97073B]'>South</h1>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full'>
                        <a href="/restaurants" className='w-[100%] block'>
                            <img src={cat2} alt="image" className='w-[100%] block'/>
                        </a>
                        <h1 className='text-center font-semibold text-[16px] text-[#97073B]'>Biriyani</h1>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full'>
                        <a href="/restaurants" className='w-[100%] block'>
                            <img src={cat3} alt="image" className='w-[100%] block'/>
                        </a>
                        <h1 className='text-center font-semibold text-[16px] text-[#97073B]'>Burger</h1>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full'>
                        <a href="/restaurants" className='w-[100%] block'>
                            <img src={cat4} alt="image" className='w-[100%] block'/>
                        </a>
                        <h1 className='text-center font-semibold text-[16px] text-[#97073B]'>Roll</h1>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full'>
                        <a href="/restaurants" className='w-[100%] block'>
                            <img src={cat5} alt="image" className='w-[100%] block'/>
                        </a>
                        <h1 className='text-center font-semibold text-[16px] text-[#97073B]'>Sandwitch</h1>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full'>
                        <a href="/restaurants" className='w-[100%] block'>
                            <img src={cat6} alt="image" className='w-[100%] block'/>
                        </a>
                        <h1 className='text-center font-semibold text-[16px] text-[#97073B]'>Chineese</h1>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full'>
                        <a href="/restaurants" className='w-[100%] block'>
                            <img src={cat7} alt="image" className='w-[100%] block'/>
                        </a>
                        <h1 className='text-center font-semibold text-[16px] text-[#97073B]'>North</h1>
                    </div>
                </SwiperSlide>

        </Swiper>
    </div>
    )
}

export default CategoryList