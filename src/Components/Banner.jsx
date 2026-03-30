import React, {  useEffect, useState } from 'react'
import Container from './Container'
import List from './List'
import { NavLink } from 'react-router'
import { MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImg from '../assets/BannerImg.jpg'
import Slider from "react-slick";
import Flex from './Flex';
import { BiSolidCategory } from "react-icons/bi";




const Banner = () => {
   
    
    
    const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className='lg:w-3 lg:h-3 w-1.5 h-1.5 rounded-full bg-[#7f7f7f75] flex'
        // style={{
        //   width: "30px",
        //   height
        //   color: "blue",
        //   border: "1px blue solid"
        // }}
      >
      </div>
    )
  };

  

 const [cetegory,setCetegory]=useState("false")
  function handleCetegory(){
    setCetegory(!cetegory)
  }

    

  return (
    <section>
        <Container>
                <BiSolidCategory className='lg:hidden block text-4xl pt-2 cursor-pointer' onClick={handleCetegory}/>
            <Flex className='lg:gap-[49px] lg:flex-row flex-col'>
            <div className={`${cetegory ? "hidden " : "block "} lg:block lg:w-[25%] w-full lg:border-r-2 lg:border-[#0000002c]`}>
            <List className=' flex flex-col items-start justify-start lg:gap-y-4 gap-y-2 pt-10  '>
                <li className='w-full hover:translate-x-3 duration-300'>
                    <NavLink to="" className='flex justify-between items-end '>
                        Woman’s Fashion <span ><MdKeyboardArrowRight className='text-[24px] mr-4' /></span>
                    </NavLink>
                </li>
                <li className='w-full hover:translate-x-3 duration-300 '>
                    <NavLink to="" className='flex justify-between items-end'>
                    Men’s Fashion <span><MdKeyboardArrowRight className='text-[24px]  mr-4'  /></span>
                    </NavLink>
                </li>
                <li className=' w-full hover:translate-x-3 duration-300 cursor-pointer'>
                    <NavLink to="">
                        Electronics
                    </NavLink>
                </li>
                <li className=' w-full hover:translate-x-3 duration-300 cursor-pointer' >
                    <NavLink to="">
                        Home & Lifestyle
                    </NavLink>
                </li>
                <li className=' w-full hover:translate-x-3 duration-300 cursor-pointer'>
                    <NavLink to="">
                        Medicine
                    </NavLink>
                </li>
                <li className=' w-full hover:translate-x-3 duration-300 cursor-pointer'>
                    <NavLink to="">
                        Sports & Outdoor
                    </NavLink>
                </li>
                <li className=' w-full hover:translate-x-3 duration-300 cursor-pointer'>
                    <NavLink to="">
                        Baby’s & Toys
                    </NavLink>
                </li>
                <li className=' w-full hover:translate-x-3 duration-300 cursor-pointer'>
                    <NavLink to="">
                        Groceries &  
                    </NavLink>
                </li>
                <li className=' w-full hover:translate-x-3 duration-300 cursor-pointer'>
                    <NavLink to="">
                        Health & Beauty
                    </NavLink>
                </li>
            </List>
            </div>
            <div className='lg:w-[75%]  w-full mt-10'>
                <Slider  {...settings}>
        <div>
          <img src={BannerImg} alt="" />
        </div>
        <div>
          <img src={BannerImg} alt="" />
        </div>
        <div>
          <img src={BannerImg} alt="" />
        </div>
        <div>
          <img src={BannerImg} alt="" />
        </div>
        <div>
          <img src={BannerImg} alt="" />
        </div>
        
      </Slider>
                
            </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Banner
