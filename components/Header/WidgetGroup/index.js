import React from 'react'
import Profile from './Profile'
import Basket from './Basket'
import Favorite from './Favorite'

export default function index() {
  return (
    <>
      <div className='flex relative justify-between w-40 p-2 gap-x-4 mr-3 z-5'>    
        <Profile/>
        <Favorite/>
        <Basket/>
      </div>
    </>
  )
}

