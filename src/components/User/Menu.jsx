import React from 'react'
import menshoes from '../../assets/menshoes.png'
import women from'../../assets/women.jpeg'
import kids from '../../assets/kids.png'
import sports from '../../assets/sports.png'




function Menu() {
  return (
    <div>
      <nav className='bg-black p-2 mt-10 text-white'>
        <div className='mx-auto flex space-x-20 justify-center'>
        <div className='flex'>
        <button className="text-gray-300 flex hover:text-white"><img className='w-25 h-20' src="https://themesdesign.in/tailwick/html/assets/images/product-home.png" alt="" />Mens</button>
        </div>
        <div>
        <button className="text-gray-300 flex  hover:text-white"><img className='w-25 h-20' src={women} alt="" />Womens</button>
        </div>
       <div>
       <button className="text-gray-300 flex  hover:text-white"><img className='w-20 h-20' src={kids} alt="" /> Kids</button>
       </div>
        <div>
        <button className="text-gray-300 flex  hover:text-white"> <img className='w-20 h-20' src={sports} alt="" /> Sports</button>
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu
