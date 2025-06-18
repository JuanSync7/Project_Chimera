
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
*   **Structure**:
    ```tsx
    // ... inside <article>
    <div className="mt-12 mb-4"> {/* Wrapper for consistent spacing */}
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
        X.1 Example Main Section Title
      </h2>
    </div>
    <p>Paragraph content for the section...</p>
    ```
*   **Styling**:
    *   Wrapper `<div>`: `mt-12 mb-4` (adjust top margin for the very first `<h2>` if needed).
    *   `<h2>`: `text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2`

## 4. Sub-Section Category Titles (`<h3>`)

*   Within each main section (e.g., under "X.2 Example Main Section"), categories or key sub-topics can be introduced with `<h3>` elements.
*   Each `<h3>` is often preceded by a thematic Lucide icon relevant to the sub-topic.
*   **Structure**:
    ```tsx
    import { AnotherExampleIcon } from 'lucide-react'; // Choose a thematic icon

    // ... inside <article>, after an <h2> section
    <div className="mt-8 mb-4 flex items-center"> {/* Wrapper for icon and title */}
      <AnotherExampleIcon className="h-7 w-7 text-primary mr-3 flex-shrink-0" /> {/* Thematic Icon */}
      <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
        Example Category Title: {/* Title Text */}
      </h3>
    </div>
    <p>Introductory paragraph for this category...</p>
    <ul className="list-disc pl-5 space-y-2">
      {/* List items for specific points/components */}
    </ul>
    ```
*   **Styling**:
    *   Wrapper `<div>`: `mt-8 mb-4 flex items-center`
    *   Icon: `h-7 w-7 text-primary mr-3 flex-shrink-0` (or other theme/accent color if appropriate for specific emphasis, e.g., `text-yellow-400` for "Challenge:" `<h3>` headings).
    *   `<h3>`: `text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0` (or other theme/accent color).

## 5. Agent/Component/Item List Items (within `<h3>` Categories)

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
