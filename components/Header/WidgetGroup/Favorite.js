import React from 'react'
import { MdFavorite } from "react-icons/md";
import Link from 'next/link';
export default  function Favorite() {
  return (
    <>
    <Link href="/favorite">
        <div className='bg-gray-100 relative  rounded-full p-2 hover:bg-primary hover:text-white ease-in-out duration-500 cursor-pointer'>
      <MdFavorite size={17}/>
      <div className='absolute border-2 border-white flex justify-center w-6 h-6 items-center rounded-full bg-primary  top-0 right-0 translate-x-3 -translate-y-2'>
              <span className='text-white text-xs'>9+</span>
            </div>
        </div> 
        </Link>
    </>
  )
}

