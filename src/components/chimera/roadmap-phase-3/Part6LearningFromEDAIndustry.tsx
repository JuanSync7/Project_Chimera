// src/components/chimera/roadmap-phase-3/Part6LearningFromEDAIndustry.tsx
import React from 'react';
import { BookOpenCheck, Milestone } from 'lucide-react';

const Part6LearningFromEDAIndustry: React.FC = () => {
  return (
    <>
      <div className="mt-24 mb-4">
        <div className="flex items-center">
          <BookOpenCheck className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
          <h2 className="text-3xl font-semibold text-primary gradient-text !m-0 !border-b-0 !pb-0">
            Part 6: Learning from the EDA Industry &amp; Building Our Advantage
          </h2>
        </div>
      </div>
      <p>
        Our strategy is validated by the direction the EDA industry itself is heading. While we are not
        building these tools, understanding them is key to our success.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong className="text-white font-semibold">Google&apos;s AI for Chip Floorplanning:</strong>{' '}
          Proved a reinforcement learning agent could master a complex design task (floorplanning) within the
          design environment. This validates our approach for individual agents.
        </li>
        <li>
          <strong className="text-white font-semibold">Synopsys&apos;s DSO.ai &amp; Cadence&apos;s Cerebrus:</strong>{' '}
          These products show that the EDA vendors are successfully adding AI to their individual point tools.
          This is good for us—it makes the tools we use even more powerful.
        </li>
      </ul>

      <div className="mt-8 mb-4 flex items-center">
        <Milestone className="h-7 w-7 text-purple-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-purple-400 !m-0 !border-b-0 !pb-0">
          Our Unique Advantage:
        </h3>
      </div>
      <p>
        The critical difference is that these are &quot;walled garden&quot; solutions. Synopsys AI optimizes
        the Synopsys flow, and Cadence AI optimizes the Cadence flow. Project Chimera builds the holistic
        intelligence above all of them. Our Hierarchical Supervisor can make strategic decisions across the
        entire toolchain, potentially using a Synopsys tool for synthesis, a Cadence tool for place-and-route,
        and a Mentor Graphics tool for verification, optimizing for the best global outcome that no single tool
        vendor can achieve on its own. That integration and orchestration capability is our core competitive
        moat.
      </p>
    </>
  );
};

export default Part6LearningFromEDAIndustry;
