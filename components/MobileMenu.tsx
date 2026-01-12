
import React from 'react';
import { NavLinkItem } from '../types';

interface MobileMenuProps {
  navLinks: NavLinkItem[];
  isMobileMenuOpen: boolean;
  onLinkClick: () => void;
  activeSection: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks, isMobileMenuOpen, onLinkClick, activeSection }) => {
  if (!isMobileMenuOpen) {
    return null;
  }

  return (
    <div id="mobile-menu" className="md:hidden glassmorphism">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navLinks.map(link => (
          <a
            key={link.id}
            href={link.href}
            onClick={onLinkClick}
            className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === link.id ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
