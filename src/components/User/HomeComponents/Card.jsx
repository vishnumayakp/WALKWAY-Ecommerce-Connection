import React from 'react'
import Category from './Category'

function Card() {
  return (
    <div className='"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"'>
      <Category
      title="Womens"
      subtitle="Spring 2018"
      image="path_to_women_image.jpg"
      buttonText="SHOP NOW"
      />
      <Category
      title="Mens"
      subtitle="Spring 2018"
      image="path_to_men_image.jpg"
      buttonText="SHOP NOW"
      />

      <Category
      title="Accessories"
      subtitle="New Trend"
      image="path_to_accessories_image.jpg"
      />
    </div>
  )
}

export default Card
