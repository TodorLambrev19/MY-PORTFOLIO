import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Todor Lambrev</span>
            </h1>
            <h2 className="hero-subtitle">Junior Front-End Developer</h2>
            <p className="hero-description">
              I build beautiful, responsive, and user-friendly web applications using modern technologies like React, JavaScript, and CSS.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Code size={32} />
              </div>
              <h3>Clean Code</h3>
              <p>Writing maintainable and scalable code following best practices</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Palette size={32} />
              </div>
              <h3>Modern Design</h3>
              <p>Creating interfaces with attention to detail</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>Fast Performance</h3>
              <p>Optimizing applications for efficiency</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;