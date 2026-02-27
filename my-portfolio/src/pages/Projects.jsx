import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Store',
      description: 'A modern e-commerce platform with shopping cart functionality and payment integration.',
      image: 'https://image2url.com/r2/default/images/1772232738662-a6592240-33d0-49a9-808d-ef33f6e832cf.jpg',
      technologies: ['React', 'JavaScript', 'CSS'],
      github: 'https://github.com/TodorLambrev19/React-project-2025.git',
      demo: 'https://snazzy-gaufre-b0032f.netlify.app/'
    },
    {
      title: 'Weather App',
      description: 'A responsive weather application that fetches real-time weather data from an API.',
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Weather+App',
      technologies: ['React', 'API', 'CSS'],
      github: 'https://github.com/TodorLambrev19/Weather-app.git',
      demo: 'https://comfy-froyo-473414.netlify.app/'
    },
    {
      title: 'Task Manager',
      description: 'A productivity app for managing tasks with drag-and-drop functionality.',
      image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=Task+Manager',
      technologies: ['React', 'JavaScript', 'LocalStorage'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://your-task-manager.com'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills.',
      image: 'https://image2url.com/r2/default/images/1772232349329-ae66e4c7-3738-41c9-bf39-9f43e09016e4.jpg',
      technologies: ['React', 'Vite', 'CSS'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://69a21df651acc4152d458ca9--amazing-druid-525cf4.netlify.app/'
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