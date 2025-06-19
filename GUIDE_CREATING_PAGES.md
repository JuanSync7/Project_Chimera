
# Guide: Developing and Structuring Bouton App

This guide details how to structure components and potentially add new views or functionalities to the **Bouton** application. Bouton is primarily a single-interface application for button styling.

## Core Application Structure (`src/app/page.tsx`)

The Bouton application's main interface is likely constructed within `src/app/page.tsx`.

### Structure of `src/app/page.tsx`:

*   It will import and arrange the primary Bouton components.
*   It manages the central state for the button's style (`ButtonState`).
*   It handles interactions between the style controls, the AI styler, and the button display.

**Example (`src/app/page.tsx`):**
```tsx
"use client"; // For state management and event handling

import React, { useState } from 'react';
import BoutonDisplay from '@/components/bouton/BoutonDisplay';
import StyleControls from '@/components/bouton/StyleControls';
import AiStyler from '@/components/bouton/AiStyler';
import type { ButtonState } from '@/lib/bouton/types'; // Assuming types are defined here
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button'; // ShadCN button for styling
import { Sparkles } from 'lucide-react'; // Example icon

export default function BoutonHomePage() {
  const [buttonState, setButtonState] = useState<ButtonState>({
    text: 'Click Me!',
    textColor: '#FFFFFF',
    backgroundColor: '#4B0082', // Default primary
    borderRadius: 8,
    paddingX: 24,
    paddingY: 12,
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    fontWeight: '600',
  });

  // Handler for AI style suggestions
  const handleAiStyle = async (prompt: string) => {
    // Call Genkit flow and update buttonState
    // Example: const suggestedStyle = await suggestStyleFlow({ userPrompt: prompt, currentStyle: buttonState });
    // setButtonState(suggestedStyle);
    console.log("AI Prompt:", prompt);
    // Placeholder: Toggle accent color on AI style for demo
    setButtonState(prev => ({
      ...prev,
      backgroundColor: prev.backgroundColor === '#4B0082' ? '#8A2BE2' : '#4B0082'
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-5xl mx-auto py-6 text-center">
        <h1 className="text-4xl font-bold text-primary flex items-center justify-center">
          <Sparkles className="w-10 h-10 mr-3 text-accent" />
          Bouton: AI Button Styler
        </h1>
        <p className="text-muted-foreground mt-2">
          Design and discover the perfect button style with manual controls and AI-powered suggestions.
        </p>
      </header>

      <main className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        {/* Left Side: Button Display Area */}
        <section className="md:w-2/3 w-full bg-card p-6 rounded-lg shadow-lg flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px]">
          <BoutonDisplay buttonState={buttonState} />
        </section>

        {/* Right Side: Controls Area */}
        <aside className="md:w-1/3 w-full space-y-6">
          <StyleControls
            buttonState={buttonState}
            onStyleChange={setButtonState}
          />
          <AiStyler onAiStyle={handleAiStyle} />
        </aside>
      </main>
      <Toaster />
    </div>
  );
}
```

## Adding New Components or Functionality

1.  **Create a New Component**:
    *   In `src/components/bouton/`, create a new `.tsx` file (e.g., `NewFeatureControl.tsx`).
    *   Design your component using React, Tailwind CSS, and ShadCN UI components.
2.  **Import and Use in `src/app/page.tsx`**:
    *   Import your new component into `BoutonHomePage`.
    *   Place it in the desired location within the JSX, likely within the `<aside>` or as a new section.
    *   Connect its state or event handlers as needed.

## Creating a New Subpage (If Bouton Expands)

If Bouton grows to require separate informational pages (e.g., "About", "FAQ"):

1.  **Create a New Route Folder**:
    *   In `src/app/`, create a new folder (e.g., `src/app/about/`).
2.  **Create `page.tsx` for the Subpage**:
    *   Inside `src/app/about/`, create `page.tsx`.
3.  **Structure the Subpage Content**:
    *   If you have a shared layout (e.g., `SubPageLayout`), import and use it.
    *   Use `<article>` and semantic HTML for content. Refer to `ARTICLE_PAGE_FORMATTING_GUIDE.md` for text styling.

    **Example (`src/app/about/page.tsx`):**
    ```tsx
    import React from 'react';
    // import SubPageLayout from '@/components/layout/SubPageLayout'; // If you create one
    import { Info } from 'lucide-react';

    export default function AboutPage() {
      return (
        // <SubPageLayout> // Optional
        <main className="container mx-auto p-8">
          <article className="prose prose-slate dark:prose-invert lg:prose-lg max-w-none text-foreground space-y-4">
            <div className="flex flex-col items-center text-center mb-8">
              <Info className="h-12 w-12 text-primary mb-3" />
              <h1 className="text-3xl md:text-4xl font-bold text-primary">About Bouton</h1>
            </div>
            <p>Bouton helps you design amazing buttons with ease...</p>
          </article>
        </main>
        // </SubPageLayout>
      );
    }
    ```

## Styling

*   Use Tailwind CSS classes for styling.
*   Global styles and theme variables are in `src/app/globals.css`.
*   Follow the color scheme defined in `COLOR_SCHEME.md`.

By following this structure, Bouton can maintain a clean and organized codebase, making it easier to manage and extend.
