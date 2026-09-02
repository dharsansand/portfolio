'use client';
import { motion } from 'framer-motion';
// import { ExternalLink, Github, Shield, Zap, BarChart3 } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: "01",
    category: "ENTERPRISE",
    title: "Integrated Business Suite",
    subtitle: "ERP • CRM • HRM",
    description: "A high-performance ecosystem designed to automate complex business workflows. Focused on data integrity and process speed.",
    metrics: [
      //  { label: "Efficiency", value: "70%", icon: <Zap size={14}/> },
      //  { label: "Speed", value: "60%", icon: <BarChart3 size={14}/> },
      //  { label: "Security", value: "RBAC", icon: <Shield size={14}/> }
    ],
    tech: ["React", "Node.js", "MongoDB"],
    color: "#935073" 
  },
  {
    id: "02",
    category: "COMMERCE",
    title: "Dynamic E-commerce",
    subtitle: "CMS • PAYMENTS",
    description: "Scalable retail platform with a zero-code admin panel and high-security payment integrations.",
    metrics: [
      //  { label: "Setup", value: "0-Code", icon: <Zap size={14}/> },
      //  { label: "Uptime", value: "99.9%", icon: <BarChart3 size={14}/> },
      //  { label: "Auth", value: "JWT", icon: <Shield size={14}/> }
    ],
    tech: ["Next.js", "MySQL", "Tailwind"],
    color: "#F6DBC0" 
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