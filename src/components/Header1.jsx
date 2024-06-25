import React from 'react'

const Header1 = () => {
  return (
    <header className="bg-white px-16 flex  items-center py-3 border font-medium text-[#888888] text-base w-full">
        <div className='flex items-center '>
            <ul className='flex space-x-12 items-center'>
                <li className='text-[#DC4A2D] font-bold underline underline-offset-[16px]'>Job preview</li>
                <li>Applicants</li>
                <li>Match</li>
                <li>Messages</li>

            </ul>
        </div>
    </header>
  )
}

export default Header1