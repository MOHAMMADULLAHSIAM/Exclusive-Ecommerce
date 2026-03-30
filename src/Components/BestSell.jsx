import React from 'react'
import Section from './Section'
import HeaderSec from './HeaderSec'
import Button from './Button'
import BestCart from './BestCart'
import Jacket from '../assets/Jacket.png'
import Bag from '../assets/bag.png'
import CPU from '../assets/CPU.png'
import BookSelf from '../assets/BookSelf.png'

const BestSell = () => {
  return (
    <Section className='mt-[70px]'>
        <div className='md:flex md:items-end md:leading-12 md:justify-between'>
        <HeaderSec title='This Month' heading='Best Selling Products' className='flex flex-col items-center justify-center lg:inline'/>
        <Button title="View All" className='md:block hidden'/>
        </div>
        <div className='mt-15 flex items-center justify-between flex-wrap gap-y-7'>
            <BestCart img={Jacket} title='The north coat' price='260' dltprice='360' rating='65' />
            <BestCart img={Bag} title='Gucci duffle bag' price='960' dltprice='1160' rating='65' />
            <BestCart img={CPU} title='RGB liquid CPU Cooler' price='160' dltprice='170' rating='65' />
            <BestCart img={BookSelf} title='Small BookSelf' price='360' dltprice='0' rating='65' />
        </div>
        <Button title=' View All' className=' w-[159px] mx-auto mt-15 block md:hidden '/>
    </Section>
  )
}

export default BestSell
