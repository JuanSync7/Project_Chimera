# Project Chimera Webpage Color Scheme

This document outlines the color scheme used throughout the Project Chimera webpage. The application defaults to **dark mode**.

## 1. Global Theme Colors (CSS Variables in `src/app/globals.css`)

These colors are defined as HSL CSS variables and form the base theme. The application `<html>` tag has the `dark` class applied, so **dark mode variables are active by default.**

*   **Background (`--background`)**: `278 15% 10%` (Dark Indigo)
*   **Foreground (`--foreground` - Default Text)**: `278 30% 90%` (Light Indigo text)
*   **Primary (`--primary` - Theme Accent)**: `278 100% 65%` (Lighter Strong Indigo)
*   **Primary Foreground (`--primary-foreground`)**: `278 100% 10%` (Dark text for on primary)
*   **Accent (`--accent` - Secondary Theme Accent)**: `271 76% 60%` (Lighter Blue Violet)
*   **Accent Foreground (`--accent-foreground`)**: `278 100% 10%` (Dark text for on accent)
*   **Secondary (`--secondary`)**: `278 15% 20%`
*   **Muted (`--muted`)**: `278 15% 23%`
*   **Muted Foreground (`--muted-foreground`)**: `278 30% 65%`
*   **Border (`--border`)**: `278 15% 25%`

Refer to the `.dark { ... }` block in `src/app/globals.css` for all dark mode HSL values. Light mode values are defined under `:root { ... }`.

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

### 3.2 Outlined "Learn More" Buttons (on Main Page & Risks/Vision Section)
    *   **General Style**: `variant="outline" size="lg" className="bg-transparent transition-all duration-300 ease-in-out transform hover:scale-105"`

    *   **Yellow Outline Button**:
        *   Text: `text-yellow-400`
        *   Border: `border-yellow-500`
        *   Hover Background: `hover:bg-yellow-500/20`
        *   Hover Text: `hover:text-yellow-300`
        *   Hover Border: `hover:border-yellow-400`
        *   Hover Shadow: `hover:shadow-lg hover:shadow-yellow-500/40`
        *   **Used for**: "Learn More: The Strategic Imperative &rarr;", "Explore the Architectural Blueprint &rarr;", "Deep Dive into the AI-Powered Pipeline &rarr;", "Understand Human-AI Symbiosis &rarr;"

    *   **Lime Outline Button**:
        *   Text: `text-lime-400`
        *   Border: `border-lime-500`
        *   Hover Background: `hover:bg-lime-500/20`
        *   Hover Text: `hover:text-lime-300`
        *   Hover Border: `hover:border-lime-400`
        *   Hover Shadow: `hover:shadow-lg hover:shadow-lime-500/40`
        *   **Used for**: "View Detailed Implementation Roadmap &rarr;"

    *   **Rose Outline Button (Risks Section)**:
        *   Text: `text-rose-400`
        *   Border: `border-rose-500`
        *   Hover Background: `hover:bg-rose-500/20`
        *   Hover Text: `hover:text-rose-300`
        *   Hover Border: `hover:border-rose-400`
        *   Hover Shadow: `hover:shadow-lg hover:shadow-rose-500/40`
        *   **Used for**: "Analyze Risks & Mitigation &rarr;" (in Risks/Vision Section)

    *   **Violet Outline Button (AGI Horizon Section)**:
        *   Text: `text-violet-400`
        *   Border: `border-violet-500`
        *   Hover Background: `hover:bg-violet-500/20`
        *   Hover Text: `hover:text-violet-300`
        *   Hover Border: `hover:border-violet-400`
        *   Hover Shadow: `hover:shadow-lg hover:shadow-violet-500/40`
        *   **Used for**: "Explore the AGI Horizon &rarr;" (in Risks/Vision Section)


## 4. SVG Diagram Colors (Architectural Blueprint - Dark Mode)

These are defined as HSL CSS variables in `src/app/globals.css` under the `.dark` theme, prefixed with `--diagram-`.

*   **Supervisor Fill (`--diagram-supervisor-fill`)**: `var(--primary)` (Lighter Strong Indigo - `278 100% 65%`)
*   **Worker Fill (`--diagram-worker-fill`)**: `var(--accent)` (Lighter Blue Violet - `271 76% 60%`)
*   **MCP Server Fill (`--diagram-mcp-fill`)**: `var(--secondary)` (Darker Indigo background for MCP - `278 15% 20%`)
*   **MCP Server Stroke (`--diagram-mcp-stroke`)**: `var(--primary)` (Lighter Strong Indigo for MCP stroke - `278 100% 65%`)
*   **MCP Internal Component Fill (`--diagram-mcp-internal-fill`)**: `var(--muted)` (Slightly lighter dark indigo for MCP internal boxes - `278 15% 23%`)
*   **Text Labels (`--diagram-text-fill`)**: `0 0% 95%` (Off-white)
*   **Small Text Labels (`--diagram-muted-text-fill`)**: `0 0% 85%` (Lighter muted text)
*   **Title Text (`--diagram-title-text-fill`)**: `0 0% 100%` (White)
*   **Arrows (`--diagram-arrow-stroke`)**: `var(--accent)` (Lighter Blue Violet for arrows - `271 76% 60%`)

## 5. Tab Buttons (Pipeline Section)

Styled using global CSS classes `.tab-button-active` and `.tab-button-inactive` in `src/app/globals.css`.

*   **Active Tab Background**: `hsl(var(--primary))`
*   **Active Tab Text**: `hsl(var(--primary-foreground))`
*   **Active Tab Shadow**: `shadow-primary/50` (Tailwind utility, `primary` shadow color defined in `tailwind.config.ts`)
*   **Inactive Tab Background**: `hsl(var(--secondary))`
*   **Inactive Tab Text**: `hsl(var(--muted-foreground))`
*   **Inactive Tab Hover Background**: `hsl(var(--muted))`
*   **Inactive Tab Hover Text**: `hsl(var(--foreground))`

This documentation helps ensure consistency and provides a reference for future design and development work.
