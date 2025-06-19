// src/components/chimera/sections/HomeSection.tsx
import React from 'react';
import AnimatedRocket from '@/components/chimera/AnimatedRocket';

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-x-clip"> {/* Use overflow-x-clip */}
      
      {/* Rocket Animation Container: Positioned absolutely within the section */}
      <div 
        className="absolute top-[10%] left-0 w-full h-auto pointer-events-none" 
        // Changed from top-[15%] to top-[10%] to move rocket higher
        // h-auto so rocket defines its needed vertical space within this track.
      >
        <AnimatedRocket />
      </div>

      <div className="w-full z-10"> {/* Ensure main content is interactive and above rocket if overlap */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          Project Chimera: The<span className="gradient-text"> Future of Silicon</span>, Designed by AI.
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mb-10">
          A comprehensive five-year strategic plan to re-architect the entire semiconductor design pipeline around a full-stack, AI-native approach. Project Chimera leverages Multi-Agent Systems to achieve a generational leap in efficiency, performance, and innovation, ensuring market leadership in a new era of design complexity.
        </p>
        <a href="#overview" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-green-600/50">
          Explore the Strategic Blueprint
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
