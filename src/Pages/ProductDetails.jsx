

import { FaStar } from "react-icons/fa6";
import Section from '../Components/Section'
import Button from '../Components/Button'
import { FaRegHeart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { NavLink, useParams } from 'react-router'
import { FaArrowsRotate } from "react-icons/fa6";
import BreadCrumbs from '../Components/BreadCrumbs'
import Cart from '../Components/Cart'
import Slider from "react-slick";
import HeaderSec from '../Components/HeaderSec'
import React, { useEffect, useState } from 'react'
import { Rate } from 'antd'
import { useSelector } from "react-redux";




const ProductDetails = () => {

  let { id } = useParams()
  const [allProducts, setAllProducts] = useState([])
  const [productsImg, setProductsImg] = useState([])

  const allProductsList = useSelector((state) => state.allProducts.value)
  const relatedProducts = React.useMemo(() => {
    if (!Array.isArray(allProductsList) || !allProducts.category) return []
    return allProductsList
      .filter((item) => item.category === allProducts.category && item.id !== allProducts.id)
      .slice(0, 8)
  }, [allProductsList, allProducts])


  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then((data) => {
        setAllProducts(data)
        setProductsImg(data.images)
      })

  }, [])
  







  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
    <Section>
      <BreadCrumbs />
      <div className='flex items-center lg:flex-row flex-col gap-y-7 justify-between'>

        <div className='lg:flex lg:items-center lg:gap-7.5 lg:flex-row flex flex-col-reverse items-start gap-y-4'>
          <div className='flex items-center lg:flex-col lg:gap-y-4 gap-x-2 '>
            {/* <div className='w-42.5   bg-[#F5F5F5] py-3 px-6 rounded-sm h-34.5'>
            <img src={img1} alt="img" className='' />
          </div>
          <div className='w-42.5   bg-[#F5F5F5] py-3 px-6 rounded-sm h-34.5'>
            <img src={img2} alt="img" className='' />
          </div>
          <div className='w-42.5   bg-[#F5F5F5] py-3 px-6 rounded-sm h-34.5'>
            <img src={img3} alt="img" className='' />
          </div>
          <div className='w-42.5   bg-[#F5F5F5] py-3 px-6 rounded-sm h-34.5'>
            <img src={img4} alt="img" className='' />
          </div> */}
            {
              productsImg.map((img, idx) => {
                return (
                  <div className='lg:w-42.5 w-30   bg-[#F5F5F5] py-3 px-6 rounded-sm lg:h-34.5' key={idx}>
                    <img src={img} alt="img" className='' />
                  </div>
                )
              })
            }
          </div>
          <div className='lg:w-125 lg:h-150 w-85 h-95   bg-[#F5F5F5] py-3 px-6 rounded-sm relative'>
            <img src={allProducts.thumbnail} alt="img" className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
          </div>
        </div>
        <div>
          <h2 className='font-semibold lg:text-2xl text-xl'>{allProducts.title}</h2>
          <div className=' my-1 flex items-center gap-x-4'>
            <div className='flex items-center gap-x-2 '>
              <div className='flex md:text-xl items-center text-[16px] text-[#FFAD33]'>
                {<Rate allowHalf value={allProducts.rating ? allProducts.rating : 0} />}
              </div>
              <p className='text-sm font-semibold text-[#808080]'>({allProducts.reviews ? allProducts.reviews.length : 0} Reviews)</p>
            </div>
            <p className='text-[#00FF66] pl-4 border-l-2 border-[#808080]'>{allProducts.availabilityStatus}</p>
          </div>
          <p className='lg:text-2xl text-xl font-sans'>${Number(allProducts.price * (1 - allProducts.discountPercentage / 100)).toFixed(2)}</p>
          <div className=' lg:my-6 my-3.5 lg:w-100 w-auto lg:pb-6 pb-3.5 border-b-2 border-[#808080]'>
            <p className='w-87  text-sm '>{allProducts.description}</p>
          </div>
          <div className='flex items-center gap-6 lg:text-xl text-lg font-sans'>
            <h4 >Colours:</h4>
            <div className='flex gap-2 items-center '>
              <div className="h-5 w-5 rounded-full bg-[#A0BCE0] cursor-pointer 
               active:scale-100 active:ring-2 active:ring-black  duration-200 ">
              </div>
              <div className='h-5 w-5 rounded-full bg-[#E07575] cursor-pointer active:scale-100 active:ring-2 active:ring-black  duration-200 '></div>
            </div>
          </div>
          <div className=' my-6 flex items-center gap-6 text-xl font-sans'>
            <h4 >Size:</h4>
            <div className='flex gap-4 items-center '>
              <div className='border-2 border-[#0000006f] rounded-sm duration-100 ease-linear text-sm hover:bg-[#DB4444] font-medium hover:text-white hover:border-none cursor-pointer relative h-8 w-8 '><p className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>XS</p></div>
              <div className='border-2 border-[#0000006f] rounded-sm duration-100 ease-linear text-sm hover:bg-[#DB4444] font-medium hover:text-white hover:border-none cursor-pointer relative h-8 w-8 '><p className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>S</p></div>
              <div className='border-2 border-[#0000006f] rounded-sm duration-100 ease-linear text-sm hover:bg-[#DB4444] font-medium hover:text-white hover:border-none cursor-pointer relative h-8 w-8 '><p className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>M</p></div>
              <div className='border-2 border-[#0000006f] rounded-sm duration-100 ease-linear text-sm hover:bg-[#DB4444] font-medium hover:text-white hover:border-none cursor-pointer relative h-8 w-8 '><p className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>L</p></div>
              <div className='border-2 border-[#0000006f] rounded-sm duration-100 ease-linear text-sm hover:bg-[#DB4444] font-medium hover:text-white hover:border-none cursor-pointer relative h-8 w-8 '><p className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>XL</p></div>
            </div>
          </div>

          <div className='flex items-center justify-between '>
            <div className=' flex items-center gap-4'>
              <div className='w-[159px] h-[48px] border-[#808080] border-2 rounded-sm flex items-center'>
                <button className='w-[25%] border-[#808080] border-r-2 py-2 px-2 text-2xl hover:bg-[#DB4444] hover:bg-[#DB4444] hover:text-white rounded-sm hover:border-[#DB4444] duration-100 ease-linear cursor-pointer'>-</button>
                <p className='w-[50%] text-center  font-medium'>2</p>
                <button className='w-[25%] border-[#808080] border-l-2 py-2 px-2 text-2xl hover:bg-[#DB4444] hover:text-white rounded-sm hover:border-[#DB4444] duration-100 ease-linear  cursor-pointer'>+</button>
              </div>
              <Button title={"Buy Now"} className='lg:py-2 ' />
            </div>
            <div className='w-10 h-10 hover:bg-[#DB4444] hover:border-none duration-75 ease-linear hover:text-white hover:font-bold rounded-sm relative  border-[#808080] border-2'>
              <FaRegHeart className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
            </div>
          </div>
          <table className='mt-10 w-full border-solid border-2  border-[#0000006b] rounded-xl'>
            <tbody>

              <tr className='border-b-2 border-[#0000006b]'>
                <td>
                  <div className='flex items-center gap-4 pt-6 pl-4 pb-4'>
                    <div>
                      <FaTruckFast className='lg:text-4xl text-2xl' />
                    </div>
                    <div>
                      <h5 className='font-medium'>Free Delivery</h5>
                      <NavLink to="#" className='font-medium hover:underline duration-75 text-xs' >Enter your postal code for Delivery Availability</NavLink>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='flex items-center gap-4 pt-6 pl-4 pb-4'>
                    <div>
                      <FaArrowsRotate className='lg:text-4xl text-2xl' />
                    </div>
                    <div>
                      <h5 className='font-medium'>Return Delivery</h5>
                      <NavLink to="#" className='font-medium  text-xs' >Free 30 Days Delivery Returns. <span className='hover:underline duration-75'>Details</span> </NavLink>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <HeaderSec title="Related Item" className='mt-35 mb-15' />
      <div>
        <Slider {...settings}>
          {relatedProducts && relatedProducts.length > 0 ? (
            relatedProducts.map((product,idx) => (
              <Cart
                key={idx}
                img={product.thumbnail}
                title={product.title}
                price={`$${product.price}`}
                dltprice={`$${Number(product.price * 1.1).toFixed(2)}`}
                rating={product.rating}
                percentage={Math.round(product.discountPercentage)}
                id={product.id}
                productdetails={product}
              />
            ))
          ) : (
            [1, 2, 3, 4].map((i) => <Cart key={i} />)
          )}
        </Slider>
      </div>
    </Section>
  )
}

export default ProductDetails
