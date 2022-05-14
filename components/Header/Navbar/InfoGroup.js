import React from 'react'
import Link from 'next/link'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
export default function InfoGroup({mobileVisible}) {
  return (
    <> {mobileVisible ?         
      <div className='flex items-center justify-between gap-3'>
        <MdOutlinePhoneIphone size={35} className="text-primary"/>
        <div className='mr-10 '>
        <h3>Call Us</h3> 
          <Link href="/">
              <h3 className='font-medium cursor-pointer hover:text-primary ease-in-out duration-300 '>(+880) 183 8288 389</h3>
          </Link>
        </div>
        <RiMailSendLine size={35} className="text-primary"/>
        <div>
        <h3>Email Us</h3>
          <Link href="/">
            <h3 className='font-medium cursor-pointer hover:text-primary ease-in-out duration-300'>support@example.com</h3>
          </Link>
        </div>
      </div>

      : //if false => run below code.

      <div className='flex flex-col items-center justify-between gap-3  border-b p-4'>
        
        <div className=' flex pr-4 items-center gap-x-4 mx-auto'>
        <MdOutlinePhoneIphone size={40} className="text-primary"/>
          <div>
          <h3>Call Us</h3> 
            <Link href="/">
                <h3 className='font-medium cursor-pointer hover:text-primary ease-in-out duration-300 '>(+880) 183 8288 389</h3>
            </Link>
          </div>        
        </div>
        
        <div className=' flex items-center gap-x-3 mx-auto'>
        <RiMailSendLine size={40} className="text-primary"/>
          <div>
          <h3>Email Us</h3> 
            <Link href="/">
                <h3 className='font-medium cursor-pointer hover:text-primary ease-in-out duration-300 '>support@example.com</h3>
            </Link>
          </div>        
        </div>
      </div>
    }            
    </>
  )
}

