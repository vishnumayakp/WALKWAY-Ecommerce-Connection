import React from 'react'
import Header from '../../components/User/Header'
import SlideShow from '../../components/User/HomeComponents/SlideShow'
import Overview from '../../components/User/HomeComponents/Overview'


function Home() {
  return (
    <div>
         <Header/>
          <div>
          <SlideShow/>
          {/* <Category/> */}
          <Overview/>
          </div>
          </div>
          
  )
}

export default Home
