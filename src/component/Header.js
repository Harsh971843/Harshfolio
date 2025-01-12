import React from 'react';
import { useState } from 'react';
import{FaMoon, FaSun} from 'react-icons/fa';

function Header({ toggleDarkMode }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const handleToggle = () => {
      setIsDarkMode(!isDarkMode); // Toggle the state
      toggleDarkMode(); // Call the parent function to toggle the dark mode
    };
  return (
    <div className='dark:bg-black flex flex-row justify-between sm:flex sm:justify-center sm:px-25 md:flex md:justify-start sm:pt-3 sm:pb-0 fixed w-full z-10 sm:absolute'>
      <div>
        <h1 className='dark:text-green-400 text-secondary  text-2xl p-4 px-10 flex font-semibold sm:items-center md:items-start sm:text-4xl'>
          Harsh Portfolio
        </h1>
      </div>
      <div className='flex flex-row justify-between items-center p-4 px-10'>
        <div onClick={handleToggle} className='cursor-pointer toggle-icon'>
        <button className='text-white'>
          {isDarkMode ? <FaSun/> : <FaMoon className='text-black'/>}
        </button>
        </div>

      </div>
    </div>
  );
}

export default Header;