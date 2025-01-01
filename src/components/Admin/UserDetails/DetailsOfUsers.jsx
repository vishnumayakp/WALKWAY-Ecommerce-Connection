import React, { useEffect, useState } from 'react';
import { FaUserTie } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { blockUnblockUser, getOrderById, getUserById } from '../../../Api/Connection';

function DetailsOfUsers() {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [orders, setOrders] = useState([]);
    const role = localStorage.getItem('role');

    useEffect(() => {
        getUserById(id)
            .then((res) => {
              console.log("User details fetched:", res.data);
              setDetails(res.data.data); 
            })
            .catch((error) => {
              console.log("Error fetching user details:", error);
            });

          getOrderById(id)
            .then((res) => {
              console.log("User orders fetched:", res);
              setOrders(res); 
            })
            .catch((error) => {
              console.log("Error fetching orders:", error);
            });
      }, [id, role]);

      const handleUserStatus = async (id, status) => {
        try {
          const response = await blockUnblockUser(id);
          if (response) {
            setDetails((prevDetails) => ({
              ...prevDetails,
              isBlocked: !prevDetails.isBlocked
            }));
          }
        } catch (error) {
          console.log('Error updating user status:', error);
          alert('An error occurred while updating user status.');
        }
      };

    const totalOrders = orders ? orders.length : 0;

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                {/* User Details Section */}
                <div className="flex flex-col items-center p-8">
                    <FaUserTie className="w-32 h-32 mb-4 text-indigo-600" />
                    <h1 className="text-3xl font-bold text-gray-800">{details.userName}</h1>
                    <p className="text-gray-500">{details.email}</p>
                    <p className="mt-2 text-sm text-gray-400">{details.id}</p>

                    <div className="mt-6 text-center">
                        <span className="block text-xl font-bold text-gray-800">
                            {details.isBlocked ? 'Blocked' : 'Active'}
                        </span>
                        <p className="text-gray-500 text-sm">Status</p>
                        {details && details.id && (
                            <button
                                onClick={() => handleUserStatus(details.id, details.isBlocked)}
                                className={`mt-4 border ${details.isBlocked ? 'bg-green-600' : 'bg-red-600'} text-white rounded p-2 w-24`}
                            >
                                {details.isBlocked ? 'Unblock' : 'Block'}
                            </button>
                        )}
                    </div>
                </div>

                {/* Orders Table Section */}
                <div className="p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Items</h2>
                    <div className="overflow-x-auto shadow-md rounded-lg">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Thumbnail</th>
                                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Order ID</th>
                                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Product Name</th>
                                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Quantity</th>
                                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Total Price</th>
                                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Order Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.length > 0 ? (
                                    orders.map((order) =>
                                        order.orderProducts.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-50">
                                                <td className="py-4 px-6 border-b">
                                                    <img className="h-16 w-16 object-cover rounded-lg" src={item.image} alt={item.name} />
                                                </td>
                                                <td className="py-4 px-6 border-b text-sm text-gray-800">{order.orderId}</td>
                                                <td className="py-4 px-6 border-b text-sm text-gray-800">{item.productName}</td>
                                                <td className="py-4 px-6 border-b text-sm text-gray-800">{item.quantity}</td>
                                                <td className="py-4 px-6 border-b text-sm text-gray-800">{item.totalPrice}</td>
                                                <td className="py-4 px-6 border-b text-sm text-gray-800">{order.orderStatus}</td>
                                            </tr>
                                        ))
                                    )
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="py-4 px-6 border-b text-center text-gray-500">No orders available.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsOfUsers;
