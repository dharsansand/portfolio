"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
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
          // Message stays for 10 seconds so they can read the 3-hour promise
          setTimeout(() => setStatus(""), 10000); 
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("ERROR");
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-watermark">CONTACT</div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-header"
      >
        <h2 className="contact-title">Get in touch</h2>
        <p className="contact-desc">
          Have questions or ready to transform your business? Let's build something amazing together.
        </p>
      </motion.div>

      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-info"
        >
          <div className="contact-cards">
            {[
              {
                icon: <Mail />,
                label: "Email us",
                value: "dharsansand@gmail.com",
                link: "mailto:dharsansand@gmail.com",
              },
              {
                icon: <Phone />,
                label: "Call us",
                value: "(+91) 9384428585",
                link: "tel:+919384428585",
              },
              {
                icon: <MapPin />,
                label: "Our location",
                value: "4B/1, Nehru Street, Anupparpalayam Pudur, Tiruppur, 641652",
                link: "https://www.google.com/maps/search/?api=1&query=4B/1,+Nehru+Street,+Anupparpalayam+Pudur,+Tiruppur,+Tamil+Nadu+641652",
              },
            ].map((item, i) => (
              <a href={item.link} key={i} className="contact-item-card" target="_blank" rel="noopener noreferrer">
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

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-form-container"
        >
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            {/* HIDDEN FIELDS FOR DATE AND TIME */}
            <input type="hidden" name="date" value={new Date().toLocaleDateString()} />
            <input type="hidden" name="time" value={new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} />
            
            <div className="input-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            
            <div className="input-group">
              <label>Title</label>
              <input type="text" name="title" placeholder="Your Title" required />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email Address" required />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea name="message" placeholder="Tell me about your project..." rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSending}>
              <span>{isSending ? "Sending..." : "Submit"}</span>
              <Send size={18} />
            </button>

            {/* NEW: SUCCESS MESSAGE WITH 3 HR PROMISE */}
            {status === "SUCCESS" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                style={{ marginTop: "20px", padding: "15px", background: "rgba(75, 181, 67, 0.1)", border: "1px solid #4BB543", borderRadius: "10px" }}
              >
                <p style={{ color: "#4BB543", fontWeight: "600", fontSize: "0.95rem", margin: 0 }}>
                  Thank you for contacting me! 
                </p>
                <p style={{ color: "rgba(248, 244, 233, 0.8)", fontSize: "0.85rem", marginTop: "5px" }}>
                  I have received your message and will reply within 3 hours.
                </p>
              </motion.div>
            )}

            {status === "ERROR" && (
              <p style={{ color: "#ff4b4b", marginTop: "15px" }}>Something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}