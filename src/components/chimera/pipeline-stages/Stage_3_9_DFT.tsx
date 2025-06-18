// src/components/chimera/pipeline-stages/Stage_3_9_DFT.tsx
import React from 'react';
import { PrimaryWorkflowItemCard, NestedDetailCard } from './WorkflowCardHelpers';
import {
  AlertTriangle, Wrench, ClipboardList, BrainCircuit, Scale, Keyboard, Puzzle, Cog, BarChart3, FileCode, ListChecks,
  Crosshair, ShieldCheck, PlayCircle, TestTube2, Bug, RefreshCcw // Added RefreshCcw here
} from 'lucide-react';

const Stage_3_9_DFT: React.FC = () => {
  const workflowItems = [
    {
      id: 'intelDftPlan',
      icon: <ClipboardList />,
      title: 'Intelligent DFT Planning:',
      description: 'A dedicated <strong>DFT Planning Agent</strong> (a new specialized Physical Design & Optimization Agent or a Specialized Analysis Agent from Section 2.2, expanding on its capabilities) analyzes the RTL or initial gate-level netlist received from previous stages.',
      nestedDetails: [
        {
          id: 'ragKnowledge',
          icon: <BrainCircuit />,
          title: 'Knowledge Hub (RAG) Integration:',
          description: 'Leveraging the <strong class="text-sky-300">Knowledge Hub (RAG)</strong> (containing historical DFT best practices, fault models, and technology-specific rules), it intelligently determines the optimal DFT strategy for the entire chip or specific IP blocks. This includes deciding on scan architecture, number of scan chains, BIST insertion points for memories and logic, and JTAG boundary scan requirements.'
        },
        {
          id: 'ppaConsider',
          icon: <Scale />,
          title: 'PPA Consideration:',
          description: 'It considers initial PPA estimates and potential test time to propose a DFT plan that balances testability with design constraints.'
        },
        {
          id: 'promptEng',
          icon: <Keyboard />,
          title: 'Prompt Engineering for DFT Specification:',
          description: '<strong class="text-sky-300">Prompt engineering</strong> guides general-purpose LLMs in evaluating trade-offs and generating a detailed DFT specification.'
        },
      ]
    },
    {
      id: 'autoDftInsert',
      icon: <Puzzle />,
      title: 'Automated DFT Insertion:',
      description: 'The <strong>DFT Insertion Agent</strong> (another new specialized Physical Design & Optimization Agent) takes the DFT plan and autonomously modifies the design by inserting the necessary test logic.',
      nestedDetails: [
        {
          id: 'toolOrchestrate',
          icon: <Cog />,
          title: 'Tool Orchestration:',
          description: 'It orchestrates industry-standard DFT tools (via the MCP Server&apos;s Tool Abstraction Layer, e.g., Synopsys TestMAX, Cadence Modus) to perform scan chain insertion, memory BIST insertion, boundary scan logic generation, and other DFT structural enhancements.'
        },
        {
          id: 'clockResetHandle',
          icon: <RefreshCcw />,
          title: 'Clock & Reset Handling:',
          description: 'It ensures proper clocking and reset domain handling for test mode.'
        },
        {
          id: 'ppaMonitor',
          icon: <BarChart3 />,
          title: 'PPA Monitoring:',
          description: 'The agent continuously monitors the PPA impact of inserted logic, providing feedback to the Supervisor Agent for iterative adjustment if constraints are violated.'
        },
      ]
    },
    {
      id: 'intelAtpg',
      icon: <ListChecks />,
      title: 'Intelligent Test Pattern Generation (ATPG):',
      description: 'The <strong>ATPG Agent</strong> (a specialized Physical Design & Optimization Agent or Verification Agent) is responsible for generating efficient and high-quality test patterns.',
      nestedDetails: [
        {
          id: 'faultModelTarget',
          icon: <Crosshair />,
          title: 'Fault Model Targeting:',
          description: 'It runs ATPG algorithms on the DFT-inserted design, targeting various fault models (e.g., stuck-at, transition, bridging faults) to achieve maximum fault coverage.'
        },
        {
          id: 'patternOpt',
          icon: <FileCode />,
          title: 'Pattern Optimization:',
          description: 'Leveraging prompt engineering and RAG on historical pattern data, it optimizes pattern count to minimize test time and cost, while maximizing effectiveness.'
        },
        {
          id: 'formatGen',
          icon: <FileCode />,
          title: 'Format Generation:',
          description: 'It automatically generates test patterns in industry-standard formats (e.g., STIL, WGL) for direct use on ATE (Automated Test Equipment).'
        },
      ]
    },
    {
      id: 'dftVerifyVal',
      icon: <ShieldCheck />,
      title: 'DFT Verification and Validation:',
      description: 'A <strong>DFT Verification Agent</strong> (a Verification Agent from Section 2.2) rigorously verifies the correctness of the inserted DFT logic and the generated test patterns.',
      nestedDetails: [
        {
          id: 'testModeSim',
          icon: <PlayCircle />,
          title: 'Test Mode Simulation:',
          description: 'It simulates the design in test mode to ensure all scan chains are correctly connected and functional, and that BIST engines operate as expected.'
        },
        {
          id: 'faultSim',
          icon: <TestTube2 />,
          title: 'Fault Simulation:',
          description: 'It performs fault simulation to confirm the achieved fault coverage targets.'
        },
        {
          id: 'issueFeedback',
          icon: <Bug />,
          title: 'Issue Feedback:',
          description: 'Any issues detected are fed back to the Debug & Root Cause Analysis Agent and the DFT Insertion Agent for automated correction.'
        },
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
      <p>Ensuring that a complex chip can be thoroughly tested after manufacturing is paramount for yield and reliability.
        Design for Testability (DFT) involves inserting dedicated test logic (e.g., scan chains, Built-In Self-Test - BIST,
        JTAG infrastructure) into the design. This process is highly specialized, computationally intensive, can significantly
        impact chip area, power, and performance (PPA), and requires expert knowledge to achieve high fault coverage while
        minimizing overhead. Manual DFT planning, insertion, and Automatic Test Pattern Generation (ATPG) are prone to errors
        and bottlenecks, leading to delayed test pattern availability and potentially higher manufacturing test costs.
      </p>
      <div className="mt-8 mb-4 flex items-center">
        <Wrench className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
          Agentic Workflow: Automated DFT Planning, Insertion, and Optimized Test Pattern Generation
        </h3>
      </div>
      <p>This crucial stage integrates AI to automate and optimize the complex DFT flow, ensuring high test coverage and
        efficient manufacturing testing:
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
      <p>This AI-driven DFT stage ensures high manufacturability and testability of our chips, significantly reducing post-silicon
        debug efforts and overall production costs, while maintaining optimal PPA.
      </p>
    </div>
  );
};

export default Stage_3_9_DFT;
