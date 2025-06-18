
import React from 'react';
import { ROADMAP_PHASES } from '@/lib/chimera/constants';
import type { RoadmapPhase } from '@/lib/chimera/types';

const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-3 text-white">Implementation Roadmap (2025-2030)</h2>
      <p className="text-slate-400 text-center text-lg mb-16 max-w-3xl mx-auto">
        A pragmatic, phased, five-year plan for transformation, divided into Crawl, Walk, and Run phases, allowing for iterative development, risk management, and progressive scaling of technology and culture.
      </p>
      <div className="relative">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-6 w-1 bg-gray-700 rounded top-5 bottom-5"></div>

        <div className="space-y-12 md:space-y-16">
          {ROADMAP_PHASES.map((phase: RoadmapPhase, index: number) => (
            <div key={phase.id} className={`relative pl-0 md:pl-16 ${phase.dotClass}`}>
              {/* Dot */}
              <div
                className={`roadmap-dot -left-1 md:left-6 md:transform-none ${
                    index === 0 ? 'border-sky-400' :
                    index === 1 ? 'border-purple-400' : 'border-fuchsia-400'
                } timeline-dot`}
                style={{top: '1.25rem'}}
              ></div>
              <div className={`section-card p-6 md:p-8 rounded-2xl shadow-xl ml-6 md:ml-0`}>
                <span className={`text-sm font-bold ${phase.colorClass}`}>{phase.period}</span>
                <h3 className={`text-2xl lg:text-3xl font-bold mt-1 mb-3 text-white ${phase.colorClass}`}>{phase.title}</h3>
                <p className="text-slate-300 mb-4 italic" dangerouslySetInnerHTML={{ __html: phase.narrativeDescription }}></p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-white mb-1">Key Objectives:</h4>
                    <p className="text-slate-400" dangerouslySetInnerHTML={{ __html: phase.objectives }}></p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Key Actions:</h4>
                    <ul className="list-disc list-inside text-slate-400 space-y-1">
                      {phase.actions.split('\n').map((action, actionIndex) => {
                        const cleanAction = action.trim().substring(2).trim();
                        return cleanAction && <li key={`${phase.id}-action-${actionIndex}`} dangerouslySetInnerHTML={{ __html: cleanAction }} />;
                      })}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Core Technologies:</h4>
                    <p className="text-slate-400" dangerouslySetInnerHTML={{ __html: phase.coreTechnologies }}></p>
                  </div>
                   <div>
                    <h4 className="font-semibold text-white mb-1">People & Culture Focus:</h4>
                    <p className="text-slate-400" dangerouslySetInnerHTML={{ __html: phase.peopleCultureFocus }}></p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-white mb-1">Success Metrics & KPIs:</h4>
                    <p className="text-slate-400" dangerouslySetInnerHTML={{ __html: phase.successMetrics }}></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

