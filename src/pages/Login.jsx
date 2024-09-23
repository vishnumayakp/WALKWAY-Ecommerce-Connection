import React, { useContext } from 'react';
import Logo from '../assets/Logo.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../USeContext/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
  const navigate=useNavigate()
  const {userDataValidate}=useContext(AuthContext)
  const userId=localStorage.getItem('userId')
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  // Handle form submission
  const handleSubmit = (values) => {
    // Simulate login or pass values to a login API
    userDataValidate(values)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-black rounded-lg shadow-lg">
        <a href="/"><img src={Logo} alt="WalkWay store" className='h-16 w-16' /></a>

        {/* Formik wrapper */}
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              {/* Email field */}
              <div className="mb-4">
                <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 ${
                    errors.email && touched.email ? 'border-red-500' : 'border-white'
                  }`}
                />
                <ErrorMessage name="email" component="p" className="text-red-500 text-xs italic mt-1" />
              </div>

              {/* Password field */}
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 ${
                    errors.password && touched.password ? 'border-red-500' : 'border-white'
                  }`}
                />
                <ErrorMessage name="password" component="p" className="text-red-500 text-xs italic mt-1" />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>

        <p className="mt-4 text-center text-white text-sm">
          Don't have an account?{' '}
          <a href="/signup" className="text-gray-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
