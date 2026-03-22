
"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, MessageSquare, ListCheck, Loader2 } from 'lucide-react';
import { summarizePeerReviewFeedback, SummarizePeerReviewFeedbackOutput } from '@/ai/flows/summarize-peer-review-feedback-flow';

export default function PeerReviewPage() {
  const [feedback, setFeedback] = useState("");
  const [summarizing, setSummarizing] = useState(false);
  const [summary, setSummary] = useState<SummarizePeerReviewFeedbackOutput | null>(null);

  const mockFeedbackList = [
    "The data cleaning section was really thorough, but the visualization on page 4 could use more descriptive labels.",
    "Excellent use of backpropagation theory. Maybe try to optimize the learning rate as a next step?",
    "Overall solid submission. I found the conclusion a bit rushed though.",
    "Great work on the documentation. The code is very clean and easy to follow."
  ];

  const handleSummarize = async () => {
    setSummarizing(true);
    try {
      const result = await summarizePeerReviewFeedback({ feedback: mockFeedbackList });
      setSummary(result);
    } catch (error) {
      console.error(error);
    } finally {
      setSummarizing(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-primary font-headline">Peer Review Engine</h1>
        <p className="text-muted-foreground">Collaborate and level up through structured feedback.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ListCheck className="h-5 w-5 text-primary" />
                Active Review Assignment
              </CardTitle>
              <CardDescription>Review the work of: <strong>Marcus Wong</strong></CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-slate-50 border rounded-lg">
                <h4 className="font-semibold mb-2">Assignment 1: Neural Network Implementation</h4>
                <Button variant="outline" size="sm" className="w-full bg-white">Download Submission</Button>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Feedback</label>
                <Textarea 
                  placeholder="Provide constructive feedback based on the rubric..." 
                  className="min-h-[200px]"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full rounded-full" disabled={!feedback}>Submit Review</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-accent/30 bg-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                AI Feedback Summary
              </CardTitle>
              <CardDescription>Aggregate insights from all peer reviews you received.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!summary ? (
                <div className="text-center py-10 space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-white rounded-full border shadow-sm">
                      <MessageSquare className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    We've received 4 reviews for your last assignment. Let AI help you digest the themes.
                  </p>
                  <Button onClick={handleSummarize} disabled={summarizing} className="bg-accent hover:bg-accent/90">
                    {summarizing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                    Summarize Feedback
                  </Button>
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="space-y-2">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Strengths</h4>
                    <ul className="space-y-1">
                      {summary.strengths.map((s, i) => (
                        <li key={i} className="text-sm flex gap-2">
                          <span className="text-green-500 font-bold">✓</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Areas for Improvement</h4>
                    <ul className="space-y-1">
                      {summary.areasForImprovement.map((s, i) => (
                        <li key={i} className="text-sm flex gap-2">
                          <span className="text-amber-500 font-bold">!</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Key Themes</h4>
                    <div className="flex flex-wrap gap-2">
                      {summary.commonThemes.map((theme, i) => (
                        <Badge key={i} variant="outline" className="bg-white">{theme}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" onClick={() => setSummary(null)} size="sm" className="w-full text-xs">Reset View</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
