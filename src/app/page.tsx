import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Sparkles, ShieldCheck, ArrowRight, Laptop, Zap, Globe } from 'lucide-react';
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
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">Platform</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#ai-tools">AI Engine</Link>
          <Link href="/dashboard" className="text-sm font-medium text-primary hover:underline underline-offset-4">Demo Portal</Link>
          <Link href="/admin/dashboard" className="text-sm font-medium text-muted-foreground hover:underline underline-offset-4">Admin Console</Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 lg:py-48 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img 
              src={heroImage} 
              alt="Elite Education Platform" 
              className="w-full h-full object-cover opacity-10"
              data-ai-hint="luxury workspace"
            />
          </div>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
                  <Zap className="mr-2 h-4 w-4" /> The White-Label Infrastructure for Elite Academies
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary max-w-5xl mx-auto leading-tight">
                  Stop Building LMS Tasks.<br />Start Scaling Your Genius.
                </h1>
                <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-2xl/relaxed">
                  The professional, AI-powered backbone for high-ticket accelerators. Automate your admissions, generate world-class curricula, and provide a premium student experience—all under your own brand.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                  <Link href="/apply">Launch Your Academy <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full">
                  Explore AI Features
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Prop Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 border-y">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">Everything you need to sell elite outcomes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We provide the "pickaxe" so you can focus on the gold. A complete infrastructure for cohort-based learning.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-md hover:shadow-lg transition-all bg-white">
                <CardContent className="pt-8">
                  <Laptop className="h-12 w-12 text-accent mb-6" />
                  <h3 className="text-xl font-bold mb-3 text-primary">White-Label Branding</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Your brand, your domain, your rules. A premium student portal that justifies your high-ticket price point from day one.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-all bg-white">
                <CardContent className="pt-8">
                  <Sparkles className="h-12 w-12 text-accent mb-6" />
                  <h3 className="text-xl font-bold mb-3 text-primary">AI-Driven Admissions</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Automate the vetting process. Our AI scores applicants based on your custom "fit" criteria, ensuring high-signal cohorts.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-all bg-white">
                <CardContent className="pt-8">
                  <Globe className="h-12 w-12 text-accent mb-6" />
                  <h3 className="text-xl font-bold mb-3 text-primary">Global Scaling</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Synchronous learning with localized time-zone support. Manage multiple cohorts, alumni networks, and mentors globally.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Engine Section */}
        <section id="ai-tools" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 space-y-6">
                <div className="p-2 bg-accent/10 w-fit rounded-lg">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold font-headline text-primary sm:text-5xl">The AI Orchestrator</h2>
                <p className="text-lg text-muted-foreground">
                  Transform 10 years of your expertise into a structured 12-week program in seconds. Our curriculum generator handles the pedagogy, assignments, and themes so you can focus on teaching.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-medium text-primary">
                    <ShieldCheck className="h-5 w-5 text-green-500" /> Automated Peer-Review Summaries
                  </li>
                  <li className="flex items-center gap-3 font-medium text-primary">
                    <ShieldCheck className="h-5 w-5 text-green-500" /> Intelligent Applicant Fit Scoring
                  </li>
                  <li className="flex items-center gap-3 font-medium text-primary">
                    <ShieldCheck className="h-5 w-5 text-green-500" /> Dynamic Course Content Generation
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 bg-slate-100 rounded-2xl p-8 border shadow-inner">
                <div className="bg-white rounded-xl shadow-xl p-6 space-y-4">
                  <div className="flex items-center gap-2 border-b pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-2 text-xs font-mono text-muted-foreground">ai-curriculum-generator.sh</span>
                  </div>
                  <div className="font-mono text-sm space-y-2 text-primary/80">
                    <p className="text-accent">$ analyze_expertise --source="Experience.pdf"</p>
                    <p className="text-slate-500 italic"># Identifying core pillars...</p>
                    <p>Week 1: Foundations of Scale</p>
                    <p>Week 2: The Network Effect</p>
                    <p>Week 3: AI Orchestration Layers</p>
                    <p className="text-green-600 font-bold">Curriculum Generated Successfully!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stop building tools. Start building students.</h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
              Join 150+ educators who have moved their elite accelerators to CohortFlow. Get your custom domain and AI engine ready in under 10 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-12 h-14 text-lg font-bold">
                <Link href="/apply">Build Your Academy Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-12 h-14 text-lg bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 w-full border-t bg-white">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold text-primary">CohortFlow Inc.</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2025 CohortFlow. The elite LMS infrastructure for high-ticket course creators.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">Terms</Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">Privacy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
