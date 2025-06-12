import React from 'react'
import LinkedIn from '../assets/LinkedIn.png'
import GitHub from '../assets/Github.png'
import photo from '../assets/photo_2.png'

const Headersection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center md:items-start">
      <div className="flex flex-col justify-start items-start gap-y-6 md:gap-y-10 mb-1 pt-8 md:pt-15 w-full md:w-1/2">
        <div className="flex flex-col justify-start items-start gap-y-2 pt-4 md:pt-10">
          <span className="text-lg md:text-[20px] text-[#F8F8F8] block">Hello, I am</span>
          <span className="text-xl md:text-[25px] font-bold text-[#F8F8F8] block">Sriram Nishanth T</span>
          <span className="text-2xl md:text-[50px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] to-[#E60026] m-2 gap-x-6">
            Full Stack Web Developer
          </span>
        </div>
        <p className="text-base md:text-[25px] text-[#F8F8F8]">
          I am a passionate developer with experience in building dynamic web applications.
        </p>
        <div className="flex flex-row gap-4">
          <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8 md:w-10 md:h-10" />
          <img src={GitHub} alt="GitHub" className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <div className="flex flex-row gap-3 md:gap-5">
          <button className="bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white font-semibold py-2 px-4 rounded shadow-2xl w-32 md:w-40 hover:scale-105 hover:shadow-orange-500 transition-transform duration-300">
            Hire Me
          </button>
          <button className="text-white font-semibold py-2 px-4 rounded shadow-gray-500 border w-32 md:w-40 hover:shadow-gray-200 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            Download
          </button>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="flex justify-center items-center w-full md:w-1/2 py-6 md:py-0">
        <img
          className="w-[180px] h-[180px] md:w-[600px] md:h-[600px] object-cover rounded-full shadow-lg transition duration-300"
          src={photo}
          alt="Sriram Nishanth T"
        />
      </div>
    </div>
  )
}

export default Headersection
