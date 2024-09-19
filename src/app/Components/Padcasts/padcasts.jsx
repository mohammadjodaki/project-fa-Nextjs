"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Backbg from '../../Images/bg-9.svg'
import Padcast1 from '../../Images/podcast1.webp'
import Padcast2 from '../../Images/padcast2.jpg'
import Padcast3 from '../../Images/padcast3.jpg'
import Padcast4 from '../../Images/padcast4.png'

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import { Pagination } from "swiper/modules";

function products() {
  const swiperRef = useRef(null);
  return (
    <div className="w-[85%] mx-auto my-10">
      <div className="w-full mx-auto flex justify-between items-center ">
        <div>
          <h2 className="text-blue-700 text-xl">پادکست های آکادمی</h2>
          <p className="text-gray-400">بشنو و یاد بگیر</p>
        </div>
        <div>
          <button className="hover:bg-[#35B40E] duration-500 hover:text-white border border-[#35B40E] rounded-lg text-[#35B40E] p-2">
            پادکست های بیشتر
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between mx-auto my-5">
        <Swiper
          ref={swiperRef}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className="w-full mx-auto h-80 lg:w-72 border border-gray-500 rounded-xl relative">
              <Image className="w-full h-full bg-[#5A37F4] rounded-xl" src={Backbg}/>
              <Image className="w-40 h-24 rounded-xl absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50" src={Padcast1}/>
              <h2 className="text-white text-sm absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">ایده کسب و کارتو پیدا کن</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full mx-auto h-80 lg:w-72 border border-gray-500 rounded-xl relative">
              <Image className="w-full h-full bg-[#5A37F4] rounded-xl" src={Backbg}/>
              <Image className="w-40 h-24 rounded-xl absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50" src={Padcast2}/>
              <h2 className="text-white text-sm absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">طراحی رابط کاربری مدرن</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full mx-auto h-80 lg:w-72 border border-gray-500 rounded-xl relative">
              <Image className="w-full h-full bg-[#5A37F4] rounded-xl" src={Backbg}/>
              <Image className="w-40 h-24 rounded-xl absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50" src={Padcast3}/>
              <h2 className="text-white text-sm absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">تو گوگل استخدام شو</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full mx-auto h-80 lg:w-72 border border-gray-500 rounded-xl relative">
              <Image className="w-full h-full bg-[#5A37F4] rounded-xl" src={Backbg}/>
              <Image className="w-40 h-24 rounded-xl absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50" src={Padcast4}/>
              <h2 className="text-white text-sm absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">چگونه توسعه دهنده بلاک چین شویم</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full mx-auto h-80 lg:w-72 border border-gray-500 rounded-xl relative">
              <Image className="w-full h-full bg-[#5A37F4] rounded-xl" src={Backbg}/>
              <Image className="w-40 h-24 rounded-xl absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50" src={Padcast1}/>
              <h2 className="text-white text-sm absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">ایده کسب و کارتو پیدا کن</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="custom-pagination flex justify-center" />
    </div>
  );
}

export default products;
