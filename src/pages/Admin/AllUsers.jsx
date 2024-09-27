import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import AdminHeader from '../../components/Admin/AdminHeader'
import Users from '../../components/Admin/AllUsers/Users'
import Footer from '../../components/Admin/Footer'

function AllUsers() {
  return (
    <div>
      <div className='flex'>
        <Sidebar/>
        <div className='w-full'>
            <AdminHeader/>
            <Users/>
            <Footer/>
        </div>
      </div>
    </div>
  )
}

export default AllUsers
