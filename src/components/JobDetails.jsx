import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { BsDatabaseUp } from "react-icons/bs";
import logo3 from '../assets/xd.png';
import logo4 from '../assets/adobe.png';
import figma from '../assets/figma.png';

const JobDetails = () => {
  return (
    <section className="py-6 bg-white border text-sm ">
        <div className='flex flex-col border-b border-gray-300 px-20 py-1 justify-start'>
            <div className='flex space-x-2 font-medium'>
      <h2 className="text-2xl font-bold mb-2">Senior Product Designer </h2>
      <span className='h-1 w-1 bg-gray-300 rounded-full mt-4'></span>
     <span className="ml-4 text-gray-500 text-xs mt-2">posted 2 days ago</span>
        <div className=" flex items-center justify-center"><button className='text-[10px] font-medium'><span className='bg-green-100 px-1 rounded-full border border-green-300 text-green-600 '>Open</span></button></div>
        </div>
   
      <div className="text-[#5D5D5D]  mb-4 flex items-center pt-2 font-medium text-base space-x-6">
      <div className='flex items-center'><span className='mr-2'><IoLocationOutline /></span> Delaware, USA </div>
      <div className='flex items-center'><span className='mr-2'><BsDatabaseUp /></span> $300k-$400k</div>
      </div>
     </div>
      <div className="flex py-6 px-20 text-xs border-b border-gray-300 ">
        <div className='flex space-x-24 '>
         <div className=''>
           <h6 className='font-medium text-gray-500 '>Skills required</h6>
            <div className='flex flex-col pt-2 space-y-2 text-[10px]'>
                <span className='flex items-center'><p className=' rounded-[5px] border border-gray-300 flex items-center mr-2 px-1'><img src={figma} className='w-3 h-3 mx-1'></img>Figma</p></span>
                <span  className='flex items-center'><p className=' rounded-[5px] border border-gray-300 flex items-center mr-2 px-1'><img src={logo4} className='w-3 h-3 mx-1'></img>Adobe Illustrator</p></span>
                <span className='flex items-center'><p className=' rounded-[5px] border border-gray-300 flex items-center mr-2 px-1'><img src={logo3} className='w-3 h-3 mx-1'></img>Adobe XD</p></span>
               
            </div>
            </div>
        <div className=''>
        <h6 className='font-medium text-gray-500'>Preferred language</h6>
            <div className='flex flex-col pt-2 '>
                <span className='font-bold'>English</span>
               
               
            </div></div>
            <div className=''>
        <h6 className='font-medium text-gray-500'>Type</h6>
            <div className='flex flex-col pt-2 '>
                <span className='font-bold'>Full-Time</span>
               
               
            </div></div>
            <div className=''>
        <h6 className='font-medium text-gray-500'>Years of Experience</h6>
            <div className='flex flex-col pt-2 '>
                <span className='font-bold'>3+ Years of experience</span>
               
               
            </div></div>
        </div>
       
      </div>
      <div className='px-20 text-xs font-medium'>
      <div className="text-xs font-semibold mb-2 text-gray-500 pt-4">About the job</div>
      <ol className="list-disc pl-4 mb-2 font-medium">
        <li>Handle the UI/UX research design</li>
        <li>Work on researching on latest web applications designs & trends</li>
        <li>Work on conceptualizing and visualizing</li>
        <li>Work on creating graphics content and other graphic related works</li>
      </ol>
      <div className="text-xs font-medium mb-1">Benefits:</div>
      <ul className="list-disc pl-6 mb-2 font-medium text-xs">
        <li>Health insurance</li>
        <li>Provident Fund</li>
      </ul>
      <div className=" font-medium mb-1">Schedule:</div>
      <ul className="list-disc pl-6 mb-2">
         <li className="mb-2 ">Day shift</li>
      </ul>
     
      <div className=" font-medium mb-1">Supplemental pay types:</div>
      <ul className="list-disc pl-6 mb-2">
        <li>Performance bonus</li>
        <li>Yearly bonus</li>
      </ul>
      <div className="">Work Location: In person</div>
      
      </div>
    </section>
  );
};

export default JobDetails;
