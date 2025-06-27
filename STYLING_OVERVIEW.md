
# Project Chimera: Styling Overview

This document provides an overview of the styling approach used in the **Project Chimera** Next.js application. It focuses on the primary technologies and conventions for maintaining a consistent visual identity.

## 1. Core Styling Technologies

*   **Tailwind CSS**: The primary utility-first CSS framework used for all styling. It is configured in `tailwind.config.ts`.
*   **CSS Custom Properties (Variables)**: The core theme is defined using HSL-based CSS variables in `src/app/globals.css`. This allows for easy theming and consistency.
*   **ShadCN UI**: The application uses ShadCN for its base components (Button, Card, etc.). These components are built with Tailwind CSS and Radix UI, and are fully themeable via the CSS variables in `globals.css`.
*   **`clsx` and `tailwind-merge`**: The `cn` utility function in `src/lib/utils.ts` is used to conditionally apply and merge Tailwind classes without conflicts.

## 2. Theme Configuration (`src/app/globals.css`)

The core visual theme of Project Chimera is established through CSS custom properties in `src/app/globals.css`.

*   **Color Palette (Dark Mode)**: The application defaults to a dark theme.
    *   `--background`: `278 15% 10%` (Deep Indigo)
    *   `--foreground`: `278 30% 90%` (Light Indigo text)
    *   `--primary`: `278 100% 65%` (Lighter Strong Indigo for interactive elements)
    *   `--accent`: `271 76% 60%` (Lighter Blue Violet for hover states)
    *   And other variables for cards, borders, inputs, etc.
*   **Light Mode**: A corresponding light mode theme is also defined using the same CSS variable names, allowing for easy theme switching.
*   **Typography**:
    *   **Primary Font**: 'Inter' (sans-serif), loaded via `next/font` in `src/app/layout.tsx` and applied via the `--font-inter` CSS variable.

## 3. Tailwind CSS Configuration (`tailwind.config.ts`)

*   **Theming**: The `tailwind.config.ts` file is configured to use the CSS variables defined in `globals.css`. For example:
    ```ts
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      // ... and so on
    }
    ```
*   **Plugins**: Uses `tailwindcss-animate` for keyframe animations (e.g., for accordion components).

## 4. Component-Level Styling

*   React components are styled using Tailwind CSS utility classes passed via the `className` prop, often with the `cn` utility for conditional classes.
*   Since the app uses ShadCN, most base component styling (buttons, inputs, cards) is handled automatically by the theme. Custom components build upon these base styles.

## 5. Custom Global CSS Classes (`src/app/globals.css`)

Beyond the theme variables, `globals.css` defines several custom utility classes for specific effects:

*   `.gradient-text`: Creates the signature yellow-to-green gradient text effect.
*   `.active-nav`: Styles the active link in the main navigation.
*   `.section-card`: Provides base styles and hover effects for the informational cards used throughout the site.
*   `.roadmap-dot`, `.phase-crawl`, etc.: Styles for the roadmap timeline component.
*   `.star-item`, `star-animation`: Keyframes and classes for the animated starry background.

This styling approach combines the power and flexibility of Tailwind CSS with a robust, variable-based theming system provided by ShadCN, creating the modern and consistent look and feel of the Project Chimera presentation.
