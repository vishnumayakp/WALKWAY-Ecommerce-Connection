import React, { useState } from 'react';
import { FaUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createAddress } from '../../../Api/Connection';
import { toast } from 'react-toastify';

function Profile() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required('Full Name is required'),
    phoneNumber: Yup.string()
      .required('Phone Number is required'),
    pincode: Yup.string()
      .min(6, 'Pincode must be at least 6 characters')
      .required('Pincode is required'),
    houseName: Yup.string()
      .required('House Name is required'),
    place: Yup.string()
      .required('Place is required'),
    postOffice: Yup.string()
      .required('Post Office is required'),
    landMark: Yup.string()
      .required('Landmark is required'),
  });

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  const handleFormSubmit = (data) => {
    setLoading(true);

    createAddress(data)
      .then((res) => {
        toast.success('Address added successfully!');
        setLoading(false);
      })
      .catch((error) => {
        toast.error('Failed to add address: ' + (error?.response?.data?.message || 'Please try again!'));
        setLoading(false);
      });
  };

  const initialValues = {
    fullName: '',
    phoneNumber: '',
    pincode: '',
    houseName: '',
    place: '',
    postOffice: '',
    landMark: '',
  };

  return (
    <div className="w-[100%] flex justify-center flex-col mt-10 items-center">
      <div className="w-[70%] flex flex-col md:flex-row border-2 space-y-5">
        <div className="md:w-[40%] space-y-3 flex flex-col justify-evenly items-center">
          <FaUser className="h-20 w-20" />
          <div className="space-y-2 w-[100%] flex flex-col items-center">
            <div className="w-[70%]">
              <button onClick={()=> navigate('/address')} className="w-[100%] h-10 border bg-black hover:bg-gray-600 text-white rounded-xl">All Address</button>
            </div>
            <div className="w-[70%]">
              <button onClick={() => navigate('/showorder')} className="w-[100%] h-10 border bg-black hover:bg-gray-600 text-white rounded-xl">Orders</button>
            </div>
            <div className="w-[70%]">
              <button onClick={handleLogout} className="w-[100%] h-10 border bg-black hover:bg-gray-600 text-white rounded-xl">Logout</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-5 p-2 items-center">
          <span className="text-xl">Add Address</span>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-5 flex flex-col">
                <div className="md:space-x-2 space-y-3 md:space-y-0">
                  <Field name="fullName" className="border-2 p-2 text-sm w-[100%] md:w-[45%]" type="text" placeholder="Full Name"  />
                  <ErrorMessage name="fullName" component="p" className="text-red-500 text-xs mt-1" />
                  
                  <Field name="phoneNumber" className="border-2 p-2 text-sm w-[100%] md:w-[45%]" type="text" placeholder="Phone Number"  />
                  <ErrorMessage name="phoneNumber" component="p" className="text-red-500 text-xs mt-1" />
                </div>
                <div className="md:space-x-2 space-y-3">
                  <Field name="houseName" className="border-2 p-2 text-sm w-[100%] md:w-[45%]" type="text" placeholder="House Name" />
                  <ErrorMessage name="houseName" component="p" className="text-red-500 text-xs mt-1" />
                  
                  <Field name="place" className="border-2 p-2 text-sm w-[100%] md:w-[45%]" type="text" placeholder="Place"  />
                  <ErrorMessage name="place" component="p" className="text-red-500 text-xs mt-1" />
                </div>
                <div className="md:space-x-2 space-y-3">
                  <Field name="postOffice" className="border-2 p-2 text-sm w-[100%] md:w-[45%]" type="text" placeholder="Post Office"  />
                  <ErrorMessage name="postOffice" component="p" className="text-red-500 text-xs mt-1" />
                  
                  <Field name="landMark" className="border-2 p-2 text-sm w-[100%] md:w-[45%]" type="text" placeholder="Landmark"  />
                  <ErrorMessage name="landMark" component="p" className="text-red-500 text-xs mt-1" />
                </div>
                <div className="md:space-x-2 space-y-3">
                  <Field name="pincode" className="border-2 p-2 text-sm w-[100%] md:w-[45%]" type="text" placeholder="Pincode" />
                  <ErrorMessage name="pincode" component="p" className="text-red-500 text-xs mt-1" />
                </div>
                <div>
                  <button type="submit" className="w-[50%] h-10 border bg-black hover:bg-gray-600 text-white rounded-xl">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Profile;
