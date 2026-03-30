import React from 'react'
import Section from './Section'
import PlayStation from '../assets/PlayStation.png'
import WomensCollection from '../assets/WomensCollection.png'
import Speakers from '../assets/Speakers.png'
import Perfume from '../assets/Perfume.png'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import NewArrivalHead from './NewArrivalHead'
import { FaTruckFast } from "react-icons/fa6";


const Arrivla = () => {
    return (
        <Section className='mb-50 lg:mb-125 relative'>
            <div className='flex justify-center itmes-center '>
                <div className=' ' >
                    <div className='flex gap-4 items-center '>
                        <div className='w-4 h-8 lg:w-5 lg:h-10 bg-[#DB4444] rounded-sm'></div>
                        <h6 className='text-sm lg:text-[16px] text-[#DB4444]  font-semibold'>Featured</h6>
                    </div>
                    <div>
                        <h2 className='lg:text-4xl text-2xl font-semibold mt-6'>New Arrival</h2>
                    </div>
                </div>
            </div>


            <div className='flex items-center lg:justify-between lg:flex-row flex-col gap-y-8 mt-15'>
                <div className='relative group'>
                    <img src={PlayStation} alt="" className='lg:h-auto h-100' />
                    <NewArrivalHead title='PlayStation 5' topics='Black and White version of the PS5 coming out on sale.' className='w-[242px] my-4' />
                </div>
                <div className='flex flex-col  gap-y-8 '>
                    <div className='relative group'>
                        <img src={WomensCollection} alt="" />
                        <NewArrivalHead title='Women’s Collections' topics='Featured woman collections that give you another vibe.' className='w-[230px] my-4' />
                    </div>
                    <div className='flex items-center lg:justify-between gap-x-5 lg:gap-x-0 '>
                        <div className='relative group'>
                            <img src={Speakers} alt="" />
                            <NewArrivalHead title='Speakers' topics='Amazon wireless speakers' className='lg:my-2 my-1' />
                        </div>
                        <div className='relative group'>
                            <img src={Perfume} alt="" />
                            <NewArrivalHead title='Perfume ' topics='GUCCI INTENSE OUD EDP' className='lg:my-2 my-1' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center  lg:w-[943px] md:w-[600px] justify-between mx-auto mt-34'>
                <div className='text-center w-[249px]'>
                    <div className='lg:h-[58px] lg:w-[58px] w-11 h-11 rounded-full bg-black relative  animation-pulse mx-auto'>
                        <FaTruckFast className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white lg:text-[35px] text-[27px]' />
                    </div>
                    <h2 className='lg:text-xl text-[16px] font-semibold mt-6'>FREE AND FAST DELIVERY</h2>
                    <p className='text-sm'>Free delivery for all orders over $140</p>
                </div>
                <div className='text-center w-[249px]'>
                    <div className='lg:h-[58px] lg:w-[58px] w-11 h-11 rounded-full bg-black relative  animation-pulse mx-auto'>
                        <TfiHeadphoneAlt className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white  lg:text-[35px] text-[27px]' />
                    </div>
                    <h2 className='lg:text-xl text-[16px] font-semibold mt-6'>24/7 CUSTOMER SERVICE</h2>
                    <p className='text-sm'>Friendly 24/7 customer support</p>
                </div>
                <div className='text-center w-[249px]'>
                    <div className='lg:h-[58px] lg:w-[58px] w-11 h-11 rounded-full bg-black relative  animation-pulse mx-auto'>
                        <IoShieldCheckmark className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white  lg:text-[35px] text-[27px]' />
                    </div>
                    <h2 className='lg:text-xl text-[16px] font-semibold mt-6'>MONEY BACK GUARANTEE</h2>
                    <p className='text-sm'>We reurn money within 30 days</p>
                </div>
            </div>
            <div className='absolute -bottom-30 lg:right-10 right-5'>
                <a href="#"><div  className='bg-[#F5F5F5] w-[46px] h-[46px] rounded-full text-black relative text-2xl  '>
                    <FaArrowUp className='-translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2 absolute' />
                </div>
                    </a>
            </div>
        </Section>
    )
}

export default Arrivla
