// src/components/chimera/roadmap-phase-3/Part3DetailedStepByStepPlan.tsx
import React from 'react';
import SectionCard from '@/components/chimera/SectionCard'; // Import SectionCard
import {
  GanttChartSquare,
  Link2,
  Lightbulb,
  Cpu,
  Repeat,
  DatabaseZap,
  FileText,
  Settings2,
  ListChecks,
} from 'lucide-react';

const Part3DetailedStepByStepPlan: React.FC = () => {
  return (
    <>
      <div className="mt-24 mb-4">
        <div className="flex items-center">
          <GanttChartSquare className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
          <h2 className="text-3xl font-semibold text-primary gradient-text !m-0 !border-b-0 !pb-0">
            Part 3: Detailed Step-by-Step Plan for Phase 3
          </h2>
        </div>
      </div>
      <p>
        This section outlines the execution plan for Phase 3, breaking down the high-level goals into concrete
        steps with defined methodologies and measurable Key Performance Indicators (KPIs). The plan is designed
        to be iterative, with each step building upon the last to create a compounding capability advantage.
      </p>

      {/* Step 1 */}
      <div className="mt-8 mb-4">
        <div className="flex items-center">
          <Link2 className="h-7 w-7 text-purple-400 mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-purple-400 !m-0 !border-b-0 !pb-0">
            Step 1. Seamless Workflow Integration &amp; Orchestration
          </h3>
        </div>
      </div>
      <div className="mt-4 mb-2 flex items-center">
        <FileText className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
        <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">Description:</h4>
      </div>
      <p>
        Integrate all stages of the AI-Powered Design Pipeline into a single, seamless workflow. This workflow
        is orchestrated by a Hierarchical Supervisor architecture that interacts with a central Model Context
        Protocol (MCP) for data management. This ensures a fluid, automated handoff from one design stage to
        the next, eliminating the &quot;integration tax&quot; of multi-vendor toolchains.
      </p>
      <div className="mt-4 mb-2 flex items-center">
        <Settings2 className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
        <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">Methodology:</h4>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong className="text-white font-semibold">Hierarchical Supervisor:</strong> Implement a central AI
          orchestrator to manage task-specific agents, plan sequences, and make decisions based on tool
          outputs. This supervisor retrieves design data and IP information from the MCP.
        </li>
        <li>
          <strong className="text-white font-semibold">Model Context Protocol (MCP):</strong> Establish the MCP
          as the centralized, hierarchical data management system, acting as the single source of truth (SSoT)
          for the entire IP portfolio and design data.
        </li>
        <li>
          <strong className="text-white font-semibold">Event-Driven Architecture (EDA):</strong> Build the
          system on an event-driven backbone (e.g., using Kafka or RabbitMQ) to decouple agents and tools.
          This allows for flexible, asynchronous communication and makes the system resilient to changes in
          individual tools.
        </li>
        <li>
          <strong className="text-white font-semibold">Standardized API Contracts:</strong> Define and enforce
          strict API contracts for all agent-tool interactions, using standards like AsyncAPI to ensure
          reliable data exchange and governance.
        </li>
      </ul>
      <SectionCard
        className="bg-transparent border border-white/80 shadow-none mt-6 py-4 px-5"
        description={
          <>
            <div className="mb-2 flex items-center">
              <ListChecks className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
              <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">
                Key Objectives &amp; KPIs:
              </h4>
            </div>
            <p className="text-sm">
              <strong className="text-white font-semibold">Objective:</strong> Achieve &gt;99% automated flow for
              a complete design from spec to layout, with verifiable and repeatable results.
            </p>
            <p className="!mt-2 !mb-1 text-sm"><strong className="text-white font-semibold">KPIs:</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong className="text-slate-100">Automation Rate:</strong> Percentage of the end-to-end design
                flow executed without manual intervention. <strong>Target: &gt;99%.</strong>
              </li>
              <li>
                <strong className="text-slate-100">Manual Intervention Points:</strong> Number of required manual
                handoffs in the workflow. <strong>Target: Reduction of &gt;95% from baseline.</strong>
              </li>
              <li>
                <strong className="text-slate-100">Total Autonomous Runtime:</strong> End-to-end wall-clock time
                for a full design. <strong>Target: Reduce from months to &lt; 2 weeks.</strong>
              </li>
              <li>
                <strong className="text-slate-100">Workflow Reliability:</strong> Successful completion rate of
                autonomous runs. <strong>Target: &gt;98%.</strong>
              </li>
            </ul>
          </>
        }
      />

      {/* Step 2 */}
      <div className="mt-8 mb-4">
        <div className="flex items-center">
          <Lightbulb className="h-7 w-7 text-purple-400 mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-purple-400 !m-0 !border-b-0 !pb-0">
            Step 2. Emergent Architectural Suggestion
          </h3>
        </div>
      </div>
      <div className="mt-4 mb-2 flex items-center">
        <FileText className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
        <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">Description:</h4>
      </div>
      <p>
        Empower the system to autonomously explore the design space and suggest novel architectures and
        micro-architectural improvements. Based on its holistic view and historical data, the AI will
        identify new opportunities for optimization that humans might miss.
      </p>
      <div className="mt-4 mb-2 flex items-center">
        <Settings2 className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
        <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">Methodology:</h4>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong className="text-white font-semibold">Generative AI for Architecture:</strong> Utilize Large
          Language Models (LLMs) and Diffusion Models, fine-tuned on architectural data, to generate novel
          design concepts from high-level requirements.
        </li>
        <li>
          <strong className="text-white font-semibold">Automated Design Space Exploration (DSE):</strong>{' '}
          Implement a DSE framework that allows the AI to systematically explore trade-offs between
          different architectural choices.
        </li>
        <li>
          <strong className="text-white font-semibold">Evolutionary Algorithms &amp; Novelty Search:</strong>{' '}
          Employ evolutionary algorithms to guide the search for high-performing architectures. Integrate a
          novelty metric (e.g., k-nearest neighbor distance in a defined behavior space) to reward the
          discovery of non-intuitive and structurally different solutions.
        </li>
      </ul>
      <SectionCard
        className="bg-transparent border border-white/80 shadow-none mt-6 py-4 px-5"
        description={
          <>
            <div className="mb-2 flex items-center">
              <ListChecks className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
              <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">
                Key Objectives &amp; KPIs:
              </h4>
            </div>
            <p className="text-sm">
              <strong className="text-white font-semibold">Objective:</strong> Generate at least one novel,
              high-performance architectural component that is reviewed, validated, and adopted into a
              production design.
            </p>
            <p className="!mt-2 !mb-1 text-sm"><strong className="text-white font-semibold">KPIs:</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong className="text-slate-100">Architect Acceptance Rate:</strong> Percentage of AI-suggested
                architectural improvements accepted by human architects for further evaluation.{' '}
                <strong>Target: &gt;20%.</strong>
              </li>
              <li>
                <strong className="text-slate-100">Novelty Score:</strong> A computational metric assessing the
                structural difference of generated architectures from the training data and known designs. Target:
                Achieve a portfolio of architectures with novelty scores in the top decile.
              </li>
              <li>
                <strong className="text-slate-100">Simulated PPA Improvement:</strong> PPA metrics of AI-suggested
                architectures must show a &gt;10% improvement on the PPA frontier compared to the human-designed
                baseline for a given benchmark project.
              </li>
            </ul>
          </>
        }
      />

      {/* Step 3 */}
      <div className="mt-8 mb-4">
        <div className="flex items-center">
          <Cpu className="h-7 w-7 text-purple-400 mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-purple-400 !m-0 !border-b-0 !pb-0">
            Step 3. Generative IP Creation
          </h3>
        </div>
      </div>
      <div className="mt-4 mb-2 flex items-center">
        <FileText className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
        <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">Description:</h4>
      </div>
      <p>
        Develop advanced AI-driven IP generation tools. This allows the system to rapidly create and customize
        complex, verified silicon IP blocks (e.g., memory controllers, RISC-V cores) based on high-level
        specifications, drastically reducing design time and ensuring IP is an asset, not a bottleneck.
      </p>
      <div className="mt-4 mb-2 flex items-center">
        <Settings2 className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
        <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">Methodology:</h4>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong className="text-white font-semibold">AI-Assisted RTL Generation:</strong> Use LLMs
          fine-tuned on Verilog/VHDL to generate synthesizable RTL code from natural language
          specifications or Python models.
        </li>
        <li>
          <strong className="text-white font-semibold">Automated Verification Suite Generation:</strong> The
          AI will generate corresponding UVM testbenches, formal verification assertions, and coverage models
          to ensure the correctness of the generated IP.
        </li>
        <li>
          <strong className="text-white font-semibold">Automated IP Management:</strong> Use AI tools to manage
          the IP lifecycle, including documentation, versioning, and prior art analysis to ensure freedom to
          operate.
        </li>
      </ul>
      <SectionCard
        className="bg-transparent border border-white/80 shadow-none mt-6 py-4 px-5"
        description={
          <>
            <div className="mb-2 flex items-center">
              <ListChecks className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
              <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">
                Key Objectives &amp; KPIs:
              </h4>
            </div>
            <p className="text-sm">
              <strong className="text-white font-semibold">Objective:</strong> Create a library of 10+ core IP
              blocks (e.g., memory controllers, RISC-V cores, interconnect fabrics) generated and maintained by
              the AI system.
            </p>
            <p className="!mt-2 !mb-1 text-sm"><strong className="text-white font-semibold">KPIs:</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong className="text-slate-100">Time-to-Generate &amp; Verify Custom IP:</strong> Time from
                high-level specification to a fully verified, synthesizable IP block.{' '}
                <strong>Target: &lt; 24 hours.</strong>
              </li>
              <li>
                <strong className="text-slate-100">First-Pass Verification Rate:</strong> Percentage of generated IP
                blocks that pass verification without manual code modification. <strong>Target: &gt;90%.</strong>
              </li>
              <li>
                <strong className="text-slate-100">IP Quality (Bug Density):</strong> Number of functional bugs
                discovered per KLOC post-generation. Target: &lt;0.1 bugs/KLOC, outperforming human-coded
                equivalents.
              </li>
              <li>
                <strong className="text-slate-100">Resource Utilization:</strong> PPA metrics of the generated IP
                must be within 5% of hand-optimized equivalents.
              </li>
            </ul>
          </>
        }
      />

      {/* Step 4 */}
      <div className="mt-8 mb-4">
        <div className="flex items-center">
          <Repeat className="h-7 w-7 text-purple-400 mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-purple-400 !m-0 !border-b-0 !pb-0">
            Step 4. &quot;Self-Hosting&quot;: AI Designing AI Chips
          </h3>
        </div>
      </div>
      <div className="mt-4 mb-2 flex items-center">
        <FileText className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
        <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">Description:</h4>
      </div>
      <p>
        Initiate the first projects to design novel AI accelerator chips using the Project Chimera system
        itself. This closes the symbiotic AI-silicon loop, using our AI to build the specialized hardware it
        will run on in the future, creating a powerful flywheel effect.
      </p>
      <div className="mt-4 mb-2 flex items-center">
        <Settings2 className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
        <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">Methodology:</h4>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong className="text-white font-semibold">Capstone Integration Project:</strong> This step
          leverages all previously developed capabilities (workflow orchestration, architectural suggestion,
          IP generation) in a single, end-to-end design project.
        </li>
        <li>
          <strong className="text-white font-semibold">Full Stack Autonomous Run:</strong> The human team
          will provide the high-level specifications for a next-generation AI accelerator. The Chimera system
          will execute the entire design flow, from architectural exploration to GDSII tape-out, with human
          engineers acting as supervisors and strategic decision-makers.
        </li>
      </ul>
      <SectionCard
        className="bg-transparent border border-white/80 shadow-none mt-6 py-4 px-5"
        description={
          <>
            <div className="mb-2 flex items-center">
              <ListChecks className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
              <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">
                Key Objectives &amp; KPIs:
              </h4>
            </div>
            <p className="text-sm">
              <strong className="text-white font-semibold">Objective:</strong> Tape out a functional AI accelerator
              chip designed by Chimera that outperforms its predecessor by &gt;30% on key benchmarks.
            </p>
            <p className="!mt-2 !mb-1 text-sm"><strong className="text-white font-semibold">KPIs:</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong className="text-slate-100">Performance-per-Watt (TOPS/Watt):</strong> The final silicon
                must demonstrate a &gt;30% improvement in energy efficiency on target AI workloads compared to the
                previous generation.
              </li>
              <li>
                <strong className="text-slate-100">Time-to-Tape-Out:</strong> Total project duration from
                specification to tape-out. <strong>Target: &lt; 6 months, a &gt;50% reduction from
                traditional cycles.</strong>
              </li>
              <li>
                <strong className="text-slate-100">First-Silicon Success Rate:</strong> The AI-designed chip must
                be fully functional with the first batch of silicon, eliminating the need for costly respins.{' '}
                <strong>Target: 100%.</strong>
              </li>
              <li>
                <strong className="text-slate-100">NRE Cost Reduction:</strong> Quantifiable reduction in
                non-recurring engineering costs due to automation and avoidance of respins.{' '}
                <strong>Target: &gt;40%.</strong>
              </li>
            </ul>
          </>
        }
      />

      {/* Step 5 */}
      <div className="mt-8 mb-4">
        <div className="flex items-center">
          <DatabaseZap className="h-7 w-7 text-purple-400 mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-purple-400 !m-0 !border-b-0 !pb-0">
            Step 5. Continuous Learning &amp; Post-Silicon Feedback
          </h3>
        </div>
      </div>
      <div className="mt-4 mb-2 flex items-center">
        <FileText className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
        <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">Description:</h4>
      </div>
      <p>
        The AI pipeline will learn from every project. It will analyze the performance of its own designs
        post-silicon and use that real-world data to refine its internal models for driving the EDA tools,
        ensuring it gets smarter and more accurate over time.
      </p>
      <div className="mt-4 mb-2 flex items-center">
        <Settings2 className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
        <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">Methodology:</h4>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong className="text-white font-semibold">Data Ingestion Pipeline:</strong> Build an automated
          pipeline to collect and process post-silicon data, including wafer-level electrical test results,
          characterization data across PVT corners, and in-field performance telemetry.
        </li>
        <li>
          <strong className="text-white font-semibold">AI Model Retraining:</strong> Use the curated
          post-silicon data to continuously retrain and fine-tune the AI agents, particularly the PPA
          Optimization Agent. This closes the loop between simulation and silicon reality.
        </li>
        <li>
          <strong className="text-white font-semibold">Knowledge Transfer:</strong> Learnings from one
          project (e.g., optimal tool settings for a 3nm process) are automatically incorporated and
          applied to subsequent projects.
        </li>
      </ul>
      <SectionCard
        className="bg-transparent border border-white/80 shadow-none mt-6 py-4 px-5"
        description={
          <>
            <div className="mb-2 flex items-center">
              <ListChecks className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
              <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">
                Key Objectives &amp; KPIs:
              </h4>
            </div>
            <p className="text-sm">
              <strong className="text-white font-semibold">Objective:</strong> Demonstrate a measurable improvement
              in the AI&apos;s predictive accuracy and design optimization capability with each completed project.
            </p>
            <p className="!mt-2 !mb-1 text-sm"><strong className="text-white font-semibold">KPIs:</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong className="text-slate-100">Model Predictive Accuracy:</strong> Correlation between the
                AI&apos;s pre-silicon PPA predictions and actual post-silicon measurements.{' '}
                <strong>Target: Improve correlation coefficient by &gt;15% per project cycle.</strong>
              </li>
              <li>
                <strong className="text-slate-100">PPA Optimization Improvement:</strong> For a fixed benchmark
                design, the retrained AI should achieve a &gt;5% improvement on the PPA frontier compared to its
                pre-retraining state.
              </li>
              <li>
                <strong className="text-slate-100">Bug Escape Rate:</strong> Rate of functional bugs discovered in
                post-silicon validation that were missed by pre-silicon verification.{' '}
                <strong>Target: Decrease by &gt;25% per project.</strong>
              </li>
              <li>
                <strong className="text-slate-100">Time-to-Insight:</strong> Time required for the AI to analyze
                post-silicon data and generate actionable recommendations for the next design cycle.{' '}
                <strong>Target: &lt; 48 hours.</strong>
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default Part3DetailedStepByStepPlan;
