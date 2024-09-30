import React, { useState } from 'react'
import { AddProductDetails } from '../../../Api/Connection';

function AddingProducts({closeModal}) {
    const [formdata,setFormData]=useState({
        name:'',
        price:0, 
        description:'',
        stock:0,
        image:'',
        images:[""]
    })
    function addData(e){
        const {name,value}=e.target     
        setFormData({...formdata,[name]:value})
        console.log(formdata);   
    }
    function AddProduct(){
        AddProductDetails(formdata)
        .then(()=>{
          closeModal(false)
        })
    }

    function addImageInput(){
      setFormData(prev=>({
        ...prev,images:[...prev.images,""]
      }))
      
    }

    function handleImageChange(e,index){
      const updatedImage=[...formdata.images];
      updatedImage[index]=e.target.value;
      setFormData((pre)=>({
        ...pre,images:updatedImage
      }))
      console.log(formdata);
      
       }

  return (
    <div>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex  items-center justify-center">
  <div className="bg-white rounded-lg shadow-lg w-[80%] overflow-scroll scrollnone h-[32rem] ">
 
    <div className="border-b px-4 py-2 flex justify-between items-center">
      <h3 className="text-lg font-semibold">Add Product</h3>
      <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">&times;</button>
    </div>


    <div className="p-4 ">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
        <input
          type=""
          name='name'
          onChange={addData}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter product name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
        <input
          type="number"
          name='price'
          onChange={addData}
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter price"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          onChange={addData}
          name='description'
          placeholder="Enter product description"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Stock</label>
        <input
          type="number"
          name='stock'
          onChange={addData}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter stock quantity"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Add Image</label>
        <input
          type="text"
          name='image'
          onChange={addData}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Add image"
        />
      </div>
      {formdata.images.map((value,index)=>{
        return(
          <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Additional Image</label>
        <input
          type="text"
          name='image'
          onChange={(e)=>handleImageChange(e,index)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Add image"
        />
      </div>
        )
      })}
      <div>
      <button onClick={addImageInput} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Add Images
      </button>
      </div>
    </div>

  
    <div className="flex justify-end px-4 py-2 border-t">
      <button onClick={closeModal} className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 mr-2">
        Cancel
      </button>
      <button onClick={AddProduct} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Add Product
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default AddingProducts
