'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiGlobe, FiServer, FiDatabase, FiShield, 
  FiZap, FiCpu, FiTrendingUp, FiCheckCircle 
} from 'react-icons/fi';
import './About.css'; // Import the separate CSS file

const About = () => {
  const skills = [
    { name: "Full-Stack MERN Development", icon: <FiGlobe /> },
    { name: "Enterprise ERP/CRM Systems", icon: <FiServer /> },
    { name: "MongoDB Aggregation Expert", icon: <FiDatabase /> },
    { name: "RBAC & JWT Security", icon: <FiShield /> },
    { name: "Performance Optimization", icon: <FiZap /> },
    { name: "Cloud Integration", icon: <FiCpu /> }
  ];

  const stats = [
    { label: "Lead Efficiency", value: "70%", icon: <FiTrendingUp className="icon-emerald" /> },
    { label: "Faster Queries", value: "60%", icon: <FiZap className="icon-yellow" /> },
    { label: "Data Migration", value: "10K+", icon: <FiDatabase className="icon-blue" /> },
    { label: "Manual Ops Saved", value: "75%", icon: <FiCheckCircle className="icon-cyan" /> },
  ];

  return (
    <section className="about-section">
      <div className="bg-glow"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container"
      >
        {/* Header */}
        <header className="about-header">
          <div className="discovery-tag">
            <span className="line"></span>
            <span className="tag-text">Discovery</span>
          </div>
          <h2 className="main-title">
            Engineering <span className="gradient-text">Business Logic</span> <br className="desktop-only" /> 
            into Scalable Reality.
          </h2>
        </header>

        <div className="content-grid">
          {/* Image Side */}
          <div className="image-column">
            <div className="image-wrapper">
              <img 
                src="https://as1.ftcdn.net/jpg/08/98/22/00/1000_F_898220026_YpEtXl3GCaJM39rPLux8t0acxy3wpsQN.webp" 
                alt="Dharsan S" 
                className="profile-img"
              />
              <div className="role-badge">
                <p className="badge-label">Current Role</p>
                <p className="badge-value">Lead MERN Stack Architect</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="text-column">
            <p className="lead-text">
              I specialize in bridging the gap between complex business requirements and 
              <strong> high-performance software architecture.</strong> 
            </p>
            
            <p className="description-text">
              With a deep focus on the MERN ecosystem, I’ve engineered enterprise-grade 
              <span className="text-highlight"> ERP/CRM systems</span> that process massive datasets with sub-second latency.
            </p>

            <div className="skills-grid">
              {skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-container">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon-bg">{stat.icon}</div>
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;