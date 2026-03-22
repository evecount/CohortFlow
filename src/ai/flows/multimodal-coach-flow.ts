'use server';
/**
 * @fileOverview A multimodal AI coach for lecturers to rehearse their presentations.
 * Accepts video/audio frames and presentation context to provide feedback.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MultimodalCoachInputSchema = z.object({
  videoFrameDataUri: z.string().optional().describe("A snapshot from the webcam as a data URI."),
  audioDataUri: z.string().optional().describe("A snippet of the lecturer speaking as a data URI."),
  presentationContext: z.string().describe("The topic or slide content being discussed."),
  lecturerGoal: z.string().default("Professional and engaging delivery"),
});
export type MultimodalCoachInput = z.infer<typeof MultimodalCoachInputSchema>;

const MultimodalCoachOutputSchema = z.object({
  feedback: z.string().describe("Direct feedback on the delivery."),
  toneAnalysis: z.string().describe("Analysis of the lecturer's tone and presence."),
  suggestions: z.array(z.string()).describe("Actionable tips for improvement."),
});
export type MultimodalCoachOutput = z.infer<typeof MultimodalCoachOutputSchema>;

export async function coachLecturer(input: MultimodalCoachInput): Promise<MultimodalCoachOutput> {
  const {output} = await coachLecturerPrompt(input);
  if (!output) throw new Error('Multimodal coach failed to generate feedback.');
  return output;
}

const coachLecturerPrompt = ai.definePrompt({
  name: 'coachLecturerPrompt',
  input: {schema: MultimodalCoachInputSchema},
  output: {schema: MultimodalCoachOutputSchema},
  prompt: `You are an elite Public Speaking Coach and Subject Matter Expert.
You are helping a lecturer rehearse a high-ticket educational presentation about: "{{{presentationContext}}}".

Goal: {{{lecturerGoal}}}

{{#if videoFrameDataUri}}Visual Reference: {{media url=videoFrameDataUri}}{{/if}}
{{#if audioDataUri}}Audio Reference: {{media url=audioDataUri}}{{/if}}

Analyze the lecturer's performance. Focus on:
1. Clarity of thought and alignment with the academic source.
2. Presence and engagement (if visual/audio provided).
3. Professionalism suitable for a premium cohort.

Provide critical but encouraging feedback.`,
});
