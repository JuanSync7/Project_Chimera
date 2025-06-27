
# Project Chimera: Text Styling Guidelines

This document outlines conventions for text styling, particularly keyword highlighting and specific text treatments used within the **Project Chimera** presentation application. These guidelines ensure visual consistency and enhance readability of the strategic content.

## 1. Keyword Highlighting Conventions

Emphasizing key terms and concepts is crucial for conveying the strategic importance of Project Chimera's elements.

### 1.1 Primary Conceptual Keywords & Thematic Emphasis

*   **Purpose**: To make important strategic terms, section titles, or specific concepts stand out prominently. This often involves bolding and sometimes specific color treatments (like gradient text).
*   **Styling**:
    *   Typically wrapped in `<strong>` tags within descriptive text. When using Tailwind's `prose` classes, `<strong>` tags are automatically styled to be bold and use a contrasting color (e.g., `text-white` in dark mode).
    *   Headings (`<h1>` to `<h4>`) inherently provide emphasis and are styled using Tailwind CSS classes for size, weight, and color (often white or a themed gradient).
    *   The `.gradient-text` class (defined in `src/app/globals.css`) is used for high-impact titles and specific keywords to give them a distinctive, thematic look.
*   **Examples**:
    *   Main section title: `<h2 class="text-4xl font-bold text-center mb-3 text-white">The Strategic Imperative...</h2>`
    *   Gradient text for emphasis: `Redefining PPA<span class='gradient-text'>P</span>` or `The <span class='gradient-text'>10x Vision</span>`.
    *   Important terms in paragraphs: `mastering <strong>design complexity</strong> through AI` or `a <strong>cumulative, defensible competitive advantage</strong>.`

### 1.2 Emphasis in List Items or Specific Details

*   **Purpose**: To highlight key aspects within list items or specific details in descriptive paragraphs.
*   **Styling**:
    *   Often wrapped in `<strong>` tags.
    *   May use a specific accent color class (e.g., `text-sky-400`, `text-purple-400`) if the `<strong>` tag is nested within an element that has a muted color by default (like `text-slate-400`). This ensures the emphasized text stands out.
*   **Examples**:
    *   In `OverviewSection.tsx`: `<li><strong>Tool Abstraction Layer:</strong> Standardized, version-controlled API...</li>`
    *   In `RisksVisionSection.tsx`: `<li><strong class="text-rose-400 font-semibold">Reliability ("Hallucination"):</strong> Mitigated by...</li>`

## 2. Gradient Text Usage

*   **Purpose**: Reserved for main titles, key strategic terms (like "PPAP", "10x Vision"), or section headers to provide strong visual impact and reinforce the project's theme.
*   **Styling**: Applied using the `.gradient-text` class defined in `src/app/globals.css`. The gradient is `linear-gradient(to right, #fde047 0%, #bef264 35%, #22c55e 100%)`.
*   **Example**:
    *   Main app title: `<span class="gradient-text">Project Chimera</span>`

## 3. Inline Code Mentions & Technical Terms

*   **Purpose**: For displaying short code examples, technical terms, or file names.
*   **Styling**:
    *   The application features a Python code block example in `SymbiosisSection.tsx`. This is styled with a custom "terminal" component that uses a dark background, `font-mono`, and has a title bar.
        ```html
        <div class="bg-black rounded-lg ...">
          ...
          <div class="p-4 text-sm font-mono ...">
            <pre><code class='language-python whitespace-pre-wrap'>${HIGH_LEVEL_PYTHON_CODE_EXAMPLE}</code></pre>
          </div>
        </div>
        ```
    *   The `HIGH_LEVEL_PYTHON_CODE_EXAMPLE` constant is defined in `src/lib/chimera/constants.ts`.
    *   For simple inline mentions of technical terms (e.g., "RAG/CAG architecture", "LangGraph", "PDKs"), these are typically emphasized using `<strong>` tags rather than specific `<code>` tag styling.

## 4. List Item Styling

*   Standard `<ul>` or `<ol>` lists are used.
*   Styling for bullets and spacing is managed by the Tailwind Prose plugin.
*   The `src/app/globals.css` file includes an adjustment for `.prose ul > li::before` to use the primary theme color for list bullets (`background-color: hsl(var(--primary)) !important;`).

By adhering to these guidelines, the Project Chimera presentation maintains a clear, impactful, and visually consistent presentation of its strategic narrative.
