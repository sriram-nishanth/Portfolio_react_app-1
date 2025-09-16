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
      className="flex flex-col justify-center items-center w-28 md:w-40 bg-white/5 backdrop-blur-xs rounded-lg p-3 md:p-4 hover:shadow-lg hover:shadow-emerald-100 hover:scale-105 transition-transform duration-300"
      variants={skillVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <img
        className="w-12 h-12 md:w-20 md:h-20"
        src={props.icon}
        alt={props.name}
      />
      <p className="text-base md:text-xl text-white mt-2 text-center">{props.name}</p>
    </motion.div>
  )
}

export default Myskill
