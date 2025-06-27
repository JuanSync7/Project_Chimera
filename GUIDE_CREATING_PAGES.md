
# Project Chimera: Guide for Structuring Content

This guide details how content is structured within the **Project Chimera** Next.js application. The application is composed of a main page with multiple sections and several detailed sub-pages.

## Core Application Structure (`src/app/page.tsx`)

The main interface of Project Chimera is built within `src/app/page.tsx`.

### Structure of `page.tsx`:

*   It imports and arranges various "Section" components (e.g., `HomeSection`, `OverviewSection`).
*   It manages global state like `activeSection` for scroll-spy navigation.
*   It wraps all content in `<PageShell>` which provides the Header and Footer.

**Example Snippet from `page.tsx` (Conceptual):**
```tsx
// Conceptual structure based on src/app/page.tsx
import PageShell from '@/components/chimera/PageShell';
import HomeSection from '@/components/chimera/sections/HomeSection';
// ... other section imports

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  // ... state logic ...

  return (
    <PageShell activeSection={activeSection}>
      <div className="container mx-auto px-6">
        <HomeSection />
        <OverviewSection />
        {/* ... Other sections ... */}
      </div>
    </PageShell>
  );
}
```

## Adding New Sections to the Main Page

1.  **Create a New Section Component**:
    *   In `src/components/chimera/sections/`, create a new `.tsx` file (e.g., `NewStrategicSection.tsx`).
    *   Design your component using React and Tailwind CSS. Each section should typically have a root `<section id="your-section-id" className="py-24">` (or similar padding).
    *   Assign a unique `id` to the root `<section>` element. This `id` will be used for navigation.
2.  **Update Navigation Constants**:
    *   Add a new entry to the `NAV_LINKS` array in `src/lib/chimera/constants.ts` corresponding to your new section.
        ```ts
        // In src/lib/chimera/constants.ts
        export const NAV_LINKS: NavLinkItem[] = [
          // ... existing links ...
          { id: 'your-section-id', href: '#your-section-id', label: 'New Section Label' },
        ];
        ```
3.  **Import and Use in `page.tsx`**:
    *   Import your new section component into `src/app/page.tsx`.
    *   Place it in the desired order within the main content `div`.
    *   The scroll-spy logic in `page.tsx` should automatically pick up the new section if it has an `id` attribute.

## Creating New Sub-Pages (Detailed Content Pages)

Project Chimera uses the Next.js App Router for its sub-pages (e.g., `/strategic-imperative`, `/architectural-blueprint`).

1.  **Create a New Page Route**:
    *   In the `src/app/` directory, create a new folder for your route (e.g., `src/app/new-detail-page/`).
    *   Inside this folder, create a `page.tsx` file. This file will be the entry point for the `/new-detail-page` route.
2.  **Structure the Sub-Page Content**:
    *   Use the `<SubPageLayout>` component to wrap your page content. This provides consistent header, footer, and a "back" button.
        ```tsx
        // Example for a new sub-page: src/app/new-detail-page/page.tsx
        "use client"; // If client-side interactions are needed
        import React from 'react';
        import SubPageLayout from '@/components/chimera/SubPageLayout';
        import { Info } from 'lucide-react'; // Example icon

        export default function NewDetailPage() {
          return (
            <SubPageLayout backButtonHref="/#relevant-section-on-main-page" backButtonText="&larr; Back to Main Topic">
              <article className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none text-slate-300 space-y-6">
                <div className="flex flex-col items-center text-center mb-12">
                  <Info className="h-16 w-16 text-primary mb-4" />
                  <h1 className="text-4xl md:text-5xl font-bold gradient-text !mb-2">
                    Title for New Detail Page
                  </h1>
                </div>
                <p>Detailed content for the new page...</p>
                {/* More sections, h2, h3, lists, etc. */}
              </article>
            </SubPageLayout>
          );
        }
        ```
3.  **Link to the New Sub-Page**:
    *   Add links from the main page sections (e.g., `HomeSection.tsx`, `OverviewSection.tsx`) or other relevant sub-pages to your new detail page using the Next.js `<Link>` component.

## Styling and Formatting

*   Use Tailwind CSS classes for styling components and layout.
*   Refer to `STYLING_OVERVIEW.md` and `COLOR_SCHEME.md` for general styling guidelines.
*   For text formatting within content (headings, paragraphs, lists), refer to `ARTICLE_PAGE_FORMATTING_GUIDE.md` (for general article-style pages) and `ARCHITECTURAL_BLUEPRINT_FORMATTING_GUIDE.md` (for more technical/diagram-heavy content).

By following this structure, the Project Chimera presentation can be expanded with new content sections or detailed sub-pages in an organized and consistent manner.
