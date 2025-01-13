import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-40 justify-center text-center items-center'>
        <h1 className='text-2xl font-semibold  md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here !! :)</span></h1>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error sunt id deleniti placeat distinctio dolore aspernatur, recusandae rem corrupti odio maxime aliquid esse, consectetur vero delectus est, modi nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error sunt id deleniti placeat distinctio dolore aspernatur sit amet consectetur adipisicing elit. Hic error sunt id deleniti placeat distinctio dolore aspernatur, recusandae rem corrupti odio maxime aliquid esse, consectetur vero delectus est, modi nihil.Lorem ipsum dolor sit amet consectetur </p>
        
        <Link to= '/'>
        <button className='bg-pink-500 px-4 py-2 text-white mt-2 rounded hover:bg-pink-700 duration-300 '>Back</button>
        </Link>
      </div>

      <div className='mt -2 grid grid-cols-1 md:grid-cols-4'>
      {
        list.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))
      }
      </div>
    
    </div>
    </>
  )
}

export default Course
