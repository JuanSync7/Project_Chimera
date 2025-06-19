
# Bouton App Interactivity Guide

This document details the key client-side interactive features within the **Bouton** application and how their state is managed.

## 1. Button Style Manipulation (`StyleControls.tsx` & `src/app/page.tsx`)

The core interactivity of Bouton revolves around changing the visual style of the displayed button.

*   **State**: A `buttonState` object (type `ButtonState`) is managed in `src/app/page.tsx` using `useState`. This object holds all current style properties of the button (text, colors, padding, border, etc.).
*   **Mechanism**:
    *   The `StyleControls.tsx` component receives the `buttonState` and a callback function (e.g., `onStyleChange` which is `setButtonState`).
    *   `StyleControls.tsx` contains various UI elements (sliders, color pickers, text inputs, select dropdowns from ShadCN UI) that correspond to properties in `ButtonState`.
    *   When a user interacts with a control (e.g., drags a slider for `borderRadius`), the control's `onChange` handler updates the relevant property in a local temporary state or directly calls `onStyleChange` with the updated `ButtonState`.
    *   For example, changing the background color would update `buttonState.backgroundColor`.
*   **Live Preview**:
    *   The `BoutonDisplay.tsx` component receives the `buttonState` as a prop.
    *   It dynamically applies the styles from `buttonState` to the rendered `<button>` element (likely a ShadCN `Button` component or a custom styled one).
    *   Any change to `buttonState` in `src/app/page.tsx` causes `BoutonDisplay.tsx` to re-render, providing an immediate live preview.

## 2. AI-Powered Style Suggestion (`AiStyler.tsx` & `src/app/page.tsx`)

Bouton allows users to get AI-generated style suggestions for their button.

*   **State**:
    *   The user's textual prompt is managed locally within `AiStyler.tsx` (e.g., using `useState` for a text input).
    *   A loading state (e.g., `isAiStyling`) can be used in `AiStyler.tsx` or `src/app/page.tsx` to indicate when an AI request is in progress.
*   **Mechanism**:
    *   The `AiStyler.tsx` component provides an input field for the user to describe their desired style (e.g., "a modern, sleek button").
    *   It also has a "Get AI Style" button.
    *   When clicked, `AiStyler.tsx` calls a handler function (e.g., `handleAiStyle`) passed from `src/app/page.tsx`.
    *   This handler function in `src/app/page.tsx` will:
        1.  Construct an `AiStyleSuggestionInput` object containing the user's prompt and optionally the `currentStyle` from `buttonState`.
        2.  Set a loading state to true.
        3.  Invoke the Genkit flow (e.g., `suggestStyleFlow`) defined in `src/ai/flows/suggest-button-style-flow.ts`.
        4.  Await the `AiStyleSuggestionOutput` (which should conform to `ButtonState`).
        5.  Update the main `buttonState` in `src/app/page.tsx` with the AI's suggested style.
        6.  Set the loading state to false.
*   **Error Handling**:
    *   The AI flow invocation should be wrapped in a try/catch block.
    *   Errors (e.g., API failures, invalid suggestions) should be displayed to the user, possibly using the `useToast` hook and ShadCN `Toast` components.

## 3. Responsive Behavior with `useIsMobile` Hook (`src/hooks/use-mobile.ts`)

The `useIsMobile` hook can be used if the layout or behavior of controls needs to adapt for smaller screens, although Bouton's core interface might be simple enough not to require major changes.

*   **Purpose**: Allows components to adapt their rendering or behavior based on viewport width.
*   **Usage Examples**:
    *   If `StyleControls.tsx` has many options, it might switch to a more compact layout or use a dialog/sheet for some settings on mobile.

## 4. General UI State (ShadCN Components)

Many ShadCN UI components (like `Select`, `Dialog`, `Popover`) manage their own internal open/close states. Bouton leverages these for a polished user experience without needing to manually manage all such states.

This guide covers the primary interactive elements in Bouton. Understanding these state management patterns and data flows is key to extending its features.
