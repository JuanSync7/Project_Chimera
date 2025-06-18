// src/components/chimera/pipeline-stages/Stage_3_1_SpecAndArch.tsx
import React from 'react';
import { PrimaryWorkflowItemCard } from './WorkflowCardHelpers';
import { AlertTriangle, Zap, UserRoundSearch, FileText, Cpu, Network, Focus } from 'lucide-react';

const Stage_3_1_SpecAndArch: React.FC = () => {
  const workflowItems = [
    {
      id: 'custReq',
      icon: <UserRoundSearch />,
      title: 'The Customer Requirements Translation Agent',
      description: 'Acts as a <strong>digital envoy</strong>, engaging directly with our product managers and system architects. Leveraging the <strong>Knowledge Hub (RAG)</strong> in the MCP Server, it rapidly retrieves and analyzes data on similar past projects, market trends, and available IP to identify potential ambiguities, technical constraints, and emerging opportunities. Using the <strong>Context & State Management (CAG)</strong>, it builds a <strong>dynamic conversational bridge</strong>, iteratively refining high-level customer needs into a preliminary, yet actionable, technical specification. This significantly accelerates the proposal generation process, arming our sales team with a decisive competitive edge.'
    },
    {
      id: 'specAgent',
      icon: <FileText />,
      title: 'The Specification Agent',
      description: 'Acts as a <strong>meticulous architect</strong>, formalizing these high-level requirements into a precise, unambiguous, and machine-readable design specification. It employs <strong>formal verification techniques</strong> and <strong>semantic analysis</strong> to ensure unwavering consistency, completeness, and strict adherence to our established company design guidelines and critical industry standards (e.g., specific interface protocols, security certifications). This upfront rigor acts as a <strong>shield</strong>, paramount for mitigating costly ambiguities and misinterpretations that would otherwise ripple destructively through later design stages.'
    },
    {
      id: 'microArchOpt',
      icon: <Cpu />,
      title: 'The Microarchitecture Optimization Agent',
      description: 'Acts as a key part of our architecture exploration strategy, is supercharged by sophisticated <strong>reinforcement learning</strong> and <strong>multi-objective optimization algorithms</strong>. It autonomously <strong>blazes paths</strong> through thousands of high-level architectural variants, exploring diverse CPU core pipeline depths, intricate cache hierarchies, novel memory access patterns, and innovative custom accelerator configurations with tireless precision.'
    },
    {
      id: 'sysInterconnect',
      icon: <Network />,
      title: 'System-Level Interconnect Agent',
      description: 'Masterfully designs and optimizes the chip&apos;s internal communication fabric, sculpting efficient <strong>Network-on-Chip (NoC) topologies</strong> and high-bandwidth memory interfaces. Both agents leverage advanced AI models capable of rapidly and accurately estimating <strong>PPA (Power, Performance, Area)</strong> from these high-level descriptions, often achieving up to a <strong class="gradient-text">10x improvement in exploration speed</strong> compared to traditional methods that demand time-consuming manual estimations or premature synthesis runs.'
    },
    {
      id: 'supervisor',
      icon: <Focus />,
      title: 'Supervisor agent',
      description: 'Acts as the <strong>grand conductor</strong>, intelligently orchestrates this entire exploration process. It continuously monitors the PPA estimations, manages the trade-offs, and ultimately presents the top 3-5 candidate architectures to our human architects and product leadership. These candidates are accompanied by comprehensive, AI-generated trade-off analyses, enabling informed, strategic decisions that directly impact the chip&apos;s market competitiveness and alignment with business objectives.'
    },
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 id="stage-3-1" className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.1 Stage 1: System Specification &amp; Architecture
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>The critical initial phase of chip design is often hampered by <strong className="text-yellow-500">ambiguous</strong>,
        high-level customer requirements expressed in natural language. Compounding this, designers face an <strong className="text-yellow-500">
        impossibly vast, multi-dimensional labyrinth</strong> of potential high-level architectures. Traditional manual exploration
        through this maze is painstakingly slow, inherently sub-optimal, and all too often prone to overlooking truly innovative,
        game-changing solutions.
      </p>
      <div className="mt-8 mb-4 flex items-center">
        <Zap className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
          Agentic Workflow: AI-Driven Strategic Design &amp; Holistic Architecture Exploration
        </h3>
      </div>
      <p>Our workflow begins with <strong>precision and foresight</strong>, a symphony of specialized AI acting in concert:</p>
      <ul className="list-none pl-0 space-y-6 !my-6">
        {workflowItems.map(item => (
          <PrimaryWorkflowItemCard key={item.id} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </ul>
    </div>
  );
};

export default Stage_3_1_SpecAndArch;
