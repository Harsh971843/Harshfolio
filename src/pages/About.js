import React from 'react';
import Sectiontitle from '../component/Sectiontitle';
import webing from '../files/Webdev.jpg';

function About() {
  return (
    <div className='min-h-screen sm:-py-6  bg-primary dark:bg-black'>
      {/* Section Title */}
      <Sectiontitle title="About" />

      {/* Content Wrapper */}
      <div className="flex flex-col sm:flex-col pt-20 items-center justify-center py-12 px-6 gap-12 sm:gap-16 lg:px-3">
        {/* Image Section */}
        <img
          src={webing}
          alt="Web Development Animation"
          className="border-4 border-black rounded-lg max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] w-full"
        />

        {/* Text Section */}
        <p className="text-wrap text-tertiary dark:text-white sm:text-1xs sm:w-full lg:w-full pt-6 sm:pt-0">
          "I am a FullStack Developer with a Bachelor's degree in Computer Applications (BCA), graduated in 2023. I also secured an All India Rank in the B.Arch paper of JEE Main, showcasing my problem-solving skills and analytical thinking. My technical expertise includes web technologies such as ReactJS, NodeJS, MongoDB, Java, Python, and more. I am passionate about building scalable and efficient web applications and am committed to continuously improving my skills. I thrive in collaborative environments and am always eager to take on new challenges to enhance my knowledge and deliver exceptional results."
        </p>
      </div>
    </div>
  );
}

export default About;
