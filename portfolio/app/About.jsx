'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';
import { FiBriefcase, FiCpu, FiDatabase, FiHeadphones } from 'react-icons/fi';

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    { name: "React.js Development", desc: "Designing seamless data flows between frontend and backend" },
    { name: "Context API", desc: "Designing seamless data flows between frontend and backend" },
    { name: "RESTful API Integration", desc: "Designing seamless data flows between frontend and backend." },
    { name: "Redux Toolkit (RTK Query)", desc: "Advanced state management and automated data fetching/caching." }
  ];



const stats = [
  { value: "15+", label: "Projects", icon: <FiBriefcase />, detail: "Successfully Delivered" },
  { value: "10+", label: "Technologies", icon: <FiCpu />, detail: "Modern Stack" },
  { value: "100+", label: "API Query", icon: <FiDatabase />, detail: "Data Optimization" },
  { value: "24+", label: "Support", icon: <FiHeadphones />, detail: "Technical Assistance" },
];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-main-grid">
          
          {/* Left Side: Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-image-column"
          >
            <div className="image-frame">
              <div className="image-overlay"></div>
              <img 
                src="https://as1.ftcdn.net/jpg/08/98/22/00/1000_F_898220026_YpEtXl3GCaJM39rPLux8t0acxy3wpsQN.webp" 
                alt="Dharsan S" 
              />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="about-text-column">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="about-me-tag"
            >
              <span className="line"></span> ABOUT ME
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="about-title"
            >
              Who Am I
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="about-description"
            >
              My name is <strong>Dharsan S</strong>. I am a dedicated Full Stack Developer 
              passionate about engineering scalable business logic into high-performance 
              software architecture.
            </motion.p>

         
            <div className="skill-badges-container">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-pill-wrapper"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`skill-pill ${hoveredIndex === index ? 'active' : ''}`}
                  >
                    {skill.name}
                  </motion.div>
                  
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="skill-desc-card"
                      >
                        <div className="card-accent"></div>
                        <p>{skill.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

       <motion.div 
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="stats-footer-grid"
>
  {stats.map((stat, i) => (
    <motion.div 
      key={i} 
      className="stat-card-v2"
      whileHover="hover" // Triggers the "hover" variant in children
      initial="initial"
    >
      {/* Container that slides up */}
      <motion.div 
        variants={{
          initial: { y: 0 },
          hover: { y: -20 } // Moves content up on hover
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="stat-content-wrapper"
      >
        <h3 className="stat-value-v2">{stat.value}</h3>
        <p className="stat-label-v2">{stat.label}</p>
        
        {/* The Reveal Section (Icon + Text) */}
        <motion.div 
          variants={{
            initial: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 10 }
          }}
          className="stat-hover-info"
        >
          <span className="stat-icon">{stat.icon}</span>
          <p className="stat-detail-text">{stat.detail}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  ))}
</motion.div>
      </div>
    </section>
  );
};

export default About;