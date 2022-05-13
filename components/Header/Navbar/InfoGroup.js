import React from 'react'
import Link from 'next/link'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
export default function InfoGroup() {
  return (
    <>        
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
    </>
  )
}

