
"use client";
import React, { useState } from 'react';
import { PIPELINE_TABS } from '@/lib/chimera/constants';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronLeft, ChevronRight, AlertTriangle, Star } from 'lucide-react'; 

const PipelineSection: React.FC = () => {
  const [currentMobileStageIndex, setCurrentMobileStageIndex] = useState(0);
  const isMobile = useIsMobile();

  const handlePrev = () => {
    setCurrentMobileStageIndex(prev => (prev === 0 ? PIPELINE_TABS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentMobileStageIndex(prev => (prev === PIPELINE_TABS.length - 1 ? 0 : prev + 1));
  };

  const currentMobileStageData = isMobile !== undefined ? PIPELINE_TABS[currentMobileStageIndex] : null;

  return (
    <section id="pipeline" className="py-16 md:py-24">
      <h2 className="text-4xl font-bold text-center mb-3 text-white">The AI-Powered Design Pipeline</h2>
      <p className="text-slate-400 text-center text-lg mb-12 max-w-3xl mx-auto">
        Applying <strong>agentic workflows</strong> to every stage of chip design, creating a <strong>"digital thread"</strong> of intent and context that flows from concept to silicon, breaking down traditional silos.
      </p>

      {isMobile === undefined ? (
         <div className="flex justify-center items-center h-64">
           {/* You can add a loading skeleton or spinner here if desired */}
         </div>
      ) : isMobile ? (
        // Mobile View: Roulette
        <div className="mt-10 relative px-4">
          <div className="flex items-center justify-center mb-6"> {/* Centered main button */}
            <Button onClick={handlePrev} variant="outline" size="icon" className="shrink-0">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            {currentMobileStageData && (
              <Link href={`/ai-pipeline#${currentMobileStageData.id}`} passHref>
                <Button
                  variant="default" 
                  size="lg"
                  className="text-center min-w-[200px] max-w-[280px] flex-grow mx-4 shadow-lg flex items-center justify-center gap-2"
                >
                  {currentMobileStageData.icon}
                  {currentMobileStageData.title}
                </Button>
              </Link>
            )}
            
            <Button onClick={handleNext} variant="outline" size="icon" className="shrink-0">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {currentMobileStageData && (
            <div className="mt-6 p-6 bg-slate-800/80 rounded-lg shadow-xl text-left max-w-lg mx-auto border border-slate-700">
              <h4 className="text-xl font-semibold text-primary mb-3">{currentMobileStageData.heading}</h4>
              <p 
                className="text-slate-300 text-sm mb-4 prose prose-sm prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: currentMobileStageData.generalDescription.substring(0, 220) + (currentMobileStageData.generalDescription.length > 220 ? '...' : '') }}
              />
              
              <div className="space-y-3 text-xs">
                <div className="mb-3">
                    <h5 className="font-semibold text-white text-sm mb-1 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2 inline-block text-yellow-400 flex-shrink-0" />
                        Key Challenge:
                    </h5>
                    <p className="text-slate-400 pl-[22px]" dangerouslySetInnerHTML={{ __html: currentMobileStageData.challenge.substring(0, 120) + (currentMobileStageData.challenge.length > 120 ? '...' : '') }}></p>
                </div>
                
                <div>
                    <h5 className="font-semibold text-white text-sm mb-1 flex items-center">
                        <Star className="w-4 h-4 mr-2 inline-block text-green-400 flex-shrink-0" />
                        Primary Outcome:
                    </h5>
                    <div 
                        className={`pl-[22px] ${currentMobileStageData.outcomeColor || 'text-sky-300'} prose prose-xs prose-invert max-w-none`} 
                        dangerouslySetInnerHTML={{ __html: currentMobileStageData.outcome.substring(0, 120) + (currentMobileStageData.outcome.length > 120 ? '...' : '') }}
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
        // Desktop View: Horizontally Scrollable Buttons
        <div className="my-12 py-4 border-y border-slate-700">
          <h3 className="text-xl font-semibold text-center text-white mb-6">Pipeline Stages Overview</h3>
          <div className="flex overflow-x-auto space-x-3 pb-4 px-4 no-scrollbar">
            {PIPELINE_TABS.map((stage) => (
              <Link key={stage.id} href={`/ai-pipeline#${stage.id}`} passHref>
                <Button
                  variant="outline"
                  size="default"
                  className="bg-slate-800/60 border-white hover:bg-slate-700/80 hover:border-primary text-slate-300 hover:text-white transition-all duration-200 whitespace-nowrap min-w-[200px] flex items-center justify-center gap-2"
                >
                  {stage.icon}
                  {stage.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default PipelineSection;
