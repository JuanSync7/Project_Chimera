
// src/app/modern-pricing-model/page.tsx
"use client";
import React from 'react';
import SubPageLayout from '@/components/chimera/SubPageLayout';
import {
  DollarSign,
  Package,
  Cpu,
  Settings2,
  Target,
  Layers3,
  Workflow,
  TableIcon // Assuming TableIcon is a valid Lucide icon or a custom one
} from 'lucide-react';

export default function ModernPricingModelPage() {
  return (
    <SubPageLayout backButtonHref="/roadmap-details" backButtonText="&larr; Back to Roadmap Overview">
      <article className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6">
        <div className="flex flex-col items-center text-center mb-12">
          <DollarSign className="h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-2 md:leading-tight">
            Modern Pricing Model for AI-Driven Services
          </h1>
          <p className="text-2xl text-slate-400">Aligning Value, Cost, and Customer Success</p>
        </div>

        <p>This framework outlines an evolution from traditional, potentially risky pricing models (like per-seat or engineering-hour) to a more sophisticated, value-aligned approach for an AI-driven chip design company. The core solution lies in a <strong>hybrid pricing model</strong>, which is rapidly becoming the standard for AI-native applications leveraging foundation models. This approach combines the predictability of a subscription with a usage-based component, directly reflecting the variable costs of underlying AI compute, and further evolves into outcome-based pricing for its most valuable clients.</p>

        <div className="mt-16 mb-4"> {/* First H2 on page */}
          <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
            The Need for a Modern Pricing Model
          </h2>
        </div>
        <p>The traditional "per-seat" SaaS model or the "engineering-hour" model is inherently risky and fails to capture the true value of the company's AI-driven capabilities. If a customer's usage of the underlying Large Language Models (LLMs) is high, a flat-rate subscription could easily lead to financial losses. Furthermore, billing by the hour undervalues the immense speed, optimization, and superior results delivered by the AI, and it doesn't properly account for the significant underlying compute costs. The value the company provides is no longer just about human time; it's about the powerful combination of expert human oversight, the AI's computational effort, and, most importantly, the superior results it delivers.</p>

        <div className="mt-24 mb-4">
          <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
            The Hybrid Pricing Structure: The Solution
          </h2>
        </div>
        <p>To align pricing with the value created and the costs incurred, a <strong>hybrid, value-aligned pricing model</strong> is essential. This approach consists of two primary components, with a further evolution for enterprise clients:</p>

        <div className="mt-8 mb-4 flex items-center">
          <Package className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
            1. Platform Access Fee (The Subscription):
          </h3>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white font-semibold">Description:</strong> This is a recurring monthly or annual fee that grants the customer access to the proprietary platform. This includes the agentic framework, the non-LLM AI agents, the user interface, and standard support.</li>
          <li><strong className="text-white font-semibold">Value:</strong> This fee provides the company with predictable revenue to cover its fixed costs, such as platform development and maintenance.</li>
        </ul>

        <div className="mt-8 mb-4 flex items-center">
          <Cpu className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
            2. AI Compute Usage (The Metered Component):
          </h3>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white font-semibold">Description:</strong> This part covers the variable costs of calling external LLMs (like those from Anthropic or Google). Instead of billing directly for API calls, this would be abstracted into a more user-friendly metric: "AI Compute Credits."</li>
          <li><strong className="text-white font-semibold">How Credits Work:</strong> Every time one of the agents makes a call to an external LLM for a task (e.g., generating RTL code, analyzing a report, or PPA optimization), it consumes a certain number of credits. The number of credits consumed would be based on the number of input and output tokens processed by the third-party model, mirroring how LLM providers bill the company.</li>
          <li><strong className="text-white font-semibold">Transparency:</strong> This model is highly transparent. Customers can be shown exactly how many credits each action consumes, enabling them to manage their usage and understand their bill effectively. This directly and transparently covers the variable costs of running the AI.</li>
        </ul>

        <div className="mt-24 mb-4">
          <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
            Proposed Tiered Subscription Model
          </h2>
        </div>
        <p>Using this hybrid structure, tiers can be designed that cater to different customer needs while protecting margins:</p>
        
        <div className="overflow-x-auto my-6 not-prose">
          <table className="min-w-full divide-y divide-slate-700 text-sm">
            <thead className="bg-slate-800/50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left font-medium uppercase tracking-wider text-sky-300">Tier</th>
                <th scope="col" className="px-4 py-3 text-left font-medium uppercase tracking-wider text-sky-300">Target Customer</th>
                <th scope="col" className="px-4 py-3 text-left font-medium uppercase tracking-wider text-sky-300">Platform Fee</th>
                <th scope="col" className="px-4 py-3 text-left font-medium uppercase tracking-wider text-sky-300">Included AI Compute Credits</th>
                <th scope="col" className="px-4 py-3 text-left font-medium uppercase tracking-wider text-sky-300">Overage Rate</th>
                <th scope="col" className="px-4 py-3 text-left font-medium uppercase tracking-wider text-sky-300">Key Features</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700 bg-slate-800/30">
              <tr>
                <td className="px-4 py-3 align-top"><strong className="text-white font-semibold">Professional</strong></td>
                <td className="px-4 py-3 align-top">Individuals or small teams with specific project needs.</td>
                <td className="px-4 py-3 align-top">Fixed monthly fee (e.g., £500/month)</td>
                <td className="px-4 py-3 align-top">A baseline amount (e.g., 1 million credits/month) sufficient for standard design and optimization tasks.</td>
                <td className="px-4 py-3 align-top">Standard rate (e.g., £0.02 per 1,000 credits).</td>
                <td className="px-4 py-3 align-top">Access to core agents: PPA Optimization, Verification & Formal Analysis, and the Hierarchical Supervisor. Standard support.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top"><strong className="text-white font-semibold">Business</strong></td>
                <td className="px-4 py-3 align-top">Mid-sized design teams running multiple projects.</td>
                <td className="px-4 py-3 align-top">Higher fixed monthly fee (e.g., £2,500/month)</td>
                <td className="px-4 py-3 align-top">A larger pool of credits (e.g., 10 million credits/month) to support more intensive and parallel workflows.</td>
                <td className="px-4 py-3 align-top">Discounted rate (e.g., £0.015 per 1,000 credits).</td>
                <td className="px-4 py-3 align-top">All Professional features, plus access to advanced agents like Emergent Architectural Suggestion and Generative IP Creation. Priority support and advanced analytics.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top"><strong className="text-white font-semibold">Enterprise</strong></td>
                <td className="px-4 py-3 align-top">Large organizations with complex, ongoing design needs.</td>
                <td className="px-4 py-3 align-top">Custom annual contract</td>
                <td className="px-4 py-3 align-top">A very large, customized pool of credits or a move towards an outcome-based model.</td>
                <td className="px-4 py-3 align-top">Deeply discounted and negotiated rate.</td>
                <td className="px-4 py-3 align-top">All Business features, plus the ability to run "Self-Hosting" projects, dedicated support, and options for outcome-based pricing add-ons. This tier could also include co-development of custom AI agents tailored to the client's specific needs and direct access to the company's AI architect team. Full, unlimited access to the entire Project Chimera platform.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-24 mb-4">
          <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
            The "Enterprise" Tier and Outcome-Based Pricing
          </h2>
        </div>
        <p>For its most valuable enterprise customers, the model can evolve further by incorporating <strong>outcome-based pricing</strong>. This is the ultimate form of value alignment, where instead of just paying for access and usage, the client pays for tangible results. This shifts the focus from cost to ROI.</p>

        <div className="mt-8 mb-4 flex items-center">
          <Settings2 className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
            How it Works:
          </h3>
        </div>
        <p>The company and its client agree on specific, measurable Key Performance Indicators (KPIs) for a project. The company's payment, or a significant portion of it, is contingent on meeting or exceeding these KPIs. The AI compute costs are factored into the overall price, but the value proposition is centered on the massive savings and competitive advantage delivered.</p>
        
        <div className="mt-8 mb-4 flex items-center">
          <Target className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
            Application to the business:
          </h3>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white font-semibold">PPA-Tied Fees:</strong> Structure contracts where compensation is tied to achieving specific Power, Performance, and Area (PPA) targets. For example, a baseline fee for the design, with a significant bonus for achieving a &gt;15% power reduction or a &gt;10% area shrink compared to a baseline design.</li>
          <li><strong className="text-white font-semibold">Time-to-Market (TTM) Bonus:</strong> Charge a premium for accelerated delivery. If a typical design cycle is nine months, an offer of six-month delivery could command a higher fee, directly monetizing the speed of the AI platform.</li>
          <li><strong className="text-white font-semibold">First-Pass Silicon Success:</strong> A major cost for any chip company is a silicon respin. A model could be structured with a substantial success fee for achieving a functional chip on the first tape-out, as this represents enormous risk mitigation and cost savings for the client.</li>
        </ul>
        
        <div className="mt-24 mb-4">
          <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
            Beyond Services: IP and Platform Licensing
          </h2>
        </div>
        <p>As the company develops more specialized IP and matures its agentic AI system, it can create entirely new revenue streams by productizing its internal tools:</p>
        
        <div className="mt-8 mb-4 flex items-center">
          <Layers3 className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
            IP-as-a-Service (IPaaS):
          </h3>
        </div>
        <p>License the specialized, AI-generated IP blocks (e.g., memory controllers, RISC-V cores) to other companies for a recurring fee.</p>
        
        <div className="mt-8 mb-4 flex items-center">
          <Workflow className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
            Platform-as-a-Service (PaaS):
          </h3>
        </div>
        <p>License the entire Project Chimera agentic AI system to larger customers who want to use its powerful orchestration capabilities with their own internal design teams.</p>
        
        <p>By moving away from hourly billing and adopting this robust hybrid approach, the conversation with clients shifts from "How much time will this take?" to "What incredible results can be delivered?". This model allows the company to offer the subscription model that customers prefer for budgeting while ensuring that its costs are covered, its pricing scales directly with the value and resources consumed, and its success is directly aligned with that of its customers.</p>

      </article>
    </SubPageLayout>
  );
}

