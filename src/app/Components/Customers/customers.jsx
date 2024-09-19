"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Svgexport2 from '../../Images/svgexport2.svg'
import Svgexport3 from '../../Images/svgexport3.svg'
import Story1 from '../../Images/story-1.jpg'
import Story3 from '../../Images/story-3.jpg'
import Story5 from '../../Images/story-5.jpg'
import StarIcon from '@mui/icons-material/Star';


function customers() {
    const swiperRef = useRef(null);
    return (
      <div className="w-full bg-[#1A2042] relative">
        <Image src={Svgexport2}/>
        <div className="w-full flex gap-3 justify-center flex-col items-center">
          <h2 className="text-2xl text-white">مشتریان ما چه می گویند</h2>
          <p className="text-[#cacac6]">
          صدای شما را می شنویم و تا آخرین قدم موفقیت کنارتان هستیم
          </p>
        </div>
        <div className="w-[85%] mx-auto mt-10 -mb-14">
          <Swiper
            ref={swiperRef}
            loop={true}
            slidesPerView={1}
            spaceBetween={50}
            pagination={{
              clickable: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination , Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <div className="w-full mx-auto mb-10 md:w-96 lg:w-[530px] h-[330px] bg-[#0C1D35] rounded-xl px-5">
                    <Image className="w-16 h-16 object-cover mx-auto rounded-full" src={Story3}/>
                    <div className="flex justify-between -mt-10">
                        <h2 className="text-white">علی صدری</h2>
                        <div className="flex">
                        <StarIcon className="text-[#FFA500]"/>
                        <StarIcon className="text-[#FFA500]"/>
                        <StarIcon className="text-[#FFA500]"/>
                        <StarIcon className="text-[#FFA500]"/>
                        <StarIcon className="text-[#FFA500]"/>
                        </div>
                    </div>
                    <h2 className="text-center text-xl text-green-400 mt-10">دانشجوی دوره برنامه نویسی</h2>
                    <p className="text-gray-400 mt-10">تا قبل از آشنایی با خدمات و دوره های آکادمی شما تجربه ناموفقی را با دو شرکت مختلف تجربه کردم که منجر به عدم موفقیت و شکست شد. اما بعد از شرکت در دوره های آکادمی شما کسب و کارم متحول شد.</p>
                    <a className="w-52 h-14 rounded-full text-white bg-green-500 mt-5 mx-auto flex justify-center items-center" href="#">مشاهده ویدئوی مصاحبه</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="w-full mx-auto md:w-96 lg:w-[530px] h-[330px] bg-[#0C1D35] rounded-xl px-5">
                    <Image className="w-16 h-16 object-cover mx-auto rounded-full" src={Story5}/>
                    <div className="flex justify-between -mt-10">
                        <h2 className="text-white">نیما رضایی</h2>
                        <div className="flex">
                        <StarIcon className="text-[#FFA500]"/>
                        <StarIcon className="text-[#FFA500]"/>
                        <StarIcon className="text-[#FFA500]"/>
                        <StarIcon className="text-[#FFA500]"/>
                        <StarIcon className="text-[#FFA500]"/>
                        </div>
                    </div>
                    <h2 className="text-center text-xl text-green-400 mt-10">دانشجوی دوره تکنیک های خرید</h2>
                    <p className="text-gray-400 mt-10">تا قبل از آشنایی با خدمات و دوره های آکادمی شما تجربه ناموفقی را با دو شرکت مختلف تجربه کردم که منجر به عدم موفقیت و شکست شد. اما بعد از شرکت در دوره های آکادمی شما کسب و کارم متحول شد.</p>
                    <a className="w-52 h-14 rounded-full text-white bg-green-500 mt-5 mx-auto flex justify-center items-center" href="#">مشاهده ویدئوی مصاحبه</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="w-full mx-auto md:w-96 lg:w-[530px] h-[330px] bg-[#0C1D35] rounded-xl px-5">
                    <Image className="w-16 h-16 object-cover mx-auto rounded-full" src={Story1}/>
                    <div className="flex justify-between -mt-10">
                        <h2 className="text-white"> آناهیتا همتی</h2>
                        <div className="flex">
                        <StarIcon className="text-[#FFA500]"/>
                        <StarIcon className="text-[#FFA500]"/>
                        <StarIcon className="text-[#FFA500]"/>
                        <StarIcon className="text-[#FFA500]"/>
                        <StarIcon className="text-[#FFA500]"/>
                        </div>
                    </div>
                    <h2 className="text-center text-xl text-green-400 mt-10">دانشجوی دوره مستر تریدر</h2>
                    <p className="text-gray-400 mt-10">تا قبل از آشنایی با خدمات و دوره های آکادمی شما تجربه ناموفقی را با دو شرکت مختلف تجربه کردم که منجر به عدم موفقیت و شکست شد. اما بعد از شرکت در دوره های آکادمی شما کسب و کارم متحول شد.</p>
                    <a className="w-52 h-14 rounded-full text-white bg-green-500 mt-5 mx-auto flex justify-center items-center" href="#">مشاهده ویدئوی مصاحبه</a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <Image className="rotate-180" src={Svgexport3}/>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-4 swiper-pagination" /> 
      </div>
    );
  }
export default customers