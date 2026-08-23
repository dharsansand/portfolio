'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css'; 

const navItems = ["Home", "About", "Skills", "Project", "Contact"];

export default function Header() {
  const [active, setActive] = useState("Home");

  return (
    <header className="header">
      <div className="logo">DHARSAN.</div>

      <nav className="nav-bar">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`nav-button ${active === item ? 'active' : ''}`}
          >
            {active === item && (
              <motion.div 
                layoutId="nav-pill" 
                className="nav-pill"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} 
              />
            )}
            {item}
          </button>
        ))}
      </nav>

      <button className="btn-main header-hire-btn">
        Hire Me
      </button>
    </header>
  );
}