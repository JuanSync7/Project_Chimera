// src/components/chimera/pipeline-stages/Stage_3_4_TDDRTLRefinement.tsx
import React from 'react';
import { PrimaryWorkflowItemCard } from './WorkflowCardHelpers';
import { AlertTriangle, RefreshCcw, PlayCircle, Bug, Lightbulb, Repeat2 } from 'lucide-react';

const Stage_3_4_TDDRTLRefinement: React.FC = () => {
  const workflowItems = [
    {
      id: 'testExec',
      icon: <PlayCircle />,
      title: 'Test Execution:',
      description: 'The <strong>Supervisor</strong> invokes our advanced simulation tools (via the MCP Server&apos;s Tool Abstraction Layer) to execute the autonomously generated tests against the newly optimized RTL.'
    },
    {
      id: 'failAnalysis',
      icon: <Bug />,
      title: 'Failure Analysis:',
      description: 'The <strong>Debug & Root Cause Analysis Agent</strong> (a dedicated Verification Agent from Section 2.2) meticulously analyzes any simulation failures or coverage gaps. It sifts through vast amounts of simulation logs, waveform data, and design collateral to pinpoint the exact functional bug or performance bottleneck with unparalleled speed.'
    },
    {
      id: 'targetedFeedback',
      icon: <Lightbulb />,
      title: 'Targeted Feedback:',
      description: 'The <strong>Debug & Root Cause Analysis Agent</strong> then provides precise, targeted, and actionable feedback directly to the <strong>Verilog/VHDL Coder Agent</strong> (our RTL Generation & Refinement Agent), often suggesting specific code modifications or architectural adjustments. This feedback is critically important and will often be translated into specific instructions or new context within the prompt for the <strong>Verilog/VHDL Coder Agent&apos;s</strong> next iteration.'
    },
    {
      id: 'autoRefine',
      icon: <Repeat2 />,
      title: 'Automated Refinement:',
      description: 'The <strong>Verilog/VHDL Coder Agent</strong> intelligently leverages this precise, prompt-driven feedback to refactor, debug, and further optimize its generated code, proposing new RTL iterations.'
    },
    {
      id: 'iterativeLoop',
      icon: <RefreshCcw />,
      title: 'Iterative Loop:',
      description: 'This <strong>TDD loop</strong> continues autonomously until all tests pass with <strong>100% functional coverage</strong>, and the RTL meets its initial <strong>PPA (Power, Performance, Area) estimates</strong>. This robust, closed-loop process directly mitigates the primary weakness of using LLMs for HDL generation by grounding the creative, probabilistic nature of the AI in the deterministic, verifiable world of functional tests, dramatically accelerating the path to high-quality, bug-free RTL.'
    },
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
      <p>Even with proactive checks, the iterative process of debugging and refining RTL to meet functional correctness and
        performance targets is a major bottleneck. Manually identifying, diagnosing, and fixing bugs based on simulation
        failures is labor-intensive, time-consuming, and susceptible to human oversight, leading to extended design cycles.
      </p>
      <div className="mt-8 mb-4 flex items-center">
        <RefreshCcw className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
          Agentic Workflow: Automated Debugging and Self-Correction for Rapid RTL Convergence
        </h3>
      </div>
      <p>Once the testbench and initial RTL are prepared, our system enters an intelligent, automated <strong>Test-Driven
        Development (TDD) loop</strong>, driven by the <strong>Supervisor agent&apos;s</strong> orchestration, to rapidly
        achieve functional correctness and PPA targets:
      </p>
      <ul className="list-none pl-0 space-y-6 !my-6">
        {workflowItems.map(item => (
          <PrimaryWorkflowItemCard key={item.id} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </ul>
    </div>
  );
};

export default Stage_3_4_TDDRTLRefinement;
