// src/app/ai-pipeline/page.tsx
"use client";
import React from 'react';
import SubPageLayout from '@/components/chimera/SubPageLayout';
import {
  Cpu as PageIcon, // Renamed to avoid conflict
  AlertTriangle,
  Workflow,
  Zap,
  FileText,
  ShieldCheck,
  SlidersHorizontal,
  ClipboardCheck,
  UserRoundSearch, // New icon
  Network,         // New icon
  Cpu,             // New icon (already imported for PageIcon, but good to list here)
  Focus            // New icon
} from 'lucide-react';

export default function AiPipelinePage() {
  return (
    <SubPageLayout>
      <article className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6">
        <div className="flex flex-col items-center text-center mb-12">
          <PageIcon className="h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-2">
            Section 3: Full-Stack AI Integration: Agentic Workflows Across the Semiconductor Pipeline
          </h1>
          <p className="text-2xl text-slate-400">Applying agentic workflows to every stage of chip design</p>
        </div>

        <p>The true power of the proposed multi-agent architecture is realized when it is applied holistically across the entire semiconductor design pipeline. This section details the stage-by-stage implementation of agentic workflows, transforming each phase from a series of manual, siloed tasks into an integrated, AI-driven process. For each stage, the key challenges are identified, the agentic solution is described, and the expected business outcomes are quantified.</p>
        <p>This integrated approach creates a <strong>&quot;digital thread&quot;</strong> of intent and rich context that flows seamlessly from initial concept to final silicon, fundamentally breaking down traditional barriers between design disciplines. In a traditional chip design flow, critical context is often lost at handoffs between specialized teams. The verification team might receive an RTL drop, and the physical design team a netlist, but the underlying design intent, critical trade-offs, and historical decisions can become fragmented. In our proposed <strong>Multi-Agent System (MAS)</strong>, the <strong>Supervisor agent</strong> (from the Central Intelligence Hub) maintains the complete, holistic state and high-level goals for the project. When it delegates a task, it passes not just the raw data but the entire contextual awareness, managed by the <strong>MCP Server&apos;s Context & State Management (CAG)</strong> component. This shared, dynamic context empowers downstream agents to make more intelligent, globally-aware decisions, drastically reducing errors from miscommunication, accelerating design convergence, and enabling truly optimal end-to-end solutions that meet our aggressive <strong>PPA targets</strong>.</p>

        {/* Stage 3.1 */}
        <div className="mt-12 mb-4">
          <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
            3.1 Stage 1: System Specification &amp; Architecture
          </h2>
        </div>
        <div className="mt-8 mb-4 flex items-center">
          <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
        </div>
        <p>The critical initial phase of chip design is often hampered by the <strong>fog</strong> of ambiguous, high-level customer requirements expressed in natural language and the <strong>labyrinthine</strong>, multi-dimensional search space of potential high-level architectures. Traditional manual exploration is slow, sub-optimal, and prone to overlooking innovative solutions.</p>
        
        <div className="mt-8 mb-4 flex items-center">
          <Zap className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Agentic Workflow: AI-Driven Strategic Design &amp; Holistic Architecture Exploration</h3>
        </div>
        <p>Our workflow begins with precision and foresight, a <strong>symphony of specialized AI</strong>:</p>
        <ul className="space-y-4">
          <li className="flex">
            <UserRoundSearch className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
            <div>
              The <strong className="text-white font-semibold">Customer Requirements Translation Agent</strong> (a Design & Exploration
              specialist from Section 2.2) acts as a digital envoy, engaging
              directly with product managers and system architects. It doesn&apos;t
              just listen; it dives deep into the{' '}
              <strong className="text-white font-semibold">
                Knowledge Hub (RAG)
              </strong>{' '}
              of the MCP Server, unearthing insights from{' '}
              <strong className="text-white font-semibold">
                similar past projects, market trends, and available IP
              </strong>
              . This rapid analysis flags potential ambiguities, constraints, and
              fresh opportunities. Simultaneously, through{' '}
              <strong className="text-white font-semibold">
                Context & State Management (CAG)
              </strong>
              , it builds a dynamic conversational bridge, iteratively sculpting
              vague customer needs into a preliminary, yet robust, technical
              specification. The result? A dramatically accelerated{' '}
              <strong className="text-white font-semibold">
                proposal generation process
              </strong>
              , arming our sales team with a decisive competitive edge.
            </div>
          </li>
          <li className="flex">
            <FileText className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
            <div>
              Building on this, the{' '}
              <strong className="text-white font-semibold">
                Specification Agent
              </strong>
              . This meticulous architect (also a Design & Exploration Agent from
              Section 2.2) translates the refined high-level needs into a{' '}
              <strong className="text-white font-semibold">
                precise, unambiguous, and machine-readable design specification
              </strong>
              . It&apos;s not just about documentation; it&apos;s about
              foundational integrity. Employing{' '}
              <strong className="text-white font-semibold">
                formal verification techniques
              </strong>{' '}
              and sharp{' '}
              <strong className="text-white font-semibold">semantic analysis</strong>
              , it guarantees{' '}
              <strong className="text-white font-semibold">
                consistency, completeness, and unwavering adherence
              </strong>{' '}
              to our company&apos;s{' '}
              <strong className="text-white font-semibold">
                design guidelines
              </strong>{' '}
              and crucial{' '}
              <strong className="text-white font-semibold">
                industry standards
              </strong>{' '}
              (like specific interface protocols or security certifications). This
              unwavering upfront rigor acts as a shield, deflecting{' '}
              <strong className="text-white font-semibold">
                costly ambiguities and misinterpretations
              </strong>{' '}
              that could otherwise plague later design stages.
            </div>
          </li>
          <li className="flex">
            <Cpu className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
            <div>
              This formal specification then feeds into our{' '}
              <strong className="text-white font-semibold">
                Architecture Exploration Agents
              </strong>
              . Leading the charge is the{' '}
              <strong className="text-white font-semibold">
                Microarchitecture Optimization Agent
              </strong>{' '}
              (detailed in Section 2.2), a digital Da Vinci powered by
              sophisticated{' '}
              <strong className="text-white font-semibold">
                reinforcement learning
              </strong>{' '}
              and{' '}
              <strong className="text-white font-semibold">
                multi-objective optimization algorithms
              </strong>
              . It doesn&apos;t just follow paths; it blazes them, autonomously
              generating and rigorously evaluating thousands of high-level
              architectural variants – think different CPU core pipeline depths,
              intricate cache hierarchies, novel memory access patterns, or
              bespoke custom accelerator configurations.
            </div>
          </li>
          <li className="flex">
            <Network className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
            <div>
              Simultaneously, its counterpart, the{' '}
              <strong className="text-white font-semibold">
                System-Level Interconnect Agent
              </strong>{' '}
              (also from Section 2.2), masterfully designs and optimizes the
              chip&apos;s vital{' '}
              <strong className="text-white font-semibold">
                internal communication fabric
              </strong>{' '}
              – the NoCs (Network-on-Chip topologies) and memory interfaces that
              form the chip&apos;s data highways. These twin explorers don&apos;t
              guess; they leverage advanced AI models to rapidly and accurately
              estimate{' '}
              <strong className="text-white font-semibold">
                PPA (Power, Performance, Area)
              </strong>{' '}
              from these high-level concepts. This synergy often unlocks up to a{' '}
              <strong className="text-white font-semibold">
                10x surge in exploration speed
              </strong>{' '}
              compared to the painstaking manual estimations or premature
              synthesis runs of yesteryear.
            </div>
          </li>
          <li className="flex">
            <Focus className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
            <div>
              Guiding this intricate dance is the{' '}
              <strong className="text-white font-semibold">Supervisor agent</strong>{' '}
              (the linchpin of our Central Intelligence Hub). It’s the grand
              conductor, intelligently orchestrating the entire exploration. With
              unwavering focus, it continuously monitors the PPA estimations,
              artfully manages complex trade-offs, and distills the vast
              exploration into the{' '}
              <strong className="text-white font-semibold">
                top 3-5 candidate architectures
              </strong>
              . These aren&apos;t just options; they are AI-vetted strategic
              choices, presented to our human architects and product leaders
              complete with comprehensive, AI-generated{' '}
              <strong className="text-white font-semibold">
                trade-off analyses
              </strong>
              . This empowers them to make informed, strategic decisions that
              resonate directly with the chip&apos;s market competitiveness and
              core business objectives.
            </div>
          </li>
        </ul>

        {/* Stage 3.2 */}
        <div className="mt-12 mb-4">
          <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
            3.2 Stage 2: RTL Design &amp; High-Level Synthesis (HLS)
          </h2>
        </div>
        <div className="mt-8 mb-4 flex items-center">
          <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
        </div>
        <p>The manual creation of <strong>Register-Transfer Level (RTL)</strong> code in <strong>Hardware Description Languages (HDLs)</strong> like Verilog and VHDL is notoriously <strong>time-consuming, tedious, and prone to subtle human errors</strong>, especially in complex, large-scale designs. While <strong>Large Language Models (LLMs)</strong> can generate HDL code, they are often <strong>unreliable in isolation</strong>, producing code that is syntactically correct but <strong>functionally flawed or sub-optimal</strong> for hardware synthesis.</p>
        
        <div className="mt-8 mb-4 flex items-center">
          <FileCode className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Agentic Workflow: Test-Driven Development (TDD) for Trustworthy Agentic RTL Coding</h3>
        </div>
        <p>To decisively address the reliability gap of generative AI for hardware design, we implement a rigorous <strong>TDD workflow</strong>, inspired by best practices for agentic coding and ensuring <strong>&quot;first-time-right&quot; RTL</strong>:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            The human design engineer provides a high-level functional description for a specific design module, along with its <strong>critical test requirements</strong> and <strong>performance targets</strong> (derived from the formal specification).
          </li>
          <li>
            The Test & Coverage Generation Agent (a Verification Agent from Section 2.2) is tasked with autonomously writing the functional tests and assertions (e.g., using SystemVerilog Assertions - SVA) <strong>first</strong>. This crucial step establishes a <strong>clear, unambiguous, and machine-verifiable definition of &quot;correctness&quot;</strong> for the module before any RTL is written.
          </li>
          <li>
            The <strong>Supervisor agent</strong> then presents these generated tests to the human engineer for final review and confirmation, ensuring alignment with design intent and comprehensive <strong>test coverage goals</strong>.
          </li>
          <li>
            Once confirmed, the RTL Generation & Refinement Agent (a RTL Generation Agent from Section 2.2), now specifically functioning as our <strong>Verilog/VHDL Coder Agent</strong>, is instructed with a single, clear, and measurable goal: write <strong>synthesizable RTL code that makes the pre-defined tests pass</strong>.
          </li>
          <li>
            The Coder Agent enters an intelligent, iterative <strong>TDD loop</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>It generates initial RTL code based on the specification.</li>
              <li>The Supervisor invokes our advanced <strong>simulation tools</strong> (via the MCP Server&apos;s Tool Abstraction Layer) to run the automatically generated tests against the newly written RTL.</li>
              <li>The <strong>Debug & Root Cause Analysis Agent</strong> (another Verification Agent from Section 2.2) meticulously analyzes any simulation failures or coverage gaps, sifting through waveforms and logs to pinpoint the exact bug and propose fixes.</li>
              <li>The Coder Agent then leverages this precise feedback to <strong>refactor, debug, and optimize</strong> its generated code.</li>
            </ul>
          </li>
          <li>
            This <strong>TDD loop</strong> continues until all tests pass, achieving <strong>100% functional coverage</strong> and meeting initial PPA estimates. This process directly mitigates the primary weakness of using LLMs for HDL generation by grounding the creative, probabilistic nature of the LLM in the <strong>deterministic, verifiable world of functional tests</strong>. The system can also intelligently leverage agents capable of <strong>code conversion between different HDLs</strong> (e.g., Verilog to VHDL or vice-versa) as needed for IP reuse or specific toolchain compatibility, ensuring maximum flexibility.
          </li>
        </ul>

        {/* Stage 3.3 */}
        <div className="mt-12 mb-4">
          <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
            3.3 Stage 3: Verification &amp; Validation
          </h2>
        </div>
        <div className="mt-8 mb-4 flex items-center">
          <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
        </div>
        <p><strong>Functional verification</strong> remains the <strong>single largest bottleneck</strong> in modern chip design, consuming up to <strong>70% of total project resources</strong> and often extending project timelines significantly. Even with this massive effort, traditional simulation-based methods can miss <strong>deep, corner-case bugs</strong> that lead to catastrophic and <strong>costly silicon respins</strong> after manufacturing.</p>
        
        <div className="mt-8 mb-4 flex items-center">
          <ShieldCheck className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Agentic Workflow: The AIvril Verification-in-the-Loop Framework for &quot;First-Time-Right&quot; Silicon</h3>
        </div>
        <p>To fundamentally transform verification efficiency and quality, we propose the implementation of a comprehensive <strong>&quot;verification-in-the-loop&quot; system</strong> modeled on the <strong>AIvril framework</strong>, which uses a dedicated multi-agent team for automated code correction and functional verification. This framework ensures robust validation before physical design commences, moving us closer to the critical goal of <strong>&quot;first-time-right&quot; silicon</strong>.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            The AutoReview Agent (a specialized Verification Agent from Section 2.2) acts as an automated, tireless code reviewer operating immediately on newly generated or modified RTL. It employs <strong>static analysis, linting tools, and formal methods</strong> to meticulously check the RTL for syntax errors, company-specific style guide violations, common coding pitfalls, and critically, <strong>non-synthesizable constructs</strong>. It provides <strong>precise, targeted, and actionable feedback</strong> directly to the RTL Generation & Refinement Agent (Coder Agent) for immediate, automated correction, creating an exceptionally <strong>tight and fast feedback loop</strong> that dramatically reduces manual review cycles and design iterations.
          </li>
          <li>
            The AutoDV (Automatic Design Verification) Agent (another specialized Verification Agent from Section 2.2) is then solely responsible for ensuring <strong>comprehensive functional correctness and coverage</strong>. It intelligently orchestrates cutting-edge verification techniques:
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>It uses <strong>formal verification tools</strong> (via the MCP Server&apos;s Tool Abstraction Layer, e.g., Synopsys JasperGold) to <strong>mathematically prove design properties</strong> and identify deep, corner-case bugs that are virtually impossible to find with simulation alone.</li>
              <li>It continuously analyzes <strong>simulation coverage reports</strong> (generated by the Test & Coverage Generation Agent) to identify untested areas of the design.</li>
              <li>Crucially, it then <strong>intelligently generates new, targeted test cases</strong> and verification environments (e.g., constrained random stimuli) to <strong>close these coverage holes</strong>, creating a <strong>closed-loop system</strong> for continuous, automated verification improvement.</li>
            </ul>
          </li>
          <li>
            The <strong>Supervisor agent</strong> oversees this entire framework, prioritizing verification tasks based on design criticality and actively communicating with the <strong>Debug & Root Cause Analysis Agent</strong> to resolve any complex verification failures. This proactive, AI-driven <strong>&quot;verification-in-the-loop&quot;</strong> approach is designed to catch virtually all bugs before physical design begins, significantly reducing <strong>costly silicon respins</strong> and accelerating <strong>time-to-market</strong> for our products.
          </li>
        </ul>
        
        {/* Stage 3.4 */}
        <div className="mt-12 mb-4">
          <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
            3.4 Stage 4: Physical Design &amp; PPA Optimization
          </h2>
        </div>
        <div className="mt-8 mb-4 flex items-center">
          <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
        </div>
        <p>The <strong>physical design stage</strong>—encompassing floorplanning, placement, routing, and clock tree synthesis—involves a solution space with a <strong>near-infinite number of choices</strong> for optimal <strong>Power, Performance, and Area (PPA)</strong>. Manually tuning the hundreds of parameters within complex commercial EDA tools to find the global optimum is a <strong>&quot;black art&quot;</strong> that is humanly impossible to perfect, leading to <strong>sub-optimal designs</strong> and <strong>extended convergence times</strong>.</p>
        
        <div className="mt-8 mb-4 flex items-center">
          <SlidersHorizontal className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Agentic Workflow: Autonomous Reinforcement Learning (RL) for Global PPA Excellence</h3>
        </div>
        <p>To unlock unprecedented PPA optimization and design convergence speed, an autonomous <strong>PPA Optimization Agent</strong> will be deployed. This agent is the intelligent orchestrator of our <strong>Physical Design & Optimization Agents</strong> (from Section 2.2) and is based on the principles of industry-leading AI-driven tools like <strong>Synopsys DSO.ai</strong> and <strong>Cadence Cerebrus</strong>, but integrated within our comprehensive MAS:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            The <strong>PPA Optimization Agent</strong> uses sophisticated <strong>reinforcement learning</strong> to holistically and autonomously explore the vast PPA solution space. It treats the entire physical design EDA toolchain (orchestrating the <strong>Synthesis Agent, Physical Implementation Agent, and Timing Closure Agent</strong> from Section 2.2 via the MCP Server&apos;s Tool Abstraction Layer) as its <strong>&quot;environment.&quot;</strong>
          </li>
          <li>
            The agent&apos;s <strong>&quot;actions&quot;</strong> consist of intelligently adjusting hundreds of critical tool settings, design constraints (e.g., placement density, routing layers, clock tree balance), and floorplan parameters.
          </li>
          <li>
            The <strong>&quot;reward&quot;</strong> it receives after each iterative run is a meticulously calculated score derived from the resulting comprehensive PPA metrics (<strong>timing closure, dynamic and static power consumption, silicon area utilization, routing congestion</strong>, and even early <strong>manufacturing yield predictions</strong> from the Yield Prediction Agent – introduced below).
          </li>
          <li>
            By running <strong>thousands of these automated iterations</strong>, facilitated by rapid, AI-accelerated estimations, the RL agent learns complex, non-obvious, and often counter-intuitive relationships between input parameters and final outcomes. It continuously discovers <strong>novel optimization strategies</strong> that consistently outperform even seasoned human experts, pushing our designs to the <strong>true Pareto-optimal frontier of PPA</strong>, delivering highly competitive and differentiated silicon.
          </li>
          <li>
            The <strong>Supervisor agent</strong> meticulously tracks the convergence of the PPA Optimization Agent, ensuring that it remains within defined guardrails and achieves overall project goals, while the <strong>Human-in-the-Loop Interface</strong> provides transparent dashboards for human experts to monitor progress and intervene for strategic adjustments.
          </li>
        </ul>

        {/* Stage 3.5 */}
        <div className="mt-12 mb-4">
          <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
            3.5 Stage 5: Manufacturing &amp; Post-Silicon Validation
          </h2>
        </div>
        <div className="mt-8 mb-4 flex items-center">
          <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
        </div>
        <p>Bridging the gap between highly optimized <strong>pre-silicon design data</strong> and the realities of <strong>physical manufacturing and silicon performance</strong> involves predicting <strong>manufacturing yield</strong>, accurately detecting <strong>microscopic physical defects</strong>, and rigorously validating the performance of the <strong>actual hardware</strong> in a timely manner. This phase is crucial for product quality and continuous improvement.</p>
        
        <div className="mt-8 mb-4 flex items-center">
          <ClipboardCheck className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Agentic Workflow: AI-Enhanced Quality Assurance &amp; Predictive Feedback Loop</h3>
        </div>
        <p>This final stage integrates AI to ensure manufacturing quality and create a powerful feedback loop for future designs:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            A Yield Prediction Agent (a Specialized Analysis Agent not explicitly detailed in 2.2 but fitting within that category&apos;s scope) will leverage advanced <strong>machine learning models</strong> trained on vast datasets of historical wafer-level data, process variation statistics, and test results. This agent identifies design features, layout structures, or even specific process parameters that are statistically likely to cause <strong>manufacturing problems or yield loss</strong>. This critical, proactive feedback is passed back to the PPA Optimization Agent in Stage 4, directly incorporating <strong>manufacturability and yield considerations</strong> into the iterative PPA equation from the earliest physical design stages.
          </li>
          <li>
            A Defect Detection Agent (another Specialized Analysis Agent), utilizing <strong>AI-powered visual inspection systems</strong> and advanced computer vision algorithms, analyzes high-resolution wafer scans and in-line process monitoring data. It identifies, classifies, and localizes <strong>microscopic physical defects</strong> (e.g., shorts, opens, particles) with a speed and accuracy far exceeding traditional human capabilities or simpler automated optical inspection systems. This dramatically accelerates <strong>quality control and root cause analysis</strong> in the fab.
          </li>
          <li>
            A Post-Silicon Validation Agent (a distinct Specialized Analysis Agent) automates the complex <strong>bring-up and characterization process</strong> for prototype chips and first silicon. It dynamically orchestrates lab equipment, runs comprehensive diagnostics, collects <strong>detailed performance data</strong> from the actual silicon (e.g., power consumption under various workloads, maximum operating frequency, signal integrity), and automatically correlates any discrepancies against the meticulously documented <strong>pre-silicon simulation results and PPA targets</strong>. This creates a final, invaluable <strong>feedback loop</strong> directly into our <strong>Knowledge Graph Agent</strong> (within the Central Intelligence Hub), continuously refining our verification models, simulation methodologies, and predictive AI models for all future chip design projects. This ensures continuous learning and improvement in our design and manufacturing processes.
          </li>
        </ul>
      </article>
    </SubPageLayout>
  );
}
