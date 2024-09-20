import React from 'react'
import Logo from '../../assets/Logo.png'
import { BsCart4 } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";


function Header() {
  return (
    <div>
      <nav className='bg-black shadow-lg w-full '>
        <div className=' mx-12 flex justify-between items-center'>
            <a href="/"><img src={Logo} alt="WalkWay store" className='h-16 w-16' /></a>
            <div className=' relative hidden md:flex space-x-10 items-center'>
            <form  className="flex-grow mx-20">
            <CiSearch className="text-gray-800  absolute mt-2"/>
          <input
            type="text"
            placeholder="Search for shoes..."
            className=" h-8 p-2 pl-8 py-2 rounded-3xl border bg-gray-200 border-gray-300 focus:outline-none focus:ring-2 focus:black"/>
        </form>
                <h6 className="text-gray-300  hover:text-white">Shop</h6>
                <button className="text-gray-300 flex hover:text-white"><FaUser className=' h-6 w-6'/>Vishnumaya</button>
                <button className="text-gray-300 flex  hover:text-white"><BsCart4 className=' h-7 w-7'/></button>
            </div>
            <div className='md:hidden text-white'>
                <button className='focus:outline-none'>☰</button>
            </div>
        </div>

      </nav>
    </div>
  )
}

export default Header
