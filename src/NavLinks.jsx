import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = ({ linkName, linkPath }) => {
  return (
    <>
        <li className='inline-block mr-7'>
            <Link to={linkPath} className='font-medium transition-all hover:text-cyan-700 hover:translate-y-1 relative before:absolute before:w-0 before:bottom-0 before:h-1 before:bg-cyan-500 before:transition-all hover:before:w-full' >{linkName}</Link>
        </li>
    </>
  )
}

export default NavLinks