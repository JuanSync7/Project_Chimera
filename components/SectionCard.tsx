
import React from 'react';
import { SectionCardProps } from '../types';

const SectionCard: React.FC<SectionCardProps> = ({ icon, title, description, className, contentClassName, titleClassName }) => {
  return (
    <div className={`section-card p-6 rounded-2xl ${className}`}>
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className={`text-xl font-bold mb-2 text-white ${titleClassName}`}>{title}</h3>
      <div 
        className={`text-slate-400 ${contentClassName}`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default SectionCard;
