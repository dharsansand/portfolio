'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css'; 


const navItems = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

export default function Header() {
  const [active, setActive] = useState("Home");

  // 2. The scrolling function
  const scrollToSection = (item) => {
    setActive(item);
    const sectionId = item.toLowerCase(); // converts "About" to "about"
    const element = document.getElementById(sectionId);

    if (element) {
      // Offset for a fixed header if necessary
      const headerOffset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="header">
      <div className="logo">DHARSAN.</div>

      <nav className="nav-bar">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={`nav-button ${active === item ? 'active' : ''}`}
          >
            {active === item && (
              <motion.div 
                layoutId="nav-pill-light" 
                className="nav-pill"
                transition={{ type: "spring", stiffness: 300, damping: 30 }} 
              />
            )}
            <span style={{ position: 'relative', zIndex: 1 }}>{item}</span>
          </button>
        ))}
      </nav>

      <button className="header-hire-btn"  onClick={() => scrollToSection("Contact")} >Hire Me</button>
    </header>
  );
}