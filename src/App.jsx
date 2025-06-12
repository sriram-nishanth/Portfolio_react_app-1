import React from 'react'
import Header from './components/Header.jsx'
import Headersection from './components/Headersection.jsx'
import Myskill from './components/Myskill.jsx'
import skills from './assets/utils/Skills.js'
import About from './components/About.jsx'
import ProjectCard from './components/Projectcard.jsx'
import projects from './assets/utils/projects.js'

const App = () => {
  return (
    <div className='bg-[#121212] px-4 md:px-10 backdrop:backdrop-blur-3xl'>
      <Header />
      <Headersection />

      {/* Skills Section */}
      <section className='flex flex-col justify-start items-center py-10'>
        <h2 className='text-3xl md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-center mt-6 md:mt-10'>
          My Skills
        </h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-6 md:gap-10 mt-6">
          {skills.map((skill, index) => (
            <Myskill key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className='py-10'>
        <h2 className='text-2xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-center mt-6 md:mt-10'>
          About Me
        </h2>
        <About />
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto flex flex-col justify-center items-center py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-center mt-6 md:mt-10">
          My Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              liveDemo={project.liveDemo}
              sourceCode={project.sourceCode}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App;

