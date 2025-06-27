
# Project Chimera: Font Choices

This document outlines the font family used in the **Project Chimera** presentation application to ensure a consistent and readable typographic style.

## 1. Primary Font

The application primarily utilizes one font family sourced from Google Fonts via the `next/font` package for optimization.

*   **Headlines & Body Text (General UI Text, Section Content):**
    *   **Font Family:** Inter
    *   **Attributes:** A versatile sans-serif font known for its excellent readability on screens, suitable for both headlines and body text. It provides a clean, modern, and professional look.
    *   **Implementation:**
        *   Imported and configured in `src/app/layout.tsx` using `next/font/google`:
            ```tsx
            import { Inter } from 'next/font/google';

            const inter = Inter({ 
              subsets: ['latin'], 
              variable: '--font-inter' 
            });
            ```
        *   Applied as a CSS variable (`--font-inter`) to the root `<html>` tag.
        *   The `tailwind.config.ts` file then assigns this variable to the `body` and `headline` font families.
            ```ts
            // In tailwind.config.ts theme.extend.fontFamily
            body: ['var(--font-inter)', 'sans-serif'],
            headline: ['var(--font-inter)', 'sans-serif'],
            ```
    *   **Weights Used**: The application components use various weights through Tailwind CSS font-weight utility classes (e.g., `font-bold`, `font-black`, `font-medium`).

*   **Monospaced Text (for Code Examples):**
    *   **Font Family:** A standard monospace stack is used for displaying code, primarily seen in the Python code example in the "Symbiosis" section.
    *   **Implementation:** Achieved by applying Tailwind's `font-mono` utility class, which is defined in `tailwind.config.ts` to use a system-dependent font stack.
    *   **Styling in Symbiosis section:**
        ```html
        <div class="... font-mono ...">
          <pre><code class='language-python whitespace-pre-wrap'>${HIGH_LEVEL_PYTHON_CODE_EXAMPLE}</code></pre>
        </div>
        ```

## 2. Configuration Overview

*   **`src/app/layout.tsx`**: The central point for font loading and application via a CSS variable.
*   **`tailwind.config.ts`**: Configures Tailwind to use the `--font-inter` variable for its default sans-serif font stack.
*   **`src/app/globals.css`**: Applies the base font styles to the `body` tag.

This setup ensures that the Inter font is loaded efficiently by Next.js and applied consistently for all primary text within the Project Chimera application, contributing to its modern and readable design.
