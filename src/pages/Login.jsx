import React from 'react'
import Logo from '../assets/Logo.png'

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-black rounded-lg shadow-lg">
      <a href="/"><img src={Logo} alt="WalkWay store" className='h-16 w-16' /></a>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-white text-sm">
          Don't have an account?{' '}
          <a href="/signup" className="text-gray-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
