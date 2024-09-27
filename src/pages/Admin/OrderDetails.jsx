import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import AdminHeader from '../../components/Admin/AdminHeader'
import DetailsOfOrder from '../../components/Admin/OrderDetails/DetailsOfOrder'
import Footer from '../../components/Admin/Footer'

function OrderDetails() {
  return (
    <div>
      <div className='flex'>
        <Sidebar/>
        <div className='w-full'>
            <AdminHeader/>
            <DetailsOfOrder/>
            <Footer/>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
