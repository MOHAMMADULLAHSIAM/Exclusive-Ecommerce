import React from 'react'
import Section from './Section'
import Category from './Category'
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats } from "react-icons/tb";
import { IoCameraOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { TbDeviceGamepad } from "react-icons/tb";
import HeaderSec from './HeaderSec';
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";







const Categories = () => {

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='absolute -top-26 right-0 h-[46px] w-[46px] bg-[#F5F5F5] rounded-full md:block hidden '
        // style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        <div className='w-full  h-full relative rounded-full'>


          <FaArrowRight className='text-black text-2xl absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2' />
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='absolute -top-26 right-12 h-[46px] w-[46px] bg-[#F5F5F5] rounded-full md:block hidden '
        // style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        <div className='w-full  h-full relative rounded-full'></div>
        <FaArrowLeft className='text-black text-2xl absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2' />
      </div>
    );
  }
    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
     nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 665,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <Section className='mt-20 '>
        <HeaderSec title='Categories' heading='Browse By Category' className='flex flex-col items-center lg:inline'/>
        <Slider className='mt-15 pb-[70px] border-b-2 border-[#b3b3b3]'  {...settings}>
        <Category title='Phones ' icon={<CiMobile4 />}/>
            <Category title='Computers ' icon={<HiOutlineComputerDesktop />}/>
            <Category title='SmartWatch ' icon={<TbDeviceWatchStats />}/>
            <Category title='Camera ' icon={<IoCameraOutline />}/>
            <Category title='HeadPhones ' icon={<CiHeadphones />}/>
            <Category title='Gaming ' icon={<TbDeviceGamepad />}/>
            <Category title='Gaming ' icon={<TbDeviceGamepad />}/>
      </Slider>
        
    </Section>
  )
}

export default Categories
