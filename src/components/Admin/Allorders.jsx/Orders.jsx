import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../../../Api/Connection'

function Orders() {
  const[orders,setorders]=useState([])

  useEffect(()=>{
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
  },[])
  

  return (
    <div  className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">All Orders</h2>
    </div>
    <div className="bg-white shadow-md overflow-scroll scrollnone w-[97%] mt-10 rounded-lg p-6">
      <table className="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b">Order ID</th>
        <th className="py-2 px-4 border-b">Order date</th>
        <th className="py-2 px-4 border-b">Customer</th>
        <th className="py-2 px-4 border-b">Total Amount</th>
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
      </tbody>
  </table>
</div>
</div>
  )
}

export default Orders
