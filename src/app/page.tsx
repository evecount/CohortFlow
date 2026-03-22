import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Sparkles, ShieldCheck, ArrowRight, Laptop, Zap, Globe, BarChart3, Rocket, Video, Mic, CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <Link className="flex items-center justify-center" href="/">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold font-headline text-primary">CohortFlow</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:text-accent transition-colors" href="#features">Infrastructure</Link>
          <Link className="text-sm font-medium hover:text-accent transition-colors" href="#rehearsal">Rehearsal Lab</Link>
          <Link href="/admin/dashboard" className="text-sm font-bold text-primary px-4 py-2 border border-primary rounded-full hover:bg-primary hover:text-white transition-all">
            Instructor Portal
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 lg:py-48 overflow-hidden bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4 border border-primary/20">
                  <Rocket className="mr-2 h-4 w-4" /> White-Label Infrastructure for Global Experts
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary max-w-5xl mx-auto leading-tight">
                  The Operating System for <br className="hidden md:block" /> Private Learning Academies.
                </h1>
                <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-2xl/relaxed">
                  The "pickaxe" for elite educators. Scale your expertise with a premium, white-label platform designed for high-ticket cohorts, automated admissions, and AI-powered production.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                  <Link href="/admin/builder">Start Your Academy <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="h-14 px-8 text-lg rounded-full">
                  <Link href="/dashboard">Student Experience Demo</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Value Prop Section */}
        <section id="features" className="w-full py-24 lg:py-32 bg-white border-y">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl uppercase tracking-tight">Enterprise Infrastructure</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Own your audience, your data, and your brand. CohortFlow is the invisible engine behind the world's most prestigious learning communities.
              </p>
            </div>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4 p-8 rounded-2xl border bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all border-slate-100 group">
                <Globe className="h-12 w-12 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-primary">Custom White-Labeling</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Total brand autonomy. Host on your own domain with full visual control. Your students never see "CohortFlow"—only your expertise.
                </p>
              </div>
              <div className="space-y-4 p-8 rounded-2xl border bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all border-slate-100 group">
                <BarChart3 className="h-12 w-12 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-primary">Faculty & Roster Control</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Manage lead instructors, guest experts, and TAs across multiple cohorts with granular permissions and automated scheduling.
                </p>
              </div>
              <div className="space-y-4 p-8 rounded-2xl border bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all border-slate-100 group">
                <ShieldCheck className="h-12 w-12 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-primary">Automated Admissions</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Vet students at scale. Our AI-assisted admissions engine scores applicants on professional fit, ensuring elite cohort quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Rehearsal Lab Section (New Preview) */}
        <section id="rehearsal" className="w-full py-24 bg-primary text-white overflow-hidden relative">
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-6 text-left">
                <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-white border border-white/20 backdrop-blur-md">
                  <Sparkles className="mr-2 h-3.5 w-3.5 text-accent" /> NEW: MULTIMODAL REHEARSAL LAB
                </div>
                <h2 className="text-4xl font-bold font-headline sm:text-5xl leading-tight">
                  Perfect Your Delivery with AI Coaching.
                </h2>
                <p className="text-lg text-primary-foreground/80 leading-relaxed">
                  Lecturers can now rehearse their live workshops with a multimodal AI coach. Get real-time feedback on your tone, presence, and technical clarity before you step in front of your cohort.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Micro-expression analysis",
                    "Voice prosody & tone analysis",
                    "Technical content alignment",
                    "Presence & engagement scoring"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" variant="secondary" asChild className="rounded-full h-12 px-8 mt-4 font-bold">
                  <Link href="/admin/rehearsal">Preview the Rehearsal Lab</Link>
                </Button>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 bg-black rounded-2xl shadow-2xl overflow-hidden border-4 border-white/5 aspect-video group">
                  <img 
                    src="https://picsum.photos/seed/rehearsal/800/450" 
                    alt="AI Rehearsal Interface" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                    data-ai-hint="webcam recording"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 bg-accent rounded-full shadow-lg animate-pulse">
                      <Mic className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Live AI Feedback</span>
                      <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    </div>
                    <p className="text-xs text-white/90 italic">"Your tone is professional, but try to slow down during the backpropagation section for more clarity."</p>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* AI Engine Section */}
        <section id="ai-tools" className="w-full py-24 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center rounded-lg bg-accent/10 px-3 py-1 text-sm font-bold text-accent">
                  <Zap className="mr-2 h-4 w-4" /> PRODUCTION SUITE
                </div>
                <h2 className="text-4xl font-bold font-headline text-primary sm:text-5xl">Accelerate Academy Design</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Turn your research papers, notes, or industry docs into instructor-ready curriculum and premium media in minutes.
                </p>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Laptop className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">PDF-to-Academy Pipeline</h4>
                      <p className="text-sm text-muted-foreground">Architect full multi-week programs from academic sources or internal documentation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Video className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Cinematic Teaser Rendering</h4>
                      <p className="text-sm text-muted-foreground">Generate high-end video marketing assets for your cohort launch using Veo models.</p>
                    </div>
                  </div>
                </div>
                <Button size="lg" asChild className="rounded-full h-12 px-10">
                  <Link href="/admin/builder">Explore the Builder</Link>
                </Button>
              </div>
              <div className="lg:w-1/2">
                <Card className="border-none shadow-2xl overflow-hidden rounded-3xl">
                  <div className="bg-primary p-4 flex items-center gap-2 border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <span className="text-[10px] text-white/50 font-mono ml-2">production-engine-v2.0</span>
                  </div>
                  <CardContent className="p-8 bg-slate-900 font-mono text-sm text-white/80 space-y-4">
                    <p className="text-accent">$ analyze --source="Complex_Research.pdf"</p>
                    <p className="text-white/40">{" >> "} Extracting key findings...</p>
                    <p className="text-white/40">{" >> "} Mapping learning objectives...</p>
                    <p className="text-accent">$ generate --output="curriculum_outline"</p>
                    <p className="text-green-400 font-bold">✓ 12-Week High-Ticket Program Ready.</p>
                    <div className="pt-4 border-t border-white/10 mt-4">
                      <p className="text-accent">$ render --media="lecture_voiceover"</p>
                      <p className="text-white/40">{" >> "} Synthesizing professional audio for Module 1...</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="container px-4 md:px-6 mx-auto text-center space-y-10 relative z-10">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl max-w-3xl mx-auto">The infrastructure for your expertise.</h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 text-xl">
              Don't build on a marketplace. Build on your own terms. CohortFlow is the white-label operating system for the world's most elite educators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-12 h-14 text-lg font-bold">
                <Link href="/admin/builder">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-12 h-14 text-lg bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Book a Platform Tour
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 w-full border-t bg-white">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-primary">CohortFlow</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 CohortFlow Inc. The premium infrastructure for elite educators.</p>
          <nav className="flex gap-6">
            <Link className="text-xs hover:text-primary transition-colors" href="#">Terms of Service</Link>
            <Link className="text-xs hover:text-primary transition-colors" href="#">Privacy Policy</Link>
            <Link className="text-xs hover:text-primary transition-colors" href="#">Contact Sales</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
