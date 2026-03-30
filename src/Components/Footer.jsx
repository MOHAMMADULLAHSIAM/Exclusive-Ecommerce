import React from 'react'
import Container from './Container'
import FooterLogo from '../assets/FooterLogo.png'
import { TbSend2 } from "react-icons/tb";
import { NavLink } from 'react-router';
import QR from '../assets/QR Code.png'
import GooglePlay from '../assets/GooglePlay.png'
import downloadappstore from '../assets/download-appstore.png'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";




const Footer = () => {
  return (
    <footer className=' px-2 lg:px-2 bg-black  mt-50'>
        <Container>
            <div className='flex text-white py-20 justify-between flex-wrap gap-y-20'>
             <div className=' '>
                <div>
                    <img src={FooterLogo} alt="img" />
                </div>
                <h4 className='my-6 font-medium text-xl'>Subscribe</h4>
                <p>Get 10% off your first order</p>
                <form>
                    <div className='relative w-[216px] mt-4'>
                    <input type="email" placeholder='Enter your email' className=' outline-[#fafafa] outline-1 rounded-sm ps-4 py-3 w-full' />
                    <TbSend2 className=' absolute bottom-3.5 cursor-pointer text-2xl right-3' />
                    </div>
                </form>
             </div>
             <div>
             <h3 className='text-xl font-medium'>Support</h3>
             <ul className='w-[175px] flex flex-col gap-y-4 mt-6'>
                <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                <li>exclusive@gmail.com</li>
                <li>+88015-88888-9999</li>
             </ul>
             </div>
             <div>
             <h3 className='text-xl font-medium'>Account</h3>
             <ul className='w-[175px] flex flex-col gap-y-4 mt-6'>
                <li> <NavLink to=''>My Account</NavLink></li>
                <li> <NavLink to=''>Login / Register</NavLink></li>
                <li> <NavLink to=''>Cart</NavLink></li>
                <li> <NavLink to=''>Wishlist</NavLink></li>
                <li> <NavLink to=''>Shop</NavLink></li>
             </ul>
             </div>
             <div>
             <h3 className='text-xl font-medium'>Quick Link</h3>
             <ul className='w-[175px] flex flex-col gap-y-4 mt-6'>
                <li> <NavLink to=''>Privacy Policy</NavLink></li>
                <li> <NavLink to=''>Terms Of Use</NavLink></li>
                <li> <NavLink to=''>FAQ</NavLink></li>
                <li> <NavLink to=''>Contact</NavLink></li>
             </ul>
             </div>
             <div className='lg:mx-0 mx-auto'>
             <h3 className='text-xl font-medium'>Download App</h3>
             <div className=' mt-6'>
                <p className='text-xs text-[#fafafa]'>Save $3 with App New User Only</p>
                <div className='flex items-center gap-x-2'>
                    <div >
                        <img src={QR} alt="img" />
                    </div>
                    <div className='flex flex-col items-center mt-2'>
                        <div><NavLink to=''><img src={GooglePlay} alt="img" /></NavLink></div>
                        <div><NavLink to=''><img src={downloadappstore} alt="img" /></NavLink> </div>
                    </div>
                </div>
                <ul className='text-white flex text-2xl items-center gap-x-6 mt-6 '>
                    <li>
                        <NavLink to=''>
                            <FaFacebookF />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to=''>
                            <CiTwitter />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to=''>
                            <FaInstagram />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to=''>
                            <FaLinkedinIn />
                        </NavLink>
                    </li>
                </ul>
             </div>
             </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer
