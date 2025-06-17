
"use client";
import React from 'react';
import type { NavLinkItem } from '@/lib/chimera/types';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  navLinks: NavLinkItem[];
  activeSection: string;
  onMobileMenuToggle: () => void;
  isMobileMenuOpen: boolean; // Added this prop
}

const Header: React.FC<HeaderProps> = ({ navLinks, activeSection, onMobileMenuToggle, isMobileMenuOpen }) => {
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  const getLinkHref = (link: NavLinkItem) => {
    if (isMainPage) {
      return link.href; // e.g., #overview
    }
    return `/${link.href}`; // e.g., /#overview
  };

  return (
    <header id="header" className="bg-background border-b border-border sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href={isMainPage ? "#home" : "/#home"} className="text-2xl font-bold tracking-tighter">
          <span className="gradient-text">Project Chimera</span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.id} 
              href={getLinkHref(link)} 
              className={`nav-link ${activeSection === link.id ? 'active-nav' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button 
          id="mobile-menu-button" 
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={onMobileMenuToggle}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen} // Use the isMobileMenuOpen prop
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

