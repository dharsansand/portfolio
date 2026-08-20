'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = ["Home", "Services", "About", "Portfolio", "Contact"];

export default function Header() {
  const [active, setActive] = useState("Home");

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px 0', position: 'relative', zIndex: 100 }}>
      <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', letterSpacing: '-1.5px' }}>DHARSAN.</div>

      <nav style={{ 
        display: 'flex', 
        background: 'rgba(255, 255, 255, 0.03)', 
        padding: '6px', 
        borderRadius: '100px', 
        border: '1px solid rgba(255, 255, 255, 0.08)', 
        backdropFilter: 'blur(20px)' 
      }}>
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            style={{ 
              position: 'relative', border: 'none', background: 'none', 
              padding: '10px 24px', cursor: 'pointer', 
              color: active === item ? '#fff' : '#94a3b8', 
              transition: '0.3s', fontWeight: 600, fontSize: '0.9rem'
            }}
          >
            {active === item && (
              <motion.div 
                layoutId="nav-pill" 
                style={{ position: 'absolute', inset: 0, background: '#4a7fa7', borderRadius: '100px', zIndex: -1 }} 
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} 
              />
            )}
            {item}
          </button>
        ))}
      </nav>

     <button className="btn-main" style={{ padding: '10px 25px', fontSize: '0.85rem' }}>
        Hire Me
      </button>
    </header>
  );
}