
# Project Chimera: Interactivity Guide

This document details the key client-side interactive features within the **Project Chimera** presentation application and how their state is managed. The application is built with React and uses client-side JavaScript for its dynamic behaviors.

## 1. Header Navigation & Active Section Highlighting (Scroll-Spy)

*   **State**:
    *   `activeSection: string`: Managed in `Project_Chimera/App.tsx` (or `page.tsx` if Next.js) using `useState`. Stores the `id` of the currently visible section.
    *   `navLinks: NavLinkItem[]`: Defined in `Project_Chimera/constants.ts`, this array holds the `id`, `href`, and `label` for each navigation item.
*   **Mechanism**:
    *   An `IntersectionObserver` is set up in `App.tsx`'s `useEffect` hook.
    *   It observes all `<section>` elements on the page that have an `id` attribute.
    *   When a section enters the viewport (based on a `threshold`, e.g., 0.4), the observer's callback updates the `activeSection` state with that section's `id`.
    *   The `Header.tsx` component receives `activeSection` and `navLinks` as props.
    *   It maps over `navLinks` to render the navigation items. If a `link.id` matches the `activeSection` state, the `active-nav` class is applied to that link, highlighting it.
*   **User Interaction**: As the user scrolls the page, different sections become "active," and the corresponding link in the header is highlighted. Clicking a nav link scrolls the page to the respective section.

## 2. Mobile Menu Toggle

*   **State**:
    *   `isMobileMenuOpen: boolean`: Managed in `Project_Chimera/App.tsx` (or `page.tsx`) using `useState`. Controls the visibility of the mobile menu.
*   **Mechanism**:
    *   `Header.tsx` contains a "hamburger" button, visible on mobile screens.
    *   Clicking this button calls `onMobileMenuToggle` (a prop passed from `App.tsx`), which toggles the `isMobileMenuOpen` state.
    *   The `MobileMenu.tsx` component receives `isMobileMenuOpen` as a prop. It conditionally renders itself based on this state.
    *   Links within `MobileMenu.tsx`, when clicked, call `onLinkClick` (passed from `App.tsx`), which sets `isMobileMenuOpen` to `false` to close the menu.
*   **User Interaction**: Tapping the hamburger icon opens/closes the mobile navigation panel. Tapping a link in the mobile menu navigates and closes the menu.

## 3. Pipeline Section Tabs (Desktop) / Roulette (Mobile)

*   **Component**: `Project_Chimera/components/sections/PipelineSection.tsx`
*   **Data**: `PIPELINE_TABS` array from `Project_Chimera/constants.ts`.
*   **Desktop State**:
    *   `activeDesktopStageId: string`: Local state within `PipelineSection.tsx`, initialized to the `id` of the first tab. Stores the `id` of the currently selected tab.
*   **Mobile State**:
    *   `currentMobileStageIndex: number`: Local state, initialized to `0`. Stores the index of the currently displayed stage in the roulette.
*   **Hook**: `useIsMobile` (from `src/hooks/use-mobile.tsx`) determines if the mobile or desktop layout should be rendered.
*   **Desktop Mechanism**:
    *   Renders a list of buttons, one for each tab in `PIPELINE_TABS`.
    *   Clicking a tab button updates `activeDesktopStageId` to that tab's `id`.
    *   The content area below the tabs conditionally renders the details of the stage whose `id` matches `activeDesktopStageId`.
*   **Mobile Mechanism**:
    *   Renders the current stage's title as a button (linking to its detailed view) flanked by "Previous" and "Next" arrow buttons.
    *   Clicking "Previous" or "Next" updates `currentMobileStageIndex` to cycle through the `PIPELINE_TABS`.
    *   The content area below displays the summary of the stage at `PIPELINE_TABS[currentMobileStageIndex]`.
*   **User Interaction**:
    *   Desktop: Click tabs to switch displayed content.
    *   Mobile: Click arrows to cycle through stage summaries. Click stage title to navigate to full details.

## 4. Animated Rocket (`AnimatedRocket.tsx`)

*   **Component**: `Project_Chimera/components/chimera/AnimatedRocket.tsx` (used in `HomeSection.tsx`).
*   **State**:
    *   `stage: AnimationStage`: Manages the current phase of the animation (e.g., 'flyingRight', 'turningToFlyLeft').
    *   `animationStyle: React.CSSProperties`: Holds the dynamic CSS (`left`, `transform`, `transition`) for the rocket.
*   **Mechanism**:
    *   A series of `useEffect` hooks manage the animation sequence.
    *   One `useEffect` triggers style changes based on the current `stage`.
    *   Another `useEffect` listens for `transitionend` events on the rocket element. When a `left` transition ends (meaning it has flown across the screen), it updates the `stage` to initiate the next part of the sequence (e.g., turning).
    *   `setTimeout` is used to sequence actions within a stage (e.g., turn, then start flying).
*   **User Interaction**: This is a purely presentational, non-interactive animation that plays automatically.

## 5. Starry Background (`StarryBackground.tsx`)

*   **Component**: `Project_Chimera/components/chimera/StarryBackground.tsx` (used in `page.tsx`).
*   **State**:
    *   `stars: StarData[]`: An array of star objects, each with properties for position, size, and animation timings.
*   **Hook**: `useIsMobile` determines the number of stars to generate.
*   **Mechanism**:
    *   A `useEffect` hook generates an array of star data when the component mounts or `isMobile` changes.
    *   Each star is rendered as a `<div>` with absolute positioning and CSS animations (`star-item` class defined in `globals.css` or `index.html`).
    *   The `animationDelay` and `animationDuration` for each star are randomized to create a twinkling effect.
*   **User Interaction**: This is a purely presentational, non-interactive background effect.

These interactive elements contribute to the dynamic and engaging presentation of the Project Chimera strategic blueprint.
