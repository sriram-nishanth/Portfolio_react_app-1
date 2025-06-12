import React from 'react';

const ProjectCard = ({ title, description, techStack, liveDemo, sourceCode }) => {
  return (
    <div className="relative group rounded-2xl bg-black/90 shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-md p-4 md:p-6 min-w-[250px]">
      {/* Card Content */}
      <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm md:text-base text-gray-300 mb-3">{description}</p>
        <p className="text-xs md:text-sm text-gray-400 mb-2">
          <span className="font-semibold text-[#FA6E00]">Tech:</span> {techStack.join(', ')}
        </p>
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs md:text-sm text-[#FA6E00] underline hover:text-[#E60026] transition"
          >
            Live Demo
          </a>
        )}
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/95 rounded-2xl">
        <a
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition"
        >
          View GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
