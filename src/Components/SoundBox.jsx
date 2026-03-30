import React, { useEffect, useState } from 'react'
import Section from './Section'
// import JBL from '../assets/JBL.png'
import { NavLink } from 'react-router'
import { countDownDateAndTime } from 'countdown-date-time'; 

const SoundBox = () => {

    const conduct_date = '2027-03-25 16:54:00';
    const [count,setCount]=useState({})


    useEffect(()=>{
        const interval=setInterval(()=>{
            const countDown = countDownDateAndTime(conduct_date);
            setCount(countDown)

        })
    },[])




  return (
    <Section className='mt-35 mb-[71px]'>
        <div className='bg-[url(./assets/JBL.png)]    bg-no-repeat bg-center bg-cover '>
        <div className='py-[69px] pl-14 md:text-start text-center '>
            <h5 className='text-[#00FF66] font-semibold'>Categories</h5>
            <h2 className='md:my-8 my-5 font-semibold md:w-[400px]  md:text-5xl text-3xl w-auto text-[#FAFAFA] leading-15'>Enhance Your Music Experience</h2>
            <div className=' justify-center md:justify-start flex mb-10 items-center gap-6'> 
                <div className=' md:w-[62px] w-[48px] md:h-[62px] h-[48px] rounded-full relative bg-white'>
                    <div className='absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 text-center '>
                        <h4 className='md:text-[16px] text-sm font-semibold'> { count.hours}</h4>
                        <h5 className='md:text-[11px] text-[9px] '>Hours</h5>
                    </div>
                </div>
                <div className='md:w-[62px] w-[48px] md:h-[62px] h-[48px] rounded-full relative bg-white'>
                    <div className='absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 text-center '>
                        <h4 className=' md:text-[16px] font-semibold'>{count.days}</h4>
                        <h5 className='md:text-[11px] text-[9px]'>Days</h5>
                    </div>
                </div>
                <div className=' md:w-[62px] w-[48px] md:h-[62px] h-[48px] rounded-full relative bg-white'>
                    <div className='absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 text-center '>
                        <h4 className=' md:text-[16px] font-semibold'>{count.minutes}</h4>
                        <h5 className='md:text-[11px] text-[9px]'>Minutes</h5>
                    </div>
                </div>
                <div className='md:w-[62px] w-[48px] md:h-[62px] h-[48px] rounded-full relative bg-white'>
                    <div className='absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 text-center'>
                        <h4 className=' md:text-[16px] font-semibold'>{count.seconds}</h4>
                        <h5 className='md:text-[11px] text-[9px]'>Seconds</h5>
                    </div>
                </div>
                
            </div>
            <NavLink to='#' className='bg-[#00FF66] md:py-4 py-2 md:px-12 px-8 font-medium rounded-sm text-white md:text-[16px] text-sm '>Buy Now!</NavLink>
        </div>
        </div>
    </Section>
  )
}

export default SoundBox
