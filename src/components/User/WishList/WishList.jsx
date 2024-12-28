import React, { useContext, useEffect, useState } from 'react';
import { addToCart, getProducts, getWishListById, removeProductById } from '../../../Api/Connection';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../USeContext/UserContext';

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const[products,setProducts]=useState([])
  const token = localStorage.getItem('authToken');
  const [sizes,setSize]=useState(0)
  const navigate=useNavigate();
  const {cartFlag,setCartFlag}=useContext(AuthContext)

  useEffect(() => {
    if (token) {
      getWishListById()
        .then((res) => {
          setWishList(res)
        })
        .catch((error) => console.log(error));
    }
  }, [token]);



  async function handleWishList(productId){
    try{
      const updateWishList=wishList.filter(item=>item.productId!==productId);
      setWishList(updateWishList)
      if(updateWishList.length===0){
        console.log("WishList is Empty"); 
      }
      const removeResponse= await removeProductById(productId)
      if(removeResponse){
        const updateList= await getWishListById()
        setWishList(updateWishList)
      }
    }catch (error) {
      console.error('Failed to remove wishList item:', error);
    }
  }

  async function handleAddCart(productId){
      if (token) {
        try {
          const quantity=1;
            const res = await addToCart(productId,quantity,sizes);
            const update=wishList.filter(item=>item.productId!==productId);
            setWishList(update)
            await removeProductById(productId)
            setCartFlag(!cartFlag)
            toast.success('Item added to cart', { position: 'bottom-right' });
        } catch (error) {
            toast.error('Failed to add item to cart. Please try again.', { position: 'top-right' });
            console.log('response',error);    
        }
    } else {
        toast.error('Please login', { position: 'bottom-right' });
        navigate('/login');
    }
    } 
 
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
  <h1 className="text-3xl font-bold mb-10">My Wishlist</h1>

  {wishList && wishList.length > 0 ? (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {wishList.map((value, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 w-[18rem] relative"
        >
          {/* Wishlist Remove Icon */}
          <div
            className="absolute top-2 right-2 text-red-500 cursor-pointer"
            onClick={() => handleWishList(value.productId)}
          >
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
          </div>

          {/* Product Image */}
          <img
            src={value.image}
            alt="Product Image"
            className="h-56 w-full object-cover"
          />

          {/* Product Details */}
          <div className="p-4">
            <h3 className="font-bold text-md mb-1">{value.productName}</h3>
            <p className="text-gray-600 text-sm">{value.productBrand}</p>
            <p className="font-bold text-lg text-gray-800 mt-2">₹{value.price}</p>

            {/* Size Dropdown */}
            <div className="mt-3">
              <label htmlFor={`size-select-${index}`} className="text-sm font-medium text-gray-600">
                Select Size:
              </label>
              <select
               onChange={(e)=>setSize(e.target.value)}
                id={`size-select-${index}`}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                // onChange={(e) => handleSizeChange(value.productId, e.target.value)}
              >
                <option value="" disabled selected>
                  Choose Size
                </option>
                    {
                      value.sizes.map((size)=>{
                        return(
                          <option key={size} value={size}>{size}</option>
                        )
                      })
                    }
              </select>
            </div>

            {/* Add to Cart Button */}
            <button
              className="mt-3 bg-black text-white text-sm py-2 px-4 rounded hover:bg-gray-700 w-full"
              onClick={() => handleAddCart(value.productId)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center mt-10">
      <img
        src="https://www.shopperswarehouse.com/assets/e_website/assets/site_image/empty_wishlist.png"
        alt="Empty Wishlist"
        className="w-80 h-auto sm:w-96 sm:h-auto lg:w-[400px] lg:h-auto mb-8"
      />
    </div>
  )}
</div>


  );
};

export default WishList;
