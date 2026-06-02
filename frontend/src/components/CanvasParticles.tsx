'use client';

import { useEffect, useRef } from 'react';

export default function CanvasParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

    // Set dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      glowColor: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        // Velocities
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        
        // Custom colors representing premium Moraya EV branding
        const colorPicker = Math.random();
        if (colorPicker < 0.4) {
          this.color = 'rgba(3, 192, 60, 0.6)'; // Vibrant Green (#03C03C)
          this.glowColor = '#03C03C';
        } else if (colorPicker < 0.75) {
          this.color = 'rgba(162, 212, 61, 0.5)'; // Lime/Spring Green (#A2D43D)
          this.glowColor = '#A2D43D';
        } else if (colorPicker < 0.9) {
          this.color = 'rgba(242, 243, 244, 0.5)'; // Soft Off-White (#F2F3F4)
          this.glowColor = '#F2F3F4';
        } else {
          this.color = 'rgba(31, 30, 38, 0.4)'; // Obsidian Purple-Black (#1F1E26)
          this.glowColor = '#1F1E26';
        }

        this.size = Math.random() * 2 + 1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.glowColor;
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for performance
      }

      update() {
        // Warp around bounds
        if (this.x < 0 || this.x > canvas!.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas!.height) this.vy = -this.vy;

        this.x += this.vx;
        this.y += this.vy;

        // Interaction with Cursor Force Field
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.hypot(dx, dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius; // Closer = higher force
            const angle = Math.atan2(dy, dx);
            const forceX = Math.cos(angle) * force * 0.9;
            const forceY = Math.sin(angle) * force * 0.9;

            // Soft push away from mouse
            this.x += forceX;
            this.y += forceY;
          }
        }
      }
    }

    const initParticles = () => {
      // Calculate count based on viewport width
      const count = Math.min(Math.floor((canvas!.width * canvas!.height) / 11000), 120);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      const maxDistance = 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (maxDistance - dist) / maxDistance * 0.15; // Closer = brighter connection line
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Connect lines using custom green-to-lime gradient connection
            const grad = ctx.createLinearGradient(
              particles[i].x, particles[i].y, 
              particles[j].x, particles[j].y
            );
            grad.addColorStop(0, `rgba(3, 192, 60, ${alpha})`);
            grad.addColorStop(1, `rgba(162, 212, 61, ${alpha})`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      drawLines();

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none bg-transparent"
    />
  );
}
