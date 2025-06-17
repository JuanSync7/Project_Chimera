
"use client";
import React, { useState, useCallback } from 'react';
import Header from '@/components/chimera/Header';
import MobileMenu from '@/components/chimera/MobileMenu';
import Footer from '@/components/chimera/Footer';
import { NAV_LINKS } from '@/lib/chimera/constants';

interface PageShellProps {
  children: React.ReactNode;
  activeSection?: string; // Optional, defaults to ""
}

export default function PageShell({ children, activeSection = "" }: PageShellProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <div className="flex flex-col min-h-screen"> {/* Ensures footer is at bottom */}
      <Header
        navLinks={NAV_LINKS}
        activeSection={activeSection}
        onMobileMenuToggle={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <MobileMenu
        navLinks={NAV_LINKS}
        isMobileMenuOpen={isMobileMenuOpen}
        onLinkClick={closeMobileMenu}
        activeSection={activeSection}
      />
      <main className="flex-grow"> {/* flex-grow pushes footer down */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
