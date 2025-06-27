
// src/components/icons/DynamicIcon.tsx
"use client";
import React from 'react';
import * as Icons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// Create a type for all possible icon names
export type IconName = keyof typeof Icons;

interface DynamicIconProps extends LucideProps {
  name?: IconName | string; // Allow string for flexibility, but prefer IconName
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  if (!name) {
    return null;
  }

  const LucideIcon = Icons[name as IconName] as React.ComponentType<LucideProps>;

  if (!LucideIcon) {
    // Fallback for icons not found or if a generic string was passed that doesn't match
    // console.warn(`Icon "${name}" not found in lucide-react. Rendering a default icon.`);
    // return <Icons.HelpCircle {...props} />; // Default/fallback icon
    return null; // Or render nothing
  }

  return <LucideIcon {...props} />;
};

export default DynamicIcon;
