import React from 'react'
import product1 from '../../../assets/kids.png'

function PaymentPage() {
  return (
    <div className='md:flex  md:px-32 '>
      <div className='md:w-[60%] h-[36rem] flex justify-center p-5 '>
      <div className='h-[100%] border scrollnone overflow-scroll'>
                <div className=' space-y-10 h-[90%] overflow-auto scrollnone'>
            <div className='w-full flex justify-between items-center h-[8rem] p-4 border'>
                <div className='w-[20%] h-full bg-gray-200'><img src={product1} alt="" /></div>
                <span>Kids Shoes</span>
                <span>1</span>
          <span>$50.00</span>
            </div>
            <div className='w-full flex justify-between items-center h-[8rem] p-4 border'>
                <div className='w-[20%] h-full bg-gray-200'>dfrsthfgth</div>
                <span>Kids Shoes</span>
                <span>1</span>
          <span>$50.00</span>
            </div>
            <div className='w-full flex justify-between items-center h-[8rem] p-4 border'>
                <div className='w-[20%] h-full bg-gray-200'>dfrsthfgth</div>
                <span>Kids Shoes</span>
                <span>1</span>
          <span>$50.00</span>
            </div>
            <div className='w-full flex justify-between items-center h-[8rem] p-4 border'>
                <div className='w-[20%] h-full bg-gray-200'>dfrsthfgth</div>
                <span>Kids Shoes</span>
                <span>1</span>
          <span>$50.00</span>
            </div>
            <div className='w-full flex justify-between items-center h-[8rem] p-4 border'>
                <div className='w-[20%] h-full bg-gray-200'>dfrsthfgth</div>
                <span>Kids Shoes</span>
                <span>1</span>
          <span>$50.00</span>
            </div>
        </div>
      </div>
      </div>

      <div className='md:w-[45%] h-[36rem] flex justify-center p-5'>
        <div  className='h-[100%] flex flex-col p-5 space-y-5 items-start border'>
        <p className='font-bold  text-xl'>ORDER SUMMARY</p>
            <div className='space-y-5'>
                <form className='space-y-5 flex flex-col' action="">
                    <div className=' border-2 h-10 flex justify-between'>
                    <input className=' w-[45%] px-3' type="text" placeholder='Enter coupon code' />
                    <button className='bg-black text-white text-sm px-5'>APPLY COUPON</button>
                    </div>
                </form>
                <div className='border p-5'>
                        <div className='flex justify-between'>
                            <p className='text-sm'>MRP (1 items)</p>
                            <p className='text-sm'>$50.00</p>
                        </div>
                        <hr className='w-[100%] mt-2 border-gray-300'/>

                        <div className='flex justify-between'>
                            <p className='font-semibold text-xl'>Total</p>
                            <p className='font-semibold text-xl'>$50.00</p>
                        </div>
                    </div>  

                    <div className='border p-5'>
                        <div className='flex justify-center'>
                            <p className='text-xl font-bold'>Payment Details</p>
                        </div>
                        <hr className='w-[100%] mt-2 border-gray-300'/>

                        <div className='flex flex-col p-4 items-start'>
                           <div> <input name='payment' type="radio"/><label htmlFor=""> Cash on delivery</label></div>
                            <div><input name='payment' type="radio"/><label htmlFor=""> Paypal</label></div>
                            <div> <input name='payment' type="radio"/><label htmlFor=""> UPi</label></div>
                            <div><input name='payment' type="radio"/><label htmlFor=""> Credit or Debit card</label></div>
                        </div>
                    </div> 

                    <div>
                    <button className=' w-full h-10 border bg-black hover:bg-gray-600 text-white rounded-3xl'>Pay Now</button>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
