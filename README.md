
# Bouton: AI Button Styler

Bouton is a Next.js web application designed to help users create and discover visually appealing button styles. It features manual style controls for direct manipulation and an AI-powered suggestion engine to generate unique button designs based on user prompts.

## Core Features

*   **Button Display**: A real-time preview of the button as styles are adjusted.
*   **Manual Style Selection**: Intuitive controls (sliders, color pickers, inputs) to modify properties like color, text, padding, border, shadow, and font.
*   **AI-Powered Styling**: Users can input a text prompt (e.g., "modern and sleek", "playful gaming button") to get AI-generated style suggestions for the button.

## Tech Stack

*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Components:** ShadCN UI
*   **Icons:** Lucide React
*   **Generative AI:** Genkit (for AI style suggestions)
*   **Deployment:** Configured for Firebase App Hosting (see `apphosting.yaml`)

## Getting Started

### Prerequisites

*   Node.js (latest LTS version recommended, e.g., 20.x)
*   npm (comes with Node.js)

### Installation

1.  **Clone the repository (if applicable) or ensure you have the project files.**
2.  **Navigate to the project directory:**
    ```bash
    cd path/to/your/bouton-app
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

The primary environment variable needed is for Genkit to access Google AI services.

1.  **Create a `.env.local` file** in the root of the project. You can copy `.env` if it exists as a template, or create it manually.
    ```bash
    cp .env .env.local
    ```
    (An empty `.env` file is typically provided as a placeholder).
2.  **Add your Gemini API key** to `.env.local`:
    ```env
    # .env.local
    # For Genkit/Gemini integration
    GEMINI_API_KEY=your_google_ai_studio_api_key_here
    ```
    *   Obtain a Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
    *   **Important:** `.env.local` is gitignored and should not be committed. Use your hosting provider's environment variable settings for production.

### Running the Development Server

To run the application locally:

```bash
npm run dev
```
This will typically start the Next.js development server on `http://localhost:9002`.

To run the Genkit development server (for inspecting flows via the Genkit Developer UI, usually on `http://localhost:4000`):
```bash
npm run genkit:dev
# or for watching changes
npm run genkit:watch
```

## Key Documentation Files

Located in the root directory:

*   **`PROJECT_STRUCTURE_OVERVIEW.md`**: Details on directories and files.
*   **`STYLING_OVERVIEW.md`**: Guide to styling (Tailwind, ShadCN, theming).
*   **`GUIDE_CREATING_PAGES.md`**: Instructions for structuring components.
*   **`DATA_STRUCTURES.md`**: TypeScript interfaces for button state and AI flows.
*   **`INTERACTIVITY_GUIDE.md`**: Explanation of client-side interactive features.
*   **`COLOR_SCHEME.md`**: Details the Bouton color palette.
*   **`FONT_CHOICES.md`**: Outlines font usage.

## Project Structure

*   **`src/app/`**: Main application page (`page.tsx`), layout (`layout.tsx`), global styles (`globals.css`).
*   **`src/components/bouton/`**: Bouton-specific React components (`BoutonDisplay.tsx`, `StyleControls.tsx`, `AiStyler.tsx`).
*   **`src/components/ui/`**: ShadCN UI components.
*   **`src/lib/bouton/`**: Bouton-specific types and constants.
*   **`src/ai/`**: Genkit setup (`genkit.ts`) and AI flows (e.g., `suggest-button-style-flow.ts`).
*   **`public/`**: Static assets.

This README provides a starting point for understanding and working with the Bouton application.
