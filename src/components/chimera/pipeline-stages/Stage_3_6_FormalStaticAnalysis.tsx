// src/components/chimera/pipeline-stages/Stage_3_6_FormalStaticAnalysis.tsx
import React from 'react';
import { PrimaryWorkflowItemCard, NestedDetailCard } from './WorkflowCardHelpers';
import { AlertTriangle, ShieldCheck, Binary, Puzzle, Scale, BookOpenCheck, LockKeyhole, BugPlay, TestTube2, ScanLine }
  from 'lucide-react';

const Stage_3_6_FormalStaticAnalysis: React.FC = () => {
  const workflowItems = [
    {
      id: 'autoFormalProps',
      icon: <ShieldCheck />,
      title: 'Automated Formal Property Generation & Proofs:',
      description: 'The <strong>AutoDV (Automatic Design Verification) Agent</strong> is the cornerstone of this stage. Leveraging the design specification, RTL, and the <strong>Knowledge Hub (RAG)</strong> for common property patterns, it intelligently generates and applies <strong>formal verification properties</strong>.',
      nestedDetails: [
        {
          id: 'formalToolOrch',
          icon: <Binary />,
          title: 'Formal Tool Orchestration:',
          description: 'It orchestrates <strong>formal verification tools</strong> (e.g., Synopsys JasperGold, Cadence Jasper, Siemens Questa Formal) to <strong>mathematically prove</strong> that the design adheres to its specified behavior under all possible input conditions, identifying unreachable states, deadlocks, and protocol violations.'
        },
        {
          id: 'propDecompDebug',
          icon: <Puzzle />,
          title: 'Property Decomposition & Debug:',
          description: 'For complex properties, it can intelligently decompose them or generate smaller, more tractable proofs. In cases where properties cannot be proven, the agent provides precise <strong>counter-example waveforms and traces</strong> that are critical for debugging.'
        },
      ]
    },
    {
      id: 'exhaustiveStaticAnalysis',
      icon: <ScanLine />,
      title: 'Exhaustive Static Analysis & Linting:',
      description: 'The <strong>AutoReview Agent</strong> continues its role from earlier stages, but now performs an <strong>exhaustive, chip-level static analysis</strong>.',
      nestedDetails: [
        {
          id: 'complexRuleCheck',
          icon: <Scale />,
          title: 'Complex Rule Checking:',
          description: 'It rigorously checks for complex design rule violations beyond simple syntax, including potential <strong>clock domain crossing (CDC) issues, reset domain crossing (RDC) issues, coding style inconsistencies, and non-synthesizable constructs</strong> that could lead to synthesis tool errors or sub-optimal hardware.'
        },
        {
          id: 'knowledgeLinting',
          icon: <BookOpenCheck />,
          title: 'Knowledge-Driven Linting:',
          description: 'It leverages the <strong>Knowledge Hub (RAG)</strong> for company-specific linting rules and best practices, ensuring adherence to internal quality standards.'
        },
      ]
    },
    {
      id: 'securityVerification',
      icon: <ShieldCheck />,
      title: 'Security Verification:',
      description: 'A specialized sub-component of the <strong>AutoDV Agent</strong> or a dedicated <strong>Security Verification Agent</strong> actively probes the design for <strong>security vulnerabilities</strong>.',
      nestedDetails: [
        {
          id: 'formalSecProps',
          icon: <LockKeyhole />,
          title: 'Formal Security Properties:',
          description: 'This includes <strong>formal verification of security properties</strong> (e.g., isolation, tamper detection, secure boot sequences),'
        },
        {
          id: 'staticExploitAnalysis',
          icon: <BugPlay />,
          title: 'Static Exploit Pattern Analysis:',
          description: '<strong>static analysis for known exploit patterns</strong>, and'
        },
        {
          id: 'intelligentFaultInject',
          icon: <TestTube2 />,
          title: 'Intelligent Fault Injection:',
          description: '<strong>intelligent fault injection scenarios</strong>, crucial for applications like automotive (ISO 26262) and IoT devices.'
        },
      ]
    }
  ];

  return (
    <div className="section-card p-6 rounded-2xl mt-12">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6">
        3.6 Stage 6: Formal Verification &amp; Static Analysis for Deep Bug Detection
      </h2>
      <div className="mt-6 mb-4 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-yellow-400 !m-0 !border-b-0 !pb-0">Challenge:</h3>
      </div>
      <p>Even with extensive simulation, certain <strong>deep, corner-case bugs, security vulnerabilities, or subtle
        deadlocks</strong> are extremely difficult, if not impossible, to uncover through dynamic testing alone. Traditional
        <strong>formal verification</strong> often requires highly specialized expertise and significant manual effort for
        property writing and debug, limiting its widespread application.
      </p>
      <div className="mt-8 mb-4 flex items-center">
        <ShieldCheck className="h-7 w-7 text-primary mr-3 flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
          Agentic Workflow: Automated Formal Proofs, Exhaustive Static Analysis, and Security Probing
        </h3>
      </div>
      <p>This stage complements simulation with mathematically rigorous <strong>formal methods</strong> and advanced
        <strong>static analysis</strong>, ensuring a higher degree of functional correctness and identifying critical issues
        that simulation cannot:
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
      <p>This multi-faceted formal and static approach significantly enhances bug detection capabilities, especially for elusive,
        deeply embedded issues, providing a level of confidence in design correctness that is impossible to achieve with
        simulation alone, drastically reducing the risk of silicon failures.
      </p>
    </div>
  );
};

export default Stage_3_6_FormalStaticAnalysis;
