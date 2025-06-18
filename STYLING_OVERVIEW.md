
# Project Chimera: Styling Overview

This document provides a comprehensive overview of the styling approach used in the Project Chimera application. It covers the primary technologies, theme configuration, global styles, and guidelines for maintaining a consistent visual identity.

## 1. Core Styling Technologies

*   **Tailwind CSS**: The primary utility-first CSS framework used for styling most components. Customizations and theme extensions are defined in `tailwind.config.ts`.
*   **ShadCN UI**: A collection of beautifully designed, accessible, and reusable React components built on top of Tailwind CSS and Radix UI.
    *   Configuration for ShadCN UI (component paths, base color, CSS variables) is managed in `components.json`.
    *   Components are typically located in `src/components/ui/`.
*   **CSS Custom Properties (Variables)**: Used extensively for theming, especially for colors, to support light and dark modes. These are primarily defined in `src/app/globals.css`.
*   **Lucide React**: The default icon library, providing a wide range of clean and consistent SVG icons.

## 2. Theme Configuration (`src/app/globals.css`)

The core of the application's theming (especially colors) is managed through CSS custom properties defined in `src/app/globals.css`.

*   **Color Palette**:
    *   The application defaults to **dark mode** (`<html class="dark">`).
    *   Light and dark mode color variables are defined for background, foreground, primary, secondary, accent, muted, border, input, and ring colors.
    *   Specific HSL values for these variables are documented in `COLOR_SCHEME.md`.
    *   Diagram-specific color variables (e.g., `--diagram-supervisor-fill`) are also defined here, ensuring SVGs can adapt to the theme.
*   **ShadCN UI Theme**: The CSS variables in `globals.css` directly power the ShadCN UI components, allowing them to adapt to the application's theme.

## 3. Tailwind CSS Configuration (`tailwind.config.ts`)

The `tailwind.config.ts` file extends Tailwind's default theme:

*   **Font Families**:
    *   `fontFamily.body` and `fontFamily.headline` are set to use `var(--font-inter)`, which is loaded via `next/font` in `src/app/layout.tsx`.
    *   `fontFamily.code` is set to a standard monospace stack.
    *   Refer to `FONT_CHOICES.md` for more details.
*   **Colors**: The `colors` section in `theme.extend` maps Tailwind color names (e.g., `primary`, `secondary`, `accent`) to the CSS custom properties defined in `globals.css` (e.g., `hsl(var(--primary))`). This allows using standard Tailwind color utilities like `bg-primary`, `text-accent`, etc., which then respect the application's theme.
*   **Box Shadow Colors**: Specific color names are added to `boxShadowColor` to enable themed shadows like `shadow-primary/50`.
*   **Border Radius**: Consistent border radius values (`lg`, `md`, `sm`) are defined using `var(--radius)`.
*   **Font Sizes**: A custom responsive font size scale is defined.
*   **Keyframes & Animations**: Custom animations like `accordion-down` and `accordion-up` (used by ShadCN components) are defined here.
*   **Plugins**: `tailwindcss-animate` is used to enable these animations.

## 4. Global Styles and Custom Classes (`src/app/globals.css`)

Beyond theme variables, `src/app/globals.css` also contains:

*   **Base Styles**: Basic resets and default styles for HTML elements (`@tailwind base`).
*   **Component Styles**: Default styles for some ShadCN components or general component patterns (`@tailwind components`).
*   **Utility Styles**: Tailwind utility classes (`@tailwind utilities`).
*   **Custom Global Classes**:
    *   `.glassmorphism`: For translucent, blurred backgrounds.
    *   `.gradient-text`: For the specific yellow-lime-green gradient text effect. (See `COLOR_SCHEME.md`)
    *   `.active-nav`, `.nav-link`: For header navigation link styling.
    *   `.section-card`: Base styling for section cards (hover effects are also defined here).
    *   `.tab-button-active`, `.tab-button-inactive`: For styling pipeline section tabs. (See `COLOR_SCHEME.md`)
    *   `.roadmap-dot`, `.phase-crawl .roadmap-dot`, etc.: For styling the dots on the roadmap timeline.
    *   Prose Adjustments: Styling for list bullets within content rendered via `dangerouslySetInnerHTML`.
    *   Starry Background Animation (`star-animation`, `.star-item`): For the animated background effect.

## 5. Component-Level Styling

*   **ShadCN UI Components**: These components from `src/components/ui/` are pre-styled but can be further customized using Tailwind utility classes passed via the `className` prop.
*   **Custom Components**: Components in `src/components/chimera/` are styled using Tailwind CSS utility classes.
*   **`cn` Utility Function**: Located in `src/lib/utils.ts`, the `cn` function (a combination of `clsx` and `tailwind-merge`) is used to conditionally apply and merge Tailwind CSS class names, which is especially useful for creating variants or handling dynamic styles within components.

## 6. Text and Keyword Highlighting

*   Refer to `TEXT_STYLING_GUIDELINES.md` for conventions on how to emphasize keywords and important text snippets using `<strong>` tags and specific Tailwind color classes for different levels of emphasis.

## 7. SVG Styling

*   For inline SVGs, styling (especially colors and fonts) should be managed using CSS classes defined within the SVG's `<style>` tag. These classes should reference the CSS custom properties from `globals.css` (e.g., `fill: hsl(var(--diagram-supervisor-fill));`, `font-family: var(--font-inter);`).
*   Refer to `SVG_DIAGRAM_GUIDELINES.md` for detailed best practices.

By adhering to these conventions and utilizing the established theme and utility classes, the Project Chimera application maintains a consistent, professional, and themeable visual appearance.
