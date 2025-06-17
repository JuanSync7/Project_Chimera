
"use client";
import React from 'react';
import Header from '@/components/chimera/Header';
import Footer from '@/components/chimera/Footer';
import MobileMenu from '@/components/chimera/MobileMenu';
import { NAV_LINKS } from '@/lib/chimera/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AiPipelinePage() {
  const activeSection = "";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const toggleMobileMenu = React.useCallback(() => setIsMobileMenuOpen(prev => !prev), []);
  const closeMobileMenu = React.useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        navLinks={NAV_LINKS}
        activeSection={activeSection}
        onMobileMenuToggle={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <MobileMenu
        navLinks={NAV_LINKS}
        isMobileMenuOpen={isMobileMenuOpen}
        onLinkClick={closeMobileMenu}
        activeSection={activeSection}
      />
      <main className="flex-grow container mx-auto px-6 py-12 pt-24 md:pt-32">
        <div className="mb-12">
          <Link href="/" passHref>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              &larr; Back to Project Overview
            </Button>
          </Link>
        </div>

        <article className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-10">
            Section 3: Full-Stack AI Integration: Agentic Workflows Across the Semiconductor Pipeline
          </h1>
          <p>The true power of the proposed multi-agent architecture is realized when it is applied holistically across the entire semiconductor design pipeline. This section details the stage-by-stage implementation of agentic workflows, transforming each phase from a series of manual, siloed tasks into an integrated, AI-driven process. For each stage, the key challenges are identified, the agentic solution is described, and the expected business outcomes are quantified.</p>
          <p>This creates a &quot;digital thread&quot; of intent and context that flows from initial concept to final silicon, breaking down traditional barriers between design disciplines. In a traditional flow, critical context is often lost at handoffs between teams. The verification team receives an RTL drop, and the physical design team receives a netlist, but the underlying design intent can become fragmented. In the proposed MAS, the Supervisor agent maintains the complete state and goals for the project. When it delegates a task, it passes not just the data but the entire context managed by the MCP Server&apos;s CAG component. This shared context allows downstream agents to make more intelligent, globally-aware decisions, drastically reducing errors from miscommunication and enabling more optimal end-to-end solutions.</p>

          <h2 className="text-3xl font-semibold text-white !mt-12 !mb-6 border-b border-slate-700 pb-2">
            3.1 Stage 1: System Specification &amp; Architecture
          </h2>
          <p><strong>Challenge:</strong> The initial phase of design is often hampered by ambiguous requirements expressed in natural language and the impossibly vast search space of potential high-level architectures.</p>
          <p><strong>Agentic Workflow:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>A <strong>Spec Analyst Agent</strong> will engage with product managers and system architects. Using RAG, it will retrieve data on similar past projects to identify potential ambiguities and constraints. Using CAG, it will maintain conversational context to iteratively refine high-level requirements into a formal, machine-readable specification.</li>
            <li>This formal spec is then passed to a <strong>Design Space Exploration (DSE) Agent</strong>. This agent, powered by reinforcement learning, will autonomously generate and evaluate thousands of high-level architectural variants (e.g., exploring different memory hierarchies, bus fabrics, or core configurations). To accelerate this process, it will leverage AI models that can rapidly estimate PPA from high-level descriptions without needing to run a full, time-consuming synthesis, achieving up to a 10x improvement in exploration speed.</li>
          </ul>
          <p>The Supervisor agent orchestrates this process, presenting the top 3-5 candidate architectures to the human architect, complete with detailed trade-off analyses, for the final strategic decision.</p>

          <h2 className="text-3xl font-semibold text-white !mt-12 !mb-6 border-b border-slate-700 pb-2">
            3.2 Stage 2: RTL Design &amp; High-Level Synthesis (HLS)
          </h2>
          <p><strong>Challenge:</strong> The manual creation of Register-Transfer Level (RTL) code in Hardware Description Languages (HDLs) like Verilog and VHDL is notoriously time-consuming, tedious, and prone to subtle human error. While LLMs can generate HDL code, they are often unreliable, producing code that is syntactically correct but functionally flawed.</p>
          <p><strong>Agentic Workflow: Test-Driven Development (TDD) with Agentic Coding:</strong></p>
          <p>To address the reliability gap of generative AI for hardware, a rigorous TDD workflow will be implemented, inspired by best practices for agentic coding.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>The human engineer provides a high-level functional description for a design module and its test requirements.</li>
            <li>A <strong>Testbench Generator Agent</strong> is tasked with writing the functional tests and assertions first. This creates a clear, unambiguous, and verifiable definition of &quot;correctness&quot;.</li>
            <li>The Supervisor confirms the generated tests with the engineer.</li>
            <li>A <strong>Verilog/VHDL Coder Agent</strong> is then instructed with a single, clear goal: write RTL code that makes the pre-defined tests pass. The agent enters an iterative loop: it generates code, the Supervisor invokes the simulation tools to run the tests, the agent analyzes the failures, and then refactors the code to fix the bugs. This continues until all tests pass.</li>
          </ul>
          <p>This TDD loop directly mitigates the primary weakness of using LLMs for HDL generation by grounding the creative, probabilistic nature of the LLM in the deterministic, verifiable world of functional tests. The system can also leverage agents capable of code conversion between different HDLs as needed.</p>

          <h2 className="text-3xl font-semibold text-white !mt-12 !mb-6 border-b border-slate-700 pb-2">
            3.3 Stage 3: Verification &amp; Validation
          </h2>
          <p><strong>Challenge:</strong> Functional verification is the single largest bottleneck in modern chip design, consuming up to 70% of total project resources. Even with this massive effort, traditional simulation-based methods can miss deep, corner-case bugs that lead to costly silicon respins.</p>
          <p><strong>Agentic Workflow: The AIvril Verification-in-the-Loop Framework:</strong></p>
          <p>This plan proposes the implementation of a verification system modeled on the AIvril framework, which uses a dedicated multi-agent team for automated code correction and functional verification.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>AutoReview Agent:</strong> This agent acts as an automated code reviewer. It uses static analysis, linting tools, and formal methods to check the generated RTL for syntax errors, style guide violations, and non-synthesizable constructs. It provides precise, targeted feedback to the Coder Agent for immediate correction, creating a tight, fast feedback loop.</li>
            <li><strong>AutoDV (Automatic Design Verification) Agent:</strong> This agent is responsible for functional correctness. It uses formal verification tools to mathematically prove properties and identify deep bugs that simulation cannot find. It also analyzes simulation coverage reports to identify untested areas of the design. It then intelligently generates new, targeted test cases to close these coverage holes, creating a closed-loop system for continuous verification improvement.</li>
          </ul>
          <p>This &quot;verification-in-the-loop&quot; approach is designed to catch virtually all bugs before physical design begins, moving the industry closer to the goal of &quot;first-time-right&quot; silicon.</p>

          <h2 className="text-3xl font-semibold text-white !mt-12 !mb-6 border-b border-slate-700 pb-2">
            3.4 Stage 4: Physical Design &amp; PPA Optimization
          </h2>
          <p><strong>Challenge:</strong> The physical design stage—including floorplanning, placement, and routing—involves a solution space with a near-infinite number of choices. Manually tuning the parameters of EDA tools to find the optimal PPA is a black art that is humanly impossible to perfect.</p>
          <p><strong>Agentic Workflow: Autonomous Reinforcement Learning (RL):</strong></p>
          <p>An autonomous <strong>PPA Optimization Agent</strong> will be deployed, based on the principles of industry-leading tools like Synopsys DSO.ai and Cadence Cerebrus. This agent uses reinforcement learning to holistically and autonomously explore the vast PPA solution space. It treats the physical design EDA tool as its &quot;environment.&quot;</p>
          <p>The agent&apos;s &quot;actions&quot; consist of making intelligent adjustments to hundreds of tool settings, design constraints, and floorplan parameters. The &quot;reward&quot; it receives after each run is a score calculated from the resulting PPA metrics (timing, power, area, congestion) and manufacturing yield predictions.</p>
          <p>By running thousands of these automated iterations, the RL agent learns complex, non-obvious relationships between parameters and outcomes. It discovers novel optimization strategies that outperform even seasoned human experts, pushing the design to the true Pareto-optimal frontier of PPA.</p>

          <h2 className="text-3xl font-semibold text-white !mt-12 !mb-6 border-b border-slate-700 pb-2">
            3.5 Stage 5: Manufacturing &amp; Post-Silicon Validation
          </h2>
          <p><strong>Challenge:</strong> Bridging the gap between pre-silicon design and physical reality involves predicting manufacturing yield, detecting microscopic physical defects, and validating the performance of the actual hardware.</p>
          <p><strong>Agentic Workflow:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>A <strong>Yield Prediction Agent</strong> will use machine learning models trained on historical wafer-level data to identify design features that are likely to cause manufacturing problems. This feedback is passed back to the PPA Optimization Agent, incorporating manufacturability directly into the PPA equation.</li>
            <li>A <strong>Defect Detection Agent</strong> will leverage AI-powered visual inspection systems to analyze wafer scans, identifying and classifying defects with a speed and accuracy far exceeding human capabilities.</li>
            <li>A <strong>Post-Silicon Validation Agent</strong> will automate the bring-up process for prototype chips. It will run diagnostics, collect performance data from the silicon, and automatically correlate any discrepancies against the pre-silicon simulation results. This creates a final feedback loop that refines the verification models and simulators for all future projects.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-white !mt-12 !mb-6 border-b border-slate-700 pb-2">
            Pipeline Summary Table
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700">
              <thead className="bg-slate-800/50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">Design Stage</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">Key Challenge</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">AI Agent(s) & Role</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">Core AI Technique</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">Key Tools/Frameworks</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">Primary Business Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700 bg-slate-800/30">
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">1. Spec & Architecture</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Ambiguous requirements; vast design space</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Spec Analyst Agent; DSE Agent</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">RAG/CAG; Reinforcement Learning (RL)</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">LangGraph, Custom Python</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Reduced spec ambiguity; 10x faster DSE; Architectures optimized for PPA from day one</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">2. RTL Design & HLS</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Slow, error-prone manual coding; unreliable GenAI output</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Testbench Generator Agent; Verilog/VHDL Coder Agent</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Generative AI; Test-Driven Development (TDD)</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Claude Code-like models, LangGraph</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Improved RTL quality and reliability; Reduced manual coding effort; Faster module development</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">3. Verification & Validation</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Largest time/resource bottleneck; missed corner-case bugs</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">AutoReview Agent; AutoDV Agent</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Static Analysis; Formal Methods; Coverage-driven test generation</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">AIvril-inspired framework, JasperGold</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Up to 70% reduction in debug time; Higher confidence; Fewer silicon respins</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">4. Physical Design & PPA</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Impossible to manually find optimal PPA in massive solution space</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">PPA Optimization Agent</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Reinforcement Learning (RL)</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Synopsys DSO.ai, Cadence Cerebrus</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Up to 15-40% power reduction; Smaller die size; Pushing the Pareto frontier</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">5. Post-Silicon</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Predicting yield; detecting physical defects; correlating pre/post-silicon data</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Yield Prediction Agent; Defect Detection Agent; Validation Agent</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Predictive Analytics; Anomaly Detection; Automated Correlation</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Custom ML Models, AI-driven visual inspection</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Improved manufacturing yield; Reduced validation cycle time; More accurate models for future projects</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
