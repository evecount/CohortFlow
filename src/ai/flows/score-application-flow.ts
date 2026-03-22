'use server';
/**
 * @fileOverview A Genkit flow for scoring student applications based on fit and achievement.
 *
 * - scoreApplication - Evaluates an application and returns a structured score.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ScoreApplicationInputSchema = z.object({
  fullName: z.string(),
  currentRole: z.string(),
  motivation: z.string(),
  achievement: z.string(),
  cohortTheme: z.string().describe('The core theme of the cohort they are applying for.'),
});
export type ScoreApplicationInput = z.infer<typeof ScoreApplicationInputSchema>;

const ScoreApplicationOutputSchema = z.object({
  fitScore: z.number().min(0).max(100).describe('A score from 0-100 on how well the candidate fits the cohort.'),
  reasoning: z.string().describe('The explanation for the assigned score.'),
  suggestedAction: z.enum(['approve', 'waitlist', 'interview', 'reject']),
  keyStrengths: z.array(z.string()),
});
export type ScoreApplicationOutput = z.infer<typeof ScoreApplicationOutputSchema>;

export const scoreApplicationTool = ai.defineTool(
  {
    name: 'scoreApplication',
    description: 'Evaluates a student application for a specific cohort theme.',
    inputSchema: ScoreApplicationInputSchema,
    outputSchema: ScoreApplicationOutputSchema,
  },
  async (input) => {
    const {output} = await scoreApplicationPrompt(input);
    return output!;
  }
);

const scoreApplicationPrompt = ai.definePrompt({
  name: 'scoreApplicationPrompt',
  input: {schema: ScoreApplicationInputSchema},
  output: {schema: ScoreApplicationOutputSchema},
  prompt: `You are an Admissions Officer for an elite professional academy.
Evaluate the following applicant for the "{{{cohortTheme}}}" cohort.

Applicant: {{{fullName}}}
Current Role: {{{currentRole}}}
Motivation: {{{motivation}}}
Biggest Achievement: {{{achievement}}}

Evaluate their professional standing, their alignment with the cohort theme, and the potential value they bring to a peer-to-peer learning environment.`,
});

export async function scoreApplication(input: ScoreApplicationInput): Promise<ScoreApplicationOutput> {
  const {output} = await scoreApplicationPrompt(input);
  return output!;
}
