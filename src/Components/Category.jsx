import React from 'react'

const Category = ({icon,title}) => {
  return (
    <div className=' lg:w-[170px] lg:h-[145px] w-[145px] h-[125px] py-[25px] px-[57px] rounded-sm shadow-md shadow-[#bdbdbd] hover:bg-[#DB4444] hover:text-white ease-linear cursor-pointer duration-150 border-1 border-[#bdbdbd]'>
        <div className='flex flex-col items-center gap-y-4'>
        <div className='lg:text-[56px] text-[42px]  '>
        {icon}
        </div>
        <h5 className='text-center'>
        {title}
        </h5>
        </div>
    </div>
  )
}

export default Category
