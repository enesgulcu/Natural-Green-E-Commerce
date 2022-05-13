import React from 'react'
import Menu from './Menu'
import InfoGroup from './InfoGroup'
export default function index() {
  return (
    <section className='px-6 container mx-auto lg:flex justify-between items-center hidden'>
        <Menu/>
        <InfoGroup/>

    </section>
  )
}

