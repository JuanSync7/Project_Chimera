
import React from 'react';
import SectionCard from '../SectionCard';

const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-3 text-white">The Strategic Imperative: AI-First Future</h2>
      <p className="text-slate-400 text-center text-lg mb-16 max-w-3xl mx-auto">
        The semiconductor industry's advancement principles are shifting. As Moore's Law's physical scaling diminishes, mastering design complexity through AI is paramount for leadership. This section outlines the rationale for an AI-driven design methodology.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <SectionCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
          title="Beyond Moore's Law"
          description="Physical scaling limits are near. Design complexity is the new frontier. AI offers the tools to master this, creating a self-improving design ecosystem where each project enhances the system's knowledge, building a cumulative, defensible competitive advantage."
          className="hover:border-sky-500/50"
        />
        <SectionCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0112 3c2.21 0 4.21.896 5.657 2.343A8 8 0 0117.657 18.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A5 5 0 0012 17c.848 0 1.643-.215 2.364-.595M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
          title="Redefining PPAP"
          description="To Power, Performance, and Area (PPA), we add a fourth critical dimension: <strong>Productivity</strong>. AI automates tedious tasks, liberating engineers for high-value innovation, transforming them into force multipliers. This PPAP framework is key to future success."
          className="hover:border-purple-500/50"
        />
        <SectionCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-3.333 0-5 2-5 2s1.667 2 5 2 5-2 5-2-1.667-2-5-2zm0 0V5m0 3v4m0 0v4m-3-4h6m-6 0H6m3 0h6" /></svg>}
          title="The 10x Vision"
          description="An AI-driven methodology is a step-function leap. Targets: 30-50% design time reduction, up to 40% power efficiency improvement, 3-5x engineering productivity boost, 70% debug time reduction, and 10x faster design exploration."
          className="hover:border-fuchsia-500/50"
        />
      </div>
    </section>
  );
};

export default OverviewSection;
