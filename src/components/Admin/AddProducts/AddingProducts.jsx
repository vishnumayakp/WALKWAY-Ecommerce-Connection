import React, { useState } from 'react'
import { AddProductDetails } from '../../../Api/Connection';

function AddingProducts({closeModal}) {
    const [formdata,setFormData]=useState({
        name:'',
        price:0, 
        description:'',
        stock:0,
        image:'',
        images:[]
    })
    function addData(e){
        const {name,value}=e.target     
        setFormData({...formdata,[name]:value})
        console.log(formdata);   
    }
    function AddProduct(){
        AddProductDetails(formdata)
    }

  return (
    <div>
      <div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
  <div class="bg-white rounded-lg shadow-lg w-1/3">
 
    <div class="border-b px-4 py-2 flex justify-between items-center">
      <h3 class="text-lg font-semibold">Add Product</h3>
      <button onClick={closeModal} class="text-gray-600 hover:text-gray-800">&times;</button>
    </div>


    <div class="p-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
        <input
          type="text"
          name='name'
          onChange={addData}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter product name"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Price</label>
        <input
          type="number"
          name='price'
          onChange={addData}
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter price"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <textarea
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          onChange={addData}
          name='description'
          placeholder="Enter product description"
        ></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Stock</label>
        <input
          type="number"
          name='stock'
          onChange={addData}
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter stock quantity"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Add Image</label>
        <input
          type="text"
          name='image'
          onChange={addData}
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Add image"
        />
      </div>
      <div>
      <button  class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Add Images
      </button>
      </div>
    </div>

  
    <div class="flex justify-end px-4 py-2 border-t">
      <button onClick={closeModal} class="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 mr-2">
        Cancel
      </button>
      <button onClick={AddProduct} class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Add Product
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default AddingProducts
