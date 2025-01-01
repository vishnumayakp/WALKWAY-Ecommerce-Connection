import React, { useEffect, useState } from 'react'
import { getOrderById, getOrderDetails } from '../../../Api/Connection'

function ShowOrder() {
  const token=localStorage.getItem('authToken')
  const [showorder,setShowOrder]=useState([])
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null); 
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const res = await getOrderDetails(token);
        setShowOrder(res.data); // Set the fetched data
        setLoading(false);  // Set loading to false when done
      } catch (err) {
        setError('Failed to fetch orders.');
        setLoading(false);  // Set loading to false on error
      }
    };

    fetchOrderData();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;  // Show loading state
  }

  if (error) {
    return <div>{error}</div>;  // Show error message
  }

  return (
    <div className='w-full flex flex-col items-center p-5 overflow-x-auto'>
      <p className='font-bold text-3xl mb-5'>Orders</p>
      <div className='w-full md:w-[80%] border border-gray-200 rounded-lg shadow-lg p-4'>
        <div className='space-y-10 w-full h-[32rem] overflow-y-scroll'>
          {showorder.length > 0 ? (
            showorder.map((order) => {
              return (
                <div key={order.orderId} className='w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow'>
                  {/* Order Header */}
                  <div className='flex justify-between items-center mb-4'>
                    <span className='font-bold text-xl text-blue-600'>Order ID: {order.orderId}</span>
                    <span className='text-sm text-gray-500'>{new Date(order.orderDate).toLocaleString()}</span>
                  </div>

                  {/* Order Status */}
                  <div className='mb-3'>
                    <span className='text-sm font-semibold'>Status:</span>
                    <span className='text-sm ml-2'>{order.orderStatus}</span>
                  </div>

                  {/* Transaction ID */}
                  <div className='mb-4'>
                    <span className='text-sm font-semibold'>Transaction ID:</span>
                    <span className='text-sm ml-2'>{order.transactionId}</span>
                  </div>

                  {/* Product Details */}
                  {order.orderProducts.map((product, index) => {
                    return (
                      <div key={index} className='flex justify-between items-center h-[8rem] p-4 bg-gray-50 border border-gray-200 rounded-lg mt-4 hover:bg-gray-100'>
                        <div className='w-[15%] h-full'>
                          <img className='h-full rounded-lg object-cover' src={product.image} alt={product.productName} />
                        </div>
                        <div className='w-[40%] text-left flex flex-col'>
                          <span className='font-semibold text-lg'>{product.productName}</span>
                          <span>Qty: {product.quantity}</span>
                          <span className='text-sm text-gray-600'>Total Price: ₹{product.totalPrice}</span>
                          {/* <span className='text-sm text-gray-500'>Unit Price: ₹{product.unitPrice}</span> */}
                        </div>
                        <div className='w-[25%] text-left flex flex-col'>
                          <span className='text-sm text-gray-600'>Size: {product.size}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })
          ) : (
            <h1 className='text-center text-xl text-gray-500'>Order is empty</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowOrder
