
// src/app/roadmap-details/phase-3-run/page.tsx
"use client";
import React from 'react';
import SubPageLayout from '@/components/chimera/SubPageLayout';
import { Target, Workflow, BrainCircuit, UsersRound, Award, Milestone } from 'lucide-react';

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

        <div className="mt-8 mb-4 flex items-center">
          <Milestone className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Timeline & Objectives</h3>
        </div>
        <p><strong>Timeline:</strong> Q1 2029 - Q4 2030</p>
        <p><strong>Objectives:</strong> Achieve a <strong>fully integrated, end-to-end agentic design system</strong> that operates with a <strong>high degree of autonomy</strong>, and leverage this unique capability to establish <strong>undisputed market leadership</strong>.</p>
        
        <div className="mt-8 mb-4 flex items-center">
          <Workflow className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Key Actions</h3>
        </div>
        <ul className="list-disc pl-5 space-y-1">
          <li>Integrate all five stages of the AI-Powered Design Pipeline (from Specification & Architecture to Manufacturing & Post-Silicon Validation) into a single, <strong>seamless workflow</strong> orchestrated by a <strong>hierarchical supervisor architecture</strong>.</li>
          <li>Empower the system to begin autonomously suggesting <strong>novel architectures and design improvements</strong> based on emergent insights derived from its holistic view of the design pipeline and historical data.</li>
          <li>Initiate the first projects to design <strong>novel AI accelerator chips</strong> using the Project Chimera system itself, thereby closing the symbiotic AI-silicon loop and demonstrating unparalleled design capabilities.</li>
          <li>Develop advanced <strong>AI-driven IP generation tools</strong>, enabling rapid creation and customization of complex silicon IP blocks.</li>
        </ul>

        <div className="mt-8 mb-4 flex items-center">
          <BrainCircuit className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Core Technologies to Deploy</h3>
        </div>
        <p><strong>Hierarchical Supervisor Architecture</strong>, <strong>End-to-end integrated agentic workflow</strong>, <strong>Emergent insight analysis capabilities</strong>, Advanced AI-driven IP generation modules.</p>

        <div className="mt-8 mb-4 flex items-center">
          <UsersRound className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">People & Culture Focus</h3>
        </div>
        <p>Transition engineers from primarily being agent users and custom tool builders to <strong>strategic agent orchestrators and AI system architects</strong>. Solidify an <strong>AI-first design culture</strong> throughout the entire organization, where AI is seen as an indispensable partner in innovation.</p>

        <div className="mt-8 mb-4 flex items-center">
          <Award className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">Success Metrics & KPIs</h3>
        </div>
        <ul className="list-disc pl-5 space-y-1">
            <li>Achievement of <strong>&gt;30% reduction in the overall design cycle time</strong> (from initial specification to final tape-out) for complex SoCs.</li>
            <li>Demonstrable <strong>market leadership in PPA benchmarks</strong> for key product segments directly attributable to the AI-driven design methodology.</li>
            <li>Successful tape-out and validation of the first <strong>&quot;AI-designed AI chip&quot; prototype</strong>, showcasing superior performance or efficiency.</li>
            <li>Generation of at least <strong>three novel, complex IP blocks</strong> using AI-driven tools, demonstrating significant acceleration in IP development.</li>
        </ul>
        <p className="mt-4">The &quot;Run&quot; phase represents the culmination of Project Chimera, where the fully realized AI-native design pipeline becomes a self-sustaining engine for innovation, efficiency, and market dominance, solidifying our position as the leader in the next generation of semiconductor design.</p>

      </article>
    </SubPageLayout>
  );
}
