import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

const MainLayout = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
