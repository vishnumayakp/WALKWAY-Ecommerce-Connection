import React from 'react'

function Category() {
  return (
    <div>
      <div className="flex gap-10 justify-center flex-wrap p-10">
      <div className='md:w-[22rem] w-[90%] relative h-64 border  border-gray-300' ><h4 className='font-bold absolute top-3 left-4 text-3xl'>Women</h4><img className='h-[100%] ' src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp" alt="" /></div>
      <div className='md:w-[22rem] w-[90%] relative h-64 border border-gray-300' ><h4 className='font-bold absolute top-3 left-4 text-3xl'>Men</h4><img className='h-[100%]  ' src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp" alt="" /></div>
      <div className='md:w-[22rem] relative  w-[90%] h-64 border border-gray-300' ><h4 className='font-bold absolute top-3 left-4 text-3xl'>Kids</h4><img className='h-[100%] ' src="https://media.istockphoto.com/id/1310497793/photo/portrait-of-a-boy-with-big-brown-eyes-who-sits-on-a-white-background-and-looks-at-the-camera.jpg?s=612x612&w=0&k=20&c=60Oodpur6TxnKO_PEk5IeJKhCyioDYiIgkkYlwKtOn0=" alt="" /></div>
    </div>
    {/* <div className='flex gap-5 ml-[10%]'>
    <button onClick={()=>setCategory('')} className='text-gray-400 hover:underline decoration-gray-600 focus:underline'>All products</button>
    <button onClick={()=>setCategory('women')} className='text-gray-400 hover:underline decoration-gray-600 focus:underline'>Women</button>
    <button onClick={()=>setCategory('Men')} className='text-gray-400 hover:underline decoration-gray-600 focus:underline'>Men</button>
    <button onClick={()=>setCategory('kids')} className='text-gray-400 hover:underline decoration-gray-600 focus:underline'>Kids</button>
  </div> */}
    </div>
  )
}

export default Category
