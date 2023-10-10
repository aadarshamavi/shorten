import React from 'react'
import ThemeToggler from './ThemeToggler'

const Navbar = () => {
  return (
      <nav className='p-2'>
          <div className="container">
          <ThemeToggler />
          </div>  
    </nav>
  )
}

export default Navbar