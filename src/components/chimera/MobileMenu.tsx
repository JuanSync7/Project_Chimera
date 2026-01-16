
"use client";
import React from 'react';
import type { NavLinkItem } from '@/lib/chimera/types';
import { usePathname } from 'next/navigation';
import { Network } from 'lucide-react';
import Link from 'next/link';

interface MobileMenuProps {
  navLinks: NavLinkItem[];
  isMobileMenuOpen: boolean;
  onLinkClick: () => void;
  activeSection: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks, isMobileMenuOpen, onLinkClick, activeSection }) => {
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


  if (!isMobileMenuOpen) {
    return null;
  }

  return (
    <div 
      id="mobile-menu" 
      className="md:hidden bg-background border-b border-border sticky top-16 z-40 w-full"
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navLinks.map(link => (
          <Link
            key={link.id}
            href={link.href}
            onClick={onLinkClick}
            className={`block px-3 py-2 rounded-md text-base font-medium ${currentActiveId === link.id ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
          >
            {link.label}
          </Link>
        ))}
        <hr className="border-slate-700 my-2" />
        <Link
            href="/site-map"
            onClick={onLinkClick}
            className={`block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700`}
        >
            <div className="flex items-center gap-3">
              <Network className="h-5 w-5" />
              <span>Site Map</span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
