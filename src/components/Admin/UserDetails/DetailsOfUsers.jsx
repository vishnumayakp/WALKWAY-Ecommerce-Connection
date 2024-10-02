import React, { useEffect, useState } from 'react'
import { FaUserTie } from "react-icons/fa";
import {useParams} from 'react-router-dom'
import { getUserById, updateUserStatus } from '../../../Api/Connection';

function DetailsOfUsers() {
    const {id} = useParams()
    const [details,setDetails]=useState({})
    const [user,setuser]=useState([])
    const [orders,setOrders]=useState([])

    useEffect(()=>{
        const fetchUsers =async()=>{
            try{
                const res=await getUserById(id)
                setDetails(res.data)
                console.log("fetched user details");
                
            }catch(error){
                console.log("can't fetch user details");
                
            }
        }

        const fetchUserOrders=async()=>{
          const res=await getUserById(id)
          setuser(res.data)
          setOrders(res.data.orders)
        }
        fetchUserOrders()
        fetchUsers()
    },[id])

    const handleUserStatus =(id,status)=>{
      updateUserStatus(id,!status)
      .then(()=>{
        setDetails(prev=>({...prev, status: !prev.status}))
      })
      .catch((error)=>{
        console.log("cant chage the status",error);
        
      })
   }

    const totalOrders = details && details.orders ? details.orders.length : 0
    const totalcarts = details && details.cart ? details.cart.length:0

  return (
    <div className="bg-gray-100 space-x-10 h-screen flex items-center justify-center">
    <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-sm w-full">
      <div className="relative flex justify-center">
        <FaUserTie className='w-32 h-[20%]' />
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold text-gray-800">{details.name}</h1>
        <p className="text-gray-500">{details.id}</p>
        <p className="mt-2 text-sm text-gray-400">
        {details.email}
        </p>
      </div>
      <div className="mt-6 flex justify-around text-center">
        <div>
          <span className="font-bold text-gray-800">{totalOrders}</span>
          <p className="text-gray-500 text-sm">Orders</p>
        </div>
        <div>
          <span className="font-bold text-gray-800">{details.status ? 'Blocked' : 'Active'}</span>
          <p className="text-gray-500 text-sm">Status</p>
        </div>
        <div>
          <span className="font-bold text-gray-800">{totalcarts}</span>
          <p className="text-gray-500 text-sm">Cart</p>
        </div>
      </div>
      <button onClick={()=>handleUserStatus(details.id,details.status)} className={`border ${details.status ? 'bg-green-600' : 'bg-red-600'} text-white rounded p-2 w-20`}> {details.status ? 'Unblock' : 'Block'}</button>
    </div>


    <div  className="p-8 bg-gray-100 min-h-screen">
    <div className="bg-white shadow-md overflow-scroll scrollnone w-[97%] mt-10 rounded-lg p-6">
  <h2 className="text-lg font-semibold mb-4">Orders</h2>
  <table className="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b">Thumbnail</th>
        <th className="py-2 px-4 border-b">Id</th>
        <th className="py-2 px-4 border-b">Name</th>
        <th className="py-2 px-4 border-b">Qty</th>
        <th className="py-2 px-4 border-b">Total Price</th>
      </tr>
    </thead>
    <tbody>

      {orders.length>0 ? (
        orders.map((order)=>(
          order.items.map(item=>(
            <tr className="hover:bg-gray-50 w-[100%]">
          <td className="py-2 w-[25%] border-b"><img className='h-[5rem] w-[5rem]' src={item.image} alt="" /></td>
          <td className="py-2 px-4 border-b">{order.id}</td>
          <td className="py-2 px-4 border-b">{item.name}</td>
          <td className="py-2 px-4 border-b">{item.count}</td>
          <td className="py-2 px-4 border-b">{order.totalPrice}</td>
        </tr>
          ))
        ))
      ):(
        <tr>
              <td colSpan="5" className="px-4 py-2 border text-center">
                No orders available.
              </td>
            </tr>
      )}
  
    </tbody>
  </table>
</div>
</div>
  </div>

  )
}

export default DetailsOfUsers
