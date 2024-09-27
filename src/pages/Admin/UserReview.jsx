import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import AdminHeader from '../../components/Admin/AdminHeader'
import Review from '../../components/Admin/Product Review/Review'
import Footer from '../../components/Admin/Footer'

function UserReview() {
  return (
    <div>
      <div className='flex'>
        <Sidebar/>
        <div className='w-full'>
            <AdminHeader/>
            <Review/>
            <Footer/>
        </div>
      </div>
    </div>
  )
}

export default UserReview
