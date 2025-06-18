// src/app/ai-pipeline/page.tsx
"use client";
import React from 'react';
import SubPageLayout from '@/components/chimera/SubPageLayout';
import {
  Cpu,
  AlertTriangle,
  Zap,
  UserRoundSearch,
  FileText,
  Network,
  Focus,
  FileCode,
  UserCog,
  BrainCircuit,
  Layers3,
  Settings2,
  ClipboardList,
  PlayCircle,
  Bug,
  Lightbulb,
  Repeat2,
  ListChecks,
  ShieldCheck,
  SearchCode,
  BarChart3,
  SlidersHorizontal,
  Cog,
  Target,
  LockKeyhole,
  ScanLine,
  ShieldAlert,
  FileSearch2,
  MessageCircleQuestion,
  GitCommitVertical,
  Gauge,
  BatteryCharging,
  Wrench,
  Award,
  FastForward,
  Eye,
  Activity,
  ScanSearch,
  CheckCircle2,
  RefreshCcw,
  ListOrdered,
  ArrowRightCircle,
  Shuffle, 
  Keyboard, 
  Filter, 
  Crosshair, 
  Binary, 
  Puzzle, 
  Scale, 
  BookOpenCheck, 
  BugPlay, 
  TestTube2, 
  ScrollText, 
  LineChart, 
  MapPin, 
  RotateCcw,
  Inspect,
  UsersRound,
  DatabaseZap,
  Workflow
} from 'lucide-react';

// Helper Component for Primary Workflow Item Cards
interface PrimaryWorkflowItemCardProps {
  icon: React.ReactElement;
  title: string;
  description?: string; // For simple HTML string descriptions
  children?: React.ReactNode; // For more complex content like nested cards
}

const PrimaryWorkflowItemCard: React.FC<PrimaryWorkflowItemCardProps> = ({ icon, title, description, children }) => (
  <li className="flex items-start p-3 border border-slate-700 rounded-lg bg-slate-800/30 w-full">
    {React.cloneElement(icon, { className: "h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" })}
    <div>
      <strong className="text-primary block mb-1">{title}</strong>
      {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
      {children}
    </div>
  </li>
);

// Helper Component for Nested Detail Cards (Sub-Sub-Points)
interface NestedDetailCardProps {
  icon: React.ReactElement;
  title?: string;
  description: string; // Assumes description is an HTML string
}

const NestedDetailCard: React.FC<NestedDetailCardProps> = ({ icon, title, description }) => (
  <div className="flex items-start p-3 border border-slate-700 rounded-lg bg-slate-800/30">
    {React.cloneElement(icon, { className: "h-5 w-5 text-sky-400 mr-3 mt-0.5 flex-shrink-0" })}
    <div>
      {title && <strong className="text-sky-300 block mb-1">{title}</strong>}
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </div>
);

// --- Stage 3.1: System Specification & Architecture ---
const Stage_3_1_SpecAndArch: React.FC = () => {
  const workflowItems = [
    { id: 'custReq', icon: <UserRoundSearch />, title: 'The Customer Requirements Translation Agent', description: 'Acts as a <strong>digital envoy</strong>, engaging directly with our product managers and system architects. Leveraging the <strong>Knowledge Hub (RAG)</strong> in the MCP Server, it rapidly retrieves and analyzes data on similar past projects, market trends, and available IP to identify potential ambiguities, technical constraints, and emerging opportunities. Using the <strong>Context & State Management (CAG)</strong>, it builds a <strong>dynamic conversational bridge</strong>, iteratively refining high-level customer needs into a preliminary, yet actionable, technical specification. This significantly accelerates the proposal generation process, arming our sales team with a decisive competitive edge.' },
    { id: 'specAgent', icon: <FileText />, title: 'The Specification Agent', description: 'Acts as a <strong>meticulous architect</strong>, formalizing these high-level requirements into a precise, unambiguous, and machine-readable design specification. It employs <strong>formal verification techniques</strong> and <strong>semantic analysis</strong> to ensure unwavering consistency, completeness, and strict adherence to our established company design guidelines and critical industry standards (e.g., specific interface protocols, security certifications). This upfront rigor acts as a <strong>shield</strong>, paramount for mitigating costly ambiguities and misinterpretations that would otherwise ripple destructively through later design stages.' },
    { id: 'microArchOpt', icon: <Cpu />, title: 'The Microarchitecture Optimization Agent', description: 'Acts as a key part of our architecture exploration strategy, is supercharged by sophisticated <strong>reinforcement learning</strong> and <strong>multi-objective optimization algorithms</strong>. It autonomously <strong>blazes paths</strong> through thousands of high-level architectural variants, exploring diverse CPU core pipeline depths, intricate cache hierarchies, novel memory access patterns, and innovative custom accelerator configurations with tireless precision.' },
    { id: 'sysInterconnect', icon: <Network />, title: 'System-Level Interconnect Agent', description: 'Masterfully designs and optimizes the chip&apos;s internal communication fabric, sculpting efficient <strong>Network-on-Chip (NoC) topologies</strong> and high-bandwidth memory interfaces. Both agents leverage advanced AI models capable of rapidly and accurately estimating <strong>PPA (Power, Performance, Area)</strong> from these high-level descriptions, often achieving up to a <strong class="gradient-text">10x improvement in exploration speed</strong> compared to traditional methods that demand time-consuming manual estimations or premature synthesis runs.' },
    { id: 'supervisor', icon: <Focus />, title: 'Supervisor agent', description: 'Acts as the <strong>grand conductor</strong>, intelligently orchestrates this entire exploration process. It continuously monitors the PPA estimations, manages the trade-offs, and ultimately presents the top 3-5 candidate architectures to our human architects and product leadership. These candidates are accompanied by comprehensive, AI-generated trade-off analyses, enabling informed, strategic decisions that directly impact the chip&apos;s market competitiveness and alignment with business objectives.' },
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.1 Stage 1: System Specification &amp; Architecture
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>The critical initial phase of chip design is often hampered by <strong className="text-yellow-500">ambiguous</strong>, high-level customer requirements expressed in natural language. Compounding this, designers face an <strong className="text-yellow-500">impossibly vast, multi-dimensional labyrinth</strong> of potential high-level architectures. Traditional manual exploration through this maze is painstakingly slow, inherently sub-optimal, and all too often prone to overlooking truly innovative, game-changing solutions.</p>
      <div className="mt-8 mb-4 flex items-center">
        <Zap className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Agentic Workflow: AI-Driven Strategic Design &amp; Holistic Architecture Exploration</h3>
      </div>
      <p>Our workflow begins with <strong>precision and foresight</strong>, a symphony of specialized AI acting in concert:</p>
      <ul className="list-none pl-0 space-y-6 !my-6">
        {workflowItems.map(item => (
          <PrimaryWorkflowItemCard key={item.id} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </ul>
    </div>
  );
};

// --- Stage 3.2: Intelligent RTL Generation ---
const Stage_3_2_RTLGeneration: React.FC = () => {
  const workflowItems = [
    {
      id: 'agentRole',
      icon: <UserCog />,
      title: 'Agent Role:',
      description: 'Building directly upon the detailed architectural specifications provided by the <strong>Architecture Exploration Agents</strong>, the <strong>RTL Generation & Refinement Agent</strong>, here acting as our primary <strong>Verilog/VHDL Coder Agent</strong>, initiates the RTL creation.'
    },
    {
      id: 'intelligentSynthesis',
      icon: <BrainCircuit />,
      title: 'Intelligent Synthesis & Prompt Engineering:',
      description: 'This agent intelligently synthesizes the architectural intent directly into initial RTL, making informed decisions on crucial aspects like <strong>data path structures, control logic, state machine implementations, and module interfaces</strong>. It achieves this by employing advanced <strong>prompt engineering techniques</strong> with powerful, general-purpose LLMs. This involves:',
      nestedDetails: [
        { id: 'structuredPrompts', icon: <ListOrdered />, title: 'Structured Prompts:', description: 'Carefully crafted prompts that provide the LLM with clear context, specific design requirements, desired RTL structure, and explicit instructions on coding style and synthesizability rules.' },
        { id: 'inContextLearning', icon: <Layers3 />, title: 'In-context Learning (Few-shot Prompting):', description: 'Supplying relevant examples of high-quality, functionally correct RTL code and corresponding natural language descriptions from our <strong>Knowledge Hub (RAG)</strong> in the MCP Server. This guides the LLM towards generating similar, high-quality output without requiring model fine-tuning.' },
        { id: 'constraintBasedGen', icon: <ShieldCheck />, title: 'Constraint-Based Generation:', description: 'Imposing specific output constraints (e.g., format, keyword usage, module structure) to ensure the generated code adheres strictly to HDL syntax and hardware semantics.' },
      ]
    },
    {
      id: 'hlsOrchestration',
      icon: <Layers3 />,
      title: 'High-Level Synthesis (HLS) Orchestration:',
      description: 'For modules specified at a higher level (e.g., in C/C++/SystemC), the <strong>Verilog/VHDL Coder Agent</strong> orchestrates <strong>High-Level Synthesis (HLS) tools</strong> (via the MCP Server&apos;s Tool Abstraction Layer). It intelligently guides the HLS process by applying optimal pragmas and directives, ensuring the generated RTL is highly optimized for PPA and efficient resource utilization, bridging the gap between software-oriented descriptions and hardware implementation.'
    }
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.2 Stage 2: Intelligent RTL Generation from Architecture
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>Translating complex architectural blueprints into high-quality, synthesizable <strong>Register-Transfer Level (RTL)</strong> code is a notoriously time-consuming and error-prone process. Modern chip designs demand both functional correctness and optimal <strong>Power, Performance, and Area (PPA)</strong> at the RTL level. While generative AI offers promise for <strong>Hardware Description Language (HDL)</strong> creation, ensuring the reliability, synthesizability, and adherence to design standards of automatically generated code remains a significant hurdle. Furthermore, the efficient integration of <strong>High-Level Synthesis (HLS)</strong> from higher-level design abstractions is crucial for productivity.</p>
      <div className="mt-8 mb-4 flex items-center">
        <FileCode className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Agentic Workflow: Leveraging Prompt Engineering &amp; RAG for High-Quality RTL and HLS Integration</h3>
      </div>
      <ul className="list-none pl-0 space-y-6 !my-6">
        {workflowItems.map(item => (
          <PrimaryWorkflowItemCard key={item.id} icon={item.icon} title={item.title} description={item.nestedDetails ? undefined : item.description}>
            {item.nestedDetails && (
              <div className="mt-2 space-y-3">
                <div dangerouslySetInnerHTML={{ __html: item.description || '' }} />
                {item.nestedDetails.map(nested => (
                  <NestedDetailCard key={nested.id} icon={nested.icon} title={nested.title} description={nested.description} />
                ))}
              </div>
            )}
          </PrimaryWorkflowItemCard>
        ))}
      </ul>
    </div>
  );
};

// --- Stage 3.3: Proactive RTL Optimization & Testbench Setup ---
const Stage_3_3_RTLOptAndTestSetup: React.FC = () => {
  const workflowItems = [
    { id: 'initialOpt', icon: <Settings2 />, title: 'Initial Optimization & Pre-Synthesis:', description: 'The <strong>Verilog/VHDL Coder Agent</strong> performs initial local optimizations, code linting, and <strong>design rule checking (DRC)</strong> before extensive simulation. This includes applying <strong>power-aware techniques</strong> (e.g., advanced clock gating opportunities) and structural optimizations at the RTL level, often guided by prompt-engineered rules. It also conducts quick <strong>pre-synthesis analysis</strong> to ensure the generated RTL is robust for downstream synthesis tools.' },
    { id: 'powerAwareOpt', icon: <Zap />, title: 'Power-Aware Optimization:', description: 'The <strong>Power-Aware RTL Optimization Agent</strong> (also an RTL Generation Agent from Section 2.2) collaborates here. It performs a deeper analysis of the design&apos;s power characteristics and autonomously suggests or implements modifications to reduce <strong>static and dynamic power consumption</strong> directly at the RTL level, using further prompt engineering to guide LLMs in identifying optimization opportunities. This early-stage optimization is critical for achieving aggressive power targets in modern low-power and mobile applications.' },
    { id: 'testbenchGen', icon: <ClipboardList />, title: 'Testbench Generation:', description: 'Simultaneously, the <strong>Test & Coverage Generation Agent</strong> (a Verification Agent from Section 2.2) takes the formalized design specification and automatically generates a comprehensive functional <strong>testbench</strong> for the module. This includes creating robust <strong>test cases, stimulus patterns, monitors, and SystemVerilog Assertions (SVA)</strong> that precisely define the expected behavior and <strong>&quot;correctness&quot;</strong> of the RTL. This crucial <strong>&quot;test-first&quot; approach</strong> establishes a clear, unambiguous, and machine-verifiable definition of desired functionality, grounding the AI-generated code in verifiable reality. The <strong>Supervisor agent</strong> then presents these autonomously generated testbenches and assertions to the human engineer for final review and confirmation, ensuring alignment with the original design intent and comprehensive test coverage goals.' },
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.3 Stage 3: Proactive RTL Optimization &amp; Testbench Setup
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>Before embarking on extensive simulation and physical design, ensuring the initial quality, synthesizability, and testability of the generated RTL is paramount. Manual linting, basic optimization, and testbench creation are time-consuming and often miss subtle issues that can lead to costly delays downstream.</p>
      <div className="mt-8 mb-4 flex items-center">
        <FileCode className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Agentic Workflow: Automated RTL Quality Assurance and Comprehensive Test Environment Preparation</h3>
      </div>
      <p>Immediately following initial RTL generation, our agents perform vital proactive optimization and quality checks to ensure robust, high-quality RTL, and prepare a comprehensive test environment before functional verification begins:</p>
      <ul className="list-none pl-0 space-y-6 !my-6">
        {workflowItems.map(item => (
          <PrimaryWorkflowItemCard key={item.id} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </ul>
    </div>
  );
};

// --- Stage 3.4: TDD for Iterative RTL Refinement ---
const Stage_3_4_TDDRTLRefinement: React.FC = () => {
  const workflowItems = [
    { id: 'testExec', icon: <PlayCircle />, title: 'Test Execution:', description: 'The <strong>Supervisor</strong> invokes our advanced simulation tools (via the MCP Server&apos;s Tool Abstraction Layer) to execute the autonomously generated tests against the newly optimized RTL.' },
    { id: 'failAnalysis', icon: <Bug />, title: 'Failure Analysis:', description: 'The <strong>Debug & Root Cause Analysis Agent</strong> (a dedicated Verification Agent from Section 2.2) meticulously analyzes any simulation failures or coverage gaps. It sifts through vast amounts of simulation logs, waveform data, and design collateral to pinpoint the exact functional bug or performance bottleneck with unparalleled speed.' },
    { id: 'targetedFeedback', icon: <Lightbulb />, title: 'Targeted Feedback:', description: 'The <strong>Debug & Root Cause Analysis Agent</strong> then provides precise, targeted, and actionable feedback directly to the <strong>Verilog/VHDL Coder Agent</strong> (our RTL Generation & Refinement Agent), often suggesting specific code modifications or architectural adjustments. This feedback is critically important and will often be translated into specific instructions or new context within the prompt for the <strong>Verilog/VHDL Coder Agent&apos;s</strong> next iteration.' },
    { id: 'autoRefine', icon: <Repeat2 />, title: 'Automated Refinement:', description: 'The <strong>Verilog/VHDL Coder Agent</strong> intelligently leverages this precise, prompt-driven feedback to refactor, debug, and further optimize its generated code, proposing new RTL iterations.' },
    { id: 'iterativeLoop', icon: <RefreshCcw />, title: 'Iterative Loop:', description: 'This <strong>TDD loop</strong> continues autonomously until all tests pass with <strong>100% functional coverage</strong>, and the RTL meets its initial <strong>PPA (Power, Performance, Area) estimates</strong>. This robust, closed-loop process directly mitigates the primary weakness of using LLMs for HDL generation by grounding the creative, probabilistic nature of the AI in the deterministic, verifiable world of functional tests, dramatically accelerating the path to high-quality, bug-free RTL.' },
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.4 Stage 4: Test-Driven Development (TDD) for Iterative RTL Refinement
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>Even with proactive checks, the iterative process of debugging and refining RTL to meet functional correctness and performance targets is a major bottleneck. Manually identifying, diagnosing, and fixing bugs based on simulation failures is labor-intensive, time-consuming, and susceptible to human oversight, leading to extended design cycles.</p>
      <div className="mt-8 mb-4 flex items-center">
        <RefreshCcw className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Agentic Workflow: Automated Debugging and Self-Correction for Rapid RTL Convergence</h3>
      </div>
      <p>Once the testbench and initial RTL are prepared, our system enters an intelligent, automated <strong>Test-Driven Development (TDD) loop</strong>, driven by the <strong>Supervisor agent&apos;s</strong> orchestration, to rapidly achieve functional correctness and PPA targets:</p>
      <ul className="list-none pl-0 space-y-6 !my-6">
        {workflowItems.map(item => (
          <PrimaryWorkflowItemCard key={item.id} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </ul>
    </div>
  );
};

// --- Stage 3.5: Comprehensive Functional Verification & Coverage Closure ---
const Stage_3_5_FuncVerifyCoverage: React.FC = () => {
  const workflowItems = [
    {
      id: 'sophisticatedTestGen',
      icon: <ClipboardList />,
      title: 'Sophisticated Test & Stimulus Generation:',
      description: 'The <strong>Test & Coverage Generation Agent</strong> is central to this stage. Beyond generating initial module-level tests, it now dynamically creates <strong>complex, system-level test cases, intelligent stimulus patterns, and comprehensive verification environments</strong>.',
      nestedDetails: [
        { id: 'uvmOrchestration', icon: <Workflow />, title: 'UVM Orchestration:', description: 'For highly complex IPs, it orchestrates and populates <strong>Universal Verification Methodology (UVM) testbenches</strong>, intelligently configuring sequences, transactors, and scoreboards. It can parse protocol specifications from the <strong>Knowledge Hub (RAG)</strong> and generate UVM components tailored to specific interface standards (e.g., PCIe, DDR, USB), significantly reducing manual UVM development time.' },
        { id: 'constrainedRandomGen', icon: <Shuffle />, title: 'Constrained Random Generation:', description: 'It employs <strong>constrained random test generation</strong>, guided by a deep understanding of the design&apos;s architecture and potential stress points, to explore a vast array of functional scenarios far beyond what human engineers could manually conceive.' },
        { id: 'promptDrivenTestCode', icon: <Keyboard />, title: 'Prompt-Driven Test Code:', description: 'Using <strong>prompt engineering</strong>, the agent can translate high-level test plans and coverage goals into executable test code and assertions.' },
      ]
    },
    {
      id: 'autoCoverageAnalysis',
      icon: <Target />,
      title: 'Automated Coverage Analysis and Closure:',
      description: 'The <strong>AutoDV (Automatic Design Verification) Agent</strong> plays a critical role in driving coverage closure. It continuously analyzes various forms of <strong>coverage metrics</strong> (code coverage, functional coverage, assertion coverage, toggle coverage) from extensive simulation runs.',
      nestedDetails: [
        { id: 'coverageHoleID', icon: <Filter />, title: 'Coverage Hole Identification:', description: 'Upon identifying <strong>coverage holes</strong> (untested design areas), the AutoDV Agent intelligently reasons about the root cause of the missing coverage.' },
        { id: 'targetedTestGen', icon: <Crosshair />, title: 'Targeted Test Generation:', description: 'It then collaborates with the <strong>Test & Coverage Generation Agent</strong> to formulate and generate new, <strong>highly targeted test cases</strong> specifically designed to hit these uncovered areas, creating a powerful, <strong>closed-loop system</strong> for continuous coverage improvement. This iterative process drastically reduces the manual effort typically required to reach <strong>100% functional and code coverage targets</strong>.' },
      ]
    },
    { id: 'simOrchestration', icon: <PlayCircle />, title: 'Simulation Orchestration and Optimization:', description: 'The <strong>Supervisor agent</strong> oversees the massive simulation campaigns required at this stage. It intelligently allocates compute resources for <strong>parallel simulation runs</strong>, manages simulation regressions, and monitors key metrics. It prioritizes the execution of tests that target <strong>critical paths or known problematic areas</strong>, ensuring efficient use of verification cycles.' },
  ];
  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.5 Stage 5: Comprehensive Functional Verification &amp; Coverage Closure
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>While the <strong>TDD loop</strong> in Stage 4 ensures that individual RTL modules pass their initial set of generated tests, achieving <strong>comprehensive functional verification</strong> across complex, integrated chip designs remains the <strong>single largest bottleneck</strong> in modern semiconductor development. Ensuring <strong>full test coverage</strong> and exercising all <strong>corner cases</strong> for complex IPs, especially those involving intricate protocols and parallel operations, is a monumental and often incomplete task with traditional methods like <strong>UVM</strong>, leading to missed bugs and costly silicon respins.</p>
      <div className="mt-8 mb-4 flex items-center">
        <ListChecks className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Agentic Workflow: Intelligent Test Generation, UVM Harnessing, and Automated Coverage Closure</h3>
      </div>
      <p>Building directly from the robust RTL delivered by the TDD loop, this stage focuses on achieving <strong>exhaustive functional verification</strong> and <strong>complete coverage closure</strong> through intelligent agent orchestration:</p>
      <ul className="list-none pl-0 space-y-6 !my-6">
        {workflowItems.map(item => (
          <PrimaryWorkflowItemCard key={item.id} icon={item.icon} title={item.title} description={item.nestedDetails ? undefined : item.description}>
            {item.nestedDetails && (
              <div className="mt-2 space-y-3">
                <div dangerouslySetInnerHTML={{ __html: item.description || '' }} />
                {item.nestedDetails.map(nested => (
                  <NestedDetailCard key={nested.id} icon={nested.icon} title={nested.title} description={nested.description} />
                ))}
              </div>
            )}
          </PrimaryWorkflowItemCard>
        ))}
      </ul>
      <p>This comprehensive, AI-driven approach to functional verification ensures that our RTL designs are rigorously exercised, catching a vast majority of functional bugs through exhaustive simulation and intelligent test generation, laying a solid foundation for subsequent physical design.</p>
    </div>
  );
};

// --- Stage 3.6: Formal Verification & Static Analysis ---
const Stage_3_6_FormalStaticAnalysis: React.FC = () => {
  const workflowItems = [
    {
      id: 'autoFormalProps',
      icon: <ShieldCheck />,
      title: 'Automated Formal Property Generation & Proofs:',
      description: 'The <strong>AutoDV (Automatic Design Verification) Agent</strong> is the cornerstone of this stage. Leveraging the design specification, RTL, and the <strong>Knowledge Hub (RAG)</strong> for common property patterns, it intelligently generates and applies <strong>formal verification properties</strong>.',
      nestedDetails: [
        { id: 'formalToolOrch', icon: <Binary />, title: 'Formal Tool Orchestration:', description: 'It orchestrates <strong>formal verification tools</strong> (e.g., Synopsys JasperGold, Cadence Jasper, Siemens Questa Formal) to <strong>mathematically prove</strong> that the design adheres to its specified behavior under all possible input conditions, identifying unreachable states, deadlocks, and protocol violations.' },
        { id: 'propDecompDebug', icon: <Puzzle />, title: 'Property Decomposition & Debug:', description: 'For complex properties, it can intelligently decompose them or generate smaller, more tractable proofs. In cases where properties cannot be proven, the agent provides precise <strong>counter-example waveforms and traces</strong> that are critical for debugging.' },
      ]
    },
    {
      id: 'exhaustiveStaticAnalysis',
      icon: <ScanLine />,
      title: 'Exhaustive Static Analysis & Linting:',
      description: 'The <strong>AutoReview Agent</strong> continues its role from earlier stages, but now performs an <strong>exhaustive, chip-level static analysis</strong>.',
      nestedDetails: [
        { id: 'complexRuleCheck', icon: <Scale />, title: 'Complex Rule Checking:', description: 'It rigorously checks for complex design rule violations beyond simple syntax, including potential <strong>clock domain crossing (CDC) issues, reset domain crossing (RDC) issues, coding style inconsistencies, and non-synthesizable constructs</strong> that could lead to synthesis tool errors or sub-optimal hardware.' },
        { id: 'knowledgeLinting', icon: <BookOpenCheck />, title: 'Knowledge-Driven Linting:', description: 'It leverages the <strong>Knowledge Hub (RAG)</strong> for company-specific linting rules and best practices, ensuring adherence to internal quality standards.' },
      ]
    },
    {
      id: 'securityVerification',
      icon: <ShieldAlert />,
      title: 'Security Verification:',
      description: 'A specialized sub-component of the <strong>AutoDV Agent</strong> or a dedicated <strong>Security Verification Agent</strong> actively probes the design for <strong>security vulnerabilities</strong>.',
      nestedDetails: [
        { id: 'formalSecProps', icon: <LockKeyhole />, title: 'Formal Security Properties:', description: 'This includes <strong>formal verification of security properties</strong> (e.g., isolation, tamper detection, secure boot sequences),' },
        { id: 'staticExploitAnalysis', icon: <BugPlay />, title: 'Static Exploit Pattern Analysis:', description: '<strong>static analysis for known exploit patterns</strong>, and' },
        { id: 'intelligentFaultInject', icon: <TestTube2 />, title: 'Intelligent Fault Injection:', description: '<strong>intelligent fault injection scenarios</strong>, crucial for applications like automotive (ISO 26262) and IoT devices.' },
      ]
    }
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.6 Stage 6: Formal Verification &amp; Static Analysis for Deep Bug Detection
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>Even with extensive simulation, certain <strong>deep, corner-case bugs, security vulnerabilities, or subtle deadlocks</strong> are extremely difficult, if not impossible, to uncover through dynamic testing alone. Traditional <strong>formal verification</strong> often requires highly specialized expertise and significant manual effort for property writing and debug, limiting its widespread application.</p>
      <div className="mt-8 mb-4 flex items-center">
        <ShieldCheck className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Agentic Workflow: Automated Formal Proofs, Exhaustive Static Analysis, and Security Probing</h3>
      </div>
      <p>This stage complements simulation with mathematically rigorous <strong>formal methods</strong> and advanced <strong>static analysis</strong>, ensuring a higher degree of functional correctness and identifying critical issues that simulation cannot:</p>
      <ul className="list-none pl-0 space-y-6 !my-6">
        {workflowItems.map(item => (
          <PrimaryWorkflowItemCard key={item.id} icon={item.icon} title={item.title} description={item.nestedDetails ? undefined : item.description}>
            {item.nestedDetails && (
              <div className="mt-2 space-y-3">
                <div dangerouslySetInnerHTML={{ __html: item.description || '' }} />
                {item.nestedDetails.map(nested => (
                  <NestedDetailCard key={nested.id} icon={nested.icon} title={nested.title} description={nested.description} />
                ))}
              </div>
            )}
          </PrimaryWorkflowItemCard>
        ))}
      </ul>
      <p>This multi-faceted formal and static approach significantly enhances bug detection capabilities, especially for elusive, deeply embedded issues, providing a level of confidence in design correctness that is impossible to achieve with simulation alone, drastically reducing the risk of silicon failures.</p>
    </div>
  );
};

// --- Stage 3.7: AI-Driven Debugging & Root Cause Analysis ---
const Stage_3_7_AIDebugging: React.FC = () => {
  const workflowItems = [
    {
      id: 'autoFailAnalysis',
      icon: <FileSearch2 />,
      title: 'Automated Failure Analysis & Localization:',
      description: 'The <strong>Debug & Root Cause Analysis Agent</strong> is the tireless problem-solver. When a simulation fails, a formal tool produces a counter-example, or a metric deviates from expectation, this agent springs into action.',
      nestedDetails: [
        { id: 'logParsing', icon: <ScrollText />, title: 'Log Parsing:', description: 'It intelligently parses and analyzes massive <strong>simulation logs</strong>, automatically identifying error messages, warnings, and unexpected behaviors.' },
        { id: 'waveformAnalysis', icon: <LineChart />, title: 'Waveform Analysis:', description: 'It integrates with <strong>waveform viewers</strong> to automatically navigate and analyze critical signal traces and timing paths identified as problematic. It can filter noise, highlight key events, and correlate activity across multiple design blocks.' },
        { id: 'knowledgeLocalization', icon: <MapPin />, title: 'Knowledge-Driven Localization:', description: 'Leveraging the <strong>Knowledge Hub (RAG)</strong> (which contains historical bug patterns, design specifications, and common debug strategies), it intelligently localizes the likely source of the bug down to specific RTL lines, module interfaces, or architectural components.' },
      ]
    },
    {
      id: 'intelligentExplanation',
      icon: <MessageCircleQuestion />,
      title: 'Intelligent Explanation and Suggested Fixes:',
      description: 'Beyond just localization, the <strong>Debug & Root Cause Analysis Agent</strong> leverages LLM capabilities (through prompt engineering) to:',
      nestedDetails: [
        { id: 'explainBug', icon: <Lightbulb />, title: 'Explain the Bug:', description: 'Provide clear, human-readable explanations of why a failure occurred, translating complex technical jargon into understandable insights.' },
        { id: 'suggestSolutions', icon: <Wrench />, title: 'Suggest Solutions:', description: 'Propose specific, actionable code modifications or design adjustments to resolve the identified bug. This feedback is directed back to the <strong>RTL Generation & Refinement Agent</strong> or the <strong>Supervisor Agent</strong>.' },
        { id: 'whatIfDebug', icon: <RotateCcw />, title: '"What-If" Debugging:', description: 'Using the <strong>Context & State Management (CAG)</strong>, the agent can track previous debug attempts and avoid repeating failed strategies, suggesting alternative approaches based on prior context.' },
      ]
    },
    { id: 'feedbackToTestGen', icon: <GitCommitVertical />, title: 'Feedback to Test Generation:', description: 'When new bugs are found, the <strong>Debug & Root Cause Analysis Agent</strong> can automatically generate a minimized, focused <strong>regression test</strong> for that specific bug, ensuring that it doesn&apos;t reappear in future design iterations. This test is then added to the pool managed by the <strong>Test & Coverage Generation Agent</strong>.' },
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.7 Stage 7: AI-Driven Debugging &amp; Root Cause Analysis
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>Even with advanced verification, bugs will inevitably appear, and <strong>debugging them accounts for a massive portion of verification time</strong>. Sifting through vast amounts of simulation logs, waveform data, and formal counter-examples to pinpoint the <strong>root cause</strong> of a functional or performance issue is a highly manual, expert-intensive, and time-consuming process.</p>
      <div className="mt-8 mb-4 flex items-center">
        <SearchCode className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Agentic Workflow: Intelligent Problem Localization, Automated Explanation, and Iterative Bug Resolution</h3>
      </div>
      <p>This stage is dedicated to minimizing the debugging bottleneck through intelligent automation, ensuring rapid and precise bug resolution:</p>
      <ul className="list-none pl-0 space-y-6 !my-6">
        {workflowItems.map(item => (
          <PrimaryWorkflowItemCard key={item.id} icon={item.icon} title={item.title} description={item.nestedDetails ? undefined : item.description}>
            {item.nestedDetails && (
              <div className="mt-2 space-y-3">
                <div dangerouslySetInnerHTML={{ __html: item.description || '' }} />
                {item.nestedDetails.map(nested => (
                  <NestedDetailCard key={nested.id} icon={nested.icon} title={nested.title} description={nested.description} />
                ))}
              </div>
            )}
          </PrimaryWorkflowItemCard>
        ))}
      </ul>
      <p>This AI-driven debugging capability dramatically reduces the manual effort and expertise required for bug resolution, accelerating design cycles and allowing human engineers to focus on higher-level innovation.</p>
    </div>
  );
};

// --- Stage 3.8: System-Level & Cross-Domain Verification, and AI System Evaluation ---
const Stage_3_8_SystemLevelCrossDomainVerify: React.FC = () => {
  const workflowItems = [
    {
      id: 'systemLevelPerf',
      icon: <Gauge />,
      title: 'System-Level Performance Verification:',
      description: 'A <strong>Performance Verification Agent</strong> takes the lead here.',
      nestedDetails: [
        { id: 'fullChipSim', icon: <PlayCircle />, title: 'Full-Chip Simulations:', description: 'It orchestrates <strong>full-chip performance simulations</strong> (e.g., using SystemC or transaction-level models) driven by real-world workload scenarios.' },
        { id: 'kpiAnalysis', icon: <BarChart3 />, title: 'KPI Analysis:', description: 'It collects and analyzes key performance indicators (KPIs) such as throughput, latency, bandwidth utilization, and clock cycles, correlating them against the initial architectural targets.' },
        { id: 'feedbackLoop', icon: <RefreshCcw />, title: 'Feedback Loop:', description: 'Discrepancies are flagged and analyzed, providing feedback to the <strong>Architecture Exploration Agents</strong> or <strong>RTL Generation Agents</strong> for iterative performance tuning.' },
      ]
    },
    {
      id: 'powerVerifyIntegrity',
      icon: <BatteryCharging />,
      title: 'Power Verification & Integrity:',
      description: 'The <strong>Power & Design Rule Check (DRC) Analysis Agent</strong> extends its role to comprehensive power verification.',
      nestedDetails: [
        { id: 'dynamicPower', icon: <Activity />, title: 'Dynamic Power Analysis:', description: 'It performs <strong>dynamic power analysis</strong> by correlating workload simulations with power models, identifying power hotspots and peak power consumption.' },
        { id: 'staticPower', icon: <Zap />, title: 'Static Power Analysis:', description: 'It conducts <strong>static power analysis</strong> to identify leakage current issues.' },
        { id: 'powerIntegrity', icon: <Network />, title: 'Power Integrity Analysis:', description: 'It analyzes <strong>power integrity</strong> (e.g., IR drop, electromigration) using specialized tools, ensuring the power delivery network is robust across the entire chip. This analysis feeds back into the <strong>Physical Implementation Agent</strong> (Stage 10) for layout adjustments.' },
      ]
    },
    {
      id: 'comprehensiveSecurity',
      icon: <ShieldCheck />,
      title: 'Comprehensive Security Verification:',
      description: 'Building on earlier formal checks, the <strong>Security Verification Agent</strong> performs holistic, chip-level security assessments. This includes:',
      nestedDetails: [
        { id: 'attackSurface', icon: <ScanSearch />, title: 'Attack Surface Analysis:', description: 'Identifying potential entry points for attacks.' },
        { id: 'vulnScan', icon: <Bug />, title: 'Vulnerability Scanning:', description: 'Probing for known vulnerabilities in IP blocks or interfaces.' },
        { id: 'simPenTest', icon: <ShieldAlert />, title: 'Simulated Penetration Testing:', description: 'Running simulated attack scenarios against the full chip model to validate the effectiveness of security features.' },
        { id: 'complianceChecks', icon: <ListChecks />, title: 'Compliance Checks:', description: 'Ensuring adherence to security standards (e.g., FIPS, ISO 26262 functional safety security requirements).' },
      ]
    },
    {
      id: 'aiSystemEval',
      icon: <SlidersHorizontal />,
      title: 'AI System Evaluation & Guardrails:',
      description: 'This is where the overall AI design system&apos;s effectiveness is rigorously monitored and improved, utilizing the <strong>Human-in-the-Loop Interface</strong> and <strong>LangSmith</strong>:',
      nestedDetails: [
        { id: 'autoEval', icon: <CheckCircle2 />, title: 'Automated Evaluation:', description: 'LangSmith is used to capture production traces of agent interactions, LLM prompts, and tool calls. Custom evaluators are defined to automatically assess the quality of AI-generated content. This builds comprehensive datasets for continuous, objective evaluation of agent performance and output quality.' },
        { id: 'promptRefine', icon: <Lightbulb />, title: 'Prompt Engineering Refinement:', description: 'Based on evaluation results, insights are used to refine and optimize prompt engineering strategies for all agents, improving their accuracy, efficiency, and adherence to design rules.' },
        { id: 'aiGuardrails', icon: <ShieldAlert />, title: 'AI Guardrails & Anomaly Detection:', description: 'The <strong>Supervisor Agent</strong> (via LangSmith monitoring) actively enforces predefined guardrails, preventing agents from pursuing irrational design paths or generating outputs that violate critical constraints. Anomaly detection algorithms monitor agent behavior for unexpected deviations, allowing for proactive intervention.' },
        { id: 'selfEvalLearn', icon: <BrainCircuit />, title: 'Self-Evaluation & Learning:', description: 'The system can engage in meta-level self-evaluation. For instance, the <strong>Knowledge Graph Agent</strong> can analyze historical performance data of specific agents and workflows (from LangSmith traces) to identify patterns of success or failure. This feedback loop informs the <strong>Global Planning Agent</strong> on how to optimize agent selection, task decomposition, and resource allocation for future design projects.' },
      ]
    }
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.8 Stage 8: System-Level &amp; Cross-Domain Verification, and AI System Evaluation
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>Beyond functional correctness of individual blocks, ensuring the <strong>holistic performance, power efficiency, and security</strong> of the entire chip, especially across different abstraction levels and physical implementation, is critical. Furthermore, in an AI-driven design flow, <strong>continuous evaluation of the AI system&apos;s own performance and reliability</strong> is paramount to maintain confidence and drive ongoing improvement.</p>
      <div className="mt-8 mb-4 flex items-center">
        <BarChart3 className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Agentic Workflow: Holistic Chip Validation and Self-Improving AI Design</h3>
      </div>
      <p>This final, crucial verification stage provides a comprehensive, chip-level validation, integrating performance, power, and security aspects, and importantly, includes robust mechanisms for evaluating and improving the AI design system itself:</p>
      <ul className="list-none pl-0 space-y-6 !my-6">
        {workflowItems.map(item => (
          <PrimaryWorkflowItemCard key={item.id} icon={item.icon} title={item.title} description={item.nestedDetails ? undefined : item.description}>
            {item.nestedDetails && (
              <div className="mt-2 space-y-3">
                <div dangerouslySetInnerHTML={{ __html: item.description || '' }} />
                {item.nestedDetails.map(nested => (
                  <NestedDetailCard key={nested.id} icon={nested.icon} title={nested.title} description={nested.description} />
                ))}
              </div>
            )}
          </PrimaryWorkflowItemCard>
        ))}
      </ul>
      <p>This multi-faceted final verification stage ensures the comprehensive quality, reliability, and security of the entire chip, while simultaneously fostering a self-improving AI design ecosystem that continually enhances its capabilities and accelerates our design cycles.</p>
    </div>
  );
};

// --- Stage 3.9: Design for Testability (DFT) ---
const Stage_3_9_DFT: React.FC = () => {
  const workflowItems = [
    {
      id: 'intelDftPlan',
      icon: <ClipboardList />,
      title: 'Intelligent DFT Planning:',
      description: 'A dedicated <strong>DFT Planning Agent</strong> (a new specialized Physical Design & Optimization Agent or a Specialized Analysis Agent from Section 2.2, expanding on its capabilities) analyzes the RTL or initial gate-level netlist received from previous stages.',
      nestedDetails: [
        { id: 'ragKnowledge', icon: <BrainCircuit />, description: 'Leveraging the <strong class="text-sky-300">Knowledge Hub (RAG)</strong> (containing historical DFT best practices, fault models, and technology-specific rules), it intelligently determines the optimal DFT strategy for the entire chip or specific IP blocks. This includes deciding on scan architecture, number of scan chains, BIST insertion points for memories and logic, and JTAG boundary scan requirements.' },
        { id: 'ppaConsider', icon: <Scale />, description: 'It considers initial PPA estimates and potential test time to propose a DFT plan that balances testability with design constraints.' },
        { id: 'promptEng', icon: <Keyboard />, description: '<strong class="text-sky-300">Prompt engineering</strong> guides general-purpose LLMs in evaluating trade-offs and generating a detailed DFT specification.' },
      ]
    },
    {
      id: 'autoDftInsert',
      icon: <Puzzle />,
      title: 'Automated DFT Insertion:',
      description: 'The <strong>DFT Insertion Agent</strong> (another new specialized Physical Design & Optimization Agent) takes the DFT plan and autonomously modifies the design by inserting the necessary test logic.',
      nestedDetails: [
        { id: 'toolOrchestrate', icon: <Cog />, description: 'It orchestrates industry-standard DFT tools (via the MCP Server&apos;s Tool Abstraction Layer, e.g., Synopsys TestMAX, Cadence Modus) to perform scan chain insertion, memory BIST insertion, boundary scan logic generation, and other DFT structural enhancements.' },
        { id: 'clockResetHandle', icon: <RefreshCcw />, description: 'It ensures proper clocking and reset domain handling for test mode.' },
        { id: 'ppaMonitor', icon: <BarChart3 />, description: 'The agent continuously monitors the PPA impact of inserted logic, providing feedback to the Supervisor Agent for iterative adjustment if constraints are violated.' },
      ]
    },
    {
      id: 'intelAtpg',
      icon: <ListChecks />,
      title: 'Intelligent Test Pattern Generation (ATPG):',
      description: 'The <strong>ATPG Agent</strong> (a specialized Physical Design & Optimization Agent or Verification Agent) is responsible for generating efficient and high-quality test patterns.',
      nestedDetails: [
        { id: 'faultModelTarget', icon: <Crosshair />, description: 'It runs ATPG algorithms on the DFT-inserted design, targeting various fault models (e.g., stuck-at, transition, bridging faults) to achieve maximum fault coverage.' },
        { id: 'patternOpt', icon: <FileText />, description: 'Leveraging prompt engineering and RAG on historical pattern data, it optimizes pattern count to minimize test time and cost, while maximizing effectiveness.' },
        { id: 'formatGen', icon: <FileCode />, description: 'It automatically generates test patterns in industry-standard formats (e.g., STIL, WGL) for direct use on ATE (Automated Test Equipment).' },
      ]
    },
    {
      id: 'dftVerifyVal',
      icon: <ShieldCheck />,
      title: 'DFT Verification and Validation:',
      description: 'A <strong>DFT Verification Agent</strong> (a Verification Agent from Section 2.2) rigorously verifies the correctness of the inserted DFT logic and the generated test patterns.',
      nestedDetails: [
        { id: 'testModeSim', icon: <PlayCircle />, description: 'It simulates the design in test mode to ensure all scan chains are correctly connected and functional, and that BIST engines operate as expected.' },
        { id: 'faultSim', icon: <TestTube2 />, description: 'It performs fault simulation to confirm the achieved fault coverage targets.' },
        { id: 'issueFeedback', icon: <Bug />, description: 'Any issues detected are fed back to the Debug & Root Cause Analysis Agent and the DFT Insertion Agent for automated correction.' },
      ]
    }
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.9 Stage 9: Design for Testability (DFT) Insertion &amp; Test Pattern Generation
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>Ensuring that a complex chip can be thoroughly tested after manufacturing is paramount for yield and reliability. Design for Testability (DFT) involves inserting dedicated test logic (e.g., scan chains, Built-In Self-Test - BIST, JTAG infrastructure) into the design. This process is highly specialized, computationally intensive, can significantly impact chip area, power, and performance (PPA), and requires expert knowledge to achieve high fault coverage while minimizing overhead. Manual DFT planning, insertion, and Automatic Test Pattern Generation (ATPG) are prone to errors and bottlenecks, leading to delayed test pattern availability and potentially higher manufacturing test costs.</p>
      <div className="mt-8 mb-4 flex items-center">
        <Wrench className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Agentic Workflow: Automated DFT Planning, Insertion, and Optimized Test Pattern Generation</h3>
      </div>
      <p>This crucial stage integrates AI to automate and optimize the complex DFT flow, ensuring high test coverage and efficient manufacturing testing:</p>
      <ul className="list-none pl-0 space-y-6 !my-6">
        {workflowItems.map(item => (
          <PrimaryWorkflowItemCard key={item.id} icon={item.icon} title={item.title} description={item.nestedDetails ? undefined : item.description}>
            {item.nestedDetails && (
              <div className="mt-2 space-y-3">
                <div dangerouslySetInnerHTML={{ __html: item.description || '' }} />
                {item.nestedDetails.map(nested => (
                  <NestedDetailCard key={nested.id} icon={nested.icon} title={nested.title} description={nested.description} />
                ))}
              </div>
            )}
          </PrimaryWorkflowItemCard>
        ))}
      </ul>
      <p>This AI-driven DFT stage ensures high manufacturability and testability of our chips, significantly reducing post-silicon debug efforts and overall production costs, while maintaining optimal PPA.</p>
    </div>
  );
};

// --- Stage 3.10: Physical Design & PPA Optimization ---
const Stage_3_10_PhysicalDesignPPAOpt: React.FC = () => {
  const workflowItems = [
    {
      id: 'intelPPAOrch',
      icon: <SlidersHorizontal />,
      title: 'Intelligent PPA Optimization Orchestration:',
      description: 'The PPA Optimization Agent is the master conductor for the entire physical design flow. It intelligently orchestrates the integrated physical design EDA toolchain (including the Synthesis Agent, Physical Implementation Agent, and Timing Closure Agent from Section 2.2, all accessed via the MCP Server&apos;s Tool Abstraction Layer). Its core intelligence lies in systematically exploring valid parameter combinations and applying known optimization strategies to converge on optimal PPA.'
    },
    {
      id: 'engDrivenConstraints',
      icon: <Target />,
      title: 'Engineer-Driven Constraints & Goal Translation:',
      description: 'The process begins with our human design engineers setting precise, high-level PPA goals and constraints (e.g., target clock frequency, maximum power budget, specific area footprint). The PPA Optimization Agent translates these overarching objectives into granular, actionable directives and parameter sets for the underlying EDA tools. This translation is powered by:',
      nestedDetails: [
        { id: 'promptEng', icon: <Keyboard />, title: 'Prompt Engineering:', description: 'Carefully crafted prompts guide general-purpose LLMs to reason about the complex interplay of physical design parameters, analyze intermediate results, and propose intelligent modifications.' },
        { id: 'knowledgeHubRAG', icon: <DatabaseZap />, title: 'Knowledge Hub (RAG):', description: 'The agent extensively queries the Knowledge Hub (RAG) in the MCP Server, retrieving historical successful design methodologies, optimal tool parameter settings for similar blocks, past PPA trade-off analyses, and process-node specific guidelines. This provides crucial in-context learning and expert guidance.' },
        { id: 'targetedFineTune', icon: <Focus />, title: 'Targeted Fine-Tuning (Optional/Limited):', description: 'For highly specific and recurring optimization problems or to better interpret nuanced EDA tool logs and reports, limited, targeted fine-tuning of the underlying LLM can be applied. This focuses on narrow domain-specific understanding rather than broad model development, enhancing the agent&apos;s precision in critical optimization loops.' },
      ]
    },
    {
      id: 'sysParamExplore',
      icon: <Repeat2 />,
      title: 'Systematic Parameter Exploration & Iterative Refinement:',
      description: 'The agent drives iterative physical design runs, applying new parameter sets and analyzing the results. The loop involves:',
      nestedDetails: [
        { id: 'paramApp', icon: <Settings2 />, title: 'Parameter Application:', description: 'The agent sends an optimized set of parameters and directives to the relevant physical design agents (Synthesis, Physical Implementation, Timing Closure).' },
        { id: 'toolExec', icon: <PlayCircle />, title: 'Tool Execution:', description: 'The physical design agents execute the EDA tools.' },
        { id: 'resultAnalysis', icon: <SearchCode />, title: 'Result Analysis:', description: 'The PPA Optimization Agent meticulously analyzes the output PPA metrics (timing, power, area, congestion) and design rule violations from each run. It leverages prompt engineering and RAG to interpret complex reports and identify areas for improvement or violation.' },
        { id: 'strategicAdj', icon: <Lightbulb />, title: 'Strategic Adjustment:', description: 'Based on its analysis, the agent reasons about the next optimal set of parameter adjustments to guide the design towards convergence. This involves identifying which parameters to tweak, what values to try, and which optimization strategies to prioritize, always adhering to the engineer-defined constraints.' },
        { id: 'manufactureIntegrate', icon: <CheckCircle2 />, title: 'Manufacturability Integration:', description: 'The agent also integrates early feedback from the Yield Prediction Agent (from Stage 3.11) on potential manufacturing hotspots or yield detractors, factoring these into its PPA optimization decisions to ensure designs are not just optimal in PPA but also highly manufacturable.' },
      ]
    },
    {
      id: 'multiObjEval',
      icon: <Inspect />,
      title: 'Multi-Objective Evaluation & Continuous Feedback Loop:',
      description: 'After each physical design iteration, the system performs an automated, multi-objective evaluation of the agent&apos;s current output. This evaluation is a comprehensive assessment based on:<ul class="list-disc pl-5 mt-1 space-y-1 text-slate-400"><li>Direct PPA Metrics: Precise measurements of timing closure, dynamic and static power consumption, silicon area utilization, routing congestion, and physical design rule compliance.</li><li>Manufacturability Insights: Integration of early yield predictions. This continuous in-loop evaluation provides immediate quantitative feedback to the PPA Optimization Agent to inform its next strategic adjustment. Moreover, these evaluation results, tracked via platforms like LangSmith, contribute to the ongoing improvement of the underlying LLM prompts and the training data within the Knowledge Hub, ensuring the agent&apos;s intelligence continuously adapts and refines its optimization strategies for future designs.</li></ul>',
    },
    {
      id: 'deepCollab',
      icon: <UsersRound />,
      title: 'Deep Collaboration and Human Oversight:',
      description: 'The PPA Optimization Agent works in tight collaboration with other agents, receiving inputs from the Timing Closure Agent to resolve critical path delays and integrating analysis from the Power & Design Rule Check (DRC) Analysis Agent (from Section 2.2) for power integrity and manufacturing compliance. The Supervisor agent (from the Central Intelligence Hub) continuously tracks the PPA Optimization Agent&apos;s progress and convergence, ensuring adherence to overall project goals. The Human-in-the-Loop Interface provides transparent dashboards displaying these real-time evaluation metrics for human experts to monitor progress, understand the AI&apos;s reasoning for proposed changes, and intervene for strategic guidance, complex problem-solving, or to adjust higher-level constraints, maintaining essential human control over the ultimate design direction.'
    }
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.10 Stage 10: Physical Design &amp; PPA Optimization
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>The <strong>physical design stage</strong>—encompassing complex tasks like floorplanning, power grid design, cell placement, clock tree synthesis, routing, and iterative timing closure—represents the transformation of a logical design into a manufacturable physical layout. This phase involves navigating a colossal solution space with a near-infinite number of choices, where every decision has profound, often conflicting, impacts on <strong>Power, Performance, and Area (PPA)</strong>. Manually tuning the hundreds of parameters within highly specialized, commercial EDA tools to find the global optimum across these diverse objectives is a <strong>&quot;black art&quot;</strong> that is humanly impossible to perfect. This leads to <strong>sub-optimal designs</strong>, <strong>extended design convergence times</strong>, and missed market opportunities. Achieving aggressive PPA targets while meeting manufacturing constraints is the ultimate determinant of a chip&apos;s competitiveness.</p>
      <div className="mt-8 mb-4 flex items-center">
        <SlidersHorizontal className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Agentic Workflow: Constraint-Driven Optimization & Iterative Refinement through Intelligent Reasoning, Data-Guided Exploration, and Continuous In-Loop Evaluation</h3>
      </div>
      <p>To unlock unprecedented PPA optimization, accelerate design convergence, and consistently deliver market-leading silicon, our system employs an intelligent <strong>PPA Optimization Agent</strong> (a Physical Design & Optimization Agent from Section 2.2). This agent acts as the central intelligence of this stage, leveraging human expertise, sophisticated reasoning, and a rich knowledge base to drive systematic iterative refinement across the physical design flow.</p>
      <ul className="list-none pl-0 space-y-6 !my-6">
        {workflowItems.map(item => (
          <PrimaryWorkflowItemCard key={item.id} icon={item.icon} title={item.title} description={item.nestedDetails ? undefined : item.description}>
            {item.nestedDetails && (
              <div className="mt-2 space-y-3">
                <div dangerouslySetInnerHTML={{ __html: item.description || '' }} />
                {item.nestedDetails.map(nested => (
                  <NestedDetailCard key={nested.id} icon={nested.icon} title={nested.title} description={nested.description} />
                ))}
              </div>
            )}
          </PrimaryWorkflowItemCard>
        ))}
      </ul>
      <p>This intelligent, constraint-driven approach, powered by continuous in-loop evaluation, fundamentally transforms the most challenging stage of chip development, dramatically accelerating convergence, reducing design cycles, and consistently achieving superior PPA results critical for market leadership, all while empowering human engineers with a powerful, data-guided assistant.</p>
    </div>
  );
};

// --- Stage 3.11: Manufacturing & Post-Silicon Validation ---
const Stage_3_11_MfgPostSilicon: React.FC = () => {
  const workflowItems = [
    { id: 'yieldPredict', icon: <Activity />, title: 'Yield Prediction:', description: 'A <strong>Yield Prediction Agent</strong> will leverage advanced <strong>machine learning models</strong> trained on vast datasets of historical wafer-level data, process variation statistics, and test results. This agent identifies design features, layout structures, or even specific process parameters that are statistically likely to cause <strong>manufacturing problems or yield loss</strong>. This critical, proactive feedback is passed back to the <strong>PPA Optimization Agent</strong> in Stage 3.10, directly incorporating <strong>manufacturability and yield considerations</strong> into the iterative PPA equation from the earliest physical design stages.' },
    { id: 'defectDetect', icon: <ScanSearch />, title: 'Defect Detection:', description: 'A <strong>Defect Detection Agent</strong>, utilizing <strong>AI-powered visual inspection systems</strong> and advanced computer vision algorithms, analyzes high-resolution wafer scans and in-line process monitoring data. It identifies, classifies, and localizes <strong>microscopic physical defects</strong> (e.g., shorts, opens, particles) with a speed and accuracy far exceeding traditional human capabilities or simpler automated optical inspection systems. This dramatically accelerates <strong>quality control and root cause analysis</strong> in the fab.' },
    { id: 'postSiliconVal', icon: <CheckCircle2 />, title: 'Post-Silicon Validation:', description: 'A <strong>Post-Silicon Validation Agent</strong> automates the complex <strong>bring-up and characterization process</strong> for prototype chips and first silicon. It dynamically orchestrates lab equipment, runs comprehensive diagnostics, collects <strong>detailed performance data</strong> from the actual silicon (e.g., power consumption under various workloads, maximum operating frequency, signal integrity), and automatically correlates any discrepancies against the meticulously documented <strong>pre-silicon simulation results and PPA targets</strong>. This creates a final, invaluable <strong>feedback loop</strong> directly into our <strong>Knowledge Graph Agent</strong>, continuously refining our verification models, simulation methodologies, and predictive AI models for all future chip design projects. This ensures continuous learning and improvement in our design and manufacturing processes.' },
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.11 Stage 11: Manufacturing &amp; Post-Silicon Validation
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>Bridging the gap between highly optimized <strong>pre-silicon design data</strong> and the realities of <strong>physical manufacturing and silicon performance</strong> involves predicting <strong>manufacturing yield</strong>, accurately detecting <strong>microscopic physical defects</strong>, and rigorously validating the performance of the <strong>actual hardware</strong> in a timely manner. This phase is crucial for product quality and continuous improvement.</p>
      <div className="mt-8 mb-4 flex items-center">
        <Cog className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Agentic Workflow: AI-Enhanced Quality Assurance &amp; Predictive Feedback Loop</h3>
      </div>
      <p>This final stage integrates AI to ensure manufacturing quality and create a powerful feedback loop for future designs:</p>
      <ul className="list-none pl-0 space-y-6 !my-6">
        {workflowItems.map(item => (
          <PrimaryWorkflowItemCard key={item.id} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </ul>
    </div>
  );
};

export default function AiPipelinePage() {
  // Removed unused showDigitalFall state and useEffect
  return (
    <SubPageLayout>
      <article className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6 relative">
        <div className="flex flex-col items-center text-center mb-12">
          <Cpu className="h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-2">
            Section 3: Full-Stack AI Integration: Agentic Workflows Across the Semiconductor Pipeline
          </h1>
        </div>

        <p>The true power of the proposed multi-agent architecture is realized when it is applied holistically across the entire semiconductor design pipeline. This section details the granular, stage-by-stage implementation of agentic workflows, transforming each phase from a series of manual, siloed tasks into an integrated, AI-driven process. For each stage, the key challenges are identified, the agentic solution is described, and the expected business outcomes are quantified.</p>
        <p>This integrated approach creates a <strong>&quot;digital thread&quot;</strong> of intent and rich context that flows seamlessly from initial concept to final silicon, fundamentally breaking down traditional barriers between design disciplines. In a traditional chip design flow, critical context is often lost at handoffs between specialized teams. The verification team might receive an RTL drop, and the physical design team a netlist, but the underlying design intent, critical trade-offs, and historical decisions can become fragmented. In our proposed <strong>Multi-Agent System (MAS)</strong>, the <strong>Supervisor agent</strong> (from the Central Intelligence Hub) maintains the complete, holistic state and high-level goals for the project. When it delegates a task, it passes not just the raw data but the entire contextual awareness, managed by the <strong>MCP Server&apos;s Context & State Management (CAG)</strong> component. This shared, dynamic context empowers downstream agents to make more intelligent, globally-aware decisions, drastically reducing errors from miscommunication, accelerating design convergence, and enabling truly optimal end-to-end solutions that meet our aggressive <strong>PPA targets</strong>.</p>

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
