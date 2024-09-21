import React from 'react'
import product1 from '../../../assets/kids.png'

function ProductDetails() {
  return (
    <div className='flex justify-center lg:p-5'>
      <div className='md:w-[80%] w-full xl:flex-row  p-5 shadow-lg border space-x-5  flex flex-col'>
        <div className=' space-x-5 w-full p-10 md:h-[36rem] h-[40%] flex'>
          <div className='w-[25%] lg:h-[100%] space-y-4 scrollnone overflow-scroll md:p-7'>
            <div className='w-full h-[100px] bg-gray-200'>fefrewg</div>
            <div className='w-full h-[100px] bg-gray-200'>fefrewg</div>
            <div className='w-full h-[100px] bg-gray-200'>fefrewg</div>
            <div className='w-full h-[100px] bg-gray-200'>fefrewg</div>
          </div>
          <div className='w-[75%] h-[100%]'>
            <div className='h-[100%] bg-gray-200'><img src={product1} alt="" /></div>
          </div>
        </div>
        <div className='  flex space-y-10  flex-col'>
          <div className='flex flex-col space-y-3 items-start'>
          <h1 className='text-2xl'>Kids Shoes</h1>
          <p className='font-bold'>$50.00</p>
           <p className='text-sm text-left'>Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.</p>
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
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
              <option value="">XXL</option>
              <option value="">XXXL</option>
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
