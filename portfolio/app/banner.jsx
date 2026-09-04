'use client';
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FiDownload, FiArrowUpRight } from 'react-icons/fi';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './home.css';
import Link from "next/link";
import { FiEye } from "react-icons/fi";

const letterVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const containerVariant = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Banner() {
    const [active, setActive] = useState("Home");
  const name = "DHARSAN";

  // Glow Cursor Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
    const scrollToSection = (item) => {
    setActive(item);
    // Convert "Home" to "home" to match element IDs
    const sectionId = item.toLowerCase();
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  return (
    <div id="home" className="hero-banner">
    
      <motion.div 
        className="cursor-dot" 
        style={{ x: cursorX, y: cursorY }} 
      />
      <motion.div 
        className="cursor-glow" 
        style={{ x: cursorX, y: cursorY }} 
      />

      <div className="bg-watermark">PORTFOLIO</div>

      <main className="hero-main">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="greeting">
            <span className="hi">Hi</span> <span className="im">I'm</span>
          </div>
          
          <motion.h1 
            className="name-heading"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <span className="highlight">
              {name.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariant} style={{ display: 'inline-block' }}>
                  {char}
                </motion.span>
              ))}
            </span> 
            <br />
            <span className="subtitle">FULL STACK DEVELOPER(MERN)</span>
          </motion.h1>

          <p className="description">
           MERN Stack Developer with 1+ years of experience building scalable ERP/CRM systems. Expert in React, Node.js, and RTK Query. Proven track record of optimizing database performance by 60% and automating complex business workflows.
          </p>

        <div className="social-links">
  <a 
    href="https://www.instagram.com/dharsan._.27?igsi=MWlkdzJqYTMwMjM0cg==" 
    className="s-icon" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>
  
  <a 
    href="https://www.linkedin.com/in/dharsan-s-b7741a252/" 
    className="s-icon" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaLinkedinIn />
  </a>
  
  <a 
    href="https://github.com/dharsansand" 
    className="s-icon" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>
</div>

          <div className="button-group">
            <button className="hire-btn" onClick={() => scrollToSection("Contact")}>
              HIRE ME <FiArrowUpRight />
            </button>
       <Link href="/resume" style={{ textDecoration: "none" }}>
  <button className="resume-btn">
    <FiEye /> RESUME
  </button>
</Link>
          </div>
        </motion.div>
      </main>

 <motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, y: [0, 10, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
  className="scroll-box"
>
  <div className="mouse-wheel">
    <div className="wheel-dot"></div>
  </div>
  <span>SCROLL DOWN</span>
</motion.div>
    </div>
  );
}