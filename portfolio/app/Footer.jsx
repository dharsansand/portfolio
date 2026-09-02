'use client';
import { motion } from 'framer-motion';
import { GiThunderBlade } from 'react-icons/gi';
import { LiaLinkedin } from 'react-icons/lia';
import { BsTwitter, BsGlobe2, BsShieldLockFill } from 'react-icons/bs';
import './Footer.css';
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  
  // 1. Same scroll function as your Header
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

          {/* Quick Links - UPDATED TO USE scrollToSection */}
          <motion.div className="footer-col" variants={itemVariants}>
            <span className="footer-heading">EXPLORE</span>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('about')}>About Me</button></li>
              <li><button onClick={() => scrollToSection('projects')}>project</button></li>
              <li><button onClick={() => scrollToSection('services')}>Services</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>

            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div className="footer-col" variants={itemVariants}>
            <span className="footer-heading">SOCIALS</span>
            <ul className="footer-links">
              <li><a href="https://github.com/dharsansand" target="_blank" rel="noreferrer"><FaGithubSquare  /> GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/dharsan-s-b7741a252?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><FaLinkedin  /> LinkedIn</a></li>
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