// src/components/chimera/pipeline-stages/Stage_3_2_RTLGeneration.tsx
import React from 'react';
import { PrimaryWorkflowItemCard, NestedDetailCard } from './WorkflowCardHelpers';
import { AlertTriangle, FileCode, UserCog, BrainCircuit, Layers3, ListOrdered, ShieldCheck } from 'lucide-react';

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
        {
          id: 'structuredPrompts',
          icon: <ListOrdered />,
          title: 'Structured Prompts:',
          description: 'Carefully crafted prompts that provide the LLM with clear context, specific design requirements, desired RTL structure, and explicit instructions on coding style and synthesizability rules.'
        },
        {
          id: 'inContextLearning',
          icon: <Layers3 />,
          title: 'In-context Learning (Few-shot Prompting):',
          description: 'Supplying relevant examples of high-quality, functionally correct RTL code and corresponding natural language descriptions from our <strong>Knowledge Hub (RAG)</strong> in the MCP Server. This guides the LLM towards generating similar, high-quality output without requiring model fine-tuning.'
        },
        {
          id: 'constraintBasedGen',
          icon: <ShieldCheck />,
          title: 'Constraint-Based Generation:',
          description: 'Imposing specific output constraints (e.g., format, keyword usage, module structure) to ensure the generated code adheres strictly to HDL syntax and hardware semantics.'
        },
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
      <h2 id="stage-3-2" className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.2 Stage 2: Intelligent RTL Generation from Architecture
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>Translating complex architectural blueprints into high-quality, synthesizable <strong>Register-Transfer Level (RTL)</strong>
        code is a notoriously time-consuming and error-prone process. Modern chip designs demand both functional correctness and
        optimal <strong>Power, Performance, and Area (PPA)</strong> at the RTL level. While generative AI offers promise for
        <strong>Hardware Description Language (HDL)</strong> creation, ensuring the reliability, synthesizability, and adherence to
        design standards of automatically generated code remains a significant hurdle. Furthermore, the efficient integration of
        <strong>High-Level Synthesis (HLS)</strong> from higher-level design abstractions is crucial for productivity.
      </p>
      <div className="mt-8 mb-4 flex items-center">
        <FileCode className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
          Agentic Workflow: Leveraging Prompt Engineering &amp; RAG for High-Quality RTL and HLS Integration
        </h3>
      </div>
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
    </div>
  );
};

export default Stage_3_2_RTLGeneration;
