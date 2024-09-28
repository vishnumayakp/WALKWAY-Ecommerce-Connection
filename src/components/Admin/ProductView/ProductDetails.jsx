import React from 'react'
import kids from '../../../assets/kids.png'

function ProductDetails() {
  return (
    <div className='flex  justify-center lg:p-5'>
      <div className='md:w-[80%]  w-full xl:flex-row  p-5 shadow-lg border space-x-5  flex flex-col'>
        <div className=' space-x-5 w-full p-10 md:h-[36rem] h-[40%] flex'>
          <div className='w-[25%] lg:h-[100%] space-y-4 scrollnone overflow-scroll md:p-7'>
          <div className='w-full transition duration-500 ease-in-out transform hover:scale-110  bg-gray-200'>
                <img className='h-[100%] w-[100%]' src="" alt="" />
            </div>

          </div>
          <div className='w-[70%] h-[100%]'>
          <div className='h-[100%] '><img className='h-[100%] w-[100%]' src="" alt="" /></div>
          </div>
        </div>
        <div className='  flex space-y-10  flex-col'>
          <div className='flex flex-col space-y-1 items-start'>
          <h1 className='text-2xl'>name</h1>
           <p className='text-sm text-left'>description</p>
           <p className='font-bold'>₹ price</p>
           <p>⭐ </p>
            </div>
          <div className='flex'>
          <button className='border bg-yellow-500 text-white rounded p-2 w-20'>Edit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetails
