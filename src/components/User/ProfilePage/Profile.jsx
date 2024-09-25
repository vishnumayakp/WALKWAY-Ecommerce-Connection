import React, { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { getAddressById, getUserById, updateAddressById } from '../../../Api/Connection';
function Profile() {
  const[address,setAddress]=useState({})
  const [details,setDetails]=useState({})
  const navigate=useNavigate();
  const userId=localStorage.getItem('userId')
  function handleLogout(){
    localStorage.clear()
    navigate("/")
  }

  useEffect(()=>{
    if(userId){
      getAddressById(userId)
      .then((res)=>setAddress(res))
      getUserById(userId)
      .then((res)=>setDetails(res.data))
    }
  },[])

  const [userDetails,setUserDetails]=useState({
    fname:"",
    lname:"",
    address:"",
    city:"",
    pincode:"",
    mobile:"",
    email:""
  })

  function handleOnChange(e){
    const {name,value}=e.target
    setUserDetails({...userDetails,[name]:value})
    console.log(userDetails);
    
  }

  function handleSubmit(e){
    e.preventDefault()
    updateAddressById(userId,{address:userDetails})
    .then((res)=>setAddress(res.data.address))
  }

  function handleEdit(){
    setAddress(null)
    updateAddressById(userId,{address:null})
    .then((res)=>setAddress(res.data.address))
  }
  return (
    <div className='w-[100%] flex justify-center flex-col mt-10 items-center  md:h-lvh'>
        <div className='w-[70%]  h-[70%] flex flex-col md:flex-row border-2 space-y-5'>
            <div className='md:w-[40%] h-full space-y-3 flex flex-col justify-evenly items-center'>
            <FaUser className=' h-20 w-20'/>
            <div className='space-y-2 w-[100%] flex flex-col  items-center'>
            <div className='w-[70%]'>
                  <button className=' w-[100%] h-10 border bg-black hover:bg-gray-600 text-white rounded-xl'>User Details</button>
            </div>
            {/* <div className='w-[70%]'>
                  <button className=' w-[100%] h-10 border bg-black hover:bg-gray-600 text-white rounded-xl'>Address</button>
            </div> */}
            <div className='w-[70%]'>
                  <button onClick={()=>navigate('/showorder')} className=' w-[100%] h-10 border bg-black hover:bg-gray-600 text-white rounded-xl'>Orders</button>
            </div>

            <div className='w-[70%]'>
                  <button onClick={handleLogout} className=' w-[100%] h-10 border bg-black hover:bg-gray-600 text-white rounded-xl'>Logout</button>
            </div>
            </div>
            </div>

            <div className='flex flex-col space-y-5 p-2 items-center md:items-start'>
              <p className='text-xl'>Personal Information</p>
              <div className='flex flex-col  space-y-5 '>
                <input  className='border-2' type="text" value={details.name} disabled />
              </div>
              <p>Email</p>
              <div className='flex  justify-evenly'>
                <input className='border-2' type="email"  value={details.email} disabled />
              </div>
              {/* <p>Mobile</p>
              <div className='flex  justify-evenly'>
                <input className='border-2' type="number" value={address.mobile} disabled />
              </div> */}
            </div>

            <div className=' space-y-5  flex flex-col items-center'>
              <span className='text-xl'>Address</span>
                {
                  !address?
                  <form onSubmit={handleSubmit} className='space-y-5   flex flex-col' action="">
                    <div className='md:space-x-2 space-y-3 md:space-y-0'>
                    <input onChange={handleOnChange}  name='fname' className='border-2 p-2 text-sm w-[100%] md:w-[45%]' type="text" placeholder='FirstName' />
                    <input onChange={handleOnChange}  name='lname' className='border-2 p-2 text-sm w-[100%] md:w-[45%]' type="text"placeholder='SecondName' />
                    </div>
                    <div className=''>
                    <textarea onChange={handleOnChange} name="address" className='border-2 p-2 text-sm w-[100%] md:w-[92%]' placeholder='Address' id=""/>
                    </div>
                    <div className='md:space-x-2 space-y-3'>
                    <input onChange={handleOnChange}  name='city'  className='border-2 p-2 text-sm w-[100%]  md:w-[45%]' type="text" placeholder='City/Town'/>
                    <input onChange={handleOnChange}  name='pincode' className='border-2 p-2 text-sm w-[100%] md:w-[45%]' type="text" placeholder='Pincode'/>
                    </div>
                    <div className='md:space-x-2 space-y-3'>
                    <input onChange={handleOnChange} name='mobile' className='border-2 p-2 text-sm w-[100%] md:w-[45%]' type="text" placeholder='Mobile' />
                    <input onChange={handleOnChange}  name='email' className='border-2 p-2 text-sm w-[100%] md:w-[45%]' type="text" placeholder='Email' />
                    </div>
                    <div>
                    <button type='submit' className=' w-[50%] h-10 border bg-black hover:bg-gray-600 text-white rounded-xl'>SUBMIT</button>
                    </div>
                </form>   
                  :
                  <form className='space-y-5   flex flex-col' action="">
                    <div className='md:space-x-2 space-y-3 md:space-y-0'>
                    <input  name='fname' value={address.fname} className='border-2 p-2 text-sm w-[100%] md:w-[45%]' type="text" placeholder='FirstName' disabled />
                    <input  name='lname' value={address.lname} className='border-2 p-2 text-sm w-[100%] md:w-[45%]' type="text"placeholder='SecondName'  disabled/>
                    </div>
                    <div className=''>
                    <textarea  name="address" value={address.address} className='border-2 p-2 text-sm w-[100%] md:w-[92%]' placeholder='Address' id=""  disabled/>
                    </div>
                    <div className='md:space-x-2 space-y-3'>
                    <input name='city' value={address.city} className='border-2 p-2 text-sm w-[100%]  md:w-[45%]' type="text" placeholder='City/Town' disabled/>
                    <input name='pincode' value={address.pincode} className='border-2 p-2 text-sm w-[100%] md:w-[45%]' type="text" placeholder='Pincode' disabled/>
                    </div>
                    <div className='md:space-x-2 space-y-3'>
                    <input name='mobile' value={address.mobile} className='border-2 p-2 text-sm w-[100%] md:w-[45%]' type="text" placeholder='Mobile'  disabled/>
                    <input name='email' value={address.email} className='border-2 p-2 text-sm w-[100%] md:w-[45%]' type="text" placeholder='Email'  disabled/>
                    </div>
                    <div>
                    <button type='button'  onClick={handleEdit} className=' w-[50%] h-10 border bg-black hover:bg-gray-600 text-white rounded-xl'>Edit</button>
                    </div>
                </form>   
                }

                    


            </div> 
        </div>
        </div>
  )
}

export default Profile
