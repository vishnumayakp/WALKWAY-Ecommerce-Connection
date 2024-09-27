import React from 'react'
import kids from '../../../assets/kids.png'

function Review() {
  return (
    <div  className="p-8 bg-gray-100 min-h-screen">
    <div class="bg-white shadow-md overflow-scroll scrollnone w-[97%] mt-10 rounded-lg p-6">
  <h2 class="text-lg font-semibold mb-4">Reviews</h2>
  <table class="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th class="py-2 px-4 border-b">Thumbnail</th>
        <th class="py-2 px-4 border-b">Product Name</th>
        <th class="py-2 px-4 border-b">Review</th>
        <th class="py-2 px-4 border-b">Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:bg-gray-50 w-[100%]">
        <td class="py-2 w-[25%] border-b"><img className='h-[5rem] w-[5rem]' src={kids} alt="" /></td>
        <td class="py-2 px-4 border-b">AIR MORE UPTEMPO '96</td>
        <td class="py-2 px-4 border-b">Well</td>
        <td class="py-2 px-4 border-b">⭐ 4.0</td>
      </tr>
      <tr class="hover:bg-gray-50 w-[100%]">
        <td class="py-2 w-[25%] border-b"><img className='h-[5rem] w-[5rem]' src={kids} alt="" /></td>
        <td class="py-2 px-4 border-b">AIR MORE UPTEMPO '96</td>
        <td class="py-2 px-4 border-b">Well</td>
        <td class="py-2 px-4 border-b">⭐ 4.0</td>
      </tr>
      <tr class="hover:bg-gray-50 w-[100%]">
        <td class="py-2 w-[25%] border-b"><img className='h-[5rem] w-[5rem]' src={kids} alt="" /></td>
        <td class="py-2 px-4 border-b">AIR MORE UPTEMPO '96</td>
        <td class="py-2 px-4 border-b">Well</td>
        <td class="py-2 px-4 border-b">⭐ 4.0</td>
      </tr>
      <tr class="hover:bg-gray-50 w-[100%]">
        <td class="py-2 w-[25%] border-b"><img className='h-[5rem] w-[5rem]' src={kids} alt="" /></td>
        <td class="py-2 px-4 border-b">AIR MORE UPTEMPO '96</td>
        <td class="py-2 px-4 border-b">Well</td>
        <td class="py-2 px-4 border-b">⭐ 4.0</td>
      </tr>
      <tr class="hover:bg-gray-50 w-[100%]">
        <td class="py-2 w-[25%] border-b"><img className='h-[5rem] w-[5rem]' src={kids} alt="" /></td>
        <td class="py-2 px-4 border-b">AIR MORE UPTEMPO '96</td>
        <td class="py-2 px-4 border-b">Well</td>
        <td class="py-2 px-4 border-b">⭐ 4.0</td>
      </tr>
      <tr class="hover:bg-gray-50 w-[100%]">
        <td class="py-2 w-[25%] border-b"><img className='h-[5rem] w-[5rem]' src={kids} alt="" /></td>
        <td class="py-2 px-4 border-b">AIR MORE UPTEMPO '96</td>
        <td class="py-2 px-4 border-b">Well</td>
        <td class="py-2 px-4 border-b">⭐ 4.0</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
  )
}

export default Review
