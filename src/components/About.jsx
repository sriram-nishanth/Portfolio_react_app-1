import React from 'react'
import AboutUs from '../assets/AboutUs.png'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-10 gap-8 md:gap-10">
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl">
        <p className="text-base md:text-lg text-gray-300 text-justify font-semibold mb-4">
          Hi! I'm Sriram Nishanth T, a passionate and detail-oriented Full Stack Web Developer with a strong foundation in both frontend and backend technologies. I specialize in building dynamic, responsive, and user-friendly web applications that solve real-world problems.
          I work with a variety of tools and frameworks including HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, and PostgreSQL. I enjoy writing clean and efficient code, developing scalable applications, and continuously learning new technologies to improve my skills.
          Over time, I've built and deployed several full-stack projects such as portfolio websites, appointment booking systems, book explorers, and CRUD dashboards. These projects have helped me understand the importance of good UI/UX design, database management, and performance optimization.
          I'm comfortable working independently or in a team environment, and I'm always eager to contribute to meaningful projects. I'm currently seeking opportunities to grow as a developer, collaborate with talented teams, and build impactful digital experiences.
        </p>
      </div>
      {/* Vertical line only on md+ screens, with more right margin */}
      <span className="hidden md:block w-[2px] h-72 bg-white rounded-full ml-12 shadow-2xl"></span>
      <div className="flex-1 flex justify-center items-center">
        <img
          className="w-32 h-32 md:w-72 md:h-72 max-w-full rounded-lg shadow-lg object-cover"
          src={AboutUs}
          alt="About Me"
        />
      </div>
    </div>
  )
}

export default About
