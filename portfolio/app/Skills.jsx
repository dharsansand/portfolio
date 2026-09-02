'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Database, Terminal, Globe, Settings, 
  Layers, Cpu, ShieldCheck, Box, Workflow, CheckCircle2 
} from 'lucide-react';
import './Skills.css';

const skillsData = {
  "Frontend": [
    { name: "React.js", icon: <Code2 />, points: ["Hooks & Custom Logic", "Virtual DOM Optimization", "Component Architecture", "State Management (Context)"] },
    { name: "Next.js", icon: <Globe />, points: ["Server Side Rendering", "App Router & Routing", "SEO Optimization", "API Routes"] },
    { name: "JavaScript (ES6+)", icon: <Terminal />, points: ["Async/Await & Promises", "ES6+ Modern Syntax", "DOM Manipulation", "Functional Programming"] },
    { name: "Redux Toolkit", icon: <Layers />, points: ["Global State Management", "RTK Query Integration", "Slices & Reducers", "Middleware Setup"] },
    { name: "Tailwind CSS", icon: <Box />, points: ["Responsive Design", "Utility-First Styling", "Custom Configurations", "Animation Layouts"] },
    { name: "Material UI", icon: <Box />, points: ["Theming & Customization", "Component Library", "Grid Layout System", "Responsive UI Elements"] },
  ],
  "Backend": [
    { name: "Node.js", icon: <Cpu />, points: ["Event Loop & Perf", "File System API", "NPM Ecosystem", "Environment Config"] },
    { name: "Express.js", icon: <Terminal />, points: ["Middleware Design", "REST API Development", "Error Handling", "Authentication"] },
    { name: "RESTful APIs", icon: <Settings />, points: ["Endpoint Security", "CRUD Operations", "Status Codes", "Data Transformation"] },
    { name: "Socket.io", icon: <Workflow />, points: ["Real-time Messaging", "Event Handling", "Binary Streaming", "Room Management"] },
    { name: "Puppeteer", icon: <Code2 />, points: ["Headless Browsing", "Web Scraping", "PDF Generation", "Automated Testing"] },
    { name: "Redis", icon: <Database />, points: ["Caching Strategy", "Pub/Sub Logic", "Session Storage", "Key-Value Design"] },
  ],
  "Database": [
    { name: "MongoDB", icon: <Database />, points: ["Mongoose Modeling", "Aggregation Pipeline", "NoSQL Schema Design", "Index Optimization"] },
    { name: "MySQL", icon: <Database />, points: ["Relational Mapping", "Query Optimization", "Stored Procedures", "Join Operations"] },
  ],
  "Tools & DevOps": [
    { name: "Git/GitHub", icon: <Terminal />, points: ["Version Control", "Branching Workflows", "Pull Request Reviews", "Actions CI/CD"] },
    { name: "Postman", icon: <Settings />, points: ["API Documentation", "Environment Vars", "Automated Testing", "Mock Servers"] },
  ],
  "Domain": [
    { name: "ERP/CRM Systems", icon: <Layers />, points: ["Business Logic", "Enterprise Workflows", "Data Management", "Process Automation"] },
    { name: "RBAC", icon: <ShieldCheck />, points: ["Permission Logic", "User Roles", "Security Middleware", "Access Control"] },
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
                    <CheckCircle2 className="point-icon" size={18} />
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