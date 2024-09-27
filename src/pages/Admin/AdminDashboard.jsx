import React from 'react'
import AdminHeader from '../../components/Admin/AdminHeader'
import Sidebar from '../../components/Admin/Sidebar'
import AdminHome from '../../components/Admin/AdminHome/AdminHome'
import Footer from '../../components/Admin/Footer'

function AdminDashboard() {
  return (
    <div>
      
      <div className='flex'>
      <Sidebar/>
      <div className='w-full'>
      <AdminHeader/>
      <AdminHome/>
      <Footer/>
      </div>
      </div>
    </div>
  )
}

export default AdminDashboard
