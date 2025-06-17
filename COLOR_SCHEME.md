# Project Chimera Webpage Color Scheme

This document outlines the color scheme used throughout the Project Chimera webpage.

## 1. Global Theme Colors (CSS Variables in `src/app/globals.css`)

These colors are defined as HSL CSS variables and form the base theme.

*   **Background**: `hsl(var(--background))` - Light Indigo (`#E6E0EB` / `278 32% 90%`)
*   **Foreground (Default Text)**: `hsl(var(--foreground))` - Dark contrast for text (`278 100% 10%`)
*   **Primary (Theme Accent)**: `hsl(var(--primary))` - Strong Indigo (`#4B0082` / `278 100% 25%`)
*   **Accent (Secondary Theme Accent)**: `hsl(var(--accent))` - Blue Violet (`#8A2BE2` / `271 76% 53%`)

For dark mode, these variables have different HSL values. Refer to the `.dark { ... }` block in `src/app/globals.css`.

## 2. Gradient Text

*   **Class**: `.gradient-text` (defined in `src/app/globals.css`)
*   **Palette**: Bright Yellow -> Lime Green -> Green
*   **Implementation**: `linear-gradient(to right, #fde047 0%, #bef264 35%, #22c55e 100%)`

## 3. Button Colors

### 3.1 Solid Green Buttons (Primary Call to Action)
    *   **Applied to**: "Explore the Strategic Blueprint", "← Back to Project Overview"
    *   **Background**: `bg-green-600` (Tailwind)
    *   **Text**: `text-white` (Tailwind)
    *   **Hover Background**: `bg-green-700` (Tailwind)
    *   **Shadow (Home page CTA only)**: `shadow-lg hover:shadow-green-600/50`

### 3.2 Outlined "Learn More" Buttons (on Main Page)
    *   **General Style**: `variant="outline" size="lg"`
    *   **Common Classes**: `transition-all duration-300 ease-in-out transform hover:scale-105`

    *   **Green Outline Button**:
        *   Text: `text-green-400`
        *   Border: `border-green-500`
        *   Hover Background: `hover:bg-green-500/20`
        *   Hover Text: `hover:text-green-300`
        *   Hover Border: `hover:border-green-400`
        *   **Used for**: "Learn More: The Strategic Imperative &rarr;", "Explore the Architectural Blueprint &rarr;", "Deep Dive into the AI-Powered Pipeline &rarr;", "Understand Human-AI Symbiosis &rarr;", "Explore the AGI Horizon &rarr;"

    *   **Yellow Outline Button**:
        *   Text: `text-yellow-400`
        *   Border: `border-yellow-500`
        *   Hover Background: `hover:bg-yellow-500/20`
        *   Hover Text: `hover:text-yellow-300`
        *   Hover Border: `hover:border-yellow-400`
        *   **Used for**: "Analyze Risks & Mitigation &rarr;"

    *   **Lime Outline Button**:
        *   Text: `text-lime-400`
        *   Border: `border-lime-500`
        *   Hover Background: `hover:bg-lime-500/20`
        *   Hover Text: `hover:text-lime-300`
        *   Hover Border: `hover:border-lime-400`
        *   **Used for**: "View Detailed Implementation Roadmap &rarr;"


## 4. SVG Diagram Colors (Architectural Blueprint)

These are defined as HSL CSS variables in `src/app/globals.css` under the light and dark themes, prefixed with `--diagram-`.

*   **Supervisor Fill**: `hsl(var(--diagram-supervisor-fill))` (Bright Yellow)
*   **Worker Fill**: `hsl(var(--diagram-worker-fill))` (Lime Green)
*   **MCP Server Fill**: `hsl(var(--diagram-mcp-fill))` (Dark Green)
*   **MCP Server Stroke**: `hsl(var(--diagram-mcp-stroke))` (Lime/Light Green)
*   **MCP Internal Component Fill**: `hsl(var(--diagram-mcp-internal-fill))` (Darker Muted Green)
*   **Text Labels**: `hsl(var(--diagram-text-fill))`
*   **Small Text Labels**: `hsl(var(--diagram-muted-text-fill))`
*   **Title Text**: `hsl(var(--diagram-title-text-fill))`
*   **Arrows**: `hsl(var(--diagram-arrow-stroke))` (Muted Lime/Green)

## 5. Tab Buttons (Pipeline Section)

*   **Active Tab Background**: `bg-sky-500` (`#38bdf8`) - *Note: This is an outlier from the green/yellow/lime theme and might be considered for an update for full consistency.*
*   **Active Tab Text**: `text-gray-950` (or `text-black` depending on Tailwind version/config)
*   **Inactive Tab Background**: `bg-gray-800/50` (using `rgba(31, 41, 55, 0.5)`)
*   **Inactive Tab Text**: `text-gray-400`
*   **Inactive Tab Hover Background**: `bg-gray-700/70` (using `rgba(55, 65, 81, 0.7)`)
*   **Inactive Tab Hover Text**: `text-gray-200`

This documentation helps ensure consistency and provides a reference for future design and development work.
