
"use client";
import React, { useState, useEffect } from 'react';

interface Particle {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: string;
  initialTop: string;
}

const NUM_PARTICLES = 40; // Adjust for density

const DigitalFallEffect: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const randomSize = Math.random() * 2.5 + 1; // Particle width between 1px and 3.5px
      newParticles.push({
        id: i,
        left: `${Math.random() * 95}%`, // Positioned within the container (0-95% to keep inside)
        delay: `${Math.random() * 7}s`,  // Random start delay up to 7s
        duration: `${Math.random() * 4 + 3}s`, // Duration between 3s and 7s
        size: `${randomSize}px`,
        initialTop: `${Math.random() * -40 - 10}vh`, // Start randomly above the viewport (-10vh to -50vh)
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="digital-fall-container" aria-hidden="true">
      {particles.map(p => (
        <div
          key={p.id}
          className="digital-particle"
          style={{
            left: p.left,
            width: p.size,
            height: `calc(${p.size} * ${Math.random() * 6 + 4})`, // Rectangular, taller particles (4x to 10x its width)
            animationDelay: p.delay,
            animationDuration: p.duration,
            top: p.initialTop, // Initial top offset
          }}
        />
      ))}
    </div>
  );
};

export default DigitalFallEffect;
