import React from 'react'
import Container from './Container'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <header className='bg-black'>
        <Container>
            <div className='flex flex-col lg:flex-row items-center  lg:justify-end py-3 gap-y-4 lg:gap-auto'>
            <h6 className='text-[#FAFAFA] ml-2 text-center lg:text-sm text-xs lg:mr-[231px]  '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<span className='font-semibold ms-2
            hover:underline'><NavLink to='/shop'>ShopNow</NavLink></span></h6>
            <select name="language-select" id="language-select" className='text-[#FAFAFA] bg-black lg:text-sm text-xs'>
                <option value="en">English</option>
                <option value="bn">Bangla</option>
                <option value="sp">Spanish</option>
            </select>
            </div>
        </Container>
    </header>
  )
}

export default Header
