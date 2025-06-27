
# Project Chimera: SVG & Icon Usage Guidelines

This document outlines guidelines for using SVGs and icons within the **Project Chimera** presentation application.

## 1. Primary Icon Library: Lucide React

The Project Chimera application uses **`lucide-react`** as its primary icon library. This provides a comprehensive set of clean, consistent, and highly customizable SVG icons.

*   **Implementation**: Import icons directly from the `lucide-react` package.
    ```tsx
    import { DraftingCompass, ServerCog } from 'lucide-react';
    ```
*   **Styling**:
    *   **Color**: Icon color is controlled using Tailwind CSS text color utilities (e.g., `className="text-primary"`). Lucide icons are designed to inherit the current text color.
    *   **Size**: Icon size is controlled using Tailwind height and width utilities (e.g., `className="h-16 w-16"`).

## 2. Dynamic Icon Component

For cases where an icon needs to be rendered dynamically by name (e.g., from a data structure), the application uses a custom `DynamicIcon` component.

*   **Location**: `src/components/icons/DynamicIcon.tsx`
*   **Usage**: Pass the `name` of any `lucide-react` icon as a string prop.
    ```tsx
    import DynamicIcon from '@/components/icons/DynamicIcon';
    
    <DynamicIcon name="Home" className="h-5 w-5" />
    ```
*   This is used on the `/site-map` page to render the tree diagram icons.

## 3. Inline SVGs for Complex Diagrams

For complex, unique diagrams like the architectural overview, inline SVGs are used directly within React components.

*   **Example Location**: `src/components/chimera/sections/ArchitectureSection.tsx`
*   **Implementation**: The SVG is written as JSX within a React component.
    ```tsx
    const OriginalArchitectureDiagram: React.FC = () => (
      <svg width="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <style>
          {/* ... styles ... */}
        </style>
        {/* ... SVG elements ... */}
      </svg>
    );
    ```
*   **Styling**:
    *   **Themed via CSS Variables**: The diagram's internal `<style>` tag references the HSL CSS variables defined in `src/app/globals.css`. This allows the diagram to adapt to the application's theme (e.g., light/dark mode).
        ```css
        .supervisor { fill: hsl(var(--diagram-supervisor-fill)); }
        .worker { fill: hsl(var(--diagram-worker-fill)); }
        ```
    *   **Scalability**: The `viewBox` attribute ensures the SVG scales correctly within its container. `width="100%"` allows it to be responsive.

## 4. General SVG Best Practices

*   **Accessibility**:
    *   For purely decorative SVGs, ensure they don't disrupt screen readers (e.g., by adding `aria-hidden="true"`).
    *   For meaningful icons used as buttons without visible text, provide an accessible name using `aria-label` on the parent button or by including a `<span className="sr-only">` element. The `Header`'s sitemap button is a good example.
*   **Consistency**: When creating custom inline SVGs, strive for a consistent visual style (stroke width, line cap/join) that matches the `lucide-react` aesthetic.

By adhering to these guidelines, Project Chimera maintains a consistent and effective use of icons and diagrams.
