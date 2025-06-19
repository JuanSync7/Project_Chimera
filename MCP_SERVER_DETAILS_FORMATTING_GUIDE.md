
# Guide for Structuring Core Logic (e.g., AI Interaction) in Bouton

The **Bouton** application is significantly simpler than the "Project Chimera" for which the original `MCP_SERVER_DETAILS_FORMATTING_GUIDE.md` was intended. Bouton does not have a complex "MCP Server." However, we can adapt the spirit of that guide to discuss how core logic, particularly AI interactions, might be structured if Bouton evolves.

This document focuses on the AI styling flow as the primary "intelligent component" in Bouton.

## 1. AI Styling Flow (`src/ai/flows/suggest-button-style-flow.ts`)

This Genkit flow is the central piece of AI functionality in Bouton.

*   **Purpose**: To take a user's prompt and optionally the current button style, and return a new suggested `ButtonState`.
*   **Structure (Conceptual, following Genkit guidelines):**
    ```typescript
    // src/ai/flows/suggest-button-style-flow.ts
    'use server';
    /**
     * @fileOverview AI flow for suggesting button styles.
     * - suggestStyleFlow - Main function to generate button style suggestions.
     * - AiStyleSuggestionInput - Input type for the flow.
     * - AiStyleSuggestionOutput - Output type (mirrors ButtonState).
     */

    import { ai } from '@/ai/genkit';
    import { z } from 'genkit';
    import type { ButtonState } from '@/lib/bouton/types'; // Assuming ButtonState type

    // Define Zod schema for ButtonState (or import if already defined elsewhere)
    const ButtonStateSchema = z.object({
      text: z.string().optional(),
      textColor: z.string().optional().describe("CSS color for text, e.g., #RRGGBB"),
      backgroundColor: z.string().optional().describe("CSS color for background, e.g., #RRGGBB"),
      // ... other ButtonState fields as Zod types with descriptions
      borderColor: z.string().optional(),
      borderWidth: z.number().optional(),
      borderRadius: z.number().optional(),
      paddingX: z.number().optional(),
      paddingY: z.number().optional(),
      fontSize: z.number().optional(),
      fontWeight: z.string().optional(),
      fontFamily: z.string().optional(),
      iconName: z.string().optional().describe("Name of a lucide-react icon, e.g., 'Sparkles'"),
      iconPosition: z.enum(['left', 'right']).optional(),
      boxShadow: z.string().optional().describe("CSS box-shadow value"),
      customClasses: z.string().optional().describe("Additional Tailwind CSS classes"),
    });
    
    export const AiStyleSuggestionInputSchema = z.object({
      currentStyle: ButtonStateSchema.partial().optional().describe("Current style of the button, if any."),
      userPrompt: z.string().describe("User's textual prompt for desired style."),
      buttonPurpose: z.string().optional().describe("The purpose of the button, e.g., 'Submit form'."),
    });
    export type AiStyleSuggestionInput = z.infer<typeof AiStyleSuggestionInputSchema>;
    
    // Output is effectively a complete ButtonState
    export const AiStyleSuggestionOutputSchema = ButtonStateSchema;
    export type AiStyleSuggestionOutput = z.infer<typeof AiStyleSuggestionOutputSchema>;

    // Main exported function to call the flow
    export async function suggestStyleFlow(input: AiStyleSuggestionInput): Promise<AiStyleSuggestionOutput> {
      return internalSuggestStyleFlow(input);
    }

    const stylePrompt = ai.definePrompt({
      name: 'boutonStylePrompt',
      input: { schema: AiStyleSuggestionInputSchema },
      output: { schema: AiStyleSuggestionOutputSchema },
      prompt: `You are an expert UI/UX designer specializing in button design.
      The user wants a button style.
      User prompt: {{{userPrompt}}}
      {{#if buttonPurpose}}Button's purpose: {{{buttonPurpose}}}{{/if}}
      {{#if currentStyle}}Current button style for context: 
        Text: {{currentStyle.text}}
        Text Color: {{currentStyle.textColor}}
        Background Color: {{currentStyle.backgroundColor}}
        Border Radius: {{currentStyle.borderRadius}}px
        {{!-- Add other currentStyle fields as needed --}}
      {{/if}}

      Provide a new complete button style (all fields from ButtonStateSchema) that meets the user's request.
      Use the application's theme colors where appropriate:
      - Primary: Strong Indigo (#4B0082)
      - Background: Light Indigo (#E6E0EB) for light mode UI
      - Accent: Blue Violet (#8A2BE2)
      - Font: Inter

      Ensure all color values are in hex format (e.g., #RRGGBB).
      For borderRadius, paddingX, paddingY, fontSize, borderWidth, provide numeric values (pixels).
      Suggest a relevant lucide-react iconName if applicable.
      `,
    });
    
    const internalSuggestStyleFlow = ai.defineFlow(
      {
        name: 'internalSuggestStyleFlow',
        inputSchema: AiStyleSuggestionInputSchema,
        outputSchema: AiStyleSuggestionOutputSchema,
      },
      async (input) => {
        const { output } = await stylePrompt(input);
        if (!output) {
          throw new Error("AI failed to suggest a style.");
        }
        // Potentially add validation or minor adjustments here before returning
        return output;
      }
    );
    ```

## 2. Invoking the AI Flow (from `src/app/page.tsx` or `AiStyler.tsx`)

The AI flow is invoked when the user requests an AI-generated style.

*   **Responsibility**: The component responsible for the AI interaction (e.g., `AiStyler.tsx` or its parent `src/app/page.tsx`) will:
    1.  Collect the user's prompt and the current button state.
    2.  Call the exported `suggestStyleFlow` function.
    3.  Handle the promise (e.g., update the main button state with the suggestion, manage loading states, show errors via toasts).

    ```tsx
    // Example within a component
    import { suggestStyleFlow, type AiStyleSuggestionInput } from '@/ai/flows/suggest-button-style-flow';
    import { toast } from '@/components/ui/use-toast'; // ShadCN toast

    // ...
    const handleAiStyleRequest = async (prompt: string, currentButtonState: ButtonState) => {
      setIsLoading(true);
      try {
        const input: AiStyleSuggestionInput = {
          userPrompt: prompt,
          currentStyle: currentButtonState, // Pass relevant parts
          // buttonPurpose: "Primary action" // Optional
        };
        const suggestedStyle = await suggestStyleFlow(input);
        onNewStyle(suggestedStyle); // Callback to update the main button state
      } catch (error) {
        console.error("AI Styler Error:", error);
        toast({
          variant: "destructive",
          title: "AI Styling Failed",
          description: error instanceof Error ? error.message : "Could not generate style.",
        });
      } finally {
        setIsLoading(false);
      }
    };
    ```

## 3. Considerations for Bouton's "Core Logic"

*   **State Management**: The primary `ButtonState` should be managed centrally (e.g., in `src/app/page.tsx` or a React Context) to be accessible by `BoutonDisplay`, `StyleControls`, and `AiStyler`.
*   **Modularity**: Keep AI interaction logic separate from UI components as much as possible. The Genkit flow handles the AI part; UI components handle user input and display.
*   **Error Handling**: Robust error handling for AI flow calls is important for user experience.
*   **Simplicity**: For Bouton, the "server-side" logic is encapsulated within the Genkit flow. There isn't a persistent backend server in the traditional sense beyond what Genkit and Next.js provide for server actions/functions.

This structure ensures that the AI styling functionality is well-organized, maintainable, and leverages the capabilities of Genkit effectively for the Bouton application.
