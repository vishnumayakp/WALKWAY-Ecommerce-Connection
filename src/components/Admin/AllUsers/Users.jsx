import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Users() {
  return (
    <div  className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Order Details</h2>
    </div>
   
    <div className="bg-white shadow-md overflow-scroll space-y-5 scrollnone w-[97%] mt-10 rounded-lg p-6">
    <div className="flex border w-[18rem] items-center  mb-4 md:mb-0">
        <input 
          type="text" 
          placeholder="Search by user name" 
          className="w-full md:w-auto p-2  rounded-lg focus:outline-none "
        />
        <button  className="bg-blue-500 flex items-center space-x-3 hover:bg-blue-400 text-white py-2 px-4">
        <FaSearch/><span>Search</span>
        </button>
      </div>
  <table className="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b">SL</th>
        <th className="py-2 px-4 border-b">Profile picture</th>
        <th className="py-2 px-4 border-b">Username</th>
        <th className="py-2 px-4 border-b">Email Address</th>
        <th className="py-2 px-4 border-b">Full Name</th>
        <th className="py-2 px-4 border-b">Phone</th>
        <th className="py-2 px-4 border-b">Registration Date</th>
        <th className="py-2 px-4 border-b">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">1</td>
        <td className="py-2 px-4 border-b"><FaUserTie className='w-32' /></td>
        <td className="py-2 px-4 border-b">Abhaypc</td>
        <td className="py-2 px-4 border-b text-blue-500">abhay@gmail.com</td>
        <td className="py-2 px-4 text-sm border-b">Abhay PC</td>
        <td className="py-2 px-4 border-b">9526790841</td>
        <td className="py-2 px-4 text-sm border-b">26-6-2021</td>
        <td className="py-2 px-4 text-sm border-b space-x-2"><button className='border bg-red-600 text-white rounded p-2 w-20'>Block</button><button className='border bg-green-600 text-white rounded p-2 w-20'>View</button></td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">1</td>
        <td className="py-2 px-4 border-b"><FaUserTie className='w-32'/></td>
        <td className="py-2 px-4 border-b">Abhaypc</td>
        <td className="py-2 px-4 border-b text-blue-500">abhay@gmail.com</td>
        <td className="py-2 px-4 text-sm border-b">Abhay PC</td>
        <td className="py-2 px-4 border-b">9526790841</td>
        <td className="py-2 px-4 text-sm border-b">26-6-2021</td>
        <td className="py-2 px-4 text-sm border-b space-x-2"><button className='border bg-red-600 text-white rounded p-2 w-20'>Block</button><button className='border bg-green-600 text-white rounded p-2 w-20'>View</button></td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">1</td>
        <td className="py-2 px-4 border-b"><FaUserTie className='w-32'/></td>
        <td className="py-2 px-4 border-b">Abhaypc</td>
        <td className="py-2 px-4 border-b text-blue-500">abhay@gmail.com</td>
        <td className="py-2 px-4 text-sm border-b">Abhay PC</td>
        <td className="py-2 px-4 border-b">9526790841</td>
        <td className="py-2 px-4 text-sm border-b">26-6-2021</td>
        <td className="py-2 px-4 text-sm border-b space-x-2"><button className='border bg-red-600 text-white rounded p-2 w-20'>Block</button><button className='border bg-green-600 text-white rounded p-2 w-20'>View</button></td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">1</td>
        <td className="py-2 px-4 border-b"><FaUserTie className='w-32'/></td>
        <td className="py-2 px-4 border-b">Abhaypc</td>
        <td className="py-2 px-4 border-b text-blue-500">abhay@gmail.com</td>
        <td className="py-2 px-4 text-sm border-b">Abhay PC</td>
        <td className="py-2 px-4 border-b">9526790841</td>
        <td className="py-2 px-4 text-sm border-b">26-6-2021</td>
        <td className="py-2 px-4 text-sm border-b space-x-2"><button className='border bg-red-600 text-white rounded p-2 w-20'>Block</button><button className='border bg-green-600 text-white rounded p-2 w-20'>View</button></td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">1</td>
        <td className="py-2 px-4 border-b"><FaUserTie className='w-32'/></td>
        <td className="py-2 px-4 border-b">Abhaypc</td>
        <td className="py-2 px-4 border-b text-blue-500">abhay@gmail.com</td>
        <td className="py-2 px-4 text-sm border-b">Abhay PC</td>
        <td className="py-2 px-4 border-b">9526790841</td>
        <td className="py-2 px-4 text-sm border-b">26-6-2021</td>
        <td className="py-2 px-4 text-sm border-b space-x-2"><button className='border bg-red-600 text-white rounded p-2 w-20'>Block</button><button className='border bg-green-600 text-white rounded p-2 w-20'>View</button></td>
      </tr>
    </tbody>
  </table>
</div>
</div>
  )
}

export default Users
