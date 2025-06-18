// src/components/chimera/pipeline-stages/Stage_3_10_PhysicalDesignPPAOpt.tsx
import React from 'react';
import { PrimaryWorkflowItemCard, NestedDetailCard } from './WorkflowCardHelpers';
import {
  AlertTriangle, SlidersHorizontal, Target, Keyboard, DatabaseZap, Focus, Repeat2, Settings2, PlayCircle, SearchCode,
  Lightbulb, CheckCircle2, Inspect, UsersRound
} from 'lucide-react';

const Stage_3_10_PhysicalDesignPPAOpt: React.FC = () => {
  const workflowItems = [
    {
      id: 'intelPPAOrch',
      icon: <SlidersHorizontal />,
      title: 'Intelligent PPA Optimization Orchestration:',
      description: 'The PPA Optimization Agent is the master conductor for the entire physical design flow. It intelligently orchestrates the integrated physical design EDA toolchain (including the Synthesis Agent, Physical Implementation Agent, and Timing Closure Agent from Section 2.2, all accessed via the MCP Server&apos;s Tool Abstraction Layer). Its core intelligence lies in systematically exploring valid parameter combinations and applying known optimization strategies to converge on optimal PPA.'
    },
    {
      id: 'engDrivenConstraints',
      icon: <Target />,
      title: 'Engineer-Driven Constraints & Goal Translation:',
      description: 'The process begins with our human design engineers setting precise, high-level PPA goals and constraints (e.g., target clock frequency, maximum power budget, specific area footprint). The PPA Optimization Agent translates these overarching objectives into granular, actionable directives and parameter sets for the underlying EDA tools. This translation is powered by:',
      nestedDetails: [
        {
          id: 'promptEng',
          icon: <Keyboard />,
          title: 'Prompt Engineering:',
          description: 'Carefully crafted prompts guide general-purpose LLMs to reason about the complex interplay of physical design parameters, analyze intermediate results, and propose intelligent modifications.'
        },
        {
          id: 'knowledgeHubRAG',
          icon: <DatabaseZap />,
          title: 'Knowledge Hub (RAG):',
          description: 'The agent extensively queries the Knowledge Hub (RAG) in the MCP Server, retrieving historical successful design methodologies, optimal tool parameter settings for similar blocks, past PPA trade-off analyses, and process-node specific guidelines. This provides crucial in-context learning and expert guidance.'
        },
        {
          id: 'targetedFineTune',
          icon: <Focus />,
          title: 'Targeted Fine-Tuning (Optional/Limited):',
          description: 'For highly specific and recurring optimization problems or to better interpret nuanced EDA tool logs and reports, limited, targeted fine-tuning of the underlying LLM can be applied. This focuses on narrow domain-specific understanding rather than broad model development, enhancing the agent&apos;s precision in critical optimization loops.'
        },
      ]
    },
    {
      id: 'sysParamExplore',
      icon: <Repeat2 />,
      title: 'Systematic Parameter Exploration & Iterative Refinement:',
      description: 'The agent drives iterative physical design runs, applying new parameter sets and analyzing the results. The loop involves:',
      nestedDetails: [
        {
          id: 'paramApp',
          icon: <Settings2 />,
          title: 'Parameter Application:',
          description: 'The agent sends an optimized set of parameters and directives to the relevant physical design agents (Synthesis, Physical Implementation, Timing Closure).'
        },
        {
          id: 'toolExec',
          icon: <PlayCircle />,
          title: 'Tool Execution:',
          description: 'The physical design agents execute the EDA tools.'
        },
        {
          id: 'resultAnalysis',
          icon: <SearchCode />,
          title: 'Result Analysis:',
          description: 'The PPA Optimization Agent meticulously analyzes the output PPA metrics (timing, power, area, congestion) and design rule violations from each run. It leverages prompt engineering and RAG to interpret complex reports and identify areas for improvement or violation.'
        },
        {
          id: 'strategicAdj',
          icon: <Lightbulb />,
          title: 'Strategic Adjustment:',
          description: 'Based on its analysis, the agent reasons about the next optimal set of parameter adjustments to guide the design towards convergence. This involves identifying which parameters to tweak, what values to try, and which optimization strategies to prioritize, always adhering to the engineer-defined constraints.'
        },
        {
          id: 'manufactureIntegrate',
          icon: <CheckCircle2 />,
          title: 'Manufacturability Integration:',
          description: 'The agent also integrates early feedback from the Yield Prediction Agent (from Stage 3.11) on potential manufacturing hotspots or yield detractors, factoring these into its PPA optimization decisions to ensure designs are not just optimal in PPA but also highly manufacturable.'
        },
      ]
    },
    {
      id: 'multiObjEval',
      icon: <Inspect />,
      title: 'Multi-Objective Evaluation & Continuous Feedback Loop:',
      description: 'After each physical design iteration, the system performs an automated, multi-objective evaluation of the agent&apos;s current output. This evaluation is a comprehensive assessment based on:<ul class="list-disc pl-5 mt-1 space-y-1 text-slate-400"><li>Direct PPA Metrics: Precise measurements of timing closure, dynamic and static power consumption, silicon area utilization, routing congestion, and physical design rule compliance.</li><li>Manufacturability Insights: Integration of early yield predictions. This continuous in-loop evaluation provides immediate quantitative feedback to the PPA Optimization Agent to inform its next strategic adjustment. Moreover, these evaluation results, tracked via platforms like LangSmith, contribute to the ongoing improvement of the underlying LLM prompts and the training data within the Knowledge Hub, ensuring the agent&apos;s intelligence continuously adapts and refines its optimization strategies for future designs.</li></ul>',
    },
    {
      id: 'deepCollab',
      icon: <UsersRound />,
      title: 'Deep Collaboration and Human Oversight:',
      description: 'The PPA Optimization Agent works in tight collaboration with other agents, receiving inputs from the Timing Closure Agent to resolve critical path delays and integrating analysis from the Power & Design Rule Check (DRC) Analysis Agent (from Section 2.2) for power integrity and manufacturing compliance. The Supervisor agent (from the Central Intelligence Hub) continuously tracks the PPA Optimization Agent&apos;s progress and convergence, ensuring adherence to overall project goals. The Human-in-the-Loop Interface provides transparent dashboards displaying these real-time evaluation metrics for human experts to monitor progress, understand the AI&apos;s reasoning for proposed changes, and intervene for strategic guidance, complex problem-solving, or to adjust higher-level constraints, maintaining essential human control over the ultimate design direction.'
    }
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.10 Stage 10: Physical Design &amp; PPA Optimization
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>The <strong>physical design stage</strong>—encompassing complex tasks like floorplanning, power grid design, cell
        placement, clock tree synthesis, routing, and iterative timing closure—represents the transformation of a logical design
        into a manufacturable physical layout. This phase involves navigating a colossal solution space with a near-infinite
        number of choices, where every decision has profound, often conflicting, impacts on <strong>Power, Performance, and
        Area (PPA)</strong>. Manually tuning the hundreds of parameters within highly specialized, commercial EDA tools to find
        the global optimum across these diverse objectives is a <strong>&quot;black art&quot;</strong> that is humanly
        impossible to perfect. This leads to <strong>sub-optimal designs</strong>, <strong>extended design convergence
        times</strong>, and missed market opportunities. Achieving aggressive PPA targets while meeting manufacturing constraints
        is the ultimate determinant of a chip&apos;s competitiveness.
      </p>
      <div className="mt-8 mb-4 flex items-center">
        <SlidersHorizontal className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
          Agentic Workflow: Constraint-Driven Optimization & Iterative Refinement through Intelligent Reasoning,
          Data-Guided Exploration, and Continuous In-Loop Evaluation
        </h3>
      </div>
      <p>To unlock unprecedented PPA optimization, accelerate design convergence, and consistently deliver market-leading silicon,
        our system employs an intelligent <strong>PPA Optimization Agent</strong> (a Physical Design & Optimization Agent from
        Section 2.2). This agent acts as the central intelligence of this stage, leveraging human expertise, sophisticated
        reasoning, and a rich knowledge base to drive systematic iterative refinement across the physical design flow.
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
      <p>This intelligent, constraint-driven approach, powered by continuous in-loop evaluation, fundamentally transforms the most
        challenging stage of chip development, dramatically accelerating convergence, reducing design cycles, and consistently
        achieving superior PPA results critical for market leadership, all while empowering human engineers with a powerful,
        data-guided assistant.
      </p>
    </div>
  );
};

export default Stage_3_10_PhysicalDesignPPAOpt;
