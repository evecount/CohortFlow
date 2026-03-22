import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Sparkles, ShieldCheck, ArrowRight, Laptop, Zap, Globe, Briefcase, BarChart3, Rocket, Video } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function LandingPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg')?.imageUrl;

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
          <Link className="text-sm font-medium hover:text-accent transition-colors" href="#ai-tools">AI Production</Link>
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
                  <Rocket className="mr-2 h-4 w-4" /> White-Label Infrastructure for Elite Academies
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary max-w-5xl mx-auto leading-tight">
                  The Shopify for <br className="hidden md:block" /> Professional Education.
                </h1>
                <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-2xl/relaxed">
                  Launch and scale your own high-ticket educational brand. CohortFlow provides the premium infrastructure to manage cohorts, faculty, and AI-powered curriculum in one unified platform.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                  <Link href="/admin/builder">Build Your Academy <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
        <section id="features" className="w-full py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">Total Brand Autonomy</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Move beyond marketplace constraints. CohortFlow is the engine that powers your own independent academy.
              </p>
            </div>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4 p-6 rounded-2xl border bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all border-slate-100">
                <Globe className="h-12 w-12 text-accent" />
                <h3 className="text-xl font-bold text-primary">Custom White-Labeling</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Full DNS control. Host on your own domain with your own visual identity. We provide the invisible power behind your brand.
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-2xl border bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all border-slate-100">
                <BarChart3 className="h-12 w-12 text-accent" />
                <h3 className="text-xl font-bold text-primary">Faculty & Roster Control</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Manage multiple instructors, guest lecturers, and student groups across simultaneous cohorts with granular permission controls.
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-2xl border bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all border-slate-100">
                <ShieldCheck className="h-12 w-12 text-accent" />
                <h3 className="text-xl font-bold text-primary">Enterprise Admissions</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  High-signal applicant filtering. Use our AI-assisted scoring to vet students for professional fit and cohort diversity.
                </p>
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
                  <Sparkles className="mr-2 h-4 w-4" /> PRODUCTION SUITE
                </div>
                <h2 className="text-4xl font-bold font-headline text-primary sm:text-5xl">Accelerate Curriculum Design</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform complex source material into instructor-ready curriculum and premium media in minutes, not months.
                </p>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">PDF-to-Academy Pipeline</h4>
                      <p className="text-sm text-muted-foreground">Architect full multi-week programs from research papers or internal documents.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Video className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Cinematic Teaser Rendering</h4>
                      <p className="text-sm text-muted-foreground">Generate high-end video marketing assets for your launch using Veo models.</p>
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
              Don't build on a marketplace. Build on your own terms. CohortFlow is the white-label operating system for the world's most elite academies.
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
