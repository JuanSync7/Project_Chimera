
# Project Chimera: Font Choices

This document outlines the font family used in the **Project Chimera** presentation application to ensure a consistent and readable typographic style.

## 1. Primary Font

The application primarily utilizes one font family sourced from Google Fonts:

*   **Headlines & Body Text (General UI Text, Section Content):**
    *   **Font Family:** Inter
    *   **Attributes:** A versatile sans-serif font known for its excellent readability on screens, suitable for both headlines and body text. It provides a clean, modern, and professional look.
    *   **Implementation:**
        *   Imported via a `<link>` tag in the `<head>` section of `Project_Chimera/index.html`:
            ```html
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet">
            ```
        *   Applied as the default font for the `body` element in the inline `<style>` section of `Project_Chimera/index.html`:
            ```css
            body {
                font-family: 'Inter', sans-serif;
                /* ... other body styles ... */
            }
            ```
    *   **Weights Used**: The Google Fonts import requests weights 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold), and 900 (black/extra-bold). These are utilized throughout the application via Tailwind CSS font-weight utility classes (e.g., `font-bold`, `font-black`, `font-medium`).

*   **Monospaced Text (for Code Examples):**
    *   **Font Family:** A standard monospace stack is used for displaying code, primarily seen in the Python code example in the "Symbiosis" section.
    *   **Implementation:** Achieved by applying Tailwind's `font-mono` utility class. This class typically resolves to a system-dependent monospace font stack like Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace.
    *   **Styling in `SymbiosisSection.tsx` (conceptual):**
        ```html
        <div class="... font-mono ...">
          <pre><code class='language-python whitespace-pre-wrap'>${PYTHON_CODE_EXAMPLE}</code></pre>
        </div>
        ```

## 2. Configuration Overview

*   **`Project_Chimera/index.html`**: This is the central point for font loading and base application.
    *   Google Fonts `<link>` tags for 'Inter'.
    *   Inline CSS setting `font-family: 'Inter', sans-serif;` on the `body`.
*   **Tailwind CSS**: While Tailwind is used via CDN and not heavily configured with a custom `tailwind.config.js` in this project, its default sans-serif and monospace font stacks are implicitly used. The primary 'Inter' font overrides the default sans-serif stack due to the `body` styling. Font weight utilities (`font-bold`, `font-medium`, etc.) from Tailwind control the display of the various 'Inter' weights.

This setup ensures that the Inter font is loaded efficiently and applied consistently for all primary text within the Project Chimera application, contributing to its modern and readable design.
