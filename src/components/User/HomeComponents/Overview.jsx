import React, { useEffect, useState } from 'react'
import product1 from '../../../assets/kids.png'
import { getProductByCategory, getProducts } from '../../../Api/Connection'
import {useNavigate, useParams,} from 'react-router-dom'


function Overview() {
  const [product,setProduct]=useState([])
  const [category, setCategory]=useState('')
  const navigate=useNavigate()

  useEffect(()=>{
      getProducts()
      .then((res)=>{
        if(category){
         setProduct(
          res.data.filter((value)=>{
            if(value.category===category){
             return value 
            }
          })
         )
        }else{
          setProduct(res.data)
        }
      })
  },[category])
  return (
    <div>
      <div className='flex flex-col items-center'>
        <div className='flex items-start space-y-5 flex-col w-[100%]'>
      
      <div className="flex gap-10 justify-center flex-wrap p-10 w-full">
      <div  onClick={()=>setCategory('women')} className='md:w-[22rem] w-[90%] relative h-64 border  border-gray-300  transition duration-500 ease-in-out transform hover:scale-110' ><h4 className='font-bold absolute top-3 left-4 text-3xl'>Women</h4><img className='h-[100%] ' src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp" alt="" /></div>
      <div  onClick={()=>setCategory('Men')} className='md:w-[22rem] w-[90%] relative h-64 border border-gray-300  transition duration-500 ease-in-out transform hover:scale-110' ><h4 className='font-bold absolute top-3 left-4 text-3xl'>Men</h4><img className='h-[100%]  ' src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp" alt="" /></div>
      <div  onClick={()=>setCategory('kids')} className='md:w-[22rem] relative  w-[90%] h-64 border border-gray-300  transition duration-500 ease-in-out transform hover:scale-110' ><h4 className='font-bold absolute top-3 left-4 text-3xl'>Kids</h4><img className='h-[100%] ' src="https://media.istockphoto.com/id/1310497793/photo/portrait-of-a-boy-with-big-brown-eyes-who-sits-on-a-white-background-and-looks-at-the-camera.jpg?s=612x612&w=0&k=20&c=60Oodpur6TxnKO_PEk5IeJKhCyioDYiIgkkYlwKtOn0=" alt="" /></div>
    </div>
    {/* <div className='flex gap-5 ml-[10%]'>
    <button onClick={()=>setCategory('')} className='text-gray-400 hover:underline decoration-gray-600 focus:underline'>All products</button>
    <button onClick={()=>setCategory('women')} className='text-gray-400 hover:underline decoration-gray-600 focus:underline'>Women</button>
    <button onClick={()=>setCategory('Men')} className='text-gray-400 hover:underline decoration-gray-600 focus:underline'>Men</button>
    <button onClick={()=>setCategory('kids')} className='text-gray-400 hover:underline decoration-gray-600 focus:underline'>Kids</button>
  </div> */}
  <h1 className='font-bold ml-[10%]  top-3 left-4 text-4xl'>PRODCT OVERVIEW</h1>
    </div>
    </div>
    <div className='flex flex-wrap w-[100%]  justify-center gap-10 h-[25rem] mt-5'>
    {product.map((value)=>{
      return (
        
      <div onClick={()=>navigate(`/product/${value.id}`)} className=' h-[30rem] w-[25rem] sm:h-[24rem] sm:w-[18rem] md:h-[20rem] lg:w-[15rem] md:w-[16em] flex flex-col items-start'>
        <div className='bg-gray-200 '><img src={value.image} alt="" /></div>
        <div className='flex flex-col items-start'><span>{value.name}</span>
        <span className='font-bold'>₹ {value.price}</span>
        <span>⭐{value.rating}</span>
        </div>
      </div>

      )
      
    })}
    </div>
    </div>
  )
}

export default Overview
