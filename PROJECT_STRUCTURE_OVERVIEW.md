
# Project Chimera: Project Structure Overview

This document provides a detailed overview of the Project Chimera application's directory structure and the purpose of key files and folders. This project is built with Next.js (App Router), TypeScript, Tailwind CSS, and ShadCN UI.

## Root Directory

The root directory contains configuration files, main documentation, and the `src` directory where most of the application code resides.

*   **`.env` / `.env.local`**: Environment variable files. `.env.local` is used for local development secrets (e.g., `GEMINI_API_KEY`) and is gitignored.
*   **`apphosting.yaml`**: Configuration for Firebase App Hosting.
*   **`components.json`**: Configuration file for ShadCN UI, defining component paths, styling, etc.
*   **`next.config.ts`**: Configuration file for Next.js (build settings, image optimization, etc.).
*   **`package.json`**: Lists project dependencies, scripts (dev, build, start, lint), and project metadata.
*   **`README.md`**: The main README file for the project, providing a general overview and setup instructions.
*   **`tailwind.config.ts`**: Configuration file for Tailwind CSS, including theme extensions (colors, fonts, custom utility classes).
*   **`tsconfig.json`**: TypeScript configuration for the project.
*   **Markdown Documentation Files**:
    *   `ARTICLE_PAGE_FORMATTING_GUIDE.md`
    *   `ARCHITECTURAL_BLUEPRINT_FORMATTING_GUIDE.md` (Note: This is kept consistent with ARTICLE_PAGE_FORMATTING_GUIDE.md)
    *   `COLOR_SCHEME.md`
    *   `DATA_STRUCTURES.md`
    *   `FONT_CHOICES.md`
    *   `GUIDE_CREATING_PAGES.md`
    *   `INTERACTIVITY_GUIDE.md`
    *   `MCP_SERVER_DETAILS_FORMATTING_GUIDE.md`
    *   `PROJECT_STRUCTURE_OVERVIEW.md` (this file)
    *   `STYLING_OVERVIEW.md`
    *   `SVG_DIAGRAM_GUIDELINES.md`
    *   `TEXT_STYLING_GUIDELINES.md`

## `src/` Directory

This is the main container for the application's source code.

### `src/app/`

This directory implements the Next.js App Router. Each folder within `src/app/` typically represents a route segment.

*   **`layout.tsx`**: The root layout component for the entire application. It sets up the HTML structure, applies global styles (via `globals.css`), configures fonts (Inter), and includes global components like the `Toaster`.
*   **`page.tsx`**: The entry point for the main landing page (`/`). It uses `PageShell` and aggregates various section components from `src/components/chimera/sections/`. It also manages scroll-based active section highlighting and is wrapped in a `Suspense` component.
*   **`globals.css`**: Contains global CSS styles, Tailwind CSS base directives (`@tailwind base; @tailwind components; @tailwind utilities;`), ShadCN UI theme variables (CSS custom properties for light and dark modes), and custom global classes (e.g., `.gradient-text`, tab button styles, roadmap styles, star animation).
*   **`[subpage-name]/page.tsx`**: These directories (e.g., `src/app/strategic-imperative/page.tsx`, `src/app/architectural-blueprint/page.tsx`) define individual subpages. They typically use `SubPageLayout` for consistent structure.
    *   `src/app/strategic-imperative/page.tsx`: Presents detailed content. Section 1.1, for instance, uses `KeyStatCard` components to encapsulate each main point, with the card's `stat` prop acting as a title and its `description` prop holding the detailed paragraph.
    *   `src/app/ai-pipeline/page.tsx`: Details the stages of the AI-Powered Design Pipeline. It features a set of shortcut buttons for quick navigation to each stage description. Each stage's content is rendered by dedicated components from `src/components/chimera/pipeline-stages/`.
    *   Some subpages can also be nested under a parent route, for example:
        *   `src/app/architectural-blueprint/mcp-server-details/page.tsx`
        *   `src/app/architectural-blueprint/supervisor-worker-details/page.tsx`
        *   `src/app/roadmap-details/phase-1-crawl/page.tsx` (and similar for other phases)
    *   Refer to `GUIDE_CREATING_PAGES.md` for creating new pages.

### `src/components/`

This directory houses all reusable React components.

*   **`chimera/`**: Contains components specific to the Project Chimera application's theme, layout, and unique functionalities.
    *   **`Header.tsx`**: The main navigation header.
    *   **`Footer.tsx`**: The application footer.
    *   **`PageShell.tsx`**: The primary layout component that wraps page content, including the `Header`, `MobileMenu`, and `Footer`. Manages mobile menu state.
    *   **`SubPageLayout.tsx`**: A layout component for detailed subpages, providing a "back" button and consistent structure using `PageShell`.
    *   **`sections/`**: Components for each major section displayed on the main landing page (e.g., `HomeSection.tsx`, `OverviewSection.tsx`, `PipelineSection.tsx`). `HomeSection.tsx` includes the `AnimatedRocket.tsx` for visual flair.
    *   **`pipeline-stages/`**: Individual components detailing each stage of the AI-Powered Design Pipeline (e.g., `Stage_3_1_SpecAndArch.tsx`). These are used within `src/app/ai-pipeline/page.tsx` and typically feature an `id` attribute on their main heading for direct in-page navigation. Helper components like `WorkflowCardHelpers.tsx` exist here.
    *   **`KeyStatCard.tsx`**: A reusable card component for displaying key statistics or concepts, often with an icon, a prominent stat/title, and a detailed description. Used in `strategic-imperative/page.tsx`. The `description` prop supports HTML.
    *   **`SectionCard.tsx`**: A general-purpose card for displaying titled content with an optional icon (used in overview, symbiosis sections). The `title` and `description` props support HTML or ReactNode.
    *   **`StarryBackground.tsx`**: Component for rendering the animated starry background effect on the main page.
    *   **`AnimatedRocket.tsx`**: A component that renders a Lucide rocket icon and animates it flying across the screen with turns. Used in `HomeSection.tsx` for visual engagement.
*   **`ui/`**: Contains UI components sourced from ShadCN UI (e.g., `Button.tsx`, `Card.tsx`, `Dialog.tsx`, `Input.tsx`, `Toast.tsx`, `Toaster.tsx`). These are typically imported into other components using the `@/components/ui/...` alias.
*   **`icons/`**:
    *   **`DynamicIcon.tsx`**: A component to dynamically render Lucide icons by name. However, direct import of specific Lucide icons (e.g., `import { Home } from 'lucide-react';`) is generally preferred for tree-shaking and explicit dependency tracking.

### `src/lib/`

Contains utility functions, application-specific constants, type definitions, and other helper modules.

*   **`chimera/`**: Logic and data specific to the Project Chimera application.
    *   **`constants.ts`**: Defines constant data used throughout the application, such as navigation links (`NAV_LINKS`), pipeline tab details (`PIPELINE_TABS`), roadmap phases (`ROADMAP_PHASES`), and example code snippets. Refer to `DATA_STRUCTURES.md` for details on these structures.
    *   **`types.ts`**: Contains TypeScript interface and type definitions for the application's data structures (e.g., `NavLinkItem`, `PipelineTab`). Refer to `DATA_STRUCTURES.md`.
*   **`utils.ts`**: General utility functions, most notably the `cn` function for conditionally merging Tailwind CSS class names.

### `src/hooks/`

Contains custom React hooks used within the application.

*   **`use-mobile.ts`**: A hook to detect if the application is being viewed on a mobile-sized screen, allowing components to adapt their behavior or rendering.
*   **`use-toast.ts`**: Custom hook for managing and displaying toast notifications, used in conjunction with ShadCN's `Toast` components.

### `src/ai/`

This directory is designated for Artificial Intelligence related functionalities, primarily using Genkit.

*   **`genkit.ts`**: Initializes and configures the Genkit instance, including plugins (e.g., `googleAI`) and default model settings.
*   **`dev.ts`**: A TypeScript file used by `genkit start` for the Genkit development server. It typically imports flow definitions to make them available.
*   **`flows/`**: Intended to contain Genkit flow definitions (e.g., specific AI agents or complex prompts).

## `public/` Directory

Stores static assets that are served directly from the root of the application, such as images, favicons, or other files that don't need to be processed by the build system.

This detailed structure should help in navigating and understanding the Project Chimera codebase.
