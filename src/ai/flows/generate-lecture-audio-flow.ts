
'use server';
/**
 * @fileOverview A Genkit flow for generating AI audio lectures for slides.
 * Uses the gemini-2.5-flash-preview-tts model.
 */

import {ai} from '@/ai/genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {z} from 'genkit';
import wav from 'wav';

const GenerateLectureAudioInputSchema = z.object({
  text: z.string().describe('The slide content or heading to convert to speech.'),
  voice: z.enum(['Algenib', 'Achernar', 'Pherkad']).default('Algenib'),
});
export type GenerateLectureAudioInput = z.infer<typeof GenerateLectureAudioInputSchema>;

const GenerateLectureAudioOutputSchema = z.object({
  mediaUri: z.string().describe('The base64 encoded data URI of the generated WAV audio.'),
});
export type GenerateLectureAudioOutput = z.infer<typeof GenerateLectureAudioOutputSchema>;

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    let bufs = [] as any[];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

export async function generateLectureAudio(input: GenerateLectureAudioInput): Promise<GenerateLectureAudioOutput> {
  return generateLectureAudioFlow(input);
}

const generateLectureAudioFlow = ai.defineFlow(
  {
    name: 'generateLectureAudioFlow',
    inputSchema: GenerateLectureAudioInputSchema,
    outputSchema: GenerateLectureAudioOutputSchema,
  },
  async (input) => {
    const { media } = await ai.generate({
      model: googleAI.model('gemini-2.5-flash-preview-tts'),
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: input.voice },
          },
        },
      },
      prompt: `Speak the following lecture content clearly and professionally for a high-ticket educational program: ${input.text}`,
    });

    if (!media) {
      throw new Error('Failed to generate audio media.');
    }

    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );

    return {
      mediaUri: 'data:audio/wav;base64,' + (await toWav(audioBuffer)),
    };
  }
);
