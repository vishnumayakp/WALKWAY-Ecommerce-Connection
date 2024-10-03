import React from 'react';

function AdminHeader({ isSidebarOpen }) {
  return (
    <div>
      <nav
        className={`bg-white border-b border-gray-200 fixed w-[100%] z-50  top-0 h-16 flex justify-between items-center px-4 transition-all duration-300 ${
          isSidebarOpen ? 'left-64' : 'left-50'
        } w-full`}
      >
        <div className="text-lg  font-bold">Dashboard</div>
        <div className="flex items-center ">
          <div className="relative mr-10 ">

            <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 z-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a7.002 7.002 0 00-5-6.708V4a2 2 0 10-4 0v.292A7.002 7.002 0 004 11v3.159c0 .538-.214 1.055-.595 1.437L2 17h5m3 0v1a3 3 0 106 0v-1m-6 0h6"
              />
            </svg>
          </div>
          <div className="flex items-center mr-72 space-x-2">

            <span>Admin</span>
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminHeader;
