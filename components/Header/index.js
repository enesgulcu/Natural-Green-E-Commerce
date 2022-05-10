import React from 'react'
import TopBar from './TopBar/index.js'
import Logo from './Logo/index.js'
import Search from './Search/index.js'
import WidgetGroup from './WidgetGroup/index.js'
import Modal from './Modal/index.js'

export default function index() {
  return (
    <header>
    <Modal/>
        <TopBar/>
        <section className='mt-3'>
          <div className='container border-b pb-5 mx-auto p-2 flex justify-between items-center'>
            <Logo/>
            <Search/>
            <WidgetGroup/>
          </div>          
        </section>
    </header>
  )
}