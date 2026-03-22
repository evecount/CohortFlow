
'use server';
/**
 * @fileOverview A Genkit flow for generating high-end cinematic video teasers using Veo models.
 */

import {ai} from '@/ai/genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {z} from 'genkit';

const GenerateTeaserVideoInputSchema = z.object({
  prompt: z.string().describe('Description of the teaser video to generate.'),
  aspectRatio: z.enum(['16:9', '9:16']).default('16:9'),
});
export type GenerateTeaserVideoInput = z.infer<typeof GenerateTeaserVideoInputSchema>;

const GenerateTeaserVideoOutputSchema = z.object({
  videoUri: z.string().describe('The base64 encoded video data URI (or a temporary URL if available).'),
});
export type GenerateTeaserVideoOutput = z.infer<typeof GenerateTeaserVideoOutputSchema>;

export async function generateTeaserVideo(input: GenerateTeaserVideoInput): Promise<GenerateTeaserVideoOutput> {
  return generateTeaserVideoFlow(input);
}

const generateTeaserVideoFlow = ai.defineFlow(
  {
    name: 'generateTeaserVideoFlow',
    inputSchema: GenerateTeaserVideoInputSchema,
    outputSchema: GenerateTeaserVideoOutputSchema,
  },
  async (input) => {
    // Note: Video generation is slow. We use Veo 3 for preview.
    let { operation } = await ai.generate({
      model: googleAI.model('veo-3.0-generate-preview'),
      prompt: `Create a cinematic, high-end educational teaser video. Mood: Professional, Inspiring, High-Ticket. Subject: ${input.prompt}`,
      config: {
        aspectRatio: '16:9',
      },
    });

    if (!operation) {
      throw new Error('Video generation operation failed to initialize.');
    }

    // Polling for completion (simplified for demo purposes)
    let attempts = 0;
    while (!operation.done && attempts < 20) {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      operation = await ai.checkOperation(operation);
      attempts++;
    }

    if (operation.error) {
      throw new Error('Video generation failed: ' + operation.error.message);
    }

    const videoPart = operation.output?.message?.content.find((p) => !!p.media);
    if (!videoPart?.media) {
      throw new Error('Video output not found in completed operation.');
    }

    // In a production app, you'd download and host this. 
    // For this prototype, we return the media URL.
    return {
      videoUri: videoPart.media.url,
    };
  }
);
