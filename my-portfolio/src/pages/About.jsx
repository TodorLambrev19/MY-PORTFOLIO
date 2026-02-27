import React from 'react';
import SkillCard from '../components/SkillCard';
import { Code2, Palette, GitBranch } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90, icon: <Code2 size={24} /> },
    { name: 'JavaScript', level: 85, icon: <Code2 size={24} /> },
    { name: 'React', level: 80, icon: <Code2 size={24} /> },
    { name: 'Tailwind CSS', level: 85, icon: <Palette size={24} /> },
    { name: 'Git/GitHub', level: 75, icon: <GitBranch size={24} /> },
    { name: 'Responsive Design', level: 90, icon: <Palette size={24} /> }
  ];

  return (
    <div className="about">
      <div className="container">
        <section className="about-intro">
          <h1 className="page-title">About Me</h1>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate junior front-end developer with a strong foundation in web technologies. 
                I love creating interactive and user-friendly web applications that solve real-world problems.
              </p>
              <p>
                My journey in web development started with a curiosity about how websites work, 
                and it has grown into a passion for building beautiful and functional user interfaces.
              </p>
              <p>
                I'm constantly learning new technologies and best practices to improve my skills 
                and stay up-to-date with the latest trends in web development.
              </p>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;