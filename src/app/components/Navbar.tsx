'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { ModeToggle } from "./ModeToggle"
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className='w-full fixed top-0 z-50 bg-background'>
        <div className='relative mt-3 flex items-center justify-around'>
          <Link href="/" className='font-bold text-2xl'>
            Tayyab<span className='text-blue-500'>Blog</span>
          </Link>

          {/* Hamburger Menu Button - Only visible on mobile */}
          <button 
            className='lg:hidden z-50 ml-auto mr-4'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 hover:text-blue-500 transition-colors" />
            ) : (
              <Menu className="h-6 w-6 hover:text-blue-500 transition-colors" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className='hidden lg:block'>
            <ul className='flex gap-16'>
              <Link href="/"><li className="hover:text-blue-500 transition-colors">Home</li></Link>
              <Link href="/Blogs"><li className="hover:text-blue-500 transition-colors">Blog</li></Link>
              <Link href="/"><li className="hover:text-blue-500 transition-colors">About</li></Link>
              <Link href="/"><li className="hover:text-blue-500 transition-colors">Contact</li></Link>
            </ul>
          </div>

          <div className='hidden lg:block'>
            <ModeToggle />
          </div>
          
          {/* Mobile ModeToggle */}
          <div className='lg:hidden'>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          lg:hidden
          absolute top-full left-0 right-0
          bg-background/95 backdrop-blur-sm
          shadow-lg
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-64 py-4' : 'max-h-0 py-0'}
        `}>
          <ul className='flex flex-col items-center gap-4'>
            <Link href="/" onClick={() => setIsMenuOpen(false)}><li className="hover:text-blue-500 transition-colors transform hover:scale-110 duration-200">Home</li></Link>
            <Link href="/Blogs" onClick={() => setIsMenuOpen(false)}><li className="hover:text-blue-500 transition-colors transform hover:scale-110 duration-200">Blog</li></Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)}><li className="hover:text-blue-500 transition-colors transform hover:scale-110 duration-200">About</li></Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)}><li className="hover:text-blue-500 transition-colors transform hover:scale-110 duration-200">Contact</li></Link>
          </ul>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <main className={`
        transition-all duration-300 ease-in-out pt-16
        ${isMenuOpen ? 'mt-64' : 'mt-0'}
      `}>
        {/* Your hero section and other content goes here */}
      </main>
    </>
  )
}

export default Navbar