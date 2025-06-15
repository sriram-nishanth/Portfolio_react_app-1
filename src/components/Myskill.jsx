import React from 'react'
import { motion } from 'framer-motion'

const skillVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const Myskill = (props) => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center w-30 md:w-44 backdrop-blur-2xl rounded-lg p-3 md:p-4 hover:shadow-md hover:shadow-emerald-50 hover:scale-110 transition-transform duration-300"
      variants={skillVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <img
        className="w-12 h-12 md:w-20 md:h-20"
        src={props.icon}
        alt={props.name}
      />
      <p className="text-base md:text-[25px] text-white mt-2">{props.name}</p>
    </motion.div>
  )
}

export default Myskill
