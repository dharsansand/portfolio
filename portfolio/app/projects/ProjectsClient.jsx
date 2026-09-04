"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { FiChevronRight, FiArrowUpRight } from "react-icons/fi";
import { MdLeaderboard, MdOutlineQueryStats, MdImportExport, MdOutlinePayment, MdOutlineDataUsage, MdSecurity } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";

import "./ProjectsClient.css";

const projects = [
  {
    id: "01",
    category: "ENTERPRISE",
    title: "Integrated Business Suite",
    subtitle: "ERP • CRM • HRM",
    description:
      "An end-to-end enterprise solution automating lead management pipelines, real-time inventory ledgers, and automated payroll with dynamic headless PDF generation.",
    metrics: [
      { label: "Lead Efficiency", value: "+70%", icon: <MdLeaderboard size={16} /> },
      { label: "Query Speed", value: "60% Faster", icon: <MdOutlineQueryStats size={16} /> },
      { label: "Bulk Migration", value: "10K+ in 5s", icon: <MdImportExport size={16} /> },
      { label: "Security", value: "RBAC & JWT", icon: <FaUserLock size={16} /> },
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Puppeteer", "Redis"],
    color: "#935073",
  },
  {
    id: "02",
    category: "COMMERCE & CMS",
    title: "Dynamic E-commerce Platform",
    subtitle: "CMS • PAYMENTS • CART",
    description:
      "A high-performance commerce platform featuring a zero-code dynamic admin CMS panel, persistent cart state, and secure Razorpay payment gateway integration.",
    metrics: [
      { label: "Admin Panel", value: "Zero-Code", icon: <GrUserAdmin size={16} /> },
      { label: "Payment Gateway", value: "Razorpay", icon: <MdOutlinePayment size={16} /> },
      { label: "State Engine", value: "RTK Query", icon: <MdOutlineDataUsage size={16} /> },
      { label: "Auth Flow", value: "JWT Secure", icon: <MdSecurity size={16} /> },
    ],
    tech: ["React", "Node.js", "Express.js", "Redux Toolkit", "Razorpay", "Tailwind CSS"],
    color: "#b86b93",
  },
];

const categories = ["ALL", "ENTERPRISE", "COMMERCE & CMS"];

const ProjectsClient = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  // Mouse Cursor Motion
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

  const filteredProjects =
    activeTab === "ALL"
      ? projects
      : projects.filter((proj) => proj.category === activeTab);

  return (
    <div className="projects-page-wrapper">
      {/* Interactive Cursor */}
      <motion.div
        className="cursor-glow"
        style={{ translateX: glowX, translateY: glowY }}
      />
      <motion.div
        className="cursor-dot"
        style={{ translateX: mouseX, translateY: mouseY }}
      />

      {/* Hero Banner */}
      <section className="projects-hero-section">
        <div className="hero-content-box">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Featured <span>Projects</span>
          </motion.h1>

          <div className="custom-breadcrumbs">
            <Link href="/">Home</Link>
            <FiChevronRight className="sep" />
            <span className="current">Projects</span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="projects-container">
        {/* Filter Tabs */}
        <div className="projects-filter-nav">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeTab === cat ? "active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
              <span className="filter-count">
                {cat === "ALL"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Project Showcase List */}
        <div className="showcase-list">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="showcase-card"
                style={{ "--project-glow": project.color }}
              >
                {/* Background ID Watermark */}
                <span className="card-watermark">{project.id}</span>

                {/* Header Row */}
                <div className="showcase-header">
                  <div className="header-meta">
                    <span className="category-pill">{project.category}</span>
                    <span className="subtitle-pill">{project.subtitle}</span>
                  </div>
                  <div className="project-id-badge">#{project.id}</div>
                </div>

                {/* Main Content Info */}
                <div className="showcase-body">
                  <h2 className="showcase-title">{project.title}</h2>
                  <p className="showcase-desc">{project.description}</p>
                </div>

                {/* Impact Metrics Grid */}
                <div className="metrics-grid">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="metric-box">
                      <div className="metric-icon-wrap">{metric.icon}</div>
                      <div className="metric-info">
                        <span className="metric-value">{metric.value}</span>
                        <span className="metric-label">{metric.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer: Tech Stack Badges */}
                <div className="showcase-footer">
                  <div className="tech-stack-wrap">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="tech-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* <button className="view-detail-btn" aria-label="Explore Project">
                    <span>Explore Architecture</span>
                    <FiArrowUpRight className="btn-arrow" />
                  </button> */}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default ProjectsClient;