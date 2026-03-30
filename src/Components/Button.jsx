import React from 'react'
import { NavLink } from 'react-router'

const Button = ({title,className,onClick}) => {
  return (
    <div className={` ${className} `}onClick={onClick}>
      <NavLink  className={` text-[#FAFAFA]  font-medium  md:py-4 py-2 md:px-12 px-8 md:text-[16px] text-sm bg-[#DB4444] rounded-sm text-center   ${className}`} to='#'>
        {title}
      </NavLink>
    </div>
   
  )
}

export default Button
