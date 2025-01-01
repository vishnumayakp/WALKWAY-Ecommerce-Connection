import React, { useState } from 'react';
import axios from 'axios';
import { updateAddressById } from '../../../Api/Connection';

const EditAddress = ({ closeModal, addressData }) => {
  console.log(addressData);
  
  const [updateAddress, setUpdatedAddress] = useState({
    AddressId: addressData?.AddressId || 0,
    FullName: addressData?.FullName || "",
    PhoneNumber: addressData?.PhoneNumber || "",
    Pincode: addressData?.Pincode || "",
    HouseName: addressData?.HouseName || "",
    Place: addressData?.Place || "",
    PostOffice: addressData?.PostOffice || "",
    LandMark: addressData?.LandMark || ""
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedAddress((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle update address action
  const handleUpdate = async (data) => {
    try {
      const response = await updateAddressById(data);
  
      console.log("Address updated successfully", response);
      closeModal();
    } catch (error) {
      console.error("Error updating address:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-[80%] overflow-scroll h-[32rem]">
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="text-lg font-semibold">Update Address</h3>
          <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">&times;</button>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
            <input
              type="text"
              name="FullName"
              value={updateAddress.FullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter full name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <input
              type="text"
              name="PhoneNumber"
              value={updateAddress.PhoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter phone number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Pincode</label>
            <input
              type="text"
              name="Pincode"
              value={updateAddress.Pincode}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter pincode"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">House Name</label>
            <input
              type="text"
              name="HouseName"
              value={updateAddress.HouseName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter house name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Place</label>
            <input
              type="text"
              name="Place"
              value={updateAddress.Place}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter place"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Post Office</label>
            <input
              type="text"
              name="PostOffice"
              value={updateAddress.PostOffice}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter post office"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">LandMark</label>
            <input
              type="text"
              name="LandMark"
              value={updateAddress.LandMark}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter landmark"
            />
          </div>
        </div>

        <div className="flex justify-end px-4 py-2 border-t">
          <button onClick={closeModal} className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 mr-2">
            Cancel
          </button>
          <button onClick={()=>handleUpdate(updateAddress)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Update Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAddress;
