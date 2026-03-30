import React from 'react'
import Section from './Section'
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { decrimentRududcer, incrimentReducer, removeReducer, subtotalReducer } from '../Slices/Slice';





const CartDetails = ({ img, title, price, quantity, subtotal,id }) => {

    const dispatch=useDispatch()


//  quantity incriment dicriment
    function handleInciment (){
        dispatch(incrimentReducer(id))
        dispatch(subtotalReducer())
    }

    function handleDecrement(){
        dispatch(decrimentRududcer(id))
        dispatch(subtotalReducer())
    }
    //  quantity incriment dicriment


    function handleRemove(){
        dispatch(removeReducer(id))
        dispatch(subtotalReducer())
    }
    return (
        <Section>

            <div className="flex group justify-between items-center  shadow-sm px-10 py-6 rounded-sm">

                {/* Product */}
                <div className="w-1/4 flex items-center gap-4">
                
                <div className='relative' >
                    <div className='absolute -left-2 -top-1 hidden group-hover:block duration-200 ease-linear cursor-pointer ' onClick={handleRemove}>
                    <div className='w-5 h-5 relative rounded-full bg-[#DB4444] text-white text-[10px]'>
                        <ImCross className='-trasnlate-x-1/2 -translate-1/2 top-1/2 left-1/2 absolute' />
                    </div>
                    </div>
                    <img src={img} className="w-14"  />
                </div>
                    <p>{title}</p>
                </div>

                {/* Price */}
                <div className="w-1/4 text-center">
                    <p>${price}</p>
                </div>

                {/* Quantity */}
                <div className="w-1/4 flex justify-center">
                    <div className="border-2 border-[#808080a9] flex items-center gap-2 px-3 py-1 rounded">
                        <span>{quantity}</span>
                        <div>
                            <MdKeyboardArrowUp className='cursor-pointer' onClick={handleInciment}/>
                            <MdKeyboardArrowDown className='cursor-pointer' onClick={handleDecrement}/>
                        </div>
                    </div>
                </div>

                {/* Subtotal */}
                <div className="w-1/4 text-right">
                    <p>${subtotal}</p>
                </div>

            </div>
        </Section>
    )
}

export default CartDetails
