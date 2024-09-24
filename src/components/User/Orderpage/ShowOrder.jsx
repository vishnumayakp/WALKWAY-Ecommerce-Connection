import React, { useEffect, useState } from 'react'
import { getOrderById } from '../../../Api/Connection'

function ShowOrder() {
  const userId=localStorage.getItem('userId')
  const [showorder,setShowOrder]=useState([])
   useEffect(()=>{
    getOrderById(userId)
  .then((res)=>setShowOrder(res))
   },[])

  return (
    <div className='w-[100%] flex flex-col items-center p-5 overflow-x-auto'>
        <p className='font-bold text-3xl'>Orders</p>
      <div className='h-[100%] w-full md:w-[80%] border'>
        <div className=' space-y-10 w-ful h-[32rem] overflow-y-scroll scrollnone'>
            {showorder.length>=0?(
              showorder.map((order)=>{
                return order.items.map((item)=>{
                  return (
                    <div className='w-full flex justify-between items-center h-[8rem] p-4 border'>
                <div className='md:w-[20%] h-full'><img className=' h-full' src={item.image} alt="" /></div>
                <div className='flex w-[30%] text-left flex-col'>
                <span>{item.name}</span>
                <span>qty : {item.count}</span>
                <span>{item.totalPrice}</span>
                </div>
                <div className='flex  w-[30%] text-left flex-col'>
                <p>id : {order.id}</p>
                <p className='text-xs'>{order.date.day}</p>
                <p className='text-xs'>{order.date.time}</p>
                </div>
                <div className='flex  w-[30%] text-left flex-col'>
                  <p>{order.address.fname}</p>
                  <p className='text-xs'>{order.address.address} {order.address.pincode}</p>
                  <p>{order.address.mobile}</p>
                </div>
          <span className=' w-[30%]'>{order.payment}</span>
            </div>
                  )
                  
                })
                
              })
            ):(
              <h1>order empty</h1>
            )}
           
        </div>
      </div>
      </div>
  )
}

export default ShowOrder
