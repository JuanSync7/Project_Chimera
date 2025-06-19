
# Project Chimera Data Structures

This document outlines the key data structures (TypeScript interfaces) used within the Project Chimera application. These structures define the shape of data used to dynamically generate content for various sections of the webpage, primarily populated in `src/lib/chimera/constants.ts` and typed in `src/lib/chimera/types.ts`.

## 1. `NavLinkItem`

*   **File**: `src/lib/chimera/types.ts`
*   **Purpose**: Defines the structure for navigation links used in the main header and mobile menu.
*   **Fields**:
    *   `id: string`: A unique identifier for the navigation link. This `id` typically matches the `id` attribute of the corresponding `<section>` element on the main page (`src/app/page.tsx`) to enable scroll-to functionality and active section highlighting.
    *   `href: string`: The URL or hash fragment the link points to (e.g., `#overview`, `/some-subpage`).
    *   `label: string`: The display text for the navigation link.
*   **Usage**:
    *   Populated in `NAV_LINKS` array in `src/lib/chimera/constants.ts`.
    *   Consumed by `Header.tsx` and `MobileMenu.tsx` (via `PageShell.tsx`) to render navigation items.
    *   The `id` field is used by the `IntersectionObserver` in `src/app/page.tsx` to set the `activeSection` state.

## 2. `PipelineTab`

*   **File**: `src/lib/chimera/types.ts`
*   **Purpose**: Defines the structure for each tab in the "AI-Powered Design Pipeline" section on the main page.
*   **Fields**:
    *   `id: string`: A unique identifier for the tab (e.g., `tab-spec`).
    *   `title: string`: The short title displayed on the tab button (e.g., "1. Spec & Arch").
    *   `icon?: React.ReactNode`: A ReactNode (typically a Lucide icon component directly imported and used, e.g., `<Pencil className="w-5 h-5 mr-2 inline-block" />`) to be displayed on the tab button.
    *   `heading: string`: The main heading for the content displayed when the tab is active (e.g., "Stage 1: System Specification & Architecture").
    *   `generalDescription: string`: A general introductory paragraph for the pipeline stage. Can contain HTML for formatting (e.g., `<strong>`).
    *   `challenge: string`: Describes the key challenge this pipeline stage addresses. Can contain HTML.
    *   `agenticWorkflowDetails: string`: Detailed description of the AI agents, techniques, tools, and processes involved. Expected to contain HTML for structure (e.g., `<ul>`, `<li>`, `<strong>`).
    *   `outcome: string`: The primary business outcome or benefit of the agentic approach in this stage. Can contain HTML.
    *   `outcomeColor?: string`: An optional Tailwind CSS text color class (e.g., `text-green-400`) for styling the outcome text.
*   **Usage**:
    *   Populated in the `PIPELINE_TABS` array in `src/lib/chimera/constants.ts`.
    *   Consumed by `PipelineSection.tsx` (`src/components/chimera/sections/PipelineSection.tsx`) to render the tab buttons and their corresponding content panels.

## 3. `RoadmapPhase`

*   **File**: `src/lib/chimera/types.ts`
*   **Purpose**: Defines the structure for each phase in the "Implementation Roadmap" section.
*   **Fields**:
    *   `id: string`: A unique identifier for the roadmap phase (e.g., `crawl`).
    *   `period: string`: The timeline for the phase (e.g., "YEAR 1 - 1.5 (Q3 2025 - Q4 2026)").
    *   `title: string`: The main title of the roadmap phase (e.g., "Phase 1: Crawl - Foundational Infrastructure and Pilot Projects").
    *   `narrativeDescription: string`: A summary description of the phase. Can contain HTML.
    *   `objectives: string`: Key objectives for the phase. Can contain HTML.
    *   `actions: string`: Key actions to be taken, typically a multi-line string where each line (after potential leading characters like "- ") becomes a list item. Expected to be processed for list display. Can contain HTML within lines.
    *   `coreTechnologies: string`: Core technologies to be deployed or developed. Can contain HTML.
    *   `peopleCultureFocus: string`: Focus areas related to people and cultural changes. Can contain HTML.
    *   `successMetrics: string`: Key success metrics and KPIs for the phase. Can contain HTML.
    *   `colorClass: string`: A Tailwind CSS text color class (e.g., `text-sky-400`) used for styling elements associated with this phase.
    *   `dotClass: string`: A CSS class name (e.g., `phase-crawl`) used to style the timeline dot associated with this phase in `src/app/globals.css`.
*   **Usage**:
    *   Populated in the `ROADMAP_PHASES` array in `src/lib/chimera/constants.ts`.
    *   Consumed by `RoadmapSection.tsx` (`src/components/chimera/sections/RoadmapSection.tsx`) to render each phase in the timeline.

## 4. `SectionCardProps`

*   **File**: `src/lib/chimera/types.ts`
*   **Purpose**: Defines the props for the reusable `SectionCard.tsx` component.
*   **Fields**:
    *   `icon?: React.ReactNode`: An optional ReactNode (typically a Lucide icon component) to be displayed at the top of the card.
    *   `title: string`: The title of the card. Can contain HTML for rich text (e.g., for `gradient-text` spans).
    *   `description: string`: The main content/description for the card. Can contain HTML for lists, bolding, etc.
    *   `className?: string`: Optional additional CSS classes for the root `div` of the card.
    *   `contentClassName?: string`: Optional additional CSS classes for the `div` wrapping the description.
    *   `titleClassName?: string`: Optional additional CSS classes for the `h3` title element.
*   **Usage**:
    *   Consumed by `SectionCard.tsx` (`src/components/chimera/SectionCard.tsx`).
    *   Used by various section components (e.g., `OverviewSection.tsx`, `SymbiosisSection.tsx`) to display content in a consistent card format. The `title` and `description` are rendered using `dangerouslySetInnerHTML` to allow for embedded HTML styling.

## 5. `KeyStatCardProps` (Implicit via `KeyStatCard.tsx`)

*   **File**: `src/components/chimera/KeyStatCard.tsx` (Props interface defined within the component)
*   **Purpose**: Defines the props for the reusable `KeyStatCard.tsx` component.
*   **Fields**:
    *   `stat: string`: The prominent statistic or concept title displayed in large, gradient text.
    *   `description: string`: The detailed explanation for the key point. Supports HTML rendering.
    *   `icon?: React.ReactElement<LucideProps>`: An optional Lucide icon.
    *   `className?: string`: Optional additional CSS classes.
*   **Usage**:
    *   Used in `src/app/strategic-imperative/page.tsx` (Section 1.1) to present core arguments. Each card encapsulates a key concept and its detailed paragraph.
    *   The component internally handles responsive font sizes and line heights for the `stat` to prevent descender clipping.

## 6. `PYTHON_CODE_EXAMPLE`

*   **File**: `src/lib/chimera/constants.ts` (Constant, not a type)
*   **Purpose**: A string constant holding a Python code snippet.
*   **Usage**:
    *   Imported and used in `SymbiosisSection.tsx` to display an example of a custom agent. It's embedded within a `<pre><code>` block and styled as a code block.

Understanding these data structures is key to modifying or extending the content-driven sections of the Project Chimera application.
