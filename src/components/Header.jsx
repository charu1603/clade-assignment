import React from 'react';
import { PiShoppingBagOpenDuotone } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import { RiHandCoinLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import logo1 from '../assets/logo1.png';
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="bg-white shadow-sm px-6 flex justify-between items-center py-4">
      <div className="text-md text-red-600 font-bold bg-gray-300 py-2 px-3">Logo</div>
      <nav>
        <ul className="flex font-normal  border border-gray-300 space-x-12 text-sm  rounded-full p-1 justify-end shadow-md shadow-[#D1D1D1] ml-10">
          <li className='flex items-center justify-center bg-[#DC4A2D] text-white p-3 rounded-full border-2 border-[#FCB4A5] '><span className='mr-1 text-lg'><PiShoppingBagOpenDuotone /><span/></span> Jobs</li>
          <li className='flex items-center justify-center p-2 rounded-full text-[#B0B0B0] '><span className='mr-2 text-lg relative'> <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-1 h-1 flex items-center justify-center"></span><FiMessageSquare /><span/></span>Messages</li>
          <li className='flex items-center justify-center p-2 rounded-full text-[#B0B0B0]'><span className='mr-2 text-lg'><RiHandCoinLine /><span/></span>Payments</li>
        </ul>
      </nav>
      <div className="flex items-center space-x-2 justify-between">
        <div className="relative">
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-1 h-1 flex items-center justify-center"></span>
          <span className='text-lg'><FaRegBell /></span>
        </div>
       <div className='flex justify-center items-center h-8 w-8'>
       <img src={logo1} alt='logo1'></img>
  
       </div>
        
       
        <div className='text-md'> <RiArrowDropDownLine /></div>
    
       
      </div>
    </header>
  );
};

export default Header;
