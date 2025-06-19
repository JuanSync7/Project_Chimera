
# Bouton App Text Styling Guidelines

This document outlines conventions for text styling, particularly keyword highlighting and inline code, used within the **Bouton** application. These guidelines ensure visual consistency and enhance readability.

## 1. Keyword Highlighting Conventions

A clear strategy for emphasizing key terms improves user understanding.

### 1.1 Primary Conceptual Keywords / UI Labels / Thematic Emphasis

*   **Purpose**: To make important UI labels (e.g., section titles within style controls), primary bullet point titles, or specific terms stand out prominently. This usually involves a thematic color or a distinct visual treatment.
*   **Styling**:
    *   Typically wrapped in `<strong>` tags or styled directly if part of a heading element (e.g., `<h2>`, `<h3>`).
    *   May be assigned a color class from the Bouton theme (e.g., `text-primary`, `text-accent`, or `text-foreground` for general prominence where a theme color isn't suitable).
    *   Often accompanied by `font-semibold` for consistent bolding, although `<strong>` itself provides boldness.
*   **Examples**:
    *   Section title in `StyleControls.tsx`: `<h3 class="text-xl font-semibold text-primary">Button Colors</h3>`
    *   Important option in a list: `<li><strong class="font-semibold text-accent">AI Styling:</strong> Get unique suggestions.</li>`

### 1.2 General Emphasis in Body Text / Descriptions

*   **Purpose**: To provide emphasis to important terms or specific details within descriptive paragraphs or list item details.
*   **Styling**:
    *   Wrapped in simple `<strong>` tags.
    *   No additional color classes are typically applied. The browser's default rendering for `<strong>` (bolder weight) combined with the parent text color (e.g., `text-muted-foreground` or `text-foreground`) provides sufficient visual distinction.
*   **Examples**:
    *   In a paragraph: `<p class="text-muted-foreground">Adjust the <strong>border radius</strong> for rounded corners.</p>`
    *   In a list item description: `<li>Adjust padding: Modifies the <strong>inner space</strong> of the button.</li>`

## 2. Gradient Text (Optional)

*   **Purpose**: Could be used for the main application title "Bouton" or very high-impact, short phrases if desired. Not a primary requirement from the PRD but a common styling technique.
*   **Styling**: Applied using a `.gradient-text` class defined in `src/app/globals.css`.
    *   If implemented, the palette should align with or complement Bouton's theme (e.g., a gradient incorporating Indigo and Blue Violet hues).
*   **Example**:
    *   Main app title: `<h1 class="... font-bold gradient-text ...">Bouton</h1>`

## 3. Inline Code Mentions (If Applicable)

*   **Purpose**: For displaying short code snippets, CSS class examples, or property names, if Bouton ever includes a "code export" feature or detailed technical explanations.
*   **Styling**: Use the `<code>` tag with Tailwind CSS classes for background, padding, and rounded corners.
*   **Example**:
    *   `<code class="bg-muted px-1.5 py-1 rounded text-sm font-mono">border-radius: 8px;</code>`
    *   `Apply the class <code class="bg-muted px-1.5 py-1 rounded text-sm font-mono">.my-custom-button</code>.`

By adhering to these guidelines, the Bouton application will maintain a clear, consistent, and visually hierarchical presentation of textual information, enhancing readability and user comprehension.
