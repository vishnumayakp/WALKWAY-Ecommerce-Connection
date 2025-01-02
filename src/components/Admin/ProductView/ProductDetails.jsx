import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { deleteProductById, getProductById, getProducts } from '../../../Api/Connection'
import EditPro from '../EditProducts/EditPro'
import UpdateProduct from '../EditProducts/EditPro'
import { toast } from 'react-toastify'

function ProductDetails() {
  const {id}=useParams()
    const [details,setDetails]=useState({})
    const [products,setProducts]=useState([])
    const [editModal,setEditModal]=useState(false)
    const [pId,setPId]=useState("");
    const navigate=useNavigate();
    
  const [state,setState]=useState(0)

    const openEditModal=(id)=>{
      setPId(id)
      setEditModal(true)
    }
  
    const closeEditModal=()=>{
      setEditModal(false)
      getProductById(id)
      .then((res)=>setDetails(res))
    }

    useEffect(()=>{       
      try{
         getProductById(id)
         .then((res)=>{          
          setDetails(res)
         })   
          }catch(error){
                console.log("can't fetch the data",error);   
            }
    },[id])

    useEffect(()=>{
      const fetchProducts=async()=>{
        try{
          const res=await getProducts();
          setProducts(res.data)
        }catch(error){
          console.log(("failed to fetch products"));
          
        }
      }
      fetchProducts()
    },[])

    const handleDelete =async(id)=>{
         try{
           await deleteProductById(id)
          toast.success('Suucessfully deleted product.', { position: 'top-right' });
          navigate('/admin/products')
         }catch(error){
          toast.error("Failed to delete the product",{ position: 'top-right' })
         }
       }   
 
  return (
    <div className='flex mt-20 justify-center lg:p-5'>
  <div className='md:w-[90%] w-full xl:flex-row p-10 shadow-lg  space-x-8 flex flex-col lg:flex-row   bg-white rounded-lg'>
    

    <div className='w-full lg:w-[20%] h-[30rem] space-y-5 overflow-scroll scrollnone'>
      <div className='flex flex-col items-center space-y-4'>
        {details?.imageUrls &&
          details.imageUrls.map((value, index) => (
            <div
              onClick={() => setState(index)}
              key={index}
              className={`w-[100px] h-[100px] transition duration-500 ease-in-out transform hover:scale-110 bg-gray-200 rounded-lg overflow-hidden ${state === index ? '' : ''}`}>
              <img className='w-full h-full object-cover' src={value} alt={`Product Image ${index + 1}`} />
            </div>
          ))}
      </div>
    </div>


    <div className='w-full lg:w-[65%] h-[400px] lg:h-[450px] rounded-lg overflow-hidden bg-gray-100'>
      {details?.imageUrls && (
        <img className="w-full h-full object-cover" src={details.imageUrls[state]} alt="Product Main Image" />
      )}
    </div>


    <div className='w-full lg:w-[15%] flex flex-col justify-between space-y-6'>
      <div className='flex flex-col space-y-3'>
        <h1 className='text-3xl font-bold text-gray-800'>{details?.productName}</h1>
        <p className='text-sm text-black font-bold leading-6'>{details?.productBrand}</p>
        <p className='text-sm text-black font-bold leading-6'>{details?.category}</p>
        <p className='text-sm text-gray-600 leading-6'>
          {details?.productDescription?.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <p className='text-2xl font-bold text-green-600'>₹ {details?.productPrice}</p>
      </div>
      <div className='flex space-x-4'>
        <button
          onClick={() => openEditModal(details.productId)}
          className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300'>
          Edit
        </button>
        <button
          onClick={() => handleDelete(details.productId)}
          className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300'>
          Delete
        </button>
      </div>
    </div>
  </div>

  {editModal && <UpdateProduct id={pId} closeEditModal={closeEditModal} />}
</div>

  )
}
export default ProductDetails
