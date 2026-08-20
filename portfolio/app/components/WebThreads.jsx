'use client';
import { useRef, useEffect } from 'react';

export default function WebThreads() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    let particles = [];
    let animationFrameId;
    const symbols = ['{', '}', '</>', ';', '=>', '[]'];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.char = symbols[Math.floor(Math.random() * symbols.length)];
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
    }

    function init() {
      particles = [];
      const count = Math.min((canvas.width * canvas.height) / 25000, 45);
      for (let i = 0; i < count; i++) particles.push(new Particle());
    }

    function animate() {
      ctx.fillStyle = '#0a1931';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid
      ctx.strokeStyle = 'rgba(74, 127, 167, 0.04)';
      ctx.lineWidth = 1;
      for(let i=0; i<canvas.width; i+=60) {
        ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i,canvas.height); ctx.stroke();
      }

      particles.forEach((p, i) => {
        p.update();
        ctx.font = '14px monospace';
        ctx.fillStyle = 'rgba(179, 207, 229, 0.25)';
        ctx.fillText(p.char, p.x, p.y);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distSq = (p.x - p2.x)**2 + (p.y - p2.y)**2;
          if (distSq < 30000) {
            ctx.strokeStyle = `rgba(74, 127, 167, ${0.25 - distSq/30000})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); animate();
    return () => { window.removeEventListener('resize', handleResize); cancelAnimationFrame(animationFrameId); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0 }} />;
}