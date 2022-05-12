import React from 'react'
import { IoIosSearch } from "react-icons/io";

export default function index() {
  return (
    <>      
    <div className="relative z-10 w-full mx-10 text-gray-600   hover:text-primary items-center flex">
        
          <IoIosSearch className={`absolute right-0  mr-2 ease-in-out duration-300 pointer-events-none`} size={25}/>            
        
        <input type="search" id="default-search" className="block p-3.5 pr-10 w-full text-sm text-gray-900 bg-gray-100 rounded-lg   ease-in-out duration-300 outline-0  focus:ring-2 focus:ring-primary hover:ring-2 hover:ring-primary" placeholder="Search Anything..."/>        
    </div>
    </>
  )
}

 