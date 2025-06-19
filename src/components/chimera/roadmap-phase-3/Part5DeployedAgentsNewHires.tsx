// src/components/chimera/roadmap-phase-3/Part5DeployedAgentsNewHires.tsx
import React from 'react';
import { UsersRound, Cpu, Users, Award, BrainCircuit, Package } from 'lucide-react';

const Part5DeployedAgentsNewHires: React.FC = () => {
  return (
    <>
      <div className="mt-24 mb-4">
        <div className="flex items-center">
          <UsersRound className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
          <h2 className="text-3xl font-semibold text-primary gradient-text !m-0 !border-b-0 !pb-0">
            Part 5: Deployed Agents, New Hires, and the Future
          </h2>
        </div>
      </div>

      <div className="mt-8 mb-4 flex items-center">
        <Cpu className="h-7 w-7 text-purple-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-purple-400 !m-0 !border-b-0 !pb-0">
          Types of Agents Deployed in Phase 3:
        </h3>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong className="text-white font-semibold">Specification &amp; Architecture Agent:</strong> Works
          with human architects to translate product requirements into a formal, machine-readable
          specification.
        </li>
        <li>
          <strong className="text-white font-semibold">RTL Generation &amp; Refinement Agent:</strong> The
          core design agent from Phase 1 and 2, now highly optimized.
        </li>
        <li>
          <strong className="text-white font-semibold">PPA Optimization Agent:</strong> Uses reinforcement
          learning to fine-tune the design for power, performance, and area by intelligently manipulating EDA
          tool constraints.
        </li>
        <li>
          <strong className="text-white font-semibold">Verification &amp; Formal Analysis Agent:</strong>{' '}
          Exhaustively checks the design for logical correctness by driving verification tools and analyzing
          their output.
        </li>
        <li>
          <strong className="text-white font-semibold">Physical Design &amp; Layout Agent:</strong> Takes the
          final logic and generates the physical layout for manufacturing by intelligently driving commercial
          place-and-route tools.
        </li>
        <li>
          <strong className="text-white font-semibold">Hierarchical Supervisor:</strong> The primary
          orchestrator that manages all other agents and the overall workflow, making API calls to and
          interpreting results from our EDA tool suite.
        </li>
        <li>
          <strong className="text-white font-semibold">Model Context Protocol (MCP):</strong> While not an
          active agent, the MCP is the critical underlying data management system. It serves as the single
          source of truth for all design data, IP, and project configurations, which it provides to the
          Hierarchical Supervisor to enable the workflow.
        </li>
      </ul>

      <div className="mt-8 mb-4 flex items-center">
        <Users className="h-7 w-7 text-purple-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-purple-400 !m-0 !border-b-0 !pb-0">
          Integrating New Hires:
        </h3>
      </div>
      <p>Onboarding will be fundamentally different. A new hire&apos;s first &quot;mentor&quot; will be the AI itself.</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong className="text-white font-semibold">AI-Guided Training:</strong> New engineers will learn
          the company&apos;s design methodology by working on small-scale projects through the Human-AI
          Interface, with the AI providing real-time feedback and guidance.
        </li>
        <li>
          <strong className="text-white font-semibold">Focus on &quot;Why,&quot; Not &quot;How&quot;:</strong>{' '}
          Training will focus on high-level architectural thinking and strategic decision-making, as the AI
          will handle the low-level implementation. The most valued skill will be the ability to ask the AI
          the right questions.
        </li>
      </ul>

      <div className="mt-8 mb-4 flex items-center">
        <Award className="h-7 w-7 text-purple-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-purple-400 !m-0 !border-b-0 !pb-0">
          Strategic Hiring: The AI-Hybrid Engineer:
        </h3>
      </div>
      <p>
        Our hiring strategy must fundamentally shift away from traditional engineers who rely solely on manual
        expertise, as they will struggle to be productive in our highly automated environment. We will seek a
        new breed of hybrid talent that combines deep domain expertise with AI fluency. Ideal candidates will
        possess a strong foundation in the entire chip design pipeline, from architecture to verification and
        physical design, coupled with proficiency in how agentic AI systems operate, including machine
        learning principles and data modeling. This dual expertise is non-negotiable. When the AI system
        encounters a novel problem or produces an unexpected result, it is this hybrid engineer who will have
        the foundational knowledge to debug the issue, interpret the AI&apos;s reasoning, and implement a
        robust solution. They are the essential &quot;human-in-the-loop&quot; who provides the critical
        judgment that a purely automated system lacks.
      </p>

      <div className="mt-8 mb-4 flex items-center">
        <BrainCircuit className="h-7 w-7 text-purple-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-purple-400 !m-0 !border-b-0 !pb-0">
          The Future After Phase 3:
        </h3>
      </div>
      <p>
        Phase 3 establishes a foundation for true AGI (Artificial General Intelligence) in hardware design.
        The next steps will be even more ambitious:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong className="text-white font-semibold">Generative Architecture:</strong> An AI that can
          invent entirely new, non-human-intuitive computer architectures based on a desired outcome.
        </li>
        <li>
          <strong className="text-white font-semibold">IP-as-a-Service (IPaaS):</strong> Evolve the
          Generative IP Creation capability into a full-fledged commercial offering. The Chimera system can be
          used to generate and license highly specialized, verified IP blocks (e.g., advanced security cores,
          custom AI accelerators, novel interconnect fabrics) to the broader market, creating a new high-margin
          revenue stream.
        </li>
        <li>
          <strong className="text-white font-semibold">Platform-as-a-Service (PaaS):</strong> Package and
          commercialize the entire Project Chimera orchestration system as a licensable platform. Other
          fabless semiconductor companies could license this platform to accelerate their own design flows,
          positioning our core AI technology as a product in itself and empowering them to iterate faster and
          de-risk their own designs.
        </li>
      </ul>
    </>
  );
};

export default Part5DeployedAgentsNewHires;
