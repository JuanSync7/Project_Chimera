
import React from 'react';
import type { NavLinkItem, PipelineTab, RoadmapPhase } from '@/lib/chimera/types';
import { 
  Pencil, 
  FileCode, 
  ClipboardCheck, 
  RefreshCcw, 
  ShieldCheck, 
  SlidersHorizontal, 
  Cog 
} from 'lucide-react';

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'overview', href: '#overview', label: 'Overview' },
  { id: 'architecture', href: '#architecture', label: 'Architecture' },
  { id: 'pipeline', href: '#pipeline', label: 'Pipeline' },
  { id: 'symbiosis', href: '#symbiosis', label: 'Symbiosis' },
  { id: 'risks', href: '#risks', label: 'Risks & Vision' },
  { id: 'roadmap', href: '#roadmap', label: 'Roadmap' },
];

export const PIPELINE_TABS: PipelineTab[] = [
  {
    id: 'tab-spec-arch',
    title: '1. Spec & Arch',
    icon: React.createElement(Pencil, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 1: System Specification & Architecture',
    generalDescription: 'Transforming ambiguous natural language requirements into formal, optimized architectural blueprints. This stage creates a <strong>"digital thread"</strong> of intent and context that flows from initial concept to final silicon.',
    challenge: 'The critical initial phase of chip design is often hampered by <strong>ambiguous requirements</strong> expressed in natural language and the impossibly vast search space of potential <strong>high-level architectures</strong>.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">AI Agents & Roles:</strong></p>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>Customer Requirements Translation Agent:</strong> Leverages RAG/CAG to refine customer needs into preliminary specs.</li>
        <li><strong>Specification Agent:</strong> Formalizes requirements into machine-readable design specifications using formal verification.</li>
        <li><strong>Microarchitecture Optimization Agent:</strong> Uses RL to explore architectural variants (CPU pipelines, caches).</li>
        <li><strong>System-Level Interconnect Agent:</strong> Designs/optimizes NoCs and memory interfaces using system-level tools.</li>
        <li><strong>Supervisor Agent:</strong> Orchestrates exploration, monitors PPA, presents top candidates.</li>
      </ul>
      <p><strong class="text-white font-semibold">Core AI Techniques:</strong> RAG, CAG, Reinforcement Learning, Multi-objective Optimization.</p>`,
    outcome: 'Reduced specification ambiguity; <strong>10x faster Design Space Exploration</strong>; Architectures optimized for PPA from day one.',
    outcomeColor: 'text-sky-300'
  },
  {
    id: 'tab-rtl-gen',
    title: '2. RTL Gen',
    icon: React.createElement(FileCode, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 2: Intelligent RTL Generation from Architecture',
    generalDescription: 'Transforming complex architectural blueprints into high-quality, synthesizable RTL code, leveraging advanced prompt engineering and RAG for LLMs, and integrating HLS.',
    challenge: 'Translating architectural blueprints to <strong>high-quality, synthesizable RTL</strong> is error-prone. LLMs need careful guidance for reliability and adherence to standards. Integrating HLS is key for productivity.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">AI Agents & Roles:</strong></p>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>RTL Generation & Refinement Agent (Coder Agent):</strong> Synthesizes architectural intent into initial RTL (Verilog/VHDL) using advanced prompt engineering (structured prompts, in-context learning, constraint-based generation) with LLMs and RAG. Orchestrates HLS tools for C/C++/SystemC modules.</li>
      </ul>
      <p><strong class="text-white font-semibold">Core AI Techniques:</strong> Generative AI (LLMs), Prompt Engineering, RAG, HLS Integration.</p>`,
    outcome: 'High-quality, synthesizable RTL; Reduced manual coding; Reliable HLS integration; Faster module development.',
    outcomeColor: 'text-sky-300'
  },
  {
    id: 'tab-rtl-opt-test',
    title: '3. RTL Opt & Test',
    icon: React.createElement(ClipboardCheck, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 3: Proactive RTL Optimization & Testbench Setup',
    generalDescription: 'Ensuring initial RTL quality, synthesizability, and testability through automated optimizations and comprehensive test environment preparation before functional verification.',
    challenge: 'Manual linting, optimization, and testbench creation are <strong>time-consuming</strong> and miss subtle issues, leading to downstream delays.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">AI Agents & Roles:</strong></p>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>Verilog/VHDL Coder Agent:</strong> Performs initial local optimizations, linting, DRC, power-aware techniques, and pre-synthesis analysis.</li>
        <li><strong>Power-Aware RTL Optimization Agent:</strong> Collaborates to analyze and implement RTL modifications for power reduction.</li>
        <li><strong>Test & Coverage Generation Agent:</strong> Automatically generates comprehensive functional testbenches, test cases, stimulus patterns, monitors, and SVA, enabling a "test-first" approach. Supervisor presents these to human engineer for review.</li>
      </ul>
      <p><strong class="text-white font-semibold">Core AI Techniques:</strong> Automated Code Analysis, Power-Aware Optimization, Automated Testbench Generation (SVA).</p>`,
    outcome: 'Robust, high-quality RTL; Early power optimization; Comprehensive and verified test environment; Reduced downstream verification effort.',
    outcomeColor: 'text-green-400'
  },
  {
    id: 'tab-tdd-rtl',
    title: '4. TDD RTL',
    icon: React.createElement(RefreshCcw, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 4: Test-Driven Development (TDD) for Iterative RTL Refinement',
    generalDescription: 'Automated debugging and self-correction loop to rapidly achieve functional correctness and PPA targets for RTL using pre-defined tests.',
    challenge: 'Iterative debugging and refinement of RTL is a major bottleneck. Manually identifying and fixing bugs from simulation failures is <strong>labor-intensive and slow</strong>.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">AI Agents & Roles (TDD Loop):</strong></p>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>Supervisor:</strong> Invokes simulation tools to run tests against RTL.</li>
        <li><strong>Debug & Root Cause Analysis Agent:</strong> Analyzes simulation failures/coverage gaps, pinpoints bugs, and provides feedback to Coder Agent.</li>
        <li><strong>Verilog/VHDL Coder Agent:</strong> Leverages feedback to refactor, debug, and optimize generated code.</li>
      </ul>
      <p><strong class="text-white font-semibold">Process:</strong> Loop continues until all tests pass (100% functional coverage) and RTL meets PPA estimates. Grounds LLM generation in verifiable tests.</p>
      <p><strong class="text-white font-semibold">Core AI Techniques:</strong> Test-Driven Development (TDD), Automated Debugging, Closed-Loop Refinement.</p>`,
    outcome: 'Dramatically accelerated RTL convergence; High-quality, bug-free RTL; Mitigation of LLM weaknesses in HDL generation.',
    outcomeColor: 'text-green-400'
  },
  {
    id: 'tab-verify-validate',
    title: '5. Verification',
    icon: React.createElement(ShieldCheck, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 5: Verification & Validation',
    generalDescription: 'Tackling the <strong>single largest bottleneck</strong> in chip design with an AI-powered <strong>verification-in-the-loop</strong> framework, aiming for <strong>"first-time-right" silicon</strong>.',
    challenge: '<strong>Functional verification</strong> consumes up to <strong>70% of total project resources</strong>. Traditional simulation-based methods can miss <strong>deep, corner-case bugs</strong> leading to costly silicon respins.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">AI Agents & Roles (AIvril Verification-in-the-Loop):</strong></p>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>AutoReview Agent:</strong> Automated code reviewer using static analysis, linting, formal methods. Provides feedback to Coder Agent.</li>
        <li><strong>AutoDV Agent:</strong> Ensures functional correctness using formal verification tools (e.g., JasperGold), analyzes coverage, and intelligently generates new test cases to close coverage holes.</li>
        <li><strong>Supervisor Agent:</strong> Oversees framework, prioritizes tasks, communicates with Debug Agent.</li>
      </ul>
      <p><strong class="text-white font-semibold">Core AI Techniques:</strong> Static Analysis, Formal Methods, Coverage-Driven Test Generation, Verification-in-the-Loop.</p>`,
    outcome: 'Up to <strong>70% reduction in debug time</strong>; Higher confidence; Significant <strong>reduction in silicon respins</strong>.',
    outcomeColor: 'text-yellow-400'
  },
  {
    id: 'tab-physical-ppa',
    title: '6. Physical & PPA',
    icon: React.createElement(SlidersHorizontal, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 6: Physical Design & PPA Optimization',
    generalDescription: 'Using <strong>Reinforcement Learning</strong> to navigate the near-infinite solution space of physical layout and push designs to the <strong>true Pareto-optimal frontier</strong>.',
    challenge: '<strong>Physical design</strong> (floorplanning, placement, routing) involves a <strong>near-infinite solution space</strong>. Manually tuning EDA tool parameters for optimal PPA is humanly impossible to perfect.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">AI Agents & Roles (Autonomous RL):</strong></p>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>PPA Optimization Agent:</strong> Orchestrates Physical Design & Optimization Agents (Synthesis, Physical Implementation, Timing Closure). Uses RL to explore PPA solution space by adjusting tool settings, design constraints, floorplan parameters.</li>
        <li><strong>Supervisor Agent:</strong> Tracks convergence, ensures guardrails, manages Human-in-the-Loop interface.</li>
      </ul>
      <p><strong class="text-white font-semibold">Core AI Techniques:</strong> Reinforcement Learning (RL).</p>
      <p><strong class="text-white font-semibold">Key Tools:</strong> Synopsys DSO.ai, Cadence Cerebrus principles.</p>`,
    outcome: 'Up to <strong>15-40% power reduction</strong>; Smaller die size; Pushing designs to the <strong>true Pareto-optimal frontier of PPA</strong>.',
    outcomeColor: 'text-purple-400'
  },
  {
    id: 'tab-mfg-post-silicon',
    title: '7. Mfg & Validation',
    icon: React.createElement(Cog, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 7: Manufacturing & Post-Silicon Validation',
    generalDescription: 'Closing the loop from digital design to physical reality with <strong>predictive analytics</strong> and <strong>automated validation</strong>.',
    challenge: 'Bridging pre-silicon design and physical reality involves predicting <strong>manufacturing yield</strong>, detecting microscopic <strong>physical defects</strong>, and validating <strong>actual hardware performance</strong>.',
    agenticWorkflowDetails: `<p><strong class="text-white font-semibold">AI Agents & Roles:</strong></p>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>Yield Prediction Agent:</strong> Uses ML models to identify design features likely to cause manufacturing problems; feedback to PPA Agent.</li>
        <li><strong>Defect Detection Agent:</strong> Leverages AI visual inspection to analyze wafer scans, classify defects.</li>
        <li><strong>Post-Silicon Validation Agent:</strong> Automates chip bring-up, runs diagnostics, collects performance data, correlates against pre-silicon simulations. Feedback to Knowledge Graph Agent.</li>
      </ul>
      <p><strong class="text-white font-semibold">Core AI Techniques:</strong> Predictive Analytics, Anomaly Detection, Automated Correlation, Machine Learning.</p>`,
    outcome: 'Improved <strong>manufacturing yield</strong>; Reduced <strong>validation cycle time</strong>; More <strong>accurate models for all future projects</strong>.',
    outcomeColor: 'text-rose-400'
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
        narrativeDescription: 'Achieve a <strong>fully integrated, end-to-end agentic design system</strong> that operates with a <strong>high degree of autonomy</strong>, and leverage this unique capability to establish <strong>undisputed market leadership</strong>.',
        objectives: 'Achieve <strong>full-stack autonomy</strong>; Leverage system for <strong>market dominance</strong>.',
        actions: "- Integrate all five pipeline stages (Spec to Post-Silicon) into a <strong>seamless workflow</strong> orchestrated by a <strong>hierarchical supervisor architecture</strong>.\n- Empower system to autonomously suggest <strong>novel architectures/design improvements</strong> from emergent insights.\n- Initiate first projects to design <strong>novel AI accelerator chips</strong> using the Chimera system (closing <strong>AI-silicon loop</strong>).",
        coreTechnologies: '<strong>Hierarchical Supervisor Architecture</strong>; <strong>End-to-end integrated workflow</strong>; <strong>Emergent insight analysis capabilities</strong>.',
        peopleCultureFocus: 'Shift engineers from agent users to <strong>agent orchestrators</strong>; Solidify <strong>AI-first design culture</strong> throughout the organization.',
        successMetrics: '<strong>&gt;30% reduction in overall design cycle time</strong> (spec to tape-out); Clear <strong>market leadership in PPA benchmarks</strong>; Successful tape-out of first <strong>"AI-designed AI chip" prototype</strong>.',
        colorClass: 'text-fuchsia-400',
        dotClass: 'phase-run'
    }
];

export const PYTHON_CODE_EXAMPLE = `
# A simple agent to parse log files
class LogParserAgent:
    def run(self, log_file):
        errors = []
        with open(log_file, 'r') as f:
            for line in f:
                if "ERROR:" in line:
                    errors.append(line.strip())
        
        summary = f"Found {len(errors)} errors."
        return {"summary": summary, "errors": errors}

# Register with MCP Server
# mcp.register_tool("log_parser", LogParserAgent()) # Assuming mcp is defined elsewhere
`;
    

    

    






