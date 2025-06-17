// src/ai/flows/suggest-button-style.ts
'use server';

/**
 * @fileOverview A flow to suggest button styles based on a description of the button's purpose.
 *
 * - suggestButtonStyle - A function that handles the button style suggestion process.
 * - SuggestButtonStyleInput - The input type for the suggestButtonStyle function.
 * - SuggestButtonStyleOutput - The return type for the suggestButtonStyle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestButtonStyleInputSchema = z.object({
  description: z
    .string()
    .describe(
      'The description of the button, including its purpose and context.'
    ),
});
export type SuggestButtonStyleInput = z.infer<typeof SuggestButtonStyleInputSchema>;

const SuggestButtonStyleOutputSchema = z.object({
  color: z
    .string()
    .describe('The suggested text color for the button (e.g., hex code like #FFFFFF).'),
  backgroundColor: z
    .string()
    .describe('The suggested background color for the button (e.g., hex code like #4B0082).'),
  accentColor: z
    .string()
    .describe('The suggested accent color for the button, could be used for border or shadow (e.g., hex code like #8A2BE2).'),
  typography: z
    .string()
    .describe('The suggested font family for the button (e.g., "Arial", "Inter").'),
  icon: z.string().describe('The suggested Lucide icon name for the button (e.g., "Check", "ArrowRight", "Smile"). If no icon is suitable, provide an empty string or "None".'),
});
export type SuggestButtonStyleOutput = z.infer<typeof SuggestButtonStyleOutputSchema>;


const prompt = ai.definePrompt({
  name: 'suggestButtonStylePrompt',
  input: {schema: SuggestButtonStyleInputSchema},
  output: {schema: SuggestButtonStyleOutputSchema},
  prompt: `You are an AI assistant specializing in UI/UX design. Based on the description of the button provided, suggest a visually appealing and contextually appropriate button style.
  
  Description: {{{description}}}

  Provide specific HEX color codes for "color", "backgroundColor", and "accentColor".
  For "typography", suggest a common web font family name (e.g., "Inter", "Roboto", "Open Sans").
  For "icon", suggest a relevant icon name from the Lucide icon library (https://lucide.dev/). If no icon is appropriate, return an empty string or "None".

  Output a JSON object containing the suggested "color", "backgroundColor", "accentColor", "typography", and "icon" for the button.
  Example valid output:
  {
    "color": "#FFFFFF",
    "backgroundColor": "#007AFF",
    "accentColor": "#FFD700",
    "typography": "Inter",
    "icon": "ArrowRight"
  }
  Another example (no icon):
  {
    "color": "#333333",
    "backgroundColor": "#EEEEEE",
    "accentColor": "#CCCCCC",
    "typography": "Arial",
    "icon": ""
  }
`,
});

const suggestButtonStyleFlow = ai.defineFlow(
  {
    name: 'suggestButtonStyleFlow',
    inputSchema: SuggestButtonStyleInputSchema,
    outputSchema: SuggestButtonStyleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error("AI failed to generate button style suggestions.");
    }
    // Ensure icon is a string, even if empty, to match schema.
    // The schema already defines icon as string, so this check is more for robustness if AI returns null/undefined.
    // However, zod should handle this if the AI output doesn't strictly match.
    // For safety, we can ensure it's a string.
    if (output.icon === null || typeof output.icon === 'undefined') {
        output.icon = "";
    }
    return output;
  }
);

// Export the flow itself if it's intended to be called directly as a server action
export async function suggestButtonStyle(input: SuggestButtonStyleInput): Promise<SuggestButtonStyleOutput> {
  return suggestButtonStyleFlow(input);
}

