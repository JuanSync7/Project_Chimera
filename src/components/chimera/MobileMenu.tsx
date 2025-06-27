
"use client";
import React from 'react';
import type { NavLinkItem } from '@/lib/chimera/types';
import { usePathname } from 'next/navigation';
import { Sitemap } from 'lucide-react';

interface MobileMenuProps {
  navLinks: NavLinkItem[];
  isMobileMenuOpen: boolean;
  onLinkClick: () => void;
  activeSection: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks, isMobileMenuOpen, onLinkClick, activeSection }) => {
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  const getLinkHref = (link: NavLinkItem) => {
    if (isMainPage) {
      return link.href; // e.g., #overview
    }
    return `/${link.href}`; // e.g., /#overview
  };

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
          <a
            key={link.id}
            href={getLinkHref(link)}
            onClick={onLinkClick}
            className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === link.id ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
          >
            {link.label}
          </a>
        ))}
        <hr className="border-slate-700 my-2" />
        <a
            href="/site-map"
            onClick={onLinkClick}
            className={`block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700`}
        >
            <div className="flex items-center gap-3">
              <Sitemap className="h-5 w-5" />
              <span>Site Map</span>
            </div>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
