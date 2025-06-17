
import React, { useState } from 'react';
import { PIPELINE_TABS } from '@/lib/chimera/constants';
import type { PipelineTab } from '@/lib/chimera/types';
import DynamicIcon, { type IconName } from '@/components/icons/DynamicIcon';
import { AlertTriangle, Workflow, Star } from 'lucide-react';

const PipelineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(PIPELINE_TABS[0].id);

  const currentTabData = PIPELINE_TABS.find(tab => tab.id === activeTab);

  return (
    <section id="pipeline" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-3 text-white">The AI-Powered Design Pipeline</h2>
      <p className="text-slate-400 text-center text-lg mb-12 max-w-3xl mx-auto">
        Applying agentic workflows to every stage of chip design, creating a "digital thread" of intent and context that flows from concept to silicon, breaking down traditional silos.
      </p>
      
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {PIPELINE_TABS.map((tab: PipelineTab) => (
          <button
            key={tab.id}
            className={`tab-button-base py-2.5 px-5 rounded-full text-sm font-medium flex items-center justify-center
                        ${activeTab === tab.id ? 'tab-button-active shadow-md shadow-primary/50' : 'tab-button-inactive'}`}
            onClick={() => setActiveTab(tab.id)}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            {typeof tab.icon === 'string' && (
              <DynamicIcon name={tab.icon as IconName} className="w-5 h-5 mr-2 inline-block" />
            )}
            {tab.title}
          </button>
        ))}
      </div>

      <div id="tab-content-wrapper" className="section-card rounded-2xl p-8 md:p-12 min-h-[450px] relative overflow-hidden">
        {PIPELINE_TABS.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            aria-labelledby={tab.id}
            className={`transition-opacity duration-500 ease-in-out ${activeTab === tab.id ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 w-full p-8 md:p-12 pointer-events-none'}`}
          >
            {activeTab === tab.id && currentTabData && (
              <>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 gradient-text">{currentTabData.heading}</h3>
                <p className="mb-6 text-slate-300 text-base lg:text-lg" dangerouslySetInnerHTML={{ __html: currentTabData.generalDescription }}></p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-1 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 inline-block text-yellow-400" />
                      Key Challenge:
                    </h4>
                    <p className="text-slate-400 pl-7" dangerouslySetInnerHTML={{ __html: currentTabData.challenge }}></p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-1 flex items-center">
                      <Workflow className="w-5 h-5 mr-2 inline-block text-blue-400" />
                      Agentic Workflow & Technologies:
                    </h4>
                    <div className="text-slate-400 prose prose-sm prose-invert max-w-none pl-7" dangerouslySetInnerHTML={{ __html: currentTabData.agenticWorkflowDetails }}></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-1 flex items-center">
                      <Star className="w-5 h-5 mr-2 inline-block text-green-400" />
                      Primary Business Outcome:
                    </h4>
                    <p className={`font-semibold pl-7 ${currentTabData.outcomeColor || 'text-sky-300'}`} dangerouslySetInnerHTML={{ __html: currentTabData.outcome }}></p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PipelineSection;
