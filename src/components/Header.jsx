import React, { useState } from 'react'
import { motion } from 'framer-motion'
import navbar from '../assets/navbar.svg'

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setTimeout(() => {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300) // 200ms delay before scrolling
  }

  return (
    <motion.div
      className="w-full"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: false }}
    >
      <div className="flex flex-row md:flex-row justify-between items-center gap-6 md:gap-10 pt-3 p-0 md:p-3 top-2 z-50 rounded-lg">
        {/* Navbar icon for mobile */}
        <img
          src={navbar}
          alt="Navbar"
          className="md:hidden w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
        <h2 className="text-2xl ml-10 whitespace-nowrap md:ml-0 md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] to-[#E60026]">
          My Portfolio
        </h2>
        <ul className="hidden md:flex flex-nowrap justify-center md:flex-nowrap space-x-1 md:space-x-5 text-[#F8F8F8] items-center rounded-[50px] border-2 border-gray-600 bg-white/5 backdrop-blur-sm h-15 w-150 text-center">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-base md:text-[20px] font-sans hover:text-black hover:bg-amber-100 rounded-2xl w-20 md:w-24 hover:scale-110 shadow-2xl hover:shadow-amber-200 transition-transform duration-300 mb-1 block text-center"
                onClick={(e) => handleNavClick(e, item.href.substring(1))}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="mt-0 mb-2 md:mt-0 text-2xs md:text-[20px] font-semibold whitespace-nowrap flex-shrink-0 md:flex-shrink-0 bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-[#FFFFFF] rounded-md w-18 md:w-30 h-8 hover:shadow-amber-600 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          onClick={() => {
            const footer = document.querySelector('footer')
            if (footer) {
              footer.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          Hire Me
        </button>
      </div>
      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-opacity-100 backdrop-blur-2xl z-50 transform ${
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
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-lg font-sans hover:text-black hover:bg-amber-100 rounded-2xl w-40 px-4 py-2 hover:scale-105 shadow-2xl hover:shadow-amber-200 transition-transform duration-300 block"
                onClick={(e) => {
                  handleNavClick(e, item.href.substring(1))
                  setMenuOpen(false)
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-10 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </motion.div>
  )
}

export default Header
