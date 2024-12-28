import React, { useState } from 'react'
import { AddProductDetails } from '../../../Api/Connection';
import axios from 'axios';

function AddingProducts({closeModal}) {
    const [formData,setFormData]=useState({
        productName:'',
        productBrand:'',
        productDescription:'',
        sizes:[],
        categoryId:null,
        price:null, 
        mrp:null,
        stock:null,
    })

    const [images,setImages]=useState([])

    const [errors,setErrors]=useState({})

    function addData(e){
        const {name,value}=e.target     
        setFormData({...formData,[name]:value})
        console.log(formData);   
    }

    const validate = ()=>{
      const newErrors = {};
      
      if (!formData.productName) newErrors.productName = 'Product name is required';
      if (!formData.productBrand) newErrors.productBrand = 'Product brand is required';
      if (!formData.productDescription) newErrors.productDescription = 'Product description is required';
      if (formData.sizes.length === 0) newErrors.sizes = 'At least one shoe size is required';
      if (!formData.categoryId) newErrors.categoryId = 'Category is required';
      if (!formData.price) newErrors.price = 'Price is required';
      if (!formData.mrp) newErrors.mrp = 'MRP is required';
      if (!formData.stock) newErrors.stock = 'Stock is required';
      if (formData.stock < 1) newErrors.stock = 'Stock must be greater than 1';
      if (formData.mrp < formData.price) newErrors.mrp = 'MRP must be greater than price';
      if (images.length === 0) newErrors.images = 'At least one image is required';

      return newErrors;
  }

  const logFormData=(formData)=>{
    for(let [key,value] of formData.entries()){
      console.log(`${key}:`,value);
      
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const validationError=validate();

    if(Object.keys(validationError).length > 0){
      setErrors(validationError)
    }else{

      const productData = new FormData();
      productData.append("productName", formData.productName);
      productData.append("productBrand", formData.productBrand);
      productData.append("productDescription", formData.productDescription);

      formData.sizes.forEach((size, index) => {
          productData.append(`sizes[${index}]`, size);
      });

      productData.append("categoryId", formData.categoryId);
      productData.append("price", formData.price);
      productData.append("mrp", formData.mrp);
      productData.append("stock", formData.stock);

      images.forEach((image, index) => {
          if (image) {
              productData.append(`images[${index}]`, image);
          }
      });

    
      axios
      .post('https://localhost:7260/api/Product/Add', productData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        console.log('Product added:', response);
        closeModal(false); 
      })
      .catch((error) => {
        if (error.response) {

          console.error('Server Error:', error);
          console.error('Status:', error.response.status);
        } else if (error.request) {

          console.error('Request Error:', error.request);
        } else {

          console.error('Error:', error.message);
        }
      });
    }
  }  

    function addSizeInput(){
      setFormData((prev)=>({
        ...prev,sizes:[...prev.sizes,null]
      }))
    }

    function handleSizeChange(e,index){
      const updateSize=[...formData.sizes];
      console.log((e.target.value));
      
      updateSize[index]=e.target.value ? parseFloat(e.target.value) : null;
      setFormData((pre)=>({
        ...pre,sizes:updateSize
      }))
    }

    function addImageInput(){
      setImages(pre=>[...pre,""])
    }

    function handleImageChange(e,index){
      const file=e.target.files[0];
      if(file){
        const updatedImages=[...images];
        updatedImages[index]=file;
        
        setImages(updatedImages);
      }
       }

  return (
    <div>
  <form onSubmit={handleSubmit} method='POST' className="fixed inset-0 bg-gray-600 bg-opacity-50 flex  items-center justify-center">
  <div className="bg-white rounded-lg shadow-lg w-[80%] overflow-scroll scrollnone h-[32rem] ">
 
 <div className="border-b px-4 py-2 flex justify-between items-center">
   <h3 className="text-lg font-semibold">Add Product</h3>
   <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">&times;</button>
 </div>


 <div className="p-4 ">
   <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
     <input
       type="text"
       value={formData.productName}
       name='productName'
       onChange={addData}
       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
       placeholder="Enter product name"
     />
     {errors.productName && <span className="text-red-500 text-sm">{errors.productName}</span>}
   </div>

   <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2">Product Brand</label>
     <input
       type="text"
       name='productBrand'
       value={formData.productBrand}
       onChange={addData}
       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
       placeholder="Enter product name"
     />
     {errors.productBrand && <span className="text-red-500 text-sm">{errors.productBrand}</span>}
   </div>

   <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
     <textarea
       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
       onChange={addData}
       name='productDescription'
       value={formData.productDescription}
       placeholder="Enter product description"
     ></textarea>
     {errors.productDescription && <span className="text-red-500 text-sm">{errors.productDescription}</span>}
   </div>

   {formData.sizes.map((size,index)=>{
     return(
       <div className="mb-4" key={index}>
     <label className="block text-gray-700 text-sm font-bold mb-2">Add Size</label>
     <input
       type="number"
       name='sizes'
       value={size}
       onChange={(e)=>handleSizeChange(e,index)}
       className="w-[30%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
       placeholder="Add size"
     />
   </div>
     )
   })}
   <div>
   <button onClick={addSizeInput} type='button' className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
     Add Sizes
   </button>
   </div>

   <div className="mb-4 mt-5">
       <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
        <select onChange={addData} name="categoryId" id="" value={formData.categoryId}>
        <option value={null}>Select Category</option>
        <option value={15}>Mens</option>
        <option value={16}>Womens</option>
        <option value={17}>Kids</option>
        </select>
        {errors.categoryId && <span className="text-red-500 text-sm">{errors.categoryId}</span>}
     </div>

   <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
     <input
       type="number"
       name='price'
       value={formData.price}
       onChange={addData}
       class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
       placeholder="Enter price"
     />
      {errors.price && <span className="text-red-500 text-sm">{errors.price}</span>}
   </div>

   <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2">MRP</label>
     <input
       type="number"
       name='mrp'
       value={formData.mrp}
       onChange={addData}
       class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
       placeholder="Enter mrp"
     />
     {errors.mrp && <span className="text-red-500 text-sm">{errors.mrp}</span>}
   </div>
   

   <div className="mb-4">
     <label className="block text-gray-700 text-sm font-bold mb-2">Stock</label>
     <input
       type="number"
       name='stock'
       onChange={addData}
       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
       placeholder="Enter stock stocks"
     />
   </div>

   {images.map((value,index)=>{
     return(
       <div className="mb-4" key={index}>
     <label className="block text-gray-700 text-sm font-bold mb-2">Add Images</label>
     <input
       type="file"
       name={`images[${index}]`}
       onChange={(e)=>handleImageChange(e,index)}
       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
       placeholder="Add image"
     />
   </div>
     )
   })}
   <div>
   <button onClick={addImageInput} type='button' className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
     Add Images
   </button>
   </div>
 </div>


 <div className="flex justify-end px-4 py-2 border-t">
   <button onClick={closeModal} className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 mr-2">
     Cancel
   </button>
   <button type='submit' className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
     Add Product
   </button>
 </div>
</div>
  </form>

    </div>
  )
}

export default AddingProducts
