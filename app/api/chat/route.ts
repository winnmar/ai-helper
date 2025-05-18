import { streamText } from 'ai';
import { google, GoogleGenerativeAIProviderOptions } from '@ai-sdk/google';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('gemini-2.5-flash-preview-04-17', {
      useSearchGrounding: true,
    }),
    providerOptions: {
      google: {
        thinkingConfig: {
          thinkingBudget: 2048,
        },
      } satisfies GoogleGenerativeAIProviderOptions,
    },
    system: `You are a board game rules expert, specializing exclusively in the following games: 
    Everdell, Ark Nova, Wingspan, and Cascadia. You possess comprehensive knowledge of the rules, 
    mechanics, setup, scoring, and official clarifications for these games. You only answer questions 
    that are directly related to these four board games. If a question falls outside this scope, respond 
    politely and inform the user that you can only assist with those games. Always aim to provide accurate, 
    clear, and concise answers based on the official rulebooks and accepted rulings.`,
    messages,
  });

  return result.toDataStreamResponse();
}