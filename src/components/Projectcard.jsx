import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projectCardVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const ProjectCard = ({ title, description, techStack, liveDemo, sourceCode, image }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleCardContentClick = (e) => {
    e.stopPropagation();
    setShowOverlay(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowOverlay(false);
    }
  };

  return (
    <motion.div
      className="relative group rounded-2xl hover:shadow-xl hover:scale-105 transition-transform duration-300 p-4 md:p-6 min-w-[250px] overflow-hidden"
      variants={projectCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Blurred Background */}
      <div
        className="absolute inset-0 w-full h-full bg-contain opacity-100 backdrop-opacity-90 bg-center blur-md scale-110 brightness-50"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      ></div>
      {/* Card Content */}
      <div
        className="relative z-10"
        onClick={handleCardContentClick}
      >
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm md:text-base text-gray-200 mb-3">{description}</p>
        <p className="text-xs md:text-sm text-gray-300 mb-2">
          <span className="font-semibold text-[#FA6E00]">Tech:</span> {techStack.join(', ')}
        </p>
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs md:text-sm text-[#FA6E00] underline hover:text-[#E60026] transition"
            onClick={e => e.stopPropagation()}
          >
            Live Demo
          </a>
        )}
      </div>
      {/* Overlay: show only when state is true */}
      {showOverlay && (
        <div
          className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 bg-[url('${image}')] bg-black/20 backdrop-blur-lg rounded-2xl opacity-100`}
          onClick={handleOverlayClick}
        >
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition"
            onClick={e => e.stopPropagation()}
          >
            View GitHub
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
