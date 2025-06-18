
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Telescope } from 'lucide-react';

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
            <ShieldCheck className="h-10 w-10 text-rose-400 mr-3" />
            <h3 className="text-2xl font-bold text-rose-400">Critical Risk Mitigation</h3>
          </div>
          <ul className="space-y-3 text-slate-400 flex-grow">
            <li><strong className="text-rose-400 font-semibold">Reliability ("Hallucination"):</strong> Mitigated by <strong>deterministic, TDD workflows</strong> (Sec 3.2) and <strong>AIvril-inspired verification</strong> (Sec 3.3). We don't trust, we verify.</li>
            <li><strong className="text-rose-400 font-semibold">Interpretability:</strong> While full model interpretability is a research goal, <strong>LangSmith tracing</strong> provides maximum transparency into agent decision-making for correlational analysis and heuristic understanding.</li>
            <li><strong className="text-rose-400 font-semibold">Data Scarcity (HDL):</strong> Create a superior, <strong>proprietary dataset</strong> from our entire design history for <strong>RAG and fine-tuning</strong>. Prioritize HLS where suitable.</li>
            <li><strong className="text-rose-400 font-semibold">Coordination Complexity & Bottlenecks:</strong> <strong>Phased rollout</strong> (Sec 7) starting with simple Supervisor architecture. Rigorous testing and <strong>LangSmith monitoring</strong>. Research model criticism for agent reliability.</li>
            <li><strong className="text-rose-400 font-semibold">IP Security:</strong> Multi-layered, <strong>Zero-Trust security</strong> for the MCP Server. Strict data segregation, granular access control (IAM), end-to-end encryption, and immutable audit trails.</li>
          </ul>
          <p className="text-sm text-slate-500 mt-4"><strong>Cultural resistance</strong> is mitigated by a narrative of augmentation, transparency, and empowerment.</p>
          <div className="mt-8 text-center">
            <Link href="/risk-mitigation" passHref>
              <Button variant="outline" size="lg" className="bg-transparent text-rose-400 border-rose-500 hover:bg-rose-500/20 hover:text-rose-300 hover:border-rose-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-rose-500/40">
                Analyze Risks & Mitigation &rarr;
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="section-card p-8 rounded-2xl flex flex-col hover:border-violet-500/50">
          <div className="flex items-center mb-4">
            <Telescope className="h-10 w-10 text-violet-400 mr-3" />
            <h3 className="text-2xl font-bold text-violet-400">The Horizon: Pathway to AGI</h3>
          </div>
          <div className="text-slate-300 space-y-4 flex-grow">
            <p>Project Chimera is more than a design system; it's a real-world prototype of a <strong>cognitive architecture</strong>, pushing towards AGI:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li><strong className="text-violet-400 font-semibold">Emergent Intelligence:</strong> MAS designed as a crucible for novel, intelligent behaviors arising from <strong>collaborative dialogue</strong> between specialized agents.</li>
              <li><strong className="text-violet-400 font-semibold">Universal Cognitive Architecture:</strong> A practical implementation of cognitive components:
                  <ul className="list-circle list-inside ml-4 space-y-1 text-slate-500">
                      <li><strong className="text-slate-300">Supervisor Agent:</strong> Primitive <strong>machine consciousness</strong> (directing attention, managing goals).</li>
                      <li><strong className="text-slate-300">MCP Server:</strong> <strong>Long-term & working memory</strong> (RAG/CAG).</li>
                      <li><strong className="text-slate-300">AutoReview Agent:</strong> Domain-specific <strong>ethics block</strong> (design rule enforcement).</li>
                      <li><strong className="text-slate-300">PPA Optimization Agent:</strong> Embodies <strong>reinforcement learning</strong>.</li>
                  </ul>
              </li>
              <li><strong className="text-violet-400 font-semibold">The Symbiotic Loop:</strong>
                  <ul className="list-circle list-inside ml-4 space-y-1 text-slate-500">
                    <li><strong className="text-slate-300">AI → Chips:</strong> Agentic system designs <strong>novel AI accelerators</strong> (e.g., neuro-symbolic, neuromorphic).</li>
                    <li><strong className="text-slate-300">Chips → AI:</strong> New chips provide substrate for <strong>more powerful AI</strong>, accelerating AGI progress.</li>
                  </ul>
              </li>
            </ul>
            <p>By mastering this loop, we become a <strong>central engine of the AGI revolution</strong>, designing the minds of the future and the silicon brains they run on.</p>
          </div>
          <div className="mt-8 text-center">
            <Link href="/agi-horizon" passHref>
              <Button variant="outline" size="lg" className="bg-transparent text-violet-400 border-violet-500 hover:bg-violet-500/20 hover:text-violet-300 hover:border-violet-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/40">
                Explore the AGI Horizon &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RisksVisionSection;


