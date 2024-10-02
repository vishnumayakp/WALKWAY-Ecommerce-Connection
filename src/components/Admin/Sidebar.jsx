import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/2.png';
import { AiFillHome } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { SiProducthunt } from "react-icons/si";
import { FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi"; 

function Sidebar() {
  const navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin')
    console.log("Logout clicked"); 
    navigate('/login')
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`h-full ${isOpen ? 'w-64' : 'w-20'} bg-white text-white z-0 border-r-2 top-0 left-0 transition-all duration-300 overflow-hidden`}
      >
        <div className="p-4">
          <div className="flex justify-between items-start">
            <a href="/admin"><img
              src={Logo}
              className={`h-[8rem] w-[8rem] ${!isOpen && 'hidden'}`}
              alt="logo"
            /></a>
            <button
              onClick={toggleSidebar}
              className="text-gray-600 focus:outline-none"
            >
              <FiMenu size={24} />
            </button>
          </div>
          <div className='mt-4'>
            <ul className='space-y-6'>
              <NavLink to="/admin" className="flex items-center space-x-2 text-slate-600 hover:bg-yellow-200 hover:h-[2rem] rounded w-full">
                <AiFillHome size={24} />
                <span className={`${!isOpen && 'hidden'}`}>Dashboard</span>
              </NavLink>
              <li className="text-slate-600 text-sm uppercase mt-6">
                {isOpen && "Product Management"}
              </li>
              <NavLink to="/admin/products" className="flex items-center space-x-2 text-slate-600 hover:bg-yellow-200 hover:h-[2rem] rounded w-full">
                <SiProducthunt size={24} />
                <span className={`${!isOpen && 'hidden'}`}>Products</span>
              </NavLink>
              <li className="text-slate-600 text-sm uppercase mt-6">
                {isOpen && "Order Management"}
              </li>
              <NavLink to="/admin/orders" className="flex items-center space-x-2 text-slate-600 hover:bg-yellow-200 hover:h-[2rem] rounded w-full">
                <FaShoppingCart size={24} />
                <span className={`${!isOpen && 'hidden'}`}>All Orders</span>
              </NavLink>
              <li className="text-slate-600 text-sm uppercase mt-6">
                {isOpen && "Customer Management"}
              </li>
              <NavLink to="/admin/users" className="flex items-center space-x-2 text-slate-600 hover:bg-yellow-200 hover:h-[2rem] rounded w-full">
                <IoMdPerson size={24} />
                <span className={`${!isOpen && 'hidden'}`}>Users</span>
              </NavLink>
              <NavLink to="/admin/reviews" className="flex items-center space-x-2 text-slate-600 hover:bg-yellow-200 hover:h-[2rem] rounded w-full">
                <FaRegStarHalfStroke size={24} />
                <span className={`${!isOpen && 'hidden'}`}>Reviews</span>
              </NavLink>
            </ul>
          </div>
        </div>
        {/* Logout Button */}
        <div className="absolute">
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-2 text-slate-600  rounded w-full py-2 px-4"
          >
            <FaSignOutAlt size={24} />
            <span className={`${!isOpen && 'hidden'}`}>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`flex-grow ml-${isOpen ? '64' : '20'} p-4 transition-all duration-300`}>
        {/* Main content goes here */}
      </div>
    </div>
  );
}

export default Sidebar;
