// src/components/chimera/pipeline-stages/Stage_3_7_AIDebugging.tsx
import React from 'react';
import { PrimaryWorkflowItemCard, NestedDetailCard } from './WorkflowCardHelpers';
import {
  AlertTriangle, SearchCode, FileSearch2, ScrollText, LineChart, MapPin, Lightbulb, Wrench, RotateCcw, GitCommitVertical
} from 'lucide-react';

const Stage_3_7_AIDebugging: React.FC = () => {
  const workflowItems = [
    {
      id: 'autoFailAnalysis',
      icon: <FileSearch2 />,
      title: 'Automated Failure Analysis & Localization:',
      description: 'The <strong>Debug & Root Cause Analysis Agent</strong> is the tireless problem-solver. When a simulation fails, a formal tool produces a counter-example, or a metric deviates from expectation, this agent springs into action.',
      nestedDetails: [
        {
          id: 'logParsing',
          icon: <ScrollText />,
          title: 'Log Parsing:',
          description: 'It intelligently parses and analyzes massive <strong>simulation logs</strong>, automatically identifying error messages, warnings, and unexpected behaviors.'
        },
        {
          id: 'waveformAnalysis',
          icon: <LineChart />,
          title: 'Waveform Analysis:',
          description: 'It integrates with <strong>waveform viewers</strong> to automatically navigate and analyze critical signal traces and timing paths identified as problematic. It can filter noise, highlight key events, and correlate activity across multiple design blocks.'
        },
        {
          id: 'knowledgeLocalization',
          icon: <MapPin />,
          title: 'Knowledge-Driven Localization:',
          description: 'Leveraging the <strong>Knowledge Hub (RAG)</strong> (which contains historical bug patterns, design specifications, and common debug strategies), it intelligently localizes the likely source of the bug down to specific RTL lines, module interfaces, or architectural components.'
        },
      ]
    },
    {
      id: 'intelligentExplanation',
      icon: <Lightbulb />,
      title: 'Intelligent Explanation and Suggested Fixes:',
      description: 'Beyond just localization, the <strong>Debug & Root Cause Analysis Agent</strong> leverages LLM capabilities (through prompt engineering) to:',
      nestedDetails: [
        {
          id: 'explainBug',
          icon: <Lightbulb />,
          title: 'Explain the Bug:',
          description: 'Provide clear, human-readable explanations of why a failure occurred, translating complex technical jargon into understandable insights.'
        },
        {
          id: 'suggestSolutions',
          icon: <Wrench />,
          title: 'Suggest Solutions:',
          description: 'Propose specific, actionable code modifications or design adjustments to resolve the identified bug. This feedback is directed back to the <strong>RTL Generation & Refinement Agent</strong> or the <strong>Supervisor Agent</strong>.'
        },
        {
          id: 'whatIfDebug',
          icon: <RotateCcw />,
          title: '"What-If" Debugging:',
          description: 'Using the <strong>Context & State Management (CAG)</strong>, the agent can track previous debug attempts and avoid repeating failed strategies, suggesting alternative approaches based on prior context.'
        },
      ]
    },
    {
      id: 'feedbackToTestGen',
      icon: <GitCommitVertical />,
      title: 'Feedback to Test Generation:',
      description: 'When new bugs are found, the <strong>Debug & Root Cause Analysis Agent</strong> can automatically generate a minimized, focused <strong>regression test</strong> for that specific bug, ensuring that it doesn&apos;t reappear in future design iterations. This test is then added to the pool managed by the <strong>Test & Coverage Generation Agent</strong>.'
    },
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 id="stage-3-7" className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.7 Stage 7: AI-Driven Debugging &amp; Root Cause Analysis
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>Even with advanced verification, bugs will inevitably appear, and <strong>debugging them accounts for a massive portion
        of verification time</strong>. Sifting through vast amounts of simulation logs, waveform data, and formal
        counter-examples to pinpoint the <strong>root cause</strong> of a functional or performance issue is a highly manual,
        expert-intensive, and time-consuming process.
      </p>
      <div className="mt-8 mb-4 flex items-center">
        <SearchCode className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
          Agentic Workflow: Intelligent Problem Localization, Automated Explanation, and Iterative Bug Resolution
        </h3>
      </div>
      <p>This stage is dedicated to minimizing the debugging bottleneck through intelligent automation, ensuring rapid and precise
        bug resolution:
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
      <p>This AI-driven debugging capability dramatically reduces the manual effort and expertise required for bug resolution,
        accelerating design cycles and allowing human engineers to focus on higher-level innovation.
      </p>
    </div>
  );
};

export default Stage_3_7_AIDebugging;
