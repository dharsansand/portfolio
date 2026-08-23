'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiMonitor, FiServer, FiDatabase, FiLayers, 
  FiCheckCircle, FiCode, FiActivity 
} from 'react-icons/fi';
import './Skills.css'; // Importing separate CSS

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Dev",
      icon: <FiMonitor />,
      colorClass: "blue-icon",
      skills: ["React.js", "JavaScript (ES6+)", "Redux Toolkit", "React Hooks", "Tailwind CSS", "Material UI", "HTML5/CSS3"]
    },
    {
      title: "Backend & Cloud",
      icon: <FiServer />,
      colorClass: "emerald-icon",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Socket.io", "Puppeteer (PDF)", "Redis", "JWT Auth"]
    },
    {
      title: "Databases",
      icon: <FiDatabase />,
      colorClass: "amber-icon",
      skills: ["MongoDB (Aggregation)", "MySQL", "Database Optimization", "Data Modeling", "Index Tuning"]
    },
    {
      title: "DevOps & Tools",
      icon: <FiLayers />,
      colorClass: "purple-icon",
      skills: ["Git/GitHub", "Postman", "CI/CD Pipelines", "Vercel / Render", "Cloudinary", "Linux Basics"]
    }
  ];

  return (
    <section className="skills-section">
      {/* Background decoration */}
      <div className="skills-dot-pattern"></div>

      <div className="skills-container">
        
        {/* Section Header */}
        <header className="skills-header">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="expertise-label"
          >
            <span className="label-line"></span>
            <span className="label-text">Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="skills-title"
          >
            Technical <span className="title-gradient">Stack.</span>
          </motion.h2>
        </header>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="skill-card"
            >
              <div className="card-top">
                <div className={`card-icon ${category.colorClass}`}>
                  {category.icon}
                </div>
                <FiCode className="bg-code-icon" />
              </div>
              
              <h3 className="card-title">{category.title}</h3>
              
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    <FiCheckCircle className="check-icon" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Specialized Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="domain-banner"
        >
          <div className="banner-content">
            <div className="banner-info">
              <div className="banner-icon-box">
                <FiActivity />
              </div>
              <div>
                <p className="banner-small-text">Specialized In</p>
                <p className="banner-main-text">Enterprise Domain Architecture</p>
              </div>
            </div>
            
            <div className="banner-tags">
              <span>Sales Workflows</span>
              <span>Inventory Ledgers</span>
              <span>Payroll Processing</span>
              <span>RBAC Architecture</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;