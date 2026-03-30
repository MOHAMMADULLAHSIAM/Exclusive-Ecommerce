import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import FlashSale from '../Components/FlashSale'
import Categories from '../Components/Categories'
import BestSell from '../Components/BestSell'
import SoundBox from '../Components/SoundBox'
import Explore from '../Components/Explore'
import Arrivla from '../Components/Arrivla'

const Home = () => {
  return (
    <div>
      <Banner/>
      <FlashSale/>
      <Categories/>
      <BestSell/>
      <SoundBox/>
      <Explore/>
      <Arrivla/>
    </div>
  )
}

export default Home
