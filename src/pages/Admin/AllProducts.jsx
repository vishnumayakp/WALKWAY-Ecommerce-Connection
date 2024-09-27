import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import AdminHeader from '../../components/Admin/AdminHeader'
import TotalProducts from '../../components/Admin/All Products/TotalProducts'
import Footer from '../../components/Admin/Footer'

function AllProducts() {
  return (
    <div>
      <div className='flex'>
        <Sidebar/>
        <div className='w-full'>
            <AdminHeader/>
            <TotalProducts/>
            <Footer/>
        </div>

      </div>
    </div>
  )
}

export default AllProducts
