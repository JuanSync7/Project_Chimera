// src/app/ai-pipeline/page.tsx
"use client";
import React from 'react';
import SubPageLayout from '@/components/chimera/SubPageLayout';
import { Cpu } from 'lucide-react'; // For H1 title

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

// SVG Diagram Component for AI Pipeline Flow
const AiPipelineDiagram: React.FC = () => {
  const stages = [
    { titleLines: ["Spec &", "Arch"], id: "s1" },
    { titleLines: ["RTL Gen"], id: "s2" },
    { titleLines: ["RTL Opt &", "Test Setup"], id: "s3" },
    { titleLines: ["TDD RTL", "Refine"], id: "s4" },
    { titleLines: ["Func.", "Verify"], id: "s5" },
    { titleLines: ["Formal/", "Static"], id: "s6" },
    { titleLines: ["AI Debug"], id: "s7" },
    { titleLines: ["System Verify", "& AI Eval"], id: "s8" },
    { titleLines: ["DFT &", "ATPG"], id: "s9" },
    { titleLines: ["Physical &", "PPA Opt."], id: "s10" },
    { titleLines: ["Mfg &", "Post-Si"], id: "s11" },
  ];

  const boxWidth = 120;
  const boxHeight = 70;
  const spacing = 30;
  const iconSize = 16;
  const titleHeight = 40;
  const diagramPadding = 30;

  const totalContentWidth = stages.length * boxWidth + (stages.length - 1) * spacing;
  const totalSVGWidth = totalContentWidth + 2 * diagramPadding;
  const svgHeight = boxHeight + titleHeight + diagramPadding; // Height for title, boxes, and some padding

  const startX = diagramPadding;
  const titleY = 25;
  const boxY = titleHeight;
  
  const iconXOffset = boxWidth / 2 - iconSize / 2;
  const iconY = boxY + 10;
  const textLine1Y = iconY + iconSize + 12; // Position text below icon
  const textLine2Y = textLine1Y + 14;


  return (
    <div className="my-12 flex justify-start md:justify-center overflow-x-auto py-4"> {/* Allow horizontal scroll on small screens, add padding */}
      <svg width={totalSVGWidth} height={svgHeight} viewBox={`0 0 ${totalSVGWidth} ${svgHeight}`} xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .pipeline-stage-box { fill: hsl(var(--diagram-mcp-internal-fill)); stroke: hsl(var(--diagram-mcp-stroke)); stroke-width: 1.5; rx: 8px; }
            .pipeline-stage-text { font-family: var(--font-inter, 'Inter', sans-serif); font-size: 11px; fill: hsl(var(--diagram-text-fill)); text-anchor: middle; }
            .pipeline-arrow { stroke: hsl(var(--diagram-arrow-stroke)); stroke-width: 2; marker-end: url(#pipelineArrowhead); }
            .pipeline-title-text { font-family: var(--font-inter, 'Inter', sans-serif); font-size: 16px; font-weight: bold; fill: hsl(var(--diagram-title-text-fill)); text-anchor: middle; }
            .ai-indicator-icon { fill: hsl(var(--diagram-supervisor-fill)); }
          `}
        </style>
        <defs>
          <marker id="pipelineArrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
            <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--diagram-arrow-stroke))" />
          </marker>
          {/* Lucide Cog icon path data, scaled for 16x16 approx */}
          <symbol id="aiStageIcon" viewBox="0 0 24 24">
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61-.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12-.64l2 3.46c.12.22.39.3.61.22l2.49 1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61.22l2-3.46c.12-.22-.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" className="ai-indicator-icon"/>
          </symbol>
        </defs>

        <text x={totalSVGWidth / 2} y={titleY} className="pipeline-title-text">AI-Powered Design Pipeline Stages</text>

        {stages.map((stage, index) => {
          const currentX = startX + index * (boxWidth + spacing);
          const textX = currentX + boxWidth / 2;
          
          return (
            <g key={stage.id}>
              <rect
                x={currentX}
                y={boxY}
                width={boxWidth}
                height={boxHeight}
                className="pipeline-stage-box"
              />
              <use href="#aiStageIcon" x={currentX + iconXOffset} y={iconY} width={iconSize} height={iconSize} />
              {stage.titleLines.length === 1 ? (
                <text x={textX} y={textLine1Y + 7} className="pipeline-stage-text"> {/* Adjust Y for single line */}
                  {stage.titleLines[0]}
                </text>
              ) : (
                <>
                  <text x={textX} y={textLine1Y} className="pipeline-stage-text">
                    {stage.titleLines[0]}
                  </text>
                  <text x={textX} y={textLine2Y} className="pipeline-stage-text">
                    {stage.titleLines[1]}
                  </text>
                </>
              )}
              
              {index < stages.length - 1 && (
                <line
                  x1={currentX + boxWidth}
                  y1={boxY + boxHeight / 2}
                  x2={currentX + boxWidth + spacing}
                  y2={boxY + boxHeight / 2}
                  className="pipeline-arrow"
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};


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

        <AiPipelineDiagram /> {/* Inserting the diagram here */}

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
