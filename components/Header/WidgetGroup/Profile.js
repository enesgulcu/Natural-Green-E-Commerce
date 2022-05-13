import React from 'react'
import { FaUserAlt } from "react-icons/fa";

export default function Profile() {
  return (
    <>
    <div className='text-gray-500  bg-gray-100  rounded-full p-3 hover:bg-primary hover:text-white ease-in-out duration-500 cursor-pointer'>
      <FaUserAlt size={20} />      
    </div>        
    </>
  )
}