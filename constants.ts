
import React from 'react';
import { NavLinkItem, PipelineTab, RoadmapPhase } from './types';

// Heroicons (outline style for consistency)
const PencilSquareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" })
  )
);

const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" })
  )
);

const CheckBadgeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" })
  )
);

const CpuChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" }),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5.25-.75h.008v.008H15.75V12zm-2.25 0h.008v.008H13.5V12zm-2.25 0h.008v.008H11.25V12zm-2.25 0h.008v.008H9V12zm-2.25 0h.008v.008H6.75V12zm-2.25 0h.008v.008H4.5V12z" })
  )
);

const CogIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m1.5 0H6m-1.5 0V9m0 3V6m0 3H4.5m0 0H6m6-6v3m0 3v3m0-3h1.5m-1.5 0h-1.5m1.5 0V3m0 3V9m0 3h1.5m0 0H18m-1.5-3V9C16.5 7.507 15.493 6 12 6c-3.493 0-4.5 1.507-4.5 3v3m0 3c0 1.493 1.007 3 4.5 3s4.5-1.507 4.5-3m-9 0h1.5m0 0H9m3 6V9m0 3v3m0 3V9m0 3V6m3 6v3m0-3h-1.5m1.5 0H18" })
  )
);


export const NAV_LINKS: NavLinkItem[] = [
  { id: 'overview', href: '#overview', label: 'Overview' },
  { id: 'architecture', href: '#architecture', label: 'Architecture' },
  { id: 'pipeline', href: '#pipeline', label: 'Pipeline' },
  { id: 'symbiosis', href: '#symbiosis', label: 'Symbiosis' },
  { id: 'risks', href: '#risks', label: 'Risks & Vision' }, // Combined Risks and AGI vision
  { id: 'roadmap', href: '#roadmap', label: 'Roadmap' },
];

export const PIPELINE_TABS: PipelineTab[] = [
  {
    id: 'tab-spec',
    title: '1. Spec & Arch',
    icon: React.createElement(PencilSquareIcon, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 1: System Specification & Architecture',
    generalDescription: 'Transforming ambiguous natural language requirements into formal, optimized architectural blueprints. This stage creates a "digital thread" of intent and context that flows from initial concept to final silicon.',
    challenge: 'The initial phase of design is often hampered by ambiguous requirements expressed in natural language and the impossibly vast search space of potential high-level architectures.',
    agenticWorkflowDetails: `<strong>AI Agent(s) & Role:</strong>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>Spec Analyst Agent:</strong> Engages with product managers/architects. Uses RAG for data on past projects to identify ambiguities/constraints. Uses CAG for conversational context to refine requirements into a formal, machine-readable specification.</li>
        <li><strong>Design Space Exploration (DSE) Agent:</strong> Powered by reinforcement learning, autonomously generates and evaluates thousands of high-level architectural variants (e.g., memory hierarchies, bus fabrics, core configurations).</li>
      </ul>
      <strong>Core AI Technique:</strong> RAG/CAG, Reinforcement Learning (RL).
      <strong>Key Tools/Frameworks:</strong> LangGraph, Custom Python scripts for DSE, AI models for rapid PPA estimation from high-level descriptions (achieving up to 10x improvement in exploration speed).
      <strong>Process:</strong> The Supervisor agent orchestrates this, presenting top candidate architectures to human architects for final decision.`,
    outcome: 'Reduced specification ambiguity; 10x faster Design Space Exploration; Architectures optimized for PPA from day one.',
    outcomeColor: 'text-sky-300'
  },
  {
    id: 'tab-rtl',
    title: '2. RTL Design',
    icon: React.createElement(CodeBracketIcon, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 2: RTL Design & High-Level Synthesis (HLS)',
    generalDescription: 'Automating the tedious and error-prone process of HDL coding with verifiable, AI-driven generation, addressing reliability gaps of generative AI for hardware.',
    challenge: 'Manual creation of Register-Transfer Level (RTL) code (Verilog/VHDL) is time-consuming, tedious, and error-prone. LLMs can generate HDL but often produce functionally flawed code.',
    agenticWorkflowDetails: `<strong>AI Agent(s) & Role (Test-Driven Development - TDD):</strong>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>Testbench Generator Agent:</strong> Writes functional tests and assertions first, creating a clear, verifiable definition of "correctness".</li>
        <li><strong>Verilog/VHDL Coder Agent:</strong> Instructed to write RTL code that passes the pre-defined tests. Iterates (generates code, Supervisor runs tests, agent analyzes failures, refactors) until all tests pass. Also capable of code conversion between HDLs.</li>
      </ul>
      <strong>Core AI Technique:</strong> Generative AI, Test-Driven Development (TDD).
      <strong>Key Tools/Frameworks:</strong> Claude Code-like models, LangGraph, Simulation tools.
      <strong>Process:</strong> Human engineer provides high-level functional description and test requirements. Supervisor confirms tests. TDD loop mitigates LLM weaknesses by grounding generation in verifiable tests. HLS will be prioritized where appropriate.`,
    outcome: 'Vastly improved RTL quality and reliability; Reduced manual coding effort; Mitigated AI hallucination; Faster module development.',
    outcomeColor: 'text-sky-300'
  },
  {
    id: 'tab-verify',
    title: '3. Verification',
    icon: React.createElement(CheckBadgeIcon, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 3: Verification & Validation',
    generalDescription: 'Tackling the single largest bottleneck in chip design with an AI-powered verification-in-the-loop framework, aiming for "first-time-right" silicon.',
    challenge: 'Functional verification consumes up to 70% of total project resources. Traditional simulation-based methods can miss deep, corner-case bugs leading to costly silicon respins.',
    agenticWorkflowDetails: `<strong>AI Agent(s) & Role (AIvril Verification-in-the-Loop Framework):</strong>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>AutoReview Agent:</strong> Automated code reviewer. Uses static analysis, linting, and formal methods to check RTL for errors, style violations, non-synthesizable constructs. Provides targeted feedback to Coder Agent.</li>
        <li><strong>AutoDV (Automatic Design Verification) Agent:</strong> Responsible for functional correctness. Uses formal verification tools (e.g., JasperGold) to mathematically prove properties and find deep bugs. Analyzes simulation coverage reports to identify untested areas and intelligently generates new, targeted test cases to close coverage holes.</li>
      </ul>
      <strong>Core AI Technique:</strong> Static Analysis, Formal Methods, Coverage-driven test generation.
      <strong>Key Tools/Frameworks:</strong> AIvril-inspired framework, JasperGold, Formal verification tools.
      <strong>Process:</strong> Verification-in-the-loop catches virtually all bugs before physical design.`,
    outcome: 'Up to 70% reduction in debug time; Higher confidence; Significant reduction in silicon respins.',
    outcomeColor: 'text-sky-300'
  },
  {
    id: 'tab-physical',
    title: '4. Physical Design',
    icon: React.createElement(CpuChipIcon, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 4: Physical Design & PPA Optimization',
    generalDescription: 'Using Reinforcement Learning to navigate the near-infinite solution space of physical layout and push designs to the true Pareto-optimal frontier.',
    challenge: 'Physical design (floorplanning, placement, routing) involves a near-infinite solution space. Manually tuning EDA tool parameters for optimal PPA is humanly impossible to perfect.',
    agenticWorkflowDetails: `<strong>AI Agent(s) & Role (Autonomous RL):</strong>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>PPA Optimization Agent:</strong> Based on principles of tools like Synopsys DSO.ai and Cadence Cerebrus. Uses RL to holistically and autonomously explore the PPA solution space.</li>
      </ul>
      <strong>Core AI Technique:</strong> Reinforcement Learning (RL).
      <strong>Key Tools/Frameworks:</strong> Synopsys DSO.ai, Cadence Cerebrus, Physical design EDA tools.
      <strong>Process:</strong> Agent's "actions" are adjusting tool settings, design constraints, floorplan parameters. "Reward" is a score from PPA metrics (timing, power, area, congestion) and manufacturing yield predictions. Runs thousands of automated iterations to learn complex, non-obvious optimization strategies.`,
    outcome: 'Up to 15-40% power reduction; Smaller die size; Pushing designs to the true Pareto-optimal frontier of PPA.',
    outcomeColor: 'text-sky-300'
  },
  {
    id: 'tab-post',
    title: '5. Post-Silicon',
    icon: React.createElement(CogIcon, { className: "w-5 h-5 mr-2 inline-block" }),
    heading: 'Stage 5: Manufacturing & Post-Silicon Validation',
    generalDescription: 'Closing the loop from digital design to physical reality with predictive analytics and automated validation.',
    challenge: 'Bridging pre-silicon design and physical reality involves predicting manufacturing yield, detecting microscopic physical defects, and validating actual hardware performance.',
    agenticWorkflowDetails: `<strong>AI Agent(s) & Role:</strong>
      <ul class="list-disc list-inside space-y-1 mt-1">
        <li><strong>Yield Prediction Agent:</strong> Uses ML models trained on historical wafer-level data to identify design features likely to cause manufacturing problems. Feedback passed to PPA Optimization Agent.</li>
        <li><strong>Defect Detection Agent:</strong> Leverages AI-powered visual inspection systems to analyze wafer scans, identifying and classifying defects.</li>
        <li><strong>Post-Silicon Validation Agent:</strong> Automates prototype chip bring-up. Runs diagnostics, collects performance data, and correlates discrepancies against pre-silicon simulations.</li>
      </ul>
      <strong>Core AI Technique:</strong> Predictive Analytics, Anomaly Detection, Automated Correlation, Machine Learning.
      <strong>Key Tools/Frameworks:</strong> Custom ML Models, AI-driven visual inspection systems.
      <strong>Process:</strong> Incorporates manufacturability into PPA. Creates a final feedback loop refining models for future projects.`,
    outcome: 'Improved manufacturing yield; Reduced validation cycle time; More accurate models for all future projects.',
    outcomeColor: 'text-sky-300'
  },
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
    {
        id: 'crawl',
        period: 'YEAR 1 - 1.5 (Q3 2025 - Q4 2026)',
        title: 'Phase 1: Crawl - Foundational Infrastructure and Pilot Projects',
        narrativeDescription: 'The primary goal of this initial phase is to build the core technical infrastructure and demonstrate the viability of the agentic approach on a limited, high-impact pilot project.',
        objectives: 'Build foundational infrastructure; Prove viability with a pilot project.',
        actions: `- Deploy initial MCP Server (LangGraph, LangSmith, PostgreSQL with pgvector).
                  - Large-scale data ingestion for RAG knowledge base (design docs, manuals, library data).
                  - Pilot project: Develop and deploy agentic Test-Driven Development (TDD) workflow for a single, non-critical IP block.`,
        coreTechnologies: 'MCP Server v1.0, LangGraph, LangSmith, RAG Knowledge Base, RTL TDD Agent.',
        peopleCultureFocus: 'Identify early adopters; Form a core AI platform team.',
        successMetrics: 'Successful pilot agentic workflow deployment; >95% functional test pass rate for AI-generated RTL; Measurable reduction in design/verification time for pilot IP block; Infrastructure stability.',
        colorClass: 'text-sky-400',
        dotClass: 'phase-crawl'
    },
    {
        id: 'walk',
        period: 'YEAR 1.5 - 3 (Q1 2027 - Q4 2028)',
        title: 'Phase 2: Walk - Scaling Agentic Workflows and Cultural Integration',
        narrativeDescription: 'Expand the application of agentic workflows to cover more of the design pipeline, integrate them into mainstream project flows, and drive cultural adoption across the engineering organization.',
        objectives: 'Scale agentic workflows; Drive cultural adoption and training.',
        actions: `- Develop and deploy autonomous PPA Optimization Agent and AIvril-inspired Verification Agent.
                  - Integrate new agentic workflows into standard design methodology for all new mainstream chip projects.
                  - Launch internal "Agent Academy" and certification program for prompt engineering, agent workflow design, MLOps.
                  - Host internal hackathons for custom engineer-built agents.`,
        coreTechnologies: 'PPA Optimization Agent (RL), AIvril Verification Agent, CI/CD for Agents.',
        peopleCultureFocus: 'Launch "Agent Academy"; Train all engineers in AI tools & methodologies; Foster custom agent development.',
        successMetrics: 'Demonstration of >15% improvement in PPA on first projects using PPA agent; >50% reduction in verification closure time; 80% of design engineering workforce trained and certified.',
        colorClass: 'text-purple-400',
        dotClass: 'phase-walk'
    },
    {
        id: 'run',
        period: 'YEAR 3 - 5 (Q1 2029 - Q4 2030)',
        title: 'Phase 3: Run - Full-Stack Autonomy and Market Leadership',
        narrativeDescription: 'Achieve a fully integrated, end-to-end agentic design system that operates with a high degree of autonomy, and leverage this unique capability to establish undisputed market leadership.',
        objectives: 'Achieve full-stack autonomy; Leverage system for market dominance.',
        actions: `- Integrate all five pipeline stages (Spec to Post-Silicon) into a seamless workflow orchestrated by a hierarchical supervisor architecture.
                  - Empower system to autonomously suggest novel architectures/design improvements from emergent insights.
                  - Initiate first projects to design novel AI accelerator chips using the Chimera system (closing AI-silicon loop).`,
        coreTechnologies: 'Hierarchical Supervisor Architecture; End-to-end integrated workflow; Emergent insight analysis capabilities.',
        peopleCultureFocus: 'Shift engineers from agent users to agent orchestrators; Solidify AI-first design culture throughout the organization.',
        successMetrics: '>30% reduction in overall design cycle time (spec to tape-out); Clear market leadership in PPA benchmarks; Successful tape-out of first "AI-designed AI chip" prototype.',
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
mcp.register_tool("log_parser", LogParserAgent())
`;
