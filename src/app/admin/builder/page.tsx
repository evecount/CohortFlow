
"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText, Wand2, Loader2, Sparkles, Download, BookOpen, Presentation, Quote, ArrowRight } from 'lucide-react';
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
        // In a real app, you might want to slice the data URI prefix if the flow expects only raw base64,
        // but our flow docs say it expects 'data:application/pdf;base64,...'
        const output = await generateClassFromPdf({ 
          pdfDataUri: base64,
          targetAudience: 'Senior Professionals',
          desiredFormat: 'intensive_workshop'
        });
        setResult(output);
      } catch (err) {
        console.error(err);
        setError("AI Engine was unable to process this PDF. Ensure it's not password protected or too large.");
      } finally {
        setLoading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary font-headline flex items-center gap-2">
            <Wand2 className="h-8 w-8 text-accent" />
            AI Course Builder
          </h1>
          <p className="text-muted-foreground">The ultimate pickaxe for turning research into high-ticket curriculums.</p>
        </div>
        {result && (
          <Button variant="outline" onClick={() => setResult(null)} className="rounded-full">
            Start New Build
          </Button>
        )}
      </div>

      {!result && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-accent/20 bg-accent/5 shadow-sm border-2">
              <CardHeader>
                <CardTitle className="text-lg">Step 1: Source Material</CardTitle>
                <CardDescription>Upload an academic paper, case study, or internal documentation.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 bg-white/50 gap-4 transition-all hover:border-accent/40 group relative overflow-hidden">
                  <FileText className="h-12 w-12 text-muted-foreground group-hover:text-accent transition-colors" />
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
                  <Button asChild disabled={loading} className="rounded-full relative z-10">
                    <label htmlFor="pdf-upload" className="cursor-pointer">
                      {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileText className="mr-2 h-4 w-4" />}
                      {loading ? "Processing..." : "Select PDF File"}
                    </label>
                  </Button>
                </div>
                {error && <p className="mt-4 text-xs text-red-500 font-medium text-center bg-red-50 p-2 rounded">{error}</p>}
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-none shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm uppercase tracking-widest text-slate-500 font-bold">How it works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-white shadow-sm flex items-center justify-center text-xs font-bold text-primary">1</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">Extract core innovation & methodology from academic text.</p>
                </div>
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-white shadow-sm flex items-center justify-center text-xs font-bold text-primary">2</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">Translate jargon into practitioner-speak for professionals.</p>
                </div>
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-white shadow-sm flex items-center justify-center text-xs font-bold text-primary">3</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">Generate 12-week modules with slide outlines and exercises.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center items-center h-[400px] border-2 border-dashed rounded-2xl bg-slate-50/50 text-center px-10 space-y-4">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <Presentation className="h-12 w-12 text-slate-300" />
            </div>
            <div className="max-w-xs">
              <h3 className="text-lg font-bold text-slate-600">No course loaded</h3>
              <p className="text-sm text-slate-400">Once you upload a paper, the AI will architect your entire program here.</p>
            </div>
          </div>
        </div>
      )}

      {result && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Card className="border-primary/20 shadow-2xl overflow-hidden border-2">
            <CardHeader className="bg-primary text-white p-10 relative">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <GraduationCap className="h-32 w-32" />
              </div>
              <div className="flex justify-between items-start relative z-10">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-none backdrop-blur-md">AI Professional Curriculum</Badge>
                  <CardTitle className="text-4xl font-headline leading-tight max-w-2xl">{result.courseTitle}</CardTitle>
                  <p className="text-primary-foreground/80 max-w-xl text-lg italic">
                    {result.executiveSummary}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Download className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-10 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                    <Sparkles className="h-3 w-3" /> Target Outcomes
                  </h4>
                  <ul className="space-y-3">
                    {result.targetOutcomes.map((outcome, i) => (
                      <li key={i} className="flex gap-3 text-slate-700 font-medium">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Instructor Note</h4>
                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    "This curriculum has been optimized for Senior Professionals. Academic concepts from the source paper have been translated into actionable business logic to justify high-ticket pricing."
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary border-b pb-2 flex justify-between items-center">
                  Curriculum Breakdown
                  <span className="text-xs text-muted-foreground normal-case font-normal">{result.modules.length} Modules Total</span>
                </h4>
                <Accordion type="single" collapsible className="w-full">
                  {result.modules.map((module, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-slate-100 last:border-0">
                      <AccordionTrigger className="hover:no-underline py-6 group">
                        <div className="flex items-center gap-4 text-left">
                          <div className="h-8 w-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary font-bold text-xs group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors">
                            {i + 1}
                          </div>
                          <span className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                            {module.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-8 pt-2 pb-10 pl-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                              <BookOpen className="h-3 w-3" /> Key Takeaways
                            </h5>
                            <ul className="space-y-2">
                              {module.keyTakeaways.map((k, j) => (
                                <li key={j} className="text-sm text-slate-600 flex gap-2">
                                  <span className="text-accent font-bold">•</span> {k}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10 border-dashed">
                            <h5 className="text-xs font-bold text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                              <Zap className="h-3 w-3" /> Applied Exercise
                            </h5>
                            <p className="text-sm text-slate-700 leading-relaxed font-medium">{module.applicationExercise}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Instructor Slide Deck</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {module.slidesOutline.map((slide, j) => (
                              <div key={j} className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-primary/20 transition-all space-y-3">
                                <div className="flex items-center gap-2 text-primary">
                                  <Presentation className="h-4 w-4" />
                                  <p className="font-bold text-sm">{slide.heading}</p>
                                </div>
                                <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1.5">
                                  {slide.bulletPoints.map((bp, k) => <li key={k}>{bp}</li>)}
                                </ul>
                                <div className="pt-3 mt-3 border-t flex items-start gap-2">
                                  <Sparkles className="h-3 w-3 text-accent flex-shrink-0" />
                                  <p className="text-[10px] text-slate-400 italic">
                                    <strong>Visual Recommendation:</strong> {slide.visualDescription}
                                  </p>
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

              <div className="pt-8 border-t flex items-start gap-4 bg-slate-50 -mx-10 px-10 py-8">
                <Quote className="h-6 w-6 text-slate-300 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Academic Source Reference</p>
                  <p className="text-sm text-slate-600 font-medium italic">{result.citation}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-100/50 border-t py-8 flex justify-between items-center px-10">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Wand2 className="h-4 w-4" />
                <span>Architecture finalized by CohortFlow Intelligence</span>
              </div>
              <Button size="lg" className="rounded-full px-8 font-bold shadow-lg hover:shadow-xl transition-all">
                Publish to New Cohort <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}

function GraduationCap(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function Check(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
