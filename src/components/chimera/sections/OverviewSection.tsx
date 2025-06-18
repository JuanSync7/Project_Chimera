
import React from 'react';
import SectionCard from '@/components/chimera/SectionCard';
import { TrendingUp, Gauge, Rocket } from 'lucide-react';

const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-3 text-white">The Strategic Imperative: AI-First Future</h2>
      <p className="text-slate-400 text-center text-lg mb-16 max-w-3xl mx-auto">
        The semiconductor industry's advancement principles are shifting. As <strong>Moore's Law's</strong> physical scaling diminishes, mastering <strong>design complexity</strong> through AI is paramount for leadership. This section outlines the rationale for an <strong>AI-driven design methodology</strong>.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <SectionCard
          icon={<TrendingUp className="h-12 w-12 text-sky-400" />}
          title="Beyond Moore's Law"
          description="Physical scaling limits are near. <strong>Design complexity</strong> is the new frontier. AI offers the tools to master this, creating a <strong>self-improving design ecosystem</strong> where each project enhances the system's knowledge, building a <strong>cumulative, defensible competitive advantage</strong>."
          className="hover:border-sky-500/50"
        />
        <SectionCard
          icon={<Gauge className="h-12 w-12 text-purple-400" />}
          title="Redefining PPA<span class='gradient-text'>P</span>"
          description="To <strong>Power, Performance, and Area (PPA)</strong>, we add a fourth critical dimension: <strong class='gradient-text'>Productivity</strong>. AI automates tedious tasks, liberating engineers for high-value innovation, transforming them into <strong>force multipliers</strong>. This <strong>PPAP framework</strong> is key to future success."
          className="hover:border-purple-500/50"
        />
        <SectionCard
          icon={<Rocket className="h-12 w-12 text-fuchsia-400" />}
          title="The 10x Vision"
          description="An AI-driven methodology is a <strong>step-function leap</strong>. Targets: <strong>30-50% design time reduction</strong>, up to <strong>40% power efficiency improvement</strong>, <strong>3-5x engineering productivity boost</strong>, <strong>70% debug time reduction</strong>, and <strong>10x faster design exploration</strong>."
          className="hover:border-fuchsia-500/50"
        />
      </div>
    </section>
  );
};

export default OverviewSection;


