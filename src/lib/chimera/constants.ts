
import React from 'react';
import type { NavLinkItem, PipelineTab, RoadmapPhase } from '@/lib/chimera/types';
import { Pencil, Code, BadgeCheck, Cpu, Cog } from 'lucide-react';

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
    id: 'tab-spec',
    title: '1. Spec & Arch',
    icon: React.createElement(Pencil, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 1: System Specification & Architecture',
    generalDescription: 'Transforming ambiguous natural language requirements into formal, optimized architectural blueprints. This stage creates a <strong>"digital thread"</strong> of intent and context that flows from initial concept to final silicon.',
    challenge: 'The initial phase of design is often hampered by <strong>ambiguous requirements</strong> expressed in natural language and the impossibly vast search space of potential <strong>high-level architectures</strong>.',
    agenticWorkflowDetails: `<p><strong class="text-sky-400 font-semibold">AI Agent(s) & Role:</strong></p>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>Spec Analyst Agent:</strong> Engages with product managers/architects. Uses <strong>RAG</strong> for data on past projects to identify ambiguities/constraints. Uses <strong>CAG</strong> for conversational context to refine requirements into a formal, machine-readable specification.</li>
        <li><strong>Design Space Exploration (DSE) Agent:</strong> Powered by <strong>reinforcement learning</strong>, autonomously generates and evaluates thousands of high-level architectural variants (e.g., memory hierarchies, bus fabrics, core configurations).</li>
      </ul>
      <p><strong class="text-sky-400 font-semibold">Core AI Technique:</strong> <strong>RAG/CAG</strong>, <strong>Reinforcement Learning (RL)</strong>.</p>
      <p><strong class="text-sky-400 font-semibold">Key Tools/Frameworks:</strong> <strong>LangGraph</strong>, Custom Python scripts for DSE, AI models for rapid PPA estimation from high-level descriptions (achieving up to <strong>10x improvement</strong> in exploration speed).</p>
      <p><strong class="text-sky-400 font-semibold">Process:</strong> The <strong>Supervisor agent</strong> orchestrates this, presenting top candidate architectures to human architects for final decision.</p>`,
    outcome: 'Reduced specification ambiguity; <strong>10x faster Design Space Exploration</strong>; Architectures <strong>optimized for PPA</strong> from day one.',
    outcomeColor: 'text-sky-300'
  },
  {
    id: 'tab-rtl',
    title: '2. RTL Design',
    icon: React.createElement(Code, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 2: RTL Design & High-Level Synthesis (HLS)',
    generalDescription: 'Automating the tedious and error-prone process of HDL coding with verifiable, AI-driven generation, addressing <strong>reliability gaps</strong> of generative AI for hardware.',
    challenge: 'Manual creation of <strong>Register-Transfer Level (RTL)</strong> code (Verilog/VHDL) is <strong>time-consuming, tedious, and error-prone</strong>. LLMs can generate HDL but often produce <strong>functionally flawed code</strong>.',
    agenticWorkflowDetails: `<p><strong class="text-sky-400 font-semibold">AI Agent(s) & Role (Test-Driven Development - TDD):</strong></p>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>Testbench Generator Agent:</strong> Writes functional tests and assertions first, creating a clear, verifiable definition of <strong>"correctness"</strong>.</li>
        <li><strong>Verilog/VHDL Coder Agent:</strong> Instructed to write RTL code that passes the pre-defined tests. Iterates (generates code, Supervisor runs tests, agent analyzes failures, refactors) until all tests pass. Also capable of <strong>code conversion</strong> between HDLs.</li>
      </ul>
      <p><strong class="text-sky-400 font-semibold">Core AI Technique:</strong> <strong>Generative AI</strong>, <strong>Test-Driven Development (TDD)</strong>.</p>
      <p><strong class="text-sky-400 font-semibold">Key Tools/Frameworks:</strong> Claude Code-like models, <strong>LangGraph</strong>, Simulation tools.</p>
      <p><strong class="text-sky-400 font-semibold">Process:</strong> Human engineer provides high-level functional description and test requirements. Supervisor confirms tests. <strong>TDD loop</strong> mitigates LLM weaknesses by grounding generation in verifiable tests. <strong>HLS</strong> will be prioritized where appropriate.</p>`,
    outcome: 'Vastly improved <strong>RTL quality and reliability</strong>; Reduced <strong>manual coding effort</strong>; Mitigated <strong>AI hallucination</strong>; Faster <strong>module development</strong>.',
    outcomeColor: 'text-sky-300'
  },
  {
    id: 'tab-verify',
    title: '3. Verification',
    icon: React.createElement(BadgeCheck, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 3: Verification & Validation',
    generalDescription: 'Tackling the <strong>single largest bottleneck</strong> in chip design with an AI-powered <strong>verification-in-the-loop</strong> framework, aiming for <strong>"first-time-right" silicon</strong>.',
    challenge: '<strong>Functional verification</strong> consumes up to <strong>70% of total project resources</strong>. Traditional simulation-based methods can miss <strong>deep, corner-case bugs</strong> leading to costly silicon respins.',
    agenticWorkflowDetails: `<p><strong class="text-sky-400 font-semibold">AI Agent(s) & Role (AIvril Verification-in-the-Loop Framework):</strong></p>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>AutoReview Agent:</strong> Automated code reviewer. Uses <strong>static analysis, linting, and formal methods</strong> to check RTL for errors, style violations, non-synthesizable constructs. Provides targeted feedback to Coder Agent.</li>
        <li><strong>AutoDV (Automatic Design Verification) Agent:</strong> Responsible for functional correctness. Uses <strong>formal verification tools</strong> (e.g., JasperGold) to mathematically prove properties and find deep bugs. Analyzes simulation coverage reports to identify untested areas and intelligently generates new, targeted test cases to <strong>close coverage holes</strong>.</li>
      </ul>
      <p><strong class="text-sky-400 font-semibold">Core AI Technique:</strong> <strong>Static Analysis</strong>, <strong>Formal Methods</strong>, <strong>Coverage-driven test generation</strong>.</p>
      <p><strong class="text-sky-400 font-semibold">Key Tools/Frameworks:</strong> <strong>AIvril-inspired framework</strong>, JasperGold, Formal verification tools.</p>
      <p><strong class="text-sky-400 font-semibold">Process:</strong> <strong>Verification-in-the-loop</strong> catches virtually all bugs before physical design.</p>`,
    outcome: 'Up to <strong>70% reduction in debug time</strong>; Higher confidence; Significant reduction in <strong>silicon respins</strong>.',
    outcomeColor: 'text-sky-300'
  },
  {
    id: 'tab-physical',
    title: '4. Physical Design',
    icon: React.createElement(Cpu, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 4: Physical Design & PPA Optimization',
    generalDescription: 'Using <strong>Reinforcement Learning</strong> to navigate the near-infinite solution space of physical layout and push designs to the <strong>true Pareto-optimal frontier</strong>.',
    challenge: '<strong>Physical design</strong> (floorplanning, placement, routing) involves a <strong>near-infinite solution space</strong>. Manually tuning EDA tool parameters for optimal PPA is humanly impossible to perfect.',
    agenticWorkflowDetails: `<p><strong class="text-sky-400 font-semibold">AI Agent(s) & Role (Autonomous RL):</strong></p>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>PPA Optimization Agent:</strong> Based on principles of tools like <strong>Synopsys DSO.ai</strong> and <strong>Cadence Cerebrus</strong>. Uses <strong>RL</strong> to holistically and autonomously explore the PPA solution space.</li>
      </ul>
      <p><strong class="text-sky-400 font-semibold">Core AI Technique:</strong> <strong>Reinforcement Learning (RL)</strong>.</p>
      <p><strong class="text-sky-400 font-semibold">Key Tools/Frameworks:</strong> Synopsys DSO.ai, Cadence Cerebrus, Physical design EDA tools.</p>
      <p><strong class="text-sky-400 font-semibold">Process:</strong> Agent's "actions" are adjusting tool settings, design constraints, floorplan parameters. "Reward" is a score from PPA metrics (timing, power, area, congestion) and manufacturing yield predictions. Runs <strong>thousands of automated iterations</strong> to learn complex, non-obvious optimization strategies.</p>`,
    outcome: 'Up to <strong>15-40% power reduction</strong>; Smaller die size; Pushing designs to the <strong>true Pareto-optimal frontier of PPA</strong>.',
    outcomeColor: 'text-sky-300'
  },
  {
    id: 'tab-post',
    title: '5. Post-Silicon',
    icon: React.createElement(Cog, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 5: Manufacturing & Post-Silicon Validation',
    generalDescription: 'Closing the loop from digital design to physical reality with <strong>predictive analytics</strong> and <strong>automated validation</strong>.',
    challenge: 'Bridging pre-silicon design and physical reality involves predicting <strong>manufacturing yield</strong>, detecting microscopic <strong>physical defects</strong>, and validating <strong>actual hardware performance</strong>.',
    agenticWorkflowDetails: `<p><strong class="text-sky-400 font-semibold">AI Agent(s) & Role:</strong></p>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>Yield Prediction Agent:</strong> Uses <strong>ML models</strong> trained on historical wafer-level data to identify design features likely to cause manufacturing problems. Feedback passed to PPA Optimization Agent.</li>
        <li><strong>Defect Detection Agent:</strong> Leverages <strong>AI-powered visual inspection systems</strong> to analyze wafer scans, identifying and classifying defects.</li>
        <li><strong>Post-Silicon Validation Agent:</strong> Automates prototype chip bring-up. Runs diagnostics, collects performance data, and correlates discrepancies against pre-silicon simulations.</li>
      </ul>
      <p><strong class="text-sky-400 font-semibold">Core AI Technique:</strong> <strong>Predictive Analytics</strong>, <strong>Anomaly Detection</strong>, <strong>Automated Correlation</strong>, <strong>Machine Learning</strong>.</p>
      <p><strong class="text-sky-400 font-semibold">Key Tools/Frameworks:</strong> Custom ML Models, AI-driven visual inspection systems.</p>
      <p><strong class="text-sky-400 font-semibold">Process:</strong> Incorporates <strong>manufacturability into PPA</strong>. Creates a final <strong>feedback loop</strong> refining models for future projects.</p>`,
    outcome: 'Improved <strong>manufacturing yield</strong>; Reduced <strong>validation cycle time</strong>; More <strong>accurate models</strong> for all future projects.',
    outcomeColor: 'text-sky-300'
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
        successMetrics: 'Successful <strong>pilot agentic workflow deployment</strong>; <strong>>95% functional test pass rate</strong> for AI-generated RTL; Measurable <strong>reduction in design/verification time</strong> for pilot IP block; <strong>Infrastructure stability</strong>.',
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
        successMetrics: 'Demonstration of <strong>>15% improvement in PPA</strong> on first projects using PPA agent; <strong>>50% reduction in verification closure time</strong>; <strong>80% of design engineering workforce trained and certified</strong>.',
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
        successMetrics: '<strong>>30% reduction in overall design cycle time</strong> (spec to tape-out); Clear <strong>market leadership in PPA benchmarks</strong>; Successful tape-out of first <strong>"AI-designed AI chip" prototype</strong>.',
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
    

    

    


