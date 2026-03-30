import React from 'react'

const HeaderSec = ({className,title,heading}) => {
  return (
    <div className={`${className}`}  >
      <div className='flex gap-4 items-center '>
        <div className='w-4 h-8 lg:w-5 lg:h-10 bg-[#DB4444] rounded-sm'></div>
        <h6 className='text-sm lg:text-[16px] text-[#DB4444]  font-semibold'>{title}</h6>
      </div>
      <div>
        <h2 className='lg:text-4xl text-2xl font-semibold mt-6'>{heading}</h2>
      </div>
    </div>
  )
}

export default HeaderSec
