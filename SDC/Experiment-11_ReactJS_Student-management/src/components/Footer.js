import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <span>N</span>
              </div>
              <span className="footer-logo-text">NeoScholars</span>
            </div>
            <p className="footer-description">
              Empowering the next generation of learners with cutting-edge educational technology and innovative learning experiences.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Connect</h3>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="social-icon">𝕏</i>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="social-icon">in</i>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <i className="social-icon">⌥</i>
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <i className="social-icon">✉</i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="footer-copyright">
            © {currentYear} NeoScholars. All rights reserved. | 
            <span className="footer-highlight"> Future of Education</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 