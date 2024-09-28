import React, { useEffect, useState } from 'react'
import kids from '../../../assets/kids.png'
import { FaSearch } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { getProductById, getProducts } from '../../../Api/Connection';
import { useParams } from 'react-router-dom';

function TotalProducts() {

  const [products,setProducts]=useState([])

    useEffect(()=>{
      getProducts()
      .then((res)=>setProducts(res.data))
    },[])
  return (
    <div  className="p-8 bg-gray-100 min-h-screen">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-semibold">All Products</h2>
    </div>
    <div class="bg-white shadow-md overflow-scroll scrollnone w-[97%] mt-10 rounded-lg p-6">
  <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      
      {/* Search Bar */}
      <div className="flex border items-center  mb-4 md:mb-0">
        <input 
          type="text" 
          placeholder="Search by product name" 
          className="w-full md:w-auto p-2  rounded-lg focus:outline-none "
        />
        <button  className="bg-blue-500 flex items-center space-x-3 hover:bg-blue-400 text-white py-2 px-4">
        <FaSearch/><span>Search</span>
        </button>
      </div>

      {/* Create New Button */}
      <button className="bg-blue-500 hover:bg-blue-400 flex items-center space-x-3 text-white py-2 px-4">
      <BsFillPlusCircleFill /> <span>Create New</span>
      </button>
    
    </div>
  <table class="min-w-full bg-white border border-gray-200">
  
    <thead>
      <tr>
      <th class="py-2 px-4 border-b">SL</th>
        <th class="py-2 px-4 border-b">Thumbnail</th>
        <th class="py-2 px-4 border-b">Product Name</th>
        <th class="py-2 px-4 border-b">Price</th>
        <th class="py-2 px-4 border-b">Discount price</th>
        <th class="py-2 px-4 border-b">Actions</th>
      </tr>
    </thead>
    <tbody>
      {products.map((value)=>{
        return(
          <tr class="hover:bg-gray-50 w-[100%]">
      <td class="py-2 px-4 border-b">{value.id}</td>
        <td class="py-2 flex justify-center border-b"><img className='h-[5rem] w-[5rem]' src={value.image} alt="" /></td>
        <td class="py-2 px-4 border-b">{value.name}</td>
        <td class="py-2 px-4 border-b">₹ {value.price}</td>
        <td class="py-2 px-4 border-b">₹ 999</td>
        <td class="py-2 px-4 w-[30%] border-b md:space-x-2"><button className='border bg-green-600 text-white rounded p-1 w-20'>View</button><button className='border bg-yellow-400 text-white rounded p-1 w-20'>Edit</button><button className='border bg-red-600 text-white rounded p-1 w-20'>Del</button></td>
      </tr>
        )
      })}
    </tbody>
  </table>
</div>
</div>
  )
}

export default TotalProducts
