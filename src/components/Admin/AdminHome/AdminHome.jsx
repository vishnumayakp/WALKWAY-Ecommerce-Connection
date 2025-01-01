import React, { useEffect, useState } from 'react'
import { getAllOrders, getAllUsers, getProducts } from '../../../Api/Connection'

function AdminHome() {
  const [Products,setproducts]=useState([])
  const [users,setusers]=useState([])
  // const [totalOrders,setTotalOrders]=useState(0)
  const[orders,setorders]=useState([])

  useEffect(()=>{
    const fetchDetails=async()=>{
      const productRes=await getProducts()
      setproducts(productRes);

      const userRes= await getAllUsers()
      const usersData=userRes.data.data;    
      setusers(usersData)

      const allOrders=await getAllOrders()
      setorders(allOrders)
    }

    fetchDetails();
  },[])

  const totalProducts=Products&& Products.length ? Products.length:0
  const totalUsers=users&&users.length? users.length:0 
  const totalOrders=orders&&orders.length? orders.length:0

  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-gray-100 to-gray-200 mt-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-yellow-100 text-yellow-500 rounded-full">
              <i className="fas fa-box fa-2x"></i>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Total Products</h2>
              <p className="text-3xl font-bold text-gray-900">{totalProducts}</p>
            </div>
          </div>
        </div>
  
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-blue-100 text-blue-500 rounded-full">
              <i className="fas fa-shopping-cart fa-2x"></i>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Total Orders</h2>
              <p className="text-3xl font-bold text-gray-900">{totalOrders}</p>
            </div>
          </div>
        </div>
  
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-green-100 text-green-500 rounded-full">
              <i className="fas fa-users fa-2x"></i>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Total Customers</h2>
              <p className="text-3xl font-bold text-gray-900">{totalUsers}</p>
            </div>
          </div>
        </div>
      </div>
  
      <div className="bg-white mt-10 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Analytics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 text-center">
            <div className="text-4xl">🕒</div>
            <span className="text-lg font-medium mt-2 block">Pending</span>
            <span className="text-2xl font-bold">6</span>
          </div>
  
          <div className="bg-blue-100 p-4 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 text-center">
            <div className="text-4xl">✅</div>
            <span className="text-lg font-medium mt-2 block">Confirmed</span>
            <span className="text-2xl font-bold">1</span>
          </div>
  
          <div className="bg-yellow-100 p-4 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 text-center">
            <div className="text-4xl">🔄</div>
            <span className="text-lg font-medium mt-2 block">Processing</span>
            <span className="text-2xl font-bold">3</span>
          </div>
  
          <div className="bg-green-100 p-4 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 text-center">
            <div className="text-4xl">🚴</div>
            <span className="text-lg font-medium mt-2 block">Pickup</span>
            <span className="text-2xl font-bold">2</span>
          </div>
  
          <div className="bg-indigo-100 p-4 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 text-center">
            <div className="text-4xl">🚚</div>
            <span className="text-lg font-medium mt-2 block">On The Way</span>
            <span className="text-2xl font-bold">2</span>
          </div>
  
          <div className="bg-purple-100 p-4 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 text-center">
            <div className="text-4xl">📦</div>
            <span className="text-lg font-medium mt-2 block">Delivered</span>
            <span className="text-2xl font-bold">1</span>
          </div>
  
          <div className="bg-red-100 p-4 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 text-center">
            <div className="text-4xl">❌</div>
            <span className="text-lg font-medium mt-2 block">Cancelled</span>
            <span className="text-2xl font-bold">0</span>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default AdminHome
