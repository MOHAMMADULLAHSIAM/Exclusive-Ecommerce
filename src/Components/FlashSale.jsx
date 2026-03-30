import React from 'react'
import Section from './Section'
import HeaderSec from './HeaderSec'
import CountDown from './CountDown'
import Cart from './Cart'
import jostick from '../assets/jostick.png'
import keyboard from '../assets/keyboard.png'
import TV from '../assets/TV.png'
import chair from '../assets/chair.png'
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Button from './Button'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'



const FlashSale = () => {

const product=useSelector((state)=>state.allProducts.value)
const navigate=useNavigate()

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='absolute -top-21 right-0 h-[46px] w-[46px] bg-[#F5F5F5] rounded-full md:block hidden '
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
        className='absolute -top-21 right-12 h-[46px] w-[46px] bg-[#F5F5F5] rounded-full md:block hidden '
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
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 665,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <Section className='mt-[154px]'>
      <div className='flex lg:gap-x-[87px] lg:flex-row flex-col  lg:items-end items-center gap-y-6 '>
        <HeaderSec title="Today’s" heading="Flash Sales" />
        <CountDown />
      </div>
      <div className='border-b-2 border-[#b3b3b3] pb-15'>
      <Slider className='mt-10 ' {...settings}>
        {/* <Cart img={jostick} title="HAVIT HV-G92 Gamepad" price='$120' dltprice="$160 " rating="(88)" percentage="40" /> */}
        {
          product.map((item,idx)=>{
            return(

              <Cart
              productdetails={item}
              id={item.id}
              key={idx}
               img={item.thumbnail}
                title={item.title}
                 price={Number(item.price*(1-item.discountPercentage/100)).toFixed(2)} dltprice={item.price}
                  rating={item.reviews.length}
                  percentage={item.discountPercentage}/>
            )
          })
        }
        {/* <Cart img={keyboard} title="AK-900 Wired Keyboard" price='$960' dltprice="$1160 " rating="(88)" percentage="35"/>
        <Cart img={TV} title="IPS LCD Gaming Monitor" price='$370' dltprice="$400 " rating="(88)" percentage="30" ></Cart>
        <Cart img={chair} title="S-Series Comfort Chair " price='$375' dltprice="$400 " rating="(88)" percentage="25" />
        <Cart img={chair} title="S-Series Comfort Chair " price='$375' dltprice="$400 " rating="(88)" percentage="25" /> */}
      </Slider>
      <Button  title='View All Products 'onClick={() => navigate('/shop')} className='w-[234px] mx-auto mt-15'/>
      </div>
    </Section>
  )
}

export default FlashSale
