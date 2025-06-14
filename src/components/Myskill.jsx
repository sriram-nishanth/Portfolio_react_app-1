import React from 'react'

const Myskill = (props) => {
  return (
    <div className="flex flex-col justify-center items-center w-28 md:w-44 bg-[#1a1a1a] backdrop-blur-9xl rounded-lg p-3 md:p-4 shadow-md hover:scale-105 hover:shadow-gray-500 hover:drop-shadow-2xl transition-transform duration-300">
      <img className="w-12 h-12 md:w-20 md:h-20" src={props.icon} alt={props.name} />
      <p className="text-base md:text-[25px] text-white mt-2">{props.name}</p>
    </div>
  )
}

export default Myskill
