import React from 'react'
import Section from '../Components/Section'
import WishCart from '../Components/WishCart'
import bag from '../assets/bag.png'
import { useSelector } from 'react-redux'

const Wish = () => {
    const wishItems =useSelector((state)=>state.allProducts.wish)

  return (
    <Section>
    <div className="mt-20">
      <div className='flex items-center justify-between'>
        <h2 className='text-xl'>Wishlist ({wishItems.length})</h2>
        <div className='rounded-sm py-4 px-12 border-2 border-[#00000063]'><p>Move All To Bag</p></div>
      </div>
      <div className="flex items-center flex-wrap gap-y-5 justify-center gap-x-7.5 mt-15">
        {
          wishItems.map((items,idx)=>{
            return(
              <WishCart id={items.id} key={idx} img={items.thumbnail} title={items.title} price={Number(items.price*(1-(items.discountPercentage/100))).toFixed(2)} dltprice={items.price} percentage="5" />
            )
          })
        }
        {/* <WishCart img={bag} title="Gucci duffle bag" price="$230.00" dltprice="$240.00" percentage="5" />
        <WishCart img={bag} title="Gucci duffle bag" price="$230.00" dltprice="$240.00" percentage="5" />
        <WishCart img={bag} title="Gucci duffle bag" price="$230.00" dltprice="$240.00" percentage="5" />
        <WishCart img={bag} title="Gucci duffle bag" price="$230.00" dltprice="$240.00" percentage="5" /> */}
      </div>
    </div>
    </Section>
  )
}

export default Wish
