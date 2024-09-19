"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import product1 from "../../Images/course-trader.webp";
import product2 from "../../Images/course-turbo.webp";
import product3 from "../../Images/course-price.jpg";
import product4 from "../../Images/course-buy.jpg";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";

import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';
import "swiper/css";

import { Pagination } from "swiper/modules";

function products() {
  const swiperRef = useRef(null);
  return (
    <div className="w-[85%] mx-auto my-10">
      <div className="w-full mx-auto flex justify-between items-center ">
        <div>
          <h2 className="text-gray-600 text-xl">محصولات آموزشی</h2>
          <p className="text-gray-400">شروع یادگیری</p>
        </div>
        <div>
          <button className="hover:bg-[#35B40E] duration-500 hover:text-white border border-[#35B40E] rounded-lg text-[#35B40E] p-2">
            محصولات بیشتر
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between mx-auto my-5">
        <Swiper
          ref={swiperRef}
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <div className="w-full mx-auto md:w-96 lg:w-[400px] border border-gray-500 rounded-xl">
              <div className="p-2">
                <Image
                  className="w-full h-52 mx-auto rounded-2xl cursor-pointer"
                  src={product1}
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center">
                    <SchoolIcon className="text-red-300" />
                    <h3 className="text-sm text-green-600 bg-green-100 rounded-sm px-2">
                      تعداد دانشجویان : 50
                    </h3>
                  </div>
                  <span className="text-[#FBBF24]">
                    5.00
                    <StarIcon className="text-lg" />
                  </span>
                </div>
                <h2 className="hover:text-green-600 duration-300 cursor-pointer mt-4">
                  دوره طراحی سایت فروشگاهی حرفه ای
                </h2>
                <p className="mt-5">
                  این دوره بهترین دوره اموزشی است چون هر چیزی که یک طراح لازم
                  داردبه صورت عملی در آن اموزش داده می شود ...
                </p>
                <div className="w-full flex justify-between items-center mt-10">
                  <span className="w-1/4 text-gray-600">
                    <del>3500000</del>
                  </span>
                  <span className="w-1/4 text-green-600">رایگان</span>
                  <span className="w-1/4"></span>
                  <button className="hover:bg-gray-500 duration-300 w-1/4 bg-green-600 text-white rounded-md py-2">
                    <p>مشاهده دوره</p>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full mx-auto md:w-96 lg:w-[400px] border border-gray-500 rounded-xl">
            <div className="p-2">
                <Image
                  className="w-full h-52 mx-auto rounded-2xl cursor-pointer"
                  src={product2}
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center">
                    <SchoolIcon className="text-red-300" />
                    <h3 className="text-sm text-green-600 bg-green-100 rounded-sm px-2">
                      تعداد دانشجویان : 18
                    </h3>
                  </div>
                  <span className="text-[#FBBF24]">
                    4.50
                    <StarIcon className="text-lg" />
                  </span>
                </div>
                <h2 className="hover:text-green-600 duration-300 cursor-pointer mt-4">
                       دوره بازاریابی محتوایی صفر تا صد
                </h2>
                <p className="mt-5">
                  این دوره بهترین دوره اموزشی است چون هر چیزی که یک طراح لازم
                  داردبه صورت عملی در آن اموزش داده می شود ...
                </p>
                <div className="w-full flex justify-between items-center mt-10">
                  <span className="w-1/4 text-gray-600">
                    <del>3600000</del>
                  </span>
                  <span className="w-1/4 text-green-600">990000تومان</span>
                  <span className="w-1/4"></span>
                  <button className="hover:bg-gray-500 duration-300 w-1/4 bg-green-600 text-white rounded-md py-2">
                    <p>مشاهده دوره</p>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full mx-auto md:w-96 lg:w-[400px] border border-gray-500 rounded-xl">
              <div className="p-2">
                <Image
                  className="w-full h-52 mx-auto rounded-2xl cursor-pointer"
                  src={product3}
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center">
                    <SchoolIcon className="text-red-300" />
                    <h3 className="text-sm text-green-600 bg-green-100 rounded-sm px-2">
                      تعداد دانشجویان : 474
                    </h3>
                  </div>
                  <span className="text-[#FBBF24]">
                    5.00
                    <StarIcon className="text-lg" />
                  </span>
                </div>
                <h2 className="hover:text-green-600 duration-300 cursor-pointer mt-4">
                            دوره حرفه ای بورس صفر تا صد
                </h2>
                <p className="mt-5">
                  این دوره بهترین دوره اموزشی است چون هر چیزی که یک طراح لازم
                  داردبه صورت عملی در آن اموزش داده می شود ...
                </p>
                <div className="w-full flex justify-between items-center mt-10">
                  <span className="w-1/4 text-green-600">4500000تومان</span>
                  <span className="w-1/4"></span>
                  <span className="w-1/4"></span>
                  <button className="hover:bg-gray-500 duration-300 w-1/4 bg-green-600 text-white rounded-md py-2">
                    <p>مشاهده دوره</p>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full mx-auto md:w-96 lg:w-[400px] border border-gray-500 rounded-xl">
              <div className="p-2">
                <Image
                  className="w-full h-52 mx-auto rounded-2xl cursor-pointer"
                  src={product4}
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center">
                    <SchoolIcon className="text-red-300" />
                    <h3 className="text-sm text-green-600 bg-green-100 rounded-sm px-2">
                      تعداد دانشجویان : 12
                    </h3>
                  </div>
                  <span className="text-[#FBBF24]">
                    0
                    <StarIcon className="text-lg" />
                  </span>
                </div>
                <h2 className="hover:text-green-600 duration-300 cursor-pointer mt-4">
                       دوره پیشرفته زبان انگلیسی آیلتس
                </h2>
                <p className="mt-5">
                  این دوره بهترین دوره اموزشی است چون هر چیزی که یک طراح لازم
                  داردبه صورت عملی در آن اموزش داده می شود ...
                </p>
                <div className="w-full flex justify-between items-center mt-10">
                  <span className="w-1/4 text-gray-600">
                    <del>6300000</del>
                  </span>
                  <span className="w-1/4 text-green-600">920000تومان</span>
                  <span className="w-1/4"></span>
                  <button className="hover:bg-gray-500 duration-300 w-1/4 bg-green-600 text-white rounded-md py-2">
                    <p>مشاهده دوره</p>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default products;
