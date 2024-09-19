import React from 'react'

function Menu() {
  return (
    <div>
      <nav className='bg-black p-2 mt-3 text-white'>
        <div className='container mx-auto flex space-x-6 justify-center'>
        <button className="text-gray-300 flex hover:text-white">Mens</button>
        <button className="text-gray-300 flex  hover:text-white">Womens</button>
        <button className="text-gray-300 flex  hover:text-white">Kids</button>
        <button className="text-gray-300 flex  hover:text-white">Womens</button>
        </div>
      </nav>
    </div>
  )
}

export default Menu
