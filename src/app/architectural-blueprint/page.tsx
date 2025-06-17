"use client";
import React from 'react';
import Header from '@/components/chimera/Header';
import Footer from '@/components/chimera/Footer';
import { NAV_LINKS } from '@/lib/chimera/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ArchitecturalBlueprintPage() {
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
            Section 2: Architectural Blueprint: A Multi-Agent System for End-to-End Design
          </h1>
          <p>To realize the strategic vision of full-stack AI integration, a new technical architecture is required. A monolithic AI model is insufficient for the multifaceted, domain-specific nature of semiconductor design. The proposed solution is a sophisticated Multi-Agent System (MAS), a collaborative network of specialized AI agents orchestrated by a central intelligence hub. This section details the technical blueprint for this system, outlining its core components, communication protocols, and the rationale behind its design.</p>

          <h2 className="text-3xl font-semibold text-white !mt-12 !mb-6 border-b border-slate-700 pb-2">
            2.1 Foundations of Multi-Agent Systems: Orchestrating Collaborative Intelligence
          </h2>
          <p>A Multi-Agent System is composed of multiple autonomous, intelligent agents, each with specialized capabilities and goals, that interact within a shared environment to solve problems far too complex for any single agent. This architectural paradigm is uniquely suited to the challenges of semiconductor design for several key reasons:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Modularity and Specialization:</strong> The chip design process is naturally divisible into distinct domains of expertise (e.g., RTL generation, formal verification, physical design, PPA optimization). A MAS allows for the creation of dedicated &quot;expert&quot; agents for each domain. This modularity improves performance, as each agent can be optimized for its specific task, and enhances maintainability, as components can be developed, tested, and updated independently.</li>
            <li><strong>Scalability:</strong> As design challenges evolve and new technologies emerge (e.g., new process nodes, new memory types), new specialized agents can be seamlessly integrated into the system to handle these new requirements without needing to re-architect the entire framework.</li>
            <li><strong>Robustness and Debuggability:</strong> The inherent separation of concerns in a MAS makes it easier to trace logic, isolate failures, and resolve issues. If a verification task fails, the problem can be traced directly to the Verification Agent and its interactions, rather than attempting to debug an opaque, monolithic system.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-white !mt-12 !mb-6 border-b border-slate-700 pb-2">
            2.2 The Supervisor-Worker Pattern: A LangGraph-based Framework for Task Delegation
          </h2>
          <p>While several MAS architectures exist, the choice of architecture is a critical strategic decision. A decentralized &quot;Swarm&quot; or &quot;Network&quot; architecture, where any agent can communicate with any other, offers maximum flexibility but introduces a high degree of complexity and unpredictability. The emergent behaviors in such systems are difficult to control, audit, and debug—a level of risk that is unacceptable in the capital-intensive, high-stakes world of semiconductor design.</p>
          <p>Therefore, this plan advocates for a Supervisor-Worker architecture. This model provides the necessary balance of flexibility and control.</p>
          <p><strong>Architecture:</strong> The system is built around a central Supervisor agent that acts as the orchestrator or &quot;project manager&quot;. This agent receives a high-level design goal (e.g., &quot;Design a low-power RISC-V core for an edge IoT device&quot;). It then decomposes this goal into a sequence of concrete sub-tasks and delegates them to the appropriate specialized Worker agents (e.g., a &quot;Spec Analyst Agent,&quot; a &quot;Verilog Coder Agent,&quot; a &quot;PPA Optimization Agent&quot;). Control always returns to the Supervisor after a worker completes its task, allowing for centralized monitoring and decision-making.</p>
          <p><strong>Implementation Framework:</strong> This architecture will be implemented using LangGraph, an open-source library designed for building stateful, multi-agent applications. In LangGraph, the entire workflow is modeled as a state machine or graph. The agents are the &quot;nodes&quot; of the graph, and the Supervisor agent controls the &quot;edges,&quot; directing the flow of execution from one node to the next based on the current state of the project. Communication and state are managed via a shared, persistent state object that is passed between agents. This centralized control flow is not merely a technical choice; it is a strategic one. It provides a single point of observation, making the entire system transparent and auditable. This is critical for MLOps, governance, and debugging, aligning perfectly with the risk-averse nature of the semiconductor industry.</p>
          
          <h2 className="text-3xl font-semibold text-white !mt-12 !mb-6 border-b border-slate-700 pb-2">
            2.3 The MCP Server: A Central Nervous System for Tools, Knowledge, and State
          </h2>
          <p>The Supervisor and Worker agents require a robust infrastructure to support their operations. The cornerstone of this infrastructure is the MCP (Multi-Agent Collaboration Protocol) Server. This is not simply a tool repository; it is a stateful, intelligent hub that serves as the brain and memory for the entire multi-agent system. Its architecture is inspired by services like LangConnect, which provide a managed API for RAG applications. The MCP Server will perform three critical functions:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Tool Abstraction Layer:</strong> It will provide a standardized, version-controlled API for agents to access all necessary tools. This includes commercial EDA software (e.g., Synopsys DSO.ai, Cadence Cerebrus, JasperGold) as well as custom-built Python scripts and internal utilities. This abstracts away the complexity of individual tool interfaces, allowing agents to invoke them with simple, standardized calls.</li>
            <li><strong>Knowledge Hub (RAG):</strong> The server will host and manage a comprehensive, version-controlled vector database that acts as the long-term memory of the organization. This knowledge base will be populated with all relevant public and proprietary data: process design kits (PDKs), standard cell libraries, datasheets, technical manuals, internal design guidelines, and, most importantly, the complete data from every previous chip design project. This turns our entire design history into a searchable, queryable asset.</li>
            <li><strong>Context &amp; State Management (CAG):</strong> The server will manage the short-term, dynamic context of ongoing design tasks. This includes the conversational history between agents, the results of recent actions, and the current project state. It will employ caching mechanisms (Cache-Augmented Generation) to store and quickly retrieve frequently accessed information, reducing latency and computational cost.</li>
          </ul>
          <p>Over time, this MCP Server will evolve into the company&apos;s most valuable piece of intellectual property. It is the digital twin of our collective engineering expertise, a learning system that encapsulates our unique design methodologies and grows more powerful with every chip we produce.</p>

          <h2 className="text-3xl font-semibold text-white !mt-12 !mb-6 border-b border-slate-700 pb-2">
            2.4 Grounding Agents in Reality: A Hybrid RAG/CAG Architecture for Contextual Intelligence
          </h2>
          <p>To perform complex reasoning, agents need access to two types of information: static, factual knowledge and dynamic, task-specific context. The MCP Server is designed to provide both through a hybrid architecture that seamlessly blends Retrieval-Augmented Generation (RAG) and Context-Augmented Generation (CAG).</p>
          <p><strong>RAG for Factual Grounding:</strong> Agents will use RAG to query the MCP Server&apos;s knowledge hub for external, objective information. For example, a Verification Agent might ask, &quot;What are the specific timing constraints for the PCIe Gen 6 interface on the 3nm process node?&quot; The RAG system retrieves the relevant section from the PDK documentation and provides it to the agent. This process grounds the agent&apos;s actions in verified facts, preventing factual errors or &quot;hallucinations&quot; and ensuring designs comply with the latest specifications.</p>
          <p><strong>CAG for Conversational Context:</strong> Agents will use CAG to maintain awareness of the current, ongoing task. This provides them with a &quot;working memory.&quot; For example, a PPA Optimization Agent might reason, &quot;Given that my last three attempts to fix the timing violation on this path by increasing drive strength have failed, what alternative strategies are available in the standard cell library?&quot; The CAG system provides the history of its recent actions, enabling it to avoid repeating mistakes and engage in more sophisticated, iterative problem-solving.</p>
          <p>This hybrid RAG/CAG system is the key to unlocking true contextual intelligence. The Supervisor agent can fluidly switch between these modes, for instance, using RAG to fetch the initial design specification and then using CAG to track the progress of its worker agents against that specification. This combination of long-term knowledge and short-term memory is what will allow our agentic system to tackle the complex, multi-step challenges of modern chip design.</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
