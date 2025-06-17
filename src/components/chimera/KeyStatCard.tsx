// src/components/chimera/KeyStatCard.tsx
import type { LucideProps } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

interface KeyStatCardProps {
  stat: string;
  description: string;
  icon?: React.ReactElement<LucideProps>;
  className?: string;
}

const KeyStatCard: React.FC<KeyStatCardProps> = ({ stat, description, icon, className }) => {
  return (
    <div className={cn(
      "bg-slate-800/50 dark:bg-slate-900/60 p-6 rounded-xl border border-slate-700 dark:border-slate-700/80 shadow-lg flex flex-col items-center text-center h-full", 
      className
    )}>
      {icon && <div className="mb-4 text-primary">{React.cloneElement(icon, { size: 40 })}</div>}
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">{stat}</div>
      <p className="text-slate-400 dark:text-slate-300 text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default KeyStatCard;
