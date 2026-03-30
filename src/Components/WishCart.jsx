import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { wishRemoveReducer } from '../Slices/Slice';
import { useNavigate } from 'react-router';
import { toast, Bounce } from 'react-toastify';



const WishCart = ({ img, title, price, dltprice, percentage, id, }) => {



  const dispatch = useDispatch()
  let navigate = useNavigate();

  function handleDetails() {
    navigate(`/productdetails/${id}`)
  }

  function handleWishRemove() {
    dispatch(wishRemoveReducer(id))
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
  return (
    <div className='group'>
      <div className='bg-[#F5F5F5] md:w-[270px] md:h-[250px] md:p-[49px] w-40 h-32 p-8 rounded-sm relative overflow-hidden'>
        <img src={img} alt="" className='cursor-pointer ' onClick={handleDetails} />
        <div className='py-1 md:px-3 px-1.5 bg-[#DB4444] rounded-sm absolute top-3 left-3 text-[#FAFAFA] text-xs '>
          <p>-{percentage}%</p>
        </div>
        <div className=' flex absolute right-3 flex-col gap-2 top-3'>
          <div onClick={handleWishRemove} className='cursor-pointer md:w-[34px] w-7 md:h-[34px] h-7 bg-white rounded-full relative'>
            <RiDeleteBin6Line className='md:text-[16px] text-sm -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute' />
          </div>
        </div>
        <div className='bg-black  text-white font-medium absolute left-0 -bottom-10 w-full  group-hover:bottom-0  rounded-b-sm md:py-2 py-0.5 text-sm md:text-[16px]  ease-linear duration-200 cursor-pointer select-none'>
          <div className="flex items-center justify-center gap-2">
            <AiOutlineShoppingCart className="text-2xl" />
            <p> Add To Cart </p>
          </div>
        </div>
      </div>
      <h4 className='md:text-[16px] text-xs mt-3 font-medium lg:mt-4 cursor-pointer'  >{title}</h4>
      <div className='flex  font-medium md:gap-3 gap-1.5 items-center my-2 text-sm md:text-[16px] '>
        <p className='text-[#DB4444]'>{price}</p>
        <p className='text-[#808080] line-through'>{dltprice}</p>
      </div>
    </div>
  )
}

export default WishCart
