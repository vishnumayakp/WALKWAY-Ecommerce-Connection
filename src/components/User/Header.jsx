import React, { useContext, useEffect, useState } from 'react'
import Logo from '../../assets/Logo.png'
import { BsCart4 } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { getCartById, getProducts, getUserById } from '../../Api/Connection';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../USeContext/UserContext';
import Product from '../../pages/User/Product';


function Header() {
  const [showModal,setShowModal]=useState(false)
  const [search,setSearch]=useState('')
  const [fetchedData,setFetchedData]=useState([])
  const [userData,setUserData]=useState({})
  const userId=localStorage.getItem('userId')
  const navigate=useNavigate()
  const [cartLength,setCartLength]=useState([])
  const {cartFlag}=useContext(AuthContext)

  useEffect(()=>{
    if(userId){
      getUserById(userId)
    .then((res)=>setUserData(res.data))
      getCartById(userId)
      .then(res=>setCartLength(res))
    }
  },[userId,cartFlag])
   function handleAccount(){
    if(userId){
      navigate('/profile')
    }else{
      navigate('/login')
    }
   }

   function handleCart(){
    if(userId){
      navigate('/cart')
    }else{
      navigate('/login')
    }
   }

   useEffect(()=>{
    async function fetchProducts(){
      if(search.trim()===''){
        setFetchedData([])
        setShowModal(false)
        return 
      }
      try{
        const response= await getProducts()
        const searchData= response.data.filter((value)=>
          value.name.toLowerCase().includes(search.toLowerCase())
        )
        setFetchedData(searchData)
        setShowModal(true)

      }
      catch(error){
        console.log(error);
        
      }
    }
    fetchProducts()
   },[search])

   function handleSearchBar(id){
    setShowModal(false)
    setSearch('')
    navigate(`/product/${id}`)
   }
  
  return (
    <div className='z-50  w-full'>
       <div className='bg-white w-full flex justify-center items-center'>
        <h3 className='font-bold text-sm'>Get 5% extra discount on Prepaid orders</h3>
    </div>
  <nav className='bg-black  shadow-lg w-full'>
    <div className='mx-12 flex justify-between items-center'>
      <a href="/"><img src={Logo} alt="WalkWay store" className='h-16 w-16' /></a>
      <div className='relative md:flex space-x-10 items-center'>
        <form className="flex-grow mx-20">
          <input
          onChange={(e)=>setSearch(e.target.value)}
          value={search}
            type="text"
            placeholder="Search for shoes..."
            className="h-8 p-2 pl-8 hidden md:flex py-2 rounded-3xl border bg-gray-200 border-gray-300 focus:outline-none focus:ring-2 focus:black"
          />
        </form>
        {showModal?
        <div className='z-50 absolute top-10 bg-white w-[18rem] overflow-scroll scrollnone h-[20rem] rounded'>
          <ul className=''>
           {
            fetchedData.map((value)=>{
              return(
                <li onClick={()=>handleSearchBar(value.id)} className='border p-2'>{value.name}</li>
              )
            })
           }
          </ul>
        </div>:
        null
      }
       <div className='relative flex space-x-5'>
        <button onClick={handleAccount} className="text-gray-300 flex hover:text-white"><FaUser onClick={()=>navigate('/profile')} className='h-6 w-6'/>{userId?userData.name:"Account"} </button>
        
       
        <button onClick={handleCart} className="text-gray-300 flex hover:text-white">
          <BsCart4  className='h-7 w-7'/>
          <span className='absolute right-5 bg-white text-black rounded-2xl text-xs w-4'>{cartLength.length}</span>
        </button>
        </div>
      </div>
      {/* <div className='md:hidden text-white'>
        <button className='focus:outline-none'>☰</button>
      </div> */}
    </div>
  </nav>
  
</div>

  )
}

export default Header
