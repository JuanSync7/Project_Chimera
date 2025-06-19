
import React from 'react';
import SectionCard from '@/components/chimera/SectionCard'; 
import { HIGH_LEVEL_PYTHON_CODE_EXAMPLE } from '@/lib/chimera/constants';
import { UserCog, Wrench, Inspect, Lightbulb, Workflow, UserCheck, BrainCircuit } from 'lucide-react';

const OrchestratorResponsibilities = () => (
  <>
    <p>The engineer's role evolves significantly, shifting from detailed, low-level implementation tasks towards high-level strategic oversight and direction. They transition into an <strong>Agent Orchestrator</strong>, guiding and supervising the AI ensemble, with responsibilities including:</p>
    <ul className="list-none pl-0 space-y-6 !my-6">
      <li className="flex items-start">
        <Lightbulb className="h-6 w-6 text-sky-400 mr-3 mt-1 flex-shrink-0" />
        <div>
          <strong className="text-sky-300 block mb-1">Strategic Goal Definition & Prompt Engineering:</strong>
          Engineers will translate complex product requirements and business objectives into clear, high-level strategic goals for the AI system. A key skill will be crafting effective, nuanced prompts for the Supervisor agent, guiding its task decomposition and overall design exploration. For example, prompting: <i>“Design a low-power RISC-V core for an edge IoT device, prioritizing battery life over raw throughput, targeting the 3nm process node, and adhering to specific security enclave requirements.”</i>
        </div>
      </li>
      <li className="flex items-start">
        <Workflow className="h-6 w-6 text-sky-400 mr-3 mt-1 flex-shrink-0" />
        <div>
          <strong className="text-sky-300 block mb-1">Agentic Workflow Curation & Customization:</strong>
          Engineers will leverage frameworks like LangGraph to design, curate, and customize the sequences of agent interactions. They might adapt standard verification workflows to incorporate novel AI-driven test generation techniques or configure the PPA Optimization Agent to explore unconventional power-saving strategies for a specific design block. This empowers them to tailor the AI's approach to unique project challenges.
        </div>
      </li>
      <li className="flex items-start">
        <UserCheck className="h-6 w-6 text-sky-400 mr-3 mt-1 flex-shrink-0" />
        <div>
          <strong className="text-sky-300 block mb-1">Human-in-the-Loop Supervision & Validation:</strong>
          While AI automates extensively, engineers remain crucial for validating key AI-generated outputs, making strategic decisions at critical junctures, and intervening to resolve complex, ambiguous, or novel problems that agents cannot autonomously handle. For instance, if an agent proposes a radically unconventional but potentially highly efficient layout, the engineer provides the domain expertise to assess its manufacturability and real-world viability, ensuring AI's novel solutions are practically grounded.
        </div>
      </li>
      <li className="flex items-start">
        <BrainCircuit className="h-6 w-6 text-sky-400 mr-3 mt-1 flex-shrink-0" />
        <div>
          <strong className="text-sky-300 block mb-1">Insight Generation & Knowledge Encoding:</strong>
          Engineers will analyze AI-generated outputs and reasoning traces (e.g., via LangSmith) to uncover novel design insights and optimization patterns. They'll also play a vital role in curating and refining the MCP Server's Knowledge Hub, encoding successful design patterns and human expertise to continuously enhance the AI system's collective intelligence, transforming individual learnings into persistent organizational knowledge.
        </div>
      </li>
    </ul>
    <p className='mt-4'>This evolved role transforms engineers into strategic <strong>force multipliers</strong>, enabling them to oversee numerous complex design explorations simultaneously, significantly amplifying their creative impact and innovation capacity.</p>
  </>
);


const SymbiosisSection: React.FC = () => {
  return (
    <section id="symbiosis" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-3 text-white">Human-AI Symbiosis: Empowering Engineers</h2>
      <p className="text-slate-400 text-center text-lg mb-16 max-w-3xl mx-auto">
        Project Chimera aims to <strong>amplify engineering talent</strong>, not replace it. This requires <strong>evolving roles</strong>, <strong>new tools</strong>, and a <strong>culture of trust and continuous improvement</strong> through <strong>transparency and debuggability</strong>.
      </p>
      <div className="grid md:grid-cols-2 gap-8 items-stretch"> {/* items-stretch for equal height cards */}
        <SectionCard
          icon={<UserCog className="h-12 w-12 text-sky-400" />}
          title="From Tool User to Agent Orchestrator"
          description={<OrchestratorResponsibilities />}
          className="hover:border-sky-500/50 flex flex-col"
          contentClassName="flex-grow"
        />
        <SectionCard
          icon={<Wrench className="h-12 w-12 text-purple-400" />}
          title="Building Custom Tools & Agents"
          description={`Fostering a culture of <strong>'citizen AI development'</strong> where engineers build and share <strong>lightweight, custom agents</strong> using <strong>Python & Genkit</strong> to automate niche workflows.
          <div class="bg-black rounded-lg shadow-xl overflow-hidden my-4 border border-slate-700">
            <div class="bg-slate-800 px-4 py-2 flex items-center">
              <div class="w-3 h-3 bg-red-500 rounded-full mr-1.5"></div>
              <div class="w-3 h-3 bg-yellow-500 rounded-full mr-1.5"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <span class="ml-auto text-xs text-slate-400 font-mono">Python (Genkit Tool) -- ~user/dev/custom_tools</span>
            </div>
            <div class="p-4 text-sm font-mono text-slate-300 overflow-x-auto bg-slate-900">
              <pre><code class='language-python whitespace-pre-wrap'>${HIGH_LEVEL_PYTHON_CODE_EXAMPLE}</code></pre>
            </div>
          </div>
          Validated custom tools are registered with the <strong>MCP Server</strong>, becoming available to the entire organization's agent ecosystem.`}
          className="hover:border-purple-500/50 flex flex-col"
          contentClassName="flex-grow"
        />
        <div className="md:col-span-2">
           <SectionCard
            icon={<Inspect className="h-12 w-12 text-fuchsia-400 mx-auto" />}
            title="MLOps & Observability with LangSmith"
            titleClassName="text-center"
            description={`<p class='max-w-2xl mx-auto text-left mb-3'>AI agents and workflows are treated with <strong>production software rigor</strong> using a robust <strong>MLOps framework</strong>.</p>
            <ul class='list-disc list-inside mt-3 space-y-2 text-slate-400 text-left max-w-2xl mx-auto'>
              <p><strong class="text-fuchsia-400 font-semibold">CI/CD for LLM Applications:</strong> Automated workflows test agent changes against <strong>'golden datasets'</strong>, blocking <strong>regressions</strong> in correctness, factual groundedness, or tool-use accuracy.</p>
              <p><strong class="text-fuchsia-400 font-semibold">Evaluation-Driven Development:</strong> Ensures <strong>AI systems only improve</strong> over time. Specialized AI testing agents continuously probe design agents for weaknesses and update test scripts.</p>
              <p><strong class="text-fuchsia-400 font-semibold">LangSmith for Observability & Debugging:</strong> <strong>Standardized platform</strong> for LLM app development, monitoring, and debugging. Provides <strong>end-to-end tracing</strong> of agentic workflows, transforming AI from a 'black box' into a <strong>debuggable system</strong>. Engineers can visualize processes, identify failure points, and build trust. LangSmith's <strong>evaluation suite</strong> integrates with CI/CD, and its <strong>feedback tools</strong> help improve agents via expert review.</p>
            </ul>`}
            className="hover:border-fuchsia-500/50"
          />
        </div>
      </div>
    </section>
  );
};

export default SymbiosisSection;

