// import React, { useEffect, useState } from 'react'
// import product1 from '../../../assets/kids.png'
// import { addOrRemoveWishList, getProductByCategory, getProducts, getWishListById } from '../../../Api/Connection'
// import {useNavigate, useParams,} from 'react-router-dom'
// import { toast } from 'react-toastify'
// import axios from 'axios'


// function Overview() {
//   const [product,setProduct]=useState([])
//   const [category, setCategory]=useState('')
//   const navigate=useNavigate()
//   const [wishList,setWishList]=useState([])
//   const token=localStorage.getItem('authToken')

//   useEffect(() => {
//     if (category) {
//       getProductByCategory(category)
//         .then((res)=>{
//           setProduct(res.data.data)
//         })
//         .catch((error)=>console.log(error))
//         getWishListById()
//         .then((res)=>setWishList(res))
//         .catch((error)=>console.log(error))
//     } else {
//       getProducts()
//         .then((response) =>{
//           setProduct(response)
//         })
//         .catch((error) =>console.log(error));
//         getWishListById()
//         .then((res)=>setWishList(res))
//         .catch((error)=>console.log(error))
//     }
//   }, [category, token]);


//   async function handleWishList(productId) {
//  if(token){
//   const updateWishList=wishList.filter(item=>item.productId!==productId)
//   setWishList(updateWishList)
//   if(wishList.length===0){
//     console.log("Now WishList is Empty")
//   }
//   await addOrRemoveWishList(productId)
//   .then((res)=>{
//     getWishListById()
//     .then((res)=>{
//       setWishList(res)
//       console.log("updated wishList");
      
//     })
//     .catch((error)=>console.log(error))
//   })
//  }
//   }

//   async function handleProduct(productId){
//     navigate(`/product/${productId}`)
//   }

// return (
//   <div>
//     <div className='flex flex-col items-center'>
//       <div className='flex items-start space-y-5 flex-col w-[100%]'>
//         <div className="flex gap-10 justify-center flex-wrap p-10 w-full">
//           <div onClick={() => setCategory('Womens')} className='md:w-[22rem] w-[90%] relative h-64 border border-gray-300 transition duration-500 ease-in-out transform hover:scale-110'>
//             <h4 className='font-bold absolute top-3 left-4 text-3xl'>Women</h4>
//             <img className='h-[100%]' src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp" alt="" />
//           </div>
//           <div onClick={() => setCategory('Mens')} className='md:w-[22rem] w-[90%] relative h-64 border border-gray-300 transition duration-500 ease-in-out transform hover:scale-110'>
//             <h4 className='font-bold absolute top-3 left-4 text-3xl'>Men</h4>
//             <img className='h-[100%]' src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp" alt="" />
//           </div>
//           <div onClick={() => setCategory('Kids')} className='md:w-[22rem] relative w-[90%] h-64 border border-gray-300 transition duration-500 ease-in-out transform hover:scale-110'>
//             <h4 className='font-bold absolute top-3 left-4 text-3xl'>Kids</h4>
//             <img className='h-[100%]' src="https://media.istockphoto.com/id/1310497793/photo/portrait-of-a-boy-with-big-brown-eyes-who-sits-on-a-white-background-and-looks-at-the-camera.jpg?s=612x612&w=0&k=20&c=60Oodpur6TxnKO_PEk5IeJKhCyioDYiIgkkYlwKtOn0=" alt="" />
//           </div>
//         </div>
//         <h1 className='font-bold ml-[10%] top-3 left-4 text-4xl'>PRODUCT OVERVIEW</h1>
//       </div>
//     </div>
//     <div className="flex flex-wrap w-[100%] justify-center gap-10 h-[25rem] mt-5">
//       {product && product.map((value) => {
//         const isInWishList = wishList?.find(item => item.productId === value.productId)

//         return (
//           <div
//             key={value.productId}
//             className="relative h-[30rem] w-[25rem] sm:h-[24rem] sm:w-[18rem] md:h-[20rem] lg:w-[15rem] md:w-[16rem] flex flex-col transition-transform duration-300 hover:scale-105 items-start">
//             <div className="relative w-full h-[80%] bg-gray-200">
//               <div className="absolute top-2 right-2" onClick={() => handleWishList(value.productId)}>
//                 {isInWishList ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="w-6 h-6 text-red-600"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3.172 5.172a4 4 0 015.656 0L12 8.344l3.172-3.172a4 4 0 115.656 5.656L12 19.344l-8.828-8.828a4 4 0 010-5.656z"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="w-6 h-6 text-red-500 hover:text-red-600"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3.172 5.172a4 4 0 015.656 0L12 8.344l3.172-3.172a4 4 0 115.656 5.656L12 19.344l-8.828-8.828a4 4 0 010-5.656z"
//                     />
//                   </svg>
//                 )}
//               </div>

//               <img
//               onClick={()=>handleProduct(value.productId)}
//                 src={value.imageUrls[0]}
//                 alt={value.productName}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="flex flex-col items-start">
//               <span className="font-bold">{value.productName}</span>
//               <span>{value.productBrand}</span>
//               <span className="font-bold">₹ {value.productPrice}</span>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// )
// }

// export default Overview




import React, { useEffect, useState } from 'react';
import { getProductPaginated, getWishListById, addOrRemoveWishList, getProductByCategory } from '../../../Api/Connection';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Overview() {
  const [product, setProduct] = useState([]); // Holds products to display
  const [wishList, setWishList] = useState([]); // Holds wishlist data
  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
  const [pageSize] = useState(10); // Defines how many products per page
  const [totalPages, setTotalPages] = useState(1); // Total number of pages for pagination
  const navigate = useNavigate();
  const[category,setCategory]=useState('')
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    if(category){
      getProductByCategory(category)
      .then((res)=>{
        setProduct(res.data.data)
      })
    }else{
      fetchPaginatedProducts(currentPage, pageSize);
    }
    getWishListById()
      .then((res) => setWishList(res))
      .catch((error) => console.log(error));
  }, [currentPage,category]);

  const fetchPaginatedProducts = async (page, size) => {
    try {
      // Fetch products with pagination
      const res = await getProductPaginated(page, size);
      if (res) {
        setProduct(res.data); // Ensure correct data is set (e.g., products array)
        setTotalPages(res.totalPages); // Total pages for pagination
      } else {
        setProduct([]); // If no products are returned, set as empty array
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  async function handleWishList(productId) {
    if (token) {
      // Remove the product from the wishlist if it already exists
      const updateWishList = wishList.filter(item => item.productId !== productId);
      setWishList(updateWishList);
      
      if (wishList.length === 0) {
        console.log("Now WishList is Empty");
      }

      // Add or remove product from the wishlist
      await addOrRemoveWishList(productId)
        .then(() => {
          getWishListById()
            .then((res) => {
              setWishList(res); // Update the wishlist after modification
            })
            .catch((error) => console.log('Error updating wishlist:', error));
        })
        .catch((error) => console.log('Error adding/removing product to wishlist:', error));
    }
  }

  async function handleProduct(productId) {
    // Navigate to the product detail page
    navigate(`/product/${productId}`);
  }

  const handleNextPage = () => {
    // Increment page number if not already on the last page
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    // Decrement page number if not already on the first page
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className='flex flex-col items-center'>
      <div className='flex items-start space-y-5 flex-col w-[100%]'>
        <div className="flex gap-10 justify-center flex-wrap p-10 w-full">
          <div onClick={() => setCategory('Womens')} className='md:w-[22rem] w-[90%] relative h-64 border border-gray-300 transition duration-500 ease-in-out transform hover:scale-110'>
            <h4 className='font-bold absolute top-3 left-4 text-3xl'>Women</h4>
            <img className='h-[100%]' src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp" alt="" />
          </div>
          <div onClick={() => setCategory('Mens')} className='md:w-[22rem] w-[90%] relative h-64 border border-gray-300 transition duration-500 ease-in-out transform hover:scale-110'>
            <h4 className='font-bold absolute top-3 left-4 text-3xl'>Men</h4>
            <img className='h-[100%]' src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp" alt="" />
          </div>
          <div onClick={() => setCategory('Kids')} className='md:w-[22rem] relative w-[90%] h-64 border border-gray-300 transition duration-500 ease-in-out transform hover:scale-110'>
            <h4 className='font-bold absolute top-3 left-4 text-3xl'>Kids</h4>
            <img className='h-[100%]' src="https://media.istockphoto.com/id/1310497793/photo/portrait-of-a-boy-with-big-brown-eyes-who-sits-on-a-white-background-and-looks-at-the-camera.jpg?s=612x612&w=0&k=20&c=60Oodpur6TxnKO_PEk5IeJKhCyioDYiIgkkYlwKtOn0=" alt="" />
          </div>
        </div>
        <h1 className='font-bold ml-[10%] top-3 left-4 text-4xl'>PRODUCT OVERVIEW</h1>
      </div>
    </div>
  
      {product&& product.length === 0 ? (
        <div className="text-center">No products available</div>
      ) : (
        <div className="flex flex-wrap w-[100%] justify-center gap-10  mt-5">
          {product&&product.map((value) => {
            const isInWishList = wishList?.find(item => item.productId === value.productId);
  
            return (
              <div
                key={value.productId}
                className="relative h-[30rem] w-[25rem] sm:h-[24rem] sm:w-[18rem] md:h-[20rem] lg:w-[15rem] md:w-[16rem] flex flex-col transition-transform duration-300 hover:scale-105 items-start"
              >
                <div className="relative w-full h-[80%] bg-gray-200">
                  <div className="absolute top-2 right-2" onClick={() => handleWishList(value.productId)}>
                    {isInWishList ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.172 5.172a4 4 0 015.656 0L12 8.344l3.172-3.172a4 4 0 115.656 5.656L12 19.344l-8.828-8.828a4 4 0 010-5.656z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-red-500 hover:text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.172 5.172a4 4 0 015.656 0L12 8.344l3.172-3.172a4 4 0 115.656 5.656L12 19.344l-8.828-8.828a4 4 0 010-5.656z"
                        />
                      </svg>
                    )}
                  </div>
  
                  <img
                    onClick={() => handleProduct(value.productId)}
                    src={value.imageUrls[0]}
                    alt={value.productName}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col items-start">
                  <span className="font-bold">{value.productName}</span>
                  <span>{value.productBrand}</span>
                  <span className="font-bold">₹ {value.productPrice}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

<div className="flex justify-center my-20 space-x-4">
  <button
    className="px-5 py-2 bg-black text-white rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
    onClick={handlePrevPage}
    disabled={currentPage === 1}
  >
    Previous
  </button>
  
  <span className="px-4 py-2 text-medium font-medium text-gray-700">
    {`Page ${currentPage} of ${totalPages}`}
  </span>
  
  <button
    className="px-5 py-2 bg-black text-white rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
    onClick={handleNextPage}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>


    </div>
  );
}

export default Overview;
