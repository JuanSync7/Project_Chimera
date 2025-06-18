# Project Chimera Text Styling Guidelines

This document outlines conventions for text styling, particularly keyword highlighting, used throughout the Project Chimera webpage.

## 1. Keyword Highlighting Conventions

To ensure consistency in emphasizing key terms and concepts throughout the application, the following two-tiered strategy is used:

### 1.1 Primary Conceptual Keywords / Sub-Headings / Thematic Emphasis
*   **Purpose**: To make major concepts, internal section titles, primary bullet points (e.g., titles of list items), or important labels stand out prominently with a thematic or distinct color.
*   **Styling**: Wrapped in `<strong>` tags and assigned a color class (e.g., `text-sky-400`, `text-primary`, `text-rose-400`, `text-violet-400`, or `text-white` for specific labels where a theme color is not suitable but distinct prominence is needed) along with `font-semibold`. The specific color class is chosen based on the section's existing visual theme, its main icon/button colors, or for general prominence.
    *   Example (Thematic): `<strong class="text-rose-400 font-semibold">Reliability ("Hallucination"):</strong>` (Matches section theme)
    *   Example (Prominent Label): `<strong class="text-white font-semibold">AI Agent(s) & Role:</strong>` (Used when a specific theme color isn't applied but the label is a key heading)
    *   Example (Concept Title): `<strong class="text-violet-400 font-semibold">Emergent Intelligence:</strong>` (Titles a main bullet point in its section)

### 1.2 Specific Examples / Sub-Keywords / General Emphasis in Body Text
*   **Purpose**: To provide emphasis to important terms, examples, or specific details within the body text (paragraphs, lists, general content), making them bolder and typically brighter than the surrounding non-emphasized text.
*   **Styling**: Wrapped in simple `<strong>` tags. The browser's default rendering for `<strong>` (bolder weight) combined with the parent text color (e.g., `text-slate-300` or `text-slate-400`) typically provides sufficient visual distinction, often appearing as a brighter/white bold.
    *   Example in paragraph: "This is a <strong>key concept</strong> within the paragraph, which also mentions <strong>another important term</strong>."
    *   Example in list item: `<li>The system uses <strong>RAG</strong> for data retrieval and <strong>CAG</strong> for context.</li>` (If list item text is `text-slate-400`, "RAG" and "CAG" will appear brighter/white bold).

This structured approach to highlighting helps guide the reader's attention and improves the overall readability and visual hierarchy of the content.
