
# Guide: Creating Main and Subpages for Project Chimera

This guide details how to add new main content areas (typically as sections on the primary `src/app/page.tsx`) and new dedicated subpages to the Project Chimera application.

## Core Layout Components

The application uses a tiered layout system for consistency:

1.  **`PageShell.tsx` (`src/components/chimera/PageShell.tsx`)**:
    *   This is the outermost shell providing the consistent `Header`, `Footer`, and `MobileMenu` (including its open/close logic).
    *   It's used by both the main page and the subpage layout.
    *   It accepts an `activeSection` prop for highlighting navigation links and `children` for the main page content.

2.  **`SubPageLayout.tsx` (`src/components/chimera/SubPageLayout.tsx`)**:
    *   This component is specifically for creating detailed subpages.
    *   It wraps its content with `PageShell` to provide the standard header, footer, and mobile menu.
    *   It automatically includes a "Back to Project Overview" button (configurable via `backButtonHref` and `backButtonText` props).
    *   It expects page-specific content (like an `<article>`) as its `children`.

## The Main Page (`src/app/page.tsx`)

The application has one primary main page (`src/app/page.tsx`) which serves as the landing page and aggregates various sections.

### Structure of `src/app/page.tsx`:

*   Uses `<PageShell>` to wrap its content.
*   Manages an `activeSection` state, updated by an `IntersectionObserver`, to highlight the currently visible section in the main navigation. This `activeSection` is passed to `PageShell`.
*   May include page-specific components like `<StarryBackground />`.
*   Content is organized into various `<section>` components (e.g., `<HomeSection />`, `<OverviewSection />`), imported from `src/components/chimera/sections/`.
*   Often includes "Learn More" buttons (`<Link href="/subpage-route">...</Link>`) that navigate to dedicated subpages for more detailed information.
*   The main content logic (`HomePageContent`) is wrapped in a `<Suspense>` component for potential future use with server components or data fetching strategies, though currently, it primarily handles client-side interactivity.

### Adding a New Section to the Main Page:

1.  **Create a New Section Component**:
    *   In `src/components/chimera/sections/`, create a new `.tsx` file (e.g., `NewContentSection.tsx`).
    *   Design your section using React and Tailwind CSS. Use ShadCN UI components where appropriate.
    *   Ensure the root element of your section is a `<section id="new-content-id">...</section>` where `new-content-id` is unique.
2.  **Import and Use in `src/app/page.tsx`**:
    *   Import your new section component into `HomePageContent`.
    *   Place it in the desired order within the main page's JSX structure.
3.  **Update Navigation (Optional but Recommended)**:
    *   Add a new entry to `NAV_LINKS` in `src/lib/chimera/constants.ts` if this section should be directly navigable from the header/mobile menu. The `id` should match the `id` of your `<section>` tag.
    ```ts
    // src/lib/chimera/constants.ts
    export const NAV_LINKS: NavLinkItem[] = [
      // ... existing links
      { id: 'new-content-id', href: '#new-content-id', label: 'New Section Title' },
    ];
    ```
    *   This allows the `IntersectionObserver` on the main page to correctly set `activeSection` for highlighting.

## Creating a New Subpage

Subpages are used for detailed content related to a specific topic, often linked from a "Learn More" button on the main page.

### Steps:

1.  **Create a New Route Folder**:
    *   In the `src/app/` directory, create a new folder named after your subpage's route (e.g., `src/app/new-detailed-topic/`). Use kebab-case for folder names.

2.  **Create `page.tsx` for the Subpage**:
    *   Inside your new route folder (e.g., `src/app/new-detailed-topic/`), create a `page.tsx` file.
    *   This file will define the content of your subpage.

3.  **Structure the Subpage Content**:
    *   Import `SubPageLayout` from `@/components/chimera/SubPageLayout`.
    *   The main export should be a React functional component.
    *   Wrap your subpage's primary content within the `<SubPageLayout>` component.
    *   Typically, subpage content is structured as an `<article>` with prose styling for readability. Refer to `ARTICLE_PAGE_FORMATTING_GUIDE.md` for detailed styling conventions for headings, lists, cards, etc.

    **Example (`src/app/new-detailed-topic/page.tsx`):**
    ```tsx
    "use client"; // If using client-side hooks or interactivity
    import React from 'react';
    import SubPageLayout from '@/components/chimera/SubPageLayout';
    import { ExampleIcon } from 'lucide-react'; // For H1 title

    export default function NewDetailedTopicPage() {
      return (
        <SubPageLayout>
          <article className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6">
            {/* Main Page Title (H1) */}
            <div className="flex flex-col items-center text-center mb-12">
              <ExampleIcon className="h-16 w-16 text-primary mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-2 md:leading-tight">
                Title for New Detailed Topic
              </h1>
              <p className="text-2xl text-slate-400">Engaging subtitle here.</p>
            </div>
            
            <p>
              Detailed content goes here. You can use various HTML elements
              like paragraphs, lists, headings, etc.
            </p>
            
            {/* Main Section Title (H2) - First one on page */}
            <div className="mt-16 mb-4">
              <h2 className="text-3xl font-semibold text-white !m-0 border-b border-slate-700 pb-2">
                Sub-heading within the Topic
              </h2>
            </div>
            <p>More details...</p>
            {/* Add more content as needed, following ARTICLE_PAGE_FORMATTING_GUIDE.md */}
          </article>
        </SubPageLayout>
      );
    }
    ```

4.  **Link to the New Subpage (from Main Page or other pages)**:
    *   Typically, you'll add a `<Link>` component (from `next/link`) on the main page or another relevant page to navigate to your new subpage.
    *   Example (in `src/app/page.tsx` or a section component):
        ```tsx
        import Link from 'next/link';
        import { Button } from '@/components/ui/button';

        // ... inside a component's return statement
        <Link href="/new-detailed-topic" passHref>
          <Button variant="outline" size="lg" className="bg-transparent text-yellow-400 border-yellow-500 hover:bg-yellow-500/20 hover:text-yellow-300 hover:border-yellow-400 ...">
            Learn More: New Detailed Topic &rarr;
          </Button>
        </Link>
        ```

5.  **Styling**:
    *   Use Tailwind CSS classes for styling.
    *   For article-style content on subpages, the `prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300` classes provide good defaults for typography and spacing.
    *   Global styles are in `src/app/globals.css`.
    *   For specific formatting of headings, lists, and alternative content blocks like `KeyStatCard`, refer to `ARTICLE_PAGE_FORMATTING_GUIDE.md`.

## Summary Flow

*   **Main Page (`src/app/page.tsx`)**: Aggregates overview sections. Uses `PageShell`. Manages its own scroll-based navigation highlighting.
*   **Subpages (e.g., `src/app/some-topic/page.tsx`)**: Provide focused, detailed content. Use `SubPageLayout` (which in turn uses `PageShell`). Adhere to `ARTICLE_PAGE_FORMATTING_GUIDE.md` for content structure.

By following this structure, you can maintain a consistent look and feel across the application while organizing content logically.
