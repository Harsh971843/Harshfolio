import React from 'react';

function Sectiontitle({ title }) {
  return (
    <div className='flex gap-10 sm:-py-6 sm:justify-center px-5 items-center'>
      <h1 className='text-3xl text-secondary dark:text-green-500 sm:text-2xl sm:font-semibold'>{title}</h1>
      <div className='h-0.5 rounded border-1 w-2/3 items-start bg-tertiary dark:bg-green-400'></div>
    </div>
  );
}

export default Sectiontitle;