import React, { useEffect, useState } from 'react'
import product1 from '../../../assets/kids.png'
import { getProductById } from '../../../Api/Connection'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const [product,setProduct]=useState({})
  const [state,setState]=useState(0)
  const {id}=useParams()
  useEffect(()=>{
    getProductById(id)
    .then((res)=>setProduct(res.data))  
  },[id])
 
  
  return (
    <div className='flex justify-center lg:p-5'>
      <div className='md:w-[80%] w-full xl:flex-row  p-5 shadow-lg border space-x-5  flex flex-col'>
        <div className=' space-x-5 w-full p-10 md:h-[36rem] h-[40%] flex'>
          <div className='w-[25%] lg:h-[100%] space-y-4 scrollnone overflow-scroll md:p-7'>
          {product.images && product.images.map((value, index) => (
              <div onClick={()=>setState(index)} key={index} className='w-full  bg-gray-200'>
                <img className='h-[100%] w-[100%]' src={value} alt={`Product Image ${index + 1}`} />
              </div>
            ))}

          </div>
          <div className='w-[75%] h-[100%]'>
            {
              product.images?<div className='h-[100%] bg-gray-200'><img className='h-[100%] w-[100%]' src={product.images[state]} alt="" /></div>:null
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
              <option value="">Select Color</option>
              <option value="">Red</option>
              <option value="">Green</option>
              <option value="">Blue</option>
              <option value="">White</option>
              <option value="">Black</option>
              <option value="">Yellow</option>
            </select>
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
            <button className='text-3xl w-20 border-x-2 border-y-2 bg-gray-200'>-</button>
            <span className='w-20'>0</span>
            <button className='text-3xl w-20 bg-gray-200 border-x-2 border-y-2'>+</button>
          </div>
          <button className=' w-32 h-10 border bg-black hover:bg-gray-600 text-white rounded-3xl'>ADD TO CART</button>
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
