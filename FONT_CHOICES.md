# Project Chimera Webpage Font Choices

This document outlines the font families used throughout the Project Chimera webpage to ensure a consistent and readable typographic hierarchy.

## 1. Primary Fonts

The webpage primarily utilizes one font family sourced from Google Fonts via `next/font`:

*   **Headlines (h1, h2, h3, h4, h5, h6) & Body Text (Paragraphs, Lists, General Content):**
    *   **Font Family:** Inter
    *   **Implementation:** Imported in `src/app/layout.tsx` and assigned to the CSS variable `--font-inter`. Applied to heading elements and as the default body font in `src/app/globals.css`. Also configured in Tailwind's theme (`fontFamily.headline` and `fontFamily.body` in `tailwind.config.ts`).

*   **Code Blocks & Monospaced Text:**
    *   **Font Family:** System default monospace (e.g., Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace)
    *   **Implementation:** Tailwind's `font-mono` utility class is configured in `tailwind.config.ts` to use a standard monospace font stack.

## 2. Configuration Overview

*   **`src/app/layout.tsx`**: Imports `Inter` from `next/font/google` and makes it available as the CSS variable `--font-inter`.
*   **`tailwind.config.ts`**: Defines `fontFamily.headline` (Inter), `fontFamily.body` (Inter), and `fontFamily.code` (system monospace stack) for use with Tailwind utility classes.
*   **`src/app/globals.css`**: Sets the base `body` font and `h1-h6` elements to `var(--font-inter)`.

This setup ensures that the Inter font is loaded efficiently and applied consistently for general text and headlines, while code snippets use a standard monospace font.
