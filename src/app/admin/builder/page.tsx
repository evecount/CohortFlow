
"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  FileText, Wand2, Loader2, Sparkles, Download, 
  BookOpen, Presentation, Quote, ArrowRight, 
  Zap, Video, Mic, Volume2, PlayCircle, Eye
} from 'lucide-react';
import { generateClassFromPdf, GenerateClassFromPdfOutput } from '@/ai/flows/generate-class-from-pdf-flow';
import { generateLectureAudio } from '@/ai/flows/generate-lecture-audio-flow';
import { generateTeaserVideo } from '@/ai/flows/generate-teaser-video-flow';
import { useToast } from '@/hooks/use-toast';

export default function CourseBuilderLab() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateClassFromPdfOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Production Suite State
  const [generatingAudio, setGeneratingAudio] = useState<string | null>(null); // slide index
  const [audioUris, setAudioUris] = useState<Record<string, string>>({});
  const [generatingVideo, setGeneratingVideo] = useState(false);
  const [videoUri, setVideoUri] = useState<string | null>(null);

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
        const output = await generateClassFromPdf({ 
          pdfDataUri: base64,
          targetAudience: 'Senior Professionals',
          desiredFormat: 'intensive_workshop'
        });
        setResult(output);
      } catch (err) {
        console.error(err);
        setError("AI Engine was unable to process this PDF. Ensure it's not password protected.");
      } finally {
        setLoading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleGenerateAudio = async (text: string, id: string) => {
    setGeneratingAudio(id);
    try {
      const response = await generateLectureAudio({ text });
      setAudioUris(prev => ({ ...prev, [id]: response.mediaUri }));
      toast({
        title: "Lecture Snippet Ready",
        description: "AI Voiceover generated successfully."
      });
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Audio Generation Failed",
        description: "Rate limits or safety filters may have blocked this request."
      });
    } finally {
      setGeneratingAudio(null);
    }
  };

  const handleGenerateVideoTeaser = async () => {
    if (!result) return;
    setGeneratingVideo(true);
    try {
      const response = await generateTeaserVideo({ 
        prompt: `A professional cinematic teaser for a course titled "${result.courseTitle}". Show ${result.executiveSummary.substring(0, 100)}...`
      });
      setVideoUri(response.videoUri);
      toast({
        title: "Video Teaser Ready",
        description: "Your academy teaser has been rendered."
      });
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Video Generation Failed",
        description: "Veo models are currently in high demand. Please try again."
      });
    } finally {
      setGeneratingVideo(false);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary font-headline flex items-center gap-2">
            <Wand2 className="h-8 w-8 text-accent" />
            AI Course Builder
          </h1>
          <p className="text-muted-foreground">The ultimate pickaxe for turning research into high-ticket academies.</p>
        </div>
        {result && (
          <Button variant="outline" onClick={() => {
            setResult(null);
            setAudioUris({});
            setVideoUri(null);
          }} className="rounded-full">
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
                <CardDescription>Upload research or internal docs to begin.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 bg-white/50 gap-4 transition-all hover:border-accent/40 group relative overflow-hidden">
                  <FileText className="h-12 w-12 text-muted-foreground group-hover:text-accent transition-colors" />
                  <div className="text-center">
                    <p className="text-sm font-medium">Drop PDF Here</p>
                    <p className="text-xs text-muted-foreground">Max 10MB</p>
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
                      {loading ? "Architecting..." : "Architect Course"}
                    </label>
                  </Button>
                </div>
                {error && <p className="mt-4 text-xs text-red-500 font-medium text-center bg-red-50 p-2 rounded">{error}</p>}
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-none shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm uppercase tracking-widest text-slate-500 font-bold">Accelerator Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Mic className="h-5 w-5 text-accent" />
                  <p className="text-xs text-muted-foreground leading-relaxed"><strong>TTS Lectures:</strong> Generate AI voiceovers for every slide automatically.</p>
                </div>
                <div className="flex gap-3">
                  <Video className="h-5 w-5 text-accent" />
                  <p className="text-xs text-muted-foreground leading-relaxed"><strong>Veo Teasers:</strong> Create cinematic video snippets for social marketing.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center items-center h-[400px] border-2 border-dashed rounded-2xl bg-slate-50/50 text-center px-10 space-y-4">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <Presentation className="h-12 w-12 text-slate-300" />
            </div>
            <div className="max-w-xs">
              <h3 className="text-lg font-bold text-slate-600">Waiting for Source</h3>
              <p className="text-sm text-slate-400">The AI Academic Office will architect your slides, scripts, and media once a PDF is loaded.</p>
            </div>
          </div>
        </div>
      )}

      {result && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Main Course Overview */}
          <Card className="border-primary/20 shadow-2xl overflow-hidden border-2">
            <CardHeader className="bg-primary text-white p-10 relative">
              <div className="flex justify-between items-start relative z-10">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-none backdrop-blur-md">Premium Academy Asset</Badge>
                  <CardTitle className="text-4xl font-headline leading-tight max-w-2xl">{result.courseTitle}</CardTitle>
                  <p className="text-primary-foreground/80 max-w-xl text-lg italic">
                    {result.executiveSummary}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full">
                    <Presentation className="mr-2 h-4 w-4" /> Export Slides
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-10 space-y-12">
              {/* Production Suite Section */}
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                      <Zap className="h-5 w-5 text-accent" /> Academy Production Suite
                    </h3>
                    <p className="text-sm text-muted-foreground">Go beyond text. Generate premium media for your cohort launch.</p>
                  </div>
                  <Button 
                    onClick={handleGenerateVideoTeaser} 
                    disabled={generatingVideo}
                    className="bg-accent hover:bg-accent/90 rounded-full font-bold"
                  >
                    {generatingVideo ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Video className="mr-2 h-4 w-4" />}
                    {videoUri ? "Regenerate Teaser" : "Generate Teaser Video"}
                  </Button>
                </div>

                {videoUri && (
                  <div className="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-2xl relative group">
                    <video src={videoUri} controls className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent/80 backdrop-blur-sm">AI Generated Teaser</Badge>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary border-b pb-2 flex justify-between items-center">
                  Curriculum Modules & Media
                  <span className="text-xs text-muted-foreground normal-case font-normal">{result.modules.length} Modules Architecturalized</span>
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
                        <div className="space-y-4">
                          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <Presentation className="h-3 w-3" /> Lecture Delivery Assets
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {module.slidesOutline.map((slide, j) => {
                              const slideId = `${i}-${j}`;
                              return (
                                <Card key={j} className="border-slate-200 overflow-hidden">
                                  <CardHeader className="p-4 bg-slate-50/50 border-b">
                                    <div className="flex justify-between items-center">
                                      <p className="font-bold text-sm text-primary">{slide.heading}</p>
                                      <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        className="h-8 text-[10px] uppercase font-bold text-accent"
                                        onClick={() => handleGenerateAudio(slide.heading + ". " + slide.bulletPoints.join(". "), slideId)}
                                        disabled={!!generatingAudio}
                                      >
                                        {generatingAudio === slideId ? <Loader2 className="h-3 w-3 animate-spin mr-1" /> : <Volume2 className="h-3 w-3 mr-1" />}
                                        {audioUris[slideId] ? "Regen Audio" : "Voiceover"}
                                      </Button>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="p-4 space-y-3">
                                    <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1.5">
                                      {slide.bulletPoints.map((bp, k) => <li key={k}>{bp}</li>)}
                                    </ul>
                                    {audioUris[slideId] && (
                                      <div className="pt-2">
                                        <audio src={audioUris[slideId]} controls className="h-8 w-full" />
                                      </div>
                                    )}
                                  </CardContent>
                                </Card>
                              );
                            })}
                          </div>
                        </div>

                        <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10 border-dashed">
                          <h5 className="text-xs font-bold text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                            <Zap className="h-3 w-3" /> Module Applied Exercise
                          </h5>
                          <p className="text-sm text-slate-700 leading-relaxed font-medium">{module.applicationExercise}</p>
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
                <Sparkles className="h-4 w-4 text-accent" />
                <span>Production ready for high-ticket enrollment</span>
              </div>
              <Button size="lg" className="rounded-full px-8 font-bold shadow-lg hover:shadow-xl transition-all">
                Finalize & Publish Academy <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
