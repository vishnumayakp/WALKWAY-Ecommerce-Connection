import React from 'react'
import { FaUserTie } from "react-icons/fa";

function Users() {
  return (
    <div  className="p-8 bg-gray-100 min-h-screen">
    <div class="bg-white shadow-md overflow-scroll scrollnone w-[97%] mt-10 rounded-lg p-6">
  <h2 class="text-lg font-semibold mb-4">All Users</h2>
  <table class="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th class="py-2 px-4 border-b">SL</th>
        <th class="py-2 px-4 border-b">Profile picture</th>
        <th class="py-2 px-4 border-b">Username</th>
        <th class="py-2 px-4 border-b">Email Address</th>
        <th class="py-2 px-4 border-b">Full Name</th>
        <th class="py-2 px-4 border-b">Phone</th>
        <th class="py-2 px-4 border-b">Registration Date</th>
        <th class="py-2 px-4 border-b">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b"><FaUserTie className='w-32' /></td>
        <td class="py-2 px-4 border-b">Abhaypc</td>
        <td class="py-2 px-4 border-b text-blue-500">abhay@gmail.com</td>
        <td class="py-2 px-4 text-sm border-b">Abhay PC</td>
        <td class="py-2 px-4 border-b">9526790841</td>
        <td class="py-2 px-4 text-sm border-b">26-6-2021</td>
        <td class="py-2 px-4 text-sm border-b space-x-2"><button className='border bg-red-600 text-white rounded p-2 w-20'>Block</button><button className='border bg-green-600 text-white rounded p-2 w-20'>View</button></td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b"><FaUserTie className='w-32'/></td>
        <td class="py-2 px-4 border-b">Abhaypc</td>
        <td class="py-2 px-4 border-b text-blue-500">abhay@gmail.com</td>
        <td class="py-2 px-4 text-sm border-b">Abhay PC</td>
        <td class="py-2 px-4 border-b">9526790841</td>
        <td class="py-2 px-4 text-sm border-b">26-6-2021</td>
        <td class="py-2 px-4 text-sm border-b space-x-2"><button className='border bg-red-600 text-white rounded p-2 w-20'>Block</button><button className='border bg-green-600 text-white rounded p-2 w-20'>View</button></td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b"><FaUserTie className='w-32'/></td>
        <td class="py-2 px-4 border-b">Abhaypc</td>
        <td class="py-2 px-4 border-b text-blue-500">abhay@gmail.com</td>
        <td class="py-2 px-4 text-sm border-b">Abhay PC</td>
        <td class="py-2 px-4 border-b">9526790841</td>
        <td class="py-2 px-4 text-sm border-b">26-6-2021</td>
        <td class="py-2 px-4 text-sm border-b space-x-2"><button className='border bg-red-600 text-white rounded p-2 w-20'>Block</button><button className='border bg-green-600 text-white rounded p-2 w-20'>View</button></td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b"><FaUserTie className='w-32'/></td>
        <td class="py-2 px-4 border-b">Abhaypc</td>
        <td class="py-2 px-4 border-b text-blue-500">abhay@gmail.com</td>
        <td class="py-2 px-4 text-sm border-b">Abhay PC</td>
        <td class="py-2 px-4 border-b">9526790841</td>
        <td class="py-2 px-4 text-sm border-b">26-6-2021</td>
        <td class="py-2 px-4 text-sm border-b space-x-2"><button className='border bg-red-600 text-white rounded p-2 w-20'>Block</button><button className='border bg-green-600 text-white rounded p-2 w-20'>View</button></td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b"><FaUserTie className='w-32'/></td>
        <td class="py-2 px-4 border-b">Abhaypc</td>
        <td class="py-2 px-4 border-b text-blue-500">abhay@gmail.com</td>
        <td class="py-2 px-4 text-sm border-b">Abhay PC</td>
        <td class="py-2 px-4 border-b">9526790841</td>
        <td class="py-2 px-4 text-sm border-b">26-6-2021</td>
        <td class="py-2 px-4 text-sm border-b space-x-2"><button className='border bg-red-600 text-white rounded p-2 w-20'>Block</button><button className='border bg-green-600 text-white rounded p-2 w-20'>View</button></td>
      </tr>
    </tbody>
  </table>
</div>
</div>
  )
}

export default Users
