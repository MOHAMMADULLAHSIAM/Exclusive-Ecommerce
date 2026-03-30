import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { NavLink } from 'react-router'


const BestCart = ({img, title, price, dltprice, rating,percentage}) => {
  return (
    <div className='group'>
      <div className='bg-[#F5F5F5] md:w-[270px] md:h-[250px] md:p-[49px] w-40 h-32 p-8 rounded-sm relative overflow-hidden'>
        <img src={img} alt="img" />
            <div className=' flex absolute right-3 flex-col gap-2 top-3'>
                <div className='md:w-[34px] w-7 md:h-[34px] h-7 bg-white rounded-full relative'>
                <FaRegHeart className='md:text-[16px] text-sm -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute' />
                </div>
                <div  className='md:w-[34px] w-7 md:h-[34px] h-7 bg-white rounded-full relative'>
                <FiEye className='md:text-[16px] text-sm -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute' />
                </div>
            </div>
            <div className='bg-black text-center text-white font-medium absolute left-0 -bottom-10 w-full  group-hover:bottom-0  rounded-b-sm md:py-2 py-0.5 text-sm md:text-[16px]  ease-linear duration-200 '>
              <NavLink to='#'>Add To Cart</NavLink>
            </div>
      </div>
      <h4 className='md:text-[16px] text-xs mt-3 font-medium lg:mt-4'>{title}</h4>
      <div className='flex  font-medium md:gap-3 gap-1.5 items-center my-2 text-sm md:text-[16px] '>
      <p className='text-[#DB4444]'>${price}</p>
      <p className='text-[#808080] line-through'>${dltprice}</p>
      </div>
      <div className='flex items-center gap-2'>
      <div className='flex md:text-xl items-center text-[16px]'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className='text-sm font-semibold text-[#808080]'>({rating})</p>
      </div>
    </div>
  )
}

export default BestCart
