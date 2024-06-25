import React from 'react';
import logo2 from '../assets/logo2.png';

const CompanyInfo = () => {
  return (
    <section className="px-20 py-8 bg-white border-r border-gray-300">
      <div className="flex items-center space-x-2 mb-4">
        <div className="rounded-full">
         <img src={logo2}></img>
        </div>
        <div>
          <h3 className="text-sm font-medium">Atlassian</h3>
         
        </div>
      </div>
      <div className='flex space-x-8'>
      <ul className="flex flex-col text-xs font-medium space-y-4">
        <li className='text-gray-500'>Company size<br></br><span className='text-black'>1k - 2k Employees</span></li>
        <li className='text-gray-500'>Sector<br></br> <span className='text-black'>Information Technology, Infrastructure</span></li>
        <li className='text-gray-500'>Founded in<br></br><span className='text-black'> 2019</span></li>
        </ul>
        <ul className="flex flex-col text-xs font-medium space-y-4">
       
        <li className='text-gray-500'>Type<br></br><span className='text-black'> Private</span></li>
        <li className='text-gray-500'>Funding<br></br> <span className='text-black'>Bootstrapped</span></li>
        <li className='text-gray-500'>Founded by<br></br> <span className='text-black'>Scott Farquhar, Mike Cannon-Brookes</span></li>
       
      </ul></div>
    </section>
  );
};

export default CompanyInfo;
