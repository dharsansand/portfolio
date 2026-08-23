'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiLayout, FiCode, FiBarChart2, 
  FiSettings, FiLink, FiShield, FiArrowRight 
} from 'react-icons/fi';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Custom ERP & CRM Development",
      description: "Building tailored internal systems to manage leads, inventory, and sales workflows. Centralizing business data into a high-performance dashboard.",
      icon: <FiLayout />,
      features: ["Lead Management", "Inventory Tracking", "Sales Workflows"],
      color: "blue"
    },
    {
      title: "Full-Stack Web Applications",
      description: "Developing end-to-end web solutions using the MERN stack. From responsive frontends in React to secure, scalable backends in Node.js.",
      icon: <FiCode />,
      features: ["SPA Architecture", "State Management", "Responsive UI"],
      color: "emerald"
    },
    {
      title: "Database Optimization & Analytics",
      description: "Optimizing complex queries and data structures. Expert in MongoDB Aggregation for generating real-time Profit/Loss and financial reports.",
      icon: <FiBarChart2 />,
      features: ["60% Query Speedup", "Data Modeling", "Complex Reporting"],
      color: "amber"
    },
    {
      title: "Business Process Automation",
      description: "Automating repetitive tasks like payroll calculations, automated PDF invoice generation, and bulk data migrations.",
      icon: <FiSettings />,
      features: ["PDF Generation", "Bulk Data Tools", "Payroll Engines"],
      color: "purple"
    },
    {
      title: "API Development & Integration",
      description: "Architecting secure RESTful APIs and integrating third-party services like Razorpay for payments or Cloudinary for media storage.",
      icon: <FiLink />,
      features: ["Secure JWT Auth", "Payment Gateways", "Third-party APIs"],
      color: "rose"
    },
    {
      title: "System Architecture & Security",
      description: "Implementing Role-Based Access Control (RBAC) and high-security standards to ensure business data is protected and private.",
      icon: <FiShield />,
      features: ["RBAC Security", "JWT Authentication", "Scalable Design"],
      color: "cyan"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        
        {/* Header */}
        <header className="services-header">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="services-tag"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="services-title"
          >
            Solutions That <span className="text-gradient">Scale Business.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="services-subtitle"
          >
            I help businesses modernize their operations by building custom software that reduces manual work and improves data accuracy.
          </motion.p>
        </header>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="service-card"
            >
              <div className={`service-icon-box ${service.color}`}>
                {service.icon}
              </div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>

              <div className="service-features">
                {service.features.map((feature, i) => (
                  <span key={i} className="feature-pill">{feature}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="cta-banner"
        >
          <div className="cta-content">
            <h3 className="cta-title">Ready to automate your workflow?</h3>
            <p className="cta-text">Let's build a solution tailored specifically to your business needs.</p>
          </div>
          <a href="#contact" className="cta-button">
            Start a Project <FiArrowRight />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;