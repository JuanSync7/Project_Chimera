
"use client";
import React, { useState, useEffect } from 'react';

interface StarData {
  id: number;
  top: number;
  left: number;
  size: number;
  animationDelay: string;
  animationDuration: string;
}

const Star: React.FC<Omit<StarData, 'id'>> = ({ top, left, size, animationDelay, animationDuration }) => (
  <div
    className="absolute rounded-full bg-gray-400 star-item" 
    style={{
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: animationDelay,
      animationDuration: animationDuration,
    }}
  />
);

const StarryBackground: React.FC = () => {
  const [stars, setStars] = useState<StarData[]>([]);

  useEffect(() => {
    const numStars = 70; 
    const generatedStars: StarData[] = [];
    for (let i = 0; i < numStars; i++) {
      generatedStars.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1.5, // Star size between 1.5px and 3.5px
        animationDelay: `${Math.random() * 6}s`, 
        animationDuration: `${Math.random() * 3 + 4}s`, 
      });
    }
    setStars(generatedStars);
  }, []); 

  
  if (stars.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {stars.map(star => (
        <Star
          key={star.id}
          top={star.top}
          left={star.left}
          size={star.size}
          animationDelay={star.animationDelay}
          animationDuration={star.animationDuration}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
