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
*   **Generative AI (Conceptual):** Genkit (initialized in `src/ai/genkit.ts` and `src/ai/dev.ts`)
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

This project might use environment variables for configuration (e.g., API keys for Genkit integration). Create a `.env.local` file in the root of the project by copying `.env.example` (if one exists) or by creating it manually.

Example `.env.local`:
```
# For Genkit/Gemini integration
GEMINI_API_KEY=your_api_key_here
```
Currently, an empty `.env` file is provided. Ensure your `GEMINI_API_KEY` is set in `.env.local` if you intend to use Genkit features that call the Gemini API.

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
    *   **`page.tsx`**: The main landing page, using `PageShell`.
    *   **`layout.tsx`**: The root layout for the application.
    *   **`globals.css`**: Global styles and Tailwind CSS base/components/utilities.
    *   **`[section-name]/page.tsx`**: Individual detailed pages for major sections, using `SubPageLayout`.
*   **`src/components/`**: Reusable UI components.
    *   **`chimera/`**: Components specific to the Project Chimera theme and layout (e.g., `Header.tsx`, `Footer.tsx`, `PageShell.tsx`, `SubPageLayout.tsx`, section components).
    *   **`ui/`**: ShadCN UI components (e.g., `Button.tsx`, `Card.tsx`).
    *   **`icons/`**: Custom icon components (e.g., `DynamicIcon.tsx`).
*   **`src/lib/`**: Utility functions, constants, and type definitions.
    *   **`chimera/constants.ts`**: Contains data like navigation links, pipeline tab details, roadmap phases.
    *   **`chimera/types.ts`**: TypeScript type definitions for the project.
    *   **`utils.ts`**: General utility functions (e.g., `cn` for class merging).
*   **`src/hooks/`**: Custom React hooks (e.g., `use-toast.ts`, `use-mobile.ts`).
*   **`src/ai/`**: Contains Genkit setup and related AI logic.
    *   **`genkit.ts`**: Genkit initialization with Google AI.
    *   **`dev.ts`**: Development server configuration for Genkit.
*   **`public/`**: Static assets (though this project primarily uses `next/image` or inline SVGs).
*   **`tailwind.config.ts`**: Tailwind CSS configuration.
*   **`next.config.ts`**: Next.js configuration.
*   **Documentation Files (Root Directory)**:
    *   `COLOR_SCHEME.md`
    *   `FONT_CHOICES.md`
    *   `SVG_DIAGRAM_GUIDELINES.md`
    *   `GUIDE_CREATING_PAGES.md`

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

## Documentation & Further Exploration

This project includes several key documents and areas for deeper understanding:

*   **`GUIDE_CREATING_PAGES.md`**: Step-by-step instructions on adding new main page sections and subpages.
*   **`COLOR_SCHEME.md`**: Details the color palette, theme variables, and specific color usage.
*   **`FONT_CHOICES.md`**: Outlines the font families used and their configuration.
*   **`SVG_DIAGRAM_GUIDELINES.md`**: Provides best practices for creating and integrating SVG diagrams.

To understand the code:
*   Explore the individual section components in `src/components/chimera/sections/` to see how the content is structured.
*   Review the detailed page components in `src/app/[section-name]/` to understand how navigation and content display for sub-pages are handled using `SubPageLayout.tsx` and `PageShell.tsx`.

This README provides a starting point for understanding and working with the Project Chimera web application.
