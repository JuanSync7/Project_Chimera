// src/components/chimera/pipeline-stages/Stage_3_11_MfgPostSilicon.tsx
import React from 'react';
import { PrimaryWorkflowItemCard } from './WorkflowCardHelpers';
import { AlertTriangle, Cog, Activity, ScanSearch, CheckCircle2 } from 'lucide-react';

const Stage_3_11_MfgPostSilicon: React.FC = () => {
  const workflowItems = [
    {
      id: 'yieldPredict',
      icon: <Activity />,
      title: 'Yield Prediction:',
      description: 'A <strong>Yield Prediction Agent</strong> will leverage advanced <strong>machine learning models</strong> trained on vast datasets of historical wafer-level data, process variation statistics, and test results. This agent identifies design features, layout structures, or even specific process parameters that are statistically likely to cause <strong>manufacturing problems or yield loss</strong>. This critical, proactive feedback is passed back to the <strong>PPA Optimization Agent</strong> in Stage 3.10, directly incorporating <strong>manufacturability and yield considerations</strong> into the iterative PPA equation from the earliest physical design stages.'
    },
    {
      id: 'defectDetect',
      icon: <ScanSearch />,
      title: 'Defect Detection:',
      description: 'A <strong>Defect Detection Agent</strong>, utilizing <strong>AI-powered visual inspection systems</strong> and advanced computer vision algorithms, analyzes high-resolution wafer scans and in-line process monitoring data. It identifies, classifies, and localizes <strong>microscopic physical defects</strong> (e.g., shorts, opens, particles) with a speed and accuracy far exceeding traditional human capabilities or simpler automated optical inspection systems. This dramatically accelerates <strong>quality control and root cause analysis</strong> in the fab.'
    },
    {
      id: 'postSiliconVal',
      icon: <CheckCircle2 />,
      title: 'Post-Silicon Validation:',
      description: 'A <strong>Post-Silicon Validation Agent</strong> automates the complex <strong>bring-up and characterization process</strong> for prototype chips and first silicon. It dynamically orchestrates lab equipment, runs comprehensive diagnostics, collects <strong>detailed performance data</strong> from the actual silicon (e.g., power consumption under various workloads, maximum operating frequency, signal integrity), and automatically correlates any discrepancies against the meticulously documented <strong>pre-silicon simulation results and PPA targets</strong>. This creates a final, invaluable <strong>feedback loop</strong> directly into our <strong>Knowledge Graph Agent</strong>, continuously refining our verification models, simulation methodologies, and predictive AI models for all future chip design projects. This ensures continuous learning and improvement in our design and manufacturing processes.'
    },
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.11 Stage 11: Manufacturing &amp; Post-Silicon Validation
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>Bridging the gap between highly optimized <strong>pre-silicon design data</strong> and the realities of <strong>physical
        manufacturing and silicon performance</strong> involves predicting <strong>manufacturing yield</strong>, accurately
        detecting <strong>microscopic physical defects</strong>, and rigorously validating the performance of the
        <strong>actual hardware</strong> in a timely manner. This phase is crucial for product quality and continuous improvement.
      </p>
      <div className="mt-8 mb-4 flex items-center">
        <Cog className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
          Agentic Workflow: AI-Enhanced Quality Assurance &amp; Predictive Feedback Loop
        </h3>
      </div>
      <p>This final stage integrates AI to ensure manufacturing quality and create a powerful feedback loop for future designs:</p>
      <ul className="list-none pl-0 space-y-6 !my-6">
        {workflowItems.map(item => (
          <PrimaryWorkflowItemCard key={item.id} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </ul>
    </div>
  );
};

export default Stage_3_11_MfgPostSilicon;
