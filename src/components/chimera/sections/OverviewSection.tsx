
import React from 'react';
import SectionCard from '@/components/chimera/SectionCard';
import { TrendingUp, Gauge, Rocket } from 'lucide-react';

const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-3 text-white">The Strategic Imperative: AI-First Future</h2>
      <p className="text-slate-400 text-center text-lg mb-16 max-w-3xl mx-auto">
        The semiconductor industry's advancement principles are shifting. As Moore's Law's physical scaling diminishes, mastering design complexity through AI is paramount for leadership. This section outlines the rationale for an AI-driven design methodology.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <SectionCard
          icon={<TrendingUp className="h-12 w-12 text-sky-400" />}
          title="Beyond Moore's Law"
          description="Physical scaling limits are near. Design complexity is the new frontier. AI offers the tools to master this, creating a self-improving design ecosystem where each project enhances the system's knowledge, building a cumulative, defensible competitive advantage."
          className="hover:border-sky-500/50"
        />
        <SectionCard
          icon={<Gauge className="h-12 w-12 text-purple-400" />}
          title="Redefining PPAP"
          description="To Power, Performance, and Area (PPA), we add a fourth critical dimension: <span class='gradient-text'>Productivity</span>. AI automates tedious tasks, liberating engineers for high-value innovation, transforming them into force multipliers. This PPA<strong>P</strong> framework is key to future success."
          className="hover:border-purple-500/50"
        />
        <SectionCard
          icon={<Rocket className="h-12 w-12 text-fuchsia-400" />}
          title="The 10x Vision"
          description="An AI-driven methodology is a step-function leap. Targets: 30-50% design time reduction, up to 40% power efficiency improvement, 3-5x engineering productivity boost, 70% debug time reduction, and 10x faster design exploration."
          className="hover:border-fuchsia-500/50"
        />
      </div>
    </section>
  );
};

export default OverviewSection;

