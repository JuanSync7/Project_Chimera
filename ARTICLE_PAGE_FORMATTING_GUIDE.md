
# Project Chimera: Formatting Guide for Content Pages

This guide outlines formatting conventions for the primary content pages and sections within the **Project Chimera** application. The application itself functions as a detailed, article-style presentation of a strategic blueprint.

## 1. Overall Page Structure (e.g., `/strategic-imperative/page.tsx`)

*   **Layout Component**: All content pages use `<SubPageLayout>`. This component provides:
    *   A consistent header (from `<PageShell>`).
    *   A consistent footer (from `<PageShell>`).
    *   A "Back" button for navigation (e.g., back to an overview page or the main page).
    *   Basic container padding for the content area.
*   **Main Content Wrapper**: Inside `<SubPageLayout>`, the primary content resides within an `<article>` element.
    *   This `<article>` is styled using Tailwind Prose for excellent readability:
        ```tsx
        <article className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6">
          {/* Page content (headings, paragraphs, lists, etc.) goes here */}
        </article>
        ```
    *   Key Prose classes:
        *   `prose-slate dark:prose-invert`: Styles for dark mode.
        *   `lg:prose-xl`: Larger typography on larger screens.
        *   `max-w-none`: Removes the default max-width of Prose for full-width content within the container.
        *   `text-slate-300`: Base text color.
        *   `space-y-6`: Default vertical spacing between block elements.

## 2. Main Page Title (`<h1>`)

*   Each content page should have a clear, prominent `<h1>` title.
*   These titles are typically centered, feature a thematic Lucide icon, and use the `.gradient-text` style.
*   **Structure Example (from `strategic-imperative/page.tsx`):**
    ```tsx
    <div className="flex flex-col items-center text-center mb-12">
      <TrendingUp className="h-16 w-16 text-primary mb-4" /> {/* Thematic Icon */}
      <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-2 md:leading-tight">
        Section 1: The Strategic Imperative
      </h1>
      <p className="text-2xl text-slate-400">Re-architecting for an AI-First Future</p> {/* Optional Subtitle */}
    </div>
    ```
*   **Styling**:
    *   Icon: Lucide icon, `h-16 w-16 text-primary mb-4`. (`text-primary` will use the main theme accent, which is effectively the gradient's start color or a related bright color).
    *   `<h1>`: `text-4xl md:text-5xl font-bold gradient-text !mb-2 md:leading-tight`.
    *   Subtitle `<p>`: `text-2xl text-slate-400`.

## 3. Major Section Titles (`<h2>`)

*   For distinct, top-level sections within a page (e.g., "1.1 Beyond Moore's Law...", "2.1 Foundations...").
*   **Structure Example:**
    ```tsx
    <div className="mt-16 mb-4"> {/* Wrapper for consistent top/bottom spacing */}
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
        1.1 Beyond Moore's Law: AI as the New Driver...
      </h2>
    </div>
    <p>Paragraph content for this section...</p>
    ```
*   **Styling**:
    *   Wrapper `<div>`: `mt-16 mb-4` (or `mt-12`, `mt-24` for varying emphasis).
    *   `<h2>`: `text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2`.
    *   Sometimes, an icon is prepended if the `<h2>` introduces a new conceptual part, as seen in `roadmap-phase-3` sub-components:
        ```tsx
        <div className="mt-24 mb-4">
          <div className="flex items-center">
            <Lightbulb className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
            <h2 className="text-3xl font-semibold text-primary gradient-text !m-0 !border-b-0 !pb-0">
              Part 1: Strategic Clarification...
            </h2>
          </div>
        </div>
        ```

## 4. Sub-Section Titles (`<h3>`)

*   For specific topics or components within an `<h2>` section.
*   Often includes a thematic Lucide icon.
*   **Structure Example (from `mcp-server-details/page.tsx`):**
    ```tsx
    <div className="mt-8 mb-4 flex items-center">
      <Settings2 className="h-7 w-7 text-primary mr-3 flex-shrink-0" /> {/* Thematic Icon */}
      <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
        Core Functionality:
      </h3>
    </div>
    <p>Explanation or list follows...</p>
    ```
*   **Styling**:
    *   Wrapper `<div>`: `mt-8 mb-4 flex items-center`.
    *   Icon: `h-7 w-7 text-primary mr-3 flex-shrink-0` (color class may vary, e.g., `text-purple-400`).
    *   `<h3>`: `text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0` (color class may vary).

## 5. Lists and List Items

*   Standard `<ul>` with `list-disc pl-5 space-y-2` (or `space-y-1`).
*   Keywords within list items are often styled with `<strong class="text-white font-semibold">`.
    ```tsx
    <ul className="list-disc pl-5 space-y-2">
      <li><strong className="text-white font-semibold">Standardized API:</strong> Details about the API...</li>
    </ul>
    ```
*   Some lists use custom icons instead of standard bullets (e.g., `KeyStatCard` or custom lists in `human-ai-symbiosis/page.tsx`).
    ```tsx
    <ul className="list-none pl-0 space-y-6 !my-6">
      <li className="flex items-start p-3 border border-slate-700 rounded-lg bg-slate-800/30">
        <Lightbulb className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
        <div>
          <strong className="text-primary block mb-1">High-Level Design:</strong> Description...
        </div>
      </li>
    </ul>
    ```

## 6. General Paragraphs and Keyword Highlighting

*   General text uses `<p>` tags. Tailwind Prose handles margins and line height.
*   Keywords within paragraphs are highlighted with `<strong>` tags. The default Prose styling usually makes these sufficiently prominent (`font-semibold text-white` effectively).
    ```html
    <p>This strategic application of AI does not seek to replace engineers but to <strong>augment</strong> them.</p>
    ```
*   Specific strategic terms might use `<strong class="gradient-text">Term</strong>` for higher emphasis.

## 7. Custom Components for Content Display

*   **`KeyStatCard.tsx`**: Used in `strategic-imperative/page.tsx` to highlight key statistics or concepts with an icon, a prominent stat, and a description.
*   **`SectionCard.tsx`**: Used in overview sections (e.g., `OverviewSection.tsx` on the main page) for a structured presentation of key points.
*   Workflow/Pipeline Stages: These often use custom card structures (e.g., `PrimaryWorkflowItemCard`, `NestedDetailCard` in the `/ai-pipeline` stages) for clarity.

By following these conventions, the Project Chimera application ensures its strategic content is presented in a clear, readable, and visually engaging manner.
