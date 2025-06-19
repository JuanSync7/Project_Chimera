
"use client";
import React, { useState } from 'react';
import { PIPELINE_TABS } from '@/lib/chimera/constants';
import type { PipelineTab } from '@/lib/chimera/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { AlertTriangle, Star, Workflow } from 'lucide-react'; 

const PipelineSection: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeStageId, setActiveStageId] = useState<string>(PIPELINE_TABS[0]?.id);

  const currentStageData = PIPELINE_TABS.find(tab => tab.id === activeStageId);

  return (
    <section id="pipeline" className="py-16 md:py-24">
      <h2 className="text-4xl font-bold text-center mb-3 text-white">The AI-Powered Design Pipeline</h2>
      <p className="text-slate-400 text-center text-lg mb-12 max-w-3xl mx-auto">
        Applying <strong>agentic workflows</strong> to every stage of chip design, creating a <strong>"digital thread"</strong> of intent and context that flows from concept to silicon, breaking down traditional silos.
      </p>

      {/* Horizontally scrollable buttons - Common for mobile and desktop */}
      {isMobile === undefined ? (
        <div className="flex justify-center items-center h-12 mb-10"> {/* Approx height of button bar */}
           {/* Placeholder for button loading state if needed, or could be an empty div */}
        </div>
      ) : (
        <div className="no-scrollbar flex overflow-x-auto space-x-3 pb-4 mb-10">
          {PIPELINE_TABS.map((tab: PipelineTab) => (
            <Button
              key={tab.id}
              variant="outline"
              size="sm"
              onClick={() => setActiveStageId(tab.id)}
              className={`shrink-0 flex items-center gap-2 transition-all duration-200
                          ${activeStageId === tab.id 
                            ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/50' 
                            : 'bg-slate-800/60 border-white hover:bg-slate-700/80 hover:border-primary text-slate-300 hover:text-white'}`}
            >
              {tab.icon && React.cloneElement(tab.icon as React.ReactElement, { className: "w-4 h-4" })}
              {tab.title}
            </Button>
          ))}
        </div>
      )}

      {/* Stage Content Display - Common for mobile and desktop */}
      {isMobile === undefined && !currentStageData ? ( 
        <div className="section-card rounded-2xl p-8 md:p-12 min-h-[450px] flex justify-center items-center">
           {/* Placeholder for content loading state if needed */}
        </div>
      ) : currentStageData ? (
        <div id="stage-content-wrapper" className="section-card rounded-2xl p-8 md:p-12 min-h-[450px] relative overflow-hidden">
          <>
            <h3 className="text-2xl lg:text-3xl font-bold mb-3 gradient-text">{currentStageData.heading}</h3>
            <div 
                className="mb-6 text-slate-300 text-base lg:text-lg prose prose-sm prose-invert max-w-none" 
                dangerouslySetInnerHTML={{ __html: currentStageData.generalDescription }}
            />
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white text-lg mb-1 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400 flex-shrink-0" />
                  Key Challenge:
                </h4>
                <div 
                    className="text-slate-400 pl-7 prose prose-sm prose-invert max-w-none" 
                    dangerouslySetInnerHTML={{ __html: currentStageData.challenge }}
                />
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-1 flex items-center">
                  <Workflow className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                  Agentic Workflow &amp; Technologies:
                </h4>
                <div 
                    className="text-slate-400 prose prose-sm prose-invert max-w-none pl-7" 
                    dangerouslySetInnerHTML={{ __html: currentStageData.agenticWorkflowDetails }}
                />
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-1 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" />
                  Primary Business Outcome:
                </h4>
                <div 
                    className={`pl-7 font-semibold prose prose-sm prose-invert max-w-none ${currentStageData.outcomeColor || 'text-sky-300'}`} 
                    dangerouslySetInnerHTML={{ __html: currentStageData.outcome }}
                />
              </div>
              <div className="text-center mt-8">
                <Link href={`/ai-pipeline#${currentStageData.id}`} passHref>
                  <Button variant="link" className="text-sky-400 hover:text-sky-300 text-base">
                    Full Stage Details &rarr;
                  </Button>
                </Link>
              </div>
            </div>
          </>
        </div>
      ) : null}
    </section>
  );
};

export default PipelineSection;
