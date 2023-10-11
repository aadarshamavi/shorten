import React from 'react'
import ThemeToggler from './ThemeToggler'
import Link from 'next/link'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className='p-2'>
      <div className="container flex items-center justify-end space-x-3">
        <Link href={"/link/decoder"} className='font-semibold'>
          <Button variant={'link'}>
          Decoder
          </Button>
        </Link> 
        <ThemeToggler />
      </div>
    </nav>
  )
}

export default Navbar