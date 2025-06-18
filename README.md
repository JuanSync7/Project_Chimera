
# Project Chimera: AI Chip Design Strategy Web Application

This is a Next.js web application built to showcase "Project Chimera," a comprehensive five-year strategic blueprint for re-architecting the semiconductor design pipeline around a full-stack, AI-native approach. The application is designed to be a dynamic and engaging presentation of this strategic document.

## Overview

Project Chimera leverages Multi-Agent Systems (MAS) to achieve a generational leap in efficiency, performance, and innovation in semiconductor design. This web application details:

*   **The Strategic Imperative:** Why an AI-first future is critical for leadership in the semiconductor industry.
*   **Architectural Blueprint:** The Multi-Agent System architecture, including the Supervisor-Worker pattern.
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

*   Node.js (version specified in `package.json` engines field or latest LTS)
*   npm (version specified in `package.json` engines field or latest LTS)

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

This project uses environment variables for configuration (e.g., API keys for Genkit integration). Create a `.env.local` file in the root of the project by copying the structure from `.env` (if it provides placeholders) or by creating it manually.

**Required `.env.local` structure:**
```
# For Genkit/Gemini integration
GEMINI_API_KEY=your_google_ai_studio_api_key_here

# Other variables can be added as needed
```
Ensure your `GEMINI_API_KEY` is set in `.env.local` if you intend to use Genkit features that call the Gemini API. An empty `.env` file is provided in the repository; **do not commit `.env.local`**.

### Running the Development Server

To run the application locally in development mode:

```bash
npm run dev
```

This will typically start the development server on `http://localhost:9002` (as configured in `package.json`).

## Project Structure

For a detailed breakdown of the project structure, please refer to **`PROJECT_STRUCTURE_OVERVIEW.md`**.
Key directories include:
*   **`src/app/`**: Next.js App Router pages, layouts, and global styles.
*   **`src/components/`**: Reusable React components (application-specific in `chimera/`, ShadCN UI in `ui/`).
*   **`src/lib/`**: Utility functions, constants, and type definitions.
*   **`src/hooks/`**: Custom React hooks.
*   **`src/ai/`**: Genkit setup and AI-related logic.
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

## Key Documentation Files

This project includes several important documents for understanding its architecture, design choices, and development guidelines:

*   **`PROJECT_STRUCTURE_OVERVIEW.md`**: Detailed explanation of directories and files.
*   **`STYLING_OVERVIEW.md`**: Comprehensive guide to the styling approach (Tailwind, ShadCN, theming).
*   **`GUIDE_CREATING_PAGES.md`**: Instructions on adding new main page sections and subpages.
*   **`DATA_STRUCTURES.md`**: Details on the TypeScript interfaces used for dynamic content.
*   **`INTERACTIVITY_GUIDE.md`**: Explanation of client-side interactive features.
*   **`ARCHITECTURAL_BLUEPRINT_FORMATTING_GUIDE.md`**: Specific formatting for the detailed architectural blueprint page.
*   **`COLOR_SCHEME.md`**: Details the color palette and theme variables.
*   **`FONT_CHOICES.md`**: Outlines the font families used.
*   **`SVG_DIAGRAM_GUIDELINES.md`**: Best practices for creating and integrating SVG diagrams.
*   **`TEXT_STYLING_GUIDELINES.md`**: Conventions for text styling and keyword highlighting.

To understand the code:
*   Explore the individual section components in `src/components/chimera/sections/` to see how the content for the main page is structured.
*   Review the detailed page components in `src/app/[subpage-name]/page.tsx` to understand how subpages are handled.
*   Examine `src/lib/chimera/constants.ts` and `src/lib/chimera/types.ts` for data structures.

This README provides a starting point for understanding and working with the Project Chimera web application.
