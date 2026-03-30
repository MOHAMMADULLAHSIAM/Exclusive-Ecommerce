import React, { useRef } from 'react'
import HeaderSec from './HeaderSec'
import Section from './Section'
import ExploreCart from './ExploreCart'
import DogFood from '../assets/DogFood.png'
import Camera from '../assets/Camera.png'
import Laptop from '../assets/Laptop.png'
import PS5 from '../assets/PS5.png'
import Button from './Button'
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router'

const Explore = () => {

    const navigate = useNavigate()
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    rows: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                }
            }
        ]
    };

  return (
    <Section className='mb-[168px]'>
        <div className='flex items-end justify-between'>
            <HeaderSec title='Our Products' heading='Explore Our Products'/>
            <div className='md:flex items-center hidden '>
              <div className='w-[46px] h-[46px] relative bg-[#F5F5F5] rounded-full cursor-pointer' onClick={() => sliderRef.current?.slickPrev()}>
                <FaArrowLeft className='absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2  text-lg'/>
              </div>
              <div className='w-[46px] h-[46px] relative bg-[#F5F5F5] rounded-full cursor-pointer' onClick={() => sliderRef.current?.slickNext()}>
                <FaArrowRight  className='absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2  text-lg'/>
              </div>
            </div>
        </div>
        
        <Slider ref={sliderRef} {...settings} className='lg:mt-15 mt-8'>
         <ExploreCart img={DogFood} title="Breed Dry Dog Food" price="100" rating="35" />
        <ExploreCart img={Camera} title="CANON EOS DSLR Camera" price="360" rating="95" />
        <ExploreCart img={Laptop} title="ASUS FHD Gaming Laptop" price="700" rating="325" />
        <ExploreCart img={PS5} title="Curology Product Set" price="500" rating="145" />
                 <ExploreCart img={DogFood} title="Breed Dry Dog Food" price="100" rating="35" />
        <ExploreCart img={Camera} title="CANON EOS DSLR Camera" price="360" rating="95" />
        <ExploreCart img={Laptop} title="ASUS FHD Gaming Laptop" price="700" rating="325" />
        <ExploreCart img={PS5} title="Curology Product Set" price="500" rating="145" />
         <ExploreCart img={DogFood} title="Breed Dry Dog Food" price="100" rating="35" />
        <ExploreCart img={Camera} title="CANON EOS DSLR Camera" price="360" rating="95" />
        <ExploreCart img={Laptop} title="ASUS FHD Gaming Laptop" price="700" rating="325" />
        <ExploreCart img={PS5} title="Curology Product Set" price="500" rating="145" />
                 <ExploreCart img={DogFood} title="Breed Dry Dog Food" price="100" rating="35" />
        <ExploreCart img={Camera} title="CANON EOS DSLR Camera" price="360" rating="95" />
        <ExploreCart img={Laptop} title="ASUS FHD Gaming Laptop" price="700" rating="325" />
        <ExploreCart img={PS5} title="Curology Product Set" price="500" rating="145" />
        </Slider>



      <Button title='View All Products 'onClick={() => navigate('/shop')} className='w-[234px] mx-auto mt-15'/>

    </Section>
  )
}

export default Explore
