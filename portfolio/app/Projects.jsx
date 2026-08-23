'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight, FiLayers } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Integrated Business Suite (ERP/CRM/HRM)",
      category: "Enterprise Solution",
      description: "A full-cycle business ecosystem designed to automate Sales, Inventory, and Payroll workflows. Engineered for scalability and high-performance data processing.",
      features: [
        "Real-time Inventory with automated stock updates",
        "Payroll engine with automated PDF payslip generation",
        "Advanced MongoDB Aggregation for Profit/Loss reports",
        "Role-Based Access Control (RBAC) for data security"
      ],
      impact: [
        { label: "Efficiency", value: "+70%" },
        { label: "Query Speed", value: "+60%" },
        { label: "Migration", value: "10K+" }
      ],
      tech: ["React", "Node.js", "MongoDB", "Redux Toolkit", "Puppeteer"],
      link: "#",
      github: "#"
    },
    {
      title: "Dynamic E-commerce & CMS",
      category: "Full Stack Web App",
      description: "A scalable online retail platform featuring a 'Zero-Code' Admin Panel for content management and secure payment gateway integration.",
      features: [
        "Dynamic Admin Control Panel for product listings",
        "Secure Razorpay API payment integration",
        "Persistent shopping cart & wishlist system",
        "Automated email notifications for orders"
      ],
      impact: [
        { label: "Setup Time", value: "Zero-Code" },
        { label: "Payments", value: "Secure" },
        { label: "UI/UX", value: "Responsive" }
      ],
      tech: ["React", "Express.js", "MySQL", "Razorpay", "Tailwind CSS"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        
        {/* Header */}
        <header className="projects-header">
          <div className="header-left">
            <div className="projects-tag">
              <span className="tag-line"></span>
              <span className="tag-text">My Work</span>
            </div>
            <h2 className="projects-title">Featured <span className="title-highlight">Projects.</span></h2>
          </div>
          <div className="header-right">
            <p>Specialized in building high-performance applications that bridge the gap between complex data and user-friendly interfaces.</p>
          </div>
        </header>

        {/* Project Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="project-card"
            >
              {/* Category Badge */}
              <div className="card-category">
                <FiLayers className="category-icon" />
                <span>{project.category}</span>
              </div>

              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>

                {/* Features List */}
                <ul className="features-list">
                  {project.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <span className="bullet">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Impact Metrics */}
                <div className="impact-grid">
                  {project.impact.map((stat, i) => (
                    <div key={i} className="impact-stat">
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>

             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;