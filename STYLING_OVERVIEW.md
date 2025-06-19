
# Bouton App: Styling Overview

This document provides a comprehensive overview of the styling approach used in the **Bouton** application. It covers the primary technologies, theme configuration, global styles, and guidelines for maintaining a consistent visual identity.

## 1. Core Styling Technologies

*   **Tailwind CSS**: The primary utility-first CSS framework used for styling most components. Customizations and theme extensions are defined in `tailwind.config.ts`.
*   **ShadCN UI**: A collection of beautifully designed, accessible, and reusable React components built on top of Tailwind CSS and Radix UI.
    *   Configuration for ShadCN UI (component paths, base color, CSS variables) is managed in `components.json`.
    *   Components are located in `src/components/ui/`.
*   **CSS Custom Properties (Variables)**: Used extensively for theming, especially for colors, to support light and dark modes. These are primarily defined in `src/app/globals.css`, reflecting Bouton's color scheme.
*   **Lucide React**: The default icon library, providing a wide range of clean and consistent SVG icons for UI elements.

## 2. Theme Configuration (`src/app/globals.css`)

The core of Bouton's theming is managed through CSS custom properties defined in `src/app/globals.css`.

*   **Color Palette (as per Bouton PRD)**:
    *   The application defaults to **dark mode** (`<html class="dark">`). Light mode is also supported.
    *   **Primary (`--primary`)**: Strong Indigo (`#4B0082`). HSL values are adjusted for light/dark modes.
    *   **Background (`--background`)**: Light Indigo (`#E6E0EB`) for light mode, Dark Indigo for dark mode.
    *   **Accent (`--accent`)**: Blue Violet (`#8A2BE2`).
    *   Other theme colors (foreground, card, muted, border, input, ring) are defined using HSL and derived from this core palette.
    *   Specific HSL values are documented in `COLOR_SCHEME.md` and implemented in `globals.css`.
*   **ShadCN UI Theme**: The CSS variables in `globals.css` directly power the ShadCN UI components, ensuring they align with Bouton's theme.

## 3. Tailwind CSS Configuration (`tailwind.config.ts`)

The `tailwind.config.ts` file extends Tailwind's default theme:

*   **Font Families**:
    *   `fontFamily.body` and `fontFamily.headline` are set to use `var(--font-inter)` (Inter font), loaded via `next/font` in `src/app/layout.tsx`.
    *   Refer to `FONT_CHOICES.md` for details.
*   **Colors**: The `colors` section in `theme.extend` maps Tailwind color names (e.g., `primary`, `secondary`, `accent`) to the CSS custom properties defined in `globals.css` (e.g., `hsl(var(--primary))`). This enables standard Tailwind color utilities like `bg-primary`, `text-accent`.
*   **Border Radius**: Consistent border radius values (`lg`, `md`, `sm`) are defined using `var(--radius)`.
*   **Keyframes & Animations**: Custom animations used by ShadCN components (e.g., `accordion-down`) are defined.
*   **Plugins**: `tailwindcss-animate` is used for these animations.

## 4. Global Styles and Custom Classes (`src/app/globals.css`)

Beyond theme variables, `src/app/globals.css` also contains:

*   **Base Styles**: Basic resets and default styles for HTML elements (`@tailwind base`), including setting the base font family to `var(--font-inter)`.
*   **Component Styles**: Default styles for some ShadCN components or general component patterns (`@tailwind components`).
*   **Utility Styles**: Tailwind utility classes (`@tailwind utilities`).
*   **Custom Global Classes (Minimal for Bouton)**:
    *   `.gradient-text`: If used for specific emphasis (though not a core Bouton PRD item, could be added).
    *   Any other global utility styles if absolutely necessary. The preference is to use Tailwind utilities or component-scoped styles.

## 5. Component-Level Styling

*   **ShadCN UI Components**: Components from `src/components/ui/` are pre-styled but can be customized using Tailwind utility classes via the `className` prop.
*   **Custom Components**: Components in `src/components/bouton/` are styled using Tailwind CSS utility classes.
*   **`cn` Utility Function**: Located in `src/lib/utils.ts`, the `cn` function is used for conditionally applying and merging Tailwind CSS class names.

## 6. Text and Keyword Highlighting

*   Refer to `TEXT_STYLING_GUIDELINES.md` for conventions on emphasizing keywords and important text snippets using `<strong>` tags. Colors for emphasis should align with the Bouton theme (e.g., `text-primary`, `text-accent`).

By adhering to these conventions, the Bouton application will maintain a consistent, professional, and themeable visual appearance based on its specified style guidelines.
