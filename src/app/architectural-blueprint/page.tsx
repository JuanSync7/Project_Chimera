// src/app/architectural-blueprint/page.tsx
"use client";
import React from 'react';
import SubPageLayout from '@/components/chimera/SubPageLayout';
import {
  DraftingCompass,
  Component,
  Scaling,
  ShieldCheck,
  PenTool,
  Cpu,
  BarChart3,
  Brain,
  ListChecks,
  ClipboardList,
  Workflow,
  Network,
  Code2,
  Layers3,
  DatabaseZap,
  MessagesSquare,
  FileSearch2,
  BrainCog,
  SearchCode,
  GitFork,
  Inspect,
  Award
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// --- SVG Diagram Component (from original file structure) ---
const OriginalArchitectureDiagram: React.FC = () => (
  <svg width="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <style>
      {`
        .supervisor { fill: hsl(var(--diagram-supervisor-fill)); }
        .worker { fill: hsl(var(--diagram-worker-fill)); }
        .mcp { fill: hsl(var(--diagram-mcp-fill)); stroke: hsl(var(--diagram-mcp-stroke)); stroke-width: 1.5; }
        .mcp-internal { fill: hsl(var(--diagram-mcp-internal-fill)); }
        .text-label { font-family: var(--font-inter, 'Inter', sans-serif); font-size: 10px; fill: hsl(var(--diagram-text-fill)); }
        .text-label-small { font-family: var(--font-inter, 'Inter', sans-serif); font-size: 9px; fill: hsl(var(--diagram-muted-text-fill)); }
        .text-title { font-family: var(--font-inter, 'Inter', sans-serif); font-size: 11px; font-weight: bold; fill: hsl(var(--diagram-title-text-fill)); }
        .arrow { stroke: hsl(var(--diagram-arrow-stroke)); stroke-width: 1.5; marker-end: url(#arrowhead); }
        .dashed-arrow { stroke: hsl(var(--diagram-arrow-stroke)); stroke-width: 1.5; stroke-dasharray: 4 2; marker-end: url(#arrowhead-dashed); }
      `}
    </style>
    <defs>
      <marker id="arrowhead" markerWidth="7" markerHeight="5" refX="5" refY="2.5" orient="auto" markerUnits="strokeWidth"><polygon points="0 0, 7 2.5, 0 5" fill="hsl(var(--diagram-arrow-stroke))" /></marker>
      <marker id="arrowhead-dashed" markerWidth="7" markerHeight="5" refX="5" refY="2.5" orient="auto" markerUnits="strokeWidth"><polygon points="0 0, 7 2.5, 0 5" fill="hsl(var(--diagram-arrow-stroke))" /></marker>
    </defs>
    <text x="200" y="10" textAnchor="middle" className="text-label" fontStyle="italic">"Project Manager"</text>
    <circle cx="200" cy="45" r="32" className="supervisor" />
    <text x="200" y="44" textAnchor="middle" className="text-title">Supervisor</text>
    <text x="200" y="56" textAnchor="middle" className="text-label">(LangGraph)</text>
    <g>
        <circle cx="70" cy="125" r="28" className="worker" />
        <text x="70" y="122" textAnchor="middle" className="text-label">RTL</text>
        <text x="70" y="133" textAnchor="middle" className="text-label">Coder</text>
    </g>
    <g>
        <circle cx="155" cy="125" r="28" className="worker" />
        <text x="155" y="122" textAnchor="middle" className="text-label">Verify</text>
        <text x="155" y="133" textAnchor="middle" className="text-label">Agent</text>
    </g>
    <g>
        <circle cx="245" cy="125" r="28" className="worker" />
        <text x="245" y="122" textAnchor="middle" className="text-label">PPA Opt.</text>
        <text x="245" y="133" textAnchor="middle" className="text-label">Agent</text>
    </g>
    <g>
        <circle cx="330" cy="125" r="28" className="worker" />
        <text x="330" y="122" textAnchor="middle" className="text-label">Spec</text>
        <text x="330" y="133" textAnchor="middle" className="text-label">Analyst</text>
    </g>
    <path d="M 172.74,61.77 L 93.85,110.33" className="arrow" fill="none" />
    <path d="M 184.25,72.79 L 168.78,100.68" className="arrow" fill="none" />
    <path d="M 215.75,72.79 L 231.22,100.68" className="arrow" fill="none" />
    <path d="M 227.26,61.77 L 306.15,110.33" className="arrow" fill="none" />
    <rect x="30" y="195" width="340" height="95" rx="10" className="mcp" />
    <text x="200" y="210" textAnchor="middle" className="text-title">MCP Server (RAG/CAG)</text>
    <g>
        <rect x="40" y="225" width="100" height="55" rx="5" className="mcp-internal" />
        <text x="90" y="246" textAnchor="middle" className="text-label">Tool Abstraction</text>
        <text x="90" y="259" textAnchor="middle" className="text-label-small">(EDA, Scripts)</text>
    </g>
    <g>
        <rect x="150" y="225" width="100" height="55" rx="5" className="mcp-internal" />
        <text x="200" y="240.5" textAnchor="middle" className="text-label">Knowledge Hub</text>
        <text x="200" y="252.5" textAnchor="middle" className="text-label-small">(RAG - PDKs, IP)</text>
        <text x="200" y="264.5" textAnchor="middle" className="text-label-small">Vector DB</text>
    </g>
    <g>
        <rect x="260" y="225" width="100" height="55" rx="5" className="mcp-internal" />
        <text x="310" y="240.5" textAnchor="middle" className="text-label">Context/State</text>
        <text x="310" y="252.5" textAnchor="middle" className="text-label-small">(CAG - Working Mem)</text>
        <text x="310" y="264.5" textAnchor="middle" className="text-label-small">Cache</text>
    </g>
    <path d="M 70,153 Q 80,184 90,193" className="dashed-arrow" fill="none"/>
    <path d="M 155,153 Q 172.5,184 190,193" className="dashed-arrow" fill="none"/>
    <path d="M 245,153 Q 227.5,184 210,193" className="dashed-arrow" fill="none"/>
    <path d="M 330,153 Q 320,184 310,193" className="dashed-arrow" fill="none"/>
  </svg>
);

// --- Component for H3 Topic (used in multiple sections) ---
interface SectionTopicProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}
const SectionTopic: React.FC<SectionTopicProps> = ({ icon, title, children }) => (
  <>
    <div className="mt-8 mb-4 flex items-center">
      {icon}
      <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
        {title}
      </h3>
    </div>
    {children}
  </>
);

// --- Component for Section 2.1: Foundations ---
const FoundationsSection: React.FC = () => (
  <>
    <div className="mt-12 mb-4">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
        2.1 Foundations of Multi-Agent Systems: Orchestrating Collaborative Intelligence for Chip Design
      </h2>
    </div>
    <p>A <strong>Multi-Agent System (MAS)</strong> stands as a paradigm of <strong>distributed intelligence</strong>, composed of multiple <strong>autonomous, intelligent agents</strong>, each endowed with <strong>specialized capabilities</strong> and clearly defined goals. These agents do not operate in isolation but rather interact strategically within a <strong>shared environment</strong> to collectively solve problems of immense scale and complexity – challenges far beyond the scope of any single, <strong>monolithic AI model</strong>. This architectural approach is uniquely and inherently suited to the intricate, <strong>multi-domain nature</strong> of modern semiconductor design for several pivotal reasons:</p>
    <SectionTopic icon={<Component className="h-7 w-7 text-primary mr-3 flex-shrink-0" />} title="Modularity and Specialization:">
      <p>The entire chip design process is intrinsically divisible into distinct, highly specialized domains of expertise, such as <strong>architectural exploration, RTL generation, formal verification, and sophisticated physical design</strong> (including placement, routing, and PPA optimization). A MAS directly leverages this natural segmentation by allowing for the creation of dedicated <strong>&quot;expert&quot; agents</strong> for each specific domain. This not only dramatically improves performance, as each agent can be precisely optimized with <strong>tailored AI models</strong> for its narrow, deep task, but also significantly enhances <strong>maintainability</strong>, enabling independent development, rigorous testing, and seamless updates of individual components.</p>
    </SectionTopic>
    <SectionTopic icon={<Scaling className="h-7 w-7 text-primary mr-3 flex-shrink-0" />} title="Scalability:">
      <p>As the frontiers of semiconductor technology continuously expand – driven by <strong>new process nodes, novel memory architectures, and emerging design methodologies</strong> – the MAS architecture provides unparalleled scalability. New <strong>specialized agents can be seamlessly integrated</strong> into the existing system to address these evolving requirements, without necessitating a costly and disruptive re-architecture of the entire framework. This <strong>future-proofs</strong> our design capabilities against the rapid pace of industry innovation.</p>
    </SectionTopic>
    <SectionTopic icon={<ShieldCheck className="h-7 w-7 text-primary mr-3 flex-shrink-0" />} title="Robustness and Debuggability:">
      <p>The inherent <strong>separation of concerns</strong>, where each agent is responsible for a well-defined task, profoundly improves system robustness. Failures or unexpected behaviors can be localized and traced directly to the responsible agent and its specific interactions, dramatically simplifying the process of <strong>isolation, diagnosis, and resolution</strong>. Unlike debugging an opaque, monolithic AI system, the MAS's <strong>transparent, modular structure</strong> ensures a high degree of <strong>auditability and control</strong>, which is paramount in the high-stakes, capital-intensive world of chip manufacturing.</p>
    </SectionTopic>
  </>
);

// --- Component for Section 2.2: Core Components ---
interface AgentDetail {
  name: string;
  details: string; // Keep as HTML string
  actionButton?: React.ReactNode; // Optional React node for a button
}
interface AgentCategoryInfo {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  agents: AgentDetail[];
}

const AgentCategoryDisplay: React.FC<Omit<AgentCategoryInfo, 'id'>> = ({ icon, title, description, agents }) => (
  <>
    <div className="mt-8 mb-4 flex items-center">
      {icon}
      <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
        {title}
      </h3>
    </div>
    <p>{description}</p>
    <ul className="list-disc pl-5 space-y-2">
      {agents.map((agent, index) => (
        <li key={index}>
          <strong className="text-white font-semibold">{agent.name}:</strong>{' '}
          <span dangerouslySetInnerHTML={{ __html: agent.details }} />
          {agent.actionButton && <div className="mt-4">{agent.actionButton}</div>}
        </li>
      ))}
    </ul>
  </>
);

const coreComponentsData: AgentCategoryInfo[] = [
  {
    id: 'designExplorationAgents',
    icon: <PenTool className="h-7 w-7 text-primary mr-3 flex-shrink-0" />,
    title: 'Design & Exploration Agents: Intelligent Design & Requirements Capture',
    description: 'These agents are strategically positioned at the very front-end of our product lifecycle, enabling rapid innovation from initial customer engagement through foundational design. They play a pivotal role in translating market needs into actionable technical specifications, exploring vast solution spaces, and laying the robust groundwork that dictates the efficiency, performance, and market fit of the entire chip.',
    agents: [
      { name: 'Customer Requirements Translation Agent', details: 'This agent is designed to bridge the crucial gap between <strong>high-level customer needs</strong> and <strong>initial technical feasibility</strong>. Leveraging advanced <strong>Natural Language Understanding (NLU)</strong> and <strong>domain-specific knowledge</strong> of semiconductor capabilities, it assists our sales and pre-sales teams in interpreting complex, often ambiguous, <strong>customer requirements</strong>. It can rapidly generate an initial draft of a <strong>high-level design specification</strong>, <strong>block diagram</strong>, or even a <strong>preliminary feasibility assessment</strong> based on <strong>past project data</strong> and current <strong>IP libraries</strong>. This dramatically accelerates the <strong>proposal generation process</strong>, ensures a <strong>consistent understanding</strong> of customer needs, and enables our sales team to provide <strong>quick, technically grounded responses</strong>, setting us apart in competitive bids.' },
      { name: 'Specification Agent', details: 'Building upon the initial customer translation, this agent then focuses on <strong>formalizing</strong> those high-level requirements into <strong>precise, unambiguous, and machine-readable design specifications</strong>. It leverages <strong>formal verification techniques</strong> and <strong>semantic analysis</strong> to ensure <strong>consistency, completeness, and adherence</strong> to established <strong>design guidelines</strong>. This agent is critical for mitigating <strong>costly ambiguities and misinterpretations upfront</strong>, ensuring a <strong>solid, verifiable starting point</strong> for all subsequent engineering stages.' },
    ],
  },
  {
    id: 'architectureExplorationAgents',
    icon: <Network className="h-7 w-7 text-primary mr-3 flex-shrink-0" />,
    title: 'Architecture Exploration Agents: Pioneering System-Level Innovation',
    description: 'These agents specialize in the abstract, high-level structural and functional design of the chip. They utilize advanced AI techniques to explore vast architectural landscapes, identify optimal configurations, and make foundational decisions that profoundly impact the final chip\'s performance, power, and area (PPA).',
    agents: [
      { name: 'Microarchitecture Optimization Agent', details: 'This agent is adept at designing the <strong>internal structure and organization</strong> of core components (e.g., <strong>CPU cores, DSPs, custom accelerators</strong>). Employing sophisticated <strong>reinforcement learning</strong> and <strong>multi-objective optimization algorithms</strong>, it autonomously explores myriad <strong>pipeline stages, cache hierarchies, memory access patterns, and functional unit configurations</strong>. Its intelligence lies in predicting <strong>complex PPA trade-offs</strong> at the earliest stages, identifying the <strong>most efficient microarchitectures</strong> for specific workloads and performance targets, and generating <strong>detailed architectural specifications</strong> that feed into RTL generation.' },
      { 
        name: 'System-Level Interconnect Agent', 
        details: 'As chip complexity grows with numerous <strong>IP blocks and heterogeneous components</strong>, efficient communication becomes paramount. This agent focuses on designing and optimizing the chip\'s <strong>internal communication fabric</strong>, such as <strong>Network-on-Chip (NoC) topologies, bus architectures, and memory interfaces</strong>. It intelligently leverages and orchestrates <strong>system-level exploration tools</strong> like <strong>Synopsys Platform Architect</strong> to model and simulate <strong>complex traffic scenarios</strong>, analyze <strong>bandwidth and latency</strong> across the entire system. Its AI enables it to evaluate and propose <strong>optimal interconnect configurations</strong>, ensuring <strong>seamless and high-performance data flow</strong> between all functional blocks, even across <strong>multi-die systems and chiplets</strong>.',
        // NOTE: The button was removed from here as it's being moved to the AI Pipeline page.
      },
    ],
  },
  {
    id: 'rtlGenerationAgents',
    icon: <Code2 className="h-7 w-7 text-primary mr-3 flex-shrink-0" />,
    title: 'RTL Generation Agents: Translating Vision into Optimized Code',
    description: 'These agents focus on the intricate task of converting architectural blueprints into executable, synthesizable Register-Transfer Level (RTL) code. They embody deep domain knowledge and leverage advanced AI techniques to generate high-quality, optimized RTL, ensuring both functional correctness and downstream PPA targets are met, even without model fine-tuning.',
    agents: [
      { name: 'RTL Generation & Refinement Agent', details: 'This agent translates <strong>detailed architectural specifications</strong> (from the Architecture Exploration Agents or high-level design descriptions, including C/C++/SystemC) directly into <strong>clean, synthesizable, and functionally correct RTL code (Verilog, VHDL)</strong>. It achieves this by employing <strong>advanced prompt engineering techniques</strong> with powerful, <strong>general-purpose LLMs</strong>, guiding their output using <strong>structured prompts, in-context learning (via RAG on our Knowledge Hub), and constraint-based generation</strong>. It can also intelligently orchestrate <strong>High-Level Synthesis (HLS) tools</strong> by applying <strong>optimal pragmas and directives</strong>. Beyond initial generation, it performs <strong>proactive local optimizations, code linting, and design rule checking</strong>. In the <strong>Test-Driven Development (TDD) loop</strong>, it iteratively <strong>refines and debugs</strong> its generated code based on <strong>precise feedback</strong> from verification agents, significantly reducing <strong>manual coding effort</strong> and potential <strong>human errors</strong> while adhering to <strong>company coding standards</strong>.' },
      { name: 'Power-Aware RTL Optimization Agent', details: 'Specializing in <strong>energy efficiency</strong>, this agent focuses on applying <strong>advanced power optimization techniques</strong> directly at the <strong>RTL level</strong>. It analyzes the design\'s <strong>power characteristics</strong>, identifies <strong>static and dynamic power hot-spots</strong>, and autonomously <strong>modifies RTL code</strong> to implement techniques like <strong>advanced clock gating, power gating, multi-voltage domain partitioning, and intelligent activity-based power reduction strategies</strong>. This proactive, AI-driven power optimization at the RTL stage is critical for achieving <strong>aggressive power targets</strong> in modern <strong>low-power and mobile applications</strong>, often guided by <strong>prompt-engineered rules</strong>.' },
    ],
  },
  {
    id: 'verificationAgents',
    icon: <ShieldCheck className="h-7 w-7 text-primary mr-3 flex-shrink-0" />,
    title: 'Verification Agents: AI-Driven Validation for Flawless Silicon',
    description: 'Addressing the largest bottleneck in modern design, these agents perform critical roles in ensuring design correctness, functional completeness, and reliability across various abstraction levels and methodologies.',
    agents: [
      { name: 'Test & Coverage Generation Agent', details: 'Focused on the proactive creation of <strong>robust verification environments</strong> and <strong>comprehensive test scenarios</strong>, this agent autonomously develops intricate <strong>test plans</strong>, analyzes complex design <strong>coverage goals</strong>, and generates highly effective <strong>test vectors</strong>. This includes <strong>constrained random, directed, and formal verification assertions</strong>, as well as orchestrating and populating complex <strong>UVM (Universal Verification Methodology) testbenches</strong>. Its intelligence lies in identifying <strong>critical scenarios, corner cases, and coverage holes</strong>, and then generating <strong>targeted stimuli</strong> to ensure <strong>thorough validation and coverage closure</strong> for both module and system-level functionality.' },
      { name: 'AutoReview Agent', details: 'This specialized agent acts as an <strong>automated, tireless code reviewer and static analysis expert</strong>. It leverages <strong>static analysis, sophisticated linting tools, and early-stage formal methods</strong> to meticulously check generated RTL for <strong>syntax errors, company-specific style guide violations, non-synthesizable constructs, and potential design pitfalls</strong> (e.g., clock/reset domain crossing issues). It provides <strong>precise, targeted, and actionable feedback</strong> for immediate automated correction, creating a <strong>fast feedback loop</strong> for RTL refinement.' },
      { name: 'AutoDV (Automatic Design Verification) Agent', details: 'This powerful agent is responsible for driving <strong>comprehensive functional correctness</strong> and achieving <strong>complete coverage</strong>. It intelligently orchestrates <strong>formal verification tools</strong> to <strong>mathematically prove design properties</strong> and identify <strong>deep, elusive bugs</strong> that simulation often misses, providing detailed <strong>counter-examples</strong>. Concurrently, it continuously analyzes <strong>simulation coverage reports (code, functional, assertion)</strong> and intelligently generates <strong>new, highly targeted test cases</strong> to close coverage holes, ensuring the design is <strong>rigorously exercised</strong> under all conditions.' },
      { name: 'Debug & Root Cause Analysis Agent', details: 'Addressing what is historically the <strong>largest bottleneck</strong> in modern design, this agent is a <strong>tireless, AI-powered problem-solver</strong>. It specializes in analyzing <strong>verification failures</strong> across all methodologies (simulation logs, waveform data, formal counter-examples). It sifts through vast amounts of design collateral to proactively <strong>identify, localize (down to specific RTL lines or design blocks), and even suggest precise fixes</strong> for functional, performance, and integrity bugs. This agent dramatically reduces <strong>manual debugging time</strong> and accelerates <strong>error resolution</strong> through intelligent diagnostics and feedback.' },
    ],
  },
  {
    id: 'dftAgents',
    icon: <ListChecks className="h-7 w-7 text-primary mr-3 flex-shrink-0" />,
    title: 'Design for Testability (DFT) Agents: Automated Test Infrastructure for Manufacturability',
    description: 'Crucial for ensuring efficient and comprehensive post-manufacturing testing, these agents intelligently automate the insertion and verification of test logic within the chip design, directly impacting yield and test costs.',
    agents: [
      { name: 'DFT Planning Agent', details: 'This agent analyzes the <strong>RTL or netlist</strong>, leverages <strong>historical data and fault models</strong> from the Knowledge Graph Agent, and intelligently determines the <strong>optimal DFT strategy</strong> (e.g., scan architecture, BIST insertion, JTAG integration) to achieve <strong>high fault coverage</strong> while minimizing <strong>area, power, and performance overhead</strong>. It generates a <strong>detailed, optimized DFT specification</strong>.' },
      { name: 'DFT Insertion Agent', details: 'This agent autonomously orchestrates <strong>industry-standard DFT tools</strong> to modify the design by inserting the <strong>planned test structures</strong> (e.g., scan chains, memory BIST logic, boundary scan). It ensures <strong>correct implementation of test modes</strong> and <strong>proper connectivity</strong>, adapting to design constraints.' },
      { name: 'ATPG (Automatic Test Pattern Generation) Agent', details: 'This agent generates <strong>highly efficient and comprehensive test patterns</strong> for various <strong>fault models</strong> (e.g., stuck-at, transition) to achieve the <strong>required fault coverage</strong>. It <strong>optimizes pattern count</strong> to minimize <strong>manufacturing test time and cost</strong>, automatically preparing patterns in <strong>industry-standard formats</strong>.' },
      { name: 'DFT Verification Agent', details: 'This agent rigorously verifies the <strong>correctness and effectiveness</strong> of the inserted <strong>DFT logic and generated test patterns</strong>. It performs <strong>fault simulations and test mode simulations</strong> to ensure <strong>high fault coverage, proper test functionality</strong>, and that test patterns can indeed <strong>detect target faults</strong>, feeding back any issues for <strong>automated correction</strong>.' },
    ],
  },
  {
    id: 'physicalDesignAgents',
    icon: <Cpu className="h-7 w-7 text-primary mr-3 flex-shrink-0" />,
    title: 'Physical Design & Optimization Agents: Mastering Complex EDA Workflows',
    description: 'Focused on transforming the logical design into a manufacturable physical layout, these agents are masters of spatial, electrical, and timing optimization. They are specifically engineered to interface with and intelligently control highly complex commercial EDA tools (like Synopsys Fusion Compiler, PrimeTime, Cadence Innovus, and Siemens Aprisa), autonomously driving iterative refinement by making crucial decisions and modifying design parameters, scripts, or rules.',
    agents: [
      { name: 'Synthesis Agent', details: 'This agent acts as an <strong>expert compiler</strong>, translating high-level RTL into a <strong>gate-level netlist</strong> optimized for specific process technologies (e.g., <strong>3nm, 5nm</strong>). Its intelligence lies in generating and dynamically modifying <strong>synthesis scripts, constraint files, and library selections</strong> to guide tools like <strong>Synopsys Fusion Compiler\'s synthesis engine</strong>. It performs iterative optimization to balance <strong>area, power, and initial timing goals</strong>, adapting to feedback from subsequent stages.' },
      { name: 'Physical Implementation Agent', details: 'This agent is the core of our <strong>chip\'s physical realization</strong>. Beyond merely running placement and routing tools, it intelligently orchestrates tools like <strong>Fusion Compiler (for integrated P&R) or Cadence Innovus</strong>. It assesses intermediate results to make critical decisions on <strong>floorplanning, power grid design, cell placement strategies, routing congestion relief, and clock tree synthesis</strong>. This agent autonomously modifies <strong>physical design scripts, directives, and rules</strong> through iterative loops, ensuring the most <strong>optimized silicon area, minimal power consumption, and efficient signal propagation</strong>.' },
      { name: 'Timing Closure Agent', details: 'Dedicated to achieving <strong>timing sign-off</strong>, this agent is deeply integrated with industry-standard <strong>static timing analysis (STA) tools</strong> such as <strong>Synopsys PrimeTime</strong>. It proactively analyzes complex <strong>timing paths</strong>, identifies violations, and, crucially, reasons about and proposes specific modifications to <strong>RTL, synthesis scripts, physical constraints, or even back-annotated netlist changes</strong>. This agent drives <strong>iterative timing closure</strong>, collaborating with the Synthesis and Physical Implementation Agents to resolve <strong>critical path delays</strong>, ensuring our designs meet <strong>aggressive frequency targets</strong>.' },
    ],
  },
  {
    id: 'analysisAgents',
    icon: <BarChart3 className="h-7 w-7 text-primary mr-3 flex-shrink-0" />,
    title: 'Analysis Agents:',
    description: 'Specialized Analysis Agents: Ensuring Compliance and Integrity. These agents provide continuous, automated validation and critical feedback for manufacturability and power integrity, acting as meticulous guardians of design quality. They are distinct from the active optimization roles of the above agents, focusing on robust verification against stringent rulesets.',
    agents: [
      { name: 'Power & Design Rule Check (DRC) Analysis Agent', details: 'This agent is the <strong>meticulous guardian</strong> of <strong>physical design quality</strong> and <strong>manufacturability</strong>. It <strong>autonomously interacts</strong> with <strong>leading physical verification tools</strong> (e.g., <strong>Calibre, Pegasus</strong>) to perform <strong>comprehensive Design Rule Checks (DRC)</strong>, <strong>Layout Versus Schematic (LVS) comparisons</strong>, and <strong>Electrical Rule Checks (ERC)</strong> against the <strong>latest Process Design Kits (PDKs)</strong>. Crucially, it goes beyond mere flagging; it <strong>intelligently analyzes violations</strong>, <strong>prioritizes critical issues</strong>, and provides <strong>actionable insights</strong> (e.g., suggesting specific layout modifications or rule adjustments) back to the <strong>Physical Implementation Agent</strong>. Simultaneously, it performs <strong>deep power analysis</strong>, identifying <strong>hotspots</strong>, <strong>power integrity issues</strong>, and <strong>optimizing for leakage</strong>, <strong>minimizing costly physical design iterations</strong> and ensuring <strong>first-pass silicon success</strong>.' },
    ],
  },
  {
    id: 'centralIntelligenceHub',
    icon: <Brain className="h-7 w-7 text-primary mr-3 flex-shrink-0" />,
    title: 'Central Intelligence Hub: The Strategic Orchestrator and Knowledge Backbone',
    description: 'At the heart of our Multi-Agent System, the Central Intelligence Hub serves as the strategic orchestrator, the system\'s collective brain, and its evolving memory. For a chip design company, this hub is paramount, as it ensures seamless coordination, centralized intelligence, and effective human oversight across the entire design lifecycle. It transforms fragmented processes into a cohesive, goal-driven workflow, directly impacting our ability to innovate and deliver cutting-edge silicon.',
    agents: [
      { name: 'Global Planning Agent', details: 'Acting as the system&apos;s <strong>&quot;chief architect&quot;</strong> and <strong>&quot;project manager,&quot;</strong> this agent elevates beyond mere task delegation. It dynamically interprets high-level <strong>business and design goals</strong> (e.g., &quot;achieve sub-10W power for a next-gen AI accelerator,&quot; or &quot;design a secure MCU for automotive applications meeting ISO 26262&quot;). It then intelligently decomposes these into a <strong>dynamic, optimized sequence</strong> of concrete sub-tasks, considering <strong>dependencies, resource availability, and predicted PPA outcomes</strong>. This agent continuously monitors the overall <strong>design progress</strong>, identifies potential <strong>bottlenecks or critical path deviations</strong>, and makes <strong>high-level, strategic decisions</strong> on agent <strong>task prioritization, resource allocation, and workflow adjustments</strong> to ensure <strong>holistic optimization</strong> and project adherence to <strong>aggressive timelines and targets</strong>. Its intelligence lies in <strong>foreseeing design convergence</strong>, <strong>managing complex trade-offs</strong>, and ensuring our products <strong>hit market windows</strong>.' },
      { name: 'Knowledge Graph Agent', details: 'This serves as the organization&apos;s <strong>central, dynamic, and version-controlled institutional memory</strong> and <strong>learning engine</strong>. It maintains a comprehensive, interconnected repository of all relevant design data – including our <strong>proprietary Intellectual Property (IP)</strong>, exhaustive <strong>historical design performance</strong>, granular <strong>process design kits (PDKs)</strong>, <strong>standard cell libraries, datasheets, technical manuals</strong>, and crucially, the <strong>complete, detailed data</strong> from every previous chip design project. This <strong>living knowledge graph</strong> is constantly updated and refined, turning our <strong>collective engineering expertise</strong> into a <strong>searchable, queryable, and highly intelligent asset</strong>. It enables <strong>robust design reuse</strong>, enforces <strong>best practices</strong> by providing <strong>real-time contextual awareness</strong>, and supports <strong>advanced predictive analytics</strong> for future designs, <strong>accelerating learning and reducing design risk</strong>.' },
      { name: 'Human-in-the-Loop Interface', details: 'This vital agent manages the critical <strong>symbiosis between AI automation and invaluable human expertise</strong>. It provides an <strong>intuitive and transparent &quot;cockpit&quot;</strong> for human designers and architects, facilitating <strong>clear communication</strong> for <strong>critical decision points</strong> that require <strong>human intuition, strategic insights, or ethical considerations</strong> (e.g., novel architecture choices, fundamental PPA trade-offs, or complex design constraint overrides). It presents <strong>progress, potential issues, and AI&apos;s proposed solutions</strong> in an <strong>interpretable format</strong>, allowing human designers to <strong>actively guide the design flow</strong>, provide <strong>real-time corrections</strong>, and <strong>inject creativity</strong>. This ensures that while AI automates the complex and tedious, <strong>human strategic vision remains central</strong> to our innovation process.' },
    ],
  }
];

const CoreComponentsSection: React.FC = () => (
  <>
    <div className="mt-12 mb-4">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
        2.2 Core Components: The Specialized AI Agent Network
      </h2>
    </div>
    <p>Our Multi-Agent System is architected as a network of distinct, specialized AI agents, each contributing its unique intelligence to the end-to-end design flow. These agents are broadly categorized by their function:</p>
    {coreComponentsData.map(category => (
      <AgentCategoryDisplay
        key={category.id}
        icon={category.icon}
        title={category.title}
        description={category.description}
        agents={category.agents}
      />
    ))}
  </>
);

// --- Component for Section 2.3: Supervisor-Worker Pattern ---
const SupervisorWorkerSection: React.FC = () => (
  <>
    <div className="mt-12 mb-4">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
        2.3 The Supervisor-Worker Pattern: Precision Orchestration for Semiconductor Design
      </h2>
    </div>
    <p>While various <strong>Multi-Agent System (MAS) architectures</strong> exist, the strategic choice of a particular model is paramount, especially within the <strong>high-stakes domain of semiconductor design</strong>.</p>
    <SectionTopic icon={<ShieldCheck className="h-7 w-7 text-primary mr-3 flex-shrink-0" />} title="Rationale for Supervisor-Worker: Mitigating Risk in Chip Design">
      <p>A decentralized <strong>&quot;Swarm&quot;</strong> or <strong>&quot;Network&quot;</strong> architecture, where any agent can communicate directly with any other, offers theoretical maximum flexibility. However, in practice, it introduces an <strong>unacceptable degree of complexity, unpredictability, and emergent behaviors</strong> that are exceedingly difficult to <strong>control, audit, and debug</strong>. Given the <strong>capital-intensive nature, stringent quality requirements, and zero-tolerance for errors</strong> inherent in chip manufacturing, such a level of risk is <strong>fundamentally incompatible with our objectives</strong>.</p>
      <p>Therefore, this blueprint mandates a <strong>Supervisor-Worker architecture</strong>. This model provides the critical balance of <strong>flexibility and stringent control</strong> necessary for <strong>robust, verifiable, and efficient chip design workflows</strong>. It directly addresses the need for <strong>predictability, traceability, and systematic error handling</strong> — core tenets of successful semiconductor product development.</p>
    </SectionTopic>
    <SectionTopic icon={<ClipboardList className="h-7 w-7 text-primary mr-3 flex-shrink-0" />} title="Architecture: The Intelligent Design Project Manager">
      <p>The system is architected around a central <strong>Supervisor agent</strong>, which acts as the <strong>intelligent orchestrator</strong> and <strong>&quot;project manager&quot;</strong> for complex design tasks. This agent receives <strong>high-level design goals</strong> – often derived from directives originating from the <strong>Global Planning Agent</strong> within the Central Intelligence Hub (as discussed in Section 2.2) or direct human input (via the <strong>Human-in-the-Loop Interface</strong>). Examples include <strong>&quot;Design a low-power RISC-V core for an edge IoT device,&quot; &quot;Achieve timing closure on the display subsystem within 72 hours,&quot;</strong> or <strong>&quot;Verify the security enclave against ISO 26262 standards.&quot;</strong></p>
      <p>Crucially, the Supervisor's role goes beyond mere task delegation. It intelligently:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong className="text-white font-semibold">Decomposes complex goals:</strong> Breaking them down into a precise sequence of concrete, manageable sub-tasks.</li>
        <li><strong className="text-white font-semibold">Selects optimal Worker agents:</strong> Leveraging the Knowledge Graph Agent and Context & State Management (from Section 2.4 and 2.5) to identify the most suitable specialized <strong>Worker agents</strong> (e.g., a <strong>Specification Agent</strong> for requirements formalization, an <strong>RTL Generation & Refinement Agent</strong> for code synthesis, a <strong>Physical Implementation Agent</strong> for layout, or a <strong>Timing Closure Agent</strong> for critical path analysis).</li>
        <li><strong className="text-white font-semibold">Manages dependencies and priorities:</strong> Understanding the intricate interdependencies between design stages and dynamically re-prioritizing tasks based on <strong>real-time feedback, PPA metrics, and convergence progress</strong>.</li>
        <li><strong className="text-white font-semibold">Monitors progress and performance:</strong> Continuously evaluating the output of Worker agents against <strong>defined metrics and constraints</strong>.</li>
        <li><strong className="text-white font-semibold">Facilitates iterative refinement:</strong> When a Worker identifies an issue or cannot meet a target, control returns to the Supervisor, which then intelligently reasons about next steps, potentially initiating a different Worker, modifying constraints, or escalating to <strong>human intervention</strong>.</li>
      </ul>
      <p>Control always returns to the Supervisor after a Worker completes its task or encounters a pre-defined condition. This <strong>closed-loop feedback mechanism</strong> ensures <strong>centralized monitoring, informed decision-making, and maintains a comprehensive audit trail</strong>, which is indispensable for debugging, post-mortem analysis, and adherence to industry compliance standards.</p>
    </SectionTopic>
    <SectionTopic icon={<GitFork className="h-7 w-7 text-primary mr-3 flex-shrink-0" />} title="Implementation Framework: LangGraph for Structured Workflows">
      <p>This sophisticated architecture will be implemented using <strong>LangGraph</strong>, an open-source library specifically designed for building <strong>stateful, multi-agent applications</strong> as <strong>directed acyclic graphs or state machines</strong>. Within LangGraph:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong className="text-white font-semibold">Agents as Nodes:</strong> Each specialized AI agent (e.g., <strong>Synthesis Agent, Verification Agent</strong>) functions as a <strong>&quot;node&quot;</strong> within the graph.</li>
        <li><strong className="text-white font-semibold">Supervisor as the Edge Controller:</strong> The Supervisor agent dictates the <strong>&quot;edges,&quot;</strong> dynamically directing the flow of execution from one node to the next. This control is informed by the <strong>current state of the project, intermediate results, PPA metrics, and predefined design rules</strong>.</li>
        <li><strong className="text-white font-semibold">Shared, Persistent State:</strong> Communication and the crucial context of the design are managed via a <strong>shared, persistent state object</strong>. This object continuously updates with <strong>design parameters, verification results, timing reports, power estimations, and decision logs</strong>. This continuous update allows for <strong>traceability at every step</strong>, providing a clear <strong>&quot;digital thread&quot;</strong> through the entire design process.</li>
      </ul>
      <p>This <strong>centralized control flow</strong> facilitated by LangGraph is not merely a technical convenience; it is a profound strategic advantage for a semiconductor company. It provides:</p>
      <ul className="list-disc pl-5 space-y-2">
          <li><strong>Unparalleled Transparency:</strong> A single, clear point of observation for the entire design workflow, allowing engineers to quickly understand the system's actions and rationale.</li>
          <li><strong>Robust Auditability:</strong> Every decision, every tool invocation, and every data transformation is logged and traceable, crucial for regulatory compliance, intellectual property protection, and post-silicon debugging.</li>
          <li><strong>Simplified MLOps & Governance:</strong> The structured, graph-based approach significantly simplifies the deployment, monitoring, and continuous improvement of AI agents, aligning perfectly with stringent MLOps requirements in a production environment.</li>
          <li><strong>Enhanced Debuggability:</strong> Unlike opaque monolithic systems, the modular, sequential nature of the Supervisor-Worker pattern makes it vastly easier to isolate and diagnose failures, dramatically reducing debug cycles—historically a major bottleneck in chip design.</li>
      </ul>
    </SectionTopic>
    <SectionTopic icon={<Inspect className="h-7 w-7 text-primary mr-3 flex-shrink-0" />} title="Observability & Evaluation: Leveraging LangSmith for AI Workflow Confidence">
      <p>To further reinforce the reliability and ensure continuous optimization of our AI-driven design processes, we will leverage <strong>LangSmith</strong> as our comprehensive <strong>observability, debugging, and evaluation platform</strong>. LangSmith, developed by the creators of LangGraph, provides deep visibility into the execution of our multi-agent workflows. It allows us to:</p>
      <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white font-semibold">Trace Agent Interactions:</strong> Gain granular insight into every step of an agent's reasoning, tool calls, and LLM interactions within the LangGraph workflow. This is crucial for understanding complex, non-deterministic behaviors that are common in AI agents, enabling rapid root cause analysis of design anomalies or unexpected PPA outcomes.</li>
          <li><strong className="text-white font-semibold">Debug and Iterate Rapidly:</strong> Pinpoint exactly where issues arise in a multi-agent sequence, whether it's an incorrect prompt, a faulty tool invocation, or an agent's reasoning error. This dramatically accelerates the debugging cycle, moving away from black-box issues to transparent, actionable insights.</li>
          <li><strong className="text-white font-semibold">Evaluate Performance Systematically:</strong> Capture production traces and use them to build comprehensive datasets for automated evaluation. We can define custom evaluators (e.g., "Does the generated RTL meet synthesizability guidelines?", "Is the proposed floorplan free of major congestion hot-spots?") and conduct continuous testing against evolving design requirements and process nodes. This ensures our AI agents consistently deliver high-quality outputs.</li>
          <li><strong className="text-white font-semibold">Monitor System Health & Efficiency:</strong> Track key metrics such as latency, token usage, cost, and agent success rates in real-time. This provides the MLOps team with live dashboards and alerts, proactively identifying potential bottlenecks or performance degradation, vital for maintaining an efficient and cost-effective design flow.</li>
          <li><strong className="text-white font-semibold">Facilitate Collaboration:</strong> Provide a shared platform for engineers, AI developers, and verification teams to inspect agent runs, provide human feedback, and collaborate on improving prompts and agent behaviors, fostering a more agile development environment.</li>
      </ul>
      <p>By adopting the Supervisor-Worker pattern implemented with LangGraph and complemented by LangSmith, we ensure that our AI-driven design processes are not only intelligent and automated but also <strong>predictable, auditable, resilient, and continuously optimized</strong>, providing the highest degree of confidence in the integrity and success of our silicon products.</p>
    </SectionTopic>
    <div className="text-center mt-8 mb-4">
      <Link href="/architectural-blueprint/supervisor-worker-details" passHref>
        <Button variant="outline" size="lg" className="bg-transparent text-yellow-400 border-yellow-500 hover:bg-yellow-500/20 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/40">
          Deep Dive into the Supervisor-Worker Pattern &rarr;
        </Button>
      </Link>
    </div>
  </>
);

// --- Component for Section 2.4: MCP Server Overview ---
const MCPServerOverviewSection: React.FC = () => (
  <>
    <div className="mt-12 mb-4">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
        2.4 The MCP Server: A Central Nervous System for Tools, Knowledge, and State
      </h2>
    </div>
    <p>The Supervisor and Worker agents require a robust infrastructure to support their complex, iterative operations. The cornerstone of this infrastructure is the <strong>MCP (Multi-Agent Collaboration Protocol) Server</strong>, a stateful, intelligent hub that serves as the <strong>brain, long-term memory, and dynamic workspace</strong> for the entire multi-agent system. Its architecture is inspired by services like <strong>LangConnect</strong>, which provide managed APIs for advanced RAG applications. The MCP Server will perform three critical and interconnected functions:</p>
    <SectionTopic icon={<Layers3 className="h-7 w-7 text-primary mr-3 flex-shrink-0" />} title="Tool Abstraction Layer:">
      <p>It provides a <strong>standardized, version-controlled API</strong> and integrated wrappers for agents to seamlessly access and execute all necessary design tools. This includes commercial EDA software (e.g., <strong>Synopsys DSO.ai, Cadence Cerebrus, JasperGold</strong>) as well as <strong>custom-built Python scripts</strong> and internal utilities, abstracting away the complexity of individual tool interfaces and normalizing their outputs.</p>
    </SectionTopic>
    <SectionTopic icon={<DatabaseZap className="h-7 w-7 text-primary mr-3 flex-shrink-0" />} title="Knowledge Hub (RAG):">
      <p>The server hosts and manages a comprehensive, <strong>semantically searchable, version-controlled vector database</strong> that acts as the organization's <strong>deep institutional memory</strong>. This knowledge base is meticulously populated with all relevant public and proprietary data: <strong>process design kits (PDKs), standard cell libraries, datasheets, technical manuals, internal design guidelines</strong>, and, critically, the <strong>complete, detailed historical data</strong> from every previous chip design project. This transforms our entire design history into a grounding, queryable asset for <strong>factual accuracy</strong>.</p>
    </SectionTopic>
    <SectionTopic icon={<MessagesSquare className="h-7 w-7 text-primary mr-3 flex-shrink-0" />} title="Context & State Management (CAG):">
      <p>The server dynamically manages the <strong>short-term, evolving context</strong> and <strong>persistent state</strong> of ongoing design tasks. This includes the <strong>iterative conversational history</strong> between agents, the <strong>real-time results of recent actions</strong> (e.g., PPA metrics, verification logs), and the current project's <strong>dynamic design state</strong>. It leverages efficient <strong>caching mechanisms</strong> to store and quickly retrieve frequently accessed information, significantly reducing <strong>latency and computational overhead</strong> for iterative design loops.</p>
    </SectionTopic>
    <p>Over time, this MCP Server will evolve into the company's <strong>most valuable piece of intellectual property</strong>. It is the <strong>digital twin of our collective engineering expertise</strong>, a continuously <strong>learning system</strong> that encapsulates our <strong>unique design methodologies</strong> and grows demonstrably <strong>more powerful and efficient</strong> with every chip we produce.</p>
    <div className="my-8"> {/* Added margin for spacing around diagram card */}
        <div className="glassmorphism rounded-xl p-6 border-2 border-slate-700 max-w-2xl mx-auto">
            <OriginalArchitectureDiagram />
        </div>
    </div>
    <div className="text-center mt-8 mb-4 flex flex-col sm:flex-row justify-center items-center gap-4">
      <Link href="/architectural-blueprint/mcp-server-details" passHref>
        <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent text-yellow-400 border-yellow-500 hover:bg-yellow-500/20 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/40">
          Deep Dive into the MCP Server &rarr;
        </Button>
      </Link>
      <Link href="/architectural-blueprint/rag-details" passHref>
        <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent text-teal-400 border-teal-500 hover:bg-teal-500/20 hover:text-teal-300 hover:border-teal-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/40">
          Deep Dive into RAG &rarr;
        </Button>
      </Link>
    </div>
  </>
);

// --- Component for Section 2.5: Hybrid RAG/CAG Architecture ---
const HybridRAGCAGSection: React.FC = () => (
  <>
    <div className="mt-12 mb-4">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
        2.5 Grounding Agents in Reality: A Hybrid RAG/CAG Architecture for Contextual Intelligence
      </h2>
    </div>
    <p>To perform complex reasoning, agents need access to two types of information: <strong>static, factual knowledge</strong> and <strong>dynamic, task-specific context</strong>. The MCP Server is designed to provide both through a <strong>hybrid architecture</strong> that seamlessly blends <strong>Retrieval-Augmented Generation (RAG)</strong> and <strong>Context-Augmented Generation (CAG)</strong>.</p>
    <SectionTopic icon={<FileSearch2 className="h-7 w-7 text-primary mr-3 flex-shrink-0" />} title="RAG for Factual Grounding:">
      <p>Agents will use <strong>RAG</strong> to query the MCP Server's knowledge hub for <strong>external, objective information</strong>. For example, a Verification Agent might ask, &quot;What are the specific timing constraints for the PCIe Gen 6 interface on the 3nm process node?&quot; The RAG system retrieves the relevant section from the PDK documentation and provides it to the agent. This process <strong>grounds the agent's actions in verified facts</strong>, preventing <strong>factual errors or &quot;hallucinations&quot;</strong> and ensuring designs comply with the <strong>latest specifications</strong>.</p>
    </SectionTopic>
    <SectionTopic icon={<BrainCog className="h-7 w-7 text-primary mr-3 flex-shrink-0" />} title="CAG for Conversational Context:">
      <p>Agents will use <strong>CAG</strong> to maintain awareness of the <strong>current, ongoing task</strong>. This provides them with a <strong>&quot;working memory.&quot;</strong> For example, a PPA Optimization Agent might reason, &quot;Given that my last three attempts to fix the timing violation on this path by increasing drive strength have failed, what alternative strategies are available in the standard cell library?&quot; The CAG system provides the <strong>history of its recent actions</strong>, enabling it to <strong>avoid repeating mistakes</strong> and engage in <strong>more sophisticated, iterative problem-solving</strong>.</p>
    </SectionTopic>
    <p>This <strong>hybrid RAG/CAG system</strong> is the key to unlocking <strong>true contextual intelligence</strong>. The Supervisor agent can fluidly switch between these modes, for instance, using RAG to fetch the initial design specification and then using CAG to track the progress of its worker agents against that specification. This combination of <strong>long-term knowledge and short-term memory</strong> is what will allow our agentic system to tackle the <strong>complex, multi-step challenges</strong> of modern chip design.</p>
  </>
);


// --- Main Page Component ---
export default function ArchitecturalBlueprintPage() {
  return (
    <SubPageLayout>
      <article className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6">
        {/* Page Title and Intro */}
        <div className="flex flex-col items-center text-center mb-12">
          <DraftingCompass className="h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-2">
            Section 2: Architectural Blueprint
          </h1>
          <p className="text-2xl text-slate-400">A Multi-Agent System for End-to-End Design</p>
        </div>
        <p>To truly realize the strategic vision of <strong>full-stack AI integration</strong> and unlock the transformative capabilities detailed in Section 1, a <strong>revolutionary technical architecture</strong> is not merely beneficial, but an <strong>absolute imperative</strong>. The sheer complexity, highly multifaceted nature, and intricate domain-specific challenges of <strong>modern semiconductor design</strong> render any <strong>monolithic AI model</strong> inherently insufficient. Such a singular approach would inevitably falter under the weight of <strong>diverse data types</strong>, <strong>specialized knowledge requirements</strong>, and <strong>myriad optimization goals</strong>.</p>
        <p>Therefore, the core of our solution is a sophisticated <strong>Multi-Agent System (MAS)</strong>. This is not simply a collection of AI tools, but a <strong>collaborative, intelligent ecosystem</strong> of specialized, <strong>autonomous AI agents</strong>, meticulously orchestrated by a <strong>central intelligence hub</strong>. This section will unveil the <strong>detailed technical blueprint</strong> for this transformative system, outlining its <strong>core components</strong>, the <strong>intelligent communication protocols</strong> that enable seamless collaboration, and the <strong>strategic rationale</strong> underpinning this powerful, <strong>distributed, yet harmonized</strong>, design approach.</p>

        <FoundationsSection />
        <CoreComponentsSection />
        <SupervisorWorkerSection />
        <MCPServerOverviewSection />
        <HybridRAGCAGSection />

      </article>
    </SubPageLayout>
  );
}
