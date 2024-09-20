import React from 'react'

function Category() {
  return (
    <div className="flex gap-10 justify-center flex-wrap p-10">
      <div className='md:w-[22rem] w-[90%] relative h-64 border border-gray-300' ><h4 className='font-bold absolute top-3 left-4 text-3xl'>Women</h4><img className='h-[100%] ' src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp" alt="" /></div>
      <div className='md:w-[22rem] w-[90%] relative h-64 border border-gray-300' ><h4 className='font-bold absolute top-3 left-4 text-3xl'>Men</h4><img className='h-[100%]  ' src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp" alt="" /></div>
      <div className='md:w-[22rem] relative  w-[90%] h-64 border border-gray-300' ><h4 className='font-bold absolute top-3 left-4 text-3xl'>Kids</h4><img className='h-[100%] ' src="https://media.istockphoto.com/id/1310497793/photo/portrait-of-a-boy-with-big-brown-eyes-who-sits-on-a-white-background-and-looks-at-the-camera.jpg?s=612x612&w=0&k=20&c=60Oodpur6TxnKO_PEk5IeJKhCyioDYiIgkkYlwKtOn0=" alt="" /></div>
    </div>
  )
}

export default Category
