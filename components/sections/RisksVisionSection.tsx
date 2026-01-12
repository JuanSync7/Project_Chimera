
import React from 'react';
// Heroicons
const ShieldExclamationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622V6.25a11.959 11.959 0 01-2.598-1.036M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LightBulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a11.953 11.953 0 01-3.75 0M10.5 1.875a4.5 4.5 0 00-4.5 4.5v.375c0 1.181.81 2.159 1.907 2.452h3.386c1.097-.293 1.907-1.271 1.907-2.452v-.375a4.5 4.5 0 00-4.5-4.5zM12 18.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01z" />
  </svg>
);


const RisksVisionSection: React.FC = () => {
  return (
    <section id="risks" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-3 text-white">Critical Analysis & AGI Horizon</h2>
      <p className="text-slate-400 text-center text-lg mb-16 max-w-3xl mx-auto">
        Addressing key challenges and exploring the long-term vision of Multi-Agent Systems as a pathway to Artificial General Intelligence.
      </p>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="section-card p-8 rounded-2xl flex flex-col hover:border-rose-500/50">
          <div className="flex items-center mb-4">
            <ShieldExclamationIcon className="h-10 w-10 text-rose-400 mr-3" />
            <h3 className="text-2xl font-bold text-rose-400">Critical Risk Mitigation</h3>
          </div>
          <ul className="space-y-3 text-slate-400 flex-grow">
            <li><strong>Reliability ("Hallucination"):</strong> Mitigated by deterministic, TDD workflows (Sec 3.2) and AIvril-inspired verification (Sec 3.3). We don't trust, we verify.</li>
            <li><strong>Interpretability:</strong> While full model interpretability is a research goal, LangSmith tracing provides maximum transparency into agent decision-making for correlational analysis and heuristic understanding.</li>
            <li><strong>Data Scarcity (HDL):</strong> Create a superior, proprietary dataset from our entire design history for RAG and fine-tuning. Prioritize HLS where suitable.</li>
            <li><strong>Coordination Complexity & Bottlenecks:</strong> Phased rollout (Sec 7) starting with simple Supervisor architecture. Rigorous testing and LangSmith monitoring. Research model criticism for agent reliability.</li>
            <li><strong>IP Security:</strong> Multi-layered, Zero-Trust security for the MCP Server. Strict data segregation, granular access control (IAM), end-to-end encryption, and immutable audit trails.</li>
          </ul>
          <p className="text-sm text-slate-500 mt-4">Cultural resistance is mitigated by a narrative of augmentation, transparency, and empowerment.</p>
        </div>
        
        <div className="section-card p-8 rounded-2xl flex flex-col hover:border-violet-500/50">
          <div className="flex items-center mb-4">
            <LightBulbIcon className="h-10 w-10 text-violet-400 mr-3" />
            <h3 className="text-2xl font-bold text-violet-400">The Horizon: Pathway to AGI</h3>
          </div>
          <div className="text-slate-300 space-y-4 flex-grow">
            <p>Project Chimera is more than a design system; it's a real-world prototype of a cognitive architecture, pushing towards AGI:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li><strong>Emergent Intelligence:</strong> MAS designed as a crucible for novel, intelligent behaviors arising from collaborative dialogue between specialized agents.</li>
              <li><strong>Universal Cognitive Architecture:</strong> A practical implementation of cognitive components:
                  <ul className="list-circle list-inside ml-4 space-y-1 text-slate-500">
                      <li><strong className="text-slate-300">Supervisor Agent:</strong> Primitive machine consciousness (directing attention, managing goals).</li>
                      <li><strong className="text-slate-300">MCP Server:</strong> Long-term & working memory (RAG/CAG).</li>
                      <li><strong className="text-slate-300">AutoReview Agent:</strong> Domain-specific ethics block (design rule enforcement).</li>
                      <li><strong className="text-slate-300">PPA Optimization Agent:</strong> Embodies reinforcement learning.</li>
                  </ul>
              </li>
              <li><strong>The Symbiotic Loop:</strong>
                  <ul className="list-circle list-inside ml-4 space-y-1 text-slate-500">
                    <li><strong className="text-slate-300">AI → Chips:</strong> Agentic system designs novel AI accelerators (e.g., neuro-symbolic, neuromorphic).</li>
                    <li><strong className="text-slate-300">Chips → AI:</strong> New chips provide substrate for more powerful AI, accelerating AGI progress.</li>
                  </ul>
              </li>
            </ul>
            <p>By mastering this loop, we become a central engine of the AGI revolution, designing the minds of the future and the silicon brains they run on.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RisksVisionSection;
