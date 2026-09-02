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
    desc: "Building tailored enterprise systems to streamline lead management, real-time inventory ledgers, and sales pipelines.",
    icon: <LayoutDashboard size={32} />,
    tags: ["LEAD PIPELINES", "INVENTORY LEDGER", "SALES WORKFLOWS"],
    color: "#935073" 
  },
  {
    title: "Full-Stack Web Applications",
    desc: "Engineering scalable, end-to-end web applications with the MERN stack, focused on responsive design and performance.",
    icon: <Code2 size={32} />,
    tags: ["MERN STACK", "RTK QUERY", "RESPONSIVE UI"],
    color: "#F6DBC0"
  },
  {
    title: "Database Optimization",
    desc: "Designing MongoDB aggregation pipelines and indexing strategies to process 100K+ records with minimal latency.",
    icon: <BarChart3 size={32} />,
    tags: ["60% SPEEDUP", "AGGREGATION PIPELINES", "DATA MODELING"],
    color: "#935073"
  },
  {
    title: "Business Process Automation",
    desc: "Automating repetitive business operations, including Puppeteer-based PDF payslips and high-speed Excel data migrations.",
    icon: <Settings2 size={32} />,
    tags: ["PDF GENERATION", "BULK EXCEL (10K+)", "PAYROLL ENGINES"],
    color: "#F6DBC0"
  },
  {
    title: "RESTful API & Payment Integration",
    desc: "Architecting secure backend endpoints with Node.js/Express and integrating third-party services like Razorpay.",
    icon: <Link2 size={32} />,
    tags: ["RESTful ARCHITECTURE", "RAZORPAY API", "DATA VALIDATION"],
    color: "#935073"
  },
  {
    title: "Enterprise Security & RBAC",
    desc: "Implementing multi-tier Role-Based Access Control (RBAC), JWT authentication, and protected route middleware.",
    icon: <ShieldCheck size={32} />,
    tags: ["RBAC PERMISSIONS", "JWT AUTHENTICATION", "DATA PRIVACY"],
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