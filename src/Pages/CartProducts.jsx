import React from 'react'
import Section from '../Components/Section'
import CartDetails from '../Components/CartDetails'
import TV from '../assets/TV.png'
import JOSTICK from '../assets/JOSTICK.png'
import BreadCrumbs from '../Components/BreadCrumbs'
import { NavLink } from 'react-router'
import Button from '../Components/Button'
import { useSelector } from 'react-redux'




const CartProducts = () => {

    const cartItems =useSelector((state)=>state.allProducts.cart)
    const total =useSelector((state)=>state.allProducts.subtotal)
  
  return (
    <Section>
        <BreadCrumbs/>
        <div className="w-full flex flex-col gap-10">

  {/* Header */}
  <div className="flex justify-between items-center  shadow-sm px-10 py-5 rounded-md ">
    <h3 className="w-1/4">Product</h3>
    <h3 className="w-1/4 text-center">Price</h3>
    <h3 className="w-1/4 text-center">Quantity</h3>
    <h3 className="w-1/4 text-right">Subtotal</h3>
  </div>

  {/* Cart Item */}
  {
    cartItems.map((items,idx,)=>{
        return(
            <CartDetails 
            id={items.id} 
            key={idx} 
            img={items.thumbnail} 
            title={items.title} 
            price={Number(items.price*(1-(items.discountPercentage/100))).toFixed(2)} 
            quantity={items.quantity} 
            subtotal={Number((items.price*(1-(items.discountPercentage/100))*items.quantity)).toFixed(2)} />
        )
    })
  }
  
  {/* <CartDetails img={JOSTICK} title="H1 Gamepad" price="550" quantity="01" subtotal="650" /> */}

</div>
<div className="flex items-center justify-between mt-9 ">
    <div className='py-4 '>
        <NavLink className='py-4 px-12 border-[#00000062] rounded-sm border-2 font-medium' to="/shop">Return To Shop</NavLink>
    </div>
    <div className='py-4 '>
        <NavLink className='py-4 px-12 border-[#00000062] rounded-sm border-2 font-medium' to="#">Update Cart</NavLink>
    </div>
</div>
<div className='mt-20 flex items-start justify-between'>
    <form>
        <div className='flex items-center gap-4'>
        <input type="text" placeholder='Coupon Code' className='outline-2 outline-black py-3 pl-4 w-75 rounded-sm ' />
        <Button title="Apply Coupon" className='p-0'/>
        </div>
    </form>
    <div className='border-2 w-117.5 py-8 px-6 rounded-sm'>
        <h3 className='text-lg font-medium'>Cart Total</h3>
        <div className='flex items-center justify-between pb-4  border-b-1 border-[#808080]'>
            <h4>Subtotal:</h4>
            <p>${Number(total).toFixed(2)}</p>
        </div>
        <div className='flex my-4 items-center justify-between pb-4 border-b-1 border-[#808080]'>
            <h4>Shipping:</h4>
            <p>free</p>
        </div>
        <div className='flex items-center justify-between pb-4  '>
            <h4>Total:</h4>
            <p>${Number(total).toFixed(2)}</p>
        </div>
        <Button title='Procees to checkout'className='flex justify-center'/>
    </div>
</div>
        
    </Section>
  )
}

export default CartProducts
