import React from 'react'

const ListItem = ({children,className}) => {
  return (
    <li className={`lg:text-[16px] text-sm  lg:relative select-none ${className}  lg:before:absolute lg:before:bottom-[-1px] lg:before:left-0 lg:before:w-0 lg:before:h-[2px] lg:before:bg-[#00000045] lg:hover:before:w-full lg:before:transition-all before:duration-300`}>
        {children}
    </li>
  )
}

export default ListItem
