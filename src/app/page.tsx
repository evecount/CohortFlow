
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Calendar, Award, ArrowRight } from 'lucide-react';
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">Features</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#cohorts">Cohorts</Link>
          <Link href="/dashboard" className="text-sm font-medium text-primary hover:underline underline-offset-4">Student Login</Link>
          <Link href="/admin/dashboard" className="text-sm font-medium text-muted-foreground hover:underline underline-offset-4">Admin</Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 lg:py-48 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img 
              src={heroImage} 
              alt="Education background" 
              className="w-full h-full object-cover opacity-10"
              data-ai-hint="education teamwork"
            />
          </div>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary max-w-4xl mx-auto leading-tight">
                  Accelerate Your Career with Elite Cohort Learning
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-2xl/relaxed">
                  Join industry leaders and ambitious peers in our high-ticket, time-bound accelerators designed for deep transformation.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="h-12 px-8 text-lg rounded-full">
                  <Link href="/apply">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full">
                  View Curriculum
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Expert-Led Cohorts</h3>
                  <p className="text-sm text-muted-foreground">Learn alongside a small, dedicated group of high-performers under top-tier mentorship.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <Calendar className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Synchronous sessions</h3>
                  <p className="text-sm text-muted-foreground">Live workshops and real-time interaction to ensure you never get stuck.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Peer Feedback Engine</h3>
                  <p className="text-sm text-muted-foreground">Hone your skills through our structured, AI-enhanced peer review system.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Alumni Network</h3>
                  <p className="text-sm text-muted-foreground">Gain lifelong access to an exclusive directory of successful graduates.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">Ready to reach your next level?</h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl mb-10">
              Applications for the Spring 2026 cohort are now open. Spaces are limited to maintain instructional quality.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-12 h-14 text-lg">
              <Link href="/apply">Start Your Application</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-6 w-full border-t bg-white">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2025 CohortFlow Inc. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">Terms of Service</Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">Privacy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
