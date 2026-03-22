'use server';
/**
 * @fileOverview A Genkit flow for generating a cohort curriculum.
 *
 * - generateCurriculum - Turns a topic into a week-by-week schedule.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCurriculumInputSchema = z.object({
  topic: z.string().describe('The main subject of the cohort.'),
  durationWeeks: z.number().default(4),
  targetAudience: z.string().describe('Who the cohort is for (e.g., Senior Managers, New Grads).'),
});
export type GenerateCurriculumInput = z.infer<typeof GenerateCurriculumInputSchema>;

const CurriculumWeekSchema = z.object({
  weekNumber: z.number(),
  theme: z.string(),
  learningObjectives: z.array(z.string()),
  sessions: z.array(z.object({
    title: z.string(),
    type: z.enum(['live_workshop', 'peer_review', 'q_and_a']),
    description: z.string(),
  })),
});

const GenerateCurriculumOutputSchema = z.object({
  programName: z.string(),
  weeks: z.array(CurriculumWeekSchema),
  suggestedPrerequisites: z.array(z.string()),
});
export type GenerateCurriculumOutput = z.infer<typeof GenerateCurriculumOutputSchema>;

export const generateCurriculumTool = ai.defineTool(
  {
    name: 'generateCurriculum',
    description: 'Generates a full week-by-week curriculum for a cohort-based course.',
    inputSchema: GenerateCurriculumInputSchema,
    outputSchema: GenerateCurriculumOutputSchema,
  },
  async (input) => {
    const {output} = await generateCurriculumPrompt(input);
    return output!;
  }
);

const generateCurriculumPrompt = ai.definePrompt({
  name: 'generateCurriculumPrompt',
  input: {schema: GenerateCurriculumInputSchema},
  output: {schema: GenerateCurriculumOutputSchema},
  prompt: `You are an expert Instructional Designer.
Create a high-ticket, high-impact curriculum for a cohort on the topic of "{{{topic}}}".

Duration: {{{durationWeeks}}} weeks
Target Audience: {{{targetAudience}}}

Focus on synchronous learning, peer-to-peer interaction, and practical, hands-on outcomes that justify a premium price.`,
});

export async function generateCurriculum(input: GenerateCurriculumInput): Promise<GenerateCurriculumOutput> {
  const {output} = await generateCurriculumPrompt(input);
  return output!;
}
