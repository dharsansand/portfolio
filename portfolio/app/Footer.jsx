'use client';
import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Top Section: Branding and Links */}
        <div className="footer-main">
          
          {/* Column 1: Brand & Bio */}
          <div className="footer-col brand-col">
            <h2 className="footer-logo">
              DHARSAN<span>.S</span>
            </h2>
            <p className="footer-bio">
              Architecting high-performance enterprise systems and 
              data-driven applications with the MERN stack.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon"><FiGithub /></a>
              <a href="#" className="social-icon"><FiLinkedin /></a>
              <a href="#" className="social-icon"><FiTwitter /></a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col links-col">
            <h4 className="footer-label">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Expertise</a></li>
              <li><a href="#projects">Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-label">Get In Touch</h4>
            <div className="footer-contact-items">
              <div className="contact-item">
                <FiMapPin className="item-icon" />
                <span>Coimbatore, TN, India</span>
              </div>
              <div className="contact-item">
                <FiMail className="item-icon" />
                <a href="mailto:dharsansand@gmail.com">dharsansand@gmail.com</a>
              </div>
              <div className="contact-item">
                <FiPhone className="item-icon" />
                <span>+91 9384428585</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Credits and Tech */}
        <div className="footer-bottom">
          <div className="bottom-left">
            <p>&copy; {currentYear} Dharsan S. Crafted with precision.</p>
          </div>

          <div className="bottom-center">
            <div className="tech-pills">
              <span>Next.js</span>
              <span className="dot">•</span>
              <span>Tailwind</span>
              <span className="dot">•</span>
              <span>Framer</span>
            </div>
          </div>

          <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            <FiArrowUp />
          </button>
        </div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="footer-glow-line"></div>
    </footer>
  );
};

export default Footer;