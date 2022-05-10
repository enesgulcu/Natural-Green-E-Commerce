import React, {useState} from 'react'
import { FaShoppingBasket } from "react-icons/fa";
export default function Modal() {

    const [data, setData] = useState([
        {
            id:1,
            name:"Existing Product Name",
            price:14.25222222,
            image:"https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg"
        },
        {
            id:2,
            name:"Existing Product Name",
            price:60.90,
            image:"https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg"
        },
        {
            id:3,
            name:"Existing Product Name",
            price:40.00,
            image:"https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg"
        },
        {
            id:4,
            name:"Existing Product Name",
            price:20.50,
            image:"https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg"
        },
])

 


  return (
    <div className='fixed w-screen h-screen bg-black bg-opacity-50 z-20'>
        <div className='w-[450px] h-full right-0 bg-white absolute z-30 '> 
        <div className='flex justify-center items-center gap-x-1 text-primary font-semibold mt-5'>
            <FaShoppingBasket size={20}/> 
            <h1 className='text-lg '>Basket ({data.length})</h1>
        </div>       
        <ul className='overflow-x-hidden overflow-y-scroll'>
            {data.map((product)=>                   
               <li key={product.id} className="flex justify-around items-center border-t my-5">
                    <img src={product.image} alt="resim" className='w-28'/>
                    <div className='flex items-start flex-col justify-center'>
                        <h3>{product.name}</h3>
                        <h3 className='text-sm text-gray-600'>Unit price: {product.price}$</h3>
                        <div className='flex justify-center gap-2 text-primary mt-4'>
                            <button className='bg-gray-100 py-1 px-3 rounded'>-</button>
                            <input type="number" className='w-10 bg-gray-100 text-center appearance-none rounded'/>
                            <button className='bg-gray-100 py-1 px-3 rounded'>+</button>
                        </div>                            
                    </div>
                    <div className='flex flex-col justify-end'>
                        <h3 className='text-primary font-bold'>${product.price*2}</h3>
                    </div> 
                </li> 
            )}
        </ul>         
            
        <button className='w-1/2 mx-auto block  bg-primary' >Click!</button>
        </div>
    </div>
  )
}

