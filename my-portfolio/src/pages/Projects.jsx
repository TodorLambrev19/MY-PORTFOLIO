import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'VRAG CLOTHING-STORE',
      description: 'A modern e-commerce platform with shopping cart functionality and payment integration.',
      image: 'https://i.postimg.cc/t4Cb4XN6/image.png',
      technologies: ['React', 'JavaScript', 'CSS'],
      github: 'https://github.com/TodorLambrev19/React-project-2025.git',
      demo: 'https://spectacular-youtiao-1de4c5.netlify.app/'
    },
    {
      title: 'Weather App',
      description: 'A responsive weather application that fetches real-time weather data from an API.',
      image: 'https://img.sanishtech.com/u/95d333f5ba6e7fab6bceeee789562d67.jpg',
      technologies: ['React', 'API', 'CSS'],
      github: 'https://github.com/TodorLambrev19/Weather-app.git',
      demo: 'https://spontaneous-dodol-a8bbe5.netlify.app/'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills.',
      image: 'https://i.postimg.cc/13YkRDt3/image.png',
      technologies: ['React', 'Vite', 'CSS'],
      github: 'https://github.com/TodorLambrev19/MY-PORTFOLIO.git',
      demo: 'https://amazing-druid-525cf4.netlify.app/'
    }
  ];

  return (
    <div className="projects">
      <div className="container">
        <h1 className="page-title">My Projects</h1>
        <p className="page-subtitle">Here are some of my recent works</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;