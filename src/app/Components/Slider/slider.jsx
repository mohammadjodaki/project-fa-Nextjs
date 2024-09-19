"use client";
import Image from "next/image";
import pic1 from "../../Images/parsa-slider1.png";
import pic2 from "../../Images/parsa-slider2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import slid1 from '../../Images/Instagram.png'
import slid2 from '../../Images/google.png'
import slid3 from '../../Images/wp.png'
import slid4 from '../../Images/business.png'
import slid5 from '../../Images/linkedIn.svg'
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/autoplay";


export default function App() {
  return (
    <div className="bg-[#1D1E1F]">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}

      >
        <SwiperSlide>
          <div className="w-full flex flex-col md:flex-row h-auto md:h-[600px]">
            <div className="w-full h-full flex justify-center order-1 md:order-none mt-10">
              <Image className="w-full md:w-3/5 h-3/5 " src={pic1} />
            </div>
            <div className="w-full px-3 h-full md:mt-40">
              <h2 className="md:w-4/5 text-white text-[28px] md:text-6xl font-bold">
                شروع یادگیری با
                <strong className="text-[#FFFF00]">اموزش های تخصصی !</strong>
              </h2>
              <button className="hover:text-[#FFFF00] hover:border-[#FFFF00] duration-500 text-white border border-gray-50 mt-5 md:mt-10 rounded-md p-3">
                مشاهده بیشتر
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col md:flex-row h-auto md:h-[600px]">
            <div className="w-full h-full flex justify-center order-1 md:order-none mt-10 md:mt-20">
              <Image className="w-full md:w-3/5 h-3/5 " src={pic2} />
            </div>
            <div className="w-full px-3 h-full md:mt-40">
              <h2 className="md:w-2/3 text-white text-3xl md:text-6xl font-bold">
                برای یک <strong className="text-[#FFFF00]">متخصص</strong> همیشه
                کار هست!
              </h2>
              <button className="hover:text-[#FFFF00] hover:border-[#FFFF00] duration-500 text-white border border-gray-50 mt-5 md:mt-10 rounded-md p-3">
                مشاهده بیشتر
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
 
   <Swiper
   className="w-[85%] mx-auto mt-5 md:-mt-20" 
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[ Autoplay]}
        >
          <SwiperSlide>
            <div className="w-full flex cursor-pointer justify-center gap-5 items-center md:w-72 h-28 bg-[#1F2235] rounded-lg mb-14">
              <div className="w-16 h-16 flex justify-center items-center bg-[#171b2e] rounded-lg">
                <Image className="w-9 h-9" src={slid1} />
              </div>
              <div>
                <h2 className="text-[#E4B16E]">اینستاگرام</h2>
                <p className="text-white">جدیدترین های اینستاگرام</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex cursor-pointer justify-center gap-5 items-center md:w-72 h-28 bg-[#1F2235] rounded-lg mb-14">
              <div className="w-16 h-16 flex justify-center items-center bg-[#171b2e] rounded-lg">
                <Image className="w-9 h-9" src={slid2} />
              </div>
              <div>
                <h2 className="text-[#E4B16E]">سئو</h2>
                <p className="text-white">جدیدترین های سئو</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex cursor-pointer justify-center gap-5 items-center md:w-72 h-28 bg-[#1F2235] rounded-lg mb-14">
              <div className="w-16 h-16 flex justify-center items-center bg-[#171b2e] rounded-lg">
                <Image className="w-9 h-9" src={slid3} />
              </div>
              <div>
                <h2 className="text-[#E4B16E]">وب سایت</h2>
                <p className="text-white">ترفندهای وب سایت</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex cursor-pointer justify-center gap-5 items-center md:w-72 h-28 bg-[#1F2235] rounded-lg mb-14">
              <div className="w-16 h-16 flex justify-center items-center bg-[#171b2e] rounded-lg">
                <Image className="w-9 h-9" src={slid4} />
              </div>
              <div>
                <h2 className="text-[#E4B16E]">کسب و کار</h2>
                <p className="text-white">اطلاعات روز کسب و کار</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex cursor-pointer justify-center gap-5 items-center md:w-72 h-28 bg-[#1F2235] rounded-lg mb-14">
              <div className="w-16 h-16 flex justify-center items-center bg-[#171b2e] rounded-lg">
                <Image className="w-20 h-20" src={slid5} />
              </div>
              <div>
                <h2 className="text-[#E4B16E]">لینکدین</h2>
                <p className="text-white">ارتباطات مجازی</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
  );
}
