import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'

export default function HomeLayout({children}) {
  return (
    <>
       <Navbar/>
        {children}
       <Footer/>
    </>
  )
}
