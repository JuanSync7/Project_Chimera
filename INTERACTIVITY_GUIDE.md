
# Project Chimera: Interactivity Guide

This document details the key client-side interactive features within the **Project Chimera** Next.js application and how their state is managed. The application is built with React and uses client-side hooks for its dynamic behaviors.

## 1. Header Navigation & Active Section Highlighting (Scroll-Spy)

*   **State**:
    *   `activeSection: string`: Managed in `src/app/page.tsx` using `useState`. Stores the `id` of the currently visible section on the main page.
    *   `navLinks: NavLinkItem[]`: Defined in `src/lib/chimera/constants.ts`, this array holds the `id`, `href`, and `label` for each navigation item.
*   **Mechanism**:
    *   An `IntersectionObserver` is set up in the main page component's `useEffect` hook.
    *   It observes all `<section>` elements on the page that have an `id` attribute.
    *   When a section enters the viewport (based on a `threshold`), the observer's callback updates the `activeSection` state with that section's `id`.
    *   The `<Header>` component (inside `<PageShell>`) receives `activeSection` as a prop.
    *   It maps over `navLinks` to render the navigation items. If a `link.id` matches the `activeSection` state, the `active-nav` class is applied to that link, highlighting it.
*   **User Interaction**: As the user scrolls the main page, different sections become "active," and the corresponding link in the header is highlighted. Clicking a nav link scrolls the page to the respective section.

## 2. Mobile Menu Toggle

*   **State**:
    *   `isMobileMenuOpen: boolean`: Managed in `src/components/chimera/PageShell.tsx` using `useState`. Controls the visibility of the mobile menu.
*   **Mechanism**:
    *   `Header.tsx` contains a "hamburger" button, visible on mobile screens.
    *   Clicking this button calls `toggleMobileMenu` (a function passed down as a prop), which toggles the `isMobileMenuOpen` state in `PageShell`.
    *   The `MobileMenu.tsx` component receives `isMobileMenuOpen` as a prop. It conditionally renders itself based on this state.
    *   Links within `MobileMenu.tsx`, when clicked, call `closeMobileMenu` to hide the menu after navigation.
*   **User Interaction**: Tapping the hamburger icon opens/closes the mobile navigation panel. Tapping a link in the mobile menu navigates and closes the menu.

## 3. Pipeline Section Tabs (Horizontally Scrollable)

*   **Component**: `src/components/chimera/sections/PipelineSection.tsx`
*   **Data**: `PIPELINE_TABS` array from `src/lib/chimera/constants.ts`.
*   **State**:
    *   `activeStageId: string`: Local state within `PipelineSection.tsx`, initialized to the `id` of the first tab. Stores the `id` of the currently selected stage.
*   **Hook**: `useIsMobile` (from `src/hooks/use-mobile.tsx`) can be used for responsive styling, but the core functionality is now shared.
*   **Mechanism**:
    *   Renders a horizontally scrollable container with buttons, one for each stage in `PIPELINE_TABS`.
    *   Clicking a stage button updates `activeStageId` to that stage's `id`.
    *   The content area below the buttons conditionally renders the details of the stage whose `id` matches `activeStageId`.
*   **User Interaction**: Click/tap tabs to switch displayed content. On smaller screens, swipe the button container horizontally to see all stages.

## 4. Animated Rocket (`AnimatedRocket.tsx`)

*   **Component**: `src/components/chimera/AnimatedRocket.tsx` (used in `HomeSection.tsx`).
*   **State**:
    *   `stage: AnimationStage`: Manages the current phase of the animation (e.g., 'flyingRight', 'turningToFlyLeft').
    *   `animationStyle: React.CSSProperties`: Holds the dynamic CSS (`left`, `transform`, `transition`) for the rocket.
*   **Mechanism**:
    *   A series of `useEffect` hooks manage the animation sequence.
    *   One `useEffect` triggers style changes based on the current `stage`.
    *   Another `useEffect` listens for `transitionend` events on the rocket element. When a `left` transition ends, it updates the `stage` to initiate the next part of the sequence.
    *   `setTimeout` is used to sequence actions within a stage (e.g., turn, then start flying).
*   **User Interaction**: This is a purely presentational, non-interactive animation that plays automatically.

## 5. Starry Background (`StarryBackground.tsx`)

*   **Component**: `src/components/chimera/StarryBackground.tsx` (used in `src/app/page.tsx`).
*   **State**:
    *   `stars: StarData[]`: An array of star objects, each with properties for position, size, and animation timings.
*   **Hook**: `useIsMobile` determines the number of stars to generate.
*   **Mechanism**:
    *   A `useEffect` hook generates an array of star data when the component mounts.
    *   Each star is rendered as a `<div>` with fixed positioning and CSS animations (`star-item` class defined in `globals.css`).
    *   The `animationDelay` and `animationDuration` for each star are randomized to create a twinkling effect.
*   **User Interaction**: This is a purely presentational, non-interactive background effect.

These interactive elements contribute to the dynamic and engaging presentation of the Project Chimera strategic blueprint.
