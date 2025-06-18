
# Formatting Guide for Article-Style Subpages

This guide outlines the specific formatting conventions used for article-style subpages (e.g., "Strategic Imperative," "AI-Powered Design Pipeline," "Architectural Blueprint," etc.) in the Project Chimera application. Adhering to these guidelines ensures consistency in structure and style.

## 1. Overall Page Structure

*   **Layout Component**: The page content is wrapped with the `<SubPageLayout>` component.
    ```tsx
    import SubPageLayout from '@/components/chimera/SubPageLayout';

    export default function ExampleArticlePage() {
      return (
        <SubPageLayout>
          {/* Page content goes here */}
        </SubPageLayout>
      );
    }
    ```
*   **Main Content Wrapper**: The primary content within `<SubPageLayout>` is an `<article>` element.
    *   Apply Tailwind Prose classes for readability: `prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6`.
    ```tsx
    <article className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6">
      {/* Sections and text content */}
    </article>
    ```

## 2. Main Page Title (`<h1>`)

*   The main title of the page (e.g., "Section X: Example Page Title") is an `<h1>` element.
*   It is centered and includes a thematic Lucide icon relevant to the page's content.
*   **Structure**:
    ```tsx
    import { ExampleIcon } from 'lucide-react'; // Choose a thematic icon

    // ... inside <article>
    <div className="flex flex-col items-center text-center mb-12">
      <ExampleIcon className="h-16 w-16 text-primary mb-4" /> {/* Thematic Icon */}
      <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-2">
        Section X: Example Page Title {/* Title Text */}
      </h1>
      {/* Optional: Subtitle paragraph */}
      <p className="text-2xl text-slate-400">A brief and engaging subtitle for the page.</p>
    </div>
    ```
*   **Styling**:
    *   Icon: `h-16 w-16 text-primary mb-4`
    *   `<h1>`: `text-4xl md:text-5xl font-bold gradient-text !mb-2`
    *   Subtitle `<p>`: `text-2xl text-slate-400`

## 3. Main Section Titles (`<h2>`)

*   Each major numbered section (e.g., X.1, X.2, X.3) or significant topic starts with an `<h2>` element.
*   These titles generally do **not** have preceding icons, unless a specific thematic icon strongly enhances a particular section (e.g., "Potential Challenges" in the MCP Server details page).

### Standard `<h2>` Section Structure:
*   **Structure**:
    ```tsx
    // ... inside <article>
    <div className="mt-12 mb-4"> {/* Wrapper for consistent spacing */}
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
        X.1 Example Main Section Title
      </h2>
    </div>
    <p>Paragraph content for the section...</p>
    {/* More content like sub-headings (h3), lists, etc. */}
    ```
*   **Styling**:
    *   Wrapper `<div>`: `mt-12 mb-4` (adjust top margin for the very first `<h2>` if needed).
    *   `<h2>`: `text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2`

### `<h2>` Section Encapsulated in a Card:
*   For certain pages like the "AI-Powered Design Pipeline," individual `<h2>` sections (e.g., each pipeline stage) can be visually grouped by wrapping the entire section's content (including the `<h2>` title and all its subsequent paragraphs, `<h3>`s, lists, etc.) within a `div` styled as a card.
*   **Structure**:
    ```tsx
    // ... inside <article>
    <div className="section-card p-6 rounded-2xl mt-12"> {/* Card wrapper for the entire H2 section */}
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6"> {/* Adjusted margin for inside card */}
        X.2 Another Main Section Title (Pipeline Stage Example)
      </h2>
      {/* "Challenge" h3 block */}
      <div className="mt-6 mb-4 flex items-center"> {/* Note: mt-6 instead of mt-8 for first h3 inside card */}
        {/* Icon and h3 title for "Challenge" */}
      </div>
      <p>Challenge description...</p>
      
      {/* "Agentic Workflow" h3 block */}
      <div className="mt-8 mb-4 flex items-center">
        {/* Icon and h3 title for "Agentic Workflow" */}
      </div>
      <p>Workflow intro...</p>
      {/* Enhanced list with icons */}
      <ul className="list-none pl-0 space-y-6 !my-6">
        {/* List items with icons, see section 5.1 */}
      </ul>
      {/* ... potentially more content for this H2 section ... */}
    </div> {/* End of card wrapper for H2 section */}
    ```
*   **Styling for Card-Wrapped `<h2>` Section**:
    *   Outer `div`: `section-card p-6 rounded-2xl mt-12` (The `section-card` class provides base background, border, and hover effects from `globals.css`).
    *   `<h2>` within card: `text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 mb-6` (Note the `mb-6` for spacing below the title within the card).
    *   First `<h3>` wrapper div (e.g., for "Challenge:") within the card: `mt-6 mb-4 flex items-center` (Top margin adjusted from `mt-8` to `mt-6` due to card padding).

## 4. Sub-Section Category Titles (`<h3>`)

*   Within each main section (e.g., under "X.2 Example Main Section"), categories or key sub-topics can be introduced with `<h3>` elements.
*   Each `<h3>` is often preceded by a thematic Lucide icon relevant to the sub-topic.
*   **Structure**:
    ```tsx
    import { AnotherExampleIcon } from 'lucide-react'; // Choose a thematic icon

    // ... inside <article>, after an <h2> section (or inside its card wrapper)
    <div className="mt-8 mb-4 flex items-center"> {/* Wrapper for icon and title. Use mt-6 if it's the first h3 in a card-wrapped h2 section */}
      <AnotherExampleIcon className="h-7 w-7 text-primary mr-3 flex-shrink-0" /> {/* Thematic Icon */}
      <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
        Example Category Title: {/* Title Text */}
      </h3>
    </div>
    <p>Introductory paragraph for this category...</p>
    {/* Standard list or enhanced list (see section 5 & 5.1) */}
    <ul className="list-disc pl-5 space-y-2">
      {/* List items for specific points/components */}
    </ul>
    ```
*   **Styling**:
    *   Wrapper `<div>`: `mt-8 mb-4 flex items-center` (or `mt-6` if it's the first `<h3>` within a card-wrapped `<h2>` section).
    *   Icon: `h-7 w-7 text-primary mr-3 flex-shrink-0` (or other theme/accent color if appropriate for specific emphasis, e.g., `text-yellow-400` for "Challenge:" `<h3>` headings).
    *   `<h3>`: `text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0` (or other theme/accent color).

## 5. Lists and List Items

### 5.1 Standard Unordered List Items
*   Specific items listed under an `<h3>` category are typically presented as list items within a `<ul>`.
*   The name/title of the item is emphasized using `<strong className="text-white font-semibold">`.
*   **Structure**:
    ```tsx
    // ... inside <article>, following an <h3> category and its intro paragraph
    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong className="text-white font-semibold">Key Item Title:</strong> Description of the key item...
      </li>
      <li>
        <strong className="text-white font-semibold">Another Key Item:</strong> Further details...
      </li>
    </ul>
    ```
*   **Styling**:
    *   `<ul>`: `list-disc pl-5 space-y-2`
    *   `<strong>` for item name: `text-white font-semibold`

### 5.2 Enhanced List Item Styling with Icons (Primary List Items)
*   For more visually distinct lists, particularly when detailing features, process steps, or components under an `<h3>` category or within a card-wrapped `<h2>` section (like Agentic Workflows in the AI Pipeline page).
*   Each primary list item is enhanced with a leading Lucide icon.
*   **Structure**:
    ```tsx
    import { RelevantIcon } from 'lucide-react';

    // ... inside <article>, typically under an <h3> or within a card-wrapped <h2> section
    <ul className="list-none pl-0 space-y-6 !my-6"> {/* Note: list-none, specific margins, and y-spacing */}
      <li className="flex items-start p-3 border border-slate-700 rounded-lg bg-slate-800/30 w-full"> {/* Optional card styling for the LI itself */}
        <RelevantIcon className="h-6 w-6 text-sky-400 mr-3 mt-1 flex-shrink-0" /> {/* Icon color often matches H3 title color */}
        <div>
          <strong className="text-sky-300 block mb-1">Key Point Title:</strong> Further description...
          {/* Can include more paragraphs or even nested <ul> (see 5.2.1) here if needed */}
        </div>
      </li>
      {/* Additional list items with the same structure */}
    </ul>
    ```
*   **Styling**:
    *   `<ul>`: `list-none pl-0 space-y-6 !my-6`
    *   `<li>`: `flex items-start` (Optionally, can be styled as a card: `p-3 border border-slate-700 rounded-lg bg-slate-800/30 w-full`).
    *   Icon: `h-6 w-6 text-sky-400 mr-3 mt-1 flex-shrink-0` (Adjust icon size, color, and margins. `text-sky-400` is an example).
    *   `<div>` (wrapper for text): Allows text content (including optional `<strong>` titles) to flow naturally.
    *   `<strong>` (optional title within list item): `text-sky-300 block mb-1` (Color often matches icon/H3 color).

### 5.2.1 Card-Styled Nested List Items (Sub-Sub-Points)
*   When a primary list item (styled as per 5.2) itself contains a nested list of points, these sub-sub-points can also be styled as individual mini-cards for enhanced visual separation and detail emphasis.
*   **Purpose**: To clearly delineate and highlight individual components or steps within a larger process detailed in a primary list item.
*   **Structure**:
    ```tsx
    // ... (inside a primary list item's div, after its main description)
    <ul className="list-none pl-0 space-y-2 mt-2"> {/* Nested UL for sub-sub-points */}
      <li className="flex items-start p-3 border border-slate-700 rounded-lg bg-slate-800/30"> {/* No w-full needed here usually, takes parent width */}
        <SubPointIcon className="h-5 w-5 text-sky-400 mr-3 mt-0.5 flex-shrink-0" /> {/* Slightly smaller icon */}
        <div>
          <strong className="text-sky-300 block mb-1">Nested Point Title (Optional):</strong> Description of nested point...
        </div>
      </li>
      {/* More nested points */}
    </ul>
    ```
*   **Styling**:
    *   Nested `<ul>`: `list-none pl-0 space-y-2 mt-2`
    *   Each nested `<li>`: `flex items-start p-3 border border-slate-700 rounded-lg bg-slate-800/30`
    *   Icon for nested `<li>`: `h-5 w-5 text-sky-400 mr-3 mt-0.5 flex-shrink-0` (Slightly smaller, adjusted margin).
    *   `<div>` (text wrapper) and optional `<strong>` can follow styles similar to the primary list item, or be simplified.

## 6. General Paragraphs and Keyword Highlighting

*   General descriptive text is placed within `<p>` tags.
*   Important keywords or phrases within these paragraphs are highlighted using simple `<strong>` tags without additional color classes. The default browser bolding and parent text color (e.g., `text-slate-300`) provide sufficient emphasis.
    ```html
    <p>This is a paragraph with <strong>important keywords</strong> that need emphasis. The system uses <strong>RAG</strong> and <strong>CAG</strong>.</p>
    ```
*   Inline code mentions (e.g., command snippets, JSON examples) should use `<code class="language-json bg-slate-700 p-1 rounded text-sm">` or similar. Ensure content is properly escaped if it's a JSX string literal: `{'{"key": "value"}'}`.

## 7. Lucide Icons

*   All icons are sourced from the `lucide-react` library.
*   Import specific icons as needed at the top of the file.
    ```tsx
    import {
      ExampleIcon,
      AnotherExampleIcon,
      // ... other imported icons relevant to the page
    } from 'lucide-react';
    ```

By following these guidelines, article-style subpages will maintain a consistent and readable structure, making it easier for users to navigate and understand the detailed content.

