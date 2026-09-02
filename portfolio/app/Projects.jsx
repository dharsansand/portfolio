'use client';
import { motion } from 'framer-motion';

import './Projects.css';


import { MdImportExport, MdLeaderboard, MdOutlineDataUsage, MdOutlinePayment, MdOutlineQueryStats, MdSecurity } from 'react-icons/md';
import { FaUserLock } from 'react-icons/fa';
import { GrUserAdmin } from 'react-icons/gr';

const projects = [
  {
    id: "01",
    category: "ENTERPRISE",
    title: "Integrated Business Suite",
    subtitle: "ERP • CRM • HRM",
    description: "An end-to-end enterprise solution automating lead management, real-time inventory ledgers, and automated payroll with dynamic PDF generation.",
    metrics: [
      { label: "Lead Efficiency", value: "+70%", icon: <MdLeaderboard  size={14} /> },
      { label: "Query Speed", value: "60% Faster", icon: <MdOutlineQueryStats  size={14} /> },
      { label: "Bulk Migration", value: "10K+ in 5s", icon: <MdImportExport  size={14} /> },
      { label: "Security", value: "RBAC & JWT", icon: <FaUserLock  size={14} /> }
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Puppeteer","Redis"],
    color: "#935073" 
  },
  {
    id: "02",
    category: "COMMERCE & CMS",
    title: "Dynamic E-commerce Platform",
    subtitle: "CMS • PAYMENTS • CART",
    description: "A responsive commerce platform featuring a zero-code dynamic admin CMS panel, persistent cart state, and secure Razorpay payment gateway integration.",
    metrics: [
      { label: "Admin Panel", value: "Zero-Code", icon: <GrUserAdmin  size={14} /> },
      { label: "Payment Gateway", value: "Razorpay", icon: <MdOutlinePayment  size={14} /> },
      { label: "State Engine", value: "RTK Query", icon: <MdOutlineDataUsage  size={14} /> },
      { label: "Auth Flow", value: "JWT Secure", icon: <MdSecurity  size={14} /> }
    ],
    tech: ["React", "Node.js", "Express.js", "Redux Toolkit", "Razorpay", "Tailwind CSS"],
    color: "#2C3E50" 
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Background Decorative Title */}
        <div className="section-header">
            <span className="outline-text">WORK</span>
            <h2 className="main-title">Selected Projects</h2>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="project-row"
            >
              {/* LARGE BACKGROUND NUMBER (The 01 / 02) */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="project-number"
              >
                {project.id}
              </motion.div>

              {/* Main Content Box */}
              <div className="project-main-box">
                <div className="glass-inner">
                    <span className="proj-cat">{project.category}</span>
                    <h3 className="proj-title">{project.title}</h3>
                    <p className="proj-sub">{project.subtitle}</p>
                    <p className="proj-desc">{project.description}</p>
                    
                    <div className="proj-tags">
                        {project.tech.map(t => <span key={t}>#{t}</span>)}
                    </div>
                </div>
              </div>

              {/* Floating Metrics (Shown only if project.metrics has data) */}
              <div className="metrics-floating-box">
                {project.metrics.map((m, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 80, 115, 0.2)" }}
                    className="metric-chip"
                  >
                    <div className="chip-icon" style={{color: project.color}}>{m.icon}</div>
                    <div>
                        <span className="chip-val">{m.value}</span>
                        <span className="chip-lab">{m.label}</span>
                    </div>
                  </motion.div>
                ))}
                
              
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}