
export interface NavLinkItem {
  id: string;
  href: string;
  label: string;
}

export interface PipelineTab {
  id: string;
  title: string; // e.g., "1. Spec & Arch"
  heading: string; // e.g., "Stage 1: System Specification & Architecture"
  generalDescription: string; // General intro for the stage
  challenge: string;
  // Combined field for AI Agent(s) & Role, Core AI Technique, Key Tools/Frameworks
  agenticWorkflowDetails: string; 
  outcome: string; // Primary Business Outcome
  outcomeColor?: string;
  icon?: React.ReactNode;
}

export interface SectionCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
}

export interface RoadmapPhase {
  id: string;
  period: string; // Timeline
  title: string; // e.g., "Phase 1: Crawl"
  narrativeDescription: string; // Initial summary description of the phase
  objectives: string;
  actions: string;
  coreTechnologies: string;
  peopleCultureFocus: string;
  successMetrics: string;
  colorClass: string; 
  dotClass: string;
}
