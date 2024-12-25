import React from 'react';
import Logo from '../assets/Logo.png';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addSignup } from '../Api/Connection';
import { useNavigate } from 'react-router-dom';
import Product from './User/Product';
import { toast } from 'react-toastify';

function Registration() {
  const navigate=useNavigate()
  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .required('Full Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-black rounded-lg shadow-lg">
        <a href="/">
          <img src={Logo} alt="WalkWay store" className="h-16 w-16" />
        </a>

        <Formik
          initialValues={{
            userName: '',
            email: '',
            password: '',
            cart:[],
            orders:[],
            address:[]
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            try{
              addSignup(values)
            .then(()=>navigate('/login'))
            .catch((error)=>{
              console.log("SignUp Failed:",error.response.data);
              toast.error('This email is already registered',{position:'top-center'})
            });
            }catch(error){
              console.log('Unexpected error',error);
              
            }
          }}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <label className="block text-white text-sm font-medium mb-2"htmlFor="userName"> UserName</label>
                <Field
                  id="userName"
                  name="userName"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="mb-4">
                  <label className="block text-white text-sm font-medium mb-2"htmlFor="email"> Email </label>
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
                  className="text-red-500 text-xs  mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-white text-sm font-medium mb-2" htmlFor="password">Password</label>
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
                  className="text-red-500 text-xs  mt-1"
                />
              </div>
              <button type="submit" className="w-full py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300">Register</button>
            </Form>
          )}
        </Formik>

        <p className="mt-4 text-center text-white text-sm">Already have an account?{' '}
          <a href="/login" className="text-gray-400 hover:underline">Login</a></p>
      </div>
    </div>
  );
}

export default Registration;
