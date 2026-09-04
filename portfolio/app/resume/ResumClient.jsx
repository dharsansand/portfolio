"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  FiChevronRight,
  FiDownload,
  FiExternalLink,
  FiMail,
  FiPhone,
  FiLoader,
} from "react-icons/fi";
import "./ResumClient.css";

// Google Drive File ID
const FILE_ID = "1s08EW2kHdc3txzOzRCHNuUg-xNfLmD0A";

// Embedded viewer URL (renders inline preview on all devices)
const previewEmbedUrl = `https://drive.google.com/file/d/${FILE_ID}/preview`;

// Direct Download URL (triggers download only when clicked)
const downloadUrl = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

const ResumeClient = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  // Custom Cursor
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

  // Handle Download ONLY when clicking the Download button
  const handleDownload = () => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.target = "_blank";
    link.download = "Dharsan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsDownloading(false), 1200);
  };

  return (
    <div className="resume-page-wrapper">
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
      <section className="resume-hero-section">
        <div className="hero-content-box">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Curriculum <span>Vitae</span>
          </motion.h1>

          <div className="custom-breadcrumbs">
            <Link href="/">Home</Link>
            <FiChevronRight className="sep" />
            <span className="current">Resume</span>
          </div>
        </div>
      </section>

      {/* Main Resume Container */}
      <main className="resume-container">
        {/* Action Header Card */}
        <div className="resume-action-bar">
          <div className="resume-meta">
            <h2>Dharsan S</h2>
            <p>Full Stack Developer (MERN)</p>
            <div className="contact-quick-links">
              <span>
                <FiMail /> dharsansand@gmail.com
              </span>
              <span>
                <FiPhone /> +91 9384428585
              </span>
            </div>
          </div>

          <div className="resume-buttons-group">
            {/* Download Button (Triggers download only on click) */}
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="action-btn download-btn"
              aria-label="Download Resume"
            >
              {isDownloading ? (
                <FiLoader className="spin-icon" />
              ) : (
                <FiDownload />
              )}
              <span>{isDownloading ? "Downloading..." : "Download PDF"}</span>
            </button>

          
          </div>
        </div>

        {/* Guaranteed Inline PDF Preview */}
        <div className="pdf-viewer-frame-wrap">
          <iframe
            src={previewEmbedUrl}
            title="Dharsan S - Resume Preview"
            className="pdf-embed-element"
            allow="autoplay"
          />
        </div>
      </main>
    </div>
  );
};

export default ResumeClient;