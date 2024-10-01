import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import DetailsOfOrder from '../../components/Admin/OrderDetails/DetailsOfOrder'
import AdminHeader from '../../components/Admin/AdminHeader'
import Footer from '../../components/Admin/Footer'
import DetailsOfUsers from '../../components/Admin/UserDetails/DetailsOfUsers'

function UserDetails() {
  return (
    <div>
      <div className='flex'>
        <Sidebar/>
       <div className='w-full'>
        <AdminHeader/>
        <DetailsOfUsers/>
       <Footer/>
       </div>

      </div>
    </div>
  )
}

export default UserDetails
