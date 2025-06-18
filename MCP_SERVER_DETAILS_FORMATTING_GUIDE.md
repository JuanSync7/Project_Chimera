
# Formatting Guide for `src/app/architectural-blueprint/mcp-server-details/page.tsx`

This guide outlines the specific formatting conventions for the "Deep Dive: The MCP Server" page (`src/app/architectural-blueprint/mcp-server-details/page.tsx`) in the Project Chimera application. Adhering to these guidelines ensures consistency in structure and style, mirroring the main Architectural Blueprint page but tailored for this detailed content.

## 1. Overall Page Structure

*   **Layout Component**: The page content is wrapped with the `<SubPageLayout>` component.
    *   The `backButtonHref` prop should point back to `/architectural-blueprint`.
    *   The `backButtonText` prop should be `"&larr; Back to Architectural Blueprint"`.
    ```tsx
    import SubPageLayout from '@/components/chimera/SubPageLayout';

    export default function McpServerDetailsPage() {
      return (
        <SubPageLayout
          backButtonHref="/architectural-blueprint"
          backButtonText="&larr; Back to Architectural Blueprint"
        >
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

*   The main title of the page (e.g., "Deep Dive: The MCP Server") is an `<h1>` element.
*   It is centered and includes a thematic Lucide icon (`ServerCog`).
*   **Structure**:
    ```tsx
    import { ServerCog } from 'lucide-react';

    // ... inside <article>
    <div className="flex flex-col items-center text-center mb-12">
      <ServerCog className="h-16 w-16 text-primary mb-4" /> {/* Icon */}
      <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-2 md:leading-tight">
        Deep Dive: The MCP Server {/* Title Text */}
      </h1>
      {/* Subtitle paragraph */}
      <p className="text-2xl text-slate-400">Tools, Knowledge, and State Management</p>
    </div>
    ```
*   **Styling**: (Inherits from global and `ARTICLE_PAGE_FORMATTING_GUIDE.md` conventions)
    *   Icon: `h-16 w-16 text-primary mb-4`
    *   `<h1>`: `text-4xl md:text-5xl font-bold gradient-text !mb-2 md:leading-tight`
        *   The `md:leading-tight` class is crucial for larger responsive font sizes (like `md:text-5xl`) to ensure character descenders (e.g., 'g', 'p', 'y') are not clipped.
    *   Subtitle `<p>`: `text-2xl text-slate-400`

## 3. Main Section Titles (`<h2>`)

*   Each major numbered section (e.g., 1. Tool Abstraction Layer, 2. Knowledge Hub) starts with an `<h2>` element.
*   Some `<h2>` titles (like for "Potential Challenges" or "Comparison") may include a leading icon for thematic emphasis.
*   **Structure (Standard)**:
    ```tsx
    // ... inside <article>
    <div className="mt-12 mb-4"> {/* Wrapper for consistent spacing */}
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
        1. Tool Abstraction Layer: How it Works
      </h2>
    </div>
    <p>Paragraph content for the section...</p>
    ```
*   **Structure (With Icon)**:
    ```tsx
    import { AlertTriangle } from 'lucide-react';

    // ... inside <article>
    <div className="mt-12 mb-4">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" /> {/* Icon */}
        4. Potential Challenges for MCP Server Implementation
      </h2>
    </div>
    ```
*   **Styling**:
    *   Wrapper `<div>`: `mt-12 mb-4`
    *   `<h2>`: `text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2`
    *   Icon (if present): `h-7 w-7 [specific-color] mr-3 flex-shrink-0` (e.g., `text-yellow-400`)

## 4. Sub-Section Category Titles (`<h3>`)

*   Within each main `<h2>` section, categories like "Core Functionality:", "Benefits of the TAL:", or "Key Components and Mechanisms:" are `<h3>` elements.
*   Each `<h3>` is preceded by a thematic Lucide icon.
*   **Structure**:
    ```tsx
    import { Settings2 } from 'lucide-react'; // Or other relevant icon

    // ... inside <article>, after an <h2> section
    <div className="mt-8 mb-4 flex items-center"> {/* Wrapper for icon and title */}
      <Settings2 className="h-7 w-7 text-primary mr-3 flex-shrink-0" /> {/* Icon */}
      <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0">
        Core Functionality: {/* Title Text */}
      </h3>
    </div>
    <p>Introductory paragraph for this category or directly into a list...</p>
    <ul className="list-disc pl-5 space-y-2">
      {/* List items */}
    </ul>
    ```
*   **Styling**:
    *   Wrapper `<div>`: `mt-8 mb-4 flex items-center`
    *   Icon: `h-7 w-7 text-primary mr-3 flex-shrink-0` (or other theme color if appropriate)
    *   `<h3>`: `text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0` (or other theme color)

## 5. List Items and Keyword Highlighting

*   **Unordered Lists (`<ul>`)**: Use `list-disc pl-5 space-y-2`.
*   **Agent/Component/Item Titles in Lists**: The name/title of the item (e.g., "Standardized API:") is emphasized using `<strong className="text-white font-semibold">`.
    ```html
    <ul class="list-disc pl-5 space-y-2">
      <li>
        <strong class="text-white font-semibold">Standardized API:</strong> The MCP Server provides...
      </li>
    </ul>
    ```
*   **General Keywords**: Important terms within paragraph text or list descriptions are highlighted using simple `<strong>` tags (no specific color class, inherits from parent or appears brighter/white).
*   **Code Examples (`<code>`)**: Inline code snippets or JSON examples should use `<code className="language-json bg-slate-700 p-1 rounded text-sm">` or similar, with the content properly escaped within curly braces if it's a JSX string literal: `{'{"key": "value"}'}`.

## 6. Lucide Icons Used

This page uses a variety of Lucide icons. Ensure they are imported at the top:
`ServerCog`, `Settings2`, `TerminalSquare`, `ThumbsUp`, `DatabaseZap`, `BrainCircuit`, `MessagesSquare`, `Sparkles`, `AlertTriangle`, `GitCompareArrows`, `Lightbulb`, `Network`, `UserCheck`, `Users`, `Share2`, `UserSquare2`, `KeyRound`.

By following these guidelines, the `mcp-server-details/page.tsx` will maintain structural and stylistic consistency with the rest of the "Architectural Blueprint" section.

    
