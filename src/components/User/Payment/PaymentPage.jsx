import React, { useContext, useEffect, useState } from 'react'
import product1 from '../../../assets/kids.png'
import { getAddressById, getCartById, getOrderById, updateCartById, updateOrderById } from '../../../Api/Connection'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../USeContext/UserContext'
import { toast } from 'react-toastify'

function PaymentPage() {
  const[totalPrice,setTotalPrice]=useState(0)
  const[address,setAddress]=useState({})
  const [showProduct,setShowproduct]=useState([])
  const userId=localStorage.getItem('userId')
  const [payment,setPayment]=useState('')
  const navigate=useNavigate()
  const d= new Date()
  const {cartFlag,setCartFlag}=useContext(AuthContext)

useEffect(()=>{
  getCartById(userId)
  .then((res)=>{
    setShowproduct(res)
    totalCartPrice(res)
    getAddressById(userId)
    .then((res)=>setAddress(res))
  })
},[])
console.log(payment);

function totalCartPrice(items){
  const total=items.reduce((total,current)=> total+current.totalPrice,0)
  setTotalPrice(total)
 }

 async function handleOrder(){
 if(address.mobile==='' || address===null){
  
  
   toast.error('Must fill Address',{position:'bottom-right'})
  
 }else if(!payment){
  toast.error('Must fill Payment option',{position:'bottom-right'})
  console.log(address);
 }else{
  let currentOrder= await getOrderById(userId)
  let updatedOrder;
  const dataset={id:Date.now(),date:{day:d.toDateString(),time:d.toLocaleTimeString()},payment:payment,totalPrice:totalPrice,items:showProduct,address:address} 
  updatedOrder=[...currentOrder,dataset]
  updateOrderById(userId, {orders:updatedOrder})
  .then(()=>{
   updateCartById(userId,{cart:[]})
   .then(()=>setCartFlag(!cartFlag))
   toast.success('Order Placed',{position:'bottom-right'})
   navigate('/showorder')
  
  })
 }
 
 
 }
  return (
    <div className='md:flex w-full justify-between md:px-32 '>
      <div className='md:w-[80%]  h-[36rem] flex justify-center p-5 '>
      <div className='h-[100%] w-full border scrollnone overflow-scroll'>
      <div className=' space-y-10 h-[90%] overflow-auto scrollnone'>
      {showProduct.length>0?(
        showProduct.map((value)=>{
          return (
   
            <div className='w-[100%] flex justify-between items-center h-[8rem] p-4 border'>
                <div className='w-[20%] h-full '><img className='h-[100%] w-[70%]' src={value.image} alt="" /></div>
                <span>{value.name}</span>
                <span>{value.count}</span>
          <span>{value.totalPrice}</span>
      </div>
          )
        })
      ):(
        <h1>Order is empty</h1>
      )}
       </div>
       </div>
      </div>

      <div className='md:w-[45%]  h-[38rem] flex justify-center p-5'>
        <div  className='h-[100%] w-full flex flex-col p-5 space-y-5 items-start border'>
        <p className='font-bold  text-xl'>ORDER SUMMARY</p>
            <div className='space-y-5 w-full'>
                <form className='space-y-5 flex flex-col' action="">
                    {/* <div className=' border-2 h-10 flex justify-between'>
                    <input className=' w-[45%] px-3' type="text" placeholder='Enter coupon code' />
                    <button className='bg-black text-white text-sm px-5'>APPLY COUPON</button>
                    </div> */}
                    <div className=' border-2 flex flex-col justify-between p-5'>
                    <div className='flex justify-between w-full'>
                    <h1 className='text-xl font-bold'>Address</h1>
                      <button onClick={()=>navigate('/profile')} className='border-2 bg-black text-white text-xs w-10 p-1 rounded'>{address?"Edit":"Add"}</button>
                      </div>
                   {
                    address?(
                      <div className=' p-3 w-[100%] text-left '>
                     
                      <h1>{address.fname} {address.lname}</h1>
                      
                     
                      <h1>{address.city}</h1>
                      <h1>{address.address} {address.pincode}</h1>
                      <h1>{address.mobile}</h1>
                      <h1>{address.email}</h1>
                    </div>
                    ):(
                      null
                    )
                   }
                     <div className='flex flex-col'>

                     </div>
                    </div>

                </form>
                <div className='border p-5'>
                        <div className='flex justify-between'>
                            <p className='text-sm'>MRP ({showProduct.length})</p>
                            <p className='text-sm'>{totalPrice}</p>
                        </div>
                        <hr className='w-[100%] mt-2 border-gray-300'/>

                        <div className='flex justify-between'>
                            <p className='font-semibold text-xl'>Total</p>
                            <p className='font-semibold text-xl'>{totalPrice}</p>
                        </div>
                    </div>  

                    <div className='border p-5'>
                        <div className='flex justify-center'>
                            <p className='text-xl font-bold'>Payment Details</p>
                        </div>
                        <hr className='w-[100%] mt-2 border-gray-300'/>

                        <div className='flex flex-col p-4 items-start'>
                           <div>  <input onChange={()=>setPayment('Cash on delivery')} name='payment' type="radio"/><label htmlFor=""> Cash on delivery</label></div>
                            <div><input onChange={()=>setPayment('Paypal')} name='payment' type="radio"/><label htmlFor=""> Paypal</label></div>
                            <div> <input onChange={()=>setPayment('Upi')} name='payment' type="radio"/><label htmlFor=""> UPi</label></div>
                            <div><input onChange={()=>setPayment('Credit or Debit card')} name='payment' type="radio"/><label htmlFor=""> Credit or Debit card</label></div>
                        </div>
                    </div> 

                    <div>
                    <button onClick={handleOrder} className=' w-full h-10 border bg-black hover:bg-gray-600 text-white rounded-3xl'>Pay Now</button>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
