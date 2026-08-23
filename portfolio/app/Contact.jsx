'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* Header */}
        <header className="contact-header">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-tag"
          >
            <span className="tag-line"></span>
            <span className="tag-text">Connect</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="contact-title"
          >
            Let's Start a <span className="title-gradient">Conversation.</span>
          </motion.h2>
        </header>

        <div className="contact-grid">
          
          {/* Left Side: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <p className="info-lead">
              I am currently open to new opportunities, collaborations, or discussing 
              how I can help automate your business workflows.
            </p>

            <div className="info-cards">
              {/* Email */}
              <div className="info-card">
                <div className="icon-box"><FiMail /></div>
                <div className="info-content">
                  <span className="info-label">Email Me</span>
                  <a href="mailto:dharsansand@gmail.com" className="info-value">dharsansand@gmail.com</a>
                </div>
              </div>

              {/* Phone */}
              <div className="info-card">
                <div className="icon-box"><FiPhone /></div>
                <div className="info-content">
                  <span className="info-label">Call Me</span>
                  <p className="info-value">+91 9384428585</p>
                </div>
              </div>

              {/* Location */}
              <div className="info-card">
                <div className="icon-box"><FiMapPin /></div>
                <div className="info-content">
                  <span className="info-label">Location</span>
                  <p className="info-value">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn">
                <FiLinkedin /> <span>LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn">
                <FiGithub /> <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="form-wrapper"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" name="name" required
                    onChange={handleChange} placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" name="email" required
                    onChange={handleChange} placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input 
                  type="text" name="subject" required
                  onChange={handleChange} placeholder="Business Inquiry"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea 
                  name="message" rows="5" required
                  onChange={handleChange} placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <FiSend />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;