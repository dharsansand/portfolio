'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './Skills.css';
import { FaDatabase, FaGithub, FaNode, FaReact, FaRegCheckCircle } from 'react-icons/fa';
import { RiNextjsFill, RiSecurePaymentLine, RiVercelFill } from 'react-icons/ri';
import { TbBrandRedux } from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io';
import { SiExpressdotcom, SiMongodb, SiMysql, SiPostman, SiPuppeteer, SiTailwindcss } from 'react-icons/si';
import { GiElectricalSocket, GiMaterialsScience } from 'react-icons/gi';
import { DiRedis } from 'react-icons/di';
import { GrDomain, GrSecure } from 'react-icons/gr';
import { BsDatabaseUp } from 'react-icons/bs';

const skillsData = {
  "Frontend": [
    { 
      name: "React.js", 
      icon: <FaReact  />, 
      points: ["Component Architecture", "Hooks & Custom Logic", "Context API State Flow", "Virtual DOM Optimization"] 
    },
    { 
      name: "Next.js", 
      icon: <RiNextjsFill  />, 
      points: ["Server-Side Rendering (SSR)", "App Router & Dynamic Routing", "API Routes Integration", "SEO Optimization"] 
    },
    { 
      name: "Redux Toolkit (RTK)", 
      icon: <TbBrandRedux  />, 
      points: ["Global State Management", "RTK Query Data Caching", "Optimistic UI Updates", "Slices & Middleware"] 
    },
    { 
      name: "JavaScript (ES6+)", 
      icon: <IoLogoJavascript  />, 
      points: ["Async/Await & Promises", "ES6+ Modern Syntax", "Event-Driven Logic", "Functional Programming"] 
    },
    { 
      name: "Tailwind CSS", 
      icon: <SiTailwindcss  />, 
      points: ["Responsive UI Design", "Utility-First Styling", "Custom Config & Themes", "Modern Layout Systems"] 
    },
    { 
      name: "Material UI", 
      icon: <GiMaterialsScience  />, 
      points: ["Theme Customization", "Design System Components", "Responsive Grid Layouts", "Accessible UI Elements"] 
    },
  ],

  "Backend": [
    { 
      name: "Node.js", 
      icon: <FaNode  />, 
      points: ["Event Loop & Async I/O", "Performance Architecture", "File Stream & Processing", "NPM Ecosystem"] 
    },
    { 
      name: "Express.js", 
      icon: <SiExpressdotcom />, 
      points: ["RESTful API Architecture", "Custom Middleware Design", "Centralized Error Handling", "Route Protection"] 
    },
    { 
      name: "RESTful APIs", 
      icon: <FaDatabase  />, 
      points: ["CRUD & Business Logic", "Secure Endpoint Design", "Standardized HTTP Responses", "Data Validation"] 
    },
    { 
      name: "Puppeteer", 
      icon: <SiPuppeteer  />, 
      points: ["Automated PDF Generation", "Payslip Engine Automation", "Headless Browsing", "Report Compilation"] 
    },
    { 
      name: "Socket.io", 
      icon: <GiElectricalSocket  />, 
      points: ["Real-time Data Sync", "Bi-directional Events", "Room Management", "Live Notifications"] 
    },
    { 
      name: "Redis", 
      icon: <DiRedis  />, 
      points: ["In-Memory Caching", "Session Management", "Performance Optimization", "Key-Value Strategy"] 
    },
  ],

  "Database": [
    { 
      name: "MongoDB (Mongoose)", 
      icon: <SiMongodb  />, 
      points: ["Complex Aggregation Pipelines", "Schema Design & Modeling", "Query Optimization (60% Faster)", "Indexing Strategies"] 
    },
    { 
      name: "MySQL", 
      icon: <SiMysql  />, 
      points: ["Relational Data Modeling", "Complex JOIN Operations", "Query Optimization", "Data Integrity & Keys"] 
    },
  ],

  "Tools & DevOps": [
    { 
      name: "Git & GitHub", 
      icon: <FaGithub  />, 
      points: ["Version Control & Branching", "Agile Pull Request Reviews", "Merge Conflict Resolution", "CI/CD Workflows"] 
    },
    { 
      name: "Postman", 
      icon: <SiPostman  />, 
      points: ["API Testing & Debugging", "Environment Variables", "Collection Documentation", "Endpoint Mocking"] 
    },
    { 
      name: "JWT & Security", 
      icon: <GrSecure   />, 
      points: ["Token-Based Auth", "Refresh Token Flow", "Password Hashing (Bcrypt)", "Protected Routes"] 
    },
    { 
      name: "Vercel & Cloud", 
      icon: <RiVercelFill  />, 
      points: ["Continuous Deployment (CI/CD)", "Environment Configuration", "Production Monitoring", "Edge Hosting"] 
    },
  ],

  "Domain & Architecture": [
    { 
      name: "ERP / CRM / HRM Systems", 
      icon: <GrDomain  />, 
      points: ["Lead Management Pipelines", "Sales & Dynamic Pricing", "Inventory Stock Ledgers", "Automated Payroll Flow"] 
    },
    { 
      name: "RBAC & Authorization", 
      icon: <RiSecurePaymentLine   />, 
      points: ["Role-Based Access Control", "Granular User Permissions", "Security Middleware", "Access Auditing"] 
    },
    { 
      name: "Data Migration & ETL", 
      icon: <BsDatabaseUp  />, 
      points: ["Bulk Excel Processing", "High-Volume Data Parsing (10k+)", "Data Sanitization", "Automated Imports"] 
    },
  ]
};
export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");
  // Default selected skill is the first one in Frontend (React.js)
  const [selectedSkill, setSelectedSkill] = useState(skillsData["Frontend"][0]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // When changing tabs, default select the first skill of that tab
    setSelectedSkill(skillsData[tab][0]);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>

        {/* Category Tabs */}
        <div className="skills-tabs">
          {Object.keys(skillsData).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            >
              {activeTab === tab && (
                <motion.div layoutId="activeTab" className="active-bg" />
              )}
              <span className="tab-text">{tab}</span>
            </button>
          ))}
        </div>

        {/* Icons Grid */}
        <div className="skills-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="skills-grid"
            >
              {skillsData[activeTab].map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className={`skill-card ${selectedSkill.name === skill.name ? 'selected' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                  {selectedSkill.name === skill.name && (
                    <motion.div layoutId="border-glow" className="card-glow" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4 Points Detail Box (from your sketch) */}
        <div className="skill-details-area">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSkill.name}
              initial={{ opacity: 0, opacity: 0 }}
              animate={{ opacity: 1, opacity: 1 }}
              exit={{ opacity: 0, opacity: 0 }}
              className="details-container"
            >
              <h3 className="details-header">Core Competencies in {selectedSkill.name}</h3>
              <div className="points-grid">
                {selectedSkill.points.map((point, i) => (
                  <motion.div 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="point-item"
                  >
                    <FaRegCheckCircle  className="point-icon" size={18} />
                    <span>{point}</span>
                    <div className="point-line"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}