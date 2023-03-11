import React from 'react'
import { Navbar } from './Navbar'

export const Layout = ({ children }) => {
  return (
      <React.Fragment>
        <div className="container text-w px-[50px]">
          <Navbar/>
          {children}
        </div>
      </React.Fragment>
  )
   
  
}
