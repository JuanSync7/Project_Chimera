
# SVG Diagram Creation Guidelines for Project Chimera

This document outlines the guidelines and best practices for creating and integrating SVG diagrams within the Project Chimera webpage. Adhering to these guidelines will ensure consistency, maintainability, and proper theme integration.

## 1. General Principles

*   **Inline SVGs**: Diagrams should be implemented as inline SVGs directly within Next.js/React components (e.g., `src/components/chimera/sections/ArchitectureSection.tsx`).
*   **Scalability**: SVGs should be scalable and responsive. This is primarily achieved by setting `width="100%"` on the `<svg>` element and defining an appropriate `viewBox`.
*   **Theme Integration**: All styling, especially colors, **must** be driven by CSS variables defined in `src/app/globals.css` to ensure diagrams adapt to the application's theme (currently dark mode by default).
*   **Readability**: SVG code should be well-formatted and commented where necessary for clarity.

## 2. SVG Structure

A typical root `<svg>` element should look like this:

```xml
<svg width="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  {/* SVG content goes here */}
</svg>
```

*   `width="100%"`: Makes the SVG take the full width of its container.
*   `viewBox="0 0 <width> <height>"`: Defines the internal coordinate system of the SVG. `<width>` and `<height>` should be chosen to comfortably fit your diagram content. This allows the SVG to scale without distortion.
*   `xmlns="http://www.w3.org/2000/svg"`: The XML namespace for SVG.

## 3. Styling with CSS Variables

All visual styling (colors, fonts, etc.) **must** use CSS variables defined in `src/app/globals.css` under the `.dark` (and potentially `:root` for light mode) theme. Diagram-specific variables are prefixed with `--diagram-`.

### 3.1. Inline `<style>` Block

Define CSS classes within an inline `<style>` tag inside your SVG. These classes will then be applied to your SVG elements.

```xml
<svg width="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <style>
    {`
      .supervisor { fill: hsl(var(--diagram-supervisor-fill)); }
      .worker { fill: hsl(var(--diagram-worker-fill)); }
      .mcp { fill: hsl(var(--diagram-mcp-fill)); stroke: hsl(var(--diagram-mcp-stroke)); stroke-width: 1.5; }
      .mcp-internal { fill: hsl(var(--diagram-mcp-internal-fill)); }
      .text-label { font-family: var(--font-inter, 'Inter', sans-serif); font-size: 10px; fill: hsl(var(--diagram-text-fill)); }
      .text-label-small { font-family: var(--font-inter, 'Inter', sans-serif); font-size: 9px; fill: hsl(var(--diagram-muted-text-fill)); }
      .text-title { font-family: var(--font-inter, 'Inter', sans-serif); font-size: 11px; font-weight: bold; fill: hsl(var(--diagram-title-text-fill)); }
      .arrow { stroke: hsl(var(--diagram-arrow-stroke)); stroke-width: 1.5; marker-end: url(#arrowhead); }
      .dashed-arrow { stroke: hsl(var(--diagram-arrow-stroke)); stroke-width: 1.5; stroke-dasharray: 4 2; marker-end: url(#arrowhead-dashed); }
    `}
  </style>
  {/* ... rest of SVG elements ... */}
</svg>
```

*   **Colors**: Use `fill: hsl(var(--diagram-some-color));` or `stroke: hsl(var(--diagram-some-color));`.
*   **Fonts**: For text elements, use `font-family: var(--font-inter, 'Inter', sans-serif);` to ensure consistency with the webpage's typography. Specify font sizes as needed.
*   **CSS Variables**: The `--diagram-*` variables are defined in `src/app/globals.css`. Refer to `COLOR_SCHEME.md` for their intended use.

### 3.2. Applying Styles

Apply these classes to your SVG elements:

```xml
<circle cx="200" cy="45" r="32" className="supervisor" />
<text x="200" y="44" textAnchor="middle" className="text-title">Supervisor</text>
```

## 4. Common SVG Elements and Their Usage

*   **`<g>` (Group)**: Use to group related elements. Transformations (translate, scale, rotate) applied to a `<g>` element affect all its children.
    ```xml
    <g className="mcp-internal"> {/* This class might not exist, example of applying styles */}
        <rect x="40" y="225" width="100" height="55" rx="5" className="mcp-internal-box-class" /> {/* More specific class for the rect */}
        <text x="90" y="246" textAnchor="middle" className="text-label">Tool Abstraction</text>
    </g>
    ```
*   **`<rect>` (Rectangle)**: For boxes. Attributes: `x`, `y`, `width`, `height`, `rx` (corner radius).
*   **`<circle>` (Circle)**: For circular nodes. Attributes: `cx`, `cy`, `r`.
*   **`<path>` (Path)**: For lines, curves, and complex shapes. The `d` attribute defines the path data.
    *   Straight line: `d="M x1,y1 L x2,y2"`
    *   Quadratic Bezier curve (for simple curves): `d="M x1,y1 Q cx,cy x2,y2"`
*   **`<text>` (Text)**: For labels.
    *   `x`, `y`: Coordinates (behavior depends on `text-anchor`).
    *   `textAnchor="middle"`: Horizontally centers text at the `x` coordinate.
    *   For multi-line text, you can use multiple `<text>` elements with adjusted `y` coordinates or `<tspan>` elements within a single `<text>` element. The current `ArchitectureSection.tsx` example uses multiple `<text>` elements for sub-labels.
*   **`<defs>` and `<marker>`**: For defining reusable elements like arrowheads.
    ```xml
    <defs>
      <marker id="arrowhead" markerWidth="7" markerHeight="5" refX="5" refY="2.5" orient="auto" markerUnits="strokeWidth">
        <polygon points="0 0, 7 2.5, 0 5" fill="hsl(var(--diagram-arrow-stroke))" />
      </marker>
    </defs>
    ```
    Apply markers to paths: `marker-end="url(#arrowhead)"`.

## 5. Coordinate System

The coordinate system is defined by the `viewBox`. `(0,0)` is typically the top-left corner. All `x`, `y`, `cx`, `cy`, and path data coordinates are relative to this `viewBox`.

## 6. Positioning and Layout

*   Manual positioning is standard in SVG. Calculate coordinates carefully.
*   Use `<g>` elements with `transform="translate(x,y)"` to simplify positioning of complex groups.
*   For text within shapes, ensure `text-anchor="middle"` and adjust `y` coordinates for vertical centering. Fine-tune `dy` attribute if precise baseline adjustments are needed. The current architecture diagram adjusts `y` coordinates of multiple `<text>` elements for this.

## 7. Constraints and Best Practices

*   **DO NOT** use hardcoded color values (e.g., `fill="#FFFFFF"`, `stroke="blue"`) directly in SVG attributes or styles. **Always use the `hsl(var(--diagram-...))` CSS variables via CSS classes.**
*   **DO NOT** use inline style attributes on SVG elements (e.g., `<circle style="fill: red;">`). Use CSS classes.
*   Keep the SVG structure clean and logically grouped.
*   Use meaningful class names for CSS styling.
*   Incrementally build and test your diagram. Browser developer tools are invaluable for inspecting and debugging SVGs.
*   Reference the existing diagram in `src/components/chimera/sections/ArchitectureSection.tsx` as a complete example of these guidelines in practice.
*   For accessibility, consider adding a `<title>` and `<desc>` element as the first children of your `<svg>` tag to describe its content, especially if the diagram conveys important information not available elsewhere.
    ```xml
    <svg width="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <title>Architecture Diagram</title>
      <desc>A diagram showing the supervisor-worker architecture and MCP server components.</desc>
      {/* ... rest of SVG ... */}
    </svg>
    ```

## 8. Example: Defining and Using a Styled Element

**In `src/app/globals.css` (within `.dark` or `:root`):**

```css
/* Diagram specific colors for dark theme (Indigo/Violet Theme) */
--diagram-supervisor-fill: var(--primary); /* e.g., 278 100% 65% */
--diagram-text-fill: 0 0% 95%;
/* ... other diagram variables ... */
```

**In your SVG component's `<style>` block:**

```xml
  <style>
    {`
      .supervisor-node { fill: hsl(var(--diagram-supervisor-fill)); }
      .node-title { font-family: var(--font-inter, 'Inter', sans-serif); font-size: 11px; font-weight: bold; fill: hsl(var(--diagram-text-fill)); text-anchor: middle; }
    `}
  </style>
```

**In your SVG body:**

```xml
<g>
  <circle cx="50" cy="50" r="30" className="supervisor-node" />
  <text x="50" y="53" className="node-title">Supervisor</text>
</g>
```

By following these guidelines, you'll create SVG diagrams that are consistent, maintainable, and visually aligned with the Project Chimera web application.
