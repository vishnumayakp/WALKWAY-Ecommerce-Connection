import React from 'react'

function AdminHome() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-semibold mb-8">Admin Dashboard</h1>
    
    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Products Card */}
      <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
        <div className="p-4 bg-yellow-100 text-yellow-500 rounded-full">
          
        </div>
        <div>
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="text-2xl font-bold">1,234</p>
        </div>
      </div>

      {/* Total Orders Card */}
      <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
        <div className="p-4 bg-blue-100 text-blue-500 rounded-full">
        
        </div>
        <div>
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-2xl font-bold">567</p>
        </div>
      </div>

      {/* Total Customers Card */}
      <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
        <div className="p-4 bg-green-100 text-green-500 rounded-full">
     
        </div>
        <div>
          <h2 className="text-xl font-semibold">Total Customers</h2>
          <p className="text-2xl font-bold">789</p>
        </div>
      </div>
    </div>
    
    {/* Additional sections or charts */}
    <div className="mt-8">
      {/* <h2 className="text-xl font-semibold mb-4">Recent Activity</h2> */}
      {/* Placeholder for recent orders or other details */}
      {/* <div className="bg-white p-6 rounded-lg shadow-md">
        <p>Recent orders or other activity can go here...</p>
      </div> */}
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md">
  <h2 class="text-xl font-semibold mb-4">Order Analytics</h2>
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
    
    {/* <!-- Pending --> */}
    <div class="bg-gray-100 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col items-center justify-center p-4 rounded-lg">
      <div class="text-4xl">🕒</div>
      <span class="text-lg font-medium mt-2">Pending</span>
      <span class="text-2xl font-bold">6</span>
    </div>
    
    {/* <!-- Confirm --> */}
    <div class="bg-blue-100 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col items-center justify-center p-4 rounded-lg">
      <div class="text-4xl">✅</div>
      <span class="text-lg font-medium mt-2">Confirm</span>
      <span class="text-2xl font-bold">1</span>
    </div>
    
    {/* <!-- Processing --> */}
    <div class="bg-yellow-100 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col items-center justify-center p-4 rounded-lg">
      <div class="text-4xl">🔄</div>
      <span class="text-lg font-medium mt-2">Processing</span>
      <span class="text-2xl font-bold">3</span>
    </div>
    
    {/* <!-- Pickup --> */}
    <div class="bg-green-100 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col items-center justify-center p-4 rounded-lg">
      <div class="text-4xl">🚴</div>
      <span class="text-lg font-medium mt-2">Pickup</span>
      <span class="text-2xl font-bold">2</span>
    </div>
    
    {/* <!-- On The Way --> */}
    <div class="bg-indigo-100 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col items-center justify-center p-4 rounded-lg">
      <div class="text-4xl">🚚</div>
      <span class="text-lg font-medium mt-2">On The Way</span>
      <span class="text-2xl font-bold">2</span>
    </div>
    
    {/* <!-- Delivered --> */}
    <div class="bg-purple-100 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col items-center justify-center p-4 rounded-lg">
      <div class="text-4xl">📦</div>
      <span class="text-lg font-medium mt-2">Delivered</span>
      <span class="text-2xl font-bold">1</span>
    </div>
    
    {/* <!-- Cancelled --> */}
    <div class="bg-red-100 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col items-center justify-center p-4 rounded-lg">
      <div class="text-4xl">❌</div>
      <span class="text-lg font-medium mt-2">Cancelled</span>
      <span class="text-2xl font-bold">0</span>
    </div>
  </div>
</div>

<div class="bg-white shadow-md  overflow-scroll scrollnone w-[100%] mt-10 rounded-lg p-6">
  <h2 class="text-lg font-semibold mb-4">Order Summary</h2>
  <table class="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th class="py-2 px-4 border-b">Order ID</th>
        <th class="py-2 px-4 border-b">Qty</th>
        <th class="py-2 px-4 border-b">Date</th>
        <th class="py-2 px-4 border-b">Status</th>
        <th class="py-2 px-4 border-b">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">#RC000015</td>
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b">26 Sep, 2024</td>
        <td class="py-2 px-4 border-b text-green-500">Pickup</td>
        <td class="py-2 px-4 border-b">
          <button class="text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m0 0H7m2 0h6m0 0v2m0-2v-2"/>
            </svg>
          </button>
        </td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">#RC000014</td>
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b">26 Sep, 2024</td>
        <td class="py-2 px-4 border-b text-yellow-500">Pending</td>
        <td class="py-2 px-4 border-b">
          <button class="text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m0 0H7m2 0h6m0 0v2m0-2v-2"/>
            </svg>
          </button>
        </td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">#RC000013</td>
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b">26 Sep, 2024</td>
        <td class="py-2 px-4 border-b text-blue-500">Delivered</td>
        <td class="py-2 px-4 border-b">
          <button class="text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m0 0H7m2 0h6m0 0v2m0-2v-2"/>
            </svg>
          </button>
        </td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">#RC000012</td>
        <td class="py-2 px-4 border-b">3</td>
        <td class="py-2 px-4 border-b">22 Sep, 2024</td>
        <td class="py-2 px-4 border-b text-indigo-500">Confirm</td>
        <td class="py-2 px-4 border-b">
          <button class="text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m0 0H7m2 0h6m0 0v2m0-2v-2"/>
            </svg>
          </button>
        </td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">#RC000011</td>
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b">09 Sep, 2024</td>
        <td class="py-2 px-4 border-b text-gray-500">On The Way</td>
        <td class="py-2 px-4 border-b">
          <button class="text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m0 0H7m2 0h6m0 0v2m0-2v-2"/>
            </svg>
          </button>
        </td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">#RC000010</td>
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b">09 Sep, 2024</td>
        <td class="py-2 px-4 border-b text-gray-500">On The Way</td>
        <td class="py-2 px-4 border-b">
          <button class="text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m0 0H7m2 0h6m0 0v2m0-2v-2"/>
            </svg>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

  </div>
  )
}

export default AdminHome
