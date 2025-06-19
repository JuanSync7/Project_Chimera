
# Project Chimera: Guide for Structuring Content Sections

This guide details how content is structured within the **Project Chimera** single-page presentation application. The application is primarily composed of sections within the main `App.tsx` (or `page.tsx` if adapted to Next.js) and detailed sub-pages for specific topics.

## Core Application Structure (`Project_Chimera/App.tsx`)

The main interface of Project Chimera is built within `Project_Chimera/App.tsx`.

### Structure of `App.tsx`:

*   It imports and arranges various "Section" components (e.g., `HomeSection.tsx`, `OverviewSection.tsx`).
*   It manages global state like `activeSection` for scroll-spy navigation and `isMobileMenuOpen` for the mobile menu.
*   It wraps all content in `<PageShell>` which provides the Header and Footer.

**Example Snippet from `App.tsx` (Conceptual based on its typical structure):**
```tsx
// Conceptual structure based on Project_Chimera/App.tsx
import PageShell from '@/components/chimera/PageShell';
import HomeSection from '@/components/chimera/sections/HomeSection';
// ... other section imports

export default function App() {
  // ... state for activeSection, isMobileMenuOpen ...

  return (
    <PageShell activeSection={activeSection} /* ... other props ... */ >
      <div className="container mx-auto px-6"> {/* Main content container */}
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
    *   In `Project_Chimera/components/sections/`, create a new `.tsx` file (e.g., `NewStrategicSection.tsx`).
    *   Design your component using React and Tailwind CSS. Each section should typically have a root `<section id="your-section-id" className="py-24">` (or similar padding).
    *   Assign a unique `id` to the root `<section>` element. This `id` will be used for navigation.
2.  **Update Navigation Constants**:
    *   Add a new entry to the `NAV_LINKS` array in `Project_Chimera/constants.ts` corresponding to your new section.
        ```ts
        // In Project_Chimera/constants.ts
        export const NAV_LINKS: NavLinkItem[] = [
          // ... existing links ...
          { id: 'your-section-id', href: '#your-section-id', label: 'New Section Label' },
        ];
        ```
3.  **Import and Use in `App.tsx`**:
    *   Import your new section component into `App.tsx`.
    *   Place it in the desired order within the main content `div`.
    *   The scroll-spy logic in `App.tsx` should automatically pick up the new section if it has an `id` attribute.

## Creating New Sub-Pages (Detailed Content Pages)

Project Chimera uses a pattern for sub-pages that provide more detailed information (e.g., `/strategic-imperative`, `/architectural-blueprint`). If this were a Next.js App Router application, these would be in `src/app/some-route/page.tsx`. For the current Vite/React setup, routing would be handled by a library like React Router, or it might be simulated if these are actually part of a more complex single-page structure not fully shown.

Assuming a conceptual routing setup for sub-pages:

1.  **Create a New Page Component**:
    *   Place the new page component in a relevant directory, for instance, if it's related to the roadmap, it might be `Project_Chimera/components/chimera/roadmap-details/MyNewRoadmapDetailPage.tsx`.
    *   For a Next.js App Router structure, this would be, for example: `src/app/roadmap-details/my-new-detail/page.tsx`.
2.  **Structure the Sub-Page Content**:
    *   Use the `<SubPageLayout>` component to wrap your page content. This provides consistent header, footer, and a "back" button.
        ```tsx
        // Example for a new sub-page: src/app/new-detail/page.tsx (Next.js example)
        // Or Project_Chimera/pages/NewDetailPage.tsx (Vite/React Router example)
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
    *   Add links from the main page sections (e.g., `HomeSection.tsx`, `OverviewSection.tsx`) or other relevant sub-pages to your new detail page using a standard `<a>` tag or a `<Link>` component if using a routing library.

## Styling and Formatting

*   Use Tailwind CSS classes for styling components and layout.
*   Refer to `STYLING_OVERVIEW.md` and `COLOR_SCHEME.md` for general styling guidelines.
*   For text formatting within content (headings, paragraphs, lists), refer to `ARTICLE_PAGE_FORMATTING_GUIDE.md` (for general article-style pages) and `ARCHITECTURAL_BLUEPRINT_FORMATTING_GUIDE.md` (for more technical/diagram-heavy content).

By following this structure, the Project Chimera presentation can be expanded with new content sections or detailed sub-pages in an organized and consistent manner.
