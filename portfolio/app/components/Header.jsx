'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

import './Header.css'; 
import { IoIosHome, IoMdContact } from 'react-icons/io';
import { FaCode, FaRegUserCircle } from 'react-icons/fa';
import { VscProject } from 'react-icons/vsc';
import { IoLayers } from 'react-icons/io5';

const navItems = [
  { name: "Home", icon: <IoIosHome  size={18} /> },
  { name: "About", icon: <FaRegUserCircle  size={18} /> },
  { name: "Skills", icon: <FaCode  size={18} /> },
  { name: "Projects", icon: <VscProject  size={18} /> },
  { name: "Services", icon: <IoLayers  size={18} /> },
  { name: "Contact", icon: <IoMdContact  size={18} /> },
];

export default function Header() {
  const [active, setActive] = useState("Home");

  const scrollToSection = (itemName) => {
    setActive(itemName);
    const sectionId = itemName.toLowerCase();
    const element = document.getElementById(sectionId);

    if (element) {
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
            key={item.name}
            onClick={() => scrollToSection(item.name)}
            className={`nav-button ${active === item.name ? 'active' : ''}`}
            aria-label={item.name}
          >
            {active === item.name && (
              <motion.div 
                layoutId="nav-pill-light" 
                className="nav-pill"
                transition={{ type: "spring", stiffness: 300, damping: 30 }} 
              />
            )}
            {/* Icon (visible on mobile) */}
            <span className="nav-icon">{item.icon}</span>
            {/* Text Label (visible on desktop) */}
            <span className="nav-label">{item.name}</span>
          </button>
        ))}
      </nav>

      <button className="header-hire-btn" onClick={() => scrollToSection("Contact")}>
        Hire Me
      </button>
    </header>
  );
}