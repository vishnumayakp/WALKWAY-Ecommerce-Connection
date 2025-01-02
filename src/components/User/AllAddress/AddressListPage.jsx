import React, { useEffect, useState } from 'react';
import { getAddressById, removeAddressById } from '../../../Api/Connection';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AddressListPage() {
  const [addressList, setAddressList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAddressById()
      .then((res) => {
        if (res && res.length > 0) {
          setAddressList(res);
        } else {
          toast.info('No addresses found.');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleDeleteAddress = (addressId) => {
     removeAddressById(addressId)
     .then((res)=>setAddressList(res))
    console.log(`Deleting address with ID: ${addressId}`);
    toast.success('Address deleted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">All Address</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {addressList && addressList.length === 0 ? (
            <div className="text-center text-gray-500">You have no saved addresses.</div>
          ) : (
            addressList && addressList.map((address) => (
              <div
                key={address.addressId}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col space-y-4"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-700">{address.fullName}</h2>
                  {address.isDefaultAddress && (
                    <span className="bg-blue-500 text-white px-2 py-1 text-xs rounded-full">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-gray-600">{address.houseName}</p>
                <p className="text-gray-600">{address.place}</p>
                <p className="text-gray-600">{address.landMark}</p>
                <p className="text-gray-600">{address.phoneNumber}</p>
                <p className="text-gray-600">{address.postOffice} {address.pincode}</p>

                <div className="flex justify-center items-center mt-4">
                  {/* <button
                    className="text-blue-500 hover:text-blue-700 font-semibold text-sm"
                    // Implement edit functionality
                    onClick={() => console.log(`Edit address ${address.addressId}`)}
                  >
                    Edit
                  </button> */}
                  <button
                    className="bg-red-500 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-red-600 transition-all transform hover:scale-105 active:scale-95 focus:outline-none"
                    onClick={() => handleDeleteAddress(address.addressId)}
                  >
                    Delete Address
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Add New Address Button */}
        <div className="mt-8 text-center">
          <button
            className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition"
            onClick={() =>navigate('/profile') }
          >
            Add New Address
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddressListPage;
