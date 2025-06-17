// src/components/bouton/BoutonDisplay.tsx
"use client";
import React from 'react';
import DynamicIcon from '@/components/icons/DynamicIcon';
import type { IconName } from '@/components/icons/DynamicIcon';

interface BoutonDisplayProps {
  text: string;
  style: React.CSSProperties;
  iconName?: IconName | string;
}

const BoutonDisplay: React.FC<BoutonDisplayProps> = ({ text, style, iconName }) => {
  return (
    <button
      style={style}
      className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex items-center justify-center gap-2"
      aria-label={text}
    >
      {iconName && <DynamicIcon name={iconName} size={style.fontSize ? parseFloat(style.fontSize.toString()) : 16} />}
      <span>{text}</span>
    </button>
  );
};

export default BoutonDisplay;
