"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Article1 from '../../Images/article1.png'
import Article2 from '../../Images/article2.jpg'
import Article3 from '../../Images/article3.jpg'
import Article4 from '../../Images/article4.jpg'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import { Pagination } from "swiper/modules";

function articles() {
  const swiperRef = useRef(null);
  return (
    <div className="w-[85%] mx-auto my-10">
      <div className="w-full mx-auto flex justify-between items-center ">
        <div>
          <h2 className="text-blue-700 text-xl"> مقالات آموزشی</h2>
          <p className="text-gray-400">پایگاه دانش</p>
        </div>
        <div>
          <button className="hover:bg-[#35B40E] duration-500 hover:text-white border border-[#35B40E] rounded-lg text-[#35B40E] p-2">
              مطالب بیشتر
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
            el: '.custom-pagination',  
            clickable: true,  
          }}  
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className="w-full mx-auto lg:w-[370px] border border-gray-500 rounded-xl relative">
                <Image className="rounded-xl" src={Article1}/>
                <a href="#"><p className="mt-2 px-3">بهترین قالب های وردپرسی سال 2022</p></a>
                <p className="text-sm p-3 text-gray-600">دوره های پیشرفته با اساتید مجرب این دوره بهترین دوره آموزش فتوشاپ است چون هر چیزی که یک طراح گرافیست لازم دارد به...</p>
                <div className="flex px-3 text-xs gap-5">
                    <p><PersonOutlineIcon/>میهن کد</p>
                    <p><CalendarMonthIcon/>1401/10/08</p>
                </div>
                <a className="flex justify-center my-5 text-green-600 hover:text-blue-600 duration-500" href="#">مطالعه مقاله<ArrowBackIcon/></a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full mx-auto h-[360px] lg:w-[370px] border border-gray-500 rounded-xl relative">
            <Image className="rounded-xl" src={Article2}/>
            <a href="#"><p className="mt-2 px-3">بهترین سرویس های نقشه های انلاین</p></a>
                <p className="text-sm p-3 text-gray-600">دوره های پیشرفته با اساتید مجرب این دوره بهترین دوره آموزش فتوشاپ است چون هر چیزی که یک طراح گرافیست لازم دارد به...</p>
                <div className="flex px-3 text-xs gap-5">
                    <p><PersonOutlineIcon/>میهن کد</p>
                    <p><CalendarMonthIcon/>1401/10/08</p>
                </div>
                <a className="flex justify-center my-5 text-green-600 hover:text-blue-600 duration-500" href="#">مطالعه مقاله<ArrowBackIcon/></a>
              </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full mx-auto h-[360px] lg:w-[370px] border border-gray-500 rounded-xl relative">
            <Image className="rounded-xl" src={Article3}/>
            <a href="#"><p className="mt-2 px-3">بازاریابی چریکی و 10 نکته آن</p></a>
                <p className="text-sm p-3 text-gray-600">دوره های پیشرفته با اساتید مجرب این دوره بهترین دوره آموزش فتوشاپ است چون هر چیزی که یک طراح گرافیست لازم دارد به...</p>
                <div className="flex px-3 text-xs gap-5">
                    <p><PersonOutlineIcon/>میهن کد</p>
                    <p><CalendarMonthIcon/>1401/10/08</p>
                </div>
                <a className="flex justify-center my-5 text-green-600 hover:text-blue-600 duration-500" href="#">مطالعه مقاله<ArrowBackIcon/></a>
               </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full mx-auto h-[360px] lg:w-[370px] border border-gray-500 rounded-xl relative">
            <Image className="rounded-xl" src={Article4}/>
            <a href="#"><p className="mt-2 px-3">شروع کار با گوگل مپ و نکات آن</p></a>
                <p className="text-sm p-3 text-gray-600">دوره های پیشرفته با اساتید مجرب این دوره بهترین دوره آموزش فتوشاپ است چون هر چیزی که یک طراح گرافیست لازم دارد به...</p>
                <div className="flex px-3 text-xs gap-5">
                    <p><PersonOutlineIcon/>میهن کد</p>
                    <p><CalendarMonthIcon/>1401/10/08</p>
                </div>
                <a className="flex justify-center my-5 text-green-600 hover:text-blue-600 duration-500" href="#">مطالعه مقاله<ArrowBackIcon/></a>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="custom-pagination" />
    </div>
  );
}

export default articles;
