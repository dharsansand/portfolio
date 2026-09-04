"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiChevronRight, FiArrowRight } from "react-icons/fi";

// Icons
import { FaReact, FaNode, FaDatabase, FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiVercelFill, RiSecurePaymentLine } from "react-icons/ri";
import { TbBrandRedux, TbHierarchy3 } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiExpressdotcom, SiPuppeteer, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { GiMaterialsScience, GiElectricalSocket } from "react-icons/gi";
import { DiRedis } from "react-icons/di";
import { GrSecure, GrDomain } from "react-icons/gr";
import { BsDatabaseUp } from "react-icons/bs";

import ScrollToTop from "../components/ScrollToTop";
import "./SkillClient.css";

const SkillClient = () => {
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
    <div className="skills-page-wrapper">
      {/* Interactive Cursor */}
      <motion.div className="cursor-glow" style={{ translateX: glowX, translateY: glowY }} />
      <motion.div className="cursor-dot" style={{ translateX: mouseX, translateY: mouseY }} />

      {/* Hero Banner */}
      <section className="skills-hero-section">
        <div className="hero-content-box">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technical Skills & <span>Tech Stack</span>
          </motion.h1>

          <div className="custom-breadcrumbs">
            <Link href="/">Home</Link>
            <FiChevronRight className="sep" />
            <span className="current">skills</span>
          </div>
        </div>
      </section>

      {/* Main Roadmap Tree Section */}
      <main className="roadmap-container">
        <div className="roadmap-board">
          {/* ROOT NODE */}
          <div className="roadmap-root-node">
            <div className="root-icon-circle">
              <TbHierarchy3 size={32} />
            </div>
            <h2>Full-Stack System Architecture</h2>
            <p>MERN Stack • Microservices • High-Throughput Engines</p>
          </div>

          {/* TREE BRANCH LINES */}
          <div className="tree-connector-line"></div>

          {/* ROW 1: PRIMARY TRIO (Frontend, Database, Backend) */}
          <div className="roadmap-level-row level-three">
            {/* FRONTEND */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="roadmap-node-card"
            >
              <div className="node-head">
                <div className="node-icon"><FaReact /></div>
                <h3>Frontend Development</h3>
              </div>
              <ul className="node-points">
                <li><span>React.js</span> & Component Architecture</li>
                <li><span>Next.js</span> (SSR, App Router, SEO)</li>
                <li><span>Redux Toolkit</span> (RTK Query, Caching)</li>
                <li><span>JavaScript (ES6+)</span> Async Logic</li>
                <li><span>Tailwind CSS</span> & Responsive Systems</li>
                <li><span>Material UI</span> Design Components</li>
              </ul>
            </motion.div>

            {/* DATABASE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="roadmap-node-card accent-border"
            >
              <div className="node-head">
                <div className="node-icon"><FaDatabase /></div>
                <h3>Database & Storage</h3>
              </div>
              <ul className="node-points">
                <li><span>MongoDB (Mongoose)</span> Aggregation</li>
                <li><span>Query Optimization</span> (60% Faster)</li>
                <li><span>MySQL</span> Relational Data Modeling</li>
                <li><span>Indexing Strategies</span> & Integrity</li>
                <li><span>Redis</span> In-Memory Key-Value Cache</li>
                <li><span>Session Store</span> & Fast Invalidation</li>
              </ul>
            </motion.div>

            {/* BACKEND */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="roadmap-node-card"
            >
              <div className="node-head">
                <div className="node-icon"><FaNode /></div>
                <h3>Backend Engineering</h3>
              </div>
              <ul className="node-points">
                <li><span>Node.js</span> Event Loop Architecture</li>
                <li><span>Express.js</span> Custom Middleware</li>
                <li><span>RESTful APIs</span> Standard Design</li>
                <li><span>Puppeteer</span> Batch PDF Engine</li>
                <li><span>Socket.io</span> Bi-directional Events</li>
                <li><span>Centralized</span> Error Management</li>
              </ul>
            </motion.div>
          </div>

          {/* SECOND CONNECTOR */}
          <div className="tree-connector-line mid"></div>

          {/* ROW 2: ARCHITECTURE & DEVOPS QUAD */}
          <div className="roadmap-level-row level-four">
            {/* APIs & Realtime */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="roadmap-node-card sub-card"
            >
              <div className="node-head">
                <div className="node-icon"><GiElectricalSocket /></div>
                <h4>API & Automation</h4>
              </div>
              <ul className="node-points compact">
                <li>Postman Testing</li>
                <li>Automated PDF Payslips</li>
                <li>Socket Room Sync</li>
                <li>Rate-Limiting Logic</li>
              </ul>
            </motion.div>

            {/* Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="roadmap-node-card sub-card"
            >
              <div className="node-head">
                <div className="node-icon"><GrSecure /></div>
                <h4>Security & Auth</h4>
              </div>
              <ul className="node-points compact">
                <li>JWT Token & Refresh Flow</li>
                <li>RBAC Role Authorizations</li>
                <li>Bcrypt Password Hashing</li>
                <li>Protected Middleware</li>
              </ul>
            </motion.div>

            {/* DevOps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="roadmap-node-card sub-card"
            >
              <div className="node-head">
                <div className="node-icon"><RiVercelFill /></div>
                <h4>DevOps & Cloud</h4>
              </div>
              <ul className="node-points compact">
                <li>Git & GitHub Collaboration</li>
                <li>Vercel CI/CD Deployment</li>
                <li>Environment Configs</li>
                <li>Production Monitoring</li>
              </ul>
            </motion.div>

            {/* Enterprise Domain */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="roadmap-node-card sub-card"
            >
              <div className="node-head">
                <div className="node-icon"><GrDomain /></div>
                <h4>Enterprise Domain</h4>
              </div>
              <ul className="node-points compact">
                <li>ERP / CRM / HRM Pipelines</li>
                <li>Inventory Stock Ledgers</li>
                <li>Data Migration (10k+ ETL)</li>
                <li>Excel Bulk Processing</li>
              </ul>
            </motion.div>
          </div>

          {/* BOTTOM QUICK-TECH BAR */}
          <div className="roadmap-tech-dock">
            <span className="dock-title">CORE TECHNOLOGIES & STACK</span>
            <div className="dock-icons">
              <span title="React"><FaReact /></span>
              <span title="Next.js"><RiNextjsFill /></span>
              <span title="Node.js"><FaNode /></span>
              <span title="Express.js"><SiExpressdotcom /></span>
              <span title="MongoDB"><SiMongodb /></span>
              <span title="MySQL"><SiMysql /></span>
              <span title="Redis"><DiRedis /></span>
              <span title="Redux"><TbBrandRedux /></span>
              <span title="Tailwind"><SiTailwindcss /></span>
              <span title="Puppeteer"><SiPuppeteer /></span>
              <span title="GitHub"><FaGithub /></span>
              <span title="Postman"><SiPostman /></span>
            </div>
          </div>
        </div>

        {/* --- Bridge Call To Action: Connects to Projects Page --- */}
        <section className="projects-bridge-cta">
          <div className="bridge-glow-orb" />
          <div className="bridge-content">
            <span className="bridge-tag">Architecture in Action</span>
            <h2>Want to see this tech roadmap applied in real apps?</h2>
            <p>
              Check out my production-level ERP systems, automated payroll PDF engines,
              and live dashboards built using this stack.
            </p>
            <Link href="/projects" className="bridge-cta-btn">
              <span>View Production Projects</span>
              <FiArrowRight className="bridge-btn-arrow" />
            </Link>
          </div>
        </section>

        <ScrollToTop />
      </main>
    </div>
  );
};

export default SkillClient;