import React, { useContext, useEffect, useState } from 'react'
import product1 from '../../../assets/kids.png'
import { AuthContext } from '../../../USeContext/UserContext'
import { getAddressById, getCartById, updateCartById } from '../../../Api/Connection'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const [qty,setQty]=useState()
  const [cart, setCart]=useState([])
  const userId = localStorage.getItem('userId')
  const [totalPrice,setTotalPrice]=useState(0)
  const [address,setAddress]=useState({})
  const navigate=useNavigate()
  const {cartFlag,setCartFlag}=useContext(AuthContext)

//  const {cart} = useContext(AuthContext)

 useEffect(()=>{
  if(userId){
  getCartById(userId)
  .then((res)=>{setCart(res)
  totalCartPrice(res)
  getAddressById(userId)
  .then((res)=>setAddress(res))
},[userId])
  }
 },[userId,cart])

 function totalCartPrice(items){
  const total=items.reduce((total,current)=> total+current.totalPrice,0)
  setTotalPrice(total)
 }

 async function handleIncrement(id){
    let currentCart=await getCartById(userId)
    let updatedCart;
     updatedCart=currentCart.map((value)=>value.id === id? {...value,count:value.count+1,totalPrice:(value.count+1)*value.price}:value)
   updateCartById(userId,{cart:updatedCart})
   .then((res)=>setCart(res.data.cart))  
   
 }

 async function handleDecrement(id){
  let currentCart=await getCartById(userId)
    let updatedCart;
     updatedCart=currentCart.map((value)=>value.id === id? {...value,count:value.count===1?1 :value.count-1,totalPrice:(value.count===1?1 :value.count-1)*value.price}:value)
   updateCartById(userId,{cart:updatedCart})
   .then((res)=>setCart(res.data.cart))  
 }

function handleDelete(productId){
  let updatedCart=cart.filter((value)=>value.id!==productId)
  updateCartById(userId,{cart:updatedCart})
  .then((res)=>{
    setCart(res.data.cart)
    setCartFlag(!cartFlag)
  })
 
}
  return (
    <div >
      <div className='md:flex w-[100%] overflow-x-auto md:space-x-32 md:space-y-0 space-y-5 lg:py-5 p-5 lg:px-32'>
      <div className='md:w-[60%]  h-[36rem] flex '>
      <div className=' h-[100%]  border scrollnone '>
        <div className='  space-x-10 md:space-x-20 justify-evenly p-3 border flex'>
            <p className='font-semibold text-sm'>PRODUCT</p>
            <p className='font-semibold text-sm'>PRICE</p>
            <p className='font-semibold text-sm'>QUANTITY</p>
            <p className='font-semibold text-sm'>TOTAL</p>
            <p className='font-semibold text-sm'>REMOVE</p>

        </div>
        <div className=' space-y-10 h-[90%] overflow-y-scroll scrollnone'>
            {cart.length>0?cart.map((value)=>{
              return (
                <div className='w-full flex justify-between items-center h-[10rem] p-4 border'>
                <div className='w-[25%] flex font-semibold'><img className=' h-20 w-20' src={value.image} alt="" />
                <span className='text-xs'>{value.name}</span>
                </div>
                <span>₹ {value.price} </span>
                <div className=' w-32 justify-between border items-center flex h-10'>
                <button onClick={()=>handleDecrement(value.id)} className='text-3xl w-20 border-x-2 border-y-2 bg-gray-200'>-</button>
            <span className='w-20'>{value.count}</span>
            <button onClick={()=>handleIncrement(value.id)} className='text-3xl w-20 border-x-2 border-y-2 bg-gray-200'>+</button>
          </div>
          <span>{value.totalPrice}</span>
          <button onClick={()=>handleDelete(value.id)} className='border bg-red-400 text-white p-1 rounded'>Remove</button>
            </div> 
              )
            }):
            <span>cart is empty</span>
            }
        </div>
      </div>
      </div>
      <div className='md:w-[40%] md:h-[36rem] flex justify-center'>
        <div  className=' h-[100%] w-full flex flex-col p-5 space-y-5 items-start border'>
        <p className='font-bold  text-xl'>CART TOTALS</p>
            <div className='flex'>
            <p>Subtotal:</p> <span className='ml-10'>{totalPrice}</span>
            </div>
            <hr className='w-[100%]  border-gray-300 text-xl'/>
      <div className='space-y-5 md:w-full w-full flex flex-col items-start'>
        <div className='flex w-full justify-between'>
        <h1 className='text-xl font-bold'>Address</h1>
        <button onClick={()=>navigate('/profile')} className='border-2 bg-black text-white text-xs w-10 p-1 rounded'>Edit</button>
        </div>
                <div className=' w-[100%] text-left '>
                  <h1>{address.fname} {address.lname}</h1>
                  <h1>{address.city}</h1>
                  <h1>{address.address} {address.pincode}</h1>
                  <h1>{address.mobile}</h1>
                  <h1>{address.email}</h1>
                </div>
                <hr className='w-[100%]  border-gray-300 text-xl'/>

                <div className='p-5 w-[100%] space-y-10'>
                <div className='flex md:justify-start space-x-5 justify-between'>
                    <p className='font-bold text-xl'>Toatal:</p><span>{totalPrice}</span>
                </div>   
                    <div>
                      {cart.length>0?(

                        <button onClick={()=>navigate('/payment')} className=' w-[100%] h-10 border bg-black hover:bg-gray-600 text-white rounded-3xl'>PROCEED TO CHECKOUT</button>
                      ):(
                        
                        <button onClick={()=>navigate('/')} className=' w-[100%] h-10 border bg-black hover:bg-gray-600 text-white rounded-3xl'>GO TO STORE</button>
                      )}
                    </div>
               
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cart
