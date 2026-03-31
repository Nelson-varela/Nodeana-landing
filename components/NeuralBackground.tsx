'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
}

export function NeuralBackground({ dim = 1 }: { dim?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dimRef = useRef(dim);
  dimRef.current = dim;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let running = false;
    let nodes: Node[] = [];
    const NODE_COUNT = Math.round(90 * (0.4 + 0.6 * dim));
    const MAX_DIST = 200;
    const SPEED = 0.28;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * SPEED,
          vy: (Math.random() - 0.5) * SPEED,
          radius: Math.random() * 2 + 1,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = () => {
      if (!running) return;
      const d = dimRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        n.pulsePhase += 0.018;
      }

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = dx * dx + dy * dy;
          if (dist < MAX_DIST * MAX_DIST) {
            const t = 1 - Math.sqrt(dist) / MAX_DIST;
            const opacity = t * t * 0.5 * d;
            const usePurple = (i + j) % 5 === 0;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = usePurple
              ? `rgba(167,139,250,${opacity})`
              : `rgba(34,211,238,${opacity})`;
            ctx.lineWidth = t * 1.2;
            ctx.stroke();
          }
        }
      }

      // Nodes — shadowBlur instead of radialGradient (much cheaper)
      ctx.shadowColor = 'rgba(34, 211, 238, 0.9)';
      for (const n of nodes) {
        const pulse = 0.55 + 0.45 * Math.sin(n.pulsePhase);
        const coreOpacity = (0.65 + 0.35 * pulse) * d;
        ctx.shadowBlur = n.radius * 8 * pulse * d;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,211,238,${coreOpacity})`;
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      animationId = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running) return;
      running = true;
      draw();
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(animationId);
    };

    // Only animate when visible
    const io = new IntersectionObserver(
      (entries) => {
        entries[0].isIntersecting ? start() : stop();
      },
      { threshold: 0.05 }
    );

    resize();
    init();
    io.observe(canvas);

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
