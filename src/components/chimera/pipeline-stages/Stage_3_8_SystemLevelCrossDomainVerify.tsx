// src/components/chimera/pipeline-stages/Stage_3_8_SystemLevelCrossDomainVerify.tsx
import React from 'react';
import { PrimaryWorkflowItemCard, NestedDetailCard } from './WorkflowCardHelpers';
import {
  AlertTriangle, BarChart3, Gauge, PlayCircle, RefreshCcw, BatteryCharging, Activity, Zap, Network, ShieldCheck, ScanSearch,
  Bug, ListChecks, ShieldAlert, SlidersHorizontal, CheckCircle2, Lightbulb, BrainCircuit
} from 'lucide-react';

const Stage_3_8_SystemLevelCrossDomainVerify: React.FC = () => {
  const workflowItems = [
    {
      id: 'systemLevelPerf',
      icon: <Gauge />,
      title: 'System-Level Performance Verification:',
      description: 'A <strong>Performance Verification Agent</strong> takes the lead here.',
      nestedDetails: [
        {
          id: 'fullChipSim',
          icon: <PlayCircle />,
          title: 'Full-Chip Simulations:',
          description: 'It orchestrates <strong>full-chip performance simulations</strong> (e.g., using SystemC or transaction-level models) driven by real-world workload scenarios.'
        },
        {
          id: 'kpiAnalysis',
          icon: <BarChart3 />,
          title: 'KPI Analysis:',
          description: 'It collects and analyzes key performance indicators (KPIs) such as throughput, latency, bandwidth utilization, and clock cycles, correlating them against the initial architectural targets.'
        },
        {
          id: 'feedbackLoop',
          icon: <RefreshCcw />,
          title: 'Feedback Loop:',
          description: 'Discrepancies are flagged and analyzed, providing feedback to the <strong>Architecture Exploration Agents</strong> or <strong>RTL Generation Agents</strong> for iterative performance tuning.'
        },
      ]
    },
    {
      id: 'powerVerifyIntegrity',
      icon: <BatteryCharging />,
      title: 'Power Verification & Integrity:',
      description: 'The <strong>Power & Design Rule Check (DRC) Analysis Agent</strong> extends its role to comprehensive power verification.',
      nestedDetails: [
        {
          id: 'dynamicPower',
          icon: <Activity />,
          title: 'Dynamic Power Analysis:',
          description: 'It performs <strong>dynamic power analysis</strong> by correlating workload simulations with power models, identifying power hotspots and peak power consumption.'
        },
        {
          id: 'staticPower',
          icon: <Zap />,
          title: 'Static Power Analysis:',
          description: 'It conducts <strong>static power analysis</strong> to identify leakage current issues.'
        },
        {
          id: 'powerIntegrity',
          icon: <Network />,
          title: 'Power Integrity Analysis:',
          description: 'It analyzes <strong>power integrity</strong> (e.g., IR drop, electromigration) using specialized tools, ensuring the power delivery network is robust across the entire chip. This analysis feeds back into the <strong>Physical Implementation Agent</strong> (Stage 10) for layout adjustments.'
        },
      ]
    },
    {
      id: 'comprehensiveSecurity',
      icon: <ShieldCheck />,
      title: 'Comprehensive Security Verification:',
      description: 'Building on earlier formal checks, the <strong>Security Verification Agent</strong> performs holistic, chip-level security assessments. This includes:',
      nestedDetails: [
        {
          id: 'attackSurface',
          icon: <ScanSearch />,
          title: 'Attack Surface Analysis:',
          description: 'Identifying potential entry points for attacks.'
        },
        {
          id: 'vulnScan',
          icon: <Bug />,
          title: 'Vulnerability Scanning:',
          description: 'Probing for known vulnerabilities in IP blocks or interfaces.'
        },
        {
          id: 'simPenTest',
          icon: <ShieldAlert />,
          title: 'Simulated Penetration Testing:',
          description: 'Running simulated attack scenarios against the full chip model to validate the effectiveness of security features.'
        },
        {
          id: 'complianceChecks',
          icon: <ListChecks />,
          title: 'Compliance Checks:',
          description: 'Ensuring adherence to security standards (e.g., FIPS, ISO 26262 functional safety security requirements).'
        },
      ]
    },
    {
      id: 'aiSystemEval',
      icon: <SlidersHorizontal />,
      title: 'AI System Evaluation & Guardrails:',
      description: 'This is where the overall AI design system&apos;s effectiveness is rigorously monitored and improved, utilizing the <strong>Human-in-the-Loop Interface</strong> and <strong>LangSmith</strong>:',
      nestedDetails: [
        {
          id: 'autoEval',
          icon: <CheckCircle2 />,
          title: 'Automated Evaluation:',
          description: 'LangSmith is used to capture production traces of agent interactions, LLM prompts, and tool calls. Custom evaluators are defined to automatically assess the quality of AI-generated content. This builds comprehensive datasets for continuous, objective evaluation of agent performance and output quality.'
        },
        {
          id: 'promptRefine',
          icon: <Lightbulb />,
          title: 'Prompt Engineering Refinement:',
          description: 'Based on evaluation results, insights are used to refine and optimize prompt engineering strategies for all agents, improving their accuracy, efficiency, and adherence to design rules.'
        },
        {
          id: 'aiGuardrails',
          icon: <ShieldAlert />,
          title: 'AI Guardrails & Anomaly Detection:',
          description: 'The <strong>Supervisor Agent</strong> (via LangSmith monitoring) actively enforces predefined guardrails, preventing agents from pursuing irrational design paths or generating outputs that violate critical constraints. Anomaly detection algorithms monitor agent behavior for unexpected deviations, allowing for proactive intervention.'
        },
        {
          id: 'selfEvalLearn',
          icon: <BrainCircuit />,
          title: 'Self-Evaluation & Learning:',
          description: 'The system can engage in meta-level self-evaluation. For instance, the <strong>Knowledge Graph Agent</strong> can analyze historical performance data of specific agents and workflows (from LangSmith traces) to identify patterns of success or failure. This feedback loop informs the <strong>Global Planning Agent</strong> on how to optimize agent selection, task decomposition, and resource allocation for future design projects.'
        },
      ]
    }
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 id="stage-3-8" className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.8 Stage 8: System-Level &amp; Cross-Domain Verification, and AI System Evaluation
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>Beyond functional correctness of individual blocks, ensuring the <strong>holistic performance, power efficiency, and
        security</strong> of the entire chip, especially across different abstraction levels and physical implementation, is
        critical. Furthermore, in an AI-driven design flow, <strong>continuous evaluation of the AI system&apos;s own
        performance and reliability</strong> is paramount to maintain confidence and drive ongoing improvement.
      </p>
      <div className="mt-8 mb-4 flex items-center">
        <BarChart3 className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
          Agentic Workflow: Holistic Chip Validation and Self-Improving AI Design
        </h3>
      </div>
      <p>This final, crucial verification stage provides a comprehensive, chip-level validation, integrating performance, power,
        and security aspects, and importantly, includes robust mechanisms for evaluating and improving the AI design system itself:
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
      <p>This multi-faceted final verification stage ensures the comprehensive quality, reliability, and security of the entire
        chip, while simultaneously fostering a self-improving AI design ecosystem that continually enhances its capabilities and
        accelerates our design cycles.
      </p>
    </div>
  );
};

export default Stage_3_8_SystemLevelCrossDomainVerify;
