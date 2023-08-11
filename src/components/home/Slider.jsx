import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'; 
import { Autoplay, Scrollbar } from 'swiper';
import { slide1, slide2, slide3 } from '../../assets';

const Slider = () => {
  return (
    <div className='px-5 sm:px-10 mb-3'>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          639: {
            slidesPerView: 2,
          },
          865: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay:2000,
          disableOnInteraction: false,
        }}
        scrollbar={{draggable:true}}
        modules={[Scrollbar, Autoplay]}
        className='mySwiper'>

          <SwiperSlide>
            <div className='w-full'>
              <a href="#" className='w-[100%] block'>
                <img src={slide1} alt="image"className='w-[100%] block shadow-md rounded-xl' />
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full'>
              <a href="#" className='w-[100%] block'>
                <img src={slide2} alt="image"className='w-[100%] block shadow-md rounded-xl' />
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full'>
              <a href="#" className='w-[100%] block'>
                <img src={slide3} alt="image"className='w-[100%] block shadow-md rounded-xl' />
              </a>
            </div>
          </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Slider