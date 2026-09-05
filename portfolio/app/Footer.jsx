'use client';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation'; // <-- 1. Import usePathname

import './Footer.css';
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const pathname = usePathname(); // <-- 2. Get current URL path

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="footer">
      <div className="footer-blend"></div>

      <div className="footer-scene">
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 0.2 }} transition={{ duration: 1 }} className="mountain m-1" />
        <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 0.4 }} transition={{ duration: 1.2 }} className="mountain m-2" />
        <motion.div initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1.4 }} className="mountain m-3" />
      </div>

      <div className="footer-main">
        <motion.div 
          className="footer-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Identity */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h3 className="footer-logo">DHARSAN.</h3>
            <p className="footer-bio">
              Crafting high-performance digital solutions with a focus on 
              enterprise scalability and elegant user experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="footer-col" variants={itemVariants}>
            <span className="footer-heading">EXPLORE</span>
            <ul className="footer-links">
              {/* Active check for Home */}
              <li>
                <Link href="/" className={pathname === '/' ? 'active' : ''}>
                  Home
                </Link>
              </li>
              {/* Active check for About */}
              <li>
                <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/skills" className={pathname === '/skills' ? 'active' : ''}>
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>
                  Projects
                </Link>
              </li>
            <li>
                <Link href="/services" className={pathname === '/services' ? 'active' : ''}>
                  Services
                </Link>
              </li>
              
                <li>
                <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div className="footer-col" variants={itemVariants}>
            <span className="footer-heading">SOCIALS</span>
            <ul className="footer-links">
              <li><a href="https://github.com/dharsansand" target="_blank" rel="noreferrer"><FaGithubSquare /> GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/dharsan-full-stack-developer/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a></li>
              <li><a href="https://www.instagram.com/dharsan._.27?igsi=MWlkdzJqYTMwMjM0cg==" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a></li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} DHARSAN. Built with passion for technology.
          </div>
        </div>
      </div>
    </footer>
  );
}