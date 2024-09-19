"use client";
import * as React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Image from "next/image";
import logo from "../../Images/logo.svg";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useState } from "react";
import Menulogo from "../../Images/menulogo.svg";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';

function menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full h-40 bg-[#1D1E1F]">
        <div className="w-[85%] flex mx-auto h-20">
          <div className="w-[30%] px-3 flex items-center text-white lg:hidden h-full">
            <MenuIcon
              className="text-5xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <div className="w-[50%] lg:w-[20%] h-full flex items-center">
            <Image
              className="cursor-pointer"
              src={logo}
              alt="logo pic"
              width={140}
              height={50}
            />
          </div>
          <div className="w-[40%] hidden lg:flex h-full items-center"></div>
          <div className="hidden lg:flex lg:w-[30%] h-full gap-5 items-center text-gray-400">
            <InstagramIcon className="cursor-pointer hover:text-[#E4B16E]" />
            <TelegramIcon className="cursor-pointer hover:text-[#E4B16E]" />
            <WhatsAppIcon className="cursor-pointer hover:text-[#E4B16E]" />
            <YouTubeIcon className="cursor-pointer hover:text-[#E4B16E]" />
            <TwitterIcon className="cursor-pointer hover:text-[#E4B16E]" />
          </div>
          <div className="w-[20%] p-3 lg:p-0 lg:w-[10%] h-full flex justify-end items-center">
            <div className="w-12 h-12 cursor-pointer rounded-lg flex justify-center items-center bg-[#252627] relative">
              <ShoppingBagOutlinedIcon className="text-gray-500 text-3xl absolute" />
              <span className="w-4 h-4 bg-[#10a517a7] rounded-full text-xs flex justify-center items-center text-white absolute bottom-1 right-1">
                0
              </span>
            </div>
          </div>
        </div>
        <div className="w-[85%] hidden lg:flex mx-auto h-20">
          <div className="w-[60%] h-full">
            <ul className="w-full h-full font-bold gap-10 *:cursor-pointer text-white flex items-center">
              <li className="hover:text-[#E4B16E]">خانه</li>
              <li className="hover:text-[#E4B16E]">محصولات</li>
              <li className="hover:text-[#E4B16E]">تعرفه</li>
              <li className="hover:text-[#E4B16E]">پادکست </li>
              <li className="hover:text-[#E4B16E]">دوره</li>
              <li className="hover:text-[#E4B16E]">مقالات</li>
            </ul>
          </div>
          <div className="w-[20%] h-full">
            <span className="w-full h-full cursor-pointer gap-1 text-white flex items-center">
              <PhoneEnabledIcon className="text-lg text-amber-500" />
              012-4521478
            </span>
          </div>
          <div className="w-[20%] h-full flex items-center justify-end">
            <span className="px-2 h-12 cursor-pointer rounded-lg bg-[#33A510] gap-1 text-white flex items-center">
              {" "}
              <PersonOutlineIcon />
              ورود|عضویت
            </span>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full bg-white fixed top-0 left-0 bg-opacity-50 transition-opacity duration-300 ease-in-out z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`w-72 h-[710px] p-5 *:my-2 transform transition-transform duration-300 ease-in-out shadow-xl rounded-2xl fixed right-0 top-3 z-50 bg-white ${
          isOpen ? "translate-x-0 right-3" : "translate-x-full right-0"
        }`}
      >
        <div className="flex justify-between items-center">
          <Image width={160} height={40} src={Menulogo} />
          <div
            className="w-10 h-10 flex justify-center items-center bg-[#FFA31A] rounded-full cursor-pointer"
            onClick={toggleMenu}
          >
            <CloseIcon className="text-white" />
          </div>
        </div>
        <div className="flex pt-10">
          <input
            className="w-full h-10 bg-gray-100 px-2 rounded-lg outline-none"
            type="search"
            placeholder="جست و جو کنید..."
          />
          <SearchIcon className="text-2xl text-gray-500 -mr-8 mt-2" />
        </div>
        <ul className="flex flex-col gap-10 text-gray-500 py-12">
          <li className="hover:text-[#FFA31A] duration-300"><a href="">خانه</a></li>
          <li className="hover:text-[#FFA31A] duration-300"><a href="">محصولات</a></li>
          <li className="hover:text-[#FFA31A] duration-300"><a href="">تعرفه</a></li>
          <li className="hover:text-[#FFA31A] duration-300"><a href="">پادکست</a></li>
          <li className="hover:text-[#FFA31A] duration-300"><a href="">دوره</a></li>
          <li className="hover:text-[#FFA31A] duration-300"><a href="">مقالات</a></li>
        </ul>
        <button className="w-full h-12 mb-10 bg-green-500 text-white rounded-lg"><AddIcon/>دوره طراحی سایت</button>
      </div>
    </>
  );
}

export default menu;
