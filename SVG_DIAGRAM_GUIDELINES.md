
# Project Chimera: SVG Usage Guidelines

This document outlines guidelines for using SVGs within the **Project Chimera** presentation application. This includes inline SVGs for diagrams and custom icon components.

## 1. Primary SVG Usage: Inline SVGs for Diagrams

Project Chimera features complex diagrams, notably the architectural diagram in `Project_Chimera/components/sections/ArchitectureSection.tsx`.

*   **Implementation**: SVGs are implemented directly as inline JSX within React components.
    ```tsx
    // Example from ArchitectureSection.tsx
    const OriginalArchitectureDiagram: React.FC = () => (
      <svg width="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            .supervisor { fill: #38bdf8; } /* Tailwind sky-500 */
            /* ... other styles ... */
          `}
        </style>
        {/* ... SVG elements ... */}
      </svg>
    );
    ```
*   **Styling**:
    *   **Internal CSS**: Styles for SVG elements (fills, strokes, fonts) are defined within a `<style>` tag inside the SVG. These styles often use specific hex colors or Tailwind color names (commented).
    *   **CSS Classes**: Classes are applied to SVG elements (e.g., `.supervisor`, `.worker`, `.text-label`) and styled by the internal CSS.
    *   **Scalability**: The `viewBox` attribute is crucial for ensuring the SVG scales correctly. `width="100%"` allows it to adapt to its container.
*   **Dynamic Colors (Future Consideration)**: If diagrams need to adapt to a theming system beyond the current inline styles (e.g., light/dark mode variables from a global CSS file), SVG styles would need to reference CSS custom properties. However, the current implementation uses fixed colors.

## 2. Custom Icon Components (Heroicons-like)

Project Chimera uses custom React components for icons, often resembling Heroicons or other simple line icon sets. These are defined in `Project_Chimera/constants.ts` or directly in components.

*   **Implementation**: As functional React components returning SVG JSX.
    ```tsx
    // Example (conceptual, from constants.ts structure)
    const PencilSquareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
      React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
        // ... path elements ...
      )
    );
    ```
*   **Styling**:
    *   **`stroke="currentColor"`**: This is key for allowing Tailwind text color utilities to color the icon.
    *   **Size**: Controlled by Tailwind height and width utilities (e.g., `h-5 w-5`, `h-12 w-12`) applied to the icon component in JSX.
    *   **Props**: The components accept standard SVG props, allowing `className` for styling.

## 3. No External Icon Libraries (e.g., Lucide-React)

The Project Chimera application, as defined by its `Project_Chimera/` directory, does **not** use external icon libraries like `lucide-react`. All icons are custom SVG components or inline SVGs. Therefore, guidelines related to `lucide-react` are not applicable here.

## 4. General SVG Best Practices

*   **Accessibility**:
    *   For decorative SVGs (like the animated rocket, if purely visual), ensure they don't disrupt screen readers (e.g., `role="presentation"`, `aria-hidden="true"` if appropriate).
    *   For meaningful icons used as buttons or conveying information without text, provide accessible names (e.g., `aria-label` on the parent button). The current project uses icons alongside text, reducing this need for standalone icon labels.
*   **Optimization**: For complex diagrams, ensure SVG paths are optimized to reduce file size if this ever became a concern (though less critical for inline SVGs in a React app).
*   **Consistency**: Strive for a consistent visual style (stroke width, line cap/join) across all custom icons and diagram elements.

By adhering to these guidelines, Project Chimera maintains a consistent and effective use of SVGs for its diagrams and iconography.
