
import React from 'react'; // Ensure React is imported
import type { NavLinkItem, PipelineTab, RoadmapPhase } from '@/lib/chimera/types';

// Heroicons (outline style for consistency) - Using string placeholders for now
const PencilSquareIcon_placeholder = "PencilSquareIcon_placeholder";
const CodeBracketIcon_placeholder = "CodeBracketIcon_placeholder";
const CheckBadgeIcon_placeholder = "CheckBadgeIcon_placeholder";
const CpuChipIcon_placeholder = "CpuChipIcon_placeholder";
const CogIcon_placeholder = "CogIcon_placeholder";


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
    icon: PencilSquareIcon_placeholder,
    heading: 'Stage 1: System Specification & Architecture',
    generalDescription: 'Transforming ambiguous natural language requirements into formal, optimized architectural blueprints. This stage creates a "digital thread" of intent and context that flows from initial concept to final silicon.',
    challenge: 'The initial phase of design is often hampered by ambiguous requirements expressed in natural language and the impossibly vast search space of potential high-level architectures.',
    agenticWorkflowDetails: '<p>Test</p>', // Extremely simplified HTML for the first tab
    outcome: 'Reduced specification ambiguity; 10x faster Design Space Exploration; Architectures optimized for PPA from day one.',
    outcomeColor: 'text-sky-300'
  },
  {
    id: 'tab-rtl',
    title: '2. RTL Design',
    icon: CodeBracketIcon_placeholder,
    heading: 'Stage 2: RTL Design & High-Level Synthesis (HLS)',
    generalDescription: 'Automating the tedious and error-prone process of HDL coding with verifiable, AI-driven generation, addressing reliability gaps of generative AI for hardware.',
    challenge: 'Manual creation of Register-Transfer Level (RTL) code (Verilog/VHDL) is time-consuming, tedious, and error-prone. LLMs can generate HDL but often produce functionally flawed code.',
    agenticWorkflowDetails: '', // Empty string for other tabs
    outcome: 'Vastly improved RTL quality and reliability; Reduced manual coding effort; Mitigated AI hallucination; Faster module development.',
    outcomeColor: 'text-sky-300'
  },
  {
    id: 'tab-verify',
    title: '3. Verification',
    icon: CheckBadgeIcon_placeholder,
    heading: 'Stage 3: Verification & Validation',
    generalDescription: 'Tackling the single largest bottleneck in chip design with an AI-powered verification-in-the-loop framework, aiming for "first-time-right" silicon.',
    challenge: 'Functional verification consumes up to 70% of total project resources. Traditional simulation-based methods can miss deep, corner-case bugs leading to costly silicon respins.',
    agenticWorkflowDetails: '', // Empty string
    outcome: 'Up to 70% reduction in debug time; Higher confidence; Significant reduction in silicon respins.',
    outcomeColor: 'text-sky-300'
  },
  {
    id: 'tab-physical',
    title: '4. Physical Design',
    icon: CpuChipIcon_placeholder,
    heading: 'Stage 4: Physical Design & PPA Optimization',
    generalDescription: 'Using Reinforcement Learning to navigate the near-infinite solution space of physical layout and push designs to the true Pareto-optimal frontier.',
    challenge: 'Physical design (floorplanning, placement, routing) involves a near-infinite solution space. Manually tuning EDA tool parameters for optimal PPA is humanly impossible to perfect.',
    agenticWorkflowDetails: '', // Empty string
    outcome: 'Up to 15-40% power reduction; Smaller die size; Pushing designs to the true Pareto-optimal frontier of PPA.',
    outcomeColor: 'text-sky-300'
  },
  {
    id: 'tab-post',
    title: '5. Post-Silicon',
    icon: CogIcon_placeholder,
    heading: 'Stage 5: Manufacturing & Post-Silicon Validation',
    generalDescription: 'Closing the loop from digital design to physical reality with predictive analytics and automated validation.',
    challenge: 'Bridging pre-silicon design and physical reality involves predicting manufacturing yield, detecting microscopic physical defects, and validating actual hardware performance.',
    agenticWorkflowDetails: '', // Empty string
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
        actions: "- Deploy initial MCP Server (LangGraph, LangSmith, PostgreSQL with pgvector).\n- Large-scale data ingestion for RAG knowledge base (design docs, manuals, library data).\n- Pilot project: Develop and deploy agentic Test-Driven Development (TDD) workflow for a single, non-critical IP block.",
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
        actions: "- Develop and deploy autonomous PPA Optimization Agent and AIvril-inspired Verification Agent.\n- Integrate new agentic workflows into standard design methodology for all new mainstream chip projects.\n- Launch internal \"Agent Academy\" and certification program for prompt engineering, agent workflow design, MLOps.\n- Host internal hackathons for custom engineer-built agents.",
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
        actions: "- Integrate all five pipeline stages (Spec to Post-Silicon) into a seamless workflow orchestrated by a hierarchical supervisor architecture.\n- Empower system to autonomously suggest novel architectures/design improvements from emergent insights.\n- Initiate first projects to design novel AI accelerator chips using the Chimera system (closing AI-silicon loop).",
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
        
        summary = f"Found {'{'}len(errors){'}'} errors."
        return {"summary": summary, "errors": errors}

# Register with MCP Server
mcp.register_tool("log_parser", LogParserAgent())
`;
    

    