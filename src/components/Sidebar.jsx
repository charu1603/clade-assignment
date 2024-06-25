import React from 'react';
import { LuUsers } from "react-icons/lu";
import { GrUserExpert } from "react-icons/gr";
import { LuMessageSquare } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="p-6 bg-white text-xs font-medium">
      <div className="mb-4 flex justify-between space-x-4">
        <button className="border-red-500 border text-red-600 font-medium bg-red-50 text-xs  py-2 px-4 rounded-md w-full flex items-center justify-center"><MdOutlineDeleteOutline />  Delete Job</button>
        <button className="bg-red-500 text-white border-2 border-red-50 font-medium text-xs py-2 px-4 rounded-md w-full flex items-center justify-center"><FiEdit2 /> Edit Job</button>
      </div>
      <div className="">
        <div className="flex justify-between p-4 border-b">
          <span className='flex items-center text-gray-700'><span className='mr-2 text-sm'><LuUsers /></span>Applicants</span>
          <span className='text-base font-bold'>400</span>
        </div>
        <div className="flex justify-between p-4 border-b">
          <span className='flex items-center text-gray-700'><span className='mr-2 text-sm'><GrUserExpert /></span>Matches</span>
          <span className='text-base font-bold'>100</span>
        </div>
        <div className="flex justify-between p-4 border-b">
          <span className='flex items-center text-gray-700'><span className='mr-2 text-sm'><LuMessageSquare /></span> Messages</span>
          <span className='text-base font-bold'>147</span>
        </div>
        <div className="flex justify-between p-4 border-b">
          <span className='flex items-center text-gray-700'><span className='mr-2 text-sm'><LuEye /></span> Views</span>
          <span className='text-base font-bold'>800</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
