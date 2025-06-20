
// src/app/roadmap-details/page.tsx
"use client";
import React from 'react';
import SubPageLayout from '@/components/chimera/SubPageLayout';
import { GanttChartSquare, Milestone, TrendingUp, Target, ExternalLink, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const PhaseCard: React.FC<{ title: string; description: string; href: string; icon: React.ReactNode; period: string; colorClass: string }> = ({ title, description, href, icon, period, colorClass }) => (
  <div className={`section-card p-6 rounded-2xl flex flex-col h-full border-2 hover:border-${colorClass.split('-')[1]}-500/70`}>
    <div className="flex items-center mb-4">
      {icon}
      <div className='ml-3'>
        <h3 className={`text-2xl font-semibold ${colorClass} !m-0`}>{title}</h3>
        <p className={`text-sm ${colorClass} opacity-80`}>{period}</p>
      </div>
    </div>
    <p 
      className="text-slate-400 flex-grow mb-6"
      dangerouslySetInnerHTML={{ __html: description }}
    />
    <Link href={href} passHref>
      <Button variant="outline" className={`w-full mt-auto bg-transparent ${colorClass} border-${colorClass.split('-')[1]}-500 hover:bg-${colorClass.split('-')[1]}-500/20 hover:text-${colorClass.split('-')[1]}-300 hover:border-${colorClass.split('-')[1]}-400`}>
        View Details <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  </div>
);

export default function RoadmapDetailsOverviewPage() {
  return (
    <SubPageLayout backButtonHref="/" backButtonText="&larr; Back to Project Overview">
      <article className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6">
        <div className="flex flex-col items-center text-center mb-12">
          <GanttChartSquare className="h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-2 md:leading-tight">
            Project Chimera: Implementation Roadmap
          </h1>
          <p className="text-2xl text-slate-400">A Phased Approach to AI-Driven Transformation (2025-2030)</p>
        </div>
        <p>
          The successful realization of Project Chimera hinges on a pragmatic, meticulously planned, and phased implementation. This five-year roadmap is strategically divided into three distinct phases: Crawl, Walk, and Run. Each phase builds upon the successes of the last, allowing for iterative development, comprehensive risk management, and the progressive scaling of both our cutting-edge AI technology and the crucial cultural adoption across the organization. This structured approach ensures that we not only achieve our ambitious technical goals but also foster an environment where innovation can thrive.
        </p>

        <div className="mt-16 mb-4">
            <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 text-center">
                Roadmap Phases Overview
            </h2>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 my-12 not-prose">
          <PhaseCard
            title="Phase 1: Crawl"
            period="Year 1 - 1.5 (Q3 2025 - Q4 2026)"
            description="Establish foundational infrastructure (MCP Server, MLOps) and prove agentic workflow viability with a high-impact RTL TDD pilot project."
            href="/roadmap-details/phase-1-crawl"
            icon={<Milestone className="h-10 w-10 text-sky-400" />}
            colorClass="text-sky-400"
          />
          <PhaseCard
            title="Phase 2: Walk"
            period="Year 1.5 - 3 (Q1 2027 - Q4 2028)"
            description="Scale agentic workflows (PPA Optimization, AI Verification) to mainstream projects and drive broad cultural adoption and training."
            href="/roadmap-details/phase-2-walk"
            icon={<TrendingUp className="h-10 w-10 text-purple-400" />}
            colorClass="text-purple-400"
          />
          <PhaseCard
            title="Phase 3: Run"
            period="Year 3 - 5 (Q1 2029 - Q4 2030)"
            description="Achieve <strong>full-stack autonomy</strong> with an end-to-end <strong>agentic design system</strong>. Leverage this unique capability for <strong>market leadership</strong> and design <strong>novel AI chips</strong> using Chimera."
            href="/roadmap-details/phase-3-run"
            icon={<Target className="h-10 w-10 text-fuchsia-400" />}
            colorClass="text-fuchsia-400"
          />
        </div>

        <div className="mt-16 mb-4">
          <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
            Roadmap Summary Table
          </h2>
        </div>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full divide-y divide-slate-700">
            <thead className="bg-slate-800/50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">Phase</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">Timeline</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">Key Objectives</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">Core Technologies to Deploy</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">People & Culture Focus</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">Key Success Metrics/KPIs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700 bg-slate-800/30">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">1: Crawl</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">Q3 2025 - Q4 2026</td>
                <td className="px-4 py-3 text-sm">Build <strong>foundational infrastructure</strong>; Prove viability with a <strong>pilot project</strong>.</td>
                <td className="px-4 py-3 text-sm"><strong>MCP Server v1.0</strong>, <strong>LangGraph</strong>, <strong>LangSmith</strong>, <strong>RAG Knowledge Base</strong>, <strong>RTL TDD Agent</strong>.</td>
                <td className="px-4 py-3 text-sm">Identify <strong>early adopters</strong>; Form a <strong>core AI platform team</strong>.</td>
                <td className="px-4 py-3 text-sm">Pilot project success; Infrastructure stability; <strong>&gt;95% RTL test pass rate</strong>.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">2: Walk</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">Q1 2027 - Q4 2028</td>
                <td className="px-4 py-3 text-sm">Scale <strong>agentic workflows</strong>; Drive <strong>cultural adoption and training</strong>.</td>
                <td className="px-4 py-3 text-sm"><strong>PPA Optimization Agent (RL)</strong>, <strong>AIvril Verification Agent</strong>, <strong>CI/CD for Agents</strong>.</td>
                <td className="px-4 py-3 text-sm">Launch <strong>&quot;Agent Academy&quot;</strong>; Train all engineers; Foster <strong>custom agent development</strong>.</td>
                <td className="px-4 py-3 text-sm"><strong>&gt;15% PPA improvement</strong>; <strong>&gt;50% verification time reduction</strong>; <strong>80% of engineers trained</strong>.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">3: Run</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">Q1 2029 - Q4 2030</td>
                <td className="px-4 py-3 text-sm">Achieve <strong>full-stack autonomy</strong>; Leverage system for <strong>market dominance</strong>.</td>
                <td className="px-4 py-3 text-sm"><strong>Hierarchical Supervisor</strong>; <strong>End-to-end integrated workflow</strong>; <strong>Emergent insight analysis</strong>.</td>
                <td className="px-4 py-3 text-sm">Shift from agent users to <strong>agent orchestrators</strong>; <strong>AI-first design culture</strong>.</td>
                <td className="px-4 py-3 text-sm"><strong>&gt;30% end-to-end cycle time reduction</strong>; Market leadership in PPA; First <strong>AI-designed chip tape-out</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12 mb-8">
            <Link href="/modern-pricing-model" passHref>
              <Button variant="outline" size="lg" className="bg-transparent text-green-400 border-green-500 hover:bg-green-500/20 hover:text-green-300 hover:border-green-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/40">
                <DollarSign className="mr-2 h-5 w-5" />
                Explore Our Modern Pricing Model &rarr;
              </Button>
            </Link>
        </div>

        <div className="mt-16 mb-4">
          <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
            Conclusion
          </h2>
        </div>
        <p>The strategy detailed in Project Chimera represents a paradigm shift. It is a calculated departure from the incremental improvements of the past and a bold stride into an AI-native future. This is not an investment in a single tool or a marginal process optimization; it is the comprehensive re-architecting of our company&apos;s most fundamental competency: the art and science of semiconductor design. By embracing the power of multi-agent systems, we will not only solve the immediate challenges of post-Moore&apos;s Law complexity but also build a sustainable, compounding advantage that will be nearly impossible for competitors to replicate.</p>
        <p>The path is ambitious and fraught with challenges, both technical and cultural. It requires significant investment, unwavering executive commitment, and a willingness to transform how we work. However, the alternative—clinging to traditional methodologies in an era of exponential technological change—is a far greater risk. Project Chimera provides the blueprint to navigate this transformation successfully. By executing this plan, we will not only secure our position as the world&apos;s preeminent designer of semiconductor chips but also become the architects of the very silicon that will power the future of artificial intelligence itself. The time to act is now.</p>
      </article>
    </SubPageLayout>
  );
}

