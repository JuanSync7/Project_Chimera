
# Formatting Guide for Content Pages (If Applicable for Bouton)

This guide outlines general formatting conventions that can be used if **Bouton** were to expand with article-style informational subpages (e.g., a "How It Works" page, "About AI Styling" page). For the core application, these guidelines might be less relevant but are provided for future use.

## 1. Overall Page Structure (for a Subpage)

*   **Layout Component**: Wrap page content with a layout component like `<SubPageLayout>` if such a component is created.
    ```tsx
    import SubPageLayout from '@/components/layout/SubPageLayout'; // Example path

    export default function ExampleArticlePage() {
      return (
        <SubPageLayout>
          {/* Page content goes here */}
        </SubPageLayout>
      );
    }
    ```
*   **Main Content Wrapper**: The primary content within a layout could be an `<article>` element.
    *   Apply Tailwind Prose classes if aiming for readability: `prose prose-slate dark:prose-invert lg:prose-lg max-w-none text-foreground space-y-4`.
    ```tsx
    <article className="prose prose-slate dark:prose-invert lg:prose-lg max-w-none text-foreground space-y-4">
      {/* Sections and text content */}
    </article>
    ```

## 2. Main Page Title (`<h1>`)

*   The main title of a subpage should be an `<h1>` element.
*   Consider centering it and including a thematic Lucide icon.
*   **Structure**:
    ```tsx
    import { Info } from 'lucide-react'; // Choose a thematic icon

    // ... inside <article>
    <div className="flex flex-col items-center text-center mb-8">
      <Info className="h-12 w-12 text-primary mb-3" /> {/* Thematic Icon */}
      <h1 className="text-3xl md:text-4xl font-bold text-primary !mb-1 md:leading-tight">
        Page Title for Bouton Subpage
      </h1>
      {/* Optional: Subtitle paragraph */}
      <p className="text-xl text-muted-foreground">A brief engaging subtitle.</p>
    </div>
    ```
*   **Styling**:
    *   Icon: `h-12 w-12 text-primary mb-3`
    *   `<h1>`: `text-3xl md:text-4xl font-bold text-primary !mb-1 md:leading-tight`
    *   Subtitle `<p>`: `text-xl text-muted-foreground`

## 3. Main Section Titles (`<h2>`)

*   Major sections within an article start with an `<h2>` element.
*   **Structure**:
    ```tsx
    // ... inside <article>
    <div className="mt-12 mb-3"> {/* Wrapper for consistent spacing */}
      <h2 className="text-2xl font-semibold text-foreground !m-0 border-b border-border pb-1">
        Main Section Title
      </h2>
    </div>
    <p>Paragraph content for the section...</p>
    ```
*   **Styling**:
    *   Wrapper `<div>`: `mt-12 mb-3`
    *   `<h2>`: `text-2xl font-semibold text-foreground !m-0 border-b border-border pb-1`

## 4. Sub-Section Titles (`<h3>`)

*   Sub-topics within an `<h2>` section can use `<h3>`.
*   Consider a thematic Lucide icon.
*   **Structure**:
    ```tsx
    import { CheckCircle } from 'lucide-react'; // Choose a thematic icon

    // ... inside <article>, after an <h2> section
    <div className="mt-6 mb-2 flex items-center"> {/* Wrapper for icon and title */}
      <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0" /> {/* Thematic Icon */}
      <h3 className="text-xl font-semibold text-accent !m-0">
        Example Sub-Section Title
      </h3>
    </div>
    <p>Introductory paragraph for this sub-section...</p>
    ```
*   **Styling**:
    *   Wrapper `<div>`: `mt-6 mb-2 flex items-center`
    *   Icon: `h-5 w-5 text-accent mr-2 flex-shrink-0`
    *   `<h3>`: `text-xl font-semibold text-accent !m-0`

## 5. Lists and List Items

### 5.1 Standard Unordered List Items
*   Use `<ul>` with `list-disc pl-5 space-y-1`.
*   Emphasize item titles with `<strong class="font-semibold text-foreground">`.
    ```tsx
    <ul className="list-disc pl-5 space-y-1">
      <li>
        <strong className="font-semibold text-foreground">Key Item Title:</strong> Description...
      </li>
    </ul>
    ```

### 5.2 Enhanced List Item Styling with Icons
*   For more visual distinction, use leading Lucide icons.
*   **Structure**:
    ```tsx
    import { Sparkle } from 'lucide-react';

    <ul className="list-none pl-0 space-y-3 !my-4">
      <li className="flex items-start">
        <Sparkle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
        <div>
          <strong className="text-primary block mb-0.5">Key Point Title:</strong> Further description...
        </div>
      </li>
    </ul>
    ```

## 6. General Paragraphs and Keyword Highlighting

*   General text in `<p>` tags.
*   Highlight keywords with `<strong>` (inherits parent color, appears bolder).
    ```html
    <p>Bouton uses <strong>AI</strong> to suggest <strong>button styles</strong>.</p>
    ```
*   Inline code: `<code class="bg-muted px-1 py-0.5 rounded text-sm">some.variable</code>`.

## 7. Lucide Icons

*   Source icons from `lucide-react`.
    ```tsx
    import { Sparkle, Info, CheckCircle } from 'lucide-react';
    ```

By following these general guidelines, any future content pages for Bouton will maintain a consistent and readable structure.
