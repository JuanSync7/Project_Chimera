// src/components/chimera/AnimatedRocket.tsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { RocketIcon } from 'lucide-react';

type AnimationStage = 'initialDelay' | 'flyingRight' | 'turningToFlyLeft' | 'flyingLeft' | 'turningToFlyRight';

const AnimatedRocket: React.FC = () => {
  const [stage, setStage] = useState<AnimationStage>('initialDelay');
  // Consolidate styles that change into one state object
  const [animationStyle, setAnimationStyle] = useState<React.CSSProperties>({
    left: '-10%',
    transform: 'translateY(-50%) rotate(90deg)', // Initial: off-screen left, pointing right
    transition: 'left 10s linear, transform 0.5s ease-in-out', // Default transition
  });
  const rocketRef = useRef<HTMLDivElement>(null);

  // Initial trigger for animation
  useEffect(() => {
    if (stage === 'initialDelay') {
      const timer = setTimeout(() => {
        setStage('flyingRight');
      }, 100); // Small delay before first flight
      return () => clearTimeout(timer);
    }
  }, [stage]);

  // Style updates based on stage
  useEffect(() => {
    switch (stage) {
      case 'flyingRight':
        setAnimationStyle({
          left: '105%', // Fly to right edge
          transform: 'translateY(-50%) rotate(90deg)', // Keep pointing right
          transition: 'left 10s linear, transform 0.1s linear', // Long for left, short for transform
        });
        break;
      case 'turningToFlyLeft':
        setAnimationStyle(prev => ({ // Keep current left from flyingRight
          ...prev,
          left: '105%', // Explicitly keep at edge
          transform: 'translateY(-50%) rotate(-90deg)', // Turn to point left
          transition: 'transform 0.5s ease-in-out, left 0s linear', // Animate transform only
        }));
        // After turn animation, start flying left
        const flyLeftTimer = setTimeout(() => setStage('flyingLeft'), 500); // Match transform duration
        return () => clearTimeout(flyLeftTimer);
      case 'flyingLeft':
        setAnimationStyle({
          left: '-10%', // Fly to left edge
          transform: 'translateY(-50%) rotate(-90deg)', // Keep pointing left
          transition: 'left 10s linear, transform 0.1s linear', // Long for left, short for transform
        });
        break;
      case 'turningToFlyRight':
        setAnimationStyle(prev => ({ // Keep current left from flyingLeft
          ...prev,
          left: '-10%', // Explicitly keep at edge
          transform: 'translateY(-50%) rotate(90deg)', // Turn to point right
          transition: 'transform 0.5s ease-in-out, left 0s linear', // Animate transform only
        }));
        // After turn animation, restart flying right
        const flyRightTimer = setTimeout(() => setStage('flyingRight'), 500); // Match transform duration
        return () => clearTimeout(flyRightTimer);
      default:
        break;
    }
  }, [stage]);

  // Handle transition end events
  useEffect(() => {
    const element = rocketRef.current;
    if (!element) return;

    const handleTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName === 'left') { // Only act on 'left' transition end
        if (stage === 'flyingRight') {
          setStage('turningToFlyLeft');
        } else if (stage === 'flyingLeft') {
          setStage('turningToFlyRight');
        }
      }
    };

    element.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      if (element) { // Check element exists on cleanup
        element.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [stage]); // Re-attach if stage changes, critical for correct sequencing

  return (
    <div
      ref={rocketRef}
      style={{
        position: 'absolute',
        top: '50%', // Center vertically within its parent (the track div in HomeSection)
        willChange: 'left, transform',
        zIndex: 5,
        ...animationStyle, // Apply dynamic left, transform, and transition
      }}
      role="presentation"
    >
      <RocketIcon
        className="h-10 w-10 text-primary" // Rotation handled by style.transform
        aria-hidden="true"
      />
    </div>
  );
};

export default AnimatedRocket;
