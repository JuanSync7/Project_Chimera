
# Bouton App Color Scheme

This document outlines the color scheme used for the **Bouton** application.

## 1. Global Theme Colors (CSS Variables in `src/app/globals.css`)

These colors are defined as HSL CSS variables and form the base theme. The application `<html>` tag has the `dark` class applied by default, making dark mode variables active.

*   **Primary Color (`--primary`)**: Strong Indigo (`#4B0082`)
    *   HSL (Dark Mode): `278 100% 65%` (Lighter Strong Indigo for better visibility on dark backgrounds)
    *   HSL (Light Mode): `278 100% 25%` (The Strong Indigo itself)
    *   Used for: Main interactive elements, primary buttons, active states, important accents.

*   **Background Color (`--background`)**: Light Indigo (`#E6E0EB`) for light mode, Dark Indigo for dark mode.
    *   HSL (Dark Mode): `278 15% 10%` (Dark Indigo)
    *   HSL (Light Mode): `278 32% 90%` (Light Indigo #E6E0EB)
    *   Used for: Overall application background.

*   **Accent Color (`--accent`)**: Blue Violet (`#8A2BE2`)
    *   HSL (Dark Mode): `271 76% 60%` (Lighter Blue Violet)
    *   HSL (Light Mode): `271 76% 53%` (The Blue Violet itself)
    *   Used for: Secondary interactive elements, highlights, or playful touches.

*   **Foreground Color (`--foreground` - Default Text)**:
    *   HSL (Dark Mode): `278 30% 90%` (Light Indigo text)
    *   HSL (Light Mode): `278 100% 10%` (Dark contrast for text)
    *   Used for: General text content.

*   **Card Background (`--card`)**:
    *   HSL (Dark Mode): `278 15% 15%`
    *   HSL (Light Mode): `0 0% 100%` (White)
    *   Used for: Background of card-like components (e.g., style control panels).

*   **Border Color (`--border`)**:
    *   HSL (Dark Mode): `278 15% 25%`
    *   HSL (Light Mode): `278 30% 80%`
    *   Used for: Borders on components, inputs.

*   **Muted Colors (`--muted`, `--muted-foreground`)**:
    *   Used for less emphasized text or UI elements. Values are in `globals.css`.

Refer to the `.dark { ... }` and `:root { ... }` blocks in `src/app/globals.css` for all HSL values.

## 2. Button Colors (ShadCN UI Button Variants)

*   **Primary Buttons**: Use the `default` variant of the ShadCN Button, which will automatically pick up `hsl(var(--primary))` for its background.
    ```tsx
    <Button>Primary Action</Button>
    ```
*   **Secondary/Outline Buttons**: Use `variant="outline"` or `variant="secondary"`. These will use theme colors for borders, text, and backgrounds accordingly.
    ```tsx
    <Button variant="outline">Outline Action</Button>
    <Button variant="secondary">Secondary Action</Button>
    ```
*   **Accent Buttons**: If a button needs to use the accent color, apply Tailwind classes directly or create a custom variant.
    ```tsx
    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Accent Button</Button>
    ```

## 3. Icon Colors

*   Icons from `lucide-react` should generally use `text-primary`, `text-accent`, or `text-foreground` (or `text-muted-foreground`) for their color, applied via Tailwind CSS classes.
    ```tsx
    import { Sparkles } from 'lucide-react';
    <Sparkles className="text-primary" />
    ```

This color scheme provides a modern, focused, and playful identity for the Bouton application.
