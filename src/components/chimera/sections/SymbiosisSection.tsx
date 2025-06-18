
import React from 'react';
import SectionCard from '@/components/chimera/SectionCard'; 
import { PYTHON_CODE_EXAMPLE } from '@/lib/chimera/constants';
import { UserCog, Wrench, Inspect } from 'lucide-react';

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
          description="The engineer's role elevates from low-level implementation to high-level strategy. They become <strong>conductors of an AI orchestra</strong>, responsible for:
          <ul class='list-disc list-inside mt-2 space-y-1 text-slate-400'>
            <li><strong>Defining strategic goals</strong> and crafting effective prompts for the Supervisor agent.</li>
            <li><strong>Curating and customizing</strong> agentic workflows in LangGraph.</li>
            <li><strong>Acting as the human-in-the-loop</strong> for critical decisions and complex problem-solving.</li>
          </ul>
          This empowers engineers to manage multiple complex design explorations in parallel, <strong>multiplying their creative output</strong>."
          className="hover:border-sky-500/50 flex flex-col"
          contentClassName="flex-grow"
        />
        <SectionCard
          icon={<Wrench className="h-12 w-12 text-purple-400" />}
          title="Building Custom Tools & Agents"
          description={`Fostering a culture of <strong>'citizen AI development'</strong> where engineers build and share <strong>lightweight, custom agents</strong> using <strong>Python</strong> (with libraries like <strong>Pandas, LangChain</strong>) to automate niche workflows.
          <div class='bg-gray-900 rounded-lg p-4 mt-4 text-sm font-mono text-slate-300 overflow-x-auto'>
            <pre><code class='language-python whitespace-pre-wrap'>${PYTHON_CODE_EXAMPLE}</code></pre>
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
              <li><strong class="text-fuchsia-400 font-semibold">CI/CD for LLM Applications:</strong> Automated workflows test agent changes against <strong>'golden datasets'</strong>, blocking <strong>regressions</strong> in correctness, factual groundedness, or tool-use accuracy.</li>
              <li><strong class="text-fuchsia-400 font-semibold">Evaluation-Driven Development:</strong> Ensures <strong>AI systems only improve</strong> over time. Specialized AI testing agents continuously probe design agents for weaknesses and update test scripts.</li>
              <li><strong class="text-fuchsia-400 font-semibold">LangSmith for Observability & Debugging:</strong> <strong>Standardized platform</strong> for LLM app development, monitoring, and debugging. Provides <strong>end-to-end tracing</strong> of agentic workflows, transforming AI from a 'black box' into a <strong>debuggable system</strong>. Engineers can visualize processes, identify failure points, and build trust. LangSmith's <strong>evaluation suite</strong> integrates with CI/CD, and its <strong>feedback tools</strong> help improve agents via expert review.</li>
            </ul>`}
            className="hover:border-fuchsia-500/50"
          />
        </div>
      </div>
    </section>
  );
};

export default SymbiosisSection;


