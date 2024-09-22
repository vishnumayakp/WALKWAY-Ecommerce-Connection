import React from 'react'
import { FaUser } from "react-icons/fa6";
function Profile() {
  return (
    <div className='w-[100%] flex justify-center flex-col mt-10 items-center  md:h-lvh'>
        <div className='w-[70%]  h-[70%] flex flex-col md:flex-row border-2 space-y-5'>
            <div className='md:w-[40%] h-full flex flex-col justify-evenly items-center'>
            <FaUser className=' h-20 w-20'/>
            <div className='space-y-2 w-[100%] flex flex-col items-center'>
            <div className='w-[70%]'>
                  <button className=' w-[100%] h-10 border bg-black hover:bg-gray-600 text-white rounded-xl'>Orders</button>
            </div>
            <div className='w-[70%]'>
                  <button className=' w-[100%] h-10 border bg-black hover:bg-gray-600 text-white rounded-xl'>Cart</button>
            </div>
            <div className='w-[70%]'>
                  <button className=' w-[100%] h-10 border bg-black hover:bg-gray-600 text-white rounded-xl'>Shop</button>
            </div>

            <div className='w-[70%]'>
                  <button className=' w-[100%] h-10 border bg-black hover:bg-gray-600 text-white rounded-xl'>Logout</button>
            </div>
            </div>
            </div>

            <div className='flex flex-col space-y-5 p-2 items-center md:items-start'>
              <p>Personal Information</p>
              <div className='flex flex-col md:flex-row  space-y-5 md:space-x-5'>
                <input  className='border-2' type="text" placeholder='Vishnumaya' />
                <input type="text" placeholder='KP' />
              </div>
              <p>Email Address</p>
              <div className='flex  justify-evenly'>
                <input className='border-2' type="email" placeholder='vishnu@gmail.com' />
              </div>
              <p>Mobile Number</p>
              <div className='flex  justify-evenly'>
                <input className='border-2' type="number" placeholder='9526790841' />
              </div>
            </div>
            
        </div>
        </div>

  )
}

export default Profile
