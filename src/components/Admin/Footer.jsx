import React from 'react'
import { HiOutlinePhone } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <footer class="bg-white text-gray-600 p-3 text-sm">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center">
    
    <div class="text-center md:text-left">
      <h1 class="text-lg font-semibold">WALKWAY</h1>
      <p class="text-xs">&copy; 2024 All Rights Reserved</p>
    </div>
    
    <div class="flex  space-x-4 mt-4  md:mt-0">
      <a href="#" class="hover:text-gray-800 flex items-center"><HiOutlinePhone />9526790841</a>
      <a href="#" class="hover:text-gray-800 flex items-center"><IoMdMail />supportwalkway@gmail.com</a>
    </div>
    
  </div>
</footer>


  )
}

export default Footer
