import React from 'react'

const Footercard = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-8 px-4 flex flex-col items-center gap-6 w-full">
      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center gap-6 mb-2">
        <li>
          <a href="#home" className="text-sm md:text-base hover:text-[#FA6E00] transition">Home</a>
        </li>
        <li>
          <a href="#about" className="text-sm md:text-base hover:text-[#FA6E00] transition">About</a>
        </li>
        <li>
          <a href="#projects" className="text-sm md:text-base hover:text-[#FA6E00] transition">Projects</a>
        </li>
        <li>
          <a href="#contact" className="text-sm md:text-base hover:text-[#FA6E00] transition">Contact</a>
        </li>
      </ul>
      {/* Copyright */}
      <p className="text-xs md:text-sm text-center">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
      {/* Contact Info */}
      <div className="flex flex-row items-center gap-2">
        <p className="text-xs md:text-sm">sriramnishanth816@gmail.com</p>
        <p className="text-xs md:text-sm">+91 9791343677</p>
      </div>
    </footer>
  )
}

export default Footercard
