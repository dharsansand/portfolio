'use client';
import { motion } from 'framer-motion';
import Header from './components/Header';
import ParticleText from './components/ParticleText';
import WebThreads from './components/WebThreads'; 
import { FaDribbble, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './home.css';

export default function Banner() {
  return (
    <>
      <WebThreads /> 
      <div className="home-container">
        <Header />
        
        <main className="hero-grid">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="intro-text">Hi I am</p>
            <h1 className="user-name">DHARSAN</h1>
            
            <div className="particle-box">
              <ParticleText text="Full Stack Developer" />
            </div>

            <div className="social-row">
               <motion.div whileTap={{scale: 0.9}} className="icon-circle"><FaInstagram /></motion.div>
               <motion.div whileTap={{scale: 0.9}} className="icon-circle"><FaLinkedinIn /></motion.div>
               <motion.div whileTap={{scale: 0.9}} className="icon-circle"><FaGithub /></motion.div>
            </div>

            <div className="action-row">
              <button className="btn-main">Hire Me</button>
              <button className="btn-outline">Download CV</button>
            </div>

               <div className="stats-container">
              <div className="stat-box">
                <span className="stat-num">1.5+</span>
                <span className="stat-txt">Years Exp</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">10+</span>
                <span className="stat-txt">Projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://i.pinimg.com/736x/1b/e0/f3/1be0f32ae63d48eee8a2e9abba0dda1d.jpg" 
              className="main-img" 
              alt="Profile"
            />
          </motion.div>
        </main>
      </div>
    </>
  );
}