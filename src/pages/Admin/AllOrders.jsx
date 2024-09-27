import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import AdminHeader from '../../components/Admin/AdminHeader'
import Orders from '../../components/Admin/Allorders.jsx/Orders'
import Footer from '../../components/Admin/Footer'

function AllOrders() {
  return (
    <div>
        <div className='flex'>
        <Sidebar/>
      <div className='w-full'>
        <AdminHeader/>
        <Orders/>
        <Footer/>
      </div>
    </div>
    </div>
  )
}

export default AllOrders
