import React, { useEffect, useState } from 'react'
import { getAllUsers, getProducts } from '../../../Api/Connection'

function AdminHome() {
  const [Products,setproducts]=useState([])
  const [users,setusers]=useState([])
  const [totalOrders,setTotalOrders]=useState(0)
  const[orders,setorders]=useState([])

  useEffect(()=>{
    const fetchDetails=async()=>{
      try{
        const res=await getProducts()
        setproducts(res.data)
        const user=await getAllUsers()
        setusers(user.data)
      }catch(error){
        console.log("can't fetch data");
        
      }
    }

  const fetchTotalProducts=async()=>{
    try{
      const res= await getAllUsers()
      const users=res.data;

      const total=users.reduce((acc,user)=>{
        return acc+(Array.isArray(user.orders)? user.orders.length : 0)
      },0)
      setTotalOrders(total)
    }catch(error){
      console.log("can't fetch users");
      
    }
  }

  const fetchOrders=async()=>{
    try{
      const res=await getAllUsers()
      const users = res.data

      const allOrders=users.flatMap((user)=>
        user.orders.map((order)=>({
          ...order,
          CustomerName:user.name,
          userId:user.id
        }))
      );
      setorders(allOrders)
    }catch(error){
      console.log("can't fetch orders",error); 
    }
  }
    fetchOrders()
    fetchDetails()
    fetchTotalProducts()
  },[])




  const totalProducts=Products&& Products.length ? Products.length:0
  const totalUsers=users&&users.length? users.length:0 


  return (
    <div className="p-8 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-semibold mb-8">Admin Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
        <div className="p-4 bg-yellow-100 text-yellow-500 rounded-full">
        </div>

        <div>
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="text-2xl font-bold">{totalProducts}</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
        <div className="p-4 bg-blue-100 text-blue-500 rounded-full">
        
        </div>
        
        <div>
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-2xl font-bold">{totalOrders}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
        <div className="p-4 bg-green-100 text-green-500 rounded-full">
     
        </div>
        <div>
          <h2 className="text-xl font-semibold">Total Customers</h2>
          <p className="text-2xl font-bold">{totalUsers}</p>
        </div>
      </div>
    </div>
    
    <div className="bg-white mt-7 p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-4">Order Analytics</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">

    <div className="bg-gray-100 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col items-center justify-center p-4 rounded-lg">
      <div className="text-4xl">🕒</div>
      <span className="text-lg font-medium mt-2">Pending</span>
      <span className="text-2xl font-bold">6</span>
    </div>

    <div className="bg-blue-100 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col items-center justify-center p-4 rounded-lg">
      <div className="text-4xl">✅</div>
      <span className="text-lg font-medium mt-2">Confirm</span>
      <span className="text-2xl font-bold">1</span>
    </div>
 
    <div className="bg-yellow-100 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col items-center justify-center p-4 rounded-lg">
      <div className="text-4xl">🔄</div>
      <span className="text-lg font-medium mt-2">Processing</span>
      <span className="text-2xl font-bold">3</span>
    </div>

    <div className="bg-green-100 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col items-center justify-center p-4 rounded-lg">
      <div className="text-4xl">🚴</div>
      <span className="text-lg font-medium mt-2">Pickup</span>
      <span className="text-2xl font-bold">2</span>
    </div>
    
    {/* <!-- On The Way --> */}
    <div class="bg-indigo-100 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col items-center justify-center p-4 rounded-lg">
      <div class="text-4xl">🚚</div>
      <span class="text-lg font-medium mt-2">On The Way</span>
      <span class="text-2xl font-bold">2</span>
    </div>
    
    {/* <!-- Delivered --> */}
    <div className="bg-purple-100 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col items-center justify-center p-4 rounded-lg">
      <div className="text-4xl">📦</div>
      <span className="text-lg font-medium mt-2">Delivered</span>
      <span className="text-2xl font-bold">1</span>
    </div>
    
    {/* <!-- Cancelled --> */}
    <div className="bg-red-100 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col items-center justify-center p-4 rounded-lg">
      <div className="text-4xl">❌</div>
      <span className="text-lg font-medium mt-2">Cancelled</span>
      <span className="text-2xl font-bold">0</span>
    </div>
  </div>
</div>

<div className="bg-white shadow-md  overflow-scroll scrollnone w-[100%] mt-10 rounded-lg p-6">
  <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
  <table className="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b">Order ID</th>
        <th className="py-2 px-4 border-b">Date</th>
        <th className="py-2 px-4 border-b">Customer Name</th>
        <th className="py-2 px-4 border-b">Total Price</th>
        <th className="py-2 px-4 border-b">Payment Method</th>
      </tr>
    </thead>
    <tbody>
    {orders.length>0?(
          orders.map((order,index)=>(
        <tr key={index} className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">{order.id}</td>
        <td className="py-2 px-4 border-b">{order.date.day}</td>
        <td className="py-2 px-4 border-b">{order.CustomerName}</td>
        <td className="py-2 px-4 border-b">₹ {order.totalPrice}</td>
        <td className="py-2 px-4 text-sm border-b">{order.payment}</td>
      </tr>
          ))
        ):(
          <tr>
              <td colSpan="7" className="px-4 py-2 border text-center">
                No orders available.
              </td>
            </tr>
        )}
      {/* <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">#RC000014</td>
        <td className="py-2 px-4 border-b">1</td>
        <td className="py-2 px-4 border-b">26 Sep, 2024</td>
        <td className="py-2 px-4 border-b text-yellow-500">Pending</td>
        <td className="py-2 px-4 border-b">
          <button className="text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m0 0H7m2 0h6m0 0v2m0-2v-2"/>
            </svg>
          </button>
        </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">#RC000013</td>
        <td className="py-2 px-4 border-b">1</td>
        <td className="py-2 px-4 border-b">26 Sep, 2024</td>
        <td className="py-2 px-4 border-b text-blue-500">Delivered</td>
        <td className="py-2 px-4 border-b">
          <button class="text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m0 0H7m2 0h6m0 0v2m0-2v-2"/>
            </svg>
          </button>
        </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">#RC000012</td>
        <td className="py-2 px-4 border-b">3</td>
        <td className="py-2 px-4 border-b">22 Sep, 2024</td>
        <td className="py-2 px-4 border-b text-indigo-500">Confirm</td>
        <td className="py-2 px-4 border-b">
          <button class="text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m0 0H7m2 0h6m0 0v2m0-2v-2"/>
            </svg>
          </button>
        </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">#RC000011</td>
        <td className="py-2 px-4 border-b">1</td>
        <td className="py-2 px-4 border-b">09 Sep, 2024</td>
        <td className="py-2 px-4 border-b text-gray-500">On The Way</td>
        <td className="py-2 px-4 border-b">
          <button class="text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m0 0H7m2 0h6m0 0v2m0-2v-2"/>
            </svg>
          </button>
        </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">#RC000010</td>
        <td className="py-2 px-4 border-b">1</td>
        <td className="py-2 px-4 border-b">09 Sep, 2024</td>
        <td className="py-2 px-4 border-b text-gray-500">On The Way</td>
        <td className="py-2 px-4 border-b">
          <button class="text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m0 0H7m2 0h6m0 0v2m0-2v-2"/>
            </svg>
          </button>
        </td>
      </tr> */}
    </tbody>
  </table>
</div>

  </div>
  )
}

export default AdminHome
