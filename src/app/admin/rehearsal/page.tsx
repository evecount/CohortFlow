"use client"

import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Mic, Video, Play, Square, Sparkles, 
  MessageCircle, BarChart3, Loader2, ArrowRight,
  ShieldCheck, Zap, Laptop
} from 'lucide-react';
import { coachLecturer, MultimodalCoachOutput } from '@/ai/flows/multimodal-coach-flow';
import { useToast } from '@/hooks/use-toast';

export default function RehearsalLab() {
  const { toast } = useToast();
  const [isRecording, setIsRecording] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState<MultimodalCoachOutput | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startRehearsal = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsRecording(true);
        toast({
          title: "Multimodal Link Active",
          description: "Gemini is now observing your delivery."
        });
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Media Access Denied",
        description: "Please enable camera and microphone for rehearsal."
      });
    }
  };

  const stopAndAnalyze = async () => {
    setIsRecording(false);
    setAnalyzing(true);
    
    // Simulate multimodal data capture
    // In a real implementation, we would capture a frame and audio buffer
    setTimeout(async () => {
      try {
        const result = await coachLecturer({
          presentationContext: "Introduction to Neural Networks and Backpropagation",
          lecturerGoal: "Commanding presence with deep technical clarity",
          // videoFrameDataUri: "data:image/jpeg;base64,...", 
        });
        setFeedback(result);
      } catch (err) {
        toast({
          variant: "destructive",
          title: "Analysis Failed",
          description: "AI Multimodal service is currently at capacity."
        });
      } finally {
        setAnalyzing(false);
        // Stop all tracks
        const stream = videoRef.current?.srcObject as MediaStream;
        stream?.getTracks().forEach(track => track.stop());
      }
    }, 2000);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-primary font-headline flex items-center gap-2">
            <Laptop className="h-8 w-8 text-accent" />
            AI Rehearsal Lab
          </h1>
          <p className="text-muted-foreground">Perfect your delivery with the Gemini Multimodal Live coach.</p>
        </div>
        <Badge variant="outline" className="bg-accent/5 text-accent border-accent/20 px-4 py-1">
          Multimodal Mode: Active
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Live Preview & Controls */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="overflow-hidden border-2 border-primary/10 shadow-2xl bg-black">
            <div className="aspect-video relative group">
              {isRecording ? (
                <video 
                  ref={videoRef} 
                  autoPlay 
                  muted 
                  className="w-full h-full object-cover scale-x-[-1]" 
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
                  <div className="p-6 bg-slate-900 rounded-full">
                    <Video className="h-12 w-12" />
                  </div>
                  <p className="font-medium">Camera Offline</p>
                </div>
              )}
              
              {isRecording && (
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                  <Badge className="bg-red-500/80 backdrop-blur-sm border-none">LIVE REHEARSAL</Badge>
                </div>
              )}
            </div>
            
            <CardFooter className="bg-slate-900 p-6 flex justify-between items-center">
              {!isRecording ? (
                <Button size="lg" onClick={startRehearsal} className="rounded-full px-8 bg-accent hover:bg-accent/90 font-bold">
                  <Play className="mr-2 h-4 w-4 fill-current" /> Start Session
                </Button>
              ) : (
                <Button size="lg" onClick={stopAndAnalyze} variant="destructive" className="rounded-full px-8 font-bold">
                  <Square className="mr-2 h-4 w-4 fill-current" /> Finish & Analyze
                </Button>
              )}
              
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-1">
                  <Mic className={isRecording ? "text-accent" : "text-slate-600"} />
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Audio</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Video className={isRecording ? "text-accent" : "text-slate-600"} />
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Video</span>
                </div>
              </div>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-slate-50 border-none shadow-sm">
              <CardContent className="pt-6 space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Zap className="h-3 w-3" /> Live Multimodal Insights
                </h4>
                <p className="text-sm text-slate-600">Gemini analyzes your micro-expressions, speech cadence, and content accuracy in real-time.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-50 border-none shadow-sm">
              <CardContent className="pt-6 space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck className="h-3 w-3" /> Academic Alignment
                </h4>
                <p className="text-sm text-slate-600">Ensure your spoken delivery stays true to the research papers architected in the Course Builder.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* AI Feedback Panel */}
        <div className="space-y-6">
          <Card className="h-full border-2 border-accent/20 shadow-lg">
            <CardHeader className="bg-accent/5 border-b">
              <CardTitle className="flex items-center gap-2 text-primary">
                <Sparkles className="h-5 w-5 text-accent" /> AI Coach Feedback
              </CardTitle>
              <CardDescription>Generated via Multimodal Analysis</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {analyzing ? (
                <div className="flex flex-col items-center justify-center h-64 space-y-4">
                  <Loader2 className="h-12 w-12 text-accent animate-spin" />
                  <div className="text-center">
                    <p className="font-bold text-primary">Synthesizing Feedback</p>
                    <p className="text-xs text-muted-foreground">Processing video and audio frames...</p>
                  </div>
                </div>
              ) : feedback ? (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" /> Performance Review
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed italic">"{feedback.feedback}"</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                      <BarChart3 className="h-4 w-4" /> Tone & Presence
                    </h4>
                    <p className="text-sm text-slate-600">{feedback.toneAnalysis}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-accent flex items-center gap-2 uppercase tracking-widest text-[10px]">
                      Recommended Improvements
                    </h4>
                    <ul className="space-y-2">
                      {feedback.suggestions.map((s, i) => (
                        <li key={i} className="text-sm bg-accent/5 p-3 rounded-lg border border-accent/10 flex items-start gap-3">
                          <div className="h-5 w-5 rounded-full bg-accent text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                            {i+1}
                          </div>
                          <span className="text-slate-700">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full rounded-full" variant="outline" onClick={() => setFeedback(null)}>
                    Start New Rehearsal
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-96 text-center space-y-4 text-slate-400">
                  <div className="p-4 bg-slate-50 rounded-2xl">
                    <Sparkles className="h-10 w-10 opacity-20" />
                  </div>
                  <div className="max-w-[200px]">
                    <p className="font-bold text-slate-500">Awaiting Session</p>
                    <p className="text-xs">Start a recording to receive AI delivery insights.</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
