import React from 'react'

const Header = () => {
  return (
    <div className="w-full bg-transparent">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10 p-3 md:p-5 sticky top-0 z-50 bg-[#121212]/80 backdrop-blur">
        <h2 className="text-2xl md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] to-[#E60026]">
          My Portfolio
        </h2>
        <ul className="flex flex-wrap justify-center md:flex-wrap space-x-2 md:space-x-5 text-[#F8F8F8] text-center">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li
              key={item}
              className="text-base md:text-[20px] font-sans hover:text-black hover:bg-amber-100 rounded-2xl w-20 md:w-24 hover:scale-110 shadow-2xl hover:shadow-amber-200 transition-transform duration-300 mb-1"
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="mt-2 md:mt-0 text-base md:text-[20px] font-semibold bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-[#FFFFFF] rounded-md w-28 md:w-30 h-10 hover:shadow-amber-600 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          Hire Me
        </button>
      </div>
    </div>
  )
}

export default Header;
