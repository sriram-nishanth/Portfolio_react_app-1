import React from 'react'
import Header from './components/Header.jsx'
import Headersection from './components/Headersection.jsx'
import Myskill from './components/Myskill.jsx'
import skills from './assets/utils/Skills.js'
import About from './components/About.jsx'
import ProjectCard from './components/Projectcard.jsx'
import projects from './assets/utils/projects.js'
import Contactcard from './components/Contactcard.jsx'
import Footercard from './components/Footercard.jsx'

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 overflow-x-hidden scroll-smooth">
      {/* Background overlays */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
      {/* (Optional) Add radial gradient or other effects here as another absolute div */}

      {/* Main content */}
      <div className="relative z-10 px-4 py-4 md:px-4 scroll-smooth">
        <Header />
        <section id="home">
          <Headersection />
        </section>
        {/* Skills Section */}
        <section id="skills" className='flex flex-col justify-start items-center py-10'>
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
        <section id="about" className='py-10'>
          <h2 className='text-2xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-center mt-6 md:mt-10'>
            About Me
          </h2>
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto flex flex-col justify-center items-center py-10">
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
                image={project.image}
              />
            ))}
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact">
          <div className="flex flex-col justify-center items-center w-full">
            <Contactcard />
          </div>
        </section>
        {/* Footer Section */}
        <footer>
          <Footercard />
        </footer>
      </div>
    </div>
  )
}

export default App;

