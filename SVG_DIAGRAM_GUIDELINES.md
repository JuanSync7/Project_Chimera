
# SVG Usage Guidelines for Bouton App

This document outlines guidelines for using SVGs, primarily icons from `lucide-react`, within the **Bouton** application. While Bouton might not require complex custom SVG diagrams like "Project Chimera," these principles ensure consistency if custom SVGs are ever needed.

## 1. Primary SVG Source: `lucide-react`

*   **Default Choice**: For all iconography, `lucide-react` is the preferred library. It offers a wide range of clean, consistent, and highly configurable SVG icons.
*   **Import**: Import icons directly from `lucide-react`.
    ```tsx
    import { Sparkles, Palette, Check } from 'lucide-react';
    ```
*   **Usage**:
    ```tsx
    <Sparkles className="h-5 w-5 text-primary" />
    ```
*   **Styling**:
    *   **Size**: Control size using Tailwind's height and width utilities (e.g., `h-5 w-5`, `h-6 w-6`).
    *   **Color**: Control color using Tailwind's text color utilities (e.g., `text-primary`, `text-accent`, `text-foreground`). The icon will inherit this color.
    *   **Stroke Width**: Lucide icons can accept a `strokeWidth` prop if needed, but the default is usually appropriate.

## 2. Custom Inline SVGs (If Necessary)

If a specific icon or simple graphic is not available in `lucide-react` and must be custom-made, follow these guidelines:

*   **Simplicity**: Keep custom SVGs simple and aligned with the geometric style of Lucide icons.
*   **Inline SVGs**: Implement as inline SVGs directly within Next.js/React components.
*   **Scalability**: Ensure SVGs are scalable. Use `viewBox` attribute and avoid fixed `width` and `height` attributes on the `<svg>` element itself if it's meant to scale with Tailwind classes. Instead, apply Tailwind size classes to the parent or the SVG element in the JSX.
    ```tsx
    // Example of a simple custom inline SVG component
    const MyCustomIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor" // currentColor will make it inherit Tailwind text color
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props} // Spread props to allow className for sizing and color
      >
        <path d="M12 2 L2 22 L22 22 Z" /> {/* Example path */}
      </svg>
    );

    // Usage:
    // <MyCustomIcon className="h-6 w-6 text-accent" />
    ```
*   **Theme Integration for Fills/Strokes**:
    *   For colors within the SVG that *cannot* be controlled by `currentColor` (e.g., multi-color SVGs), use CSS classes that reference theme variables from `src/app/globals.css` if possible. This is more complex for simple icons and `currentColor` is preferred.
    *   If CSS variables must be used directly within an inline `<style>` tag in the SVG (less common for icons), ensure they map to Bouton's theme (e.g., `fill: hsl(var(--primary));`).

## 3. Styling with Tailwind CSS

*   Apply Tailwind CSS classes directly to the `<IconComponent />` or custom `<svg>` element for sizing, color, and layout.
    ```tsx
    <Palette className="h-6 w-6 text-primary mr-2" />
    ```

## 4. Accessibility

*   If an icon is purely decorative and provides no additional information, use `aria-hidden="true"`.
*   If an icon conveys meaning and is not accompanied by visible text (e.g., an icon-only button), provide an accessible label using `aria-label` on the interactive element or an associated `<span>` with `sr-only` class.
    ```tsx
    <button aria-label="Suggest Style">
      <Sparkles className="h-5 w-5" />
    </button>
    ```

## 5. Placeholder Images

*   For placeholder images (if ever needed, though less likely for Bouton), use `https://placehold.co/<width>x<height>.png`.
*   Add `data-ai-hint` with one or two keywords for future image search.
    ```html
    <img src="https://placehold.co/300x200.png" alt="Placeholder" data-ai-hint="abstract button" />
    ```

By prioritizing `lucide-react` and following these guidelines for any custom SVGs, Bouton will maintain a visually consistent and accessible interface.
