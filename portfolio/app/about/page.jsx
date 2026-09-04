"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiPhone,
  FiCheckCircle,
  FiChevronRight,
  FiInstagram,
  FiBriefcase,
  FiTerminal,
  FiAward,
  FiBookOpen,
  FiArrowRight,
} from "react-icons/fi";
import "./AboutPage.css";
import  ScrollToTop from "../components/ScrollToTop"
const AboutPage = () => {
  // --- Glow Cursor & Dot Logic ---
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
    <main className="about-page-wrapper">
      {/* 1. CUSTOM CURSOR ELEMENTS */}
      <motion.div
        className="cursor-glow"
        style={{ translateX: glowX, translateY: glowY, left: -150, top: -150 }}
      />
      <motion.div
        className="cursor-dot"
        style={{ translateX: mouseX, translateY: mouseY }}
      />

    
      <section className="about-hero-section">
        <div className="hero-content-box">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h1>
          <div className="custom-breadcrumbs">
            <Link href="/">Home</Link>
            <FiChevronRight className="sep" />
            <span className="current">About Me</span>
          </div>
        </div>
        <div className="hero-overlay-gradient"></div>
      </section>

      <div className="main-content-container">
        {/* 3. REFINED INTRO CARD */}
        <section className="professional-intro-card">
          <div className="intro-inner-grid">
            <div className="intro-content-left">
              <span className="mini-tag">1+ Year Experience</span>
              <h2 className="display-title">
                Get a website that will make a lasting impression!
              </h2>
              <p className="main-bio">
                My name is <strong>Dharsan S</strong>. I am a{" "}
                <strong>MERN Stack Developer</strong> based in Coimbatore,
                specializing in architecting scalable enterprise systems (ERP,
                CRM, HRM) and high-performance web applications.
              </p>

              <div className="objective-highlight">
                <div className="icon-wrap">
                  <FiCheckCircle />
                </div>
                <p>
                  <strong>Objective:</strong> To contribute high-performance
                  solutions while continuously evolving in a challenging
                  environment.
                </p>
              </div>

             <div className="social-contact-grid">
                <a href="mailto:dharsansand@email.com" className="s-link">
                  <div className="icon-circle"><FiMail /></div>
                  <div className="s-text">
                  
                    <span>dharsansand@email.com</span>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/dharsan-s-b7741a252?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" className="s-link">
                  <div className="icon-circle"><FiLinkedin /></div>
                  <div className="s-text">
                    
                     <span>linkedin.com/dharsan</span>
                  </div>
                </a>
                <a href="https://github.com/dharsansand" target="_blank" className="s-link">
                  <div className="icon-circle"><FiGithub /></div>
                  <div className="s-text">
                   
                   <span>github.com/dharsansand</span>
                  </div>
                </a>
                <a href="https://instagram.com/dharsan._.27" target="_blank" className="s-link">
                  <div className="icon-circle"><FiInstagram /></div>
                  <div className="s-text">
                  <span>@dharsan._.27</span>
                  </div>
                </a>
                <a href="tel:+919384428585" className="s-link">
                  <div className="icon-circle"><FiPhone /></div>
                  <div className="s-text">
                   
                    <span>+91 93844 28585</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="intro-image-right">
              <div className="pill-frame">
                <img
                  src="https://i.pinimg.com/736x/e9/f9/9b/e9f99b387ccdc8fe05554f9cc5508d8d.jpg"
                  alt="Dharsan S"
                />
                <div className="circle-decoration"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. INFOGRAPHIC ROADMAP */}
        <section className="roadmap-section" id="roadmap">
          <h2 className="roadmap-main-title">Professional Roadmap</h2>

          <div className="roadmap-container">
            <svg
              className="roadmap-line"
              viewBox="0 0 100 1200"
              preserveAspectRatio="none"
            >
              <path
                d="M50,0 Q100,150 50,300 T50,600 T50,900 T50,1200"
                fill="none"
                stroke="rgba(147, 80, 115, 0.2)"
                strokeWidth="2"
                strokeDasharray="10,10"
              />
            </svg>

            {/* STEP 01: FULL STACK DEVELOPER */}
            <div className="roadmap-step step-right">
              <div className="step-number">
             <span><FiBriefcase/></span>
              </div>
              <div className="step-dot"></div>
              <div className="step-card pill-left">
                <span className="date">JUL 2025 - PRESENT</span>
                <h4>MERN Stack Developer</h4>
                <p className="org">Infygain Technologies – Coimbatore</p>
                <div className="desc-content">
                  <p>
                    <strong>CRM & Sales:</strong> Engineered Lead Management
                    system with dynamic pricing; improved efficiency by 70%.
                  </p>
                  <p>
                    <strong>Inventory:</strong> Developed real-time inventory
                    system with automated stock updates via Agile/Git.
                  </p>
                  <p>
                    <strong>Financials:</strong> Optimized MongoDB Aggregation
                    pipelines; reduced query response times by 60%.
                  </p>
                  <p>
                    <strong>HRM:</strong> Built automated payroll engine using
                    Puppeteer with secure JWT/RBAC access.
                  </p>
                  <p>
                    <strong>Data:</strong> Engineered Bulk Excel processing
                    migration for 10k+ records in under 5s.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 02: INTERNSHIP */}
            <div className="roadmap-step step-left">
              <div className="step-card pill-right">
                <span className="date">MAR 2025 - JUN 2025</span>
                <h4>MERN Stack Developer Intern</h4>
                <p className="org">Infygain Technologies – Coimbatore</p>
                <div className="desc-content">
                  <p>
                    <strong>Admin & CMS:</strong> Developed dynamic Admin
                    Control Panel for CMS management without code changes.
                  </p>
                  <p>
                    <strong>E-commerce UI:</strong> Built responsive interface
                    with search and wishlist using RTK and Context API.
                  </p>
                  <p>
                    <strong>Payment Gateways:</strong> Integrated Razorpay API
                    for secure structured checkout flows.
                  </p>
                  <p>
                    <strong>Backend API:</strong> Developed secure RESTful APIs
                    in Node.js/Express for dynamic content delivery.
                  </p>
                </div>
              </div>
              <div className="step-dot"></div>
              <div className="step-number">
                <span><FiTerminal /></span>
              </div>
            </div>

            {/* STEP 03: CERTIFICATION */}
            <div className="roadmap-step step-right">
              <div className="step-number">
              <span><FiAward /></span>
              </div>
              <div className="step-dot"></div>
              <div className="step-card pill-left">
                <span className="date">2024 - 2025</span>
                <h4>Full Stack Development</h4>
                <p className="org">Pumo Technovation, Coimbatore</p>
                <div className="desc-content">
                  <p>
                    <strong>Industrial Training:</strong> Intensive professional
                    training in industrial-grade MERN stack applications.
                  </p>
                  <p>
                    <strong>Architecture:</strong> Mastered RESTful API design
                    and state management using Redux Toolkit.
                  </p>
                  <p>
                    <strong>Modern Stack:</strong> Mastered frontend styling and
                    Database Management (SQL and NoSQL).
                  </p>
                </div>
              </div>
            </div>

          
            <div className="roadmap-step step-left">
              <div className="step-card pill-right">
                <span className="date">2020 - 2024</span>
                <h4>B.E. in Computer Science</h4>
                <p className="org">Anna University (Dr. N.G.P. IT)</p>
                <div className="desc-content">
                  <p>
                    <strong>Aggregate Score:</strong> Secured 78% in Bachelor of
                    Engineering.
                  </p>
                  <p>
                    <strong>Coursework:</strong> Strong foundation in DSA, DBMS,
                    Operating Systems, and OOP.
                  </p>
                </div>
              </div>
              <div className="step-dot"></div>
              <div className="step-number">
                 <span><FiBookOpen /></span>
              </div>
            </div>
          </div>
        </section>
          <div className="final-cta-section">
          <h3>Let's build something amazing together</h3>
          <Link href="/contact" className="final-hire-btn">
            Work With Me <FiArrowRight />
          </Link>
        </div>
      </div>
        <ScrollToTop /> 
    </main>
  );
};

export default AboutPage;
