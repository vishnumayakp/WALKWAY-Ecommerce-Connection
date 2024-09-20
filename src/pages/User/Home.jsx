import React from 'react'
import Header from '../../components/User/Header'
import Uppernav from '../../components/User/Uppernav'
import SlideShow from '../../components/User/HomeComponents/SlideShow'
import Category from '../../components/User/HomeComponents/Category'
import Overview from '../../components/User/HomeComponents/Overview'
import ProductDetails from '../../components/User/Product/ProductDetails'

function Home() {
  return (
    <div>
        <Uppernav/>
          <Header/>
          <SlideShow/>
          <Category/>
          <Overview/>
          </div>
  )
}

export default Home
