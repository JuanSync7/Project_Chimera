# Project Chimera: AI Chip Design Strategy Web Application

This is a Next.js web application built to showcase "Project Chimera," a comprehensive five-year strategic blueprint for re-architecting the semiconductor design pipeline around a full-stack, AI-native approach. The application is designed to be a dynamic and engaging presentation of this strategic document.

## Overview

Project Chimera leverages Multi-Agent Systems (MAS) to achieve a generational leap in efficiency, performance, and innovation in semiconductor design. This web application details:

*   **The Strategic Imperative:** Why an AI-first future is critical for leadership in the semiconductor industry.
*   **Architectural Blueprint:** The Multi-Agent System architecture, including the Supervisor-Worker pattern and the MCP Server.
*   **AI-Powered Pipeline:** How agentic workflows are applied across each stage of chip design.
*   **Human-AI Symbiosis:** The evolving role of engineers and the tools to empower them.
*   **Critical Analysis & AGI Horizon:** Risk mitigation strategies and the long-term vision towards AGI.
*   **Implementation Roadmap:** A phased five-year plan for transformation.

## Tech Stack

*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Components:** ShadCN UI
*   **Icons:** Lucide React
*   **Generative AI (Conceptual):** Genkit (though not yet implemented in detail in this version)
*   **Deployment:** Configured for Firebase App Hosting (see `apphosting.yaml`)

## Getting Started

### Prerequisites

*   Node.js (version specified in `package.json` or latest LTS)
*   npm or yarn

### Installation

1.  **Clone the repository (if applicable) or ensure you have the project files.**
2.  **Navigate to the project directory:**
    ```bash
    cd path/to/your/project-chimera-app
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

### Environment Variables

This project might use environment variables for configuration (e.g., API keys for future Genkit integration). Create a `.env.local` file in the root of the project by copying `.env.example` (if one exists) or by creating it manually.

Example `.env.local`:
```
# For future Genkit/Gemini integration
# GEMINI_API_KEY=your_api_key_here
```

### Running the Development Server

To run the application locally in development mode:

```bash
npm run dev
# or
# yarn dev
```

This will typically start the development server on `http://localhost:9002` (as configured in `package.json`).

## Project Structure

*   **`src/app/`**: Contains all the routes and pages of the application, following the Next.js App Router structure.
    *   **`page.tsx`**: The main landing page.
    *   **`layout.tsx`**: The root layout for the application.
    *   **`globals.css`**: Global styles and Tailwind CSS base/components/utilities.
    *   **`[section-name]/page.tsx`**: Individual detailed pages for each major section of the strategic plan.
*   **`src/components/`**: Reusable UI components.
    *   **`chimera/`**: Components specific to the Project Chimera theme and layout (e.g., `Header.tsx`, `Footer.tsx`, section components).
    *   **`ui/`**: ShadCN UI components (e.g., `Button.tsx`, `Card.tsx`).
    *   **`icons/`**: Custom icon components (e.g., `DynamicIcon.tsx`).
*   **`src/lib/`**: Utility functions, constants, and type definitions.
    *   **`chimera/constants.ts`**: Contains data like navigation links, pipeline tab details, roadmap phases.
    *   **`chimera/types.ts`**: TypeScript type definitions for the project.
    *   **`utils.ts`**: General utility functions (e.g., `cn` for class merging).
*   **`src/hooks/`**: Custom React hooks (e.g., `use-toast.ts`, `use-mobile.ts`).
*   **`src/ai/`**: (Primarily conceptual for this version) Intended for Genkit flows and AI-related logic.
    *   **`genkit.ts`**: Genkit initialization.
*   **`public/`**: Static assets (though this project primarily uses `next/image` or inline SVGs).
*   **`tailwind.config.ts`**: Tailwind CSS configuration.
*   **`next.config.ts`**: Next.js configuration.
*   **`COLOR_SCHEME.md`**: Documentation for the project's color scheme.
*   **`FONT_CHOICES.md`**: Documentation for the project's font choices.
*   **`SVG_DIAGRAM_GUIDELINES.md`**: Guidelines for creating SVGs used in the project.

## Building for Production

To create a production build:

```bash
npm run build
# or
# yarn build
```

This will generate an optimized build in the `.next` directory.

## Linting and Type Checking

*   **Lint:** `npm run lint` or `yarn lint`
*   **Type Check:** `npm run typecheck` or `yarn typecheck`

## Further Exploration

*   Examine the `COLOR_SCHEME.md`, `FONT_CHOICES.md`, and `SVG_DIAGRAM_GUIDELINES.md` files for deeper insights into the design system.
*   Explore the individual section components in `src/components/chimera/sections/` to see how the content is structured.
*   Review the detailed page components in `src/app/[section-name]/` to understand how navigation and content display for sub-pages are handled.

This README provides a starting point for understanding and working with the Project Chimera web application.
