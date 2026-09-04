"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import { Mail, Phone, MapPin, ArrowUpRight, Send, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";

export default function ContactPage() {
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

  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "service_uz9najm";
    const TEMPLATE_ID = "template_jfuh5ms";
    const PUBLIC_KEY = "a2eIp7vHhDNBB1ZCy";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus("SUCCESS");
          setIsSending(false);
          form.current.reset();
          setTimeout(() => setStatus(""), 10000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("ERROR");
          setIsSending(false);
        }
      );
  };

  return (
    <main className="contact-page-wrapper">
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
      <section className="contact-hero-section">
        <div className="hero-content-box">
         

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact <span>Me</span>
          </motion.h1>

          <div className="custom-breadcrumbs">
            <Link href="/">Home</Link>
            <FiChevronRight className="sep" />
            <span className="current">Contact</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="contact-main-content">
        <div className="contact-container">
          
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info-col"
          >
            <div className="info-header">
              <span className="section-subtitle">REACH OUT DIRECTLY</span>
              <h2>Let's discuss your next project</h2>
              <p>
                Have an idea, partnership inquiry, or just want to say hi? 
                Feel free to connect directly or send a message.
              </p>
            </div>

            {/* Live Availability Badge */}
            <div className="availability-card">
              <span className="pulse-dot"></span>
              <span>Available for freelance & full-time roles</span>
            </div>

            {/* Info Cards */}
            <div className="contact-cards-grid">
              <a href="mailto:dharsansand@gmail.com" className="contact-card">
                <div className="card-icon">
                  <Mail size={20} />
                </div>
                <div className="card-details">
                  <span className="card-label">Email Us</span>
                  <span className="card-val">dharsansand@gmail.com</span>
                </div>
                <ArrowUpRight className="arrow-icon" size={18} />
              </a>

              <a href="tel:+919384428585" className="contact-card">
                <div className="card-icon">
                  <Phone size={20} />
                </div>
                <div className="card-details">
                  <span className="card-label">Call Us</span>
                  <span className="card-val">(+91) 9384428585</span>
                </div>
                <ArrowUpRight className="arrow-icon" size={18} />
              </a>

              <a
               
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="card-icon">
                  <MapPin size={20} />
                </div>
                <div className="card-details">
                  <span className="card-label">Location</span>
                  <span className="card-val">Coimbatore, Tamil Nadu, India</span>
                </div>
                <ArrowUpRight className="arrow-icon" size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-form-col"
          >
            <div className="form-wrapper-glass">
              <h3 className="form-title">Send a Message</h3>
              <p className="form-subtitle">Fill out the details and I'll get back to you within 3 hours.</p>

              <form ref={form} onSubmit={sendEmail} className="styled-contact-form">
                <input type="hidden" name="date" value={new Date().toLocaleDateString()} />
                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                />

                <div className="input-row">
                  <div className="input-group">
                    <label>Your Name *</label>
                    <input type="text" name="name" placeholder="Name" required />
                  </div>

                  <div className="input-group">
                    <label>Your Title / Role</label>
                    <input type="text" name="title" placeholder="Full Stack Developer" />
                  </div>
                </div>

                <div className="input-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" placeholder="name@gmail  .com" required />
                </div>

                <div className="input-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell me about your project goals, timelines, etc..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSending}>
                  <span>{isSending ? "Sending message..." : "Send Message"}</span>
                  <Send size={16} />
                </button>

                {status === "SUCCESS" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="alert-success"
                  >
                    <strong>Message sent successfully!</strong>
                    <p>I have received your inquiry and will reply within 3 hours.</p>
                  </motion.div>
                )}

                {status === "ERROR" && (
                  <div className="alert-error">
                    Something went wrong. Please try again or reach out directly by email.
                  </div>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}