'use server';
/**
 * @fileOverview A Genkit flow for summarizing peer review feedback for student assignments.
 * This flow takes an array of feedback comments and extracts key strengths, areas for improvement, and common themes.
 *
 * - summarizePeerReviewFeedback - A function that handles the summarization process.
 * - SummarizePeerReviewFeedbackInput - The input type for the summarizePeerReviewFeedback function.
 * - SummarizePeerReviewFeedbackOutput - The return type for the summarizePeerReviewFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const SummarizePeerReviewFeedbackInputSchema = z.object({
  feedback: z.array(z.string()).describe('An array of individual peer review feedback comments for a student assignment.'),
});
export type SummarizePeerReviewFeedbackInput = z.infer<typeof SummarizePeerReviewFeedbackInputSchema>;

// Output Schema
const SummarizePeerReviewFeedbackOutputSchema = z.object({
  strengths: z.array(z.string()).describe('A list of key strengths identified in the peer review feedback.'),
  areasForImprovement: z.array(z.string()).describe('A list of key areas for improvement identified in the peer review feedback.'),
  commonThemes: z.array(z.string()).describe('A list of common themes or recurring patterns across all feedback comments.'),
});
export type SummarizePeerReviewFeedbackOutput = z.infer<typeof SummarizePeerReviewFeedbackOutputSchema>;

// Wrapper function
export async function summarizePeerReviewFeedback(input: SummarizePeerReviewFeedbackInput): Promise<SummarizePeerReviewFeedbackOutput> {
  return summarizePeerReviewFeedbackFlow(input);
}

// Define the prompt
const summarizePeerReviewFeedbackPrompt = ai.definePrompt({
  name: 'summarizePeerReviewFeedbackPrompt',
  input: {schema: SummarizePeerReviewFeedbackInputSchema},
  output: {schema: SummarizePeerReviewFeedbackOutputSchema},
  prompt: `You are an AI assistant specialized in analyzing and summarizing peer review feedback for student assignments.
Your task is to review the provided feedback comments and extract key strengths, areas for improvement, and common themes.

**Instructions:**
1. Read all the feedback comments carefully.
2. Identify specific strengths of the assignment mentioned by the reviewers.
3. Identify specific areas where the assignment could be improved, as noted by the reviewers.
4. Look for any recurring ideas, patterns, or similar comments across multiple reviews to identify common themes.
5. Provide the output as a JSON object strictly adhering to the specified schema, do not include any additional text or formatting.

**Peer Review Feedback:**
{{#each feedback}}
- {{this}}
{{/each}}`,
});

// Define the flow
const summarizePeerReviewFeedbackFlow = ai.defineFlow(
  {
    name: 'summarizePeerReviewFeedbackFlow',
    inputSchema: SummarizePeerReviewFeedbackInputSchema,
    outputSchema: SummarizePeerReviewFeedbackOutputSchema,
  },
  async (input) => {
    const {output} = await summarizePeerReviewFeedbackPrompt(input);
    if (!output) {
        throw new Error('Failed to summarize peer review feedback.');
    }
    return output;
  }
);
