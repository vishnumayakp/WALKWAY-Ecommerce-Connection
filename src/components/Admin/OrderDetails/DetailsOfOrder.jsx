import React from 'react'

function DetailsOfOrder() {
  return (
    <div>
      <div class="p-6 bg-gray-50 min-h-screen">
   
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-semibold">Order Details</h2>
        <button class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
            <i class="fas fa-file-invoice"></i> Print Invoice
        </button>
    </div>

   
    <div class="grid lg:grid-cols-3 gap-6">
    
        <div class="lg:col-span-2">
         
            <div class="bg-white p-6 shadow-md rounded-md">
                <h3 class="text-lg font-semibold mb-4">Order Id: #RC000015</h3>
                <p class="text-gray-500 mb-2">26 Sep, 2024 07:34 PM</p>

            
                <table class="min-w-full bg-white">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="text-left py-2 px-4">SL</th>
                            <th class="text-left py-2 px-4">Product</th>
                            <th class="text-left py-2 px-4">Quantity</th>
                            <th class="text-left py-2 px-4">Price</th>
                            <th class="text-left py-2 px-4">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b">
                            <td class="py-2 px-4">1</td>
                            <td class="py-2 px-4 flex items-center">
                                <img src="path/to/tshirt-image.jpg" class="h-10 w-10 mr-4 rounded-md" alt="T-shirt"/>
                                <span>619462 | T-shirt</span>
                            </td>
                            <td class="py-2 px-4">1</td>
                            <td class="py-2 px-4">$349</td>
                            <td class="py-2 px-4">$349</td>
                        </tr>
                    </tbody>
                </table>

              
                <div class="mt-4">
                    <p class="text-right font-medium">Total Price: $349</p>
                    <p class="text-right font-medium">Coupon Discount: $0</p>
                    <p class="text-right font-medium">Delivery Charge: $20</p>
                    <p class="text-right text-lg font-semibold">Grand Total: $369</p>
                </div>
            </div>
        </div>

     
        <div class="bg-white p-6 shadow-md rounded-md">
         
            <h3 class="text-lg font-semibold mb-4">Order & Shipping Info</h3>
            
            <div class="mb-4">
                <label class="block text-gray-700 mb-2">Change Order Status</label>
                <select class="w-full p-2 border rounded">
                    <option>Pickup</option>
                    <option>Processing</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                </select>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 mb-2">Payment Status</label>
                <div class="flex items-center">
                    <span class="mr-4 text-green-500">Paid</span>
                    <input type="checkbox" class="toggle" checked />
                </div>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 mb-2">Payment Method</label>
                <p>Stripe</p>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 mb-2">Assign Rider</label>
                <button class="bg-blue-500 text-white py-2 px-4 rounded">Ma ha</button>
            </div>

            <h4 class="text-lg font-semibold mb-2">Shipping Address</h4>
            <p>City: Mohammadpur</p>
            <p>Area: Shekherteck-1</p>
            <p>Name: Test</p>
            <p>Phone: 01472583690</p>
            <p>Address Type: Home</p>
            <p>Street: 12rr, House No: 1250H, Avenue: AB</p>
            <p>Address Line: Dhaka</p>
        </div>

        <div class="bg-white p-6 shadow-md rounded-md">
            <h4 class="text-lg font-semibold mb-2">Customer Info</h4>
            <p>Name: Demo User</p>
            <p>Phone: 01333252427</p>
        </div>
    </div>
</div>


<script src="https://cdn.tailwindcss.com"></script>

    </div>
  )
}

export default DetailsOfOrder
