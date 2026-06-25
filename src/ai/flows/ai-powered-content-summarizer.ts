// AI features disabled for static build
/**
 * @fileOverview AI-powered content summarizer flow (stubbed for static export).
 *
 * - summarizeContent - A function that summarizes input content using AI.
 * - SummarizeContentInput - The input type for the summarizeContent function.
 * - SummarizeContentOutput - The output type for the summarizeContent function.
 */

export type SummarizeContentInput = {
  content: string;
};

export type SummarizeContentOutput = {
  summary: string;
};

export async function summarizeContent(input: SummarizeContentInput): Promise<SummarizeContentOutput> {
  return {
    summary: input.content.slice(0, 200),
  };
}
