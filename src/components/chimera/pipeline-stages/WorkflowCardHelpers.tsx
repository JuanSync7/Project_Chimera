// src/components/chimera/pipeline-stages/WorkflowCardHelpers.tsx
import React from 'react';

// Helper Component for Primary Workflow Item Cards
interface PrimaryWorkflowItemCardProps {
  icon: React.ReactElement;
  title: string;
  description?: string; // For simple HTML string descriptions
  children?: React.ReactNode; // For more complex content like nested cards
}

export const PrimaryWorkflowItemCard: React.FC<PrimaryWorkflowItemCardProps> = ({ icon, title, description, children }) => (
  <li className="flex items-start p-3 border border-slate-700 rounded-lg bg-slate-800/30 w-full">
    {React.cloneElement(icon, { className: "h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" })}
    <div>
      <strong className="text-primary block mb-1">{title}</strong>
      {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
      {children}
    </div>
  </li>
);

// Helper Component for Nested Detail Cards (Sub-Sub-Points)
interface NestedDetailCardProps {
  icon: React.ReactElement;
  title?: string;
  description: string; // Assumes description is an HTML string
}

export const NestedDetailCard: React.FC<NestedDetailCardProps> = ({ icon, title, description }) => (
  <div className="flex items-start p-3 border border-slate-700 rounded-lg bg-slate-800/30">
    {React.cloneElement(icon, { className: "h-5 w-5 text-sky-400 mr-3 mt-0.5 flex-shrink-0" })}
    <div>
      {title && <strong className="text-sky-300 block mb-1">{title}</strong>}
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </div>
);
