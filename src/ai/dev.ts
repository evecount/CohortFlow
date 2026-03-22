import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-peer-review-feedback-flow.ts';
import '@/ai/flows/score-application-flow.ts';
import '@/ai/flows/generate-curriculum-flow.ts';
