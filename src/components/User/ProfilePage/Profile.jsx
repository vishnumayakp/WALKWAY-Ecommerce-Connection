import React from 'react'
import { FaUser } from "react-icons/fa6";
function Profile() {
  return (
    <div className='w-[100%] flex justify-center flex-col items-center bg-gray-400 h-lvh'>
        <div className='w-[70%] h-[70%] bg-yellow-200'>
            <div className='w-[40%] h-full flex flex-col items-center  bg-green-400'>
            <FaUser className=' h-20 w-20'/>
            </div>
            
        </div>
        </div>

  )
}

export default Profile
