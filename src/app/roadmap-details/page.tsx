
"use client";
import React from 'react';
import Header from '@/components/chimera/Header';
import Footer from '@/components/chimera/Footer';
import MobileMenu from '@/components/chimera/MobileMenu';
import { NAV_LINKS } from '@/lib/chimera/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RoadmapDetailsPage() {
  const activeSection = "";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const toggleMobileMenu = React.useCallback(() => setIsMobileMenuOpen(prev => !prev), []);
  const closeMobileMenu = React.useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        navLinks={NAV_LINKS}
        activeSection={activeSection}
        onMobileMenuToggle={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <MobileMenu
        navLinks={NAV_LINKS}
        isMobileMenuOpen={isMobileMenuOpen}
        onLinkClick={closeMobileMenu}
        activeSection={activeSection}
      />
      <main className="flex-grow container mx-auto px-6 py-12 pt-24 md:pt-32">
        <div className="mb-12">
          <Link href="/" passHref>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              &larr; Back to Project Overview
            </Button>
          </Link>
        </div>

        <article className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-10">
            Section 7: A Phased Roadmap for Implementation (2025-2030)
          </h1>
          <p>This ambitious vision will be realized through a pragmatic, phased, five-year implementation plan. The strategy is divided into three distinct phases—Crawl, Walk, and Run—each with clear objectives, actions, and measurable success metrics. This approach allows for iterative development, risk management, and the progressive scaling of both technology and cultural adoption.</p>

          <h2 className="text-3xl font-semibold text-sky-400 !mt-12 !mb-6 border-b border-sky-600 pb-2">
            7.1 Phase 1 (Year 1 - 1.5): Foundational Infrastructure and Pilot Projects (The &quot;Crawl&quot; Phase)
          </h2>
          <p><strong>Timeline:</strong> Q3 2025 - Q4 2026</p>
          <p><strong>Objectives:</strong> The primary goal of this initial phase is to build the core technical infrastructure and demonstrate the viability of the agentic approach on a limited, high-impact pilot project.</p>
          <p><strong>Actions:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Deploy the initial version of the MCP Server, utilizing LangGraph for orchestration, LangSmith for observability, and a PostgreSQL backend with the pgvector extension for the knowledge base.</li>
            <li>Execute a large-scale data ingestion project to populate the RAG knowledge base with all existing design documentation, technical manuals, and standard cell library data.</li>
            <li>Select and execute a pilot project: developing and deploying the agentic Test-Driven Development (TDD) workflow (as described in Section 3.2) for a single, non-critical IP block.</li>
          </ul>
          <p><strong>Success Metrics:</strong> Successful deployment of the pilot agentic workflow; achievement of a &gt;95% functional test pass rate for the AI-generated RTL; a measurable reduction in design and verification time for the pilot IP block compared to human-only baseline.</p>

          <h2 className="text-3xl font-semibold text-purple-400 !mt-12 !mb-6 border-b border-purple-600 pb-2">
            7.2 Phase 2 (Year 1.5 - 3): Scaling Agentic Workflows and Cultural Integration (The &quot;Walk&quot; Phase)
          </h2>
          <p><strong>Timeline:</strong> Q1 2027 - Q4 2028</p>
          <p><strong>Objectives:</strong> Expand the application of agentic workflows to cover more of the design pipeline, integrate them into mainstream project flows, and drive cultural adoption across the engineering organization.</p>
          <p><strong>Actions:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Develop and deploy the autonomous PPA Optimization Agent (Section 3.4) and the AIvril-inspired Verification Agent (Section 3.3).</li>
            <li>Integrate these new agentic workflows into the standard design methodology for all new mainstream chip design projects.</li>
            <li>Launch an internal &quot;Agent Academy&quot; and certification program to formally train engineers in prompt engineering, agent workflow design, and MLOps principles.</li>
            <li>Host internal hackathons to encourage the development of custom, engineer-built agents (Section 4.2).</li>
          </ul>
          <p><strong>Success Metrics:</strong> Demonstration of &gt;15% improvement in PPA on the first projects using the PPA agent; achievement of &gt;50% reduction in verification closure time; 80% of the design engineering workforce trained and certified through the Agent Academy.</p>

          <h2 className="text-3xl font-semibold text-fuchsia-400 !mt-12 !mb-6 border-b border-fuchsia-600 pb-2">
            7.3 Phase 3 (Year 3 - 5): Full-Stack Autonomy and Market Leadership (The &quot;Run&quot; Phase)
          </h2>
          <p><strong>Timeline:</strong> Q1 2029 - Q4 2030</p>
          <p><strong>Objectives:</strong> Achieve a fully integrated, end-to-end agentic design system that operates with a high degree of autonomy, and leverage this unique capability to establish undisputed market leadership.</p>
          <p><strong>Actions:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Integrate all five stages of the pipeline (from Spec to Post-Silicon) into a single, seamless workflow orchestrated by a hierarchical supervisor architecture.</li>
            <li>Empower the system to begin autonomously suggesting novel architectures and design improvements based on emergent insights from its holistic view of the pipeline.</li>
            <li>Initiate the first projects to design novel AI accelerator chips using the Chimera system itself, thereby closing the symbiotic loop between AI and silicon design.</li>
          </ul>
          <p><strong>Success Metrics:</strong> Achievement of &gt;30% reduction in the overall design cycle time from initial specification to final tape-out; clear market leadership in PPA benchmarks for key product segments; successful tape-out of the first &quot;AI-designed AI chip&quot; prototype.</p>
          
          <h2 className="text-3xl font-semibold text-white !mt-12 !mb-6 border-b border-slate-700 pb-2">
            Roadmap Summary Table
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700">
              <thead className="bg-slate-800/50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">Phase</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">Timeline</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">Key Objectives</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">Core Technologies to Deploy</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">People & Culture Focus</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-sky-300">Key Success Metrics/KPIs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700 bg-slate-800/30">
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">1: Crawl</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Q3 2025 - Q4 2026</td>
                  <td className="px-4 py-3 text-sm">Build foundational infrastructure; Prove viability with a pilot project.</td>
                  <td className="px-4 py-3 text-sm">MCP Server v1.0, LangGraph, LangSmith, RAG Knowledge Base, RTL TDD Agent.</td>
                  <td className="px-4 py-3 text-sm">Identify early adopters; Form a core AI platform team.</td>
                  <td className="px-4 py-3 text-sm">Pilot project success; Infrastructure stability; >95% RTL test pass rate.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">2: Walk</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Q1 2027 - Q4 2028</td>
                  <td className="px-4 py-3 text-sm">Scale agentic workflows; Drive cultural adoption and training.</td>
                  <td className="px-4 py-3 text-sm">PPA Optimization Agent (RL), AIvril Verification Agent, CI/CD for Agents.</td>
                  <td className="px-4 py-3 text-sm">Launch &quot;Agent Academy&quot;; Train all engineers; Foster custom agent development.</td>
                  <td className="px-4 py-3 text-sm">&gt;15% PPA improvement; &gt;50% verification time reduction; 80% of engineers trained.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">3: Run</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">Q1 2029 - Q4 2030</td>
                  <td className="px-4 py-3 text-sm">Achieve full-stack autonomy; Leverage system for market dominance.</td>
                  <td className="px-4 py-3 text-sm">Hierarchical Supervisor; End-to-end integrated workflow; Emergent insight analysis.</td>
                  <td className="px-4 py-3 text-sm">Shift from agent users to agent orchestrators; AI-first design culture.</td>
                  <td className="px-4 py-3 text-sm">&gt;30% end-to-end cycle time reduction; Market leadership in PPA; First AI-designed chip tape-out.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-semibold text-white !mt-12 !mb-6 border-b border-slate-700 pb-2">
            Conclusion
          </h2>
          <p>The strategy detailed in Project Chimera represents a paradigm shift. It is a calculated departure from the incremental improvements of the past and a bold stride into an AI-native future. This is not an investment in a single tool or a marginal process optimization; it is the comprehensive re-architecting of our company&apos;s most fundamental competency: the art and science of semiconductor design. By embracing the power of multi-agent systems, we will not only solve the immediate challenges of post-Moore&apos;s Law complexity but also build a sustainable, compounding advantage that will be nearly impossible for competitors to replicate.</p>
          <p>The path is ambitious and fraught with challenges, both technical and cultural. It requires significant investment, unwavering executive commitment, and a willingness to transform how we work. However, the alternative—clinging to traditional methodologies in an era of exponential technological change—is a far greater risk. Project Chimera provides the blueprint to navigate this transformation successfully. By executing this plan, we will not only secure our position as the world&apos;s preeminent designer of semiconductor chips but also become the architects of the very silicon that will power the future of artificial intelligence itself. The time to act is now.</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
