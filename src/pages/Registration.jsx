import React from 'react';
import Logo from '../assets/Logo.png';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addSignup } from '../Api/Connection';
import { useNavigate } from 'react-router-dom';
import Product from './User/Product';

function Registration() {
  const navigate=useNavigate()
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .required('Full Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-black rounded-lg shadow-lg">
        <a href="/">
          <img src={Logo} alt="WalkWay store" className="h-16 w-16" />
        </a>

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            cart:[],
            Product:[],
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            addSignup(values)
            .then(()=>navigate('/login'))
          }}
        >
          {() => (
            <Form>
              {/* Full Name */}
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-xs italic mt-1"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs italic mt-1"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-xs italic mt-1"
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-medium mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="p"
                  className="text-red-500 text-xs italic mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>

        <p className="mt-4 text-center text-white text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-gray-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Registration;
