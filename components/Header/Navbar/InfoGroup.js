import React from 'react'
import Link from 'next/link'
export default function InfoGroup() {
  return (
    <>
        <ul className='flex gap-x-6'>
            <li>
                <Link href="#">Phone</Link>
            </li>
            <li>
                <Link href="#">Mail</Link>
            </li>
        </ul>
    </>
  )
}

