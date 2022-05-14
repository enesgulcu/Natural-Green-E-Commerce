import React, {useState} from 'react'
import TopBar from './TopBar/index.js'
import Logo from './Logo/index.js'
import Search from './Search/index.js'
import WidgetGroup from './WidgetGroup/index.js'
import Modal from './Modal/index.js'
import Navbar from './Navbar/index.js'
import { VscChromeClose } from "react-icons/vsc";
import useWindowDimensions from '../../hooks/useWindowDimensions.js'
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import MenuSidebar from "./MenuSidebar/index"
import { useSelector, useDispatch } from "react-redux";
import {showMenuSidebar} from "../../redux/states/header/topBar/topBar.js";
export default function Index() {

  const [showSearch, setShowSearch] = useState(false);
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  return (
    <header>
    <MenuSidebar/>
    <Modal/>
        <TopBar/>
        <section className='mt-3 px-6'>
        {width >= 1024 &&
          <div className='container border-b pb-5 mx-auto p-2 flex justify-between items-center'>
            <Logo/>
            <Search/>
            <WidgetGroup/>
          </div>
        } 
        {width < 1024 &&
          <>
          <div className='container lg:border-b pb-5 mx-auto px-6 flex justify-between items-center'>
              
              <div className='bg-gray-100 p-2 rounded-full hover:text-white hover:bg-primary group ease-in-out duration-300 cursor-pointer'>
                <HiMenuAlt2 size={40} onClick={()=>dispatch(showMenuSidebar())} className="group-hover:rotate-180"/>
              </div>
              <Logo/>
              <div onClick={()=>setShowSearch(!showSearch)} className='text-gray-500 bg-gray-100  rounded-full p-3 hover:bg-primary hover:text-white ease-in-out duration-500 cursor-pointer relative'>
              {showSearch ?   <VscChromeClose size={25}/> : <IoIosSearch size={25}/>}  
              </div>
            </div>
            <div className='flex justify-center mx-auto container mt-4'>
            {showSearch && <Search/>}
            </div>            
          </>
        }         
        </section>
        <Navbar/>

    </header>
  )
}