
"use client";
import React, { useState, useCallback } from 'react';
import Header from '@/components/chimera/Header';
import MobileMenu from '@/components/chimera/MobileMenu';
import Footer from '@/components/chimera/Footer';
import { NAV_LINKS } from '@/lib/chimera/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SubPageLayoutProps {
  children: React.ReactNode;
  backButtonHref?: string; 
  backButtonText?: string; 
}

export default function SubPageLayout({ 
  children, 
  backButtonHref = "/", 
  backButtonText = "&larr; Back to Project Overview" 
}: SubPageLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = ""; // No active section highlighting for subpages in main nav

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
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
      <main className="flex-grow container mx-auto px-6 py-12 pt-24 md:pt-32">
        <div className="mb-12">
          <Link href={backButtonHref} passHref>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <span dangerouslySetInnerHTML={{ __html: backButtonText }} />
            </Button>
          </Link>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
