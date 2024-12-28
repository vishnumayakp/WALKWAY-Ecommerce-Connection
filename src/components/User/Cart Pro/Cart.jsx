import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../USeContext/UserContext'
import { cartDecrement, cartIncrement, getAddressById, getCartById, removeFromCart, updateCartById } from '../../../Api/Connection'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Cart() {
  const [qty,setQty]=useState()
  const [cart, setCart]=useState({})
  const token = localStorage.getItem('authToken')
  const [totalPrice,setTotalPrice]=useState(0)
  const [address,setAddress]=useState({})
  const navigate=useNavigate()
  const {cartFlag,setCartFlag}=useContext(AuthContext)

//  const {cart} = useContext(AuthContext)

 useEffect(()=>{
  if(token){
  getCartById()
  .then((res)=>{setCart(res)
})
.catch((error) => {
  console.error('Error fetching cart:', error)
})
  }
 },[token])

 async function handleIncrement(productId){
    try{
      let incrementQty=await cartIncrement(productId)
      getCartById()
      .then((res)=>setCart(res))
   console.log('FULL RESPONCE:',incrementQty) 
    }catch (error) {
      console.error('Failed to increment cart item:', error);
    }
 }

 async function handleDecrement(productId){
  try{
    let decrement= await cartDecrement(productId)
        getCartById()
    .then((res)=>setCart(res))
    console.log('Response',decrement); 
  }catch (error) {
    console.error('Failed to decrement cart item:', error);
  }
 }

async function handleDelete(productId){
  try{
    const removeProduct=await removeFromCart(productId)
      getCartById()
    .then((res)=>setCart(res))
    setCartFlag(!cartFlag)
  }catch (error) {
    console.error('Failed to decrement cart item:', error);
  }
}
  return (
    <div>
  <div className='md:flex w-[100%] overflow-x-auto md:space-x-32 md:space-y-0 space-y-5 lg:py-5 p-5 lg:px-32'>
    <div className='md:w-[65%] h-[40rem] flex'> {/* Increased the width of the table */}
      <div className='h-[100%] border scrollnone'>
        <div className='flex justify-between p-3 border-b'>
          <p className='font-bold text-sm w-[35%]'>PRODUCT</p> {/* Increased the product column width */}
          <p className='font-bold text-sm w-[15%] text-center'>SIZE</p> {/* Corrected the size column */}
          <p className='font-bold text-sm w-[15%] text-center'>PRICE</p> {/* Price column */}
          <p className='font-bold text-sm w-[15%] text-center'>QUANTITY</p> {/* Quantity column */}
          <p className='font-bold text-sm w-[10%] text-center'>TOTAL</p> {/* Total column */}
          <p className='font-bold text-sm w-[15%] text-center'>REMOVE</p> {/* Remove column */}
        </div>
        <div className='space-y-10 h-[90%] overflow-y-scroll scrollnone'>
          {cart.cartItems && cart.cartItems.length > 0 ? (
            cart.cartItems.map((value, index) => (
              <div key={index} className='w-full flex justify-between items-center h-[10rem] p-4 border'>
                <div className='w-[35%] flex items-center space-x-4'> {/* Increased product section width */}
                  <img className='h-20 w-20' src={value.image} alt={value.image} />
                  <span className='text-sm font-semibold'>{value.productName}</span> {/* Ensure product name has enough space */}
                </div>
                <span className='w-[15%] text-center'>{value.size}</span> {/* Size column */}
                <span className='w-[15%] text-center'>₹ {value.unitPrice}</span> {/* Price column */}
                <div className='w-[15%] flex justify-between items-center border h-10'>
                  <button onClick={() => handleDecrement(value.productId)} className='text-3xl w-10 border-x-2 border-y-2 bg-gray-200'>-</button>
                  <span className='w-10 text-center'>{value.quantity}</span> {/* Center the quantity */}
                  <button onClick={() => handleIncrement(value.productId)} className='text-3xl w-10 border-x-2 border-y-2 bg-gray-200'>+</button>
                </div>
                <span className='w-[20%] text-center'>₹ {value.totalPrice}</span> {/* Total price column */}
                <button onClick={() => handleDelete(value.productId)} className='w-[10%] text-center border bg-red-400 text-white p-1 rounded'>Remove</button>
              </div>
            ))
          ) : (
            <img className='opacity-35' src='https://imprint.com/domains/4/templates/dragon-soul/images/cart-empty.jpg' alt='Cart is empty' />
          )}
        </div>
      </div>
    </div>
    <div className='md:w-[35%] md:h-[40rem] flex justify-center'> {/* Reduced the right section width */}
      <div className='h-[100%] w-full flex flex-col p-5 space-y-5 items-start border'>
        <p className='font-bold text-xl'>CART TOTALS</p>
        <div className='flex'>
          <p>Subtotal:</p> <span className='ml-10'>{cart.grandTotal}</span>
        </div>
        <hr className='w-[100%] border-gray-300 text-xl' />
        <div className='space-y-5 md:w-full w-full flex flex-col items-start'>
          <hr className='w-[100%] border-gray-300 text-xl' />
          <div className='p-5 w-[100%] space-y-10'>
            <div className='flex md:justify-start space-x-5 justify-between'>
              <p className='font-bold text-xl'>Total:</p><span>{cart.grandTotal}</span>
            </div>
            <div>
              {cart ? (
                <button onClick={() => navigate('/payment')} className='w-[100%] h-10 border bg-black hover:bg-gray-600 text-white rounded-3xl'>PROCEED TO CHECKOUT</button>
              ) : (
                <button onClick={() => navigate('/')} className='w-[100%] h-10 border bg-black hover:bg-gray-600 text-white rounded-3xl'>GO TO STORE</button>
              )}
            </div>
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
              <p className="font-bold">Free Delivery</p>
              <p>Free Delivery Available on Purchases Over ₹1000!</p>
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
