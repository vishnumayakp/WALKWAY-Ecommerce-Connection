import React from 'react'
import product1 from '../../../assets/kids.png'

function Cart() {
  return (
    <div >
      <div className='md:flex w-[100%] overflow-x-auto md:space-x-32 md:space-y-0 space-y-5 lg:py-5 p-5 lg:px-32'>
      <div className='md:w-[60%]  h-[36rem] flex '>
      <div className=' h-[100%]  border scrollnone '>
        <div className='  space-x-10 md:space-x-20 justify-evenly p-3 border flex'>
            <p className='font-semibold text-sm'>PRODUCT</p>
            <p className='font-semibold text-sm'>PRICE</p>
            <p className='font-semibold text-sm'>QUANTITY</p>
            <p className='font-semibold text-sm'>TOTAL</p>
        </div>
        <div className=' space-y-10 h-[90%] overflow-y-scroll scrollnone'>
            <div className='w-full flex justify-between items-center h-[8rem] p-4 border'>
                <div className='w-[20%] h-full bg-gray-200'><img src={product1} alt="" /></div>
                <span>$50.00</span>
                <div className=' w-32 justify-between border items-center flex h-10'>
            <button className='text-3xl w-20 border-x-2 border-y-2 bg-gray-200'>-</button>
            <span className='w-20'>0</span>
            <button className='text-3xl w-20 bg-gray-200 border-x-2 border-y-2'>+</button>
          </div>
          <span>$50.00</span>
            </div>
            <div className='w-full flex justify-between items-center h-[8rem] p-4 border'>
                <div className='w-[20%] h-full bg-gray-200'>dfrsthfgth</div>
                <span>$50.00</span>
                <div className=' w-32 justify-between border items-center flex h-10'>
            <button className='text-3xl w-20 border-x-2 border-y-2 bg-gray-200'>-</button>
            <span className='w-20'>0</span>
            <button className='text-3xl w-20 bg-gray-200 border-x-2 border-y-2'>+</button>
          </div>
          <span>$50.00</span>
            </div>
            <div className='w-full flex justify-between items-center h-[8rem] p-4 border'>
                <div className='w-[20%] h-full bg-gray-200'>dfrsthfgth</div>
                <span>$50.00</span>
                <div className=' w-32 justify-between border items-center flex h-10'>
            <button className='text-3xl w-20 border-x-2 border-y-2 bg-gray-200'>-</button>
            <span className='w-20'>0</span>
            <button className='text-3xl w-20 bg-gray-200 border-x-2 border-y-2'>+</button>
          </div>
          <span>$50.00</span>
            </div>
            <div className='w-full flex justify-between items-center h-[8rem] p-4 border'>
                <div className='w-[20%] h-full bg-gray-200'>dfrsthfgth</div>
                <span>$50.00</span>
                <div className=' w-32 justify-between border items-center flex h-10'>
            <button className='text-3xl w-20 border-x-2 border-y-2 bg-gray-200'>-</button>
            <span className='w-20'>0</span>
            <button className='text-3xl w-20 bg-gray-200 border-x-2 border-y-2'>+</button>
          </div>
          <span>$50.00</span>
            </div>
            <div className='w-full flex justify-between items-center h-[8rem] p-4 border'>
                <div className='w-[20%] h-full bg-gray-200'>dfrsthfgth</div>
                <span>$50.00</span>
                <div className=' w-32 justify-between border items-center flex h-10'>
            <button className='text-3xl w-20 border-x-2 border-y-2 bg-gray-200'>-</button>
            <span className='w-20'>0</span>
            <button className='text-3xl w-20 bg-gray-200 border-x-2 border-y-2'>+</button>
          </div>
          <span>$50.00</span>
            </div>
        </div>
      </div>
      </div>
      <div className='md:w-[40%] md:h-[36rem] flex justify-center'>
        <div  className=' h-[100%] w-full flex flex-col p-5 space-y-5 items-start border'>
        <p className='font-bold  text-xl'>CART TOTALS</p>
            <div className='flex'>
            <p>Subtotal:</p> <span className='ml-10'>$50.00</span>
            </div>
            <hr className='w-[100%]  border-gray-300 text-xl'/>
      <div className=' space-y-5 md:w-full w-full flex flex-col items-center'>
                <form className='space-y-5   flex flex-col' action="">
                    <div className='md:space-x-2 space-y-3 md:space-y-0'>
                    <input className='border-2 p-2 text-sm w-[100%] md:w-[45%]' type="text" placeholder='FirstName' />
                    <input className='border-2 p-2 text-sm w-[100%] md:w-[45%]' type="text"placeholder='SecondName' />
                    </div>
                    <div className=''>
                    <textarea name="" className='border-2 p-2 text-sm w-[100%] md:w-[92%]' placeholder='Address' id=""></textarea>
                    </div>
                    <div className='md:space-x-2 space-y-3'>
                    <input className='border-2 p-2 text-sm w-[100%]  md:w-[45%]' type="text" placeholder='City/Town'/>
                    <input className='border-2 p-2 text-sm w-[100%] md:w-[45%]' type="text" placeholder='Pincode'/>
                    </div>
                    <div className='md:space-x-2 space-y-3'>
                    <input className='border-2 p-2 text-sm w-[100%] md:w-[45%]' type="text" placeholder='Mobile' />
                    <input className='border-2 p-2 text-sm w-[100%] md:w-[45%]' type="text" placeholder='Email' />
                    </div>
                </form>
                <hr className='w-[100%]  border-gray-300 text-xl'/>

                <div className='p-5 w-[100%] space-y-10'>
                <div className='flex md:justify-start space-x-5 justify-between'>
                    <p className='font-bold text-xl'>Toatal:</p><span>$50.00</span>
                </div>   
                    <div>
                    <button className=' w-[100%] h-10 border bg-black hover:bg-gray-600 text-white rounded-3xl'>PROCEED TO CHECKOUT</button>
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
