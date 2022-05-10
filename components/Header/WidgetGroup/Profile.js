import React from 'react'
import { FaUserAlt } from "react-icons/fa";

export default function Profile() {
  return (
    <>
    <div className='bg-gray-100  rounded-full p-2 hover:bg-primary hover:text-white ease-in-out duration-500 cursor-pointer'>
      <FaUserAlt size={17} />      
    </div>        
    </>
  )
}