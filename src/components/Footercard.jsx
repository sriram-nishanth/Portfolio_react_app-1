import React from 'react'
import { motion } from 'framer-motion'


const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const Footercard = () => {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200); // 200ms delay before scrolling
  };

  return (
    <motion.footer
      className="text-white py-8 px-4 flex flex-col items-center gap-6 w-full"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center gap-6 mb-2">
        <li>
          <a href="#home" className="text-sm md:text-base hover:text-[#FA6E00] transition" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
        </li>
        <li>
          <a href="#about" className="text-sm md:text-base hover:text-[#FA6E00] transition" onClick={(e) => handleNavClick(e, 'about')}>About</a>
        </li>
        <li>
          <a href="#projects" className="text-sm md:text-base hover:text-[#FA6E00] transition" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
        </li>
        <li>
          <a href="#contact" className="text-sm md:text-base hover:text-[#FA6E00] transition" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        </li>
      </ul>
      {/* Copyright */}
      <p className="text-xs md:text-sm text-center">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
      {/* Contact Info */}
      <div className="flex flex-row items-center gap-2">
      <a href="mailto:sriramnishanth816@gmail.com"> 
      <p className="text-xs md:text-sm flex items-center gap-1">
          {/* Email SVG icon with white fill */}
          <svg
            className="w-5 h-5"
            fill="white"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13 20 4.01V4H4zm16 2.41l-7.29 7.3a1 1 0 0 1-1.42 0L4 6.41V20h16V6.41z"/>
          </svg>
          sriramnishanth816@gmail.com
        </p>
        </a>
        <a href="tel:+919791343677">
          <p className="text-xs md:text-sm flex items-center gap-1">
            {/* Phone SVG icon with white fill */}
            <svg
              className="w-4 h-4"
              fill="white"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/>
            </svg>
            +91 9791343677
        </p>
        </a>
      </div>
    </motion.footer>
  )
}

export default Footercard
