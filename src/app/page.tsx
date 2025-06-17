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
import StarryBackground from '@/components/chimera/StarryBackground';

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
    <div className="relative">
      <StarryBackground />
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
        {/* Buttons for Risks & AGI Horizon are now inside RisksVisionSection component */}

        <RoadmapSection />
        <div className="text-center mt-[-4rem] mb-16">
           <Link href="/roadmap-details" passHref>
            <Button variant="outline" size="lg" className="bg-transparent text-lime-400 border-lime-500 hover:bg-lime-500/20 hover:text-lime-300 hover:border-lime-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-lime-500/40">
              View Detailed Implementation Roadmap &rarr;
            </Button>
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default App;
