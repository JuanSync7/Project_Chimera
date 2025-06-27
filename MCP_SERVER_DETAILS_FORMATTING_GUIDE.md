
# Project Chimera: Guide for Structuring "MCP Server" Content

The **Project Chimera** application features a detailed explanation of its "Multi-Agent Collaboration Protocol (MCP) Server" within the "Architectural Blueprint" section, particularly in the `src/app/architectural-blueprint/mcp-server-details/page.tsx` sub-page. This guide outlines how to structure and format content when detailing such complex components.

## 1. Page Title and Introduction

*   **Main Title (`<h1>`)**: Clear, prominent, and uses `.gradient-text`.
    *   Accompanied by a thematic Lucide icon (e.g., `<ServerCog />`).
    *   Includes a subtitle `<p>` for context.
    *   **Example from `mcp-server-details/page.tsx`:**
        ```tsx
        <div className="flex flex-col items-center text-center mb-12">
          <ServerCog className="h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-2 md:leading-tight">
            Deep Dive: The MCP Server
          </h1>
          <p className="text-2xl text-slate-400">Tools, Knowledge, and State Management</p>
        </div>
        ```
*   **Introductory Paragraphs**: Briefly explain the component's purpose and the topics to be covered.

## 2. Numbered Major Sections (`<h2>`)

*   Divide the content into logical major sections, each starting with an `<h2>` title.
*   Prefix titles with numbers (e.g., "1. Tool Abstraction Layer...", "2. Knowledge Hub (RAG)...").
*   Optionally, include a thematic icon within or alongside the `<h2>` if it introduces a very distinct concept.
    ```tsx
    <div className="mt-16 mb-4"> {/* Or mt-24 for more separation */}
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
        1. Tool Abstraction Layer: How it Works
      </h2>
    </div>
    ```
    Or, for more visual separation with an icon:
    ```tsx
    <div className="mt-24 mb-4">
      <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2 flex items-center">
        <AlertTriangle className="h-7 w-7 text-yellow-400 mr-3 flex-shrink-0" /> {/* Example Icon */}
        4. Potential Challenges or Considerations...
      </h2>
    </div>
    ```

## 3. Topic Titles within Major Sections (`<h3>`)

*   Break down major sections further with `<h3>` titles for specific aspects or functionalities.
*   These are consistently styled with a leading Lucide icon and a themed color.
*   **Structure Example:**
    ```tsx
    <div className="mt-8 mb-4 flex items-center">
      <Settings2 className="h-7 w-7 text-primary mr-3 flex-shrink-0" /> {/* Icon */}
      <h3 className="text-2xl font-semibold text-primary !m-0 !border-b-0 !pb-0"> {/* Title */}
        Core Functionality:
      </h3>
    </div>
    <ul className="list-disc pl-5 space-y-2"> {/* Content (often lists) */}
      {/* ... list items ... */}
    </ul>
    ```
*   The icon and text color for the `<h3>` (e.g., `text-primary`, `text-yellow-400`) can be varied to provide thematic distinction for different types of information (e.g., benefits, challenges, comparisons).

## 4. Detailed Explanations (Paragraphs and Lists)

*   **Paragraphs**: Use standard `<p>` tags. Tailwind Prose handles readability.
*   **Lists (`<ul>`, `<ol>`)**:
    *   Use `ul className="list-disc pl-5 space-y-2"` for primary bullet points.
    *   Keywords within list items: `<strong class="text-white font-semibold">Keyword:</strong> Explanation...`
    *   Nested lists: `ul className="list-circle pl-5 space-y-1 mt-1"` or `mt-2`.
    *   Numbered lists `ol className="list-decimal pl-5 space-y-2"` are used for sequential items like "Challenges" or "Enhancements".

## 5. Code/Command Examples

*   For brief inline mentions of code, commands, or JSON, use `<code>` tags styled with a background.
    *   Example: `<code className="language-json bg-slate-700 p-1 rounded text-sm">{'MCP_Server.execute_tool(...)'}</code>`
*   These snippets help illustrate technical details clearly.

## 6. Visual Grouping of Related Points

*   Use consistent spacing (`mt-8`, `mt-16`, `mt-24`) to visually group related topics and create a clear reading flow.
*   The border on `<h2>` titles also helps delineate major sections.

## 7. Linking to Other Relevant Sections/Pages

*   If the content references concepts detailed elsewhere, provide clear links using the Next.js `<Link>` component wrapped around a ShadCN `<Button>`.

By following this structure, detailed technical explanations like that of the MCP Server can be presented in a digestible, organized, and visually appealing manner, consistent with the overall style of the Project Chimera application.
