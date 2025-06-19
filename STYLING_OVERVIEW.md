
# Project Chimera: Styling Overview

This document provides an overview of the styling approach used in the **Project Chimera** presentation application. It focuses on the primary technologies and conventions for maintaining a consistent visual identity.

## 1. Core Styling Technologies

*   **Tailwind CSS (via CDN)**: The primary utility-first CSS framework used for styling most components and layout. It's included via a CDN link in `Project_Chimera/index.html`.
*   **Inline Styles & Custom CSS**: Specific styles, particularly for the overall theme (dark mode, backgrounds), animations, and unique UI elements (like glassmorphism, gradient text), are defined directly within `<style>` tags in `Project_Chimera/index.html`.
*   **React Component-Scoped Styles**: While Tailwind is dominant, individual React components might encapsulate some specific styling logic if needed, though the preference is utility classes.

## 2. Theme Configuration (`Project_Chimera/index.html`)

The core visual theme of Project Chimera is established through CSS within the `<style>` tags in `Project_Chimera/index.html`.

*   **Color Palette**:
    *   **Dark Mode Default**: The application uses a dark theme as its base.
        *   Body Background: `#0a0a0a` (approx. Tailwind `bg-gray-950`).
        *   Text Color: `#e2e8f0` (approx. Tailwind `text-slate-200`).
    *   **Gradient Text**: A prominent feature, using a linear gradient: `to right, #38bdf8 (sky-500), #818cf8 (indigo-400), #c084fc (fuchsia-400)`. Applied via the `.gradient-text` class.
    *   **Accent Colors**: While not strictly defined as theme variables like in a CSS preprocessor setup, accent colors like sky blue, purple, and fuchsia are used for highlights, icons, and borders (e.g., `active-nav` uses `#38bdf8`).
    *   **Glassmorphism Effect**: Applied to elements like the header and mobile menu using `background: rgba(17, 24, 39, 0.6); backdrop-filter: blur(10px);`.
*   **Typography**:
    *   **Primary Font**: 'Inter' (sans-serif), loaded from Google Fonts. Applied to the `body`.

## 3. Tailwind CSS Usage

*   Tailwind CSS is used extensively for layout, spacing, typography, colors (where applicable), and responsive design within the React components (`.tsx` files in `Project_Chimera/components/`).
*   Utility classes are preferred for styling individual elements.
*   There isn't a `tailwind.config.js` file to customize Tailwind's theme extensively for this project, as it relies on the CDN and inline styles for primary theming.

## 4. Component-Level Styling

*   React components (e.g., `SectionCard.tsx`, `Header.tsx`) are styled using Tailwind CSS utility classes passed via the `className` prop.
*   The `cn` utility function (if used, typically from `clsx` and `tailwind-merge`) would help in conditionally applying and merging Tailwind classes, though this project might apply classes directly given its structure.

## 5. Custom CSS Classes (`Project_Chimera/index.html`)

Beyond Tailwind utilities, `Project_Chimera/index.html` defines several custom classes for specific effects and component states:

*   `.glassmorphism`
*   `.active-nav`, `.nav-link`
*   `.gradient-text`
*   `.section-card` (and its hover effects)
*   `.tab-button-base`, `.tab-button-active`, `.tab-button-inactive` (for the pipeline section)
*   `.roadmap-line`, `.roadmap-dot` (and phase-specific dot colors)
*   Tailwind Prose (`prose`) adjustments for list styling.

## 6. Text and Keyword Highlighting

*   Keywords and important text snippets are often emphasized using `<strong>` tags.
*   The `.gradient-text` class is used for high-impact titles and headings to make them stand out.

This styling approach combines the power of Tailwind's utility classes for component-level styling with targeted custom CSS in `index.html` for the overall theme and unique visual effects, creating the distinctive look and feel of the Project Chimera presentation.
