import React from 'react'

const WishList = () => {
  return (
    <div class="min-h-screen bg-gray-100 flex flex-col items-center py-10">

  <h1 class="text-3xl font-bold mb-10">My Wishlist</h1>
  

  <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

    <div class="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 w-[18rem] relative">

      <div class="absolute top-2 right-2 text-red-500 cursor-pointer">

        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
          <path fill-rule="evenodd" d="M12 4.318c1.278-1.72 3.356-2.318 5.47-1.641 2.114.678 3.53 2.571 3.53 4.76 0 3.34-3.403 6.12-8.527 10.201L12 19.228l-.473-.39C6.403 13.497 3 10.717 3 7.437c0-2.189 1.416-4.082 3.53-4.76C8.644 2 10.722 2.598 12 4.318z" clip-rule="evenodd" />
        </svg>
      </div>


      <img
        src="https://via.placeholder.com/400x300" 
        alt="Product Image"
        class="h-56 w-full object-cover"
      />

      <div class="p-4">
        <h3 class="font-bold text-md mb-1">Product Name</h3>
        <p class="text-gray-600 text-sm">Product Brand</p>
        <p class="font-bold text-lg text-gray-800 mt-2">₹ 1000</p>


        <button class="mt-3 bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>

    <div class="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 w-[18rem] relative">
      <div class="absolute top-2 right-2 text-red-500 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
          <path fill-rule="evenodd" d="M12 4.318c1.278-1.72 3.356-2.318 5.47-1.641 2.114.678 3.53 2.571 3.53 4.76 0 3.34-3.403 6.12-8.527 10.201L12 19.228l-.473-.39C6.403 13.497 3 10.717 3 7.437c0-2.189 1.416-4.082 3.53-4.76C8.644 2 10.722 2.598 12 4.318z" clip-rule="evenodd" />
        </svg>
      </div>
      <img
        src="https://via.placeholder.com/400x300"
        alt="Product Image"
        class="h-56 w-full object-cover"
      />
      <div class="p-4">
        <h3 class="font-bold text-md mb-1">Product Name</h3>
        <p class="text-gray-600 text-sm">Product Brand</p>
        <p class="font-bold text-lg text-gray-800 mt-2">₹ 1500</p>
        <button class="mt-3 bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>

  </div>
</div>



  )
}

export default WishList
