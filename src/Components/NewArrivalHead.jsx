import React from 'react'
import { NavLink } from 'react-router'

const NewArrivalHead = ({className,topics,title}) => {
    return (
        <div className=' lg:bottom-8 bottom-5 left-8 text-[#fafafa] absolute'>
            <h2 className='lg:text-2xl text-lg font-semibold tracking-[3%]'>{title}</h2>
            <p className={`text-sm  leading-5  ${className}`}>{topics}</p>
            <NavLink to='' className='text-white group-hover:underline duration-300 ease-linear font-medium'>Shop Now</NavLink>
        </div>
    )
}

export default NewArrivalHead
