import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';



const CountDown = () => {
  const conduct_date = '2028-03-05 15:37:00';

  const [count, setCount]= useState({})

  useEffect(()=>{
    const interval =setInterval (()=>{
      const countDown = countDownDateAndTime(conduct_date)
      setCount (countDown)
    },1000)
  },[])
  return (
    <div>
      <div className='flex items-center gap-2 leading-[30px] '>
        <div className='flex items-center gap-[17px] '>
          <div >
          <h6 className='text-xs font-medium'>Days</h6>
          <h4 className='lg:text-[32px] text-2xl font-bold'>{count.days}</h4>
          </div>
          <p className='font-semibold lg:text-4xl text-3xl text-[#E07575]'>:</p>
        </div>
        <div className='flex items-center gap-[17px]'>
          <div>
          <h6 className='text-xs font-medium'>Hours</h6>
          <h4 className='lg:text-[32px] text-2xl font-bold'>{count.hours}</h4>
          </div>
          <p className='font-semibold lg:text-4xl text-3xl text-[#E07575]'>:</p>
        </div>
        <div className='flex items-center gap-[17px]'>
          <div>
          <h6 className='text-xs font-medium'>Minutes</h6>
          <h4 className='lg:text-[32px] text-2xl font-bold'>{count.minutes}</h4>
          </div>
          <p className='font-semiboldlg:text-4xl text-3xl text-[#E07575]'>:</p>
        </div>
        <div className='flex items-center gap-[17px]'>
          <div>
          <h6 className='text-xs font-medium'>Seconds</h6>
          <h4 className='lg:text-[32px] text-2xl font-bold'>{count.seconds}</h4>
          </div>
        </div>
        </div>
    </div>
  )
}

export default CountDown
