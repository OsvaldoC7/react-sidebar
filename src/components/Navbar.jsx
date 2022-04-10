import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'

export default function Navbar() {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div className="bg-gray-900 h-[80px] flex justify-start items-center">
        <Link to='#' className="ml-8 text-[2rem] text-white">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar 
        ? 'bg-gray-900 w-64 h-screen flex justify-center fixed top-0 left-0 duration-[350ms]' 
        : 'bg-gray-900 w-64 h-screen flex justify-center fixed top-0 -left-full duration-[850ms]'
      }>
        <ul className='w-full'>
          <li className='bg-gray-900 w-full h-20 flex justify-start items-center'>
            <Link to='#' className='no-underline text-white text-[2rem] flex items-center pl-8' onClick={showSidebar}>
              <FaIcons.FaTimes />
            </Link>
          </li>
          {SidebarData.map(( item, index ) => {
            return (
              <li key={index} className='flex justify-start items-center py-2 pr-0 pl-4 list-none h-16'>
                <Link to={item.path} className='no-underline text-white text-lg w-[95%] h-full flex items-center py-0 px-4 rounded-md bg-gray-800 hover:bg-indigo-600' onClick={showSidebar}>
                  {item.icon}
                  <span className='ml-4'>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
