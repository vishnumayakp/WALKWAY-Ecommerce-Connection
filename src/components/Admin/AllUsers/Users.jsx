import React, { useEffect, useState } from 'react'
import { FaUserTie } from "react-icons/fa";
import { blockUnblockUser, getAllUsers } from '../../../Api/Connection';
import { useNavigate } from 'react-router-dom';

function Users() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res.data.data);
    });
  }, []);

  function handleUserClick(id) {
    navigate(`/admin/user-details/${id}`);
  }

  const handleUserStatus = async (id, status) => {
    try {
      const response = await blockUnblockUser(id);
      if (response) {
        const updatedUsers = users.map((user) =>
          user.id === id ? { ...user, isBlocked: !status } : user
        );
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.log('Error updating user status:', error);
      alert('An error occurred while updating user status.');
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">All Users</h2>
      </div>

      <div className="bg-white shadow-md overflow-scroll space-y-5 scrollnone w-[97%] mt-10 rounded-lg p-6">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">User Id</th>
              <th className="py-2 px-4 border-b">Profile picture</th>
              <th className="py-2 px-4 border-b">Username</th>
              <th className="py-2 px-4 border-b">Email Address</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">isBlocked</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((value) => {
              return (
                <tr key={value.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{value.id}</td>
                  <td className="py-2 px-4 border-b"><FaUserTie className='w-8 h-8 text-gray-500' /></td>
                  <td className="py-2 px-4 border-b">{value.userName}</td>
                  <td className="py-2 px-4 border-b text-blue-500">{value.email}</td>
                  <td className="py-2 px-4 text-sm border-b">{value.role}</td>
                  <td className="py-2 px-4 text-sm border-b">{value.isBlocked ? 'Yes' : 'No'}</td>

                  <td className="py-2 px-4 text-sm border-b">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleUserStatus(value.id, value.isBlocked)}
                        className={`border ${value.isBlocked ? 'bg-green-600' : 'bg-red-600'} text-white rounded-lg p-2 w-24 font-semibold`}
                      >
                        {value.isBlocked ? 'Unblock' : 'Block'}
                      </button>
                      <button
                        onClick={() => handleUserClick(value.id)}
                        className="border bg-blue-600 text-white rounded-lg p-2 w-24 font-semibold"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
