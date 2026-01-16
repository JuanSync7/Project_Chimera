
"use client";
import React from 'react';
import SubPageLayout from '@/components/chimera/SubPageLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Network } from 'lucide-react';
import DynamicIcon, { type IconName } from '@/components/icons/DynamicIcon';

interface SiteNode {
  name: string;
  href: string;
  icon: IconName;
  children?: SiteNode[];
}

const siteStructure: SiteNode[] = [
    { name: 'Home Page', href: '/', icon: 'Home', children: [
        { name: 'Overview Section', href: '/strategic-imperative', icon: 'LayoutDashboard' },
        { name: 'Strategic Imperative', href: '/strategic-imperative', icon: 'TrendingUp' },
        { name: 'Architecture Section', href: '/architectural-blueprint/supervisor-worker-details', icon: 'Layers' },
        { name: 'Architectural Blueprint', href: '/architectural-blueprint', icon: 'DraftingCompass', children: [
            { name: 'Supervisor-Worker Details', href: '/architectural-blueprint/supervisor-worker-details', icon: 'Workflow' },
            { name: 'MCP Server Details', href: '/architectural-blueprint/mcp-server-details', icon: 'ServerCog' },
            { name: 'RAG Details', href: '/architectural-blueprint/rag-details', icon: 'DatabaseZap' },
        ]},
        { name: 'AI Pipeline Section', href: '/ai-pipeline/specification-agent-plan', icon: 'Cpu' },
        { name: 'AI-Powered Pipeline Details', href: '/ai-pipeline', icon: 'Cpu' },
        { name: 'Human-AI Symbiosis Section', href: '/human-ai-symbiosis', icon: 'BrainCircuit' },
        { name: 'Human-AI Symbiosis Details', href: '/human-ai-symbiosis', icon: 'BrainCircuit' },
        { name: 'Risks & Vision Section', href: '/risk-mitigation', icon: 'ShieldCheck' },
        { name: 'Risk Mitigation Details', href: '/risk-mitigation', icon: 'ShieldAlert' },
        { name: 'AGI Horizon Details', href: '/agi-horizon', icon: 'Telescope' },
        { name: 'Roadmap Section', href: '/roadmap-details/phase-1-crawl', icon: 'GanttChartSquare' },
        { name: 'Roadmap Details', href: '/roadmap-details', icon: 'GanttChartSquare', children: [
            { name: 'Phase 1: Crawl', href: '/roadmap-details/phase-1-crawl', icon: 'Milestone' },
            { name: 'Phase 2: Walk', href: '/roadmap-details/phase-2-walk', icon: 'TrendingUp' },
            { name: 'Phase 3: Run', href: '/roadmap-details/phase-3-run', icon: 'Target' },
            { name: 'Modern Pricing Model', href: '/modern-pricing-model', icon: 'DollarSign' },
        ]},
    ]},
];

const TreeNode: React.FC<{ node: SiteNode; isLast?: boolean; isRoot?: boolean }> = ({ node, isRoot = false, isLast = false }) => {
    return (
        <li className="relative">
            <div className="flex items-center">
                {/* Connector lines for non-root nodes */}
                {!isRoot && (
                    <>
                        {/* Vertical line connecting to siblings. For the last child, it stops at the connection point. */}
                        <span
                            className="absolute -left-5 top-0 w-px bg-slate-600"
                            style={{ height: isLast ? '1.375rem' : '100%' }}
                            aria-hidden="true"
                        />
                        {/* Horizontal line connecting to the node text/button */}
                        <span
                            className="absolute -left-5 top-[1.375rem] h-px w-5 bg-slate-600"
                            aria-hidden="true"
                        />
                    </>
                )}
                <Link href={node.href} passHref>
                    <Button variant="ghost" className="text-lg hover:bg-primary/10 h-11 px-3">
                        <DynamicIcon name={node.icon} className="mr-3 h-5 w-5 text-primary" />
                        {node.name}
                    </Button>
                </Link>
            </div>
            
            {node.children && node.children.length > 0 && (
                <ul className="mt-2 pl-8 space-y-2">
                    {node.children.map((childNode, index) => (
                        <TreeNode 
                            key={childNode.href} 
                            node={childNode} 
                            isLast={index === node.children.length - 1} 
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default function SiteMapPage() {
    return (
        <SubPageLayout>
            <div className="flex flex-col items-center text-center mb-12">
                <Network className="h-16 w-16 text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-2">
                    Website Hierarchy
                </h1>
                <p className="text-2xl text-slate-400">A complete map of the Project Chimera presentation.</p>
            </div>
            <div className="w-full max-w-4xl mx-auto bg-slate-900/50 p-8 rounded-xl border border-slate-700">
                <ul className="space-y-2">
                    {siteStructure.map((rootNode, index) => (
                        <TreeNode 
                            key={rootNode.href} 
                            node={rootNode} 
                            isRoot 
                            isLast={index === siteStructure.length - 1}
                        />
                    ))}
                </ul>
            </div>
        </SubPageLayout>
    );
}
