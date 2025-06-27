
# Project Chimera: Formatting Guide for Architectural Content

This guide outlines formatting conventions for presenting architectural details within the **Project Chimera** application, particularly for sections like "Architectural Blueprint" and its sub-pages (e.g., "MCP Server Details", "Supervisor-Worker Details").

## 1. Overall Page/Section Structure (e.g., `src/app/architectural-blueprint/page.tsx`)

*   **Layout Component**: Content is wrapped in `<SubPageLayout>` which provides consistent header, footer, and a "back" button.
*   **Main Content Wrapper**: The primary content within `<SubPageLayout>` is typically an `<article>` element styled with Tailwind Prose classes for readability (e.g., `prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6`).

## 2. Main Page/Section Titles (`<h1>`)

*   The main title of a detailed architectural page (e.g., "Architectural Blueprint", "Deep Dive: The MCP Server").
*   **Structure Example (from `src/app/architectural-blueprint/page.tsx`):**
    ```tsx
    <div className="flex flex-col items-center text-center mb-12">
      <DraftingCompass className="h-16 w-16 text-primary mb-4" /> {/* Thematic Icon */}
      <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-2">
        Section 2: Architectural Blueprint
      </h1>
      <p className="text-2xl text-slate-400">A Multi-Agent System for End-to-End Design</p>
    </div>
    ```
*   **Styling**:
    *   Icon: Lucide icon component, `h-16 w-16 text-primary mb-4`.
    *   `<h1>`: `text-4xl md:text-5xl font-bold gradient-text !mb-2`.
    *   Subtitle `<p>`: `text-2xl text-slate-400`.

## 3. Major Sub-Section Titles (`<h2>`)

*   For distinct parts within an architectural explanation (e.g., "2.1 Foundations...", "2.2 Core Components...").
*   **Structure Example (from `src/app/architectural-blueprint/page.tsx`):**
    ```tsx
    <div className="mt-12 mb-4"> {/* Wrapper for spacing */}
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
        2.1 Foundations of Multi-Agent Systems...
      </h2>
    </div>
    <p>Paragraph content for the section...</p>
    ```
*   **Styling**:
    *   Wrapper `<div>`: `mt-12 mb-4` (or `mt-16`, `mt-24` for significant breaks).
    *   `<h2>`: `text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2`.
    *   Can also use `gradient-text` if it's a top-level title for a new conceptual part as seen in `roadmap-phase-3` sub-components.

## 4. Topic Titles within Sub-Sections (`<h3>`)

*   For specific concepts or components within an `<h2>` section (e.g., "Tool Abstraction Layer", "Knowledge Hub (RAG)").
*   Often accompanied by a thematic Lucide icon.
*   **Structure Example (from `src/app/architectural-blueprint/mcp-server-details/page.tsx`):**
    ```tsx
    <div className="mt-8 mb-4 flex items-center">
      <Settings2 className="h-7 w-7 text-primary mr-3 flex-shrink-0" /> {/* Thematic Icon */}
      <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
        Core Functionality:
      </h3>
    </div>
    {/* Content, often <ul> or <p> */}
    ```
*   **Styling**:
    *   Wrapper `<div>`: `mt-8 mb-4 flex items-center`.
    *   Icon: Lucide icon, `h-7 w-7 text-primary mr-3 flex-shrink-0`. (Color can vary, e.g. `text-yellow-400`, `text-purple-400`).
    *   `<h3>`: `text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0`. (Color class can vary).

## 5. Lists for Features/Details

*   Standard `<ul>` with `list-disc pl-5 space-y-2`.
*   Nested `<ul>` with `list-circle pl-5 space-y-1 mt-1` or `mt-2`.
*   List item text color is typically inherited from the parent `<p>` or `<article>` (e.g., `text-slate-300` or `text-slate-400`).
*   Keywords within list items are often highlighted with `<strong class="text-white font-semibold">`.
    ```tsx
    <ul className="list-disc pl-5 space-y-2">
      <li><strong className="text-white font-semibold">Standardized API:</strong> The MCP Server provides a unified API endpoint...</li>
      <li><strong className="text-white font-semibold">Tool Wrappers/Adapters:</strong> For each integrated tool...
        <ul className="list-circle pl-5 space-y-1 mt-2">
            <li><strong className="text-white font-semibold">Example for an EDA Tool:</strong> ...</li>
        </ul>
      </li>
    </ul>
    ```

## 6. Code Mentions / Technical Terms

*   Short technical terms, tool names, or parameters are often emphasized with `<strong>` and sometimes `<code>` if they represent actual code/commands.
*   `<code class="language-json bg-slate-700 p-1 rounded text-sm">...</code>` for JSON examples.
*   `<code class="language-bash bg-slate-700 p-1 rounded text-sm">...</code>` for shell commands.
*   The main Python code block in the Symbiosis section has more elaborate styling for a terminal-like appearance.

## 7. Diagrams (SVGs)

*   Inline SVGs are used for architectural diagrams.
*   Styling is self-contained within the SVG's `<style>` tag, referencing CSS variables defined in `src/app/globals.css` for theming (e.g., `fill: hsl(var(--diagram-supervisor-fill));`).
*   Diagrams are often wrapped in a `div` for centering and sometimes a `glassmorphism` styled card.
    ```tsx
    <div className="my-8">
        <div className="glassmorphism rounded-xl p-6 border-2 border-slate-700 max-w-2xl mx-auto">
            <OriginalArchitectureDiagram /> {/* Example diagram component */}
        </div>
    </div>
    ```

## 8. Section Cards (`SectionCard.tsx`)

*   The `SectionCard` component is used on overview pages to present distinct points.
*   It handles its own internal styling for icon, title, and description.
*   Titles within `SectionCard` might use `gradient-text`.

By following these conventions, the architectural content within Project Chimera maintains a clear, structured, and visually consistent presentation.
