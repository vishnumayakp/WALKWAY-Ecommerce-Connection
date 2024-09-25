import React, { useContext, useEffect, useState } from 'react'
import product1 from '../../../assets/kids.png'
import { getCartById, getProductById, updateCartById } from '../../../Api/Connection'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../USeContext/UserContext'
import { toast } from 'react-toastify'

function ProductDetails() {
  const navigate=useNavigate()
  const userId=localStorage.getItem('userId')
  const [product,setProduct]=useState({})
  const [state,setState]=useState(0)
  const [qty,setQty]=useState(1)
  const {cartFlag,setCartFlag}=useContext(AuthContext)

  const {id}=useParams()
  useEffect(()=>{
    getProductById(id)
    .then((res)=>setProduct(res.data))  
  },[id])
 
  async function handleAddCart(){
   if(userId){
    let currentCart=await getCartById(userId)
   let updatedCart;

   const currentIndex=currentCart.findIndex((item)=>item.id===product.id)
   console.log(currentIndex);
  if(currentIndex>=0){
    updatedCart=currentCart.map((product,index)=>(
      index===currentIndex? {...product,count:product.count+qty,totalPrice:product.price*(product.count+qty)}:product
     ))
  }else{
    updatedCart=[...currentCart,{...product,count:qty,totalPrice:product.price*qty}]
  }
  updateCartById(userId,{cart:updatedCart})
  .then(()=>{
    setCartFlag(!cartFlag)
    toast.success('Item Added to Cart',{position:'bottom-right'})
  })
   }else{
    toast.error('Please Login',{position:'bottom-right'})
    navigate('/login')
   }
  }
  
  return (
    <div className='flex justify-center lg:p-5'>
      <div className='md:w-[80%] w-full xl:flex-row  p-5 shadow-lg border space-x-5  flex flex-col'>
        <div className=' space-x-5 w-full p-10 md:h-[36rem] h-[40%] flex'>
          <div className='w-[25%] lg:h-[100%] space-y-4 scrollnone overflow-scroll md:p-7'>
          {product.images && product.images.map((value, index) => (
              <div onClick={()=>setState(index)} key={index} className='w-full transition duration-500 ease-in-out transform hover:scale-110  bg-gray-200'>
                <img className='h-[100%] w-[100%]' src={value} alt={`Product Image ${index + 1}`} />
              </div>
            ))}

          </div>
          <div className='w-[70%] h-[100%]'>
            {
              product.images?<div className='h-[100%] '><img className='h-[100%] w-[100%]' src={product.images[state]} alt="" /></div>:null
            }
          </div>
        </div>
        <div className='  flex space-y-10  flex-col'>
          <div className='flex flex-col space-y-1 items-start'>
          <h1 className='text-2xl'>{product.name}</h1>
           <p className='text-sm text-left'>{product.description}</p>
           <p className='font-bold'>₹ {product.price}</p>
           <p>⭐ {product.rating}</p>
            </div>

          <div className='border-2 w-40'>
            <select className='w-full focus:outline-none' name="" id="">
              <option value="">Select size</option>
              {

                product.available_sizes && (product.available_sizes).map((value)=>{
                  return (
                    <option value="">{value}</option>
                  )
                })
              }
            </select>
          </div>
          <div className='flex gap-20 flex-col'>
          <div className=' w-32 justify-between border items-center flex h-10'>
            <button onClick={()=>setQty(qty==1? 1:qty-1)} className='text-3xl w-20 border-x-2 border-y-2 bg-gray-200'>-</button>
            <span className='w-20'>{qty}</span>
            <button onClick={()=>setQty(qty+1)} className='text-3xl w-20 border-x-2 border-y-2 bg-gray-200'>+</button>
          </div>
          <button onClick={handleAddCart} className=' w-32 h-10 border bg-black hover:bg-gray-600 text-white rounded-3xl'>ADD TO CART</button>
          </div>
          <div className='border-2'>
            <h3 className='font-bold'>Free Delivery</h3>
            <p >Free Delivery Available on Purchases Over $50!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
