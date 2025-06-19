
# Bouton App Font Choices

This document outlines the font families used in the **Bouton** application to ensure a consistent and readable typographic hierarchy.

## 1. Primary Fonts

The application primarily utilizes one font family sourced from Google Fonts via `next/font`:

*   **Headlines & Body Text (General UI Text, Button Text):**
    *   **Font Family:** Inter
    *   **Attributes:** Sans-serif, with a modern, machined, objective, neutral look (as per PRD).
    *   **Implementation:** Imported in `src/app/layout.tsx` and assigned to the CSS variable `--font-inter`. Applied as the default body font and to relevant heading/text elements in `src/app/globals.css`. Also configured in Tailwind's theme (`fontFamily.headline` and `fontFamily.body` in `tailwind.config.ts`).

*   **Code Blocks & Monospaced Text (If applicable for future debugging/info display):**
    *   **Font Family:** System default monospace (e.g., Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace)
    *   **Implementation:** Tailwind's `font-mono` utility class can be configured in `tailwind.config.ts` if needed.

## 2. Configuration Overview

*   **`src/app/layout.tsx`**: Imports `Inter` from `next/font/google` and makes it available as the CSS variable `--font-inter`.
    ```tsx
    import { Inter } from 'next/font/google';
    const inter = Inter({ 
      subsets: ['latin'], 
      variable: '--font-inter' 
    });

    // In the RootLayout component:
    // <html lang="en" className={`${inter.variable} ...`}>
    //   <body className="font-body ...">...</body>
    // </html>
    ```
*   **`tailwind.config.ts`**: Defines `fontFamily.headline` and `fontFamily.body` to use `var(--font-inter)`.
    ```javascript
    // tailwind.config.ts
    theme: {
      extend: {
        fontFamily: {
          body: ['var(--font-inter)', 'sans-serif'],
          headline: ['var(--font-inter)', 'sans-serif'],
        },
      },
    },
    ```
*   **`src/app/globals.css`**: Sets the base `body` font to `var(--font-inter)`.
    ```css
    /* src/app/globals.css */
    @layer base {
      body {
        @apply font-body; /* This will use Inter via Tailwind config */
      }
      h1, h2, h3, h4, h5, h6 {
        @apply font-headline; /* This will use Inter via Tailwind config */
      }
    }
    ```

This setup ensures that the Inter font is loaded efficiently and applied consistently for all text within the Bouton application, aligning with the specified style guidelines.
