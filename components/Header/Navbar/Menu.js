import React from 'react'
import Link from 'next/link'
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Menu() {
  return (
    <nav>
        <ul className='flex justify-center items-center text-md gap-x-6 font-medium'>
            <li className='flex item-center py-6'>
                <Link href="/">Home</Link>
            </li>
            <li className='flex items-center relative group py-6'>
                <Link href="#" >
                    <a className='group-hover:text-primary'>Shop</a>
                </Link>
                <MdKeyboardArrowDown size={20} className="mt-0.5 group-hover:rotate-180 ease-in-out duration-300 group-hover:text-primary "/>
            </li>
            <li className=' flex items-center relative group cursor-pointer py-6'>
                <Link href="#" >
                    <a className='group-hover:text-primary'>Categories</a>
                </Link>
                <MdKeyboardArrowDown size={20} className="mt-0.5 group-hover:rotate-180 ease-in-out duration-300 group-hover:text-primary "/>
                <div className='flex  cursor-default'>         
                    <div className=' overflow-y-scroll overflow-x-hidden h-[35rem] hidden bg-white shadow absolute translate-y-[2rem] -translate-x-[7rem] w-[20rem]  md:w-[35rem] lg:w-[55rem] rounded py-2 px-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 font-normal md:group-hover:grid'>                
                        <ul>                    
                            <h2 className='border-b border-primary p-3 mb-6 font-medium'>Vegetables</h2>
                            <div className='border-l border-gray-200 pl-3'>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                            </div>
                        </ul>
                        <ul>                    
                            <h2 className='border-b border-primary p-3 mb-6 font-medium'>Vegetables</h2>
                            <div className='border-l border-gray-200 pl-3'>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                            </div>
                        </ul>  
                        <ul>                    
                            <h2 className='border-b border-primary p-3 mb-6 font-medium'>Vegetables</h2>
                            <div className='border-l border-gray-200 pl-3'>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                            </div>
                        </ul>  
                        <ul>                    
                            <h2 className='border-b border-primary p-3 mb-6 font-medium'>Vegetables</h2>
                            <div className='border-l border-gray-200 pl-3'>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                            </div>
                        </ul>  
                        <ul>                    
                            <h2 className='border-b border-primary p-3 mb-6 font-medium'>Vegetables</h2>
                            <div className='border-l border-gray-200 pl-3'>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                            </div>
                        </ul>  
                        <ul>                    
                            <h2 className='border-b border-primary p-3 mb-6 font-medium'>Vegetables</h2>
                            <div className='border-l border-gray-200 pl-3'>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                            </div>
                        </ul>  
                        <ul>                    
                            <h2 className='border-b border-primary p-3 mb-6 font-medium'>Vegetables</h2>
                            <div className='border-l border-gray-200 pl-3'>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                            </div>
                        </ul>  
                        <ul>                    
                            <h2 className='border-b border-primary p-3 mb-6 font-medium'>Vegetables</h2>
                            <div className='border-l border-gray-200 pl-3'>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                            </div>
                        </ul>  
                        <ul>                    
                            <h2 className='border-b border-primary p-3 mb-6 font-medium'>Vegetables</h2>
                            <div className='border-l border-gray-200 pl-3'>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Carrot</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Broccoli</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Asparagus</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Cauliflower</li></Link>
                            <Link href="#"><li className='mt-1.5 hover:bg-gray-100 hover:text-primary p-1 cursor-pointer rounded ease-in-out duration-300'>Eggplant</li></Link>
                            </div>
                        </ul>  
                        <ul>                    
                            <h2 className='border-b border-primary p-3 mb-6 font-medium'>Vegetables</h2>
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
            <li className='flex items-center relative group py-6'>
            <Link href="#" >
                    <a className='group-hover:text-primary'>Blog</a>
                </Link>
                <MdKeyboardArrowDown size={20} className="mt-0.5 group-hover:rotate-180 ease-in-out duration-300 group-hover:text-primary "/>
            </li>
            <li className='flex items-center relative group py-6'>
                <Link href="#" >
                    <a className='group-hover:text-primary'>About Us</a>
                </Link>
                <MdKeyboardArrowDown size={20} className="mt-0.5 group-hover:rotate-180 ease-in-out duration-300 group-hover:text-primary "/>
            </li>
        </ul>
    </nav>
  )
}
