import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <>
      <Link href='/'>
      <img src="/Logo.png" style={{width:"175px", height:"45px"}} alt="" className='cursor-pointer'/>
      </Link>        
    </>
  )
}