
// src/app/roadmap-details/phase-2-walk/page.tsx
"use client";
import React from 'react';
import SubPageLayout from '@/components/chimera/SubPageLayout';
import { TrendingUp, ListChecks, Cpu, Users, Award, Milestone } from 'lucide-react';

export default function RoadmapPhase2WalkPage() {
  return (
    <SubPageLayout backButtonHref="/roadmap-details" backButtonText="&larr; Back to Roadmap Overview">
      <article className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6">
        <div className="flex flex-col items-center text-center mb-12">
          <TrendingUp className="h-16 w-16 text-purple-400 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-purple-400 !mb-2 md:leading-tight">
            Roadmap: Phase 2 - Walk
          </h1>
          <p className="text-2xl text-slate-400">Scaling Agentic Workflows & Cultural Integration (Q1 2027 - Q4 2028)</p>
        </div>

        <div className="mt-8 mb-4 flex items-center">
          <Milestone className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Timeline & Objectives</h3>
        </div>
        <p><strong>Timeline:</strong> Q1 2027 - Q4 2028</p>
        <p><strong>Objectives:</strong> Expand the application of <strong>agentic workflows</strong> to cover more of the design pipeline, integrate them into <strong>mainstream project flows</strong>, and drive <strong>cultural adoption</strong> across the engineering organization.</p>
        
        <div className="mt-8 mb-4 flex items-center">
          <ListChecks className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Key Actions</h3>
        </div>
        <ul className="list-disc pl-5 space-y-1">
          <li>Develop and deploy the autonomous <strong>PPA Optimization Agent</strong> (as detailed in Section 3.4 of the AI Pipeline) and the <strong>AIvril-inspired Verification Agent</strong> (as per Section 3.3 of the AI Pipeline).</li>
          <li>Integrate these new agentic workflows into the <strong>standard design methodology</strong> for all new mainstream chip design projects.</li>
          <li>Launch an internal <strong>&quot;Agent Academy&quot;</strong> and certification program to formally train engineers in prompt engineering, agent workflow design, and MLOps principles.</li>
          <li>Host internal hackathons to encourage the development of <strong>custom, engineer-built agents</strong> (as outlined in Section 4.2 on Human-AI Symbiosis).</li>
        </ul>

        <div className="mt-8 mb-4 flex items-center">
          <Cpu className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Core Technologies to Deploy</h3>
        </div>
        <p><strong>PPA Optimization Agent (RL)</strong>, <strong>AIvril Verification Agent</strong>, CI/CD for Agents (building on Phase 1 MLOps).</p>

        <div className="mt-8 mb-4 flex items-center">
          <Users className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">People & Culture Focus</h3>
        </div>
        <p>Launch <strong>&quot;Agent Academy&quot;</strong>; Train all design and verification engineers in new AI tools and methodologies; Foster a community around <strong>custom agent development</strong> and knowledge sharing.</p>

        <div className="mt-8 mb-4 flex items-center">
          <Award className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Success Metrics & KPIs</h3>
        </div>
        <ul className="list-disc pl-5 space-y-1">
            <li>Demonstration of <strong>&gt;15% improvement in PPA</strong> on the first full projects utilizing the PPA Optimization Agent.</li>
            <li>Achievement of <strong>&gt;50% reduction in verification closure time</strong> for projects using the AIvril-inspired Verification Agent.</li>
            <li><strong>80% of the design engineering workforce trained and certified</strong> through the Agent Academy.</li>
            <li>At least <strong>5 significant, engineer-developed custom agents</strong> registered and utilized via the MCP Server.</li>
        </ul>
        <p className="mt-4">The &quot;Walk&quot; phase is about scaling proven successes, embedding AI deeper into our core processes, and empowering our entire engineering organization to leverage these transformative capabilities. It bridges the gap from pilot validation to widespread operational impact.</p>

      </article>
    </SubPageLayout>
  );
}
