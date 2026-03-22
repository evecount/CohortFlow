'use server';
/**
 * @fileOverview A Genkit flow for generating a full course from an academic PDF.
 *
 * - generateClassFromPdf - Translates a research paper into a structured curriculum.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateClassFromPdfInputSchema = z.object({
  pdfDataUri: z
    .string()
    .describe(
      "The PDF of the research paper as a data URI (base64). Expected format: 'data:application/pdf;base64,<encoded_data>'."
    ),
  targetAudience: z.string().default('Senior Professionals'),
  desiredFormat: z.enum(['intensive_workshop', '8_week_program', 'masterclass']).default('intensive_workshop'),
});
export type GenerateClassFromPdfInput = z.infer<typeof GenerateClassFromPdfInputSchema>;

const ClassModuleSchema = z.object({
  title: z.string(),
  keyTakeaways: z.array(z.string()),
  applicationExercise: z.string().describe('A practical exercise based on the paper\'s methodology.'),
  slidesOutline: z.array(z.object({
    heading: z.string(),
    bulletPoints: z.array(z.string()),
    visualDescription: z.string().describe('Suggested visual or chart for this slide.'),
  })),
});

const GenerateClassFromPdfOutputSchema = z.object({
  courseTitle: z.string(),
  executiveSummary: z.string().describe('A high-level summary of the paper for a non-academic audience.'),
  targetOutcomes: z.array(z.string()),
  modules: z.array(ClassModuleSchema),
  citation: z.string().describe('Proper academic citation of the source paper.'),
});
export type GenerateClassFromPdfOutput = z.infer<typeof GenerateClassFromPdfOutputSchema>;

export async function generateClassFromPdf(input: GenerateClassFromPdfInput): Promise<GenerateClassFromPdfOutput> {
  const {output} = await generateClassFromPdfPrompt(input);
  if (!output) throw new Error('AI failed to process the PDF content.');
  return output;
}

const generateClassFromPdfPrompt = ai.definePrompt({
  name: 'generateClassFromPdfPrompt',
  input: {schema: GenerateClassFromPdfInputSchema},
  output: {schema: GenerateClassFromPdfOutputSchema},
  prompt: `You are an elite Instructional Designer specializing in "Academic-to-Practitioner" translation.

Your task is to take the provided research paper (PDF) and transform its core insights into a premium, high-ticket educational program.

**Paper:** {{media url=pdfDataUri}}
**Target Audience:** {{{targetAudience}}}
**Format:** {{{desiredFormat}}}

**Instructions:**
1. Extract the primary innovation or methodology from the paper.
2. Translate academic jargon into professional, outcome-oriented language.
3. Create a structured curriculum where each module leads to a practical business or technical outcome.
4. For each module, provide a set of slide outlines that an instructor could use to teach the material.
5. Ensure the "Citation" field correctly identifies the authors, year, and arXiv ID or DOI if present.

Focus on practical utility. Why does this research matter to the audience? How can they use it tomorrow?`,
});
