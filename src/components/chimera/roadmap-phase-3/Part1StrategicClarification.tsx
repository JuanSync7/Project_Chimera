// src/components/chimera/roadmap-phase-3/Part1StrategicClarification.tsx
import React from 'react';
import { Lightbulb } from 'lucide-react';

const Part1StrategicClarification: React.FC = () => {
  return (
    <>
      <div className="mt-24 mb-4">
        <div className="flex items-center">
          <Lightbulb className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
          <h2 className="text-3xl font-semibold text-primary gradient-text !m-0 !border-b-0 !pb-0">
            Part 1: Strategic Clarification: We Are the Architect, Not the Toolsmith
          </h2>
        </div>
      </div>
      <p>
        To be perfectly clear: Project Chimera&apos;s goal is not to build new EDA tools. Our strategy is to
        create a proprietary AI system that sits on top of the industry-standard EDA toolchain.
      </p>
      <p>
        Think of it this way: The world&apos;s best Formula 1 driver doesn&apos;t build their own car from
        scratch; they master the use of a highly advanced machine to win races. Similarly, our AI will be the
        &quot;expert driver&quot; for the best EDA tools available, orchestrating them in a holistic,
        end-to-end flow to design world-beating chips faster and more efficiently than any competitor. Our
        intellectual property is the AI, not the underlying tools.
      </p>
    </>
  );
};

export default Part1StrategicClarification;
