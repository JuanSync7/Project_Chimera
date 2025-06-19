// src/app/roadmap-details/phase-3-run/page.tsx
"use client";
import React from 'react';
import SubPageLayout from '@/components/chimera/SubPageLayout';
import { Target, FileText } from 'lucide-react';

// Import Part components
import Part1StrategicClarification from '@/components/chimera/roadmap-phase-3/Part1StrategicClarification';
import Part2FullStackAutonomy from '@/components/chimera/roadmap-phase-3/Part2FullStackAutonomy';
import Part3DetailedStepByStepPlan from '@/components/chimera/roadmap-phase-3/Part3DetailedStepByStepPlan';
import Part4CompanyGrowthCostPerformance from '@/components/chimera/roadmap-phase-3/Part4CompanyGrowthCostPerformance';
import Part5DeployedAgentsNewHires from '@/components/chimera/roadmap-phase-3/Part5DeployedAgentsNewHires';
import Part6LearningFromEDAIndustry from '@/components/chimera/roadmap-phase-3/Part6LearningFromEDAIndustry';

export default function RoadmapPhase3RunPage() {
  return (
    <SubPageLayout backButtonHref="/roadmap-details" backButtonText="&larr; Back to Roadmap Overview">
      <article className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6">
        <div className="flex flex-col items-center text-center mb-12">
          <Target className="h-16 w-16 text-fuchsia-400 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-fuchsia-400 !mb-2 md:leading-tight">
            Roadmap: Phase 3 - Run
          </h1>
          <p className="text-2xl text-slate-400">Full-Stack Autonomy & Market Leadership (Q1 2029 - Q4 2030)</p>
        </div>

        <p className="italic text-center text-lg text-slate-400 !mt-0">
          Phase Overview: If Phase 1 built the AI agents and Phase 2 taught them to work together, Phase 3: Run
          is about achieving a state of Human-AI Symbiosis. The AI pipeline becomes a proactive, learning partner
          in the chip design process, moving beyond simple automation to intelligent optimization and strategic
          contribution. This is the stage where we transition from using AI as a tool to integrating AI as a core
          pillar of the company&apos;s growth, innovation, and competitive advantage.
        </p>

        {/* Executive Overview Section */}
        <div className="mt-16 mb-4">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-fuchsia-400 mr-3 flex-shrink-0" />
            <h2 className="text-3xl font-semibold text-fuchsia-400 !m-0 !border-b-0 !pb-0">
              Executive Overview: Project Chimera Phase 3
            </h2>
          </div>
        </div>
        <p>
          Phase 3 of Project Chimera marks the transition from developing AI capabilities to achieving full-scale{' '}
          <strong>Human-AI Symbiosis</strong> in chip design. This &quot;Run&quot; phase is not merely about
          using AI as a tool but about integrating it as a core pillar of our innovation, growth, and competitive
          strategy. The objective is to create a proactive, learning partnership between our engineers and a
          sophisticated AI system that automates and optimizes the entire design workflow.
        </p>
        <p>The strategic foundation of Phase 3 rests on five key pillars:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Seamless Workflow Orchestration:</strong> We will integrate the entire design pipeline, from
            specification to final layout, into a single, automated workflow. This will be managed by a{' '}
            <strong>Hierarchical Supervisor</strong> that orchestrates our suite of commercial EDA tools,
            eliminating the costly &quot;integration tax&quot; and manual handoffs that currently slow down
            development. Success will be measured by achieving over 99% automation in the end-to-end design flow
            and reducing total design runtime from months to under two weeks.
          </li>
          <li>
            <strong>Generative IP Creation:</strong> The system will move beyond optimization to active creation.
            Advanced AI agents will be capable of generating novel architectural suggestions and producing complex,
            verified silicon IP blocks (like RISC-V cores) from high-level specifications in under 24 hours.
            This transforms IP from a potential bottleneck into a rapidly customizable asset.
          </li>
          <li>
            <strong>The &quot;Self-Hosting&quot; Flywheel:</strong> A key milestone of this phase is to use the
            Project Chimera system to design its own next-generation AI accelerator chips. This creates a powerful,
            compounding feedback loop where our AI builds the specialized hardware it will run on in the future,
            accelerating its own evolution and creating an unmatched competitive advantage. The primary KPI is to
            tape out a functional AI accelerator that outperforms its predecessor by over 30% on key
            performance-per-watt benchmarks.
          </li>
          <li>
            <strong>Continuous Learning from Silicon:</strong> The AI pipeline will be designed to learn from every
            project. By creating a post-silicon feedback loop, the system will analyze real-world performance data
            from manufactured chips to continuously refine its internal models, ensuring it becomes more accurate
            and effective with each design cycle.
          </li>
          <li>
            <strong>Evolving the Engineering Role and Business Model:</strong> This phase will fundamentally reshape
            our workforce and business strategy.
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>
                <strong>Talent:</strong> We will focus on hiring and training a new class of {' '}
                <strong>AI-Hybrid Engineers</strong> who possess both deep chip design fundamentals and AI
                fluency. This is critical for managing, debugging, and providing the essential human judgment
                needed to guide the AI system.
              </li>
              <li>
                <strong>Business Model:</strong> As AI drastically reduces engineering hours, we will transition
                from a time-based billing model to <strong>outcome-based pricing</strong>. This aligns our revenue
                with the tangible value we deliver to clients—such as superior PPA, accelerated time-to-market,
                and reduced NRE costs from eliminating respins.
              </li>
              <li>
                <strong>Future Commercialization:</strong> The ultimate goal is to productize our innovations. The
                generative IP capabilities will be developed into an <strong>IP-as-a-Service (IPaaS)</strong>{' '}
                offering, while the entire Chimera orchestration system has the potential to be licensed as a{' '}
                <strong>Platform-as-a-Service (PaaS)</strong>, creating new, high-margin revenue streams.
              </li>
            </ul>
          </li>
        </ol>
        <p>
          In summary, Phase 3 is designed to deliver transformative ROI by drastically reducing design time,
          improving chip performance beyond human capability, and slashing non-recurring engineering costs. By
          successfully executing this plan, we will not only optimize our internal design processes but also
          position the company as a leader in AI-driven design and create new, scalable lines of business.
        </p>

        {/* Render Part Components */}
        <Part1StrategicClarification />
        <Part2FullStackAutonomy />
        <Part3DetailedStepByStepPlan />
        <Part4CompanyGrowthCostPerformance />
        <Part5DeployedAgentsNewHires />
        <Part6LearningFromEDAIndustry />

      </article>
    </SubPageLayout>
  );
}
