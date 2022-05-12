import React, {useState} from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { IoTrashOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {showBasketDropDown} from "../../../redux/states/header/topBar/topBar.js";
export default function Modal() {
    const dispatch = useDispatch();
    const basketDropDownCheck = useSelector((state) => state.topBar.basketDropDown);


    const [data, setData] = useState([
        {
            id:1,
            name:"Existing Product Name",
            price:14.22,
            image:"https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg"
        },
        {
            id:2,
            name:"Existing Product Name",
            price:12.90,
            image:"https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg"
        },
        {
            id:3,
            name:"Existing Product Name",
            price:50.00,
            image:"https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg"
        },
        {
            id:4,
            name:"Existing Product Name",
            price:20.50,
            image:"https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg"
        },
        {
            id:5,
            name:"Existing Product Name",
            price:20.50,
            image:"https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg"
        },
        {
            id:6,
            name:"Existing Product Name",
            price:20.50,
            image:"https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg"
        },
        {
            id:7 ,
            name:"Existing Product Name",
            price:20.50,
            image:"https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg"
        },
])


  return (
    <div className='relative'>
    <AnimatePresence className="relative">
    {basketDropDownCheck &&(
        <motion.div className='relative z-40'
        initial={{opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0,  x: -400}}
        transition={{duration: 0.5 }}
        >
        
        <div className='fixed w-screen h-screen z-20'>
        <div className='w-[30rem] h-full right-0 bg-white absolute z-30 '> 
        <div onClick={()=> dispatch(showBasketDropDown())} className='bg-white p-3 rounded-full inline-block -left-6 top-3  shadow-lg hover:bg-primary cursor-pointer hover:text-white ease-in-out duration-300  absolute z-30'>
            <VscChromeClose size={24}/>
        </div>
        <div className='flex justify-center items-center gap-x-1 text-primary font-semibold my-5'>
            <FaShoppingBasket size={20}/> 
            <h1 className='text-lg'>Basket ({data.length})</h1>
        </div>       
        <ul className='overflow-x-hidden overflow-y-scroll flex flex-col justify-start px-6' style={{maxHeight: "calc(100vh - 177px)"}}>
            {data.map((product)=>                   
               <li key={product.id} className="flex justify-start items-center gap-x-5 border-t mb-5 pt-4">
                    
                    <div className='relative group'>
                        <div className='scale-0 group-hover:scale-100 ease-in-out duration-500 absolute w-full h-full flex justify-center items-center bg-black bg-opacity-20 rounded'>
                        <IoTrashOutline className='text-red-600 ease-in-out duration-500 hover:bg-red-600 hover:text-white bg-white p-2 rounded cursor-pointer' size={40}/>
                        </div>                        
                        <img src={product.image} alt="resim" className='w-28'/>
                    </div>                    

                    <div className='flex justify-between items-center gap-x-6'>
                    <div className='flex items-start flex-col justify-center'>
                        <h3>{product.name}</h3>
                        <h3 className='text-sm text-gray-600'>Unit price: {product.price}$</h3>
                        <div className='flex justify-center gap-2 text-primary mt-4 '>
                            <button className='bg-gray-100 py-1 px-3 rounded'>-</button>
                            <input type="number" className='w-10 bg-gray-100 text-center appearance-none rounded'/>
                            <button className='bg-gray-100 py-1 px-3 rounded'>+</button>
                        </div>                            
                    </div>

                    <div className='flex flex-col justify-end'>
                        <h3 className='text-primary font-bold'>${product.price*2}</h3>
                    </div>
                    </div>

                </li> 
            )}
        </ul>         
            <div className='bottom-0 absolute w-full border-t pt-8  py-6 flex flex-col gap-6 justify-center items-center shadow-md' style={{boxShadow: "0px -3px 7px 0px rgb(0 0 0 / 8%)"}}>
                <button className='w-10/12 text-white rounded-lg py-3  mx-auto bg-primary flex justify-between px-10 text-lg' >            
                        <p>Proceed to Checkout</p>
                        <p className='border-l-2 pl-5'>{data.map(product => product.price).reduce((prev, curr) => prev + curr, 0)}</p>            
                </button>
            </div>  
        </div>
        </div>
        </motion.div>
    )}    
        
    </AnimatePresence>

    <AnimatePresence >
    {basketDropDownCheck &&(
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

