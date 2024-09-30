import React, { useEffect, useState } from 'react'
import kids from '../../../assets/kids.png'


function DetailsOfOrder() {
    
  return (
    <div>
      <div className="p-6 bg-gray-50">
   
    <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Order Details</h2>
    </div>
    <div className="grid lg:grid-cols-3 gap-6">
    
        <div className="lg:col-span-2 ">
         
            <div className="bg-white p-6 shadow-md rounded-md h-[33rem]">
                <div className='flex flex-col items-start'>
                <h3 className="text-lg font-semibold mb-4">Order Id: #RC000015</h3>
                <p className="text-gray-500 mb-2">26 Sep, 2024 07:34 PM</p>
                </div>

            
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="text-left py-2 px-4">SL</th>
                            <th className="text-left py-2 px-4">Product</th>
                            <th className="text-left py-2 px-4">Quantity</th>
                            <th className="text-left py-2 px-4">Price</th>
                            <th className="text-left py-2 px-4">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="border-b">
                            <td className="py-2 px-4">1</td>
                            <td className="py-2 px-4 flex items-center">
                                <img src={kids} className="h-10 w-10 mr-4 rounded-md" alt=""/>
                                <span>kids-shoes</span>
                            </td>
                            <td className="py-2 px-4">1</td>
                            <td className="py-2 px-4">$349</td>
                            <td className="py-2 px-4">$349</td>
                        </tr>


                        <tr className="border-b">
                            <td className="py-2 px-4">1</td>
                            <td className="py-2 px-4 flex items-center">
                                <img src={kids} className="h-10 w-10 mr-4 rounded-md" alt=""/>
                                <span>kids-shoes</span>
                            </td>
                            <td className="py-2 px-4">1</td>
                            <td className="py-2 px-4">$349</td>
                            <td className="py-2 px-4">$349</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2 px-4">1</td>
                            <td className="py-2 px-4 flex items-center">
                                <img src={kids} className="h-10 w-10 mr-4 rounded-md" alt=""/>
                                <span>kids-shoes</span>
                            </td>
                            <td className="py-2 px-4">1</td>
                            <td className="py-2 px-4">$349</td>
                            <td className="py-2 px-4">$349</td>
                        </tr>
                    </tbody>
                </table>

              
                <div className="mt-4">
                    <p className="text-right font-medium">Total Price: $349</p>
                    <p className="text-right font-medium">Coupon Discount: $0</p>
                    <p className="text-right text-lg font-semibold">Grand Total: $369</p>
                </div>
            </div>
        </div>

     
       <div className='space-y-5'>
       <div className="bg-white p-6 shadow-md rounded-md">
         
         <h3 className="text-lg font-semibold mb-4">Order & Shipping Info</h3>
         
         <div className="mb-4">
             <label className="block text-gray-700 mb-2">Change Order Status</label>
             <select className="w-full p-2 border rounded">
                 <option>Pickup</option>
                 <option>Processing</option>
                 <option>Shipped</option>
                 <option>Delivered</option>
                 <option>Cancelled</option>
             </select>
         </div>

         <div className="mb-4">
             <label className="block text-gray-700 mb-2">Payment Status</label>
             <div className="flex items-center">
                 <span className="mr-4 text-green-500">Paid</span>
                 <input type="checkbox" className="toggle" checked />
             </div>
         </div>

         <div className="mb-4">
             <label className="block text-gray-700 mb-2">Payment Method</label>
             <p>Stripe</p>
         </div>

         {/* <div class="mb-4">
             <label class="block text-gray-700 mb-2">Assign Rider</label>
             <button class="bg-blue-500 text-white py-2 px-4 rounded">Ma ha</button>
         </div> */}

         <h4 className="text-lg font-semibold mb-2">Shipping Address</h4>
         <p>City: Mohammadpur</p>
         <p>Area: Shekherteck-1</p>
         <p>Name: Test</p>
         <p>Phone: 01472583690</p>
         <p>Address Type: Home</p>
         <p>Street: 12rr, House No: 1250H, Avenue: AB</p>
         <p>Address Line: Dhaka</p>
     </div>
     <div className="bg-white p-6  shadow-md rounded-md">
            <h4 className="text-lg font-semibold mb-2">Customer Info</h4>
            <p>Name: Demo User</p>
            <p>Phone: 01333252427</p>
        </div>
        </div> 

       
    </div>
</div>


<script src="https://cdn.tailwindcss.com"></script>

    </div>
  )
}

export default DetailsOfOrder
