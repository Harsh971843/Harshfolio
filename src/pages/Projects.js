import React, { useState } from 'react';
import Sectiontitle from '../component/Sectiontitle';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import v1 from '../files/ChitChat_JS.gif';
import v2 from '../files/Info_Manager.gif';

const initialProjects = [
  {
    img: v1,
    title: 'ChitChat',
    description: 'Developed responsive web projects using HTML, CSS, and JavaScript, including a weather app with API integration, a to-do list, a random password generator, and a QR code generator. These projects showcase functionality, creativity, and user-friendly design across all devices.',
    github: 'https://github.com/Harsh971843',
    demo: 'https://harsh971843.github.io/WhetherApp/',
  },
  {
    img: v2,
    title: 'Info Manager',
    description: 'A web application to manage information built with ReactJS.',
    github: 'https://github.com/Harsh971843/Info_Manager',
    demo: 'https://harsh971843.github.io/Info_Manager/',
  },
];

const additionalProjects = [
  {
    img: 'https://via.placeholder.com/150',
    title: 'Project 3',
    description: 'Project comming soon',
    github: 'https://gihub.com/yourusername/project4',
    demo: 'https://project4-demo.com',
  },
  {
    img: 'https://via.placeholder.com/150',
    title: 'Project 4',
    description: 'Project comming soon',
    github: 'https://gihub.com/yourusername/project4',
    demo: 'https://project4-demo.com',
  },
];

function Projects() {
  const [showMore, setShowMore] = useState(false);
  const projectsToDisplay = showMore ? [...initialProjects, ...additionalProjects] : initialProjects;

  return (
    <div className="bg-primary dark:bg-black py-10">
      <Sectiontitle title="Projects" />
      <div className="flex flex-wrap justify-center gap-10 py-20">
        {projectsToDisplay.map((project, index) => (
          <motion.div
            key={index}
            className="relative border-2 border-black rounded-lg overflow-hidden w-80 sm:w-72 md:w-80"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.img} alt={project.title} className="w-full h-56 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                  <FaGithub />
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Show More Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => setShowMore(!showMore)}
          className=" px-6 py-2 rounded-lg border-green-400 text-white bg-green-400  hover:bg-white hover:text-black hover:border-black  dark:border-green-400 dark:text-green-400 dark:bg-black dark:hover:bg-green-400 dark:hover:text-white transition duration-300"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>

      {/* More Projects Message */}
      {showMore && (
        <div className="text-center mt-6">
          <p className="text-black dark:text-gray-300 text-lg">More projects coming soon...</p>
        </div>
      )}
    </div>
  );
}

export default Projects;
