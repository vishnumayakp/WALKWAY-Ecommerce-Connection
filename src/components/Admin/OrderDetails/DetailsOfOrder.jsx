import React, { useEffect, useState } from 'react';
import kids from '../../../assets/kids.png';
import { useParams } from 'react-router-dom';
import { getOrderById, updateOrderStatus } from '../../../Api/Connection';

function DetailsOfOrder() {
  const { userId } = useParams();
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('authToken');
  const [editingStatus, setEditingStatus] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        getOrderById(userId)
          .then((res) => setOrders(res));
      } catch (error) {
        console.log("Error fetching order:", error);
      }
    };
    fetchOrder();
  }, [userId]);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.orderId === orderId ? { ...order, orderStatus: newStatus } : order
        )
      );
      setEditingStatus(null); // Exit editing mode after update
    } catch (error) {
      console.log('Error updating order status:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-scroll h-[40rem] scrollnone">
        {/* Order Overview */}
        <div className="px-6 py-6 border-b border-gray-200 bg-white mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Details</h2>
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.orderId} className="border p-6 rounded-lg shadow-md bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Order ID:</p>
                    <p className="text-base font-semibold text-gray-800">{order.orderId}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Transaction ID:</p>
                    <p className="text-base font-semibold text-gray-800">{order.transactionId}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Order Date:</p>
                    <p className="text-base font-semibold text-gray-800">
                      {new Date(order.orderDate).toLocaleDateString()} <br />
                      <span className="text-xs text-gray-500">{new Date(order.orderDate).toLocaleTimeString()}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Order Status:</p>
                    {editingStatus === order.orderId ? (
                      <select
                        value={order.orderStatus}
                        onChange={(e) => handleStatusChange(order.orderId, e.target.value)}
                        className="bg-gray-100 text-gray-800 rounded px-2 py-1"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    ) : (
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold cursor-pointer ${
                          order.orderStatus === 'Completed'
                            ? 'bg-green-100 text-green-600'
                            : order.orderStatus === 'Pending'
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'bg-red-100 text-red-600'
                        }`}
                        onClick={() => setEditingStatus(order.orderId)} // Enable editing on click
                      >
                        {order.orderStatus}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ordered Products */}
        <div className="px-6 py-6 bg-gray-50">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Ordered Products</h3>
          {orders.map((order) =>
            order.orderProducts.map((product) => (
              <div key={product.productId} className="flex items-center border-b border-gray-200 py-4 hover:bg-gray-100 transition-all duration-200">
                <img
                  src={product.image || kids}
                  alt={product.productName}
                  className="w-20 h-20 object-cover rounded-lg shadow-md mr-4"
                />
                <div className="flex-1 space-y-1">
                  <p className="text-base font-semibold text-gray-800">{product.productName}</p>
                  <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
                </div>
                <p className="text-base font-semibold text-gray-800">${product.totalPrice}</p>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="px-6 py-6 bg-gray-100 mt-8 rounded-b-lg">
          <div className="flex justify-between text-sm font-semibold text-gray-800">
            <p>Total Products:</p>
            <p>{orders.reduce((sum, order) => sum + order.orderProducts.length, 0)} items</p>
          </div>
          <div className="flex justify-between text-sm font-semibold text-gray-800 mt-3">
            <p>Total Price:</p>
            <p>
              ${orders.reduce((total, order) => total + order.orderProducts.reduce((sum, product) => sum + product.totalPrice, 0), 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsOfOrder;
