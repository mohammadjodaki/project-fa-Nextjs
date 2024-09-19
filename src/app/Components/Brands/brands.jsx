import Image from "next/image";
import React from "react";
import Digi from '../../Images/digi.jpg'
import Digikala from '../../Images/digikala.png'
import Gold from '../../Images/gold.jpg'
import Goldiran from '../../Images/goldiran.png'
import Bimi from '../../Images/bimi.webp'
import Bimito from '../../Images/bimito-org.png'

function brands() {
  return (
    <div className="w-full flex flex-col justify-center mt-[500px] lg:mt-20">
      <div className="text-center">
        <h2 className="text-3xl">برندهایی که به ما اعتماد کردند</h2>
        <p className="mt-3 text-xl text-gray-700">
          دانشجویان دوره های ما به استخدام بهترین برندها درآمدند
        </p>
      </div>
      <div className="w-[85%] flex flex-wrap lg:flex-nowrap gap-5 my-20 mx-auto">
        <div className="w-full lg:w-1/3 h-32 px-5 flex justify-between items-center rounded-xl shadow-lg">
        <Image className="w-16 h-16 rounded-full" src={Digi}/>
        <div className="ml-20">
            <h2>دیجی کالا</h2>
            <p>نازنین ریاحی زاد</p>
        </div>
        <Image className="w-20 h-9" src={Digikala}/>
        </div>
        <div className="w-full lg:w-1/3 h-32 px-5 flex justify-between items-center rounded-xl shadow-lg">
                <Image className="w-16 h-16 rounded-full" src={Gold}/>
        <div className="ml-20">
            <h2>گلدیران</h2>
            <p>بهاره علیدوستی</p>
        </div>
        <Image className="w-20 h-9" src={Goldiran}/>
        </div>
        <div className="w-full lg:w-1/3 h-32 px-5 flex justify-between items-center rounded-xl shadow-lg">
                <Image className="w-16 h-16 rounded-full" src={Bimi}/>
        <div className="ml-20">
            <h2>بیمه 24</h2>
            <p>آرش راد</p>
        </div>
        <Image className="w-20 h-9" src={Bimito}/>
        </div>
      </div>
    </div>
  );
}

export default brands;
