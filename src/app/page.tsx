// src/app/page.tsx
"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Header from '@/components/chimera/Header';
import MobileMenu from '@/components/chimera/MobileMenu';
import HomeSection from '@/components/chimera/sections/HomeSection';
import OverviewSection from '@/components/chimera/sections/OverviewSection';
import ArchitectureSection from '@/components/chimera/sections/ArchitectureSection';
import PipelineSection from '@/components/chimera/sections/PipelineSection';
import SymbiosisSection from '@/components/chimera/sections/SymbiosisSection';
import RisksVisionSection from '@/components/chimera/sections/RisksVisionSection';
import RoadmapSection from '@/components/chimera/sections/RoadmapSection';
import Footer from '@/components/chimera/Footer';
import { NAV_LINKS } from '@/lib/chimera/constants';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

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

    // Add scroll listener for active header state
    const handleScroll = () => {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header 
        navLinks={NAV_LINKS}
        activeSection={activeSection}
        onMobileMenuToggle={toggleMobileMenu}
      />
      <MobileMenu 
        navLinks={NAV_LINKS}
        isMobileMenuOpen={isMobileMenuOpen}
        onLinkClick={closeMobileMenu}
        activeSection={activeSection}
      />
      <main className="container mx-auto px-6">
        <HomeSection />
        
        <OverviewSection />
        <div className="text-center mt-[-4rem] mb-16">
          <Link href="/strategic-imperative" passHref>
            <Button variant="outline" size="lg" className="bg-slate-700/50 hover:bg-slate-600/70 border-slate-600 hover:border-sky-500/70 text-sky-300 hover:text-sky-200 transition-all duration-300 ease-in-out transform hover:scale-105">
              Learn More: The Strategic Imperative &rarr;
            </Button>
          </Link>
        </div>

        <ArchitectureSection />
        <div className="text-center mt-[-2rem] mb-16">
           <Link href="/architectural-blueprint" passHref>
            <Button variant="outline" size="lg" className="bg-slate-700/50 hover:bg-slate-600/70 border-slate-600 hover:border-sky-500/70 text-sky-300 hover:text-sky-200 transition-all duration-300 ease-in-out transform hover:scale-105">
              Explore the Architectural Blueprint &rarr;
            </Button>
          </Link>
        </div>

        <PipelineSection />
         <div className="text-center mt-8 mb-16">
           <Link href="/ai-pipeline" passHref>
            <Button variant="outline" size="lg" className="bg-slate-700/50 hover:bg-slate-600/70 border-slate-600 hover:border-sky-500/70 text-sky-300 hover:text-sky-200 transition-all duration-300 ease-in-out transform hover:scale-105">
              Deep Dive into the AI-Powered Pipeline &rarr;
            </Button>
          </Link>
        </div>

        <SymbiosisSection />
        <div className="text-center mt-8 mb-16">
           <Link href="/human-ai-symbiosis" passHref>
            <Button variant="outline" size="lg" className="bg-slate-700/50 hover:bg-slate-600/70 border-slate-600 hover:border-sky-500/70 text-sky-300 hover:text-sky-200 transition-all duration-300 ease-in-out transform hover:scale-105">
              Understand Human-AI Symbiosis &rarr;
            </Button>
          </Link>
        </div>
        
        <RisksVisionSection />
        <div className="text-center mt-8 mb-16 space-y-4 md:space-y-0 md:space-x-4">
           <Link href="/risk-mitigation" passHref>
            <Button variant="outline" size="lg" className="bg-slate-700/50 hover:bg-slate-600/70 border-slate-600 hover:border-rose-500/70 text-rose-300 hover:text-rose-200 transition-all duration-300 ease-in-out transform hover:scale-105">
              Analyze Risks & Mitigation &rarr;
            </Button>
          </Link>
          <Link href="/agi-horizon" passHref>
            <Button variant="outline" size="lg" className="bg-slate-700/50 hover:bg-slate-600/70 border-slate-600 hover:border-violet-500/70 text-violet-300 hover:text-violet-200 transition-all duration-300 ease-in-out transform hover:scale-105">
              Explore the AGI Horizon &rarr;
            </Button>
          </Link>
        </div>

        <RoadmapSection />
        <div className="text-center mt-8 mb-16">
           <Link href="/roadmap-details" passHref>
            <Button variant="outline" size="lg" className="bg-slate-700/50 hover:bg-slate-600/70 border-slate-600 hover:border-fuchsia-500/70 text-fuchsia-300 hover:text-fuchsia-200 transition-all duration-300 ease-in-out transform hover:scale-105">
              View Detailed Implementation Roadmap &rarr;
            </Button>
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
};

export default App;
