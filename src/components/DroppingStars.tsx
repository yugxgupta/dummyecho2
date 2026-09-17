import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  maxAlpha: number;
  drift: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

const STAR_COLORS = [
  '#F2A97E', // Copper Light
  '#E29578', // Copper Primary
  '#FFF0EB', // Warm Champagne
  '#E09F67', // Bronze Amber
  '#9E6B88', // Patina Mauve
];

export const DroppingStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initialize 60 dropping stars
    const starCount = Math.min(Math.floor(width / 22), 65);
    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.7), // distributed across upper region initially
      size: Math.random() * 2.2 + 1.0, // size between 1.0px and 3.2px
      speed: Math.random() * 0.7 + 0.35, // gentle descent speed
      maxAlpha: Math.random() * 0.4 + 0.6, // max opacity near top (0.6 - 1.0)
      drift: (Math.random() - 0.5) * 0.25, // subtle horizontal sway
      twinkleSpeed: Math.random() * 0.03 + 0.015,
      twinkleOffset: Math.random() * Math.PI * 2,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    }));

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        // Move star downwards
        star.y += star.speed;
        star.x += star.drift;

        // Reset to top when it reaches the bottom of the Work section
        if (star.y >= height) {
          star.y = -5;
          star.x = Math.random() * width;
          star.speed = Math.random() * 0.7 + 0.35;
        }

        // Keep horizontal within bounds
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;

        // Calculate fading opacity based on vertical drop progress (1 at top -> 0 at bottom)
        const dropProgress = Math.min(Math.max(star.y / height, 0), 1);
        // Opacity gracefully diminishes as star falls down
        const fadeMultiplier = Math.pow(1 - dropProgress, 1.4);
        const twinkle = 0.8 + 0.2 * Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const currentAlpha = Math.max(0, star.maxAlpha * fadeMultiplier * twinkle);

        if (currentAlpha > 0.01) {
          ctx.save();
          ctx.globalAlpha = currentAlpha;

          // Soft radial glow aura
          const glowRadius = star.size * 3.5;
          const gradient = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            glowRadius
          );
          gradient.addColorStop(0, star.color);
          gradient.addColorStop(0.4, star.color);
          gradient.addColorStop(1, 'transparent');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(star.x, star.y, glowRadius, 0, Math.PI * 2);
          ctx.fill();

          // Star solid center core
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 0.6, 0, Math.PI * 2);
          ctx.fill();

          // Micro 4-point sparkle for larger stars near top
          if (star.size > 2.2 && dropProgress < 0.4) {
            ctx.strokeStyle = star.color;
            ctx.lineWidth = 0.75;
            const flareSize = star.size * 2.2 * (1 - dropProgress);
            ctx.beginPath();
            ctx.moveTo(star.x - flareSize, star.y);
            ctx.lineTo(star.x + flareSize, star.y);
            ctx.moveTo(star.x, star.y - flareSize);
            ctx.lineTo(star.x, star.y + flareSize);
            ctx.stroke();
          }

          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
    />
  );
};
