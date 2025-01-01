import React, { useEffect, useState } from 'react';
import { getAllOrders, showTotalProductPurchased, showTotalRevenue } from '../../../Api/Connection';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function
  const [totalRevenue,setTotalRevenue]=useState(0)
  const [totalProducts,setTotalProducts]=useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        getAllOrders().then((res) => setOrders(res));
      } catch (error) {
        console.log("Can't fetch orders", error);
      }
    };
    fetchOrders();
    showTotalRevenue()
    .then((res)=>setTotalRevenue(res))

    showTotalProductPurchased()
    .then((res)=>setTotalProducts(res))

  }, []);

  const handleOrderClick = (userId) => {
    // Navigate to the order details page with the order ID
    navigate(`/admin/details/${userId}`);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-700">All Orders</h2>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Total Revenue Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
            <p className="text-3xl font-bold text-gray-900">₹ {totalRevenue}</p>
          </div>
          <div className="text-green-500 text-3xl">
            💵
          </div>
        </div>

        {/* Total Products Purchased Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Total Products Purchased</h3>
            <p className="text-3xl font-bold text-gray-900">{totalProducts} items</p>
          </div>
          <div className="text-blue-500 text-3xl">
            📦
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-[97%] mt-8 p-6">
        <table className="min-w-full bg-white table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 border-b">Order ID</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 border-b">Transaction ID</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 border-b">Order Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 border-b">Customer Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 border-b">Order Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition duration-150 cursor-pointer"
                  onClick={() => handleOrderClick(order.userId)}
                >
                  <td className="py-3 px-4 text-sm text-gray-800">{order.orderId}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{order.transactionId}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    {new Date(order.orderDate).toLocaleDateString()} <br />
                    <span className="text-xs text-gray-500">{new Date(order.orderDate).toLocaleTimeString()}</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800">{order.customerName}</td>
                  <td className="py-3 px-4 text-sm">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        order.orderStatus === "Completed"
                          ? "bg-green-100 text-green-600"
                          : order.orderStatus === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {order.orderStatus}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
                  No orders available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
