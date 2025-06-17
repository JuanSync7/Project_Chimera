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
        <ArchitectureSection />
        <PipelineSection />
        <SymbiosisSection />
        <RisksVisionSection />
        <RoadmapSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
