
import React from 'react';

const ArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-3 text-white">Architectural Blueprint</h2>
      <p className="text-slate-400 text-center text-lg mb-12 max-w-3xl mx-auto">
        A Multi-Agent System (MAS) for end-to-end design. This collaborative network of specialized AI agents, orchestrated by a central hub, is designed for modularity, scalability, and robustness.
      </p>
      
      <div className="space-y-12">
        {/* Supervisor-Worker Pattern */}
        <div className="section-card rounded-2xl p-8 md:p-10">
          <h3 className="text-3xl font-bold mb-4 gradient-text">Supervisor-Worker Pattern with LangGraph</h3>
          <p className="text-slate-300 mb-4">
            We employ a <strong>Supervisor-Worker architecture</strong> for a balance of flexibility and control, implemented using <strong>LangGraph</strong>.
            The Supervisor agent acts as a project manager, decomposing high-level goals (e.g., "Design a low-power RISC-V core") into sub-tasks and delegating them to specialized Worker agents (e.g., Spec Analyst, Verilog Coder, PPA Optimizer).
          </p>
          <p className="text-slate-300">
            LangGraph models the workflow as a state machine where agents are nodes and the Supervisor controls edges, directing execution. This centralized control, via a shared persistent state object, ensures transparency and auditability, crucial for MLOps and governance.
          </p>
        </div>

        {/* MCP Server & RAG/CAG */}
        <div className="section-card rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 gradient-text">The MCP Server: Central Nervous System</h3>
              <p className="text-slate-300 mb-6">The <strong>Multi-Agent Collaboration Protocol (MCP) Server</strong> is the stateful, intelligent hub for Tools, Knowledge, and State, acting as the brain and memory for the MAS. It's inspired by services like LangConnect.</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-7 w-7 text-sky-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
                  <div><strong className="text-white">Tool Abstraction Layer:</strong> Standardized, version-controlled API for agents to access EDA software (Synopsys DSO.ai, Cadence Cerebrus, JasperGold), custom scripts, and utilities.</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-7 w-7 text-sky-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7s0 0 0 0" /></svg>
                  <div><strong className="text-white">Knowledge Hub (RAG):</strong> Version-controlled vector database (e.g., PostgreSQL with pgvector) of all proprietary and public data (PDKs, libraries, datasheets, design history), turning history into a queryable asset for factual grounding and preventing hallucinations.</div>
                </li>
                <li className="flex items-start">
                  <svg className="h-7 w-7 text-sky-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h6.172a2 2 0 011.414.586l3.828 3.828A2 2 0 0117 8z" /></svg>
                  <div><strong className="text-white">Context & State Management (CAG):</strong> Manages short-term "working memory" of ongoing tasks (conversational history, recent action results, project state) using Cache-Augmented Generation for efficient, iterative problem-solving.</div>
                </li>
              </ul>
               <p className="text-slate-300 mt-6">This hybrid <strong>RAG/CAG architecture</strong> provides agents with both static, factual knowledge and dynamic, task-specific context, enabling contextual intelligence.</p>
            </div>
            <div className="md:col-span-3">
              <div className="glassmorphism rounded-xl p-6 border-2 border-slate-700">
                <svg width="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <style>
                    {`
                      .supervisor { fill: hsl(var(--diagram-supervisor-fill)); }
                      .worker { fill: hsl(var(--diagram-worker-fill)); }
                      .mcp { fill: hsl(var(--diagram-mcp-fill)); stroke: hsl(var(--diagram-mcp-stroke)); stroke-width: 1.5; }
                      .mcp-internal { fill: hsl(var(--diagram-mcp-internal-fill)); }
                      .text-label { font-family: var(--font-inter, 'Inter', sans-serif); font-size: 10px; fill: hsl(var(--diagram-text-fill)); }
                      .text-label-small { font-family: var(--font-inter, 'Inter', sans-serif); font-size: 9px; fill: hsl(var(--diagram-muted-text-fill)); }
                      .text-title { font-family: var(--font-inter, 'Inter', sans-serif); font-size: 11px; font-weight: bold; fill: hsl(var(--diagram-title-text-fill)); }
                      .arrow { stroke: hsl(var(--diagram-arrow-stroke)); stroke-width: 1.5; marker-end: url(#arrowhead); }
                      .dashed-arrow { stroke: hsl(var(--diagram-arrow-stroke)); stroke-width: 1.5; stroke-dasharray: 4 2; marker-end: url(#arrowhead-dashed); }
                    `}
                  </style>
                  <defs>
                    <marker id="arrowhead" markerWidth="7" markerHeight="5" refX="5" refY="2.5" orient="auto" markerUnits="strokeWidth"><polygon points="0 0, 7 2.5, 0 5" fill="hsl(var(--diagram-arrow-stroke))" /></marker>
                    <marker id="arrowhead-dashed" markerWidth="7" markerHeight="5" refX="5" refY="2.5" orient="auto" markerUnits="strokeWidth"><polygon points="0 0, 7 2.5, 0 5" fill="hsl(var(--diagram-arrow-stroke))" /></marker>
                  </defs>

                  {/* Supervisor Agent */}
                  <text x="200" y="10" textAnchor="middle" className="text-label" fontStyle="italic">"Project Manager"</text>
                  <circle cx="200" cy="45" r="32" className="supervisor" />
                  <text x="200" y="44" textAnchor="middle" className="text-title">Supervisor</text>
                  <text x="200" y="56" textAnchor="middle" className="text-label">(LangGraph)</text>
                  
                  {/* Worker Agents */}
                  <g> {/* RTL Coder */}
                      <circle cx="70" cy="125" r="28" className="worker" />
                      <text x="70" y="122" textAnchor="middle" className="text-label">RTL</text>
                      <text x="70" y="133" textAnchor="middle" className="text-label">Coder</text>
                  </g>
                  <g> {/* Verify Agent */}
                      <circle cx="155" cy="125" r="28" className="worker" />
                      <text x="155" y="122" textAnchor="middle" className="text-label">Verify</text>
                      <text x="155" y="133" textAnchor="middle" className="text-label">Agent</text>
                  </g>
                  <g> {/* PPA Opt. Agent */}
                      <circle cx="245" cy="125" r="28" className="worker" />
                      <text x="245" y="122" textAnchor="middle" className="text-label">PPA Opt.</text>
                      <text x="245" y="133" textAnchor="middle" className="text-label">Agent</text>
                  </g>
                  <g> {/* Spec Analyst */}
                      <circle cx="330" cy="125" r="28" className="worker" />
                      <text x="330" y="122" textAnchor="middle" className="text-label">Spec</text>
                      <text x="330" y="133" textAnchor="middle" className="text-label">Analyst</text>
                  </g>
                  
                  {/* Connections: Supervisor to Workers - Straight lines to edges */}
                  <path d="M 172.74,61.77 L 93.85,110.33" className="arrow" fill="none" /> {/* Sup to RTL Coder */}
                  <path d="M 184.25,72.79 L 168.78,100.68" className="arrow" fill="none" /> {/* Sup to Verify Agent */}
                  <path d="M 215.75,72.79 L 231.22,100.68" className="arrow" fill="none" /> {/* Sup to PPA Opt. */}
                  <path d="M 227.26,61.77 L 306.15,110.33" className="arrow" fill="none" /> {/* Sup to Spec Analyst */}
                  
                  {/* MCP Server Box */}
                  <rect x="30" y="195" width="340" height="95" rx="10" className="mcp" />
                  <text x="200" y="210" textAnchor="middle" className="text-title">MCP Server (RAG/CAG)</text>
                  
                  {/* MCP Internal Components */}
                  <g> {/* Tool Abstraction */}
                      <rect x="40" y="225" width="100" height="55" rx="5" className="mcp-internal" />
                      <text x="90" y="240" textAnchor="middle" className="text-label">Tool Abstraction</text> {/* Adjusted Y */}
                      <text x="90" y="253" textAnchor="middle" className="text-label-small">(EDA, Scripts)</text> {/* Adjusted Y */}
                  </g>
                  <g> {/* Knowledge Hub */}
                      <rect x="150" y="225" width="100" height="55" rx="5" className="mcp-internal" />
                      <text x="200" y="235" textAnchor="middle" className="text-label">Knowledge Hub</text> {/* Adjusted Y */}
                      <text x="200" y="247" textAnchor="middle" className="text-label-small">(RAG - PDKs, IP)</text> {/* Adjusted Y */}
                      <text x="200" y="259" textAnchor="middle" className="text-label-small">Vector DB</text> {/* Adjusted Y */}
                  </g>
                  <g> {/* Context/State */}
                      <rect x="260" y="225" width="100" height="55" rx="5" className="mcp-internal" />
                      <text x="310" y="235" textAnchor="middle" className="text-label">Context/State</text> {/* Adjusted Y */}
                      <text x="310" y="247" textAnchor="middle" className="text-label-small">(CAG - Working Mem)</text> {/* Adjusted Y */}
                      <text x="310" y="259" textAnchor="middle" className="text-label-small">Cache</text> {/* Adjusted Y */}
                  </g>

                  {/* Connections: Workers to MCP - Curved dashed lines to top edge of MCP server */}
                  <path d="M 70,153 Q 80,184 90,195" className="dashed-arrow" fill="none"/> {/* RTL to MCP (Tool Abstraction) */}
                  <path d="M 155,153 Q 172.5,184 190,195" className="dashed-arrow" fill="none"/> {/* Verify to MCP (Knowledge Hub Left) */}
                  <path d="M 245,153 Q 227.5,184 210,195" className="dashed-arrow" fill="none"/> {/* PPA to MCP (Knowledge Hub Right) */}
                  <path d="M 330,153 Q 320,184 310,195" className="dashed-arrow" fill="none"/> {/* Spec to MCP (Context/State) */}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
