
export interface NavLinkItem {
  id: string;
  href: string;
  label: string;
}

export interface PipelineTab {
  id: string;
  title: string; // e.g., "1. Spec & Arch" - Used for button labels
  icon?: React.ReactNode; // Icon for the button/tab
  heading: string; // e.g., "Stage 1: System Specification & Architecture" - Used for subpage titles and mobile summary
  generalDescription: string; // General intro for the stage - Used for mobile summary
  challenge: string; // Used for mobile summary
  agenticWorkflowDetails: string; // Full details for the ai-pipeline subpage
  outcome: string; // Primary Business Outcome - Used for mobile summary
  outcomeColor?: string; // Optional color for outcome text
}

export interface SectionCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string | React.ReactNode; // Allow ReactNode for description
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
