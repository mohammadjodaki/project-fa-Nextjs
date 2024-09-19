"use client";
import Image from "next/image";
import React from "react";
import imageb from "../../Images/imageb.png";
import imagen from "../../Images/imagen.png";
import imaget from "../../Images/imaget.png";
import DoneIcon from "@mui/icons-material/Done";

function plans() {
  return (
    <div className="w-full gap-20 lg:gap-5 flex flex-col items-center mt-20">
      <div className="text-center">
        <h2 className="text-3xl">پلن های اشتراک ویژه</h2>
        <p className="mt-3 text-xl text-gray-700">
          دسترسی رایگان به دوره های آکادمی با خرید اشتراک
        </p>
      </div>
      <div className="w-[85%] group border-2 duration-500 border-gray-500 rounded-xl hover:border-[#FBBF24] h-36 flex justify-center flex-wrap lg:mt-5">
        <div className="w-full lg:w-1/4 h-full lg:rounded-br-xl lg:rounded-tr-xl bg-[#192D51]">
          <div className="w-full h-full flex gap-5 flex-col justify-center items-center">
            <Image className="w-14 h-14 rounded-full" src={imageb} />
            <span className="text-white text-3xl">پلن برنزی</span>
          </div>
        </div>
        <div className="w-full lg:w-1/4 h-full bg-[#3D415C]">
          <div className="w-full h-full flex flex-col justify-center text-gray-300 pr-5 gap-3">
            <p className="flex justify-center lg:justify-start">
              <DoneIcon />
              دسترسی به 10 دوره آموزشی به مدت 30 روز
            </p>
            <p className="flex justify-center lg:justify-start">
              <DoneIcon />
              پشتیبانی تلفنی، آنلاین و ایمیل
            </p>
            <p className="flex justify-center lg:justify-start">
              <DoneIcon />
              20 دقیقه جلسه با پشتیبان اختصاصی
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/4 h-full bg-[#3D415C]">
          <div className="w-full h-full flex flex-col justify-center text-white pr-5 gap-3">
            <span className="flex justify-center text-2xl">5,500,000تومان</span>
            <span className="flex justify-center text-2xl">
              .......................
            </span>
            <span className="flex justify-center text-2xl text-[#FBBF24]">
              30 روز اعتبار
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/4 h-full lg:rounded-bl-xl lg:rounded-tl-xl bg-[#3D415C]">
          <div className="w-full h-full flex flex-col justify-center text-white pr-5 gap-3">
            <button className="text-white">
              <span className="bg-[#646A8E] group-hover:bg-[#FBBF24] px-7 duration-500 py-2 rounded-lg">
                ثبت سفارش
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[85%] group border-2 duration-500 border-gray-500 rounded-xl hover:border-[#FBBF24] h-36 flex justify-center flex-wrap mt-96 lg:mt-5">
        <div className="w-full lg:w-1/4 h-full lg:rounded-br-xl lg:rounded-tr-xl bg-[#192D51]">
          <div className="w-full h-full flex gap-5 flex-col justify-center items-center">
            <Image className="w-14 h-14 rounded-full" src={imagen} />
            <span className="text-white text-3xl">پلن نقره ای</span>
          </div>
        </div>
        <div className="w-full lg:w-1/4 h-full bg-[#3D415C]">
          <div className="w-full h-full flex flex-col justify-center text-gray-300 pr-5 gap-3">
            <p className="flex justify-center lg:justify-start">
              <DoneIcon />
              دسترسی به 20 دوره آموزشی به مدت 180 روز
            </p>
            <p className="flex justify-center lg:justify-start">
              <DoneIcon />
              پشتیبانی تلفنی، آنلاین و ایمیل
            </p>
            <p className="flex justify-center lg:justify-start">
              <DoneIcon />
              40 دقیقه جلسه با پشتیبان اختصاصی
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/4 h-full bg-[#3D415C]">
          <div className="w-full h-full flex flex-col justify-center text-white pr-5 gap-3">
            <span className="flex justify-center text-2xl">8,000,000تومان</span>
            <span className="flex justify-center text-2xl">
              .......................
            </span>
            <span className="flex justify-center text-2xl text-[#FBBF24]">
            180 روز اعتبار  
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/4 h-full lg:rounded-bl-xl lg:rounded-tl-xl bg-[#3D415C]">
          <div className="w-full h-full flex flex-col justify-center text-white pr-5 gap-3">
            <button className="text-white">
              <span className="bg-[#646A8E] group-hover:bg-[#FBBF24] px-7 duration-500 py-2 rounded-lg">
                ثبت سفارش
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[85%] group border-2 duration-500 border-gray-500 rounded-xl hover:border-[#FBBF24] h-36 flex justify-center flex-wrap mt-96 lg:mt-5">
        <div className="w-full lg:w-1/4 h-full lg:rounded-br-xl lg:rounded-tr-xl bg-[#192D51]">
          <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
            <Image className="w-14 h-14 rounded-full" src={imaget} />
            <span className="text-white text-3xl">پلن طلایی</span>
          </div>
        </div>
        <div className="w-full lg:w-1/4 h-full bg-[#3D415C]">
          <div className="w-full h-full flex flex-col justify-center text-gray-300 pr-5 gap-3">
            <p className="flex justify-center lg:justify-start">
              <DoneIcon />
              دسترسی به تمام دوره های آموزشی آکادمی            
              </p>
            <p className="flex justify-center lg:justify-start">
              <DoneIcon />
              پشتیبانی تلفنی، آنلاین و ایمیل
            </p>
            <p className="flex justify-center lg:justify-start">
              <DoneIcon />
              180 دقیقه جلسه با پشتیبان اختصاصی            
              </p>
          </div>
        </div>
        <div className="w-full lg:w-1/4 h-full bg-[#3D415C]">
          <div className="w-full h-full flex flex-col justify-center text-white pr-5 gap-3">
            <span className="flex justify-center text-2xl">5,500,000تومان</span>
            <span className="flex justify-center text-2xl">
              .......................
            </span>
            <span className="flex justify-center text-2xl text-[#FBBF24]">
              30 روز اعتبار
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/4 h-full lg:rounded-bl-xl lg:rounded-tl-xl bg-[#3D415C]">
          <div className="w-full h-full flex flex-col justify-center text-white pr-5 gap-3">
            <button className="text-white">
              <span className="bg-[#646A8E] group-hover:bg-[#FBBF24] px-7 duration-500 py-2 rounded-lg">
                ثبت سفارش
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default plans;
