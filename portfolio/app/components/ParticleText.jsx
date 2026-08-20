'use client';
import { useRef, useEffect } from 'react';

export default function ParticleText({ text }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let offset = 0;

    const setupCanvas = () => {
      // Handle high-dpi (Retina) screens for maximum sharpness
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = canvas.parentElement.offsetWidth;
      const displayHeight = 100;
      
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;
      
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, width, height);
      
      // 1. Text Style (Pro Bold)
      const fontSize = width < 500 ? 32 : 55;
      ctx.font = `900 ${fontSize}px "Inter", sans-serif`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';

      // 2. Pure White Glow (Shadows are CPU heavy, so we use them sparingly)
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
      
      // 3. The "Energy" Dash Logic
      // Dash length 100, Space 200
      ctx.setLineDash([100, 200]); 
      ctx.lineDashOffset = -offset;
      
      // 4. Primary White Outline
      ctx.strokeStyle = '#f4f6f7';
      ctx.lineWidth = 2;
      ctx.strokeText(text, 5, height / 2);

      // 5. Subtle Readable Ghost Fill (No dash here)
      ctx.setLineDash([]); 
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgb(144, 156, 160)';
      ctx.fillText(text, 5, height / 2);

      // 6. Smooth Animation Speed
      offset += 1.2; 
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', setupCanvas);
    setupCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', setupCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [text]);

  return (
    <div style={{ width: '100%', overflow: 'hidden', pointerEvents: 'none' }}>
      <canvas 
        ref={canvasRef} 
        style={{ 
          display: 'block',
          filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'
        }} 
      />
    </div>
  );
}