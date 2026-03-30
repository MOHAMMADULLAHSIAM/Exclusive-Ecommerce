import React, { Children } from 'react'

const Container = ({children,className}) => {
  return (
    <div className={` mx-auto px-0.5 lg:px-0 container ${className}`}>
        {children}
    </div>
  )
}

export default Container
