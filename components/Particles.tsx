'use client';

import { useEffect, useRef } from 'react';
import { useSite } from '@/lib/site-context';

const PARTICLE_COUNT = 160;

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useSite();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const color = theme === 'light' ? '120, 120, 120' : '160, 160, 160';

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];

    function makeParticles() {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.45,
      }));
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeParticles();
    }

    resize();
    window.addEventListener('resize', resize);

    let frameId = 0;

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (const p of particles) {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${color}, ${p.alpha})`;
        ctx!.fill();
      }
      if (!prefersReducedMotion) {
        frameId = requestAnimationFrame(draw);
      }
    }

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="particles-canvas" aria-hidden="true" />;
}
