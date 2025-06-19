
# Project Chimera: Project Structure Overview

This document provides an overview of the **Project Chimera** presentation application's directory structure and the purpose of key files and folders. This project is built with React, Vite, and TypeScript, and styled with Tailwind CSS.

The primary codebase for the presentation app is located within the `Project_Chimera/` subdirectory.

## Root Directory (Outside `Project_Chimera/`)

Contains general project files and documentation relevant to the overall Firebase Studio project.

*   **`.env` / `.env.local`**: Environment variable files (though Project Chimera itself, being client-side, might not use these extensively beyond build configurations if any).
*   **`next.config.ts`**: Not directly used by the Project Chimera Vite app, but part of the broader Firebase Studio Next.js environment.
*   **`package.json`**: Project dependencies and scripts for the overall Firebase Studio project. The `Project_Chimera` app has its own `package.json`.
*   **`tailwind.config.ts`**: Tailwind CSS configuration for the overall Firebase Studio project. Project Chimera uses Tailwind via CDN and inline styles.
*   **`tsconfig.json`**: TypeScript configuration for the overall Firebase Studio project. Project Chimera has its own `tsconfig.json`.
*   **Markdown Documentation Files**: Files like this one, `README.md`, `COLOR_SCHEME.md`, etc., providing guidance and overview for the project.

## `Project_Chimera/` Directory

This is the main container for the Project Chimera presentation application's source code.

*   **`index.html`**: The main HTML entry point for the Vite application. It includes:
    *   Links to Google Fonts (Inter).
    *   A CDN link for Tailwind CSS.
    *   Inline `<style>` tags for global CSS, custom classes (e.g., `.gradient-text`, `.glassmorphism`), and theme definitions (dark mode, accent colors).
    *   The root `<div>` (e.g., `<div id="root"></div>`) where the React application is mounted.
*   **`package.json`**: Defines dependencies (React, Vite, TypeScript) and scripts (`dev`, `build`) specific to the Project Chimera application.
*   **`vite.config.ts`**: Vite build tool configuration. May include aliases or environment variable handling.
*   **`tsconfig.json`**: TypeScript configuration specific to the Project Chimera app.
*   **`App.tsx`**: The main root React component. It sets up:
    *   Routing or section display logic for the single-page application.
    *   State management for global concerns like `activeSection` (for scroll-spy) and `isMobileMenuOpen`.
    *   Imports and renders various section components.
    *   Often wrapped by `<PageShell>`.
*   **`index.tsx`**: The entry point for the React application, typically rendering `<App />` into the root HTML element.
*   **`constants.ts`**: Defines constant data used throughout the application, such as:
    *   `NAV_LINKS`: For header and mobile menu navigation.
    *   `PIPELINE_TABS`: Data for the AI-Powered Design Pipeline section.
    *   `ROADMAP_PHASES`: Data for the Implementation Roadmap section.
    *   `PYTHON_CODE_EXAMPLE` / `HIGH_LEVEL_PYTHON_CODE_EXAMPLE`: String constant for code display.
*   **`types.ts`**: Contains TypeScript type definitions and interfaces (e.g., `NavLinkItem`, `PipelineTab`, `RoadmapPhase`, `SectionCardProps`).
*   **`components/`**: Directory for React components.
    *   **`Header.tsx`**: Renders the main site navigation header.
    *   **`MobileMenu.tsx`**: Renders the navigation menu for mobile devices.
    *   **`Footer.tsx`**: Renders the site footer.
    *   **`SectionCard.tsx`**: A reusable card component for displaying summarized information.
    *   **`KeyStatCard.tsx`**: A specialized card for displaying key statistics or points with an icon.
    *   **`AnimatedRocket.tsx`**: Component for the animated rocket visual.
    *   **`StarryBackground.tsx`**: Component for the animated starry background.
    *   **`PageShell.tsx`**: A layout component that wraps main page content, providing Header and Footer.
    *   **`SubPageLayout.tsx`**: A layout component for detailed sub-pages, including a back button and PageShell.
    *   **`sections/`**: Contains components for each major content section of the presentation (e.g., `HomeSection.tsx`, `OverviewSection.tsx`, `ArchitectureSection.tsx`, etc.).
    *   **`pipeline-stages/`**: Contains components for each detailed stage of the AI Pipeline (e.g., `Stage_3_1_SpecAndArch.tsx`). Used by `/ai-pipeline/page.tsx`.
    *   **`roadmap-phase-3/`**: Contains components for parts of the detailed Phase 3 roadmap page.
*   **`app/` (if structured for sub-pages like a Next.js app within Vite, or if sub-pages are conceptual):**
    *   This directory might exist if Project Chimera is using a client-side routing solution that mimics Next.js App Router for its sub-pages (e.g., `/strategic-imperative/page.tsx`, `/architectural-blueprint/page.tsx`). Each such sub-page would render content typically wrapped in `<SubPageLayout>`. *(The current file listing shows these files directly in `src/app/`, implying a Next.js structure for this part of the project, even if the main `Project_Chimera` is Vite. This guide will assume these are part of the broader project managed by Firebase Studio, distinct from the core `Project_Chimera/` Vite app which is one self-contained presentation).*

    **(Correction based on provided file structure):** The files like `src/app/strategic-imperative/page.tsx` indicate that these "sub-pages" *are* structured using Next.js App Router, residing outside the `Project_Chimera/` Vite application. The Project Chimera Vite app is likely one part of a larger Next.js application managed by Firebase Studio. This `PROJECT_STRUCTURE_OVERVIEW.md` primarily details the Vite app, but acknowledges the Next.js structure for content pages.

*   **`hooks/`**: Contains custom React hooks, such as `useIsMobile.tsx`.
*   **`lib/`**: Utility functions (`utils.ts`) and possibly other shared logic for the Project Chimera app.

This structure separates the core presentation logic (Vite/React app) from the surrounding documentation and potentially other Next.js-based content pages, providing a clear organization for the Project Chimera application.
