import React from 'react'
import list from '../../public/list.json'

function Freebook() {
    const freeBook = list.filter((data)=>data.category === "Free");
    console.log(freeBook);
    
  return (
    
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-3'>
        <h1 className='font-semibold text-xl pb-2'>Free offered Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corrupti maxime tempora nihil aliquid, ipsum</p>
    </div>
  )
}

export default Freebook