import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Sparkles, ShieldCheck, ArrowRight, Laptop, Zap, Globe, Briefcase } from 'lucide-react';
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
          <Link href="/dashboard" className="text-sm font-medium text-primary hover:underline underline-offset-4">Student Demo</Link>
          <Link href="/admin/dashboard" className="text-sm font-medium text-muted-foreground hover:underline underline-offset-4">Instructor Login</Link>
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
                  <Briefcase className="mr-2 h-4 w-4" /> The Infrastructure for Elite Academy Founders
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary max-w-5xl mx-auto leading-tight">
                  Your Knowledge.<br />Your Brand. Our Engine.
                </h1>
                <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-2xl/relaxed">
                  Stop wrestling with generic LMS tools. CohortFlow provides the premium, white-label infrastructure to run high-ticket cohorts, manage faculty, and scale your expertise with AI.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                  <Link href="/apply">Launch Your Academy <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full">
                  How it Works
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Prop Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 border-y">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">Built for Scale, Brand, and Control</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We provide the "pickaxe" so you can focus on the gold. A complete infrastructure for cohort-based learning.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-md hover:shadow-lg transition-all bg-white">
                <CardContent className="pt-8">
                  <Laptop className="h-12 w-12 text-accent mb-6" />
                  <h3 className="text-xl font-bold mb-3 text-primary">Full White-Labeling</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">It's your academy. Your domain, your custom theme, and your student data. We stay invisible while you take the spotlight.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-all bg-white">
                <CardContent className="pt-8">
                  <Users className="h-12 w-12 text-accent mb-6" />
                  <h3 className="text-xl font-bold mb-3 text-primary">Faculty & Roster Control</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Easily manage guest lecturers, teaching assistants, and multiple cohorts from a single unified command center.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-all bg-white">
                <CardContent className="pt-8">
                  <Zap className="h-12 w-12 text-accent mb-6" />
                  <h3 className="text-xl font-bold mb-3 text-primary">AI Admissions Gating</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Automate the vetting of hundreds of applicants. Our AI scores for "fit" and "signal," ensuring elite peer groups.</p>
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
                <h2 className="text-3xl font-bold font-headline text-primary sm:text-5xl">The AI Academic Office</h2>
                <p className="text-lg text-muted-foreground">
                  Running a high-ticket program is operationally heavy. CohortFlow's AI engine acts as your instructional designer and admissions officer, working 24/7.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-medium text-primary">
                    <ShieldCheck className="h-5 w-5 text-green-500" /> Turn PDFs into 12-week course modules
                  </li>
                  <li className="flex items-center gap-3 font-medium text-primary">
                    <ShieldCheck className="h-5 w-5 text-green-500" /> Intelligent Applicant Fit Scoring
                  </li>
                  <li className="flex items-center gap-3 font-medium text-primary">
                    <ShieldCheck className="h-5 w-5 text-green-500" /> Automated Peer-Review Summaries
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 bg-slate-100 rounded-2xl p-8 border shadow-inner">
                <div className="bg-white rounded-xl shadow-xl p-6 space-y-4">
                  <div className="flex items-center gap-2 border-b pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-2 text-xs font-mono text-muted-foreground">academy-os-v1.sh</span>
                  </div>
                  <div className="font-mono text-sm space-y-2 text-primary/80">
                    <p className="text-accent">$ invite_lecturer --name="Dr. Smith" --role="Guest"</p>
                    <p className="text-slate-500 italic"># Sending invitation...</p>
                    <p className="text-accent">$ generate_curriculum --source="Research_Paper.pdf"</p>
                    <p>Status: Generating 6 modules with cited slides...</p>
                    <p className="text-green-600 font-bold">Academy Infrastructure Online.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your expertise deserves its own home.</h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
              Don't be a line item in a marketplace. Build your own high-ticket educational empire today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-12 h-14 text-lg font-bold shadow-lg shadow-black/20">
                <Link href="/apply">Get Started for Free</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-12 h-14 text-lg bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Book a Platform Tour
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
