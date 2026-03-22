"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText, Wand2, Loader2, Sparkles, Download, BookOpen, Presentation } from 'lucide-react';
import { generateClassFromPdf, GenerateClassFromPdfOutput } from '@/ai/flows/generate-class-from-pdf-flow';

export default function CourseBuilderLab() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateClassFromPdfOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setError("Please upload a PDF file.");
      return;
    }

    setLoading(true);
    setError(null);

    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const base64 = reader.result as string;
        const output = await generateClassFromPdf({ pdfDataUri: base64 });
        setResult(output);
      } catch (err) {
        console.error(err);
        setError("Failed to process paper. Ensure it's a valid research PDF.");
      } finally {
        setLoading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-primary font-headline flex items-center gap-2">
            <Wand2 className="h-8 w-8 text-accent" />
            AI Course Builder
          </h1>
          <p className="text-muted-foreground">Transform complex research into a premium curriculum instantly.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upload Column */}
        <div className="space-y-6">
          <Card className="border-accent/20 bg-accent/5">
            <CardHeader>
              <CardTitle className="text-lg">Upload Source Paper</CardTitle>
              <CardDescription>Upload an arXiv PDF or research paper to begin.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 bg-white/50 gap-4">
                <FileText className="h-12 w-12 text-muted-foreground" />
                <div className="text-center">
                  <p className="text-sm font-medium">Click to upload or drag & drop</p>
                  <p className="text-xs text-muted-foreground">PDF only (max 10MB)</p>
                </div>
                <Input 
                  type="file" 
                  accept=".pdf" 
                  className="hidden" 
                  id="pdf-upload" 
                  onChange={handleFileUpload}
                  disabled={loading}
                />
                <Button asChild disabled={loading}>
                  <label htmlFor="pdf-upload" className="cursor-pointer">
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileText className="mr-2 h-4 w-4" />}
                    Select Research Paper
                  </label>
                </Button>
              </div>
              {error && <p className="mt-4 text-xs text-red-500 font-medium">{error}</p>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Why use this?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-3 w-3 text-green-600" />
                </div>
                <p className="text-xs text-muted-foreground">Automate pedagogical structuring of raw data.</p>
              </div>
              <div className="flex gap-3">
                <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-3 w-3 text-blue-600" />
                </div>
                <p className="text-xs text-muted-foreground">Translate academic jargon into "CEO-speak".</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-2">
          {!result ? (
            <div className="h-[400px] border rounded-xl border-dashed flex flex-col items-center justify-center bg-slate-50 text-muted-foreground space-y-2">
              <Presentation className="h-12 w-12 opacity-20" />
              <p className="text-sm">Your course architecture will appear here.</p>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Card className="border-primary/20 shadow-lg">
                <CardHeader className="bg-primary/5 rounded-t-xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant="outline" className="mb-2 bg-white">AI Generated Program</Badge>
                      <CardTitle className="text-2xl text-primary">{result.courseTitle}</CardTitle>
                    </div>
                    <Button variant="ghost" size="icon" title="Export Curriculum">
                      <Download className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Executive Summary</h4>
                    <p className="text-sm leading-relaxed">{result.executiveSummary}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Course Modules</h4>
                    <Accordion type="single" collapsible className="w-full">
                      {result.modules.map((module, i) => (
                        <AccordionItem key={i} value={`item-${i}`}>
                          <AccordionTrigger className="hover:no-underline py-4">
                            <span className="text-left font-bold text-primary">Module {i + 1}: {module.title}</span>
                          </AccordionTrigger>
                          <AccordionContent className="space-y-4 pt-2">
                            <div className="space-y-2">
                              <h5 className="text-xs font-semibold text-accent">Learning Takeaways</h5>
                              <ul className="list-disc pl-4 text-sm space-y-1">
                                {module.keyTakeaways.map((k, j) => <li key={j}>{k}</li>)}
                              </ul>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-lg border border-dashed">
                              <h5 className="text-xs font-semibold mb-1">Practical Application Exercise</h5>
                              <p className="text-xs text-muted-foreground">{module.applicationExercise}</p>
                            </div>
                            <div className="space-y-2">
                              <h5 className="text-xs font-semibold text-primary">Presentation Slide Outline</h5>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {module.slidesOutline.map((slide, j) => (
                                  <div key={j} className="p-3 bg-white border rounded text-xs">
                                    <p className="font-bold border-b pb-1 mb-1">{slide.heading}</p>
                                    <ul className="list-disc pl-3 text-[10px] space-y-1">
                                      {slide.bulletPoints.map((bp, k) => <li key={k}>{bp}</li>)}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>

                  <div className="pt-4 border-t italic text-[10px] text-muted-foreground">
                    Source: {result.citation}
                  </div>
                </CardContent>
                <CardFooter className="bg-slate-50 border-t rounded-b-xl py-4 flex justify-between">
                  <p className="text-xs text-muted-foreground">Generated via CohortFlow AI Orchestrator</p>
                  <Button size="sm">Create Cohort from this Program</Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
