"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Bg from "../../Images/bg-9.svg";
import Svgexport1 from "../../Images/svgexport1.svg";
import Frame1 from "../../Images/frame1.png";
import Frame2 from "../../Images/frame2.png";
import Frame3 from "../../Images/frame3.png";
import Frame4 from "../../Images/frame4.png";
import Frame5 from "../../Images/frame5.png";


function course() {
  const swiperRef = useRef(null);
  return (
    <div className="w-full bg-[#281359] relative">
      <Image src={Svgexport1} />
      <Image className="absolute bg-repeat bottom-0 left-[500px]" src={Bg} />
      <Image className="absolute bg-repeat right-0" src={Bg} />
      <Image className="absolute bg-repeat left-0" src={Bg} />
      <div className="w-full flex gap-3 justify-center flex-col items-center">
        <h2 className="text-2xl text-white">دوره های در حال برگزاری</h2>
        <p className="text-[#F1DC1A]">
          بهترین دوره های آموزشی با اساتید مجرب آکادمی پارسا
        </p>
      </div>
      <div className="w-[85%] mx-auto mt-10">
        <Swiper
          ref={swiperRef}
          loop={true}
          slidesPerView={1}
          spaceBetween={50}
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
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination , Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <div className="w-full mx-auto md:w-96 lg:w-[285px] h-[450px] bg-[#1F2235] border border-yellow-950 rounded-xl">
              <Image src={Frame1} className="w-full h-full px-5 py-4 object-cover rounded-3xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full mx-auto md:w-96 lg:w-[285px] h-[450px] bg-[#1F2235] border border-yellow-950 rounded-xl">
            <Image src={Frame2} className="w-full h-full px-5 py-4 object-cover rounded-3xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full mx-auto md:w-96 lg:w-[285px] h-[450px] bg-[#1F2235] border border-yellow-950 rounded-xl">
              <Image src={Frame3} className="w-full h-full px-5 py-4 object-cover rounded-3xl" />
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full mx-auto md:w-96 lg:w-[285px] h-[450px] bg-[#1F2235] border border-yellow-950 rounded-xl">
              <Image src={Frame4} className="w-full h-full px-5 py-4 object-cover rounded-3xl" />
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full mx-auto md:w-96 lg:w-[285px] h-[450px] bg-[#1F2235] border border-yellow-950 rounded-xl">
              <Image src={Frame5} className="w-full h-full px-5 py-4 object-cover rounded-3xl" />
              </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Image className="rotate-180" src={Svgexport1} />
    </div>
  );
}

export default course;
