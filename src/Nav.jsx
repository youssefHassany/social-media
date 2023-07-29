import React from 'react'
import NavLinks from './NavLinks'

const Nav = () => {
  return (
    <nav className='w-full bg-gray-200 shadow flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between items-center sticky top-0 p-3'>
      <p className='text-cyan-600 text-3xl font-bold'>Social Media</p>

        <ul>
          <NavLinks linkName="Feed" linkPath="/" />
          <NavLinks linkName="Friends" linkPath="/friends" />
          <NavLinks linkName="About" linkPath="/about" />
        </ul>
    </nav>
  )
}

export default Nav