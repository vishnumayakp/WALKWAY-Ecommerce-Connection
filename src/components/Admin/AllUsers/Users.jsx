import React, { useEffect, useState } from 'react'
import { FaUserTie } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { blockUnblockUser, getAllUsers, getUserById, updateUserStatus } from '../../../Api/Connection';
import { useNavigate } from 'react-router-dom';

function Users() {

  const [users,setUsers]=useState([])
  const navigate = useNavigate()
  const [showModal,setShowModal]=useState(false)
  const [fetchData,setFetchData]=useState([])
  const [search,setSearch]=useState('')

  useEffect(()=>{
  getAllUsers()
  .then((res)=>{
    setUsers(res.data.data)    
  })

  },[search])

  function handleUserClick(id){
    navigate(`/admin/user-details/${id}`)
  }

 function handleSearchBar(id){
  setSearch('')
  setShowModal(false)
  navigate(`/admin/user-details/${id}`)

 }


 const handleUserStatus = async (id, status) => {
  try {
    const response = await blockUnblockUser(id);
    if (response) {
      const updatedUsers = users.map((user) =>
        user.id === id ? { ...user, isBlocked: !status } : user
      );
      setUsers(updatedUsers);
    }
  } catch (error) {
    console.log('Error updating user status:', error);
    alert('An error occurred while updating user status.');
  }
};

  return (
    <div  className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">All Users</h2>
    </div>
   
    <div className="bg-white shadow-md overflow-scroll space-y-5 scrollnone w-[97%] mt-10 rounded-lg p-6">
    {/* <div className="flex border w-[18rem] relative items-center  mb-4 md:mb-0">
        <input 
        onChange={(e)=>setSearch(e.target.value)}
        value={search}
          type="text" 
          placeholder="Search by user name" 
          className="w-full md:w-auto p-2  rounded-lg focus:outline-none "
        />

        {showModal?
        <div className='z-50 absolute top-10 bg-white w-[18rem] overflow-scroll scrollnone h-[20rem] rounded'>
        <ul className=''>
            {
              fetchData.map((value)=>{
                return(
                  <li onClick={()=>handleSearchBar(value.id)} className='border p-2'>{value.name}</li> 
                )
              })
            } 
        </ul>
      </div>:
      null
        }

        <button  className="bg-blue-500 flex items-center space-x-3 hover:bg-blue-400 text-white py-2 px-4">
        <FaSearch/><span>Search</span>
        </button>
      </div> */}
  <table className="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b">User Id</th>
        <th className="py-2 px-4 border-b">Profile picture</th>
        <th className="py-2 px-4 border-b">Username</th>
        <th className="py-2 px-4 border-b">Email Address</th>
        <th className="py-2 px-4 border-b">Role</th>
        <th className="py-2 px-4 border-b">isBlocked</th>
        <th className="py-2 px-4 border-b">Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((value)=>{
        return(
          <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">{value.id}</td>
        <td className="py-2 px-4 border-b"><FaUserTie className='w-32' /></td>
        <td className="py-2 px-4 border-b">{value.userName}</td>
        <td className="py-2 px-4 border-b text-blue-500">{value.email}</td>
        <td className="py-2 px-4 text-sm border-b">{value.role}</td>
        <td className="py-2 px-4 text-sm border-b">{value.isBlocked ? 'Yes' : 'No'}</td>

        <td className="py-2 px-4 text-sm border-b space-x-2"><button
                    onClick={() => handleUserStatus(value.id, value.isBlocked)}
                    className={`border ${value.isBlocked ? 'bg-green-600' : 'bg-red-600'} text-white rounded p-2 w-20`}
                  >
                    {value.isBlocked ? 'Unblock' : 'Block'}
                  </button>
        <button onClick={()=>handleUserClick(value.id)} className='border bg-blue-600 text-white rounded p-2 w-20'>View</button></td>
      </tr>
        )
      })}
    </tbody>
  </table>
</div>
</div>
  )
}

export default Users
