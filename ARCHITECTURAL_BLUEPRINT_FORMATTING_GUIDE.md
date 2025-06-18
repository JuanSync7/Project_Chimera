
# Formatting Guide for src/app/architectural-blueprint/page.tsx

This guide outlines the specific formatting conventions used for the "Architectural Blueprint" page (`src/app/architectural-blueprint/page.tsx`) in the Project Chimera application. Adhering to these guidelines ensures consistency in structure and style.

## 1. Overall Page Structure

*   **Layout Component**: The page content is wrapped with the `<SubPageLayout>` component.
    ```tsx
    import SubPageLayout from '@/components/chimera/SubPageLayout';

    export default function ArchitecturalBlueprintPage() {
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

*   The main title of the page (e.g., "Section 2: Architectural Blueprint") is an `<h1>` element.
*   It is centered and includes a thematic Lucide icon.
*   **Structure**:
    ```tsx
    import { DraftingCompass } from 'lucide-react'; // Or other relevant icon

    // ... inside <article>
    <div className="flex flex-col items-center text-center mb-12">
      <DraftingCompass className="h-16 w-16 text-primary mb-4" /> {/* Icon */}
      <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-2">
        Section 2: Architectural Blueprint {/* Title Text */}
      </h1>
      {/* Optional: Subtitle paragraph */}
      <p className="text-2xl text-slate-400">A Multi-Agent System for End-to-End Design</p>
    </div>
    ```
*   **Styling**:
    *   Icon: `h-16 w-16 text-primary mb-4`
    *   `<h1>`: `text-4xl md:text-5xl font-bold gradient-text !mb-2`
    *   Subtitle `<p>`: `text-2xl text-slate-400`

## 3. Main Section Titles (`<h2>`)

*   Each major numbered section (e.g., 2.1, 2.2, 2.3) starts with an `<h2>` element.
*   These titles do **not** have preceding icons.
*   **Structure**:
    ```tsx
    // ... inside <article>
    <div className="mt-12 mb-4"> {/* Wrapper for consistent spacing */}
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
        2.1 Example Main Section Title
      </h2>
    </div>
    <p>Paragraph content for the section...</p>
    ```
*   **Styling**:
    *   Wrapper `<div>`: `mt-12 mb-4` (adjust top margin for the very first `<h2>` if needed).
    *   `<h2>`: `text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2`

## 4. Sub-Section Category Titles (`<h3>`)

*   Within each main section (e.g., under 2.2 "Core Components"), categories like "Design & Exploration Agents" are `<h3>` elements.
*   Each `<h3>` is preceded by a thematic Lucide icon.
*   **Structure**:
    ```tsx
    import { PenTool } from 'lucide-react'; // Or other relevant icon

    // ... inside <article>, after an <h2> section
    <div className="mt-8 mb-4 flex items-center"> {/* Wrapper for icon and title */}
      <PenTool className="h-7 w-7 text-primary mr-3 flex-shrink-0" /> {/* Icon */}
      <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
        Design & Exploration Agents: {/* Title Text */}
      </h3>
    </div>
    <p>Introductory paragraph for this category...</p>
    <ul>
      {/* List items for specific agents/components */}
    </ul>
    ```
*   **Styling**:
    *   Wrapper `<div>`: `mt-8 mb-4 flex items-center`
    *   Icon: `h-7 w-7 text-primary mr-3 flex-shrink-0`
    *   `<h3>`: `text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0`

## 5. Agent/Component List Items (within `<h3>` Categories)

*   Specific agents or components listed under an `<h3>` category (e.g., "Specification Agent" under "Design & Exploration Agents") are typically presented as list items within a `<ul>`.
*   The name/title of the agent/component is emphasized using `<strong>`.
*   **Structure**:
    ```tsx
    // ... inside <article>, following an <h3> category and its intro paragraph
    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong className="text-white font-semibold">Specification Agent:</strong> Crucial for bridging the gap...
      </li>
      <li>
        <strong className="text-white font-semibold">Architecture & RTL Agents:</strong> These agents are the architects...
      </li>
    </ul>
    ```
*   **Styling**:
    *   `<ul>`: `list-disc pl-5 space-y-2`
    *   `<strong>` for agent name: `text-white font-semibold`

## 6. General Paragraphs and Keyword Highlighting

*   General descriptive text is placed within `<p>` tags.
*   Important keywords or phrases within these paragraphs are highlighted using `<strong>` tags without additional color classes. The default browser bolding and parent text color (e.g., `text-slate-300`) provide sufficient emphasis.
    ```html
    <p>This is a paragraph with <strong>important keywords</strong> that need emphasis. The system uses <strong>RAG</strong> and <strong>CAG</strong>.</p>
    ```

## 7. Lucide Icons

*   All icons are sourced from the `lucide-react` library.
*   Import specific icons as needed at the top of the file.
    ```tsx
    import {
      DraftingCompass,
      Network,
      Component,
      // ... other imported icons
    } from 'lucide-react';
    ```

By following these guidelines, the `architectural-blueprint/page.tsx` will maintain a consistent and readable structure, making it easier for users to navigate and understand the content.
