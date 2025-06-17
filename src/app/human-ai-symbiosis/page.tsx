"use client";
import React from 'react';
import Header from '@/components/chimera/Header';
import Footer from '@/components/chimera/Footer';
import { NAV_LINKS } from '@/lib/chimera/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HumanAiSymbiosisPage() {
  const activeSection = "";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const toggleMobileMenu = React.useCallback(() => setIsMobileMenuOpen(prev => !prev), []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        navLinks={NAV_LINKS}
        activeSection={activeSection}
        onMobileMenuToggle={toggleMobileMenu}
      />
      <main className="flex-grow container mx-auto px-6 py-12 pt-24 md:pt-32">
        <div className="mb-12">
          <Link href="/" passHref>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white">
              &larr; Back to Project Overview
            </Button>
          </Link>
        </div>

        <article className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-10">
            Section 4: The Human-AI Symbiosis: Empowering Engineers and Fostering an AI-Driven Culture
          </h1>
          <p>A technological transformation of this magnitude cannot succeed without addressing the critical human element. The goal of Project Chimera is not to replace our world-class engineering talent, but to amplify it. This requires a deliberate strategy to evolve the role of the engineer, provide them with new tools and skills, and cultivate a culture of trust and continuous improvement. This is achieved by making the AI systems transparent and debuggable, which is the primary mechanism for building confidence and encouraging adoption.</p>

          <h2 className="text-3xl font-semibold text-white !mt-12 !mb-6 border-b border-slate-700 pb-2">
            4.1 From Tool User to Agent Orchestrator: The Evolving Role of the Design Engineer
          </h2>
          <p>The introduction of a multi-agent system will fundamentally shift the day-to-day responsibilities of a design engineer. The focus of their work will elevate from performing low-level, repetitive implementation tasks to a more strategic, supervisory role. The engineer of the future will be an agent orchestrator.</p>
          <p>Their core responsibilities will include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>High-Level Design and Prompting:</strong> Defining the strategic goals and constraints for a design project and translating them into effective prompts for the Supervisor agent.</li>
            <li><strong>Workflow Curation:</strong> Designing, customizing, and managing the agentic workflows within frameworks like LangGraph to suit the specific needs of their project.</li>
            <li><strong>Human-in-the-Loop Supervision:</strong> Acting as the ultimate decision-maker, guiding the AI&apos;s strategic choices, approving key milestones, and intervening to resolve complex, ambiguous, or novel problems that the agents cannot handle on their own.</li>
          </ul>
          <p>This evolution empowers engineers to manage multiple, complex design explorations in parallel, effectively multiplying their creative output and allowing them to focus on the architectural innovations that drive true market differentiation.</p>

          <h2 className="text-3xl font-semibold text-white !mt-12 !mb-6 border-b border-slate-700 pb-2">
            4.2 Building Custom Tools: Automating EDA Workflows with Python and AI Agents
          </h2>
          <p>To foster adoption and innovation, engineers must be empowered not just to use the system, but to extend it. We will promote a culture of &quot;citizen AI development,&quot; where engineers can build their own lightweight, custom agents and tools to automate their specific, niche workflows.</p>
          <p>Python will be established as the universal &quot;glue&quot; language for this ecosystem, leveraging its powerful libraries for data analysis (e.g., Pandas) and AI development (e.g., LangChain). An engineer, for example, could quickly develop a simple agent that automates their personal process for running regressions, parsing the resulting log files for specific error patterns, and generating a formatted summary report. Once created and validated, these custom tools can be registered with the central MCP Server, making them available for use by the entire organization&apos;s agent ecosystem.</p>

          <h2 className="text-3xl font-semibold text-white !mt-12 !mb-6 border-b border-slate-700 pb-2">
            4.3 A Culture of Continuous Improvement: MLOps and CI/CD for Agentic Systems
          </h2>
          <p>Our AI agents and workflows must be treated with the same rigor as production software. A robust MLOps (Machine Learning Operations) framework is essential for managing the lifecycle of these complex systems.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>CI/CD for LLM Applications:</strong> A Continuous Integration/Continuous Deployment (CI/CD) pipeline will be established for all agentic systems. Whenever a change is made—to an agent&apos;s prompt, its underlying model, or one of its tools—an automated workflow will be triggered. This workflow will run the agent against a &quot;golden dataset&quot; of test cases to evaluate its performance.</li>
            <li><strong>Evaluation-Driven Development:</strong> Changes will be automatically blocked from being deployed to production if they cause a regression in key performance metrics, such as correctness, factual groundedness, or tool-use accuracy. This evaluation-driven approach ensures that our AI systems only improve over time.</li>
            <li><strong>Continuous Testing:</strong> We will leverage AI to test AI. Specialized AI testing agents will be deployed to continuously probe our design agents for weaknesses, identify edge-case failures, and even automatically repair and update broken test scripts, ensuring our evaluation suites remain robust and comprehensive.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-white !mt-12 !mb-6 border-b border-slate-700 pb-2">
            4.4 Observability and Debugging: Ensuring Reliability with LangSmith
          </h2>
          <p>Given the inherent complexity and non-deterministic nature of multi-agent systems, comprehensive observability is non-negotiable. A major barrier to AI adoption in high-stakes fields like EDA is the &quot;black box&quot; problem—engineers are reluctant to trust a system they cannot understand. To overcome this, we will standardize on LangSmith as the central platform for LLM application development, monitoring, and debugging.</p>
          <p>LangSmith provides the transparency needed to build trust:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>End-to-End Tracing:</strong> It captures a complete, detailed trace of every agentic workflow. An engineer can visualize the entire process, from the Supervisor&apos;s initial decomposition of a task to every sub-agent&apos;s LLM call, tool invocation, and final output. When an agent produces an incorrect result, the engineer can &quot;look under the hood&quot; to see the exact point of failure in its reasoning chain, transforming the AI from an opaque oracle into a debuggable system.</li>
            <li><strong>Testing and Evaluation:</strong> LangSmith&apos;s evaluation suite will be integrated directly into our CI/CD pipelines. It will be used to run experiments, A/B test different agent versions, and track performance metrics on our curated datasets over time.</li>
            <li><strong>Human Feedback Integration:</strong> The platform will be used to systematically collect, categorize, and analyze feedback from engineers on agent performance. Annotation queues will be established to have experts review failed traces, identify the root cause, and generate new, high-quality training examples to continuously improve the agents&apos; capabilities.</li>
          </ul>
        </article>
      </main>
      <Footer />
    </div>
  );
}
