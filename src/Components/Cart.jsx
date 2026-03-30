import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { NavLink } from 'react-router'
import { useNavigate } from "react-router";
import { Rate } from 'antd'
import { useDispatch, useSelector, } from 'react-redux';
import { cartReducer, subtotalReducer, wishReducer, wishRemoveReducer } from '../Slices/Slice';
import { FaHeart } from "react-icons/fa";
import { toast, Bounce } from 'react-toastify';



const Cart = ({ img, title, price, dltprice, rating, percentage, id, productdetails }) => {



  
  const [activeHeart, setActiveHeart] = useState(false)

  function handleWish() {
    // toggle wishlist state based on current heart
    if (!activeHeart) {
      dispatch(wishReducer(productdetails));
    } else {
      dispatch(wishRemoveReducer(id));
      toast.info('🦄 Item removed from wishlist!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    setActiveHeart(!activeHeart);
    
  }



  const dispatch = useDispatch()
  function handleCart() {
    dispatch(cartReducer({...productdetails,quantity:1}))
    dispatch(subtotalReducer())
  }
  let navigate = useNavigate();


  function handleDetails() {
    
    navigate(`/productdetails/${id}`)

  }
  return (
    <div className='group'>
      <div className='bg-[#F5F5F5] md:w-[270px] md:h-[250px] md:p-[49px] w-40 h-32 p-8 rounded-sm relative overflow-hidden'>
        <img src={img} alt="img" onClick={handleDetails} />
        <div className='py-1 md:px-3 px-1.5 bg-[#DB4444] rounded-sm absolute top-3 left-3 text-[#FAFAFA] text-xs '>
          <p>-{percentage}%</p>
        </div>
        <div className=' flex absolute right-3 flex-col gap-2 top-3'>
          <div className='md:w-[34px] w-7 md:h-[34px] h-7 bg-white rounded-full relative'>
            {
              !activeHeart ?
                <FaRegHeart onClick={handleWish} className=' cursor-pointer md:text-[16px] text-sm -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute' />
                :
                <FaHeart onClick={handleWish} className=' cursor-pointer md:text-[16px] text-sm -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute text-[#DB4444]' />
            }
          </div>
          <div className='md:w-[34px] w-7 md:h-[34px] h-7 bg-white rounded-full relative'>
            <FiEye className='md:text-[16px] text-sm -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute' />
          </div>
        </div>
        <div className='bg-black text-center text-white font-medium absolute left-0 bottom-0 lg:-bottom-10 w-full  lg:group-hover:bottom-0  rounded-b-sm md:py-2 py-0.5 text-sm md:text-[16px]  ease-linear duration-200 cursor-pointer select-none' onClick={handleCart}>
          <p>Add To Cart </p>
        </div>
      </div>
      <h4 className='md:text-[16px] text-xs mt-3 font-medium lg:mt-4 cursor-pointer' onClick={handleDetails} >{title}</h4>
      <div className='flex  font-medium md:gap-3 gap-1.5 items-center my-2 text-sm md:text-[16px] '>
        <p className='text-[#DB4444]'>{price}</p>
        <p className='text-[#808080] line-through'>{dltprice}</p>
      </div>
      <div className='flex items-center gap-2'>
        <div className='flex md:text-xl items-center text-[16px] text-[#FFAD33]'>
          {<Rate allowHalf defaultValue={2.5} />}
        </div>
        <p className='text-sm font-semibold text-[#808080]'>({rating})</p>
      </div>
    </div>
  )
}

export default Cart
