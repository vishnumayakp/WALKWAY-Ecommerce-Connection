import React from 'react'

function Orders() {
  return (
    <div  className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">All Orders</h2>
    </div>
    <div className="bg-white shadow-md overflow-scroll scrollnone w-[97%] mt-10 rounded-lg p-6">
  <table className="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b">Order ID</th>
        <th className="py-2 px-4 border-b">Order date</th>
        <th className="py-2 px-4 border-b">Customer</th>
        <th className="py-2 px-4 border-b">Total Amount</th>
        <th className="py-2 px-4 border-b">Payment Method</th>
        <th className="py-2 px-4 border-b">Status</th>
        <th className="py-2 px-4 border-b">Actions</th>

      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">#RC000015</td>
        <td className="py-2 px-4 border-b">26 Sep, 2024</td>
        <td className="py-2 px-4 border-b">Abhay Pc</td>
        <td className="py-2 px-4 border-b">₹ 2000</td>
        <td className="py-2 px-4 text-sm border-b">Upi</td>
        <td className="py-2 px-4 border-b text-green-500">Pickup</td>
        <td className="py-2 px-4 text-sm border-b space-x-2"><button className='border bg-red-600 text-white rounded p-2 w-20'>Cancel</button><button className='border bg-green-600 text-white rounded p-2 w-20'>Edit</button></td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">#RC000014</td>
        <td className="py-2 px-4 border-b">26 Sep, 2024</td>
        <td className="py-2 px-4 border-b">Hrithic Raj</td>
        <td className="py-2 px-4 border-b">₹ 2000</td>
        <td className="py-2 px-4 border-b text-sm">Upi</td>
        <td className="py-2 px-4 border-b text-yellow-500">Pending</td>
        <td className="py-2 px-4 text-sm border-b space-x-2"><button className='border bg-red-600 text-white rounded p-2 w-20'>Cancel</button><button className='border bg-green-600 text-white rounded p-2 w-20'>Edit</button></td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">#RC000013</td>
        <td className="py-2 px-4 border-b">26 Sep, 2024</td>
        <td className="py-2 px-4 border-b">Vishnumaya</td>
        <td className="py-2 px-4 border-b">₹ 2000</td>
        <td className="py-2 px-4 border-b text-sm">Credit</td>
        <td className="py-2 px-4 border-b text-blue-500">Delivered</td>
        <td className="py-2 px-4 text-sm border-b space-x-2"><button className='border bg-red-600 text-white rounded p-2 w-20'>Cancel</button><button className='border bg-green-600 text-white rounded p-2 w-20'>Edit</button></td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">#RC000012</td>
        <td className="py-2 px-4 border-b">26 Sep, 2024</td>
        <td className="py-2 px-4 border-b">Shilpa</td>
        <td className="py-2 px-4 border-b">₹ 2000</td>
        <td className="py-2 px-4 border-b text-sm">Cash On Delivery</td>
        <td className="py-2 px-4 border-b text-indigo-500">Confirm</td>
        <td className="py-2 px-4 text-sm border-b space-x-2"><button className='border bg-red-600 text-white rounded p-2 w-20'>Cancel</button><button className='border bg-green-600 text-white rounded p-2 w-20'>Edit</button></td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">#RC000011</td>
        <td className="py-2 px-4 border-b">26 Sep, 2024</td>
        <td className="py-2 px-4 border-b">Vishnumaya</td>
        <td className="py-2 px-4 border-b">₹ 2000</td>
        <td className="py-2 px-4 border-b text-sm">Credit</td>
        <td className="py-2 px-4 border-b text-gray-500">On The Way</td>
        <td classNameN="py-2 px-4 text-sm border-b space-x-2"><button className='border bg-red-600 text-white rounded p-2 w-20'>Cancel</button><button className='border bg-green-600 text-white rounded p-2 w-20'>Edit</button></td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">#RC000010</td>
        <td className="py-2 px-4 border-b">26 Sep, 2024</td>
        <td className="py-2 px-4 border-b">Lakshmi</td>
        <td className="py-2 px-4 border-b">₹ 2000</td>
        <td className="py-2 px-4 border-b text-sm">Upi</td>
        <td className="py-2 px-4 border-b text-gray-500">On The Way</td>
        <td className="py-2 px-4 text-sm border-b space-x-2"><button className='border bg-red-600 text-white rounded p-2 w-20'>Cancel</button><button className='border bg-green-600 text-white rounded p-2 w-20'>Edit</button></td>
      </tr>
    </tbody>
  </table>
</div>
</div>
  )
}

export default Orders
