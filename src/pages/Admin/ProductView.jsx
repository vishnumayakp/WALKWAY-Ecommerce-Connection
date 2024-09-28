import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import AdminHeader from '../../components/Admin/AdminHeader'
import ProductDetails from '../../components/Admin/ProductView/ProductDetails'
import Footer from '../../components/Admin/Footer'

function ProductView() {
  return (
    <div>
      <div className='flex'>
        <Sidebar/>
        <div className='w-full'>
            <AdminHeader/>
            <ProductDetails/>
            <Footer/>
        </div>
      </div>
    </div>
  )
}

export default ProductView
