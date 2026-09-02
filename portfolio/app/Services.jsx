'use client';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Code2, BarChart3, 
  Settings2, Link2, ShieldCheck, ArrowRight 
} from 'lucide-react';
import './Services.css';

const services = [
  {
    title: "Custom ERP & CRM Development",
    desc: "Building tailored internal systems to manage leads, inventory, and sales workflows.",
    icon: <LayoutDashboard size={32} />,
    tags: ["LEAD MANAGEMENT", "INVENTORY TRACKING", "SALES WORKFLOWS"],
    color: "#935073" 
  },
  {
    title: "Full-Stack Web Applications",
    desc: "Developing end-to-end web solutions using the MERN stack. Responsive and secure.",
    icon: <Code2 size={32} />,
    tags: ["SPA ARCHITECTURE", "STATE MANAGEMENT", "RESPONSIVE UI"],
    color: "#F6DBC0"
  },
  {
    title: "Database Optimization",
    desc: "Optimizing complex queries and data structures for real-time aggregation.",
    icon: <BarChart3 size={32} />,
    tags: ["60% QUERY SPEEDUP", "DATA MODELING", "REPORTING"],
    color: "#935073"
  },
  {
    title: "Business Automation",
    desc: "Automating repetitive tasks like payroll and automated PDF invoice generation.",
    icon: <Settings2 size={32} />,
    tags: ["PDF GENERATION", "BULK DATA TOOLS", "PAYROLL ENGINES"],
    color: "#F6DBC0"
  },
  {
    title: "API Development",
    desc: "Architecting secure RESTful APIs and integrating third-party payment services.",
    icon: <Link2 size={32} />,
    tags: ["SECURE JWT AUTH", "PAYMENT GATEWAYS", "API DESIGN"],
    color: "#935073"
  },
  {
    title: "System Architecture",
    desc: "Implementing RBAC and high-security standards for enterprise data privacy.",
    icon: <ShieldCheck size={32} />,
    tags: ["RBAC SECURITY", "JWT AUTH", "SCALABLE DESIGN"],
    color: "#F6DBC0"
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="services-header"
        >
           <h2 className="section-title">My Services</h2>
           <p className="section-subtitle">Premium solutions for modern enterprises</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10 }}
              className="service-card-modern"
            >
              {/* Background Glow Effect */}
              <div className="card-glow" style={{ background: `radial-gradient(circle at top right, ${service.color}30, transparent)` }}></div>
              
              <div className="card-content">
                <div className="icon-box" style={{ color: service.color }}>
                  {service.icon}
                </div>
                
                <h3 className="card-title-modern">{service.title}</h3>
                <p className="card-desc-modern">{service.desc}</p>

                {/* Tags revealed on hover */}
                <div className="reveal-content">
                    <div className="tag-line"></div>
                    <div className="card-tags">
                        {service.tags.map(tag => (
                            <span key={tag} className="tag-pill">#{tag}</span>
                        ))}
                    </div>
                    <div className="learn-more-btn" style={{ color: service.color }}>
                        Learn More <ArrowRight size={16} />
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}