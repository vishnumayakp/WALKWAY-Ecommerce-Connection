import React, { useContext, useEffect, useState } from 'react'
import Logo from '../../assets/Logo.png'
import { BsCart4 } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { getCartById, getUserById } from '../../Api/Connection';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../USeContext/UserContext';


function Header() {
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
  
  return (
    <div className='z-50  w-full'>
       <div className='bg-white w-full flex justify-center items-center'>
        <h3 className='font-bold text-sm'>Get 5% extra discount on Prepaid orders</h3>
        <div>
            <button className='pt-1'><RxCrossCircled className='h-5 w-5'/></button>
        </div>
    </div>
  <nav className='bg-black  shadow-lg w-full'>
    <div className='mx-12 flex justify-between items-center'>
      <a href="/"><img src={Logo} alt="WalkWay store" className='h-16 w-16' /></a>
      <div className='relative hidden md:flex space-x-10 items-center'>
        <form className="flex-grow mx-20">
          <CiSearch className="text-gray-800 absolute mt-2" />
          <input
            type="text"
            placeholder="Search for shoes..."
            className="h-8 p-2 pl-8 py-2 rounded-3xl border bg-gray-200 border-gray-300 focus:outline-none focus:ring-2 focus:black"
          />
        </form>
        <h6 className="text-gray-300 hover:text-white">Shop</h6>
        <button onClick={handleAccount} className="text-gray-300 flex hover:text-white"><FaUser onClick={()=>navigate('/profile')} className='h-6 w-6'/>{userId?userData.name:"Account"} </button>
        
        <button onClick={handleCart} className="text-gray-300 flex hover:text-white">
          <BsCart4  className='h-7 w-7'/>
          <span className='absolute right-5 bg-white text-black rounded-2xl text-xs w-4'>{cartLength.length}</span>
        </button>
      </div>
      <div className='md:hidden text-white'>
        <button className='focus:outline-none'>☰</button>
      </div>
    </div>
  </nav>
  
</div>

  )
}

export default Header
