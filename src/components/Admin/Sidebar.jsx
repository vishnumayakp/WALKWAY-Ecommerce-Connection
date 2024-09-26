import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/2.png';
import { AiFillHome } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { SiProducthunt } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi"; // Import a toggle icon

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar toggle

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`h-full ${isOpen ? 'w-64' : 'w-20'} bg-white text-white border-r-2 fixed top-0 left-0 transition-all duration-300 overflow-hidden`}
      >
        <div className="p-4">
          <div className="flex justify-between items-start">
            <img
              src={Logo}
              className={`h-[8rem] w-[8rem] ${!isOpen && 'hidden'}`}
              alt="logo"
            />
            <button
              onClick={toggleSidebar}
              className="text-gray-600 focus:outline-none"
            >
              <FiMenu size={24} />
            </button>
          </div>
          <div className='mt-4'>
            <ul className='space-y-6'>
              <NavLink to="/admin" className="flex items-center space-x-2 text-slate-600 hover:bg-yellow-100 rounded w-full">
                <AiFillHome size={24} />
                <span className={`${!isOpen && 'hidden'}`}>Dashboard</span>
              </NavLink>
              <li className="text-slate-600 text-sm uppercase mt-6">
                {isOpen && "Product Management"}
              </li>
              <NavLink to="/admin/categories" className="flex items-center space-x-2 text-slate-600 hover:bg-yellow-100 rounded w-full">
                <BiSolidCategory size={24} />
                <span className={`${!isOpen && 'hidden'}`}>Categories</span>
              </NavLink>
              <NavLink to="/admin/products" className="flex items-center space-x-2 text-slate-600 hover:bg-yellow-100 rounded w-full">
                <SiProducthunt size={24} />
                <span className={`${!isOpen && 'hidden'}`}>Products</span>
              </NavLink>
              <li className="text-slate-600 text-sm uppercase mt-6">
                {isOpen && "Order Management"}
              </li>
              <NavLink to="/admin/orders" className="flex items-center space-x-2 text-slate-600 hover:bg-yellow-100 rounded w-full">
                <FaShoppingCart size={24} />
                <span className={`${!isOpen && 'hidden'}`}>All Orders</span>
              </NavLink>
              <li className="text-slate-600 text-sm uppercase mt-6">
                {isOpen && "Customer Management"}
              </li>
              <NavLink to="/admin/customers" className="flex items-center space-x-2 text-slate-600 hover:bg-yellow-100 rounded w-full">
                <IoMdPerson size={24} />
                <span className={`${!isOpen && 'hidden'}`}>Customers</span>
              </NavLink>
              <NavLink to="/admin/reviews" className="flex items-center space-x-2 text-slate-600 hover:bg-yellow-100 rounded w-full">
                <FaRegStarHalfStroke size={24} />
                <span className={`${!isOpen && 'hidden'}`}>Reviews</span>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`flex-grow ml-${isOpen ? '64' : '20'} p-4 transition-all duration-300`}>
        {/* Your main content here */}
        <h1 className="text-gray-800">Main Content Area</h1>
      </div>
    </div>
  );
}

export default Sidebar;
