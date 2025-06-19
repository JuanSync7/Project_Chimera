
# Bouton App Data Structures

This document outlines the key data structures (TypeScript interfaces) used within the **Bouton** application. These structures define the shape of data related to button styling and AI interactions.

## 1. `ButtonState`

*   **File**: `src/lib/bouton/types.ts` (Example path)
*   **Purpose**: Defines the current visual properties of the button being styled.
*   **Fields**:
    *   `text: string`: The text displayed on the button.
    *   `textColor: string`: The CSS color value for the button's text (e.g., `#FFFFFF`, `hsl(var(--primary-foreground))`).
    *   `backgroundColor: string`: The CSS color value for the button's background (e.g., `#4B0082`, `hsl(var(--primary))`).
    *   `borderColor?: string`: Optional CSS color value for the button's border.
    *   `borderWidth?: number`: Optional border width in pixels.
    *   `borderRadius?: number`: Optional border radius in pixels.
    *   `paddingX?: number`: Optional horizontal padding in pixels.
    *   `paddingY?: number`: Optional vertical padding in pixels.
    *   `fontSize?: number`: Optional font size in pixels.
    *   `fontWeight?: string`: Optional font weight (e.g., `'normal'`, `'bold'`, `'500'`).
    *   `fontFamily?: string`: Optional font family (e.g., `'Inter', sans-serif`).
    *   `iconName?: IconName`: Optional name of a Lucide icon to display on the button (maps to `lucide-react` icons).
    *   `iconPosition?: 'left' | 'right'`: Optional position of the icon relative to the text.
    *   `boxShadow?: string`: Optional CSS box-shadow value.
    *   `customClasses?: string`: Optional string of additional Tailwind CSS classes.
*   **Usage**:
    *   Managed by a state hook (e.g., `useState<ButtonState>`) in the main application component or a context.
    *   Used by `BoutonDisplay.tsx` to render the button with the current styles.
    *   Modified by `StyleControls.tsx` through user interactions.
    *   Input to and output from the `suggestStyleFlow` AI Genkit flow.

## 2. `AiStyleSuggestionInput`

*   **File**: `src/ai/flows/suggest-button-style-flow.ts` (Example path, assuming the flow is named this)
*   **Purpose**: Defines the input schema for the AI flow that suggests button styles.
*   **Fields**:
    *   `currentStyle?: Partial<ButtonState>`: Optional current style of the button, to provide context to the AI.
    *   `userPrompt: string`: The user's textual prompt describing the desired style (e.g., "Make it look more professional", "A playful button for a gaming site").
    *   `buttonPurpose?: string`: Optional description of what the button is for (e.g., "Submit form", "Learn more", "Primary call to action").
*   **Usage**:
    *   Constructed in `AiStyler.tsx` when the user requests an AI suggestion.
    *   Passed as input to the `suggestStyleFlow` Genkit flow.

## 3. `AiStyleSuggestionOutput` (Matches `ButtonState`)

*   **File**: `src/ai/flows/suggest-button-style-flow.ts` (Example path)
*   **Purpose**: Defines the output schema for the AI flow, representing the AI's suggested button style. This typically mirrors the `ButtonState` structure.
*   **Fields**: Same as `ButtonState`.
*   **Usage**:
    *   The Genkit flow `suggestStyleFlow` returns data conforming to this structure.
    *   Used by `AiStyler.tsx` to update the application's main button state with the AI's suggestion.

## 4. `StyleControlOption` (Example for UI elements)

*   **File**: `src/lib/bouton/constants.ts` or directly in `StyleControls.tsx`
*   **Purpose**: A generic structure if providing predefined options for style controls (e.g., a dropdown for font families or border styles).
*   **Fields**:
    *   `label: string`: User-visible label for the option.
    *   `value: string | number`: The actual value to be applied to the `ButtonState`.
*   **Usage**:
    *   Populating `Select` components or radio groups in `StyleControls.tsx`.

Understanding these data structures is key to modifying or extending the Bouton application's styling capabilities and AI interactions.
