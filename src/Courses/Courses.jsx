import React from 'react'
import Course from '../Components/Course'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'



function Courses() {
    console.log(list);
    
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
        <Course/>
    
    
    </div>
    
    <Footer/>
    </>
  )
}

export default Courses
