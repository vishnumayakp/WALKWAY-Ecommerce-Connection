import React from 'react'

function ProductDetails() {
  return (
    <div className='flex justify-center p-5'>
      <div className='w-[80%] h-[36rem] p-5 shadow-lg border  flex'>
        <div className='w-[60%] p-10 flex'>
          <div className='w-[25%] h-[100%] space-y-4 scrollnone overflow-scroll p-7'>
            <div className='w-full h-[150px] bg-gray-200'>fefrewg</div>
            <div className='w-full h-[150px] bg-gray-200'>fefrewg</div>
            <div className='w-full h-[150px] bg-gray-200'>fefrewg</div>
            <div className='w-full h-[150px] bg-gray-200'>fefrewg</div>
          </div>
          <div className='w-[75%] h-[100%]'>
            <div className='h-[100%] bg-gray-200'>dfrhttyj</div>
          </div>
        </div>
        <div className='w-[40%] bg-white flex space-y-10 flex-col'>
          <div>
          <h1 className='text-2xl'>Kids Shoes</h1>
          <p className='font-bold'>$50.00</p>
          <p className='text-sm'>Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.</p>
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
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
