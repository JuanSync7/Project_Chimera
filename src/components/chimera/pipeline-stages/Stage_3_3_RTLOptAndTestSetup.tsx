// src/components/chimera/pipeline-stages/Stage_3_3_RTLOptAndTestSetup.tsx
import React from 'react';
import { PrimaryWorkflowItemCard } from './WorkflowCardHelpers';
import { AlertTriangle, FileCode, Settings2, Zap, ClipboardList } from 'lucide-react';

const Stage_3_3_RTLOptAndTestSetup: React.FC = () => {
  const workflowItems = [
    {
      id: 'initialOpt',
      icon: <Settings2 />,
      title: 'Initial Optimization & Pre-Synthesis:',
      description: 'The <strong>Verilog/VHDL Coder Agent</strong> performs initial local optimizations, code linting, and <strong>design rule checking (DRC)</strong> before extensive simulation. This includes applying <strong>power-aware techniques</strong> (e.g., advanced clock gating opportunities) and structural optimizations at the RTL level, often guided by prompt-engineered rules. It also conducts quick <strong>pre-synthesis analysis</strong> to ensure the generated RTL is robust for downstream synthesis tools.'
    },
    {
      id: 'powerAwareOpt',
      icon: <Zap />,
      title: 'Power-Aware Optimization:',
      description: 'The <strong>Power-Aware RTL Optimization Agent</strong> (also an RTL Generation Agent from Section 2.2) collaborates here. It performs a deeper analysis of the design&apos;s power characteristics and autonomously suggests or implements modifications to reduce <strong>static and dynamic power consumption</strong> directly at the RTL level, using further prompt engineering to guide LLMs in identifying optimization opportunities. This early-stage optimization is critical for achieving aggressive power targets in modern low-power and mobile applications.'
    },
    {
      id: 'testbenchGen',
      icon: <ClipboardList />,
      title: 'Testbench Generation:',
      description: 'Simultaneously, the <strong>Test & Coverage Generation Agent</strong> (a Verification Agent from Section 2.2) takes the formalized design specification and automatically generates a comprehensive functional <strong>testbench</strong> for the module. This includes creating robust <strong>test cases, stimulus patterns, monitors, and SystemVerilog Assertions (SVA)</strong> that precisely define the expected behavior and <strong>&quot;correctness&quot;</strong> of the RTL. This crucial <strong>&quot;test-first&quot; approach</strong> establishes a clear, unambiguous, and machine-verifiable definition of desired functionality, grounding the AI-generated code in verifiable reality. The <strong>Supervisor agent</strong> then presents these autonomously generated testbenches and assertions to the human engineer for final review and confirmation, ensuring alignment with the original design intent and comprehensive test coverage goals.'
    },
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 id="stage-3-3" className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.3 Stage 3: Proactive RTL Optimization &amp; Testbench Setup
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>Before embarking on extensive simulation and physical design, ensuring the initial quality, synthesizability, and testability
        of the generated RTL is paramount. Manual linting, basic optimization, and testbench creation are time-consuming and
        often miss subtle issues that can lead to costly delays downstream.
      </p>
      <div className="mt-8 mb-4 flex items-center">
        <FileCode className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
          Agentic Workflow: Automated RTL Quality Assurance and Comprehensive Test Environment Preparation
        </h3>
      </div>
      <p>Immediately following initial RTL generation, our agents perform vital proactive optimization and quality checks to ensure
        robust, high-quality RTL, and prepare a comprehensive test environment before functional verification begins:
      </p>
      <ul className="list-none pl-0 space-y-6 !my-6">
        {workflowItems.map(item => (
          <PrimaryWorkflowItemCard key={item.id} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </ul>
    </div>
  );
};

export default Stage_3_3_RTLOptAndTestSetup;
