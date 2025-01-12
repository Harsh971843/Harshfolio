import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import Sectiontitle from '../component/Sectiontitle';

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

// Skills data with corresponding colors
const skillsDetails = {
  'Front-end Development': {
    labels: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Bootstrap', 'TailwindCSS'],
    data: [95, 90, 80, 75, 80, 70],
    color: '#FF6384' , // Pink
  },
  'Back-end Development': {
    labels: ['NodeJS', 'ExpressJS', 'Spring Boot', 'Hibernate', 'JPA'],
    data: [70, 65, 70, 60, 75],
    color: '#36A2EB', // Blue
  },
  'Database Management': {
    labels: ['MongoDB', 'MySQL', 'SQL', 'Google Sheets', 'DynamoDB'],
    data: [85, 90, 80, 90, 70],
    color: '#FFCE56', // Yellow
  },
  'Content Management Systems (CMS)': {
    labels: ['WordPress', 'Shopify'],
    data: [90, 95],
    color: '#4BC0C0', // Aqua
  },
  'Full-Stack Development': {
    labels: ['MERN Stack', 'WAMP Stack', 'Java Stack'],
    data: [75, 90, 80],
    color: '#9966FF', // Purple
  },
  'Programming Languages': {
    labels: ['Java', 'Python', 'C++', 'PHP'],
    data: [80, 85, 70, 75],
    color: '#FF9F40', // Orange
  },
  'Other Skills': {
    labels: ['Github', 'DBMS Concepts', 'API Integration', 'Responsive Web Design', 'SEO'],
    data: [70, 90, 75, 80, 70],
    color: '#FF6384', // Pink
  },
};

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState('Front-end Development'); // Default skill

  const barData = hoveredSkill
    ? {
        labels: skillsDetails[hoveredSkill].labels,
        datasets: [
          {
            label: `${hoveredSkill} Proficiency`,
            data: skillsDetails[hoveredSkill].data,
            backgroundColor: skillsDetails[hoveredSkill].color,
            borderColor: skillsDetails[hoveredSkill].color,
            borderWidth: 1,
          },
        ],
      }
    : null;

  return (
    <div className="bg-primary dark:bg-black py-10">
      <Sectiontitle title="Skills" />
      <div className="flex flex-row md:flex-col sm:flex-col sm:flex items-center py-12 justify-center gap-10">
        {/* Skill List */}
        <div className="flex flex-col gap-4">
          {Object.keys(skillsDetails).map((skill, index) => (
            <p
              key={index}
              className={`cursor-pointer text-xl font-medium transition-colors ${
                skill === hoveredSkill
                  ? 'font-bold'
                  : 'opacity-80 hover:opacity-100'
              }`}
              style={{
                color: skillsDetails[skill].color, // Assign dynamic color
              }}
              onMouseEnter={() => setHoveredSkill(skill)}
            >
              {skill}
            </p>
          ))}
        </div>

        {/* Bar Chart */}
        {barData && (
          <div className="w-min md:w-2/3">
            <h3
              className="text-2xl mb-4"
              style={{ color: skillsDetails[hoveredSkill].color }}
            >
              {hoveredSkill} Skills Proficiency
            </h3>
            <Bar
              data={barData}
              options={{
                responsive: true,
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      color: '#ffffff', // White text for dark mode
                    },
                  },
                  x: {
                    ticks: {
                      color: skillsDetails[hoveredSkill].color, // Dynamic label color
                    },
                  },
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
