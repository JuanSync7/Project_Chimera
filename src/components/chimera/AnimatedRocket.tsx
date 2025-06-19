// src/components/chimera/AnimatedRocket.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { RocketIcon } from 'lucide-react';

const AnimatedRocket: React.FC = () => {
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    // Delay slightly to ensure initial state is rendered before transition starts
    const timer = setTimeout(() => {
      setIsFlying(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%', // Vertically center in its parent container
        transform: 'translateY(-50%)', // Adjust for vertical centering
        left: isFlying ? '105%' : '-10%', // Start off-screen left, end off-screen right
        transition: 'left 10s linear', // 10-second linear animation
        willChange: 'left', // Performance hint for the browser
        zIndex: 5, 
      }}
      role="presentation" // It's decorative
    >
      <RocketIcon
        className="h-10 w-10 text-primary rotate-45" 
        aria-hidden="true"
      />
    </div>
  );
};

export default AnimatedRocket;
