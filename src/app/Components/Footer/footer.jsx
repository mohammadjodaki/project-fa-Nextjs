import React from "react";
import Image from "next/image";
import Svgexport8 from "../../Images/svgexport8.svg";
import Svgexport9 from "../../Images/svgexport9.svg";
import Svgexport10 from "../../Images/svgexport10.svg";
import Svgexport11 from "../../Images/svgexport11.svg";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import Enamad from "../../Images/enamad.png";
import Samandehi from "../../Images/samandehi.png";

function footer() {
  return (
    <div className="w-full bg-[#2C304F]">
      <div className="w-[85%] flex justify-between flex-wrap gap-3 mx-auto pt-20">
        <div className="flex flex-col justify-center items-center gap-5 cursor-pointer">
          <Image className="w-16 h-16" src={Svgexport8} />
          <span className="text-white text-sm">ضمانت بازگشت وجه</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 cursor-pointer">
          <Image className="w-16 h-16" src={Svgexport9} />
          <span className="text-white text-sm">پشتیبانی سریع</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 cursor-pointer">
          <Image className="w-16 h-16" src={Svgexport10} />
          <span className="text-white text-sm">دانلود بعداز پرداخت</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 cursor-pointer">
          <Image className="w-16 h-16" src={Svgexport11} />
          <span className="text-white text-sm">محصول اوریجینال</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 cursor-pointer">
          <Image className="w-16 h-16" src={Svgexport8} />
          <span className="text-white text-sm">دسترسی مادام العمر</span>
        </div>
      </div>
      <div className="w-[85%] flex justify-between mx-auto flex-wrap mt-20">
        <div className="">
          <h3 className="text-white">ارتباط با ما</h3>
          <ul className="text-sm text-white mt-5 leading-10">
            <li className="cursor-pointer">
              <PhoneEnabledIcon className="text-lg text-green-400 ml-1" />
              021-32350000
            </li>
            <li className="cursor-pointer">
              <EmailIcon className="text-lg text-green-400 ml-1" />
              info@mihancode.com
            </li>
            <li className="cursor-pointer">
              <HomeIcon className="text-lg text-green-400 ml-1" />
              آدرس : یزد – میبد – بلوار شهید اشتری
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white">دسترسی سریع</h3>
          <ul className="text-sm text-white mt-5 leading-10">
            <li className="cursor-pointer hover:text-green-500 hover:-translate-x-2 duration-500">
              <a href="#">تماس با ما</a>
            </li>
            <li className="cursor-pointer hover:text-green-500 hover:-translate-x-2 duration-500">
              <a href="#">درباره ما</a>
            </li>
            <li className="cursor-pointer hover:text-green-500 hover:-translate-x-2 duration-500">
              <a href="#">سبد خرید</a>
            </li>
            <li className="cursor-pointer hover:text-green-500 hover:-translate-x-2 duration-500">
              <a href="#">حساب کاربری</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white">بخش های سایت</h3>
          <ul className="text-sm text-white mt-5 leading-10">
            <li className="cursor-pointer hover:text-green-500 hover:-translate-x-2 duration-500">
              <a href="#">اشتراک ویژه</a>
            </li>
            <li className="cursor-pointer hover:text-green-500 hover:-translate-x-2 duration-500">
              <a href="#">وبلاگ</a>
            </li>
            <li className="cursor-pointer hover:text-green-500 hover:-translate-x-2 duration-500">
              <a href="#">فروشگاه</a>
            </li>
            <li className="cursor-pointer hover:text-green-500 hover:-translate-x-2 duration-500">
              <a href="#">پرداخت قسطی</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white">نمادهای سایت</h3>
          <div className="flex mt-5">
            <Image src={Enamad} />
            <Image src={Samandehi} />
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <p className="text-center py-5 text-white bg-blue-950 font-bold text-xl">Developer | Mohammad Jodaki</p>
      </div>
    </div>
  );
}

export default footer;
