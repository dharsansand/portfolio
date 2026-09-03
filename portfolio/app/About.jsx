'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiBriefcase, FiCpu, FiDatabase, FiHeadphones } from 'react-icons/fi';
import './About.css';
import Link from 'next/link';

const skills = [
  { 
    name: "React.js & Next.js", 
    desc: "Building dynamic, responsive UIs with modern component architecture and clean state management." 
  },
  { 
    name: "Redux Toolkit (RTK Query)", 
    desc: "Advanced global state management, automated data caching, and seamless API synchronization." 
  },
  { 
    name: "Node.js & Express REST APIs", 
    desc: "Architecting secure RESTful endpoints, JWT authentication, RBAC, and business logic automation." 
  },
  { 
    name: "MongoDB & Query Optimization", 
    desc: "Designing complex aggregation pipelines and indexing to boost database performance by up to 60%." 
  }
];

const stats = [
  { 
    value: "1+", 
    label: "Years Experience", 
    icon: <FiBriefcase />, 
    detail: "ERP, CRM & Full-Stack MERN" 
  },
  { 
    value: "60%", 
    label: "Query Optimization", 
    icon: <FiDatabase />, 
    detail: "Faster Database Latency" 
  },
  { 
    value: "10K+", 
    label: "Records Processed", 
    icon: <FiCpu />, 
    detail: "Bulk Migration under 5s" 
  },
  { 
    value: "100%", 
    label: "Sprint Delivery", 
    icon: <FiHeadphones />, 
    detail: "Agile & On-Time Execution" 
  },
];

const About = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeStat, setActiveStat] = useState(null);

  const handleSkillToggle = (index) => {
    setActiveSkill(activeSkill === index ? null : index);
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-main-grid">
          
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-image-column"
          >
            <div className="image-frame">
              <img 
                src="https://res.cloudinary.com/dujuxbpv3/image/upload/v1788345729/9c02cc00-05c0-4b86-8986-45c0f3b774b8_txql5a.png" 
                alt="Dharsan S" 
              />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="about-text-column">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="about-me-tag"
            >
              <span className="line"></span> ABOUT ME
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="about-title"
            >
              Who Am I
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="about-description"
            >
              My name is <strong>Dharsan S</strong>. I am a <strong>Full Stack (MERN) Developer</strong> specializing in architecting scalable enterprise systems (ERP, CRM, HRM) and high-performance web applications.
            </motion.p>

            <div className="skill-badges-container">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-pill-wrapper"
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                  onClick={() => handleSkillToggle(index)}
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`skill-pill ${activeSkill === index ? 'active' : ''}`}
                  >
                    {skill.name}
                  </motion.div>
                  
                  <AnimatePresence>
                    {activeSkill === index && (
                      <motion.div 
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
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

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="stats-footer-grid"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              className={`stat-card-v2 ${activeStat === i ? 'hovered' : ''}`}
              onMouseEnter={() => setActiveStat(i)}
              onMouseLeave={() => setActiveStat(null)}
              onClick={() => setActiveStat(activeStat === i ? null : i)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="stat-content-wrapper">
                <h3 className="stat-value-v2">{stat.value}</h3>
                <p className="stat-label-v2">{stat.label}</p>
                <div className={`stat-hover-info ${activeStat === i ? 'visible' : ''}`}>
                  <span className="stat-icon">{stat.icon}</span>
                  <p className="stat-detail-text">{stat.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Button Container - NOW OUTSIDE THE GRID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="about-action-container"
        >
          <Link href="/about" className="read-more-btn">
            <span>Read More About Me</span>
            <FiArrowRight className="arrow-icon" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default About;