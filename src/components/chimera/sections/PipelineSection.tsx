
"use client";
import React, { useState } from 'react';
import { PIPELINE_TABS } from '@/lib/chimera/constants';
import type { PipelineTab } from '@/lib/chimera/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronLeft, ChevronRight, AlertTriangle, Star, Workflow } from 'lucide-react'; 

const PipelineSection: React.FC = () => {
  const isMobile = useIsMobile();

  // State for mobile roulette
  const [currentMobileStageIndex, setCurrentMobileStageIndex] = useState(0);

  // State for desktop tabs (all 11 stages with summary)
  const [activeDesktopStageId, setActiveDesktopStageId] = useState<string>(PIPELINE_TABS[0]?.id);

  const handlePrevMobile = () => {
    setCurrentMobileStageIndex(prev => (prev === 0 ? PIPELINE_TABS.length - 1 : prev - 1));
  };

  const handleNextMobile = () => {
    setCurrentMobileStageIndex(prev => (prev === PIPELINE_TABS.length - 1 ? 0 : prev + 1));
  };

  const currentMobileStageData = isMobile !== undefined ? PIPELINE_TABS[currentMobileStageIndex] : null;
  const currentDesktopStageData = PIPELINE_TABS.find(tab => tab.id === activeDesktopStageId);

  return (
    <section id="pipeline" className="py-16 md:py-24">
      <h2 className="text-4xl font-bold text-center mb-3 text-white">The AI-Powered Design Pipeline</h2>
      <p className="text-slate-400 text-center text-lg mb-12 max-w-3xl mx-auto">
        Applying <strong>agentic workflows</strong> to every stage of chip design, creating a <strong>"digital thread"</strong> of intent and context that flows from concept to silicon, breaking down traditional silos.
      </p>

      {isMobile === undefined ? (
         <div className="flex justify-center items-center h-64">
           {/* Loading placeholder or spinner if needed */}
         </div>
      ) : isMobile ? (
        // Mobile View: Roulette for all 11 stages
        <div className="mt-10 relative px-4">
          <div className="flex items-center justify-center mb-6">
            <Button onClick={handlePrevMobile} variant="outline" size="icon" className="shrink-0">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            {currentMobileStageData && (
              <Link href={`/ai-pipeline#${currentMobileStageData.id}`} passHref>
                <Button
                  variant="default" 
                  size="lg"
                  className="text-center min-w-[200px] max-w-[280px] flex-grow mx-4 shadow-lg flex items-center justify-center gap-2"
                  aria-label={`Navigate to details for ${currentMobileStageData.title}`}
                >
                  {React.cloneElement(currentMobileStageData.icon as React.ReactElement, { className: "w-5 h-5 mr-0 md:mr-2 inline-block flex-shrink-0" })}
                  <span className="truncate">{currentMobileStageData.title}</span>
                </Button>
              </Link>
            )}
            
            <Button onClick={handleNextMobile} variant="outline" size="icon" className="shrink-0">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {currentMobileStageData && (
            <div className="mt-6 p-6 bg-slate-800/80 rounded-lg shadow-xl text-left max-w-lg mx-auto border border-slate-700">
              <h4 className="text-xl font-semibold text-primary mb-3">{currentMobileStageData.heading}</h4>
              <p 
                className="text-slate-300 text-sm mb-4 prose prose-sm prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: currentMobileStageData.generalDescription.substring(0, 150) + (currentMobileStageData.generalDescription.length > 150 ? '...' : '') }}
              />
              
              <div className="space-y-3 text-xs">
                <div className="mb-3">
                    <h5 className="font-semibold text-white text-sm mb-1 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2 inline-block text-yellow-400 flex-shrink-0" />
                        Key Challenge:
                    </h5>
                    <p className="text-slate-400 pl-[22px]" dangerouslySetInnerHTML={{ __html: currentMobileStageData.challenge.substring(0, 100) + (currentMobileStageData.challenge.length > 100 ? '...' : '') }}></p>
                </div>
                
                <div>
                    <h5 className="font-semibold text-white text-sm mb-1 flex items-center">
                        <Star className="w-4 h-4 mr-2 inline-block text-green-400 flex-shrink-0" />
                        Primary Outcome:
                    </h5>
                    <div 
                        className={`pl-[22px] prose prose-xs prose-invert max-w-none ${currentMobileStageData.outcomeColor || 'text-sky-300'}`} 
                        dangerouslySetInnerHTML={{ __html: currentMobileStageData.outcome.substring(0, 100) + (currentMobileStageData.outcome.length > 100 ? '...' : '') }}
                    ></div>
                </div>
              </div>

              <div className="text-center mt-6">
                <Link href={`/ai-pipeline#${currentMobileStageData.id}`} passHref>
                  <Button variant="link" className="text-sky-400 hover:text-sky-300 text-sm">
                    Full Stage Details &rarr;
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        // Desktop View: Horizontally scrollable buttons for all 11 stages, with selected stage details below
        <>
          <div className="no-scrollbar flex overflow-x-auto space-x-3 pb-4 mb-10">
            {PIPELINE_TABS.map((tab: PipelineTab) => (
              <Button
                key={tab.id}
                variant="outline"
                size="sm"
                onClick={() => setActiveDesktopStageId(tab.id)}
                className={`shrink-0 flex items-center gap-2 transition-all duration-200
                            ${activeDesktopStageId === tab.id 
                              ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/50' 
                              : 'bg-slate-800/60 border-white hover:bg-slate-700/80 hover:border-primary text-slate-300 hover:text-white'}`}
              >
                {React.cloneElement(tab.icon as React.ReactElement, { className: "w-4 h-4" })}
                {tab.title}
              </Button>
            ))}
          </div>

          {currentDesktopStageData && (
            <div id="desktop-stage-content-wrapper" className="section-card rounded-2xl p-8 md:p-12 min-h-[450px] relative overflow-hidden">
                <>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3 gradient-text">{currentDesktopStageData.heading}</h3>
                  <p className="mb-6 text-slate-300 text-base lg:text-lg" dangerouslySetInnerHTML={{ __html: currentDesktopStageData.generalDescription }}></p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-1 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400 flex-shrink-0" />
                        Key Challenge:
                      </h4>
                      <p className="text-slate-400 pl-7" dangerouslySetInnerHTML={{ __html: currentDesktopStageData.challenge }}></p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-1 flex items-center">
                        <Workflow className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                        Agentic Workflow &amp; Technologies:
                      </h4>
                      <div className="text-slate-400 prose prose-sm prose-invert max-w-none pl-7" dangerouslySetInnerHTML={{ __html: currentDesktopStageData.agenticWorkflowDetails }}></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-1 flex items-center">
                        <Star className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" />
                        Primary Business Outcome:
                      </h4>
                      <div className={`pl-7 font-semibold prose prose-sm prose-invert max-w-none ${currentDesktopStageData.outcomeColor || 'text-sky-300'}`} dangerouslySetInnerHTML={{ __html: currentDesktopStageData.outcome }}></div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <Link href={`/ai-pipeline#${currentDesktopStageData.id}`} passHref>
                        <Button variant="outline" size="lg" className="bg-transparent text-yellow-400 border-yellow-500 hover:bg-yellow-500/20 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/40">
                            View Full Stage Details &rarr;
                        </Button>
                    </Link>
                  </div>
                </>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default PipelineSection;

