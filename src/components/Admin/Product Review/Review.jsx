import React, { useEffect, useState } from 'react'
import kids from '../../../assets/kids.png'
import { getProducts } from '../../../Api/Connection'

function Review() {
  const [data,setData]=useState([])

  useEffect(()=>{
    const fetchReviewData=async()=>{
     try{
      const res=await getProducts()
      setData(res.data)
     }catch(error){
      console.log("can't fetch data");   
     }
    }
    fetchReviewData()
  },[])
  return (
    <div  className="p-8 bg-gray-100 min-h-screen">
    <div className="bg-white shadow-md overflow-scroll scrollnone w-[97%] mt-10 rounded-lg p-6">
  <h2 className="text-lg font-semibold mb-4">Reviews</h2>
  <table className="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b">Thumbnail</th>
        <th className="py-2 px-4 border-b">Product Name</th>
        <th className="py-2 px-4 border-b">Brand</th>
        <th className="py-2 px-4 border-b">Rating</th>
      </tr>
    </thead>
    <tbody>
     {data.map((value)=>{
       return(
        <tr className="hover:bg-gray-50 w-[100%]">
       <td className="py-2 w-[25%] border-b"><img className='h-[5rem] w-[5rem]' src={value.image} alt="" /></td>
       <td className="py-2 px-4 border-b">{value.name}</td>
       <td className="py-2 px-4 border-b">{value.brand}</td>
       <td className="py-2 px-4 border-b">⭐ {value.rating}</td>
     </tr>
       )
     })}
      {/* <tr className="hover:bg-gray-50 w-[100%]">
        <td className="py-2 w-[25%] border-b"><img className='h-[5rem] w-[5rem]' src={kids} alt="" /></td>
        <td className="py-2 px-4 border-b">AIR MORE UPTEMPO '96</td>
        <td className="py-2 px-4 border-b">Well</td>
        <td className="py-2 px-4 border-b">⭐ 4.0</td>
      </tr>
      <tr className="hover:bg-gray-50 w-[100%]">
        <td className="py-2 w-[25%] border-b"><img className='h-[5rem] w-[5rem]' src={kids} alt="" /></td>
        <td className="py-2 px-4 border-b">AIR MORE UPTEMPO '96</td>
        <td className="py-2 px-4 border-b">Well</td>
        <td className="py-2 px-4 border-b">⭐ 4.0</td>
      </tr>
      <tr className="hover:bg-gray-50 w-[100%]">
        <td className="py-2 w-[25%] border-b"><img className='h-[5rem] w-[5rem]' src={kids} alt="" /></td>
        <td className="py-2 px-4 border-b">AIR MORE UPTEMPO '96</td>
        <td className="py-2 px-4 border-b">Well</td>
        <td className="py-2 px-4 border-b">⭐ 4.0</td>
      </tr>
      <tr className="hover:bg-gray-50 w-[100%]">
        <td className="py-2 w-[25%] border-b"><img className='h-[5rem] w-[5rem]' src={kids} alt="" /></td>
        <td className="py-2 px-4 border-b">AIR MORE UPTEMPO '96</td>
        <td className="py-2 px-4 border-b">Well</td>
        <td className="py-2 px-4 border-b">⭐ 4.0</td>
      </tr>
      <tr className="hover:bg-gray-50 w-[100%]">
        <td className="py-2 w-[25%] border-b"><img className='h-[5rem] w-[5rem]' src={kids} alt="" /></td>
        <td className="py-2 px-4 border-b">AIR MORE UPTEMPO '96</td>
        <td className="py-2 px-4 border-b">Well</td>
        <td className="py-2 px-4 border-b">⭐ 4.0</td>
      </tr> */}
    </tbody>
  </table>
</div>
</div>
  )
}

export default Review
