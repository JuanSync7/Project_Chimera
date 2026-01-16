
import React from 'react';
import type { NavLinkItem, PipelineTab, RoadmapPhase } from '@/lib/chimera/types';
import { 
  Pencil, 
  FileCode, 
  ClipboardCheck, 
  RefreshCcw,
  ListChecks, 
  ShieldCheck,
  SearchCode,
  BarChart3,
  SlidersHorizontal, 
  Cog,
  Wrench // Added Wrench icon for stage 9 as it was in the original pipeline page component
} from 'lucide-react';

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'overview', href: '/strategic-imperative', label: 'Overview' },
  { id: 'architecture', href: '/architectural-blueprint', label: 'Architecture' },
  { id: 'pipeline', href: '/ai-pipeline', label: 'Pipeline' },
  { id: 'symbiosis', href: '/human-ai-symbiosis', label: 'Symbiosis' },
  { id: 'risks', href: '/risk-mitigation', label: 'Risks & Vision' },
  { id: 'roadmap', href: '/roadmap-details', label: 'Roadmap' },
];

// PIPELINE_TABS is the single source for stage data.
// Used by:
// - Main page desktop tab view (first 5 items)
// - Main page mobile roulette view (all 11 items)
// - ai-pipeline page for shortcut buttons and detailed stage rendering (all 11 items)
export const PIPELINE_TABS: PipelineTab[] = [
  {
    id: 'stage-3-1',
    title: '1. Spec & Arch',
    icon: React.createElement(Pencil, { }), // className will be applied in component
    heading: 'Stage 1: System Specification & Architecture',
    generalDescription: 'Transforming ambiguous natural language requirements into formal, optimized architectural blueprints. Creates a <strong>"digital thread"</strong> of intent.',
    challenge: 'Ambiguous requirements, vast architectural search space.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">Agents:</strong> Customer Req. Translation, Specification, Microarchitecture Opt., System Interconnect, Supervisor.</p>
      <p><strong class="text-white font-semibold">Tech:</strong> RAG, CAG, RL, Multi-objective Opt.</p>`,
    outcome: '<ul class="list-disc list-inside"><li>Reduced ambiguity</li><li><strong>10x faster Design Space Exploration</strong></li><li>PPA optimized from day one.</li></ul>',
    outcomeColor: 'text-green-400'
  },
  {
    id: 'stage-3-2',
    title: '2. RTL Gen',
    icon: React.createElement(FileCode, { }),
    heading: 'Stage 2: Intelligent RTL Generation from Architecture',
    generalDescription: 'Converting architectural blueprints into high-quality, synthesizable RTL using prompt engineering, RAG for LLMs, and HLS integration.',
    challenge: 'Architectural translation to RTL is error-prone; LLM reliability for HDL; HLS integration.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">Agents:</strong> RTL Generation & Refinement (Coder) Agent.</p>
      <p><strong class="text-white font-semibold">Tech:</strong> LLMs, Prompt Engineering, RAG, HLS.</p>`,
    outcome: '<ul class="list-disc list-inside"><li>High-quality RTL</li><li>Reduced manual coding</li><li>Reliable HLS</li><li>Faster module dev.</li></ul>',
    outcomeColor: 'text-green-400'
  },
  {
    id: 'stage-3-3',
    title: '3. RTL Opt & Test Setup',
    icon: React.createElement(ClipboardCheck, { }),
    heading: 'Stage 3: Proactive RTL Optimization & Testbench Setup',
    generalDescription: 'Ensuring initial RTL quality, synthesizability, and testability via automated optimizations and comprehensive test environment preparation.',
    challenge: 'Manual linting, optimization, and testbench creation are time-consuming and miss subtle issues.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">Agents:</strong> Coder Agent, Power-Aware RTL Opt. Agent, Test & Coverage Gen. Agent, Supervisor.</p>
      <p><strong class="text-white font-semibold">Tech:</strong> Automated Code Analysis, Power-Aware Opt., Automated Testbench Gen. (SVA).</p>`,
    outcome: '<ul class="list-disc list-inside"><li>Robust RTL</li><li>Early power opt.</li><li>Comprehensive test environment</li><li>Reduced verification effort.</li></ul>',
    outcomeColor: 'text-green-400' 
  },
  {
    id: 'stage-3-4',
    title: '4. TDD RTL Refinement',
    icon: React.createElement(RefreshCcw, { }),
    heading: 'Stage 4: Test-Driven Development (TDD) for Iterative RTL Refinement',
    generalDescription: 'Automated debugging and self-correction loop to rapidly achieve RTL functional correctness and PPA targets using pre-defined tests.',
    challenge: 'Iterative RTL debugging is a major bottleneck, slow and labor-intensive.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">Agents:</strong> Supervisor, Debug & Root Cause Analysis Agent, Coder Agent.</p>
      <p><strong class="text-white font-semibold">Process:</strong> TDD loop until all tests pass and PPA estimates met.</p>
      <p><strong class="text-white font-semibold">Tech:</strong> TDD, Automated Debugging, Closed-Loop Refinement.</p>`,
    outcome: '<ul class="list-disc list-inside"><li>Accelerated RTL convergence</li><li>High-quality, bug-free RTL</li><li>Mitigated LLM weaknesses for HDL.</li></ul>',
    outcomeColor: 'text-green-400'
  },
  {
    id: 'stage-3-5',
    title: '5. Functional Verification',
    icon: React.createElement(ListChecks, { }),
    heading: 'Stage 5: Comprehensive Functional Verification & Coverage Closure',
    generalDescription: 'Achieving exhaustive functional verification and complete coverage closure through intelligent test generation, UVM harnessing, and automated coverage analysis.',
    challenge: 'Comprehensive verification is a bottleneck; achieving full coverage and exercising corner cases is monumental with traditional UVM.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">Agents:</strong> Test & Coverage Generation Agent, AutoDV Agent, Supervisor.</p>
      <p><strong class="text-white font-semibold">Tech:</strong> Intelligent Test Gen, UVM Orchestration, Automated Coverage Analysis & Closure (code, functional, assertion).</p>`,
    outcome: '<ul class="list-disc list-inside"><li>Rigorously exercised RTL</li><li>Vast majority of functional bugs caught</li><li>Solid foundation for physical design.</li></ul>',
    outcomeColor: 'text-green-400'
  },
  // Additional 6 stages for a total of 11
  {
    id: 'stage-3-6',
    title: '6. Formal & Static Analysis',
    icon: React.createElement(ShieldCheck, { }),
    heading: 'Stage 6: Formal Verification & Static Analysis for Deep Bug Detection',
    generalDescription: 'Complementing simulation with mathematically rigorous formal methods and advanced static analysis to ensure a higher degree of correctness and identify critical issues simulation cannot.',
    challenge: 'Simulation misses deep, corner-case bugs, security vulnerabilities, or deadlocks. Formal verification requires specialized expertise.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">Agents:</strong> AutoDV Agent, AutoReview Agent, Security Verification Agent.</p>
      <p><strong class="text-white font-semibold">Tech:</strong> Automated Formal Property Gen & Proofs (Model Checking), Exhaustive Static Analysis (CDC, RDC, Linting), Security Probing (Formal, Static, Fault Injection).</p>`,
    outcome: '<ul class="list-disc list-inside"><li>Enhanced bug detection for elusive issues</li><li>Higher confidence in design correctness</li><li>Drastically reduced risk of silicon failures.</li></ul>',
    outcomeColor: 'text-green-400'
  },
  {
    id: 'stage-3-7',
    title: '7. AI-Driven Debugging',
    icon: React.createElement(SearchCode, { }),
    heading: 'Stage 7: AI-Driven Debugging & Root Cause Analysis',
    generalDescription: 'Minimizing the debugging bottleneck through intelligent automation for rapid and precise bug resolution, including automated explanation and suggested fixes.',
    challenge: 'Debugging accounts for a massive portion of verification time; manual analysis of logs and waveforms is expert-intensive and slow.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">Agents:</strong> Debug & Root Cause Analysis Agent, RTL Generation & Refinement Agent, Supervisor, Test & Coverage Generation Agent.</p>
      <p><strong class="text-white font-semibold">Tech:</strong> Automated Failure Analysis & Localization (Logs, Waveforms), Intelligent Explanation (LLM-based), "What-If" Debugging (CAG), Regression Test Generation.</p>`,
    outcome: '<ul class="list-disc list-inside"><li>Dramatically reduced manual debug effort</li><li>Accelerated design cycles</li><li>Engineers focus on higher-level innovation.</li></ul>',
    outcomeColor: 'text-green-400'
  },
  {
    id: 'stage-3-8',
    title: '8. System Lvl. Verify & AI Eval',
    icon: React.createElement(BarChart3, { }),
    heading: 'Stage 8: System-Level & Cross-Domain Verification, and AI System Evaluation',
    generalDescription: 'Comprehensive, chip-level validation (performance, power, security) and robust mechanisms for evaluating and improving the AI design system itself.',
    challenge: 'Ensuring holistic chip quality and continuous evaluation of the AI system’s own performance and reliability.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">Agents:</strong> Performance Verification Agent, Power & DRC Analysis Agent, Security Verification Agent, Supervisor, Knowledge Graph Agent, Global Planning Agent.</p>
      <p><strong class="text-white font-semibold">Tech:</strong> Full-Chip Performance Sim (SystemC), Dynamic/Static Power Analysis, Holistic Security Assessment (Attack Surface, Vuln. Scan, Pen Test), LangSmith AI Eval & Guardrails, Self-Evaluation & Learning.</p>`,
    outcome: '<ul class="list-disc list-inside"><li>Comprehensive chip quality, reliability, security</li><li>Self-improving AI design ecosystem</li><li>Accelerated design cycles.</li></ul>',
    outcomeColor: 'text-green-400'
  },
  {
    id: 'stage-3-9',
    title: '9. DFT & ATPG',
    icon: React.createElement(Wrench, { }),
    heading: 'Stage 9: Design for Testability (DFT) Insertion & Test Pattern Generation',
    generalDescription: 'Automating Design for Testability (DFT) logic insertion and test pattern generation to ensure high manufacturability and test coverage, minimizing PPA impact.',
    challenge: 'Ensuring a complex chip can be thoroughly tested post-manufacturing is paramount for yield and reliability. Manual DFT and ATPG are error-prone, impacting PPA and test costs.',
    agenticWorkflowDetails: `<p>Integrates AI for DFT planning, insertion, ATPG, and verification.</p>
      <p><strong class="text-white font-semibold">Agents:</strong> DFT Planning Agent, DFT Insertion Agent, ATPG Agent, DFT Verification Agent, Supervisor, Debug & Root Cause Analysis Agent.</p>
      <p><strong class="text-white font-semibold">Tech:</strong> RAG, Prompt Engineering, Automated Tool Orchestration (TestMAX, Modus), Fault Simulation.</p>`,
    outcome: '<ul class="list-disc list-inside"><li>High manufacturability</li><li>Efficient test coverage</li><li>Reduced post-silicon debug & production costs</li><li>Optimal PPA.</li></ul>',
    outcomeColor: 'text-green-400'
  },
  {
    id: 'stage-3-10',
    title: '10. Physical & PPA Opt.',
    icon: React.createElement(SlidersHorizontal, { }),
    heading: 'Stage 10: Physical Design & PPA Optimization',
    generalDescription: 'Using <strong>Reinforcement Learning</strong> to navigate the near-infinite solution space of physical layout and push designs to the <strong>true Pareto-optimal frontier</strong>.',
    challenge: '<strong>Physical design</strong> has near-infinite choices. Manually tuning EDA tools for optimal PPA is impossible to perfect.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">Agents:</strong> PPA Optimization Agent (orchestrating Synthesis, Physical Implementation, Timing Closure Agents), Supervisor.</p>
      <p><strong class="text-white font-semibold">Tech:</strong> Reinforcement Learning (RL).</p>
      <p><strong class="text-white font-semibold">Tools:</strong> Synopsys DSO.ai, Cadence Cerebrus principles.</p>`,
    outcome: '<ul class="list-disc list-inside"><li>Up to <strong>15-40% power reduction</strong></li><li>Smaller die size</li><li>Designs at <strong>true Pareto-optimal PPA frontier</strong>.</li></ul>',
    outcomeColor: 'text-green-400'
  },
  {
    id: 'stage-3-11',
    title: '11. Mfg & Validation',
    icon: React.createElement(Cog, { }),
    heading: 'Stage 11: Manufacturing & Post-Silicon Validation',
    generalDescription: 'Closing the loop from digital design to physical reality with <strong>predictive analytics</strong> and <strong>automated validation</strong>.',
    challenge: 'Predicting <strong>manufacturing yield</strong>, detecting <strong>defects</strong>, and validating <strong>actual hardware performance</strong>.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">Agents:</strong> Yield Prediction, Defect Detection, Post-Silicon Validation, Knowledge Graph Agent.</p>
      <p><strong class="text-white font-semibold">Tech:</strong> Predictive Analytics, Anomaly Detection, Automated Correlation, ML.</p>`,
    outcome: '<ul class="list-disc list-inside"><li>Improved <strong>yield</strong></li><li>Reduced <strong>validation cycle time</strong></li><li>More <strong>accurate models for future projects</strong>.</li></ul>',
    outcomeColor: 'text-green-400'
  },
];


export const ROADMAP_PHASES: RoadmapPhase[] = [
    {
        id: 'crawl',
        period: 'YEAR 1 - 1.5 (Q3 2025 - Q4 2026)',
        title: 'Phase 1: Crawl - Foundational Infrastructure and Pilot Projects',
        narrativeDescription: 'The primary goal of this initial phase is to build the <strong>core technical infrastructure</strong> and demonstrate the <strong>viability of the agentic approach</strong> on a limited, <strong>high-impact pilot project</strong>.',
        objectives: 'Build <strong>foundational infrastructure</strong>; Prove viability with a <strong>pilot project</strong>.',
        actions: "- Deploy initial <strong>MCP Server</strong> (<strong>LangGraph, LangSmith, PostgreSQL with pgvector</strong>).\n- Large-scale <strong>data ingestion</strong> for <strong>RAG knowledge base</strong> (design docs, manuals, library data).\n- Pilot project: Develop and deploy agentic <strong>Test-Driven Development (TDD) workflow</strong> for a single, non-critical IP block.",
        coreTechnologies: '<strong>MCP Server v1.0</strong>, <strong>LangGraph</strong>, <strong>LangSmith</strong>, <strong>RAG Knowledge Base</strong>, <strong>RTL TDD Agent</strong>.',
        peopleCultureFocus: 'Identify <strong>early adopters</strong>; Form a <strong>core AI platform team</strong>.',
        successMetrics: 'Successful <strong>pilot agentic workflow deployment</strong>; <strong>&gt;95% functional test pass rate</strong> for AI-generated RTL; Measurable <strong>reduction in design/verification time</strong> for pilot IP block; <strong>Infrastructure stability</strong>.',
        colorClass: 'text-sky-400',
        dotClass: 'phase-crawl'
    },
    {
        id: 'walk',
        period: 'YEAR 1.5 - 3 (Q1 2027 - Q4 2028)',
        title: 'Phase 2: Walk - Scaling Agentic Workflows and Cultural Integration',
        narrativeDescription: 'Expand the application of <strong>agentic workflows</strong> to cover more of the design pipeline, integrate them into <strong>mainstream project flows</strong>, and drive <strong>cultural adoption</strong> across the engineering organization.',
        objectives: 'Scale <strong>agentic workflows</strong>; Drive <strong>cultural adoption and training</strong>.',
        actions: "- Develop and deploy autonomous <strong>PPA Optimization Agent</strong> and <strong>AIvril-inspired Verification Agent</strong>.\n- Integrate new agentic workflows into <strong>standard design methodology</strong> for all new mainstream chip projects.\n- Launch internal <strong>\"Agent Academy\"</strong> and certification program for prompt engineering, agent workflow design, MLOps.\n- Host internal hackathons for <strong>custom engineer-built agents</strong>.",
        coreTechnologies: '<strong>PPA Optimization Agent (RL)</strong>, <strong>AIvril Verification Agent</strong>, <strong>CI/CD for Agents</strong>.',
        peopleCultureFocus: 'Launch <strong>"Agent Academy"</strong>; Train all engineers in AI tools & methodologies; Foster <strong>custom agent development</strong>.',
        successMetrics: 'Demonstration of <strong>&gt;15% improvement in PPA</strong> on first projects using PPA agent; <strong>&gt;50% reduction in verification closure time</strong>; <strong>80% of design engineering workforce trained and certified</strong>.',
        colorClass: 'text-purple-400',
        dotClass: 'phase-walk'
    },
    {
        id: 'run',
        period: 'YEAR 3 - 5 (Q1 2029 - Q4 2030)',
        title: 'Phase 3: Run - Full-Stack Autonomy and Market Leadership',
        narrativeDescription: 'Achieve <strong>full-stack autonomy</strong> with an end-to-end <strong>agentic design system</strong>. Leverage this unique capability for <strong>market leadership</strong> and design <strong>novel AI chips</strong> using Chimera.',
        objectives: 'Achieve <strong>full-stack autonomy</strong>; Leverage system for <strong>market dominance</strong>.',
        actions: "- Integrate all five pipeline stages (Spec to Post-Silicon) into a <strong>seamless workflow</strong> orchestrated by a <strong>hierarchical supervisor architecture</strong>.\n- Empower system to autonomously suggest <strong>novel architectures/design improvements</strong> from emergent insights.\n- Initiate first projects to design <strong>novel AI accelerator chips</strong> using the Chimera system (closing <strong>AI-silicon loop</strong>).",
        coreTechnologies: '<strong>Hierarchical Supervisor Architecture</strong>; <strong>End-to-end integrated workflow</strong>; <strong>Emergent insight analysis capabilities</strong>.',
        peopleCultureFocus: 'Shift engineers from agent users to <strong>agent orchestrators</strong>; Solidify <strong>AI-first design culture</strong> throughout the organization.',
        successMetrics: '<strong>&gt;30% reduction in overall design cycle time</strong> (spec to tape-out); Clear <strong>market leadership in PPA benchmarks</strong>; Successful tape-out of first <strong>"AI-designed AI chip" prototype</strong>.',
        colorClass: 'text-fuchsia-400',
        dotClass: 'phase-run'
    }
];

export const HIGH_LEVEL_PYTHON_CODE_EXAMPLE = `
# Conceptual Genkit Tool for Design Analysis
from genkit import ai, define_tool, z

@define_tool(
    name="design_analyzer_tool",
    description="Analyzes RTL design metrics from a report.",
    input_schema=z.object({
        "report_path": z.string().describe(
            "Path to the design report file (e.g., JSON, text)."
        )
    }),
    output_schema=z.object({
        "critical_warnings": z.number(),
        "timing_slack_ns": z.number(),
        "summary": z.string()
    })
)
async def analyze_design(report_path: str):
    # In a real scenario:
    # 1. Read the report_path file
    # 2. Parse out relevant metrics
    # 3. Perform analysis or apply rules
    # 4. Return structured analysis

    # For this example, returning placeholder data:
    print(f"Analyzing design report: {report_path}")
    warnings = 5  # Example
    slack = -0.2 # Example
    summary_text = f"Found {warnings} critical warnings. Timing slack: {slack}ns."
    
    return {
        "critical_warnings": warnings,
        "timing_slack_ns": slack,
        "summary": summary_text
    }

# An AI agent could then use this tool:
# result = await ai.run(
#   design_analyzer_tool, 
#   {"report_path": "/path/to/synthesis_report.json"}
# )
# print(result.summary)
`.trim();

export const PYTHON_CODE_EXAMPLE = HIGH_LEVEL_PYTHON_CODE_EXAMPLE;
    

    

    















