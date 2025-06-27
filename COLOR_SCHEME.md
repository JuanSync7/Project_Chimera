
# Project Chimera: Color Scheme

This document outlines the color scheme used for the **Project Chimera** presentation application. The styling is managed via CSS variables in `src/app/globals.css` and applied with Tailwind CSS utility classes.

## 1. Base Theme (Dark Mode Default)

The application defaults to a dark theme defined by HSL CSS variables in `globals.css` under the `.dark` selector.

*   **Background (`--background`)**: Deep dark indigo (`278 15% 10%`). Approximates a rich, near-black color for the main page background.
*   **Foreground (`--foreground`)**: Light indigo text (`278 30% 90%`). Default text color, ensuring good contrast on the dark background.
*   **Card Background (`--card`)**: A slightly lighter dark indigo (`278 15% 15%`) used for card components.
*   **Borders (`--border`)**: A subtle border color (`278 15% 25%`) to delineate components without being distracting.
*   **Muted Text (`--muted-foreground`)**: A dimmer text color (`278 30% 65%`) for secondary information.

## 2. Primary Accent: Gradient Text

A distinctive feature is the use of gradient text for main titles and key strategic terms.

*   **Gradient**: Linear gradient from yellow to lime green to a brighter green.
    *   Defined in `src/app/globals.css` by the `.gradient-text` class:
        ```css
        .gradient-text {
            background: linear-gradient(to right, #fde047 0%, #bef264 35%, #22c55e 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        ```
    *   This gradient provides a vibrant, tech-focused highlight that contrasts well with the dark theme.

## 3. Thematic Accent Colors (ShadCN Theme)

The core ShadCN theme is based on an indigo/violet palette, applied to interactive elements, icons, and highlights.

*   **Primary (`--primary`)**: A lighter, strong indigo (`278 100% 65%`). Used for primary buttons, active states, and key icons.
*   **Accent (`--accent`)**: A lighter blue-violet (`271 76% 60%`). Used for hover states on links, menus, and other interactive elements.
*   **Ring (`--ring`)**: The focus ring color, matching the accent (`271 76% 60%`).

## 4. Other UI Element Colors (from original design, maintained for character)

Specific, non-themed colors are used for buttons and icons to provide visual cues.

*   **Sky Blue**:
    *   Used in: Active navigation links (`active-nav` border: `#38bdf8`), some icons (e.g., `text-sky-400` in `OverviewSection`).
*   **Purple/Fuchsia**:
    *   Used in: Icons (e.g., `text-purple-400`, `text-fuchsia-400` in `OverviewSection`), roadmap timeline dots.
*   **Rose (for Risks section)**:
    *   Icons (`text-rose-400`), card hover borders (`hover:border-rose-500/50`).
*   **Violet (for Vision section)**:
    *   Icons (`text-violet-400`), card hover borders (`hover:border-violet-500/50`).
*   **Green (for Home section button, some roadmap links)**:
    *   Home button (`bg-green-600 hover:bg-green-700`).
*   **Yellow/Lime (for "Learn More" / "Explore" buttons)**:
    *   e.g., `text-yellow-400 border-yellow-500`, `text-lime-400 border-lime-500`.

## 5. UI Component Styling

*   **Glassmorphism**: Applied to the old `Header` design. Now superseded by standard component styles.
*   **Section Cards**:
    *   Background: `rgba(17, 24, 39, 0.8);` (approx `bg-gray-900/80`)
    *   Border: `1px solid rgba(55, 65, 81, 0.5);` (approx `border-gray-700/50`)
    *   Hover: `transform: translateY(-5px); border-color: hsl(var(--primary) / 0.6);` (themed effect).
*   **Pipeline Buttons (Desktop)**:
    *   Active: Uses `--primary` background and `--primary-foreground` text.
    *   Inactive: Uses `--secondary` background and `--muted-foreground` text.

## 6. SVG Diagram Colors

*   Inline SVGs (like the architecture diagram) have their colors defined within their `<style>` tags.
*   These styles now reference the CSS variables from `globals.css` (e.g., `.supervisor { fill: hsl(var(--diagram-supervisor-fill)); }`), allowing the diagram to adapt to the application's theme.

The color scheme aims for a modern, tech-focused aesthetic with a dark base and vibrant, gradient-based accents to highlight key information and create visual appeal.
