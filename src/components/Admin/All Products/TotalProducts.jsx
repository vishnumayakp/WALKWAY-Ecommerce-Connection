import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BsFillPlusCircleFill, BsNvidia } from "react-icons/bs";
import { deleteProductById, getProductById, getProducts, searchProducts } from '../../../Api/Connection';
import EditPro from '../EditProducts/EditPro';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AddingProducts from '../AddProducts/AddingProducts';
import UpdateProduct from '../EditProducts/EditPro';

function TotalProducts() {

  const [products,setProducts]=useState([])
  const navigate = useNavigate()
  const [isModal,setIsModal]=useState(false)
  const [editModal,setEditModal]=useState(false)
  const [pId,setPId]=useState("");


  const [showModal,setShowModal]=useState(false)
  const [fetchData,setFetchData]=useState([])
  const [search,setSeacrh]=useState('')



  const openModal=()=>{
    setIsModal(true)
  }

  const closeModal=()=>{
    setIsModal(false)
  }

  const openEditModal=(id)=>{
    setPId(id)
    setEditModal(true)
  }

  const closeEditModal=()=>{
    setEditModal(false)
  }

    useEffect(()=>{
      getProducts()
      .then((res)=>setProducts(res))

      async function fetchProducts(){
        if(search.trim()===''){
          setFetchData([])
          setShowModal(false)
          return
        }

        try{
          searchProducts(search)
          .then((res)=>{
            setFetchData(res.data)
          })
          setShowModal(true)
        }catch(error){
          console.log(error);  
        }
      }
      fetchProducts()
    },[editModal,isModal,search])

    function handleSearchBar(id){
      setSeacrh('')
      setShowModal(false)
      navigate(`/admin/pro-details/${id}`)
    }

    const handleProductClick=(id)=>{
      navigate(`/admin/pro-details/${id}`) 
    }


    const handleDelete =async(id)=>{
      try{
        await deleteProductById(id)
        getProducts()
        .then((res)=>setProducts(res))
       toast.success('Suucessfully deleted product.', { position: 'top-right' });
      }catch(error){
       toast.error("Failed to delete the product",{ position: 'top-right' })
      }
    }    

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-semibold">All Products</h2>
  </div>

  <div className="bg-white shadow-md overflow-scroll scrollnone w-[97%] mt-10 rounded-lg p-6">
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">

      {/* Search Bar */}
      <div className="flex border relative items-center mb-4 md:mb-0">
        <input
          type="text"
          onChange={(e) =>{
            setSeacrh(e.target.value)}}
          value={search}
          placeholder="Search by product name"
          className="w-full md:w-auto p-2 rounded-lg focus:outline-none"
        />

        {showModal ?
          <div className='z-50 absolute top-10 bg-white w-[18rem] overflow-scroll scrollnone h-[20rem] rounded'>
            <ul className=''>
              {fetchData && fetchData.map((value) => {
                return (
                  <li onClick={() => handleSearchBar(value.productId)} className='border p-2'>{value.productName}</li>
                )
              })}
            </ul>
          </div> : null
        }

        <button className="bg-blue-500 flex items-center space-x-3 hover:bg-blue-400 text-white py-2 px-4">
          <FaSearch /><span>Search</span>
        </button>
      </div>

      {/* Create New Button */}
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-400 flex items-center space-x-3 text-white py-2 px-4">
        <BsFillPlusCircleFill /> <span>Create New</span>
      </button>

    </div>

    {/* Responsive Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Id</th>
            <th className="py-2 px-4 border-b">Thumbnail</th>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Stock</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((value) => {
            return (
              <tr className="hover:bg-gray-50 w-full">
                <td className="py-2 px-4 border-b">{value.productId}</td>
                <td className="py-2 flex justify-center border-b">
                  <img className='h-[5rem] w-[5rem] object-cover rounded' src={value.imageUrls[0]} alt={value.productName} />
                </td>
                <td className="py-2 px-4 border-b">{value.productName}</td>
                <td className="py-2 px-4 w-[20%] border-b">₹ {value.productPrice}</td>
                <td className="py-2 px-4 border-b">{value.stock}</td>
                <td className="py-2 px-4 w-[30%] border-b">
                  <div className="flex space-x-2">
                    <button onClick={() => handleProductClick(value.productId)} className='border bg-green-600 text-white rounded p-1 w-20 hover:bg-green-500 transition-all'>View</button>
                    <button onClick={() => openEditModal(value.productId)} className='border bg-yellow-400 text-white rounded p-1 w-20 hover:bg-yellow-300 transition-all'>Edit</button>
                    <button onClick={() => handleDelete(value.productId)} className='border bg-red-600 text-white rounded p-1 w-20 hover:bg-red-500 transition-all'>Del</button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>

  </div>

  {isModal && <AddingProducts closeModal={closeModal} />}
  {editModal && <UpdateProduct id={pId} closeEditModal={closeEditModal} />}
</div>

  )
}

export default TotalProducts


