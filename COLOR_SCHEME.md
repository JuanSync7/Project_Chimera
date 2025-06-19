
# Project Chimera: Color Scheme

This document outlines the color scheme used for the **Project Chimera** presentation application. The styling is primarily managed via Tailwind CSS utility classes and custom CSS within `Project_Chimera/index.html`.

## 1. Base Theme (Dark Mode)

The application defaults to a dark theme.

*   **Background Color**: Deep dark gray / near black.
    *   `Project_Chimera/index.html`: `body { background-color: #0a0a0a; }` (approximates Tailwind `bg-gray-950`).
*   **Foreground Color (Default Text)**: Light gray / off-white.
    *   `Project_Chimera/index.html`: `body { color: #e2e8f0; }` (approximates Tailwind `text-slate-200`).
*   **Muted Text Color**: Lighter gray for secondary text.
    *   Commonly `text-slate-400` or `text-slate-500` via Tailwind.

## 2. Primary Accent: Gradient Text

A distinctive feature is the use of gradient text for main titles and key strategic terms.

*   **Gradient**: Linear gradient from Sky Blue to Indigo to Fuchsia.
    *   Defined in `Project_Chimera/index.html` by the `.gradient-text` class:
        ```css
        .gradient-text {
            background: linear-gradient(to right, #38bdf8, #818cf8, #c084fc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        ```
    *   Approximate Tailwind equivalents: `sky-500` (#38bdf8), `indigo-400` (#818cf8), `fuchsia-400` (#c084fc).

## 3. Accent Colors for UI Elements & Highlights

Specific colors are used for navigation, icons, borders, and highlights. These are often applied directly using Tailwind utility classes.

*   **Sky Blue**:
    *   Used in: Active navigation links (`active-nav` border: `#38bdf8`), icons (e.g., `text-sky-400`), `SectionCard` hover borders.
*   **Purple/Indigo**:
    *   Used in: Icons (e.g., `text-purple-400`), `SectionCard` hover borders.
*   **Fuchsia/Pink**:
    *   Used in: Icons (e.g., `text-fuchsia-400`), `SectionCard` hover borders.
*   **Rose (for Risks section)**:
    *   Icons (`text-rose-400`), card hover borders (`hover:border-rose-500/50`).
*   **Violet (for Vision section)**:
    *   Icons (`text-violet-400`), card hover borders (`hover:border-violet-500/50`).
*   **Green (for Home section button, some roadmap links)**:
    *   Home button (`bg-green-600 hover:bg-green-700`).
    *   Roadmap link buttons (e.g., `text-green-400 border-green-500`).
*   **Yellow (for "Learn More" / "Explore" buttons)**:
    *   e.g., `text-yellow-400 border-yellow-500`.
*   **Lime (for Roadmap "View Detailed" button)**:
    *   e.g., `text-lime-400 border-lime-500`.

## 4. UI Component Styling

*   **Glassmorphism**: Applied to `Header` and `MobileMenu`.
    *   `background: rgba(17, 24, 39, 0.6);` (approx. `bg-gray-900` with opacity)
    *   `backdrop-filter: blur(10px);`
    *   `border: 1px solid rgba(255, 255, 255, 0.1);`
*   **Section Cards**:
    *   Background: `rgba(17, 24, 39, 0.8);` (approx. `bg-gray-900/80`)
    *   Border: `1px solid rgba(55, 65, 81, 0.5);` (approx. `border-gray-700/50`)
    *   Hover: `transform: translateY(-5px); border-color: rgba(56, 189, 248, 0.3);` (sky accent).
*   **Tab Buttons (Pipeline Section)**:
    *   Active: `background-color: #38bdf8; color: #0a0a0a;`
    *   Inactive: `background-color: rgba(31, 41, 55, 0.5); color: #9ca3af;`
*   **Roadmap Dots**: Phase-specific background colors (sky, indigo/purple, fuchsia).

## 5. SVG Diagram Colors

*   Inline SVGs (like the architecture diagram) have their colors defined within their `<style>` tags.
    *   Example: `.supervisor { fill: #38bdf8; }`, `.worker { fill: #818cf8; }`
    *   These are often direct hex codes matching the theme's accent colors.

The color scheme aims for a modern, tech-focused aesthetic with a dark base and vibrant, gradient-based accents to highlight key information and create visual appeal.
