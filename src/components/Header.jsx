import React, { useState } from 'react'
import navbar from '../assets/navbar.svg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-full bg-transparent">
      <div className="flex flex-row md:flex-row justify-between items-center gap-4 md:gap-10 pt-3 md:p-5 sticky top-0 z-50 bg-[#121212]/80 backdrop-blur">
        {/* Navbar icon for mobile */}
        <img
          src={navbar}
          alt="Navbar"
          className="md:hidden w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
        <h2 className="text-2xl md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] to-[#E60026]">
          My Portfolio
        </h2>
        <ul className="hidden md:flex flex-nowrap justify-center md:flex-wrap space-x-1 md:space-x-5 text-[#F8F8F8] text-center">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li
              key={item}
              className="text-base md:text-[20px] font-sans hover:text-black hover:bg-amber-100 rounded-2xl w-20 md:w-24 hover:scale-110 shadow-2xl hover:shadow-amber-200 transition-transform duration-300 mb-1"
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="mt-0 md:mt-0 text-base md:text-[20px] font-semibold bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-[#FFFFFF] rounded-md w-25 md:w-30 h-8 hover:shadow-amber-600 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          Hire Me
        </button>
      </div>
      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#121212] z-50 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col items-start pl-8 pt-4 space-y-6 text-[#F8F8F8]">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li
              key={item}
              className="text-lg font-sans hover:text-black hover:bg-amber-100 rounded-2xl w-40 px-4 py-2 hover:scale-105 shadow-2xl hover:shadow-amber-200 transition-transform duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  )
}

export default Header
