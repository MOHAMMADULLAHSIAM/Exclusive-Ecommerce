import React from 'react'
import { NavLink, useLocation } from 'react-router'

const BreadCrumbs = () => {

const location= useLocation()
const myPath=location.pathname.split("/")[1]


  return (
    <div className='w-[107px] text-[#8f8f8f] flex items-center gap-3  my-20'>
      <NavLink to='/'>home</NavLink>
      <p>/</p>
      <p>{myPath}</p>
    </div>
  )
}

export default BreadCrumbs
