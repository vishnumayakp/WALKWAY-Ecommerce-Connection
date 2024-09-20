import React from 'react'
import product1 from '../../../assets/kids.png'


function Overview() {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex items-start space-y-5 flex-col w-[100%]'>
      <h1 className='font-bold ml-[10%]  top-3 left-4 text-4xl'>PRODCT OVERVIEW</h1>
      <div className='flex gap-5 ml-[10%]'>
        <button className='text-gray-400 hover:underline decoration-gray-600 focus:underline'>All products</button>
        <button className='text-gray-400 hover:underline decoration-gray-600 focus:underline'>Women</button>
        <button className='text-gray-400 hover:underline decoration-gray-600 focus:underline'>Men</button>
        <button className='text-gray-400 hover:underline decoration-gray-600 focus:underline'>Kids</button>
      </div>
    </div>
    <div className='flex flex-wrap w-[100%]  justify-center gap-10 h-[25rem] mt-5'>
        <div className=' h-[30rem] w-[25rem] sm:h-[24rem] sm:w-[18rem] md:h-[20rem] lg:w-[15rem] md:w-[16em] flex flex-col items-start'>
          <div className='bg-gray-200 '><img src={product1} alt="" /></div>
          <div className='flex flex-col items-start'><span>Kids Shoes</span><p>$50.00</p><p>⭐⭐⭐⭐⭐</p></div>
        </div>
        <div className='  h-[30rem] w-[25rem]  sm:h-[24rem] sm:w-[18rem] md:h-[20rem] lg:w-[15rem] md:w-[16rem] bg-gray-200'></div>
        <div className='  h-[30rem] w-[25rem] sm:h-[24rem] sm:w-[18rem] md:h-[20rem] lg:w-[15rem] md:w-[16rem] bg-gray-200'>fgfhrgtrj</div>
        <div className='  h-[30rem] w-[25rem] sm:h-[24rem] sm:w-[18rem] md:h-[20rem] lg:w-[15rem] md:w-[16rem] bg-gray-200'>fgfhthtyj</div>
      </div>

    </div>
  )
}

export default Overview
