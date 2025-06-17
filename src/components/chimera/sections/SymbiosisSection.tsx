
import React from 'react';
import SectionCard from '@/components/chimera/SectionCard'; 
import { PYTHON_CODE_EXAMPLE } from '@/lib/chimera/constants';
import { UserCog, Wrench, Inspect } from 'lucide-react';

const SymbiosisSection: React.FC = () => {
  return (
    <section id="symbiosis" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-3 text-white">Human-AI Symbiosis: Empowering Engineers</h2>
      <p className="text-slate-400 text-center text-lg mb-16 max-w-3xl mx-auto">
        Project Chimera aims to amplify engineering talent, not replace it. This requires evolving roles, new tools, and a culture of trust and continuous improvement through transparency and debuggability.
      </p>
      <div className="grid md:grid-cols-2 gap-8 items-stretch"> {/* items-stretch for equal height cards */}
        <SectionCard
          icon={<UserCog className="h-12 w-12 text-sky-400" />}
          title="From Tool User to Agent Orchestrator"
          description="The engineer's role elevates from low-level implementation to high-level strategy. They become conductors of an AI orchestra, responsible for:
          <ul class='list-disc list-inside mt-2 space-y-1 text-slate-400'>
            <li>Defining strategic goals and crafting effective prompts for the Supervisor agent.</li>
            <li>Curating and customizing agentic workflows in LangGraph.</li>
            <li>Acting as the human-in-the-loop for critical decisions and complex problem-solving.</li>
          </ul>
          This empowers engineers to manage multiple complex design explorations in parallel, multiplying their creative output."
          className="hover:border-sky-500/50 flex flex-col"
          contentClassName="flex-grow"
        />
        <SectionCard
          icon={<Wrench className="h-12 w-12 text-purple-400" />}
          title="Building Custom Tools & Agents"
          description={`Fostering a culture of 'citizen AI development' where engineers build and share lightweight, custom agents using Python (with libraries like Pandas, LangChain) to automate niche workflows.
          <div class='bg-gray-900 rounded-lg p-4 mt-4 text-sm font-mono text-slate-300 overflow-x-auto'>
            <pre><code class='language-python whitespace-pre-wrap'>${PYTHON_CODE_EXAMPLE}</code></pre>
          </div>
          Validated custom tools are registered with the MCP Server, becoming available to the entire organization's agent ecosystem.`}
          className="hover:border-purple-500/50 flex flex-col"
          contentClassName="flex-grow"
        />
        <div className="md:col-span-2">
           <SectionCard
            icon={<Inspect className="h-12 w-12 text-fuchsia-400 mx-auto" />}
            title="MLOps & Observability with LangSmith"
            titleClassName="text-center"
            description={`<p class='max-w-2xl mx-auto text-left mb-3'>AI agents and workflows are treated with production software rigor using a robust MLOps framework.</p>
            <ul class='list-disc list-inside mt-3 space-y-2 text-slate-400 text-left max-w-2xl mx-auto'>
              <li><strong>CI/CD for LLM Applications:</strong> Automated workflows test agent changes against 'golden datasets', blocking regressions in correctness, factual groundedness, or tool-use accuracy.</li>
              <li><strong>Evaluation-Driven Development:</strong> Ensures AI systems only improve over time. Specialized AI testing agents continuously probe design agents for weaknesses and update test scripts.</li>
              <li><strong>LangSmith for Observability & Debugging:</strong> Standardized platform for LLM app development, monitoring, and debugging. Provides end-to-end tracing of agentic workflows, transforming AI from a 'black box' into a debuggable system. Engineers can visualize processes, identify failure points, and build trust. LangSmith's evaluation suite integrates with CI/CD, and its feedback tools help improve agents via expert review.</li>
            </ul>`}
            className="hover:border-fuchsia-500/50"
          />
        </div>
      </div>
    </section>
  );
};

export default SymbiosisSection;

