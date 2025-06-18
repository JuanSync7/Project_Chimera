// src/app/ai-pipeline/page.tsx
"use client";
import React from 'react';
import SubPageLayout from '@/components/chimera/SubPageLayout';
import { Cpu } from 'lucide-react'; // For H1 title
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Import stage components
import Stage_3_1_SpecAndArch from '@/components/chimera/pipeline-stages/Stage_3_1_SpecAndArch';
import Stage_3_2_RTLGeneration from '@/components/chimera/pipeline-stages/Stage_3_2_RTLGeneration';
import Stage_3_3_RTLOptAndTestSetup from '@/components/chimera/pipeline-stages/Stage_3_3_RTLOptAndTestSetup';
import Stage_3_4_TDDRTLRefinement from '@/components/chimera/pipeline-stages/Stage_3_4_TDDRTLRefinement';
import Stage_3_5_FuncVerifyCoverage from '@/components/chimera/pipeline-stages/Stage_3_5_FuncVerifyCoverage';
import Stage_3_6_FormalStaticAnalysis from '@/components/chimera/pipeline-stages/Stage_3_6_FormalStaticAnalysis';
import Stage_3_7_AIDebugging from '@/components/chimera/pipeline-stages/Stage_3_7_AIDebugging';
import Stage_3_8_SystemLevelCrossDomainVerify from '@/components/chimera/pipeline-stages/Stage_3_8_SystemLevelCrossDomainVerify';
import Stage_3_9_DFT from '@/components/chimera/pipeline-stages/Stage_3_9_DFT';
import Stage_3_10_PhysicalDesignPPAOpt from '@/components/chimera/pipeline-stages/Stage_3_10_PhysicalDesignPPAOpt';
import Stage_3_11_MfgPostSilicon from '@/components/chimera/pipeline-stages/Stage_3_11_MfgPostSilicon';

const pipelineStagesNav = [
  { id: "stage-3-1", title: "3.1 Spec & Arch", shortTitle: "Spec & Arch" },
  { id: "stage-3-2", title: "3.2 RTL Generation", shortTitle: "RTL Gen" },
  { id: "stage-3-3", title: "3.3 RTL Opt & Test Setup", shortTitle: "RTL Opt & Test" },
  { id: "stage-3-4", title: "3.4 TDD RTL Refinement", shortTitle: "TDD RTL" },
  { id: "stage-3-5", title: "3.5 Func. Verify & Coverage", shortTitle: "Func. Verify" },
  { id: "stage-3-6", title: "3.6 Formal & Static Analysis", shortTitle: "Formal/Static" },
  { id: "stage-3-7", title: "3.7 AI Debugging", shortTitle: "AI Debug" },
  { id: "stage-3-8", title: "3.8 System Lvl. Verify & AI Eval", shortTitle: "System Verify" },
  { id: "stage-3-9", title: "3.9 DFT & ATPG", shortTitle: "DFT/ATPG" },
  { id: "stage-3-10", title: "3.10 Physical Design & PPA Opt.", shortTitle: "Physical/PPA" },
  { id: "stage-3-11", title: "3.11 Mfg & Post-Silicon", shortTitle: "Mfg/Post-Si" },
];

export default function AiPipelinePage() {
  return (
    <SubPageLayout>
      <article className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6 relative">
        <div className="flex flex-col items-center text-center mb-12">
          <Cpu className="h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-2">
            Section 3: Full-Stack AI Integration: Agentic Workflows Across the Semiconductor Pipeline
          </h1>
        </div>

        <p>The true power of the proposed multi-agent architecture is realized when it is applied holistically across the entire
          semiconductor design pipeline. This section details the granular, stage-by-stage implementation of agentic workflows,
          transforming each phase from a series of manual, siloed tasks into an integrated, AI-driven process. For each stage,
          the key challenges are identified, the agentic solution is described, and the expected business outcomes are quantified.
        </p>
        <p>This integrated approach creates a <strong>&quot;digital thread&quot;</strong> of intent and rich context that
          flows seamlessly from initial concept to final silicon, fundamentally breaking down traditional barriers between design
          disciplines. In a traditional chip design flow, critical context is often lost at handoffs between specialized teams.
          The verification team might receive an RTL drop, and the physical design team a netlist, but the underlying design
          intent, critical trade-offs, and historical decisions can become fragmented. In our proposed <strong>Multi-Agent
          System (MAS)</strong>, the <strong>Supervisor agent</strong> (from the Central Intelligence Hub) maintains the
          complete, holistic state and high-level goals for the project. When it delegates a task, it passes not just the raw
          data but the entire contextual awareness, managed by the <strong>MCP Server&apos;s Context & State Management
          (CAG)</strong> component. This shared, dynamic context empowers downstream agents to make more intelligent,
          globally-aware decisions, drastically reducing errors from miscommunication, accelerating design convergence, and
          enabling truly optimal end-to-end solutions that meet our aggressive <strong>PPA targets</strong>.
        </p>

        {/* Shortcut Buttons Section */}
        <div className="my-12 py-4 border-y border-slate-700">
          <h3 className="text-xl font-semibold text-center text-white mb-6">Pipeline Stages Overview</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {pipelineStagesNav.map((stage) => (
              <Link key={stage.id} href={`#${stage.id}`} passHref>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-slate-800/60 border-slate-700 hover:bg-slate-700/80 hover:border-primary text-slate-300 hover:text-white transition-all duration-200"
                >
                  {stage.shortTitle}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <Stage_3_1_SpecAndArch />
        <Stage_3_2_RTLGeneration />
        <Stage_3_3_RTLOptAndTestSetup />
        <Stage_3_4_TDDRTLRefinement />
        <Stage_3_5_FuncVerifyCoverage />
        <Stage_3_6_FormalStaticAnalysis />
        <Stage_3_7_AIDebugging />
        <Stage_3_8_SystemLevelCrossDomainVerify />
        <Stage_3_9_DFT />
        <Stage_3_10_PhysicalDesignPPAOpt />
        <Stage_3_11_MfgPostSilicon />

      </article>
    </SubPageLayout>
  );
}
