
// src/app/page.tsx
"use client";
import React, { useState, useEffect, Suspense } from 'react';
// Ensure useSearchParams is NOT imported
import PageShell from '@/components/chimera/PageShell';
import HomeSection from '@/components/chimera/sections/HomeSection';
import OverviewSection from '@/components/chimera/sections/OverviewSection';
import ArchitectureSection from '@/components/chimera/sections/ArchitectureSection';
import PipelineSection from '@/components/chimera/sections/PipelineSection';
import SymbiosisSection from '@/components/chimera/sections/SymbiosisSection';
import RisksVisionSection from '@/components/chimera/sections/RisksVisionSection';
import RoadmapSection from '@/components/chimera/sections/RoadmapSection';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import StarryBackground from '@/components/chimera/StarryBackground';

// This component contains the actual page content and logic
function HomePageContent() {
  // Ensure useSearchParams() is NOT called here

  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            setActiveSection(id);
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative">
      <StarryBackground />
      <PageShell activeSection={activeSection}>
        <div className="container mx-auto px-6">
          <HomeSection />
          
          <OverviewSection />
          <div className="text-center mt-[-4rem] mb-16">
            <Link href="/strategic-imperative" passHref>
              <Button variant="outline" size="lg" className="bg-transparent text-yellow-400 border-yellow-500 hover:bg-yellow-500/20 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/40">
                Learn More: The Strategic Imperative &rarr;
              </Button>
            </Link>
          </div>

          <ArchitectureSection />
          <div className="text-center mt-[-4rem] mb-16">
            <Link href="/architectural-blueprint" passHref>
              <Button variant="outline" size="lg" className="bg-transparent text-yellow-400 border-yellow-500 hover:bg-yellow-500/20 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/40">
                Explore the Architectural Blueprint &rarr;
              </Button>
            </Link>
          </div>

          <PipelineSection />
          <div className="text-center mt-[-4rem] mb-16">
            <Link href="/ai-pipeline" passHref>
              <Button variant="outline" size="lg" className="bg-transparent text-yellow-400 border-yellow-500 hover:bg-yellow-500/20 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/40">
                Deep Dive into the AI-Powered Pipeline &rarr;
              </Button>
            </Link>
          </div>

          <SymbiosisSection />
          <div className="text-center mt-[-4rem] mb-16">
            <Link href="/human-ai-symbiosis" passHref>
              <Button variant="outline" size="lg" className="bg-transparent text-yellow-400 border-yellow-500 hover:bg-yellow-500/20 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/40">
                Understand Human-AI Symbiosis &rarr;
              </Button>
            </Link>
          </div>
          
          <RisksVisionSection />

          <RoadmapSection />
          <div className="text-center mt-[-4rem] mb-16">
            <Link href="/roadmap-details" passHref>
              <Button variant="outline" size="lg" className="bg-transparent text-lime-400 border-lime-500 hover:bg-lime-500/20 hover:text-lime-300 hover:border-lime-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-lime-500/40">
                View Detailed Implementation Roadmap &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </PageShell>
    </div>
  );
}

// The default export is now a wrapper component that includes Suspense
export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomePageContent />
    </Suspense>
  );
}
