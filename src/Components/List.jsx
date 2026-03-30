import React from 'react'

const List = ({children,className}) => {
  return (
      <ul className={`select-none items-center ${className}`}>
        {children}
      </ul>
  )
}

export default List
