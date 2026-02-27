import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <Twitter size={20} />
            </a>
            <a href="mailto:your.email@example.com" className="social-link">
              <Mail size={20} />
            </a>
          </div>
          <p className="copyright">© 2026 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;