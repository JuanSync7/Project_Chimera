
# Project Chimera: Project Structure Overview

This document provides an overview of the **Project Chimera** presentation application's directory structure and the purpose of key files and folders. This project is built with **Next.js (App Router)** and TypeScript, and styled with **Tailwind CSS** and **ShadCN** components.

## Root Directory

Contains the main configuration files for the Next.js project.

*   **`next.config.ts`**: Configuration for the Next.js application.
*   **`package.json`**: Project dependencies and scripts (`dev`, `build`, etc.).
*   **`tailwind.config.ts`**: Tailwind CSS theme and plugin configuration.
*   **`tsconfig.json`**: TypeScript configuration for the project.
*   **`components.json`**: Configuration for the ShadCN UI component library.
*   **Markdown Documentation Files**: Files like this one, `README.md`, `COLOR_SCHEME.md`, etc., providing guidance and overview for the project.

## `src/` Directory

This is the main container for the application's source code, following standard Next.js conventions.

### `src/app/`

The core of the application, using the Next.js App Router paradigm.

*   **`layout.tsx`**: The root layout for the entire application. It defines the main `<html>` and `<body>` tags, loads fonts, and applies global styles.
*   **`globals.css`**: Global stylesheet containing Tailwind CSS directives, theme variables (CSS custom properties) for light and dark modes, and other global styles like `.gradient-text`.
*   **`page.tsx`**: The component for the main home page (`/`). It orchestrates the various "Section" components and manages the scroll-spy navigation logic.
*   **`[route-name]/page.tsx`**: Each sub-page of the application resides in its own folder. For example, `src/app/strategic-imperative/page.tsx` defines the content for the `/strategic-imperative` route.
    *   **`roadmap-details/`**: Contains sub-pages for each phase of the roadmap (`phase-1-crawl`, `phase-2-walk`, `phase-3-run`).
    *   **`architectural-blueprint/`**: Contains sub-pages for architectural deep dives (`mcp-server-details`, `supervisor-worker-details`).
    *   ...and so on for other detailed content pages.
*   **`site-map/page.tsx`**: The page that displays the visual sitemap of the application.

### `src/components/`

Contains all the React components used throughout the application.

*   **`ui/`**: Houses the collection of **ShadCN UI components** (e.g., `Button`, `Card`, `Dialog`). These are reusable, accessible, and styled with Tailwind CSS.
*   **`chimera/`**: Contains custom components specific to the Project Chimera presentation.
    *   **`sections/`**: Components for each major content section on the main page (e.g., `HomeSection.tsx`, `OverviewSection.tsx`, `ArchitectureSection.tsx`).
    *   **`pipeline-stages/`**: Detailed components for each stage of the AI Pipeline, used on the `/ai-pipeline` page.
    *   **`roadmap-phase-3/`**: Components used to structure the detailed content for the Phase 3 roadmap page.
    *   `PageShell.tsx`: A layout component that wraps main page content, providing the Header and Footer and managing mobile menu state.
    *   `SubPageLayout.tsx`: A layout component for detailed sub-pages, including a back button.
    *   `Header.tsx`, `Footer.tsx`, `MobileMenu.tsx`: Core navigation and layout components.
    *   `SectionCard.tsx`, `KeyStatCard.tsx`: Reusable card components for displaying information.
    *   `AnimatedRocket.tsx`, `StarryBackground.tsx`: Visual flair components.
*   **`icons/`**: Contains helper components for icons, like `DynamicIcon.tsx`.

### `src/lib/`

Shared libraries, utility functions, and constants.

*   **`utils.ts`**: Contains the `cn` utility from ShadCN for merging Tailwind classes.
*   **`chimera/`**: Contains files specific to the Project Chimera content.
    *   `constants.ts`: Defines constant data used throughout the application, such as `NAV_LINKS`, `PIPELINE_TABS`, and `ROADMAP_PHASES`.
    *   `types.ts`: Contains TypeScript type definitions and interfaces for the data structures used in `constants.ts`.

### `src/hooks/`

Contains custom React hooks.

*   **`use-mobile.tsx`**: A hook to detect if the user is on a mobile device based on screen width.
*   **`use-toast.ts`**: The hook for managing and displaying toast notifications.

### `src/ai/`

Contains all Generative AI related code, primarily using **Genkit**.

*   **`genkit.ts`**: Initializes and configures the core Genkit instance.
*   **`dev.ts`**: Development server entry point for Genkit flows.
*   **`flows/`**: This directory would contain any Genkit flows defined for the application.

This structure leverages the power of the Next.js App Router for clear, file-based routing and organization, while separating concerns into dedicated directories for components, utilities, and application logic.
