import React from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import List from './List'
import ListItem from './ListItem'
import { CiSearch } from "react-icons/ci";
import Flex from './Flex'
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { NavLink, useNavigate } from 'react-router'
import { TfiMenu } from "react-icons/tfi";
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CgProfile } from "react-icons/cg";
import { RiUser3Line } from "react-icons/ri";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { getAuth, signOut } from "firebase/auth";
import { userReducer } from '../Slices/UserSlice'







const NavBar = () => {


  const navigate = useNavigate()
  const cart = useSelector((state) => state.allProducts.cart)
  const wish = useSelector((state) => state.allProducts.wish)
  const products = useSelector((state) => state.allProducts.value)
  const user = useSelector((state) => state.userInfo.value)
  const dispatch=useDispatch()



  const [serche, setSerch] = useState("")
  const [filterSerch, setFilterSerch] = useState([])
  function handleSerchChange(e) {
    const value = e.target.value
    setSerch(value)
    if (value.trim() === "") {
      setFilterSerch([])
    } else {
      setFilterSerch(products.filter((item) => item.title.toLowerCase().includes(value.toLowerCase())))
    }

  }


  const [userShow, setUserShow] = useState("false")
  const [show, setShow] = useState("false")

  function handleClick() {
    setShow(!show)
  }
  function handleUser() {
    setUserShow(!userShow)
    console.log("working")
  }
  function handleLogout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(userReducer(null))
      setUserShow("false")
      // localStorage.removeItem("user") 
      navigate("/SignIn")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
  return (
    <nav className=' border-b-2 border-[#0000002c]'>
      <Container className="">
        <Flex className=" justify-between lg:pt-[47px] lg:pb-[23px] py-4 relative">
          <div >
            <NavLink to='/'>
              <img src={logo} className='lg:w-auto lg:h-auto w-[97px] h-[18px] select-none' alt="" />
            </NavLink>
          </div>
          <div className={`${!show ? "block " : "hidden "}  lg:flex lg:items-center lg:gap-[148px] bg-black text-white lg:bg-transparent lg:text-black lg:static absolute top-[58px] left-0 w-full lg:w-auto rounded-b-lg z-10`}>
            <List className='lg:gap-x-12 gap-y-3 flex flex-col lg:flex-row items-center py-3 lg:py-0  '>
              <ListItem>
                <NavLink to="/">Home</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to="/shop">Shop</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to="/contact">Contact</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to="/about">About</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to="/signUp">Sign Up</NavLink>
              </ListItem>
            </List>
          </div>
          <Flex className=' lg:gap-6 gap-2.5 justify-center'>
            <div className='relative '>
              <input value={serche} onChange={handleSerchChange} type="search" placeholder='What are you looking for?' className='lg:w-61 w-50 lg:text-sm text-xs lg:py-[3px] py-[1.5px] lg:pl-5 pl-2 pr-7 bg-[#F5F5F5] rounded-sm' />
              <CiSearch className='lg:text-[16px] text-sm absolute lg:top-1 lg:right-3 top-1.5 right-2 cursor-pointer text-black' />
              <div className="absolute left-0 top-full w-full bg-white  rounded-md shadow-md mt-1 z-50 overflow-y-scroll scrollbar-thin  max-h-58 ">
                {filterSerch.map((item) => {
                  return (
                    <div key={item.id} onClick={() => {
                      navigate(`/productdetails/${item.id}`)
                      setSerch("")
                      setFilterSerch([])
                    }} className="flex items-center  gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <img src={item.thumbnail} alt="" className='lg:w-13 w-7' />
                      <p className='text-sm lg:text-[16px]'>{item.title}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <Flex className="lg:text-xl text-[16px] lg:gap-4 gap-3  ">
              <NavLink to="/wish">
                <div className=' relative'>
                  <FaRegHeart className='cursor-pointer' />
                  <div className={`${wish.length ? "block" : "hidden"} absolute -top-2 -right-2.5 w-4 h-4 text-xs bg-[#FF0000] text-white f text-center
                 rounded-full font-medium`}>
                    <p>{wish.length}</p></div>
                </div>
              </NavLink>
              <NavLink to='/cartproducts'>
                <div className=' relative'>
                  <GrCart className='  cursor-pointer' />
                  <div className={`${cart.length ? "block" : "hidden"} absolute -top-2 -right-2.5 w-4 h-4 text-xs bg-[#FF0000] text-white f text-center
                 rounded-full font-medium`}>
                    <p>{cart.length}</p></div>
                </div>
              </NavLink>
              {
                user?.displayName ? (
                  <div  className='cursor-pointer relative '>
                    
                    
                    <CgProfile onClick={handleUser}/>

                    <ul
                      className={`${!userShow ? "block" : "opacity-0 scale-95 -translate-y-2 invisible"}transition-all duration-300 ease-in-out origin-top pt-4.5 pb-2.5 pr-3 pl-2.5 rounded-sm bg-[#00000095] absolute right-0 text-sm text-[#fafafa] z-10 flex flex-col gap-3 w-52`}
                    >
                      <li className='flex gap-x-4 items-center cursor-pointer select-none'>
                        <RiUser3Line className='text-xl' />
                        {user.displayName}
                      </li>

                      <li className='cursor-pointer select-none flex gap-x-4 items-center'>
                        <LuShoppingBag className='text-xl' />
                        My Order
                      </li>

                      <li className=' cursor-pointer select-none flex gap-x-4 items-center'>
                        <MdOutlineCancel className='text-xl' />
                        My Cancellations
                      </li>

                      <li className='cursor-pointer select-none flex gap-x-4 items-center'>
                        <FaRegStar className='text-xl' />
                        My Reviews
                      </li>

                      <li className='cursor-pointer select-none flex gap-x-4 items-center' onClick={handleLogout}>
                        <BiLogOut className='text-xl'  />
                        LogOut
                      </li>
                    </ul>
                  </div>
                ) : null
              }

            </Flex>
          </Flex>
          <div className='lg:hidden  text-lg cursor-pointer block '>
            <TfiMenu onClick={handleClick} />
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default NavBar
