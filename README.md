
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
*   **Generative AI:** Genkit (initialized in `src/ai/genkit.ts`)
*   **Deployment:** Configured for Firebase App Hosting (see `apphosting.yaml`)

## Getting Started

### Prerequisites

*   Node.js (version specified in `package.json` engines field or latest LTS, e.g., 20.x). Ensure `node -v` shows a compatible version.
*   npm (comes with Node.js, e.g., 10.x). Ensure `npm -v` shows a compatible version.

### Installation

1.  **Clone the repository (if applicable) or ensure you have the project files.**
2.  **Navigate to the project directory:**
    ```bash
    cd path/to/your/project-chimera-app
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

This project uses environment variables for configuration, primarily for Genkit integration with Google AI services.

1.  **Create a `.env.local` file** in the root of the project. You can copy the existing `.env` file (if it serves as a template) or create it manually.
    ```bash
    cp .env .env.local
    ```
    An empty `.env` file is provided in the repository as a placeholder.
2.  **Add your Gemini API key** to `.env.local`:
    ```env
    # .env.local
    # For Genkit/Gemini integration
    GEMINI_API_KEY=your_google_ai_studio_api_key_here

    # Other variables can be added as needed
    ```
    *   You can obtain a Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
    *   **Important:** `.env.local` is gitignored and should **not** be committed to version control. It is intended for local development secrets. For production or shared environments, use your hosting provider's mechanism for setting environment variables.

### Running the Development Server

To run the application locally in development mode:

```bash
npm run dev
```

This will typically start the development server on `http://localhost:9002` (as configured in `package.json`).

If you are using Genkit features that require the Genkit development server (e.g., for flow inspection via the Genkit Developer UI), you might also run in a separate terminal:
```bash
npm run genkit:dev
# or for watching changes
npm run genkit:watch
```
The Genkit Developer UI typically runs on `http://localhost:4000`.

## Key Documentation Files

This project includes several important documents for understanding its architecture, design choices, and development guidelines. All documentation files are located in the root directory for easy access:

*   **`PROJECT_STRUCTURE_OVERVIEW.md`**: Detailed explanation of directories and files.
*   **`STYLING_OVERVIEW.md`**: Comprehensive guide to the styling approach (Tailwind, ShadCN, theming).
*   **`GUIDE_CREATING_PAGES.md`**: Instructions on adding new main page sections and subpages.
*   **`DATA_STRUCTURES.md`**: Details on the TypeScript interfaces used for dynamic content.
*   **`INTERACTIVITY_GUIDE.md`**: Explanation of client-side interactive features.
*   **`ARTICLE_PAGE_FORMATTING_GUIDE.md`**: Specific formatting guidelines for article-style subpages (like Architectural Blueprint, AI Pipeline, etc.).
*   **`MCP_SERVER_DETAILS_FORMATTING_GUIDE.md`**: Specific formatting for the `architectural-blueprint/mcp-server-details/page.tsx`.
*   **`COLOR_SCHEME.md`**: Details the color palette and theme variables.
*   **`FONT_CHOICES.md`**: Outlines the font families used.
*   **`SVG_DIAGRAM_GUIDELINES.md`**: Best practices for creating and integrating SVG diagrams.
*   **`TEXT_STYLING_GUIDELINES.md`**: Conventions for text styling and keyword highlighting.

## Project Structure Insights

For a deep dive into the project's organization, refer to `PROJECT_STRUCTURE_OVERVIEW.md`. Key areas include:
*   **`src/app/`**: Houses Next.js App Router pages (e.g., `page.tsx` for home, `[subpage-name]/page.tsx` for subpages), layouts, and global styles (`globals.css`).
*   **`src/components/`**:
    *   `chimera/`: Contains components specific to Project Chimera's theme and layout (e.g., `PageShell.tsx`, `SubPageLayout.tsx`).
    *   `chimera/sections/`: Components for each major section on the main landing page (e.g., `HomeSection.tsx`, `OverviewSection.tsx`).
    *   `ui/`: ShadCN UI components.
*   **`src/lib/`**:
    *   `chimera/`: Application-specific constants (`constants.ts`) and type definitions (`types.ts`).
    *   `utils.ts`: General utilities like `cn()`.
*   **`src/hooks/`**: Custom React hooks (e.g., `use-mobile.ts`).
*   **`src/ai/`**: Genkit setup (`genkit.ts`) and AI-related logic (flows in `flows/`).
*   **`public/`**: Static assets.

## Building for Production

To create a production build:
```bash
npm run build
```
This will generate an optimized build in the `.next` directory.

## Linting and Type Checking

*   **Lint:** `npm run lint`
*   **Type Check:** `npm run typecheck`

This README provides a starting point for understanding and working with the Project Chimera web application. For more detailed information, please consult the specific documentation files listed above.
