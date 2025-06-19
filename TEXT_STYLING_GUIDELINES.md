
# Project Chimera Text Styling Guidelines

This document outlines conventions for text styling, particularly keyword highlighting, used throughout the Project Chimera webpage. These guidelines ensure visual consistency and enhance readability.

## 1. Keyword Highlighting Conventions

A two-tiered strategy is employed for emphasizing key terms and concepts:

### 1.1 Primary Conceptual Keywords / Sub-Headings / Thematic Emphasis

*   **Purpose**: To make major concepts, internal section titles (like those within `KeyStatCard` or `SectionCard` titles if HTML is used), primary bullet point titles, or important labels stand out prominently. This usually involves a thematic color or a distinct visual treatment.
*   **Styling**:
    *   Wrapped in `<strong>` tags.
    *   Assigned a color class (e.g., `text-sky-400`, `text-primary`, `text-rose-400`, `text-violet-400`, `text-green-400` for specific highlights like in `PipelineSection` outcomes, or `text-white` for general prominence where a theme color isn't suitable).
    *   Often accompanied by `font-semibold` for consistent bolding, although `<strong>` itself provides boldness.
    *   The specific color class is chosen based on the section's existing visual theme, its main icon/button colors, or for general prominence.
*   **Examples**:
    *   Thematic emphasis in a list item: `<strong class="text-rose-400 font-semibold">Reliability ("Hallucination"):</strong> Mitigated by...`
    *   Prominent label for a sub-section: `<strong class="text-white font-semibold">AI Agent(s) & Role:</strong>`
    *   Title of a key point in a list: `<strong class="text-violet-400 font-semibold">Emergent Intelligence:</strong> MAS designed as a crucible...`
    *   Outcome in pipeline tabs: `<div class="font-semibold text-green-400">...Outcome text...</div>` (Here, the color and font weight might be on a parent `div` or directly on a `<strong>` tag within.)

### 1.2 Specific Examples / Sub-Keywords / General Emphasis in Body Text

*   **Purpose**: To provide emphasis to important terms, examples, or specific details within the main body text (paragraphs, list item descriptions, general content). This makes them bolder and typically brighter than the surrounding non-emphasized text.
*   **Styling**:
    *   Wrapped in simple `<strong>` tags.
    *   No additional color classes are typically applied. The browser's default rendering for `<strong>` (bolder weight) combined with the parent text color (e.g., `text-slate-300` or `text-slate-400` from prose classes) provides sufficient visual distinction, often appearing as a brighter/white bold.
*   **Examples**:
    *   In a paragraph: `This is a <strong>key concept</strong> within the paragraph, which also mentions <strong>another important term</strong>.`
    *   In a list item description: `<li>The system uses <strong>RAG</strong> for data retrieval and <strong>CAG</strong> for context.</li>` (If the list item text is `text-slate-400`, "RAG" and "CAG" will appear as brighter/white bold text).

## 2. Gradient Text

*   **Purpose**: Reserved for high-impact, short phrases, key acronym letters (like "PPAP"), or main page/section titles that need to stand out significantly with a vibrant visual effect.
*   **Styling**: Applied using the `.gradient-text` class defined in `src/app/globals.css`.
    *   Palette: Bright Yellow &rarr; Lime Green &rarr; Green.
*   **Example**:
    *   Main title: `<h1 class="... font-bold gradient-text ...">Section Title</h1>`
    *   Highlighting "P" in PPAP: `Redefining PPA<span class='gradient-text'>P</span>`

## 3. Inline Code Mentions

*   **Purpose**: For displaying short code snippets, command examples, JSON examples, or file names directly within paragraph or list text.
*   **Styling**: Use the `<code>` tag with Tailwind CSS classes for background, padding, and rounded corners.
*   **Example**:
    *   `<code class="language-json bg-slate-700 p-1 rounded text-sm">{'{"key": "value"}'}</code>` (Note the JSX string literal escaping).
    *   `The command <code class="language-bash bg-slate-700 p-1 rounded text-sm">npm run dev</code> starts the server.`

By adhering to these guidelines, the application maintains a clear, consistent, and visually hierarchical presentation of textual information, enhancing readability and user comprehension.
