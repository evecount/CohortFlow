"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText, Wand2, Loader2, Sparkles, Download, BookOpen, Presentation, Quote } from 'lucide-react';
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
          <Card className="border-accent/20 bg-accent/5 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Upload Source Paper</CardTitle>
              <CardDescription>Upload an arXiv PDF or research paper to begin.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 bg-white/50 gap-4 transition-all hover:border-accent/40">
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
                <Button asChild disabled={loading} className="rounded-full">
                  <label htmlFor="pdf-upload" className="cursor-pointer">
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileText className="mr-2 h-4 w-4" />}
                    Select Research Paper
                  </label>
                </Button>
              </div>
              {error && <p className="mt-4 text-xs text-red-500 font-medium text-center">{error}</p>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Academic Transcription</CardTitle>
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
                <p className="text-xs text-muted-foreground">Translate academic jargon into "Practitioner-speak".</p>
              </div>
              <div className="flex gap-3">
                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Quote className="h-3 w-3 text-purple-600" />
                </div>
                <p className="text-xs text-muted-foreground">Properly cited references for expert credibility.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-2">
          {!result ? (
            <div className="h-[500px] border rounded-xl border-dashed flex flex-col items-center justify-center bg-slate-50 text-muted-foreground space-y-4 text-center px-6">
              <Presentation className="h-16 w-16 opacity-10" />
              <div>
                <p className="text-lg font-medium">Your course architecture will appear here.</p>
                <p className="text-sm">The AI will extract modules, slide outlines, and citations from your paper.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Card className="border-primary/20 shadow-xl overflow-hidden">
                <CardHeader className="bg-primary text-white p-8">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <Badge variant="secondary" className="bg-white/20 text-white border-none">AI Academic Transcript</Badge>
                      <CardTitle className="text-3xl font-headline leading-tight">{result.courseTitle}</CardTitle>
                    </div>
                    <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <Download className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                      <Sparkles className="h-3 w-3" /> Executive Summary
                    </h4>
                    <p className="text-base text-slate-700 leading-relaxed italic border-l-4 border-accent pl-6 bg-slate-50 py-4 rounded-r-lg">
                      "{result.executiveSummary}"
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Curriculum Breakdown</h4>
                    <Accordion type="single" collapsible className="w-full">
                      {result.modules.map((module, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border-slate-100">
                          <AccordionTrigger className="hover:no-underline py-5 group">
                            <span className="text-left font-bold text-primary group-hover:text-accent transition-colors">
                              Module {i + 1}: {module.title}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="space-y-6 pt-2 pb-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-3">
                                <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-tighter">Practitioner Outcomes</h5>
                                <ul className="space-y-2">
                                  {module.keyTakeaways.map((k, j) => (
                                    <li key={j} className="text-sm flex gap-2">
                                      <span className="text-accent font-bold">•</span> {k}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="p-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                                <h5 className="text-xs font-semibold mb-2 flex items-center gap-1">
                                  <BookOpen className="h-3 w-3" /> Applied Exercise
                                </h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">{module.applicationExercise}</p>
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-tighter">Instructor Slide Decks</h5>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {module.slidesOutline.map((slide, j) => (
                                  <div key={j} className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm space-y-2">
                                    <div className="flex items-center gap-2 text-primary">
                                      <Presentation className="h-3 w-3" />
                                      <p className="font-bold text-xs truncate">{slide.heading}</p>
                                    </div>
                                    <ul className="list-disc pl-4 text-[11px] text-slate-600 space-y-1">
                                      {slide.bulletPoints.map((bp, k) => <li key={k}>{bp}</li>)}
                                    </ul>
                                    <div className="pt-2 mt-2 border-t text-[9px] text-slate-400 italic">
                                      Visual: {slide.visualDescription}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>

                  <div className="pt-6 border-t flex items-start gap-3">
                    <Quote className="h-5 w-5 text-slate-300 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Source Reference</p>
                      <p className="text-xs text-slate-600 font-medium italic">{result.citation}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-slate-50 border-t py-6 flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">Course content synthesized via CohortFlow Intelligence</p>
                  <Button className="rounded-full px-6">
                    Launch New Cohort <Wand2 className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
