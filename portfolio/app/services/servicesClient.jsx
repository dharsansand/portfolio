"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiChevronRight, FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import { 
  LayoutDashboard, 
  Code2, 
  BarChart3, 
  Settings2, 
  Link2, 
  ShieldCheck,
  Terminal,
  Cpu
} from "lucide-react";

import ScrollToTop from "../components/ScrollToTop";
import "./servicesClient.css";

const services = [
  {
    id: "01",
    keyword: "ENTERPRISE ARCHITECTURE",
    title: "Custom ERP & CRM Development",
    desc: "Building tailored enterprise systems to streamline lead management, real-time inventory ledgers, and sales pipelines.",
    icon: <LayoutDashboard size={28} />,
    tags: ["LEAD PIPELINES", "INVENTORY LEDGER", "SALES WORKFLOWS"],
    accent: "#935073",
    metrics: "End-to-End Enterprise Scale"
  },
  {
    id: "02",
    keyword: "FULL STACK ENGINEERING",
    title: "Full-Stack Web Applications",
    desc: "Engineering scalable, end-to-end web applications with the MERN stack, focused on responsive design and performance.",
    icon: <Code2 size={28} />,
    tags: ["MERN STACK", "RTK QUERY", "RESPONSIVE UI"],
    accent: "#F6DBC0",
    metrics: "High Velocity React & Next.js"
  },
  {
    id: "03",
    keyword: "HIGH-THROUGHPUT DATA",
    title: "Database Optimization",
    desc: "Designing MongoDB aggregation pipelines and indexing strategies to process 100K+ records with minimal latency.",
    icon: <BarChart3 size={28} />,
    tags: ["60% SPEEDUP", "AGGREGATION PIPELINES", "DATA MODELING"],
    accent: "#935073",
    metrics: "60% Query Latency Cut"
  },
  {
    id: "04",
    keyword: "AUTOMATION ENGINES",
    title: "Business Process Automation",
    desc: "Automating repetitive business operations, including Puppeteer-based PDF payslips and high-speed Excel data migrations.",
    icon: <Settings2 size={28} />,
    tags: ["PDF GENERATION", "BULK EXCEL (10K+)", "PAYROLL ENGINES"],
    accent: "#F6DBC0",
    metrics: "10,000+ Records In Seconds"
  },
  {
    id: "05",
    keyword: "INTEGRATION & TRANSACTIONS",
    title: "RESTful API & Payment Integration",
    desc: "Architecting secure backend endpoints with Node.js/Express and integrating third-party services like Razorpay.",
    icon: <Link2 size={28} />,
    tags: ["RESTful ARCHITECTURE", "RAZORPAY API", "DATA VALIDATION"],
    accent: "#935073",
    metrics: "Bank-Grade Encryption Flow"
  },
  {
    id: "06",
    keyword: "SECURITY & GOVERNANCE",
    title: "Enterprise Security & RBAC",
    desc: "Implementing multi-tier Role-Based Access Control (RBAC), JWT authentication, and protected route middleware.",
    icon: <ShieldCheck size={28} />,
    tags: ["RBAC PERMISSIONS", "JWT AUTHENTICATION", "DATA PRIVACY"],
    accent: "#F6DBC0",
    metrics: "Zero-Trust Role Access"
  }
];

const ServicesClient = () => {
  // Cursor Motion
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const springConfig = { damping: 25, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="services-page-wrapper">
      {/* Interactive Cursor */}
      <motion.div className="cursor-glow" style={{ translateX: glowX, translateY: glowY }} />
      <motion.div className="cursor-dot" style={{ translateX: mouseX, translateY: mouseY }} />

      {/* Hero Banner */}
      <section className="services-hero-section">
        <div className="hero-content-box">
        

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Specialized <span>Engineering Services</span>
          </motion.h1>

          <div className="custom-breadcrumbs">
            <Link href="/">Home</Link>
            <FiChevronRight className="sep" />
            <span className="current">services</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="services-container">
        {/* Terminal Header Banner */}
        <div className="terminal-header-panel">
          <div className="terminal-controls">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="terminal-title"><Terminal size={14} /> services.manifest.js</span>
          </div>
          <div className="terminal-status">
            SYSTEM_STATUS: <span className="status-live">AVAILABLE FOR HIRE</span>
          </div>
        </div>

        {/* Blueprint Bento Matrix Grid */}
        <div className="services-matrix-grid">
          {services.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="matrix-service-card"
              style={{ "--card-accent": item.accent }}
            >
              {/* Top Meta Line */}
              <div className="card-top-bar">
                <div className="service-id-tag">
                  <span className="hash">//</span> {item.id}
                </div>
                <div className="service-keyword-pill">{item.keyword}</div>
              </div>

              {/* Service Icon & Main Details */}
              <div className="service-body">
                <div className="icon-container">
                  {item.icon}
                </div>
                <h2 className="service-title">{item.title}</h2>
                <p className="service-description">{item.desc}</p>
              </div>

              {/* Highlight Metric Callout */}
              <div className="metric-callout">
                <FiCheckCircle className="metric-check" />
                <span>{item.metrics}</span>
              </div>

              {/* Terminal Tags / Keywords */}
              <div className="service-keywords-dock">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="keyword-chip">
                    [{tag}]
                  </span>
                ))}
              </div>

              {/* Card Corner Action Glow */}
              <div className="card-action-cue">
                <FiArrowUpRight size={18} />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Quick Contact / Quote Bridge */}
        <div className="services-cta-banner">
          <div className="cta-left">
            <h3>Need a custom enterprise architecture or high-scale web application?</h3>
            <p>I build production-tested MERN solutions from database pipelines to UI.</p>
          </div>
          <Link href="/contact" className="cta-action-button">
            <span>Initiate Project Consultation</span>
            <FiArrowUpRight />
          </Link>
        </div>

        <ScrollToTop />
      </main>
    </div>
  );
};

export default ServicesClient;