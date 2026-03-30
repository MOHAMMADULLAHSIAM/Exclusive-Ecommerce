import React from 'react'
import Container from './Container'

const Section = ({className,children}) => {
  return (
    <section className={`px-2 lg:px-0 ${className}`}>
        <Container>
            {children}
        </Container>
    </section>
  )
}

export default Section
