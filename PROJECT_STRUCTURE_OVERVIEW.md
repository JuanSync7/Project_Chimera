
# Bouton App: Project Structure Overview

This document provides an overview of the **Bouton** application's directory structure and the purpose of key files and folders. This project is built with Next.js (App Router), TypeScript, Tailwind CSS, ShadCN UI, and Genkit for AI features.

## Root Directory

Contains configuration files and the `src` directory.

*   **`.env` / `.env.local`**: Environment variable files. `.env.local` is used for `GEMINI_API_KEY`.
*   **`next.config.ts`**: Configuration for Next.js.
*   **`package.json`**: Project dependencies and scripts.
*   **`tailwind.config.ts`**: Tailwind CSS configuration (theme, colors, fonts).
*   **`tsconfig.json`**: TypeScript configuration.
*   **`components.json`**: ShadCN UI configuration.
*   **Markdown Documentation Files**: (e.g., `README.md`, `COLOR_SCHEME.md`, this file).

## `src/` Directory

Main container for the application's source code.

### `src/app/`

Implements the Next.js App Router.

*   **`layout.tsx`**: The root layout for the application. Sets up HTML structure, global styles (`globals.css`), fonts (Inter).
*   **`page.tsx`**: The main entry point and primary view for the Bouton app (`/`).
    *   Manages the `ButtonState`.
    *   Integrates `BoutonDisplay`, `StyleControls`, and `AiStyler` components.
*   **`globals.css`**: Global CSS styles, Tailwind base directives, ShadCN UI theme variables (light/dark modes), and Bouton-specific theme colors (Primary Indigo, Background Light Indigo, Accent Blue Violet).

### `src/components/`

Reusable React components.

*   **`bouton/`**: Components specific to the Bouton application.
    *   **`BoutonDisplay.tsx`**: Renders the interactive button based on the current `ButtonState`.
    *   **`StyleControls.tsx`**: Provides UI controls (sliders, color pickers, inputs) for manually adjusting `ButtonState`.
    *   **`AiStyler.tsx`**: Interface for users to input prompts and trigger AI-powered button style suggestions.
*   **`ui/`**: ShadCN UI components (e.g., `Button.tsx`, `Slider.tsx`, `Input.tsx`, `Card.tsx`, `Toaster.tsx`). Imported via `@/components/ui/...`.
*   **`icons/`**: May contain custom icon components if needed, though `lucide-react` is preferred.
    *   `DynamicIcon.tsx`: Utility to render Lucide icons by name string (if used).

### `src/lib/`

Utility functions, application-specific constants, and type definitions.

*   **`bouton/`**: Logic and data specific to Bouton.
    *   **`types.ts`**: TypeScript interfaces (e.g., `ButtonState`, `AiStyleSuggestionInput`, `AiStyleSuggestionOutput`). See `DATA_STRUCTURES.md`.
    *   **`constants.ts`**: Defines constant data if any (e.g., default style values, predefined style options).
*   **`utils.ts`**: General utility functions, including `cn` for Tailwind class merging.

### `src/hooks/`

Custom React hooks.

*   **`use-mobile.ts`**: Hook to detect mobile viewport (standard from ShadCN).
*   **`use-toast.ts`**: Hook for managing toast notifications (standard from ShadCN).

### `src/ai/`

Artificial Intelligence related functionalities using Genkit.

*   **`genkit.ts`**: Initializes and configures the global Genkit instance (e.g., Google AI plugin, default model).
*   **`dev.ts`**: Entry point for `genkit start` development server, imports flow definitions.
*   **`flows/`**: Contains Genkit flow definitions.
    *   **`suggest-button-style-flow.ts`**: The Genkit flow that takes user prompts and current style context to suggest new button styles using an LLM. Defines input/output schemas for this operation.

## `public/` Directory

Stores static assets like images or favicons (though favicon generation is not a primary focus for the AI).

This structure provides a clean and scalable organization for the Bouton application, separating concerns for UI, core logic, AI functionalities, and type definitions.
