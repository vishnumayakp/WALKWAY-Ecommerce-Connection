import React, { useEffect, useState } from 'react'
import { FaUserTie } from "react-icons/fa";
import {useParams} from 'react-router-dom'
import { getUserById, updateUserStatus } from '../../../Api/Connection';

function DetailsOfUsers() {
    const {id} = useParams()
    const [details,setDetails]=useState({})

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
    <div className="bg-gray-100 h-screen flex items-center justify-center">
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
  </div>

  )
}

export default DetailsOfUsers
