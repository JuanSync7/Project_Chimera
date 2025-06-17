# Project Chimera Webpage Font Choices

This document outlines the font families used throughout the Project Chimera webpage to ensure a consistent and readable typographic hierarchy.

## 1. Primary Fonts

The webpage utilizes two primary font families sourced from Google Fonts via `next/font`:

*   **Headlines (h1, h2, h3, h4, h5, h6):**
    *   **Font Family:** Inter
    *   **Implementation:** Imported in `src/app/layout.tsx` and assigned to the CSS variable `--font-inter`. Applied to heading elements in `src/app/globals.css` and through Tailwind's theme configuration (`fontFamily.headline` in `tailwind.config.ts`).

*   **Body Text (Paragraphs, Lists, General Content):**
    *   **Font Family:** JetBrains Mono
    *   **Implementation:** Imported in `src/app/layout.tsx` and assigned to the CSS variable `--font-jetbrains-mono`. Applied as the default body font in `src/app/globals.css` and through Tailwind's theme configuration (`fontFamily.body` in `tailwind.config.ts`).

*   **Code Blocks & Monospaced Text:**
    *   **Font Family:** JetBrains Mono (or falls back to system monospace)
    *   **Implementation:** Generally covered by the body text setting. Specific code block styling might use `font-mono` Tailwind utility, which would also leverage JetBrains Mono as defined in `tailwind.config.ts` (`fontFamily.code`).

## 2. Configuration Overview

*   **`src/app/layout.tsx`**: Imports `Inter` and `JetBrains_Mono` from `next/font/google` and makes them available as CSS variables.
*   **`tailwind.config.ts`**: Defines `fontFamily.headline` (Inter), `fontFamily.body` (JetBrains Mono), and `fontFamily.code` (JetBrains Mono) for use with Tailwind utility classes.
*   **`src/app/globals.css`**: Sets the base `body` font to `var(--font-jetbrains-mono)` and `h1-h6` elements to `var(--font-inter)`.

This setup ensures that the intended fonts are loaded efficiently and applied consistently across the application.
