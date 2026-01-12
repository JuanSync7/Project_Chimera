
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import HomeSection from './components/sections/HomeSection';
import OverviewSection from './components/sections/OverviewSection';
import ArchitectureSection from './components/sections/ArchitectureSection';
import PipelineSection from './components/sections/PipelineSection';
import SymbiosisSection from './components/sections/SymbiosisSection';
import RisksVisionSection from './components/sections/RisksVisionSection';
import RoadmapSection from './components/sections/RoadmapSection';
import Footer from './components/Footer';
import { NAV_LINKS } from './constants';

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

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
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
