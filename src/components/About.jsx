import React from 'react'
import { motion } from 'framer-motion'
import AboutUs from '../assets/AboutUs.png'

const aboutVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const About = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 gap-8 md:gap-10"
      variants={aboutVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}>
      <div className="flex-1 flex flex-col justify-center items-start max-w-2xl w-full">
        <p className="text-base md:text-lg text-gray-300 text-justify font-normal mb-4">
          Hi! I'm Sriram Nishanth T, a passionate and detail-oriented Full Stack Web Developer with a strong foundation in both frontend and backend technologies. I specialize in building dynamic, responsive, and user-friendly web applications that solve real-world problems.
          I work with a variety of tools and frameworks including HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, and PostgreSQL. I enjoy writing clean and efficient code, developing scalable applications, and continuously learning new technologies to improve my skills.
          I'm comfortable working independently or in a team environment, and I'm always eager to contribute to meaningful projects. I'm currently looking for opportunities to grow as a developer, collaborate with talented teams, and make a positive impact through technology.
        </p>
      </div>
      {/* Vertical line only on md+ screens, with more right margin */}
      <span className="hidden md:block w-px h-64 lg:h-72 bg-white/70 rounded-full md:mx-8 lg:mx-12"></span>
      <div className="flex-1 flex justify-center items-center">
        <img
          className="w-32 h-32 sm:w-44 sm:h-44 md:w-72 md:h-72 max-w-full rounded-lg shadow-lg object-cover"
          src={AboutUs}
          alt="About Me"
        />
      </div>
    </motion.div>
  )
}

export default About
