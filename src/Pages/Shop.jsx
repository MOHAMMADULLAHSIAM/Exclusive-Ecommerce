import React, { useEffect, useState } from 'react'
import List from '../Components/List'
import { NavLink } from 'react-router'
import Section from '../Components/Section'
// import axios from 'axios'
import Pagination from '../Components/Pagination'
import Skeleton from '../Components/Skeleton'
import BreadCrumbs from '../Components/BreadCrumbs'
import { useDispatch} from 'react-redux'
import { filterCategory, products } from '../Slices/Slice'

const Shop = () => {

    const [loading, setLoading] = useState(false)
    const [change, setChange] = useState(6)
    const dispatch = useDispatch()
    // const category=useSelector((state)=>state.allProducts.value) // current items (may be filtered)
    const [allProducts, setAllProducts] = useState([]) // keep original full list
    const [cat, setCat] = useState([])
    function handleChange(e) {
        setChange(e.target.value)
    }


    // useEffect(()=>{
    //     axios.get('https://dummyjson.com/products')
    //     .then(res => {
    //         setAllProducts(res.data.products)
    //         setLoading(true)
    //         dispatch(products(res.data.products))
    //     })
    // },[])


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => {
                setLoading(true)
                setAllProducts(data.products)
                dispatch(products(data.products))
            })

        }, [])



    // derive unique categories from the original list so filtering doesn't
    // shrink the category list after a filter is applied
    useEffect(() => {
        const uniquueCategory = [...new Set(allProducts.map((item) => item.category))]
        setCat(uniquueCategory)
    }, [allProducts])

    function handleFilter(item) {
        // always filter from the full original dataset
        const filtered = allProducts.filter((filterItem) => filterItem.category === item)
        dispatch(filterCategory(filtered))
    }

    function handleAllCategories() {

        dispatch(products(allProducts))
    }


    return (
        <Section>
            <BreadCrumbs />
            <div className='flex gap-1  ite'>
                <div className=' w-[25%]'>
                    <h2 className='font-bold text-lg lg:text-xl'>Shop by Category</h2>
                    <List className='flex flex-col uppercase items-start justify-start lg:gap-y-4 gap-y-2 mt-[15px] '>
                        {/* <li className='w-full  cursor-pointer'>
                            <NavLink to="" >
                                Woman’s Fashion
                            </NavLink>
                        </li>
                        <li className='w-full   cursor-pointer'>
                            <NavLink to="">
                                Men’s Fashion
                            </NavLink>
                        </li>
                        <li className=' w-full  cursor-pointer'>
                            <NavLink to="">
                                Electronics
                            </NavLink>
                        </li>
                        <li className=' w-full cursor-pointer'>
                            <NavLink to="">
                                Home & Lifestyle
                            </NavLink>
                        </li>
                        <li className=' w-full cursor-pointer'>
                            <NavLink to="">
                                Medicine
                            </NavLink>
                        </li>
                        <li className=' w-full cursor-pointer'>
                            <NavLink to="">
                                Sports & Outdoor
                            </NavLink>
                        </li>
                        <li className=' w-fullcursor-pointer'>
                            <NavLink to="">
                                Baby’s & Toys
                            </NavLink>
                        </li>
                        <li className=' w-full cursor-pointer'>
                            <NavLink to="">
                                Groceries &
                            </NavLink>
                        </li>
                        <li className=' w-full cursor-pointer'>
                            <NavLink to="">
                                Health & Beauty
                            </NavLink>
                        </li> */}
                        <li className='text-sm lg:text-[16px] w-full cursor-pointer ' onClick={handleAllCategories}>
                            <NavLink to="">
                                All Categories
                            </NavLink>
                        </li>
                        {

                            cat.map((item, idx) => {
                                return (
                                    <li key={idx} className='text-sm lg:text-[16px] w-full cursor-pointer' onClick={() => handleFilter(item)}>
                                        <NavLink to="">
                                            {item}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }


                    </List>
                    <div className='mt-10 '>
                        <h2 className='font-bold text-lg lg:text-xl'>Shop by Color</h2>
                        <List className='text-[#767676] mt-[15px]'>
                            <li>
                                <NavLink to='' className='flex items-center gap-2.5'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-black'></div>
                                    <p>Color 1</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='' className='flex items-center gap-2.5 my-[18px]'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-[#FF0000]'></div>
                                    <p>Color 1</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='' className='flex items-center gap-2.5'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-[#00FF38]'></div>
                                    <p>Color 1</p>
                                </NavLink>
                            </li>
                        </List>
                    </div>
                </div>

                <div className='w-[75%]'>
                    <div className='flex gap-3 items-center justify-end'>
                        <label htmlFor="number">Show:</label>
                        <select name="number" id="number" value={change} className='py-[3px] px-9 outline-1 outline-[#D9D9D9] rounded-[5px]  appearance-none' onChange={handleChange}>
                            <option value="6">6</option>
                            <option value="9">9</option>
                            <option value="12">12</option>
                        </select>
                    </div>

                    <div className=' flex flex-wrap justify-center gap-x-7.5  mt-7.5 gap-y-10 items-center '>
                        {loading ?
                            <Pagination itemsPerPage={change} />
                            :
                            <>
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                            </>
                        }

                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Shop
