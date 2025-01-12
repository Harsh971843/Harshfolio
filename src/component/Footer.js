import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-primary dark:bg-black py-6">
      {/* Divider Line */}
      <div className="w-full h-0.5 bg-secondary dark:bg-green-400 mb-6"></div>

      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Developer Info */}
          <h1 className="text-xl font-semibold text-black dark:text-green-400 sm:text-sm">
            Designed and Developed by <br />Harsh
          </h1>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/harsh-2b25561a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-green-400 text-3xl dark:hover:text-white hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Harsh971843"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-green-400 text-3xl hover:text-gray-500  dark:hover:text-white transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.youtube.com/@harv27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:hover:text-white dark:text-green-400 text-3xl hover:text-red-500 transition duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.Instagram.com/harshhhh._27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-green-400 dark:hover:text-white text-3xl hover:text-purple-400 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/ManuRajput88001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-green-400 text-3xl dark:hover:text-white hover:text-blue-400 transition duration-300"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-black dark:text-green-400 text-sm mt-6">
            &copy; {new Date().getFullYear()} Harsh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
