// src/components/chimera/pipeline-stages/Stage_3_5_FuncVerifyCoverage.tsx
import React from 'react';
import { PrimaryWorkflowItemCard, NestedDetailCard } from './WorkflowCardHelpers';
import { AlertTriangle, ListChecks, ClipboardList, Workflow, Shuffle, Keyboard, Target, Filter, Crosshair, PlayCircle }
  from 'lucide-react';

const Stage_3_5_FuncVerifyCoverage: React.FC = () => {
  const workflowItems = [
    {
      id: 'sophisticatedTestGen',
      icon: <ClipboardList />,
      title: 'Sophisticated Test & Stimulus Generation:',
      description: 'The <strong>Test & Coverage Generation Agent</strong> is central to this stage. Beyond generating initial module-level tests, it now dynamically creates <strong>complex, system-level test cases, intelligent stimulus patterns, and comprehensive verification environments</strong>.',
      nestedDetails: [
        {
          id: 'uvmOrchestration',
          icon: <Workflow />,
          title: 'UVM Orchestration:',
          description: 'For highly complex IPs, it orchestrates and populates <strong>Universal Verification Methodology (UVM) testbenches</strong>, intelligently configuring sequences, transactors, and scoreboards. It can parse protocol specifications from the <strong>Knowledge Hub (RAG)</strong> and generate UVM components tailored to specific interface standards (e.g., PCIe, DDR, USB), significantly reducing manual UVM development time.'
        },
        {
          id: 'constrainedRandomGen',
          icon: <Shuffle />,
          title: 'Constrained Random Generation:',
          description: 'It employs <strong>constrained random test generation</strong>, guided by a deep understanding of the design&apos;s architecture and potential stress points, to explore a vast array of functional scenarios far beyond what human engineers could manually conceive.'
        },
        {
          id: 'promptDrivenTestCode',
          icon: <Keyboard />,
          title: 'Prompt-Driven Test Code:',
          description: 'Using <strong>prompt engineering</strong>, the agent can translate high-level test plans and coverage goals into executable test code and assertions.'
        },
      ]
    },
    {
      id: 'autoCoverageAnalysis',
      icon: <Target />,
      title: 'Automated Coverage Analysis and Closure:',
      description: 'The <strong>AutoDV (Automatic Design Verification) Agent</strong> plays a critical role in driving coverage closure. It continuously analyzes various forms of <strong>coverage metrics</strong> (code coverage, functional coverage, assertion coverage, toggle coverage) from extensive simulation runs.',
      nestedDetails: [
        {
          id: 'coverageHoleID',
          icon: <Filter />,
          title: 'Coverage Hole Identification:',
          description: 'Upon identifying <strong>coverage holes</strong> (untested design areas), the AutoDV Agent intelligently reasons about the root cause of the missing coverage.'
        },
        {
          id: 'targetedTestGen',
          icon: <Crosshair />,
          title: 'Targeted Test Generation:',
          description: 'It then collaborates with the <strong>Test & Coverage Generation Agent</strong> to formulate and generate new, <strong>highly targeted test cases</strong> specifically designed to hit these uncovered areas, creating a powerful, <strong>closed-loop system</strong> for continuous coverage improvement. This iterative process drastically reduces the manual effort typically required to reach <strong>100% functional and code coverage targets</strong>.'
        },
      ]
    },
    {
      id: 'simOrchestration',
      icon: <PlayCircle />,
      title: 'Simulation Orchestration and Optimization:',
      description: 'The <strong>Supervisor agent</strong> oversees the massive simulation campaigns required at this stage. It intelligently allocates compute resources for <strong>parallel simulation runs</strong>, manages simulation regressions, and monitors key metrics. It prioritizes the execution of tests that target <strong>critical paths or known problematic areas</strong>, ensuring efficient use of verification cycles.'
    },
  ];
  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 id="stage-3-5" className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.5 Stage 5: Comprehensive Functional Verification &amp; Coverage Closure
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>While the <strong>TDD loop</strong> in Stage 4 ensures that individual RTL modules pass their initial set of generated
        tests, achieving <strong>comprehensive functional verification</strong> across complex, integrated chip designs remains
        the <strong>single largest bottleneck</strong> in modern semiconductor development. Ensuring <strong>full test
        coverage</strong> and exercising all <strong>corner cases</strong> for complex IPs, especially those involving intricate
        protocols and parallel operations, is a monumental and often incomplete task with traditional methods like
        <strong>UVM</strong>, leading to missed bugs and costly silicon respins.
      </p>
      <div className="mt-8 mb-4 flex items-center">
        <ListChecks className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
          Agentic Workflow: Intelligent Test Generation, UVM Harnessing, and Automated Coverage Closure
        </h3>
      </div>
      <p>Building directly from the robust RTL delivered by the TDD loop, this stage focuses on achieving <strong>exhaustive
        functional verification</strong> and <strong>complete coverage closure</strong> through intelligent agent orchestration:
      </p>
      <ul className="list-none pl-0 space-y-6 !my-6">
        {workflowItems.map(item => (
          <PrimaryWorkflowItemCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.nestedDetails ? undefined : item.description}
          >
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
      <p>This comprehensive, AI-driven approach to functional verification ensures that our RTL designs are rigorously exercised,
        catching a vast majority of functional bugs through exhaustive simulation and intelligent test generation, laying a solid
        foundation for subsequent physical design.
      </p>
    </div>
  );
};

export default Stage_3_5_FuncVerifyCoverage;
