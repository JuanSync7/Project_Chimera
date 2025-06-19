
# Roadmap Phase 3 Page Structure (`src/app/roadmap-details/phase-3-run/page.tsx`)

This document outlines the refactored component structure for the "Roadmap: Phase 3 - Run" page. To improve maintainability and readability, the content of this page has been broken down into several smaller, focused React components.

## Main Page File

*   **File:** `src/app/roadmap-details/phase-3-run/page.tsx`

This file serves as the entry point for the `/roadmap-details/phase-3-run` route. Its primary responsibilities are:
1.  Rendering the overall page layout using the `<SubPageLayout>` component.
2.  Displaying the main page title (e.g., "Roadmap: Phase 3 - Run").
3.  Rendering the "Phase Overview" paragraph and the "Executive Overview" content directly within the page component (via an inline `ExecutiveOverviewComponent`).
4.  Managing the visual separation between the Executive Overview and subsequent "Part" components using `<hr />` elements with specific styling.
5.  Importing and sequentially rendering the individual "Part" components (e.g., `Part1StrategicClarification`, `Part2FullStackAutonomy`, etc.), with styled `<hr />` separators placed between each.

## Child Components for Content Sections

The detailed content for each major "Part" of the Phase 3 roadmap is encapsulated in its own component. These components are located in the `src/components/chimera/roadmap-phase-3/` directory.

The main page imports and uses the following components:

1.  **`Part1StrategicClarification.tsx`**
    *   **Content:** "Part 1: Strategic Clarification: We Are the Architect, Not the Toolsmith"
    *   Renders the `<h2>` for Part 1 (styled with `gradient-text`) and its associated paragraphs.

2.  **`Part2FullStackAutonomy.tsx`**
    *   **Content:** "Part 2: Full Stack Autonomy & The Human in the Loop"
    *   Renders the `<h2>` for Part 2 (styled with `gradient-text`), its introductory paragraph, the "How it Works with a Human in the Loop:" `<h3>` sub-section, and the related list items.

3.  **`Part3DetailedStepByStepPlan.tsx`**
    *   **Content:** "Part 3: Detailed Step-by-Step Plan for Phase 3"
    *   Renders the `<h2>` for Part 3 (styled with `gradient-text`), its introductory paragraph, and the detailed "Step X" `<h3>` sub-sections (Step 1 through Step 5), including their descriptions, methodologies, and KPIs. The KPIs for each step are presented within transparent, white-bordered `SectionCard` components.

4.  **`Part4CompanyGrowthCostPerformance.tsx`**
    *   **Content:** "Part 4: Company Growth, Cost, and Performance"
    *   Renders the `<h2>` for Part 4 (styled with `gradient-text`), its introductory paragraph, and the `<h3>` sub-sections detailing "Phase 3 Cost Estimation" (with its table and indented bullet points) and "Projected Performance Gains and Return on Investment (ROI)" (with icon-led list items).

5.  **`Part5DeployedAgentsNewHires.tsx`**
    *   **Content:** "Part 5: Deployed Agents, New Hires, and the Future"
    *   Renders the `<h2>` for Part 5 (styled with `gradient-text`) and its `<h3>` sub-sections covering "Types of Agents Deployed," "Integrating New Hires," "Strategic Hiring: The AI-Hybrid Engineer," and "The Future After Phase 3," presented as list items.

6.  **`Part6LearningFromEDAIndustry.tsx`**
    *   **Content:** "Part 6: Learning from the EDA Industry & Building Our Advantage"
    *   Renders the `<h2>` for Part 6 (styled with `gradient-text`), its introductory paragraphs, and the "Our Unique Advantage:" `<h3>` sub-section.

## Benefits of this Structure

*   **Modularity:** Each "Part" is self-contained, making it easier to update or modify individual sections without affecting others.
*   **Readability:** The main `page.tsx` file is significantly shorter and easier to understand, primarily focusing on page layout and component composition.
*   **Maintainability:** Debugging and tracing content becomes simpler as specific sections are isolated within their respective components.
*   **Reusability (Potential):** While these components are specific to this page, the pattern encourages breaking down complex pages into manageable pieces.

This refactoring enhances the organization of the Phase 3 roadmap content within the codebase.
