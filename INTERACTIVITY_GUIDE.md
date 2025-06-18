
# Project Chimera Interactivity Guide

This document details the key client-side interactive features within the Project Chimera application and how their state is managed. Understanding these mechanisms is crucial for modifying or extending the application's dynamic behaviors.

## 1. Main Page Section Highlighting (`src/app/page.tsx`)

The main page (`src/app/page.tsx`) implements a scroll-based navigation highlighting feature.

*   **State**: An `activeSection` state variable (string) is maintained within the `HomePageContent` component. It stores the `id` of the currently visible section.
*   **Mechanism**:
    *   An `IntersectionObserver` is set up in a `useEffect` hook.
    *   This observer monitors all `<section>` elements on the page that have an `id` attribute.
    *   When a section enters the viewport and meets the `threshold` (0.4, meaning 40% of the section is visible), the observer updates the `activeSection` state with that section's `id`.
*   **Usage**:
    *   The `NAV_LINKS` array in `src/lib/chimera/constants.ts` defines navigation items, each with an `id` that should correspond to a `<section>` `id` on the main page (e.g., `overview`, `architecture`).
    *   The `activeSection` state is passed as a prop to the `<PageShell>` component.
    *   `<PageShell>` then passes `activeSection` to `<Header>` and `<MobileMenu>`.
    *   In `<Header>` and `<MobileMenu>`, this `activeSection` prop is used to apply an 'active' style (e.g., `active-nav` class) to the navigation link whose `id` matches the current `activeSection`.

## 2. Mobile Menu Navigation (`src/components/chimera/PageShell.tsx`, `Header.tsx`, `MobileMenu.tsx`)

The application features a collapsible mobile menu for navigation on smaller screens.

*   **State**: An `isMobileMenuOpen` state variable (boolean) is managed within the `<PageShell>` component.
*   **Mechanism**:
    *   `PageShell` defines `toggleMobileMenu` and `closeMobileMenu` callback functions.
    *   `toggleMobileMenu` is passed to the `<Header>` component and is triggered by clicking the hamburger icon button (`#mobile-menu-button`). This flips the `isMobileMenuOpen` state.
    *   `closeMobileMenu` is passed to the `<MobileMenu>` component and is triggered when a navigation link within the mobile menu is clicked. This sets `isMobileMenuOpen` to `false`.
*   **Visibility**:
    *   The `<MobileMenu>` component's rendering is conditional on the `isMobileMenuOpen` state. It only renders if `isMobileMenuOpen` is `true`.
    *   The `aria-expanded` attribute on the mobile menu button in `<Header>` is also tied to this state.

## 3. Pipeline Section Tabs (`src/components/chimera/sections/PipelineSection.tsx`)

The "AI-Powered Design Pipeline" section uses a tabbed interface to display different stages.

*   **State**: An `activeTab` state variable (string) is managed within the `<PipelineSection>` component. It stores the `id` of the currently selected tab.
*   **Mechanism**:
    *   The `PIPELINE_TABS` array in `src/lib/chimera/constants.ts` defines the data for each tab, including a unique `id`.
    *   When a tab button is clicked, its `onClick` handler calls `setActiveTab` with the `id` of the clicked tab.
*   **Content Display**:
    *   The content area renders the details of the `PipelineTab` whose `id` matches the current `activeTab` state.
    *   CSS opacity and positioning are used to smoothly transition between tab content panels, ensuring only the active tab's content is fully visible and interactive.
    *   Tab buttons are styled differently based on whether their `id` matches `activeTab` (using `tab-button-active` vs. `tab-button-inactive` classes).

## 4. Responsive Behavior with `useIsMobile` Hook (`src/hooks/use-mobile.ts`)

The `useIsMobile` hook provides a simple way to detect if the application is being viewed on a mobile-sized screen.

*   **Purpose**: Allows components to adapt their rendering or behavior based on viewport width.
*   **Mechanism**:
    *   It uses `window.matchMedia` to check if the viewport width is less than a defined breakpoint (768px).
    *   It sets an `isMobile` state (boolean) and updates it on initial load and when the viewport resizes across the breakpoint.
*   **Usage Examples**:
    *   **`StarryBackground.tsx`**: Adjusts the number and size of stars rendered based on the return value of `useIsMobile` for performance and visual balance.
    *   **`SidebarProvider.tsx` (from ShadCN, used internally by `Sidebar` components if they were present)**: Uses `useIsMobile` to determine whether to render a collapsible icon-based sidebar or an off-canvas mobile sheet. Although Project Chimera doesn't prominently feature a persistent sidebar, the hook's utility is demonstrated here.

## 5. Client-Side Data Fetching and State (Illustrative - Not Heavily Used in Chimera Currently)

While Project Chimera primarily presents static content enhanced with client-side interactivity, future extensions involving data fetching would typically use:

*   **`useEffect`**: For fetching data on component mount if it's client-side only.
*   **`useState`**: To store the fetched data and manage loading/error states.
*   **Server Components with Client Component Consumers**: For Next.js App Router, data fetching is often done in Server Components and passed as props to Client Components, or Client Components can use `React.use()` with async functions/promises for data fetching if needed during rendering.

This guide covers the primary client-side interactive elements in Project Chimera. Understanding these patterns will help in maintaining and extending the application's dynamic features.
