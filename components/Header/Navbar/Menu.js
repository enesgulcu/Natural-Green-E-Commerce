import React from 'react'
import Link from 'next/link'
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Menu() {
  return (
    <nav>
        <ul className='flex justify-center items-center text-md font-medium gap-x-6'>
            <li className='flex items-center'>
                <Link href="/">Home</Link>
            </li>
            <li className='flex items-center'>
                <Link href="#">Shop</Link>
                <MdKeyboardArrowDown size={20}/>
            </li>
            <li className='flex items-center relative'>
                <Link href="#">Categories</Link>
                <MdKeyboardArrowDown size={20}/>
                <div className='hidden bg-white shadow md:block absolute top-10 w-[20rem]  md:w-[35rem] lg:w-[45rem] rounded py-2 px-4'>
                <div className=' md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                    <ul>                    
                        <h2 className='border-b border-primary p-3 mb-6'>Vegetables</h2>
                        <div className='border-l border-gray-200 pl-3'>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                        </div>
                    </ul>
                    <ul>                    
                        <h2 className='border-b border-primary p-3 mb-6'>Vegetables</h2>
                        <div className='border-l border-gray-200 pl-3'>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                        </div>
                    </ul> 
                    <ul>                    
                        <h2 className='border-b border-primary p-3 mb-6'>Vegetables</h2>
                        <div className='border-l border-gray-200 pl-3'>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                        </div>
                    </ul> 
                    <ul>                    
                        <h2 className='border-b border-primary p-3 mb-6'>Vegetables</h2>
                        <div className='border-l border-gray-200 pl-3'>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                        </div>
                    </ul> 
                    <ul>                    
                        <h2 className='border-b border-primary p-3 mb-6'>Vegetables</h2>
                        <div className='border-l border-gray-200 pl-3'>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                        </div>
                    </ul> 
                    <ul>                    
                        <h2 className='border-b border-primary p-3 mb-6'>Vegetables</h2>
                        <div className='border-l border-gray-200 pl-3'>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                        </div>
                    </ul> 
                    <ul>                    
                        <h2 className='border-b border-primary p-3 mb-6'>Vegetables</h2>
                        <div className='border-l border-gray-200 pl-3'>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                        </div>
                    </ul> 
                    <ul>                    
                        <h2 className='border-b border-primary p-3 mb-6'>Vegetables</h2>
                        <div className='border-l border-gray-200 pl-3'>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                        <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                        </div>
                    </ul>                     
                </div>                    
                </div>
            </li>
            <li className='flex items-center'>
                <Link href="#">Blog</Link>
                <MdKeyboardArrowDown size={20}/>
            </li>
            <li className='flex items-center'>
                <Link href="#">About Us</Link>
                <MdKeyboardArrowDown size={20}/>
            </li>
        </ul>
    </nav>
  )
}
