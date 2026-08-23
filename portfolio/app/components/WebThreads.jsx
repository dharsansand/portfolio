'use client';
import { useRef, useEffect } from 'react';

export default function WebThreads() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    let particles = [];
    let animationFrameId;
    let mouse = { x: null, y: null };

    // Expanded symbol list with your keywords
    const symbols = [
      'GET', 'POST', 'PUT', 'DELETE', 
      'useEffect', 'useState', 
      'find', 'findOne', 'updateOne', 'updateMany',
      '{ }', '</>', '=>', '[]', ';', 'async', 'await'
    ];

    const handleResize = () => {
      // Handle High DPI screens for sharpness
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      init();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    class Particle {
      constructor() {
        this.reset();
        // Random starting position
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
      }

      reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.char = symbols[Math.floor(Math.random() * symbols.length)];
        this.fontSize = Math.floor(Math.random() * 4) + 12; // 12px to 16px
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around screen instead of bouncing for a smoother feel
        if (this.x < -50) this.x = window.innerWidth + 50;
        if (this.x > window.innerWidth + 50) this.x = -50;
        if (this.y < -50) this.y = window.innerHeight + 50;
        if (this.y > window.innerHeight + 50) this.y = -50;
      }

      draw() {
        ctx.font = `600 ${this.fontSize}px "JetBrains Mono", monospace`;
        ctx.fillStyle = 'rgba(100, 200, 255, 0.4)';
        ctx.fillText(this.char, this.x, this.y);
      }
    }

    function init() {
      particles = [];
      // Density-based particle count
      const count = Math.min((window.innerWidth * window.innerHeight) / 15000, 60);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      // Dark Professional Background
      ctx.fillStyle = '#020617'; 
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Subtle Grid System
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.3)';
      ctx.lineWidth = 1;
      const step = 80;
      for (let x = 0; x < window.innerWidth; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, window.innerHeight); ctx.stroke();
      }
      for (let y = 0; y < window.innerHeight; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(window.innerWidth, y); ctx.stroke();
      }

      particles.forEach((p, i) => {
        p.update();
        p.draw();

        // Connect to mouse
        const dxMouse = p.x - mouse.x;
        const dyMouse = p.y - mouse.y;
        const mouseDist = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (mouseDist < 180) {
          ctx.strokeStyle = `rgba(100, 210, 255, ${0.15 * (1 - mouseDist / 180)})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // Connect to other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.strokeStyle = `rgba(148, 163, 184, ${0.2 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        display: 'block',
        background: '#020617'
      }}
    />
  );
}