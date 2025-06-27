
# Project Chimera: Data Structures (TypeScript Types)

This document outlines the key TypeScript types and interfaces used within the **Project Chimera** presentation application. These structures define the shape of data primarily used for rendering navigation, dynamic content sections (like the pipeline tabs and roadmap), and styled components.

The main type definitions can be found in `src/lib/chimera/types.ts`.

## 1. `NavLinkItem`

*   **File**: `src/lib/chimera/types.ts`
*   **Purpose**: Defines the structure for navigation links used in the header and mobile menu.
*   **Fields**:
    *   `id: string`: A unique identifier for the navigation link, often corresponding to the `id` of the target section on the main page (e.g., "overview", "architecture"). Used for active section highlighting.
    *   `href: string`: The fragment identifier for the link (e.g., "#overview", "#pipeline").
    *   `label: string`: The user-visible text for the navigation link (e.g., "Overview", "Architecture").
*   **Usage**:
    *   Populates the `NAV_LINKS` array in `src/lib/chimera/constants.ts`.
    *   Rendered by `Header.tsx` and `MobileMenu.tsx` components.
    *   The `activeSection` state in `src/app/page.tsx` compares against `NavLinkItem.id` to highlight the current link.

## 2. `PipelineTab`

*   **File**: `src/lib/chimera/types.ts`
*   **Purpose**: Defines the structure for each tab/stage displayed in the "AI-Powered Design Pipeline" section.
*   **Fields**:
    *   `id: string`: A unique identifier for the tab/stage (e.g., "stage-3-1"). Used for targeting active tab state and linking from other parts of the app.
    *   `title: string`: Short title for the tab button (e.g., "1. Spec & Arch").
    *   `icon?: React.ReactNode`: Optional ReactNode (typically a Lucide icon component) for the tab button.
    *   `heading: string`: Full heading for the content display of the stage (e.g., "Stage 1: System Specification & Architecture").
    *   `generalDescription: string`: A brief introductory description of the stage.
    *   `challenge: string`: Description of the key challenge addressed by this stage.
    *   `agenticWorkflowDetails: string`: Detailed HTML string content describing the AI agents, techniques, tools, and processes for this stage.
    *   `outcome: string`: Description of the primary business outcome or benefits of this stage.
    *   `outcomeColor?: string`: Optional Tailwind CSS text color class for the outcome text (e.g., "text-green-400").
*   **Usage**:
    *   Populates the `PIPELINE_TABS` array in `src/lib/chimera/constants.ts`.
    *   Used by `PipelineSection.tsx` to render the interactive tabbed interface.
    *   Detailed content from these fields is also used in the dedicated `/ai-pipeline` page and its sub-components (e.g., `Stage_3_1_SpecAndArch.tsx`).

## 3. `SectionCardProps`

*   **File**: `src/lib/chimera/types.ts`
*   **Purpose**: Defines the props for the generic `SectionCard.tsx` component, used for displaying summarized information blocks (e.g., in the "Overview" section).
*   **Fields**:
    *   `icon?: React.ReactNode`: Optional ReactNode for an icon at the top of the card.
    *   `title: string`: The title of the card.
    *   `description: string | React.ReactNode`: The main content/description of the card. Can be a simple string (potentially HTML) or a more complex ReactNode.
    *   `className?: string`: Optional CSS classes for the root card `div`.
    *   `contentClassName?: string`: Optional CSS classes for the description container.
    *   `titleClassName?: string`: Optional CSS classes for the title element.
*   **Usage**:
    *   Used by components like `OverviewSection.tsx` to render consistent-looking information cards.

## 4. `RoadmapPhase`

*   **File**: `src/lib/chimera/types.ts`
*   **Purpose**: Defines the structure for each phase in the implementation roadmap.
*   **Fields**:
    *   `id: string`: Unique identifier for the roadmap phase (e.g., "crawl", "walk", "run").
    *   `period: string`: The timeline for the phase (e.g., "YEAR 1 - 1.5 (Q3 2025 - Q4 2026)").
    *   `title: string`: The title of the phase (e.g., "Phase 1: Crawl - Foundational Infrastructure...").
    *   `narrativeDescription: string`: An introductory summary of the phase's narrative (HTML allowed).
    *   `objectives: string`: Key objectives for the phase (HTML allowed).
    *   `actions: string`: Key actions to be taken during the phase (newline-separated for list rendering).
    *   `coreTechnologies: string`: Core technologies to be deployed or developed (HTML allowed).
    *   `peopleCultureFocus: string`: Focus areas for people and cultural changes (HTML allowed).
    *   `successMetrics: string`: Key Performance Indicators (KPIs) and success metrics for the phase (HTML allowed).
    *   `colorClass: string`: Tailwind CSS text color class for theming elements related to this phase (e.g., "text-sky-400").
    *   `dotClass: string`: CSS class used to style the roadmap timeline dot for this phase (defined in `src/app/globals.css`).
*   **Usage**:
    *   Populates the `ROADMAP_PHASES` array in `src/lib/chimera/constants.ts`.
    *   Used by `RoadmapSection.tsx` to render the timeline.
    *   Detailed content is also used in the dedicated roadmap phase pages (e.g., `/roadmap-details/phase-1-crawl/page.tsx`).

Understanding these data structures is key to comprehending how content is managed and rendered throughout the Project Chimera presentation application.
