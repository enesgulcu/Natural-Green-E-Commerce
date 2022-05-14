import React from 'react'
// icons
import { IoHome } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
import { MdKeyboardArrowRight} from "react-icons/md";
import { HiOutlineMinusSm } from "react-icons/hi";
// Animation
import { motion, AnimatePresence } from "framer-motion";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {showMenuSidebar} from "../../../redux/states/header/topBar/topBar.js";
// Next
import Link from 'next/link';
//Components
import Logo from '../Logo';
import InfoGroup from '../Navbar/InfoGroup.js'

export default function MenuSidebar() {
    const dispatch = useDispatch();
    const showMenuSidebarCheck = useSelector((state) => state.topBar.menuSidebar);

  return (
    <div className='relative'>
    <AnimatePresence className="relative">
    {showMenuSidebarCheck &&(
        <motion.div className='relative z-40'
        initial={{opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0,  x: -400}}
        transition={{duration: 0.5 }}
        >
        
        <div className='fixed w-screen h-screen z-20'>
            <div className='flex flex-col w-[20rem] h-full left-0 bg-white absolute z-30 '> 
                <div onClick={()=> dispatch(showMenuSidebar())} className='bg-white p-3 rounded-full inline-block -right-6 top-3 shadow-lg hover:bg-primary cursor-pointer hover:text-white ease-in-out duration-300  absolute z-30'>
                    <VscChromeClose size={24}/>
                </div>

                <div className='container flex justify-center items-center mx-auto p-6 border-b'>
                    <Logo/> 
                </div>
                <ul className='text-lg font-medium px-6 py-2 text-gray-800 border-b pb-6 h-screen overflow-x-hidden overflow-y-scroll'>
                    <Link href="/">
                    <>                                           
                        <li className='group flex justify-between items-center p-2 hover:bg-gray-100 ease-in-out duration-300 hover:rounded'>
                            <div className='flex items-center gap-x-2 ease-in-out duration-300 group-hover:text-primary'>
                                <IoHome/> Home
                            </div>
                            <div>
                                <MdKeyboardArrowRight size={25} className="group-hover:rotate-90 ease-in-out duration-300 group-hover:text-primary"/>
                            </div>
                        </li>
                        <ul className='font-normal px-10 mt-2 overflow-y-scroll h-44 mb-4'>
                            <Link href="#">
                                <li className='hover:bg-gray-100 rounded p-1 cursor-pointer flex items-center gap-x-2 group'> <HiOutlineMinusSm className='group-hover:rotate-90 ease-in-out duration-300 group-hover:text-primary'/> asdasdasd</li>
                            </Link>
                            <Link href="#">
                                <li className='hover:bg-gray-100 rounded p-1 cursor-pointer flex items-center gap-x-2 group'> <HiOutlineMinusSm className='group-hover:rotate-90 ease-in-out duration-300 group-hover:text-primary'/> asdasdasd</li>
                            </Link>
                            <Link href="#">
                                <li className='hover:bg-gray-100 rounded p-1 cursor-pointer  flex items-center gap-x-2 group'> <HiOutlineMinusSm className='group-hover:rotate-90 ease-in-out duration-300 group-hover:text-primary'/> asdasdasd</li>
                            </Link>
                            <Link href="#">
                                <li className='hover:bg-gray-100 rounded p-1 cursor-pointer  flex items-center gap-x-2 group'> <HiOutlineMinusSm className='group-hover:rotate-90 ease-in-out duration-300 group-hover:text-primary'/> asdasdasd</li>
                            </Link>
                            <Link href="#">
                                <li className='hover:bg-gray-100 rounded p-1 cursor-pointer   flex items-center gap-x-2 group'> <HiOutlineMinusSm className='group-hover:rotate-90 ease-in-out duration-300 group-hover:text-primary'/> asdasdasd</li>
                            </Link>
                            <Link href="#">
                                <li className='hover:bg-gray-100 rounded p-1 cursor-pointer   flex items-center gap-x-2 group'> <HiOutlineMinusSm className='group-hover:rotate-90 ease-in-out duration-300 group-hover:text-primary'/> asdasdasd</li>
                            </Link>
                            <Link href="#">
                                <li className='hover:bg-gray-100 rounded p-1 cursor-pointer   flex items-center gap-x-2 group'> <HiOutlineMinusSm className='group-hover:rotate-90 ease-in-out duration-300 group-hover:text-primary'/> asdasdasd</li>
                            </Link>
                            <Link href="#">
                                <li className='hover:bg-gray-100 rounded p-1 cursor-pointer   flex items-center gap-x-2 group'> <HiOutlineMinusSm className='group-hover:rotate-90 ease-in-out duration-300 group-hover:text-primary'/> asdasdasd</li>
                            </Link>
                        </ul>
                    </>
                    </Link>

                </ul>                
                <InfoGroup mobileVisible={false}/>
                <h4 className='text-center p-4'>All Rights Reserved by <span className='text-primary font-medium hover:cursor-pointer hover:underline'>Enes Gülcü</span></h4> 
            </div>
        </div>
        </motion.div>
    )}    
        
    </AnimatePresence>

    <AnimatePresence >
    {showMenuSidebarCheck &&(
        <motion.div className="absolute w-full h-screen top-0 z-30"
        initial={{opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{duration: 0.5 }}
        >

        <div className="bg-black bg-opacity-50 w-full h-full  "></div>
        
        </motion.div>
    )}
    </AnimatePresence>
        
    </div>   
    
  )
}

