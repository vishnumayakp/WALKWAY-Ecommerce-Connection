import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import AdminHeader from '../../components/Admin/AdminHeader'
import Footer from '../../components/Admin/Footer'

function AddProducts() {
  return (
    <div>
      <div className='flex'>
        <Sidebar/>
        <div className='w-full'>
            <AdminHeader/>
            <AddProducts/>
            <Footer/>
        </div>

      </div>
    </div>
  )
}

export default AddProducts
