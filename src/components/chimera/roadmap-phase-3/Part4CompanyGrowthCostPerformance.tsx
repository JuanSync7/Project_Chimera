// src/components/chimera/roadmap-phase-3/Part4CompanyGrowthCostPerformance.tsx
import React from 'react';
import { BarChart3, DollarSign, Users, Cpu, Layers3, TrendingUp, FastForward, Award } from 'lucide-react';

const Part4CompanyGrowthCostPerformance: React.FC = () => {
  return (
    <>
      <div className="mt-24 mb-4">
        <div className="flex items-center">
          <BarChart3 className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
          <h2 className="text-3xl font-semibold text-primary gradient-text !m-0 !border-b-0 !pb-0">
            Part 4: Company Growth, Cost, and Performance
          </h2>
        </div>
      </div>
      <p>
        The investment in Phase 3 is substantial but foundational to our long-term strategy. The costs are
        front-loaded investments in compounding assets (talent and infrastructure) that will yield
        disproportionate returns in speed, efficiency, and product quality.
      </p>

      <div className="mt-8 mb-4 flex items-center">
        <DollarSign className="h-7 w-7 text-purple-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-purple-400 !m-0 !border-b-0 !pb-0">
          Phase 3 Cost Estimation (Annual Estimate):
        </h3>
      </div>
      <ul className="list-none pl-0 space-y-4">
        <li>
          <div className="flex items-center">
            <Users className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
            <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">
              Talent (The AI Team):
            </h4>
          </div>
          <ul className="list-disc pl-10 space-y-1 mt-1 text-slate-400">
            <li>
              <strong className="text-white font-semibold">Cost Breakdown:</strong> 1 Lead AI Architect, 4 Senior
              ML/AI Engineers, 2 Data/Infrastructure Engineers, 1 Product Manager (AI Interfaces).
            </li>
            <li>
              <strong className="text-white font-semibold">Estimated Annual Cost:</strong> £1.2M - £1.8M.
            </li>
            <li>
              <strong className="text-white font-semibold">Notes:</strong> This team is focused exclusively on
              developing and refining the Chimera AI agents and the Model Context Protocol (MCP). This is our
              core IP investment. Salaries are based on competitive rates for top-tier AI talent in the UK/EU.
            </li>
          </ul>
        </li>
        <li>
          <div className="flex items-center">
            <Cpu className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
            <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">
              Cloud Compute &amp; Infrastructure:
            </h4>
          </div>
          <ul className="list-disc pl-10 space-y-1 mt-1 text-slate-400">
            <li>
              <strong className="text-white font-semibold">Cost Breakdown:</strong> GPU-intensive training
              clusters (e.g., AWS P4d/P5 instances), CPU-intensive simulation/EDA farm, High-throughput
              storage &amp; networking.
            </li>
            <li>
              <strong className="text-white font-semibold">Estimated Annual Cost:</strong> £800k - £1.5M.
            </li>
            <li>
              <strong className="text-white font-semibold">Notes:</strong> This is the most variable cost and
              will be highest during intensive training periods for new AI models. It will scale with the
              number of parallel chip design projects being executed by the AI.
            </li>
          </ul>
        </li>
        <li>
          <div className="flex items-center">
            <Layers3 className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
            <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">
              EDA Tool Licensing:
            </h4>
          </div>
          <ul className="list-disc pl-10 space-y-1 mt-1 text-slate-400">
            <li>
              <strong className="text-white font-semibold">Cost Breakdown:</strong> Comprehensive licenses from
              major vendors (Synopsys, Cadence, Siemens/Mentor), Seats for both human engineers and AI-driven
              processes.
            </li>
            <li>
              <strong className="text-white font-semibold">Estimated Annual Cost:</strong> £1.5M - £2.5M.
            </li>
            <li>
              <strong className="text-white font-semibold">Notes:</strong> While we already have EDA licenses,
              running a fully autonomous AI pipeline requires a significant increase in license seats to allow
              the AI to run thousands of jobs in parallel without being bottlenecked. This is a crucial
              enabler for the AI&apos;s speed.
            </li>
          </ul>
        </li>
        <li>
          <div className="flex items-center">
            <DollarSign className="h-6 w-6 text-slate-300 mr-2 flex-shrink-0" />
            <h4 className="text-xl font-medium text-slate-200 !m-0 !border-b-0 !pb-0">
              Total Estimated Annual Cost:
            </h4>
          </div>
          <ul className="list-disc pl-10 space-y-1 mt-1 text-slate-400">
            <li><strong className="text-white font-semibold">Total:</strong> £3.5M - £5.8M.</li>
            <li>
              <strong className="text-white font-semibold">Notes:</strong> This represents the operational cost
              to run at the full &quot;Run&quot; phase. The return on this investment is realized through
              transformative improvements in design efficiency and final product quality, leading to
              significant financial gains and a strong competitive advantage.
            </li>
          </ul>
        </li>
      </ul>

      <div className="mt-8 mb-4 flex items-center">
        <TrendingUp className="h-7 w-7 text-purple-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-purple-400 !m-0 !border-b-0 !pb-0">
          Projected Performance Gains and Return on Investment (ROI):
        </h3>
      </div>
      <p>
        The investment in Phase 3 is justified by tangible and compounding returns from dramatic improvements
        in engineering efficiency and superior final chip characteristics, which together drive significant
        financial ROI.
      </p>
      <div className="space-y-6 mt-6">
        <div className="flex items-start">
          <FastForward className="h-7 w-7 text-white mr-4 mt-1 flex-shrink-0" />
          <div>
            <strong className="text-white font-semibold block mb-1">Transformative Time-to-Market (TTM) Reduction:</strong>
            <p className="text-slate-400">
              The primary value driver is a radical acceleration of the design cycle by automating repetitive
              and error-prone processes.
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-slate-400">
              <li>
                Industry benchmarks show AI-driven automation can reduce chip design time by up to 50% and cut
                debugging time by as much as 70%.
              </li>
              <li>
                The goal is to compress design timelines from months to weeks, mirroring gains of over 10x seen
                by industry leaders.
              </li>
              <li>
                This speed allows for greater agility, faster response to market demands, and more projects with
                the same engineering team.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-start">
          <Award className="h-7 w-7 text-white mr-4 mt-1 flex-shrink-0" />
          <div>
            <strong className="text-white font-semibold block mb-1">Superior Power, Performance, and Area (PPA):</strong>
            <p className="text-slate-400">
              The system is designed to achieve PPA optimizations beyond human capability by exploring a vast
              design space to find a superior balance of competing objectives.
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-slate-400">
              <li>
                Case studies show AI tools can achieve significant PPA gains, including up to 15-20% power
                reduction, 10-20% area reduction, and substantial performance boosts.
              </li>
              <li>
                A superior PPA profile results in a more competitive product that is cheaper to manufacture and
                more efficient for the end-user.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-start">
          <DollarSign className="h-7 w-7 text-white mr-4 mt-1 flex-shrink-0" />
          <div>
            <strong className="text-white font-semibold block mb-1">Compounding Financial ROI:</strong>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-slate-400">
              <li>
                <strong className="text-slate-100">Increased Revenue and Market Share:</strong> Faster TTM
                allows for capturing early-adopter markets and responding to competitive pressures more
                effectively.
              </li>
              <li>
                <strong className="text-slate-100">Reduced Non-Recurring Engineering (NRE) Costs:</strong> The
                system aims to virtually eliminate the multi-million-dollar cost of silicon respins by
                improving verification and achieving first-pass success.
              </li>
              <li>
                <strong className="text-slate-100">Higher Profit Margins:</strong> Superior PPA leads to direct
                cost savings (smaller die area lowers cost per wafer) and can justify premium pricing (better
                power efficiency). The combination of lower NRE, reduced manufacturing cost, and accelerated
                revenue creates a powerful cycle of compounding ROI.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Part4CompanyGrowthCostPerformance;
