
"use client";
import React from 'react';
import type { NavLinkItem } from '@/lib/chimera/types';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeaderProps {
  navLinks: NavLinkItem[];
  activeSection: string;
  onMobileMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ navLinks, activeSection, onMobileMenuToggle, isMobileMenuOpen }) => {
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  const getActiveId = () => {
    if (isMainPage) return activeSection;
    if (pathname.startsWith('/strategic-imperative')) return 'overview';
    if (pathname.startsWith('/architectural-blueprint')) return 'architecture';
    if (pathname.startsWith('/ai-pipeline')) return 'pipeline';
    if (pathname.startsWith('/human-ai-symbiosis')) return 'symbiosis';
    if (pathname.startsWith('/risk-mitigation') || pathname.startsWith('/agi-horizon')) return 'risks';
    if (pathname.startsWith('/roadmap-details')) return 'roadmap';
    return '';
  };
  const currentActiveId = getActiveId();

  const headerClasses = cn(
    "bg-background border-b border-border top-0 z-50",
    {
      "sticky": !isMainPage
    }
  );

  return (
    <header id="header" className={headerClasses}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href={isMainPage ? "#home" : "/"} className="text-2xl font-bold tracking-tighter">
          <span className="gradient-text">Project Chimera</span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.id}
              href={link.href}
              className={`nav-link ${currentActiveId === link.id ? 'active-nav' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="h-6 w-px bg-slate-700"></div>
          <Link href="/site-map" passHref>
            <Button variant="ghost" size="icon" title="Site Map">
              <Network className="h-5 w-5 text-slate-400 hover:text-white" />
              <span className="sr-only">Site Map</span>
            </Button>
          </Link>
        </div>
        <button
          id="mobile-menu-button"
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={onMobileMenuToggle}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
