import React from 'react'
import { motion } from 'framer-motion'
import photo from '../assets/photo_2.png'
import vector from '../assets/Vector.png'
import resume from '/Resume.pdf' // Adjust the path to your resume file
import Tilt from 'react-parallax-tilt'

const headerSectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const Headersection = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row w-full items-center md:items-center gap-6 md:gap-10"
      variants={headerSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <div className={`flex flex-col justify-center items-center md:items-start gap-y-5 md:gap-y-8 mb-1 pt-8 md:pt-10 w-full md:w-1/2 text-center md:text-left bg-[url(${vector})] bg-no-repeat bg-cover bg-center`}>
        <div className="flex flex-col justify-center items-center md:items-start gap-y-2 pt-4 md:pt-10">
          <span className="text-lg md:text-[20px] text-[#F8F8F8] block">Hello, I am</span>
          <span className="text-xl md:text-[25px] font-bold text-[#F8F8F8] block">Sriram Nishanth T</span>
          <span className="text-2xl md:text-[50px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] to-[#E60026] m-2 gap-x-6">
            Full Stack Web Developer
          </span>
        </div>
        <p className="text-base md:text-xl text-[#F8F8F8] max-w-xl">I am a passionate developer with experience in building dynamic web applications.
        </p>
        <div className="flex flex-row gap-4 justify-center md:justify-start">
          {/* LinkedIn SVG */}
          <a href="https://www.linkedin.com/in/sriram-nishanth-t-19501028b/" target="_blank" rel="noopener noreferrer">
            <svg className="w-7 h-7 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.59v5.606z"/>
            </svg>
          </a>
          {/* GitHub SVG */}
          <a href="https://github.com/sriram-nishanth" target="_blank" rel="noopener noreferrer">
            <svg className="w-7 h-7 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
        </div>
        <div className="flex flex-row gap-3 md:gap-5 justify-center md:justify-start">
          <button
            className="bg-gradient-to-r from-[#FD6F00] to-[#E46400] backdrop-blur-lg text-white font-semibold py-2 px-4 rounded shadow-2xl w-32 md:w-40 hover:scale-105 hover:shadow-orange-500 transition-transform duration-300"
            onClick={() => {
              const footer = document.querySelector('footer');
              if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Hire Me
          </button>
          <a href={resume} download="My_Resume">
            <button className="text-white font-semibold py-2 px-4 rounded shadow-gray-500 border w-32 md:w-40 hover:shadow-gray-200 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              Download
            </button>
          </a>
        </div>
      </div>
      
      {/* Image Section with 3D tilt */}
      <div className="flex justify-center items-center w-full md:w-1/2 py-6 md:py-0">
          <img
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px] object-cover rounded-full shadow-2xl max-w-full"
            src={photo}
            alt="Sriram Nishanth T"
          />
      </div>
    </motion.div>
  )
}

export default Headersection
