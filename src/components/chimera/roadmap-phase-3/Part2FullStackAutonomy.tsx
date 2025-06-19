// src/components/chimera/roadmap-phase-3/Part2FullStackAutonomy.tsx
import React from 'react';
import { Workflow, UsersRound } from 'lucide-react';

const Part2FullStackAutonomy: React.FC = () => {
  return (
    <>
      <div className="mt-24 mb-4">
        <div className="flex items-center">
          <Workflow className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
          <h2 className="text-3xl font-semibold text-primary gradient-text !m-0 !border-b-0 !pb-0">
            Part 2: Full Stack Autonomy &amp; The Human in the Loop
          </h2>
        </div>
      </div>
      <p>
        This is not about replacing human engineers; it&apos;s about elevating them. &quot;Full stack
        autonomy&quot; means the AI can handle the entire chip design workflow, from high-level specification
        to the final GDSII file ready for manufacturing, by intelligently driving our suite of commercial EDA
        tools at every stage.
      </p>

      <div className="mt-8 mb-4 flex items-center">
        <UsersRound className="h-7 w-7 text-purple-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-purple-400 !m-0 !border-b-0 !pb-0">
          How it Works with a Human in the Loop:
        </h3>
      </div>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong className="text-white font-semibold">The Engineer as a Supervisor:</strong> Instead of
          writing RTL code line-by-line, the engineer acts as a high-level architect and project manager.
          They define the &quot;what&quot; (e.g., &quot;design a low-power neural processing unit with these
          specific performance targets&quot;), and our AI orchestrates the EDA tools to handle the
          &quot;how.&quot;
        </li>
        <li>
          <strong className="text-white font-semibold">Strategic Intervention:</strong> The human&apos;s role
          shifts to strategic decision-making. The AI might present three optimized design options, each
          with different trade-offs in power, performance, and area (PPA). The engineer uses their
          expertise to select the best option based on market needs, customer requirements, and long-term
          product strategy.
        </li>
        <li>
          <strong className="text-white font-semibold">Creative Exploration:</strong> Engineers are freed
          from tedious, repetitive tasks, allowing them to focus on innovation. They can use the AI to
          rapidly prototype and test novel architectures that would have been too time-consuming to explore
          manually.
        </li>
      </ul>
    </>
  );
};

export default Part2FullStackAutonomy;
