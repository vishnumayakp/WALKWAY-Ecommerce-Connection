import React, { useEffect, useState } from 'react'
import { getProductById, updateProductById } from '../../../Api/Connection'

function EditPro({id,closeEditModal}) {
  const [updateData,setUpdatedData] =useState({
    name:'',
    price:0, 
    description:'',
    stock:1,
    image:'',
    images:[""]
  })

  useEffect(()=>{
    console.log(id);
    
    const fetchProduct=async()=>{
      try{
        const res= await getProductById(id)
        setUpdatedData(res.data);
      }catch(error){
        console.error("failed to fetch product" ,error);
        
      }
    }
    fetchProduct()
  },[id])


  function addImageInput(){
    setUpdatedData(prev=>({
      ...prev,images:[...prev.images,""]
    }))
    
  }
  
  function handleChange(e){
    const { name,value } = e.target;
    setUpdatedData ({...updateData,[name]:value})
    console.log(updateData);
  }

  function handleUpdate(){
    updateProductById(id, updateData)
    .then(()=>{
      closeEditModal(false)
    })
  }
  console.log(updateData);
  

  return (
    <div>
      <div>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex  items-center justify-center">
  <div className="bg-white rounded-lg shadow-lg w-[80%] overflow-scroll scrollnone h-[32rem] ">
 
    <div className="border-b px-4 py-2 flex justify-between items-center">
      <h3 className="text-lg font-semibold">Add Product</h3>
      <button onClick={closeEditModal} className="text-gray-600 hover:text-gray-800">&times;</button>
    </div>


    <div className="p-4 ">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
        <input
          type="text"
          onChange={handleChange}
          value={updateData.name}
          name='name'
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter product name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
        <input
          type="number"
          onChange={handleChange}
          value={updateData.price}
          name='price'
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter price"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          onChange={handleChange}
          value={updateData.description}
          name='description'
          placeholder="Enter product description"
        ></textarea>
      </div>
      <div className="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Stock</label>
        <input
          type="number"
          onChange={handleChange}
          value={updateData.stock}
          name='stock'
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter stock quantity"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Add Image</label>
        <input
          type="text"
          onChange={handleChange}
          value={updateData.image}
          name='image'
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Add image"
        />
      </div>
      {updateData.images.map((value,index)=>{
          return(
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Additional Image</label>
            <input
              type="text"
              onChange={(e)=>handleChange(e,index)}
              name='image'
              value={value}
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

  
    <div class="flex justify-end px-4 py-2 border-t">
      <button onClick={closeEditModal} className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 mr-2">
        Cancel
      </button>
      <button  onClick={handleUpdate} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Add Product
      </button>
    </div>
  </div>
</div>

    </div>
    </div>
  )
}

export default EditPro
