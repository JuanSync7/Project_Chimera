
# Formatting Guide for Bouton App Components and Pages

This guide outlines formatting conventions for developing components and potential future subpages for the **Bouton** application. Adhering to these guidelines ensures consistency. Bouton primarily focuses on a main interface for button display and styling, so these guidelines are simplified compared to large multi-page applications.

## 1. Overall Page/View Structure (Main App View)

*   **Layout Component**: If multiple views/pages are ever needed, a consistent layout component (e.g., `<AppLayout>`) should wrap content. For the current single-view Bouton app, the main page (`src/app/page.tsx`) will structure the primary components.
    ```tsx
    // Example for src/app/page.tsx
    import BoutonDisplay from '@/components/bouton/BoutonDisplay';
    import StyleControls from '@/components/bouton/StyleControls';
    import AiStyler from '@/components/bouton/AiStyler';

    export default function BoutonHomePage() {
      return (
        <main className="container mx-auto p-4 flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <BoutonDisplay />
          </div>
          <div className="md:w-1/3 space-y-6">
            <StyleControls />
            <AiStyler />
          </div>
        </main>
      );
    }
    ```
*   **Component Structure**: Components should be well-defined and reusable. Use ShadCN UI components where appropriate.

## 2. Main Titles (e.g., Section Titles within Components)

*   If components have distinct sections, use `<h2>` or `<h3>` for titles.
*   **Structure Example (within a component like `StyleControls.tsx`):**
    ```tsx
    import { Palette } from 'lucide-react'; // Example icon

    // ... inside a component
    <div className="mb-4">
      <h2 className="text-2xl font-semibold text-foreground mb-2 flex items-center">
        <Palette className="h-6 w-6 text-primary mr-2" />
        Button Appearance
      </h2>
    </div>
    {/* Controls for button style */}
    ```
*   **Styling**:
    *   Icon: `h-6 w-6 text-primary mr-2` (or `text-accent`)
    *   `<h2>`: `text-2xl font-semibold text-foreground mb-2`
    *   `<h3>`: `text-xl font-medium text-foreground mb-1`

## 3. Control Group Labels

*   For groups of related controls (e.g., color pickers, sliders for border radius), use a clear label, possibly an `<h4>` or styled `<div>`.
*   **Structure Example (within `StyleControls.tsx`):**
    ```tsx
    <div>
      <h4 className="text-lg font-medium text-muted-foreground mb-2">Colors</h4>
      {/* Color control components */}
    </div>
    ```
*   **Styling**:
    *   `<h4>`: `text-lg font-medium text-muted-foreground mb-2`

## 4. Lists (If Used for Options or Features)

*   Use standard `<ul>` or `<ol>` with Tailwind CSS for styling.
*   **Example for a list of features (if applicable):**
    ```tsx
    <ul className="list-disc pl-5 space-y-2 text-foreground">
      <li>
        <strong className="font-semibold">Real-time Preview:</strong> See your button change as you adjust styles.
      </li>
      <li>
        <strong className="font-semibold">AI-Powered Suggestions:</strong> Get unique style recommendations.
      </li>
    </ul>
    ```

## 5. General Paragraphs and Descriptions

*   Use `<p>` tags with appropriate text color (e.g., `text-foreground` or `text-muted-foreground`).
*   Highlight keywords with `<strong>` for emphasis.
    ```html
    <p class="text-muted-foreground">Adjust the <strong>padding</strong> and <strong>margin</strong> to change the button's spacing.</p>
    ```

## 6. Lucide Icons

*   Utilize icons from `lucide-react` for UI elements like section titles or interactive controls.
    ```tsx
    import { Palette, Sparkles } from 'lucide-react';
    ```

## 7. ShadCN UI Components

*   Prefer using ShadCN UI components (`Button`, `Slider`, `Select`, `Input`, `Card`, etc.) for building the interface. They are pre-styled and accessible.
*   Customize their appearance using Tailwind utility classes.

This simplified guide should help maintain consistency as Bouton evolves. For more complex text formatting (if detailed articles are ever added), the general principles from `ARTICLE_PAGE_FORMATTING_GUIDE.md` can be adapted.
