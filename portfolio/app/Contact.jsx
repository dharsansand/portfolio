'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Send, User } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* Background Watermark */}
      <div className="contact-watermark">CONTACT</div>

      <div className="contact-container">
        {/* LEFT SIDE: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-info"
        >
          <div className="contact-tag">
            <User size={14} /> <span>Contact</span>
          </div>
          <h2 className="contact-title">Get in touch</h2>
          <p className="contact-desc">
            Have questions or ready to transform your business with custom software solutions? 
            Let's build something amazing together.
          </p>

          <div className="contact-cards">
            {[
              { icon: <Mail />, label: "Email us", value: "yourname@gmail.com", link: "mailto:yourname@gmail.com" },
              { icon: <Phone />, label: "Call us", value: "(+91) 98765 43210", link: "tel:+919876543210" },
              { icon: <MapPin />, label: "Our location", value: "Chennai, Tamil Nadu, India", link: "#" }
            ].map((item, i) => (
              <a href={item.link} key={i} className="contact-item-card">
                <div className="item-icon-box">{item.icon}</div>
                <div className="item-text">
                  <span className="item-label">{item.label}</span>
                  <span className="item-value">{item.value}</span>
                </div>
                <ArrowUpRight className="item-arrow" size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-form-container"
        >
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Tell me about your project..." rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span>Submit</span>
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}