'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation'; // Import these
import Link from 'next/link';

import './Header.css'; 
import { IoIosHome, IoMdContact } from 'react-icons/io';
import { FaCode, FaRegUserCircle } from 'react-icons/fa';
import { VscProject } from 'react-icons/vsc';
import { IoLayers } from 'react-icons/io5';

const navItems = [
  { name: "Home", icon: <IoIosHome size={18} /> },
  { name: "About", icon: <FaRegUserCircle size={18} /> },
  { name: "Skills", icon: <FaCode size={18} /> },
  { name: "Projects", icon: <VscProject size={18} /> },
  { name: "Services", icon: <IoLayers size={18} /> },
  { name: "Contact", icon: <IoMdContact size={18} /> },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState("Home");

  // Update active state based on current URL
  useEffect(() => {
    if (pathname === '/about') {
      setActive("About");
    }
    if(pathname === '/contact'){
      setActive("Contact");
 }
   if(pathname === '/skills'){
      setActive("Skills");
 }
    if(pathname === '/projects'){
      setActive("Projects");
 }
 if(pathname === '/services'){
      setActive("Services");
 }
 

    
    else if (pathname === '/') {
      setActive("Home");
    }
  }, [pathname]);

  const handleNavClick = (itemName) => {
    const sectionId = itemName.toLowerCase();

    // 1. If clicking "About", always go to the About Page
    if (itemName === "About") {
      router.push('/about');
      return;
    }
   if (itemName === "Contact") {
      router.push('/contact');
      return;
    }
     if (itemName === "Skills") {
      router.push('/skills');
      return;
    }
    if (itemName === "Projects") {
      router.push('/projects');
      return;
    }
    if (itemName === "Services") {
      router.push('/services');
      return;
    }



    // 2. If on the Home page, scroll smoothly
    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        setActive(itemName);
      }
    } 
    // 3. If on /about and clicking other items, go to Home page first
    else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <header className="header">
        <Link href="/" className="logo">
          DHARSAN.
        </Link>

      <nav className="nav-bar">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavClick(item.name)}
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
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.name}</span>
          </button>
        ))}
      </nav>

      <button className="header-hire-btn" onClick={() => handleNavClick("Contact")}>
        Hire Me
      </button>
    </header>
  );
}