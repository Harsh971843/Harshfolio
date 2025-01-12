import React from 'react';
import Resume from '../files/Resume.d48602b32d9c0f1ba1a8.pdf';


function Introduction() {
  return (
    <div className="h-screen flex flex-col bg-primary dark:bg-black justify-center gap-9 py-8 px-8 sm:px-3 sm:gap-4 sm:flex sm:flex-col ">
      {/* Greeting */}
      <p className="dark:text-white text-tertiary text-lg sm:text-2xs">Hello, I am</p>
      
      {/* Name and Role */}
      <h1 className="text-4xl sm:text-3xl text-purple-600 dark:text-blue-400 font-bold ">
        Harsh - FullStack Developer
      </h1>
      
      {/* Introduction Text */} 
      <p className="text-tertiary dark:text-white  sm:w-full lg:full lg:text-wrap text-lg sm:text-base leading-relaxed w-2/3">
        I am a passionate FullStack Developer with expertise in modern web technologies. I have a strong background in HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB, MySQL, Java, and Python. I enjoy building scalable and efficient web applications that provide an excellent user experience. With a keen eye for detail and a commitment to continuous learning, I strive to stay updated with the latest industry trends and best practices.
      </p>
      
      {/* Resume Button */}
      <a
        href={Resume}
        download
        className="border-2 border-green-400 text-white bg-green-400 px-6 py-2 rounded hover:bg-white hover:text-black hover:border-black transition duration-300 dark:border-green-400 dark:text-green-400 dark:bg-black dark:hover:bg-green-400 dark:hover:text-white w-fit "
      >
        Download Resume
      </a>
    </div>
  );
}

export default Introduction;
