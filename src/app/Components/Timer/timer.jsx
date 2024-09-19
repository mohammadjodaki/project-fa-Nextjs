import React, { useState, useEffect } from 'react';  
import Image from 'next/image'
import Person from '../../Images/person-ok.webp'
import Massage from '../../Images/message-1.svg'


function timer() {

const initialTime = 50 * 24 * 60 * 60 * 1000; 
    const [timeLeft, setTimeLeft] = useState(initialTime);  

    useEffect(() => {  
        const timer = setInterval(() => {  
            setTimeLeft((prevTime) => {  
                if (prevTime <= 0) {  
                    clearInterval(timer);  
                    return 0
                }  
                return prevTime - 1000
            });  
        }, 1000);  

        return () => clearInterval(timer) 
    }, []);  

     
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));  
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));  
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);  


  return (
    <div className='w-[85%] flex flex-wrap my-24 mx-auto'>
        <div className='w-full lg:w-1/2'>
        <Image className='w-full lg:w-3/4' src={Person}/>
        </div>
        <div className='w-full lg:w-1/2'>
        <div className='w-full flex justify-center mt-5 gap-7 md:gap-12 lg:gap-20'>
            <span className='w-20 h-20 flex justify-center items-center rounded-3xl bg-[#DE2545] text-white text-xl text-center'>{seconds} <br/>ثانیه</span>
            <span className='w-20 h-20 flex justify-center items-center rounded-3xl bg-[#DE2545] text-white text-xl text-center'>{minutes} <br/>دقیقه</span>
            <span className='w-20 h-20 flex justify-center items-center rounded-3xl bg-[#DE2545] text-white text-xl text-center'>{hours} <br/>ساعت</span>
            <span className='w-20 h-20 flex justify-center items-center rounded-3xl bg-[#DE2545] text-white text-xl text-center'>{days} <br/>روز</span>
        </div>
        <Image className='w-32 h-32 mx-auto mt-10' src={Massage}/>
        <h2 className='text-4xl text-center mt-5'>منتظر اتفاق های خوب باشید ...</h2>
        <p className='text-2xl text-center mt-5'>ثبت نام کن تا زودتر از همه باخبر بشی!</p>
        <div className='w-full h-20 p-2 flex justify-between items-center rounded-lg shadow-xl mt-10'>
        <input className='outline-none p-5' type="text" placeholder='نام و نام خانوادگی' />
        <input className='hidden md:flex outline-none p-5' type="text" placeholder='آدرس ایمیل'/>
        <button className='w-14 h-14 flex justify-center items-center text-white p-5 rounded-lg bg-[#FB5573]'>ارسال</button>
        </div>
        </div>
    </div>
  )
}

export default timer