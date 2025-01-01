import React, { useContext, useEffect, useState } from 'react'
import { addToCart, getCartById, getProductById, updateCartById } from '../../../Api/Connection'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../USeContext/UserContext'
import { toast } from 'react-toastify'

function ProductDetails() {
  const navigate=useNavigate()
  const token=localStorage.getItem('authToken')
  const [product,setProduct]=useState({})
  const [state,setState]=useState(0)
  const [qty,setQty]=useState(1)
  const [sizes,setSize]=useState(0)
  const {cartFlag,setCartFlag}=useContext(AuthContext)

  const {id}=useParams()
  useEffect(()=>{
    getProductById(id)
    .then((res)=>setProduct(res))  
  },[id]) 
  async function handleAddCart(productId,quantity,size){
    if (token) {
      try {
          const res = await addToCart(productId,quantity,size);
        console.log('response',res);
        
          setCartFlag(!cartFlag)
          toast.success('Item added to cart', { position: 'bottom-right' });
      } catch (error) {
          toast.error('Failed to add item to cart. Please try again.', { position: 'top-right' });
          // console.log(error.response.data.message);    
      }
  } else {
      toast.error('Please login', { position: 'bottom-right' });
      navigate('/login');
  }
  } 
  return (
<div className="flex justify-center lg:p-5 py-8">
<div className="w-full max-w-6xl flex flex-col lg:flex-row space-x-0 lg:space-x-8 shadow-lg border rounded-lg p-6">
  {/* Left Side - Product Image & Thumbnails */}
  <div className="flex flex-col lg:flex-row w-full lg:w-[60%] space-x-0 lg:space-x-8">
    <div className="w-full lg:w-[20%] flex lg:flex-col space-y-4 space-x-2 lg:space-x-0 overflow-scroll scrollnone h-[26rem]">
      {product.imageUrls &&
        product.imageUrls.map((value, index) => (
          <div onClick={() => setState(index)} key={index}
            className={`w-24 h-24 rounded-lg border-none bg-gray-200 overflow-hidden hover:scale-110 transition transform cursor-pointer ${state === index ? 'border-2 border-black' : ''}`}>
            <img className="w-full h-full object-cover rounded-lg" src={value} alt={`Product Thumbnail ${index + 1}`} />
          </div>
        ))}
    </div>

<div className="w-full lg:w-[75%] h-[20rem] lg:h-[25rem] rounded-lg overflow-hidden  bg-gray-100">
  {product.imageUrls && (
    <img className="w-full h-full object-cover" src={product.imageUrls[state]} alt="Product Main Image" />
  )}
</div>

  </div>

  {/* Right Side - Product Info */}
  <div className="flex flex-col w-full lg:w-[40%] lg:pr-16 space-y-6">
    <div className="space-y-2">
      <h1 className="text-3xl font-semibold">{product.productName}</h1>
      <p className="text-gray-600 font-bold text-sm">{product.productBrand}</p>
      <p className="text-gray-600 text-sm">{product.productDescription}</p>
      <p className="text-xl font-bold text-black">₹ {product.productPrice}</p>
      <p className=" font-semibold">Available Stock : {product.stock}</p>
    </div>

    <div className="space-y-4">
      <div className="border-2 w-48 rounded-lg p-2">
        <select className="w-full focus:outline-none" name="" id="" onChange={(e)=>setSize(e.target.value)}>
          <option value="">Select size</option>
          {product.sizes &&
            product.sizes.map((value) => <option key={value} value={value}>{value}</option>)}
        </select>
      </div>

      {/* Quantity Selector */}
      <div className="flex space-x-4 items-center">
        <div className="flex items-center border rounded-lg overflow-hidden">
          <button onClick={() => setQty(qty === 1 ? 1 : qty - 1)} className="text-2xl px-4 py-2 bg-gray-200">
            -
          </button>
          <span className="px-6">{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="text-2xl px-4 py-2 bg-gray-200">
            +
          </button>
        </div>
        <button
          onClick={()=>handleAddCart(product.productId,qty,sizes)}
          className="bg-black hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition duration-200"
        >
          ADD TO CART
        </button>
      </div>      
    </div>
  </div>
</div>
</div>
  )
}

export default ProductDetails
