
# Project Chimera: Text Styling Guidelines

This document outlines conventions for text styling, particularly keyword highlighting and specific text treatments used within the **Project Chimera** presentation application. These guidelines ensure visual consistency and enhance readability of the strategic content.

## 1. Keyword Highlighting Conventions

Emphasizing key terms and concepts is crucial for conveying the strategic importance of Project Chimera's elements.

### 1.1 Primary Conceptual Keywords & Thematic Emphasis

*   **Purpose**: To make important strategic terms, section titles, or specific concepts stand out prominently. This often involves bolding and sometimes specific color treatments (like gradient text).
*   **Styling**:
    *   Typically wrapped in `<strong>` tags within descriptive text.
    *   Headings (`<h1>` to `<h4>`) inherently provide emphasis and are styled using Tailwind CSS classes for size, weight, and color (often white or a themed gradient).
    *   The `.gradient-text` class (defined in `Project_Chimera/index.html`) is used for high-impact titles and specific keywords to give them a distinctive, thematic look.
*   **Examples**:
    *   Main section title: `<h2 class="text-4xl font-bold text-center mb-3 text-white">The Strategic Imperative...</h2>`
    *   Gradient text for emphasis: `Redefining PPA<span class='gradient-text'>P</span>` or `The <span class='gradient-text'>10x Vision</span>`.
    *   Important terms in paragraphs: `mastering <strong>design complexity</strong> through AI` or `a <strong>cumulative, defensible competitive advantage</strong>.`

### 1.2 Emphasis in List Items or Specific Details

*   **Purpose**: To highlight key aspects within list items or specific details in descriptive paragraphs.
*   **Styling**:
    *   Often wrapped in `<strong>` tags.
    *   May use `text-white` or a specific accent color class (e.g., `text-sky-400`, `text-purple-400`) if the `<strong>` tag is nested within an element that has a muted color by default (like `text-slate-400`). This ensures the emphasized text stands out against the muted background text.
*   **Examples**:
    *   In `OverviewSection.tsx`: `<li><strong>Tool Abstraction Layer:</strong> Standardized, version-controlled API...</li>` (where the `<li>` itself might be styled with a base color).
    *   In `RisksVisionSection.tsx`: `<li><strong class="text-rose-400 font-semibold">Reliability ("Hallucination"):</strong> Mitigated by...</li>`

## 2. Gradient Text Usage

*   **Purpose**: Reserved for main titles, key strategic terms (like "PPAP", "10x Vision"), or section headers to provide strong visual impact and reinforce the project's theme.
*   **Styling**: Applied using the `.gradient-text` class defined in `Project_Chimera/index.html`. The gradient is `linear-gradient(to right, #38bdf8, #818cf8, #c084fc)`.
*   **Example**:
    *   Main app title: `<span class="gradient-text">Project Chimera</span>`
    *   Section sub-headings or key phrases.

## 3. Inline Code Mentions & Technical Terms

*   **Purpose**: For displaying short code examples (like Python in `SymbiosisSection.tsx`), technical terms, or file names.
*   **Styling**:
    *   The Project Chimera app features a Python code block example in `SymbiosisSection.tsx`. This is styled with a dark background, specific font, and syntax highlighting achieved through direct HTML structure and classes within the `dangerouslySetInnerHTML` part.
        ```html
        <div class='bg-gray-900 rounded-lg p-4 mt-4 text-sm font-mono text-slate-300 overflow-x-auto'>
          <pre><code class='language-python whitespace-pre-wrap'>${PYTHON_CODE_EXAMPLE}</code></pre>
        </div>
        ```
    *   For simple inline mentions of technical terms (e.g., "RAG/CAG architecture", "LangGraph", "PDKs"), these are typically emphasized using `<strong>` tags rather than specific `<code>` tag styling, as the context is more strategic than instructional code.

## 4. List Item Styling

*   Standard `<ul>` or `<ol>` lists are used.
*   Styling for bullets and spacing is managed by Tailwind CSS utility classes or Tailwind Prose plugin defaults if active.
*   The `Project_Chimera/index.html` includes adjustments for `.prose ul > li::before` to use a themed color for bullets (`#60a5fa` - blue-400).

By adhering to these guidelines, the Project Chimera presentation maintains a clear, impactful, and visually consistent presentation of its strategic narrative.
