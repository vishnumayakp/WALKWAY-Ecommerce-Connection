import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { deleteProductById, getProductById, getProducts } from '../../../Api/Connection'
import EditPro from '../EditProducts/EditPro'

function ProductDetails() {
  const {id}=useParams()
    const [details,setDetails]=useState({})
    const [products,setProducts]=useState([])
    const[images,setImages]=useState([])
    const [editModal,setEditModal]=useState(false)
    const [pId,setPId]=useState("");
    
  const [imageIndex,setImageIndex]=useState(0)

    const openEditModal=(id)=>{
      setPId(id)
      setEditModal(true)
    }
  
    const closeEditModal=()=>{
      setEditModal(false)
    }



    useEffect(()=>{
        const fetchProductDetails=async()=>{
            try{
                const res=await getProductById(id)
                console.log(res.data);
                
                setDetails(res.data.data)
                setImages(res.data.images)    
            }catch(error){
                console.log("can't fetch the data",error);   
            }
        }
        fetchProductDetails()
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

    const handleDelete=async(id)=>{
      try{
        await deleteProductById(id);
        alert('product deleted')
      }catch(error){
        console.log("failed to delete product");
        alert("failed to delete product")
        
      }
    }
 
  return (
    <div className='flex mt-20 justify-center lg:p-5'>
      <div className='md:w-[80%]  w-full xl:flex-row  p-5 shadow-lg border space-x-5  flex flex-col'>
        <div className=' space-x-5 w-full p-10 md:h-[36rem] h-[40%] flex'>
          <div className='w-[25%] lg:h-[100%] space-y-4 scrollnone overflow-scroll md:p-7'>
          {images.length>0 && images.map((value, index) => (
              <div onClick={()=>setImageIndex(index)} key={index} className='w-full transition duration-500 ease-in-out transform hover:scale-110  bg-gray-200'>
                <img className='h-[100%] w-[100%]' src={value} alt={`Product Image ${index + 1}`} />
              </div>
            ))}

          </div>
          <div className='w-[70%] h-[100%]'>
          <div className='h-[100%] '><img className='h-[100%] w-[100%]' src={images[imageIndex]} alt="" /></div>
          </div>
        </div>
        <div className='  flex space-y-10  flex-col'>
          <div className='flex flex-col space-y-1 items-start'>
          <h1 className='text-2xl'>{details.name}</h1>
           <p className='text-sm text-left'>{details.description}</p>
           <p className='font-bold'>{details.price}</p>
           <p>⭐ {details.rating}</p>
            </div>
          <div className='flex'>
          <button onClick={()=>openEditModal(details.id)} className='border bg-yellow-500 text-white rounded p-2 w-20'>Edit</button>
          <button onClick={()=>handleDelete(details.id)}  className='border bg-red-500 text-white rounded p-2 w-20'>Del</button>
          </div>
        </div>
      </div>
      {editModal && <EditPro id={pId} closeEditModal={closeEditModal}/>}
    </div>
  )
}
export default ProductDetails
