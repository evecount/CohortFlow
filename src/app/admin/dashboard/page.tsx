
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, ClipboardList, TrendingUp, DollarSign, Wand2, ArrowRight, Zap } from 'lucide-react';
import { MOCK_COHORTS, MOCK_APPLICATIONS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

export default function AdminDashboard() {
  const pendingApps = MOCK_APPLICATIONS.filter(app => app.status === 'pending').length;
  const activeStudents = 42; // Simulated

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-primary font-headline">Academy Command Center</h1>
          <p className="text-muted-foreground">Monitor growth and manage your educational empire.</p>
        </div>
        <Button asChild className="rounded-full shadow-lg hover:shadow-xl transition-all">
          <Link href="/admin/builder">
            <Wand2 className="mr-2 h-4 w-4" /> AI Magic Build
          </Link>
        </Button>
      </div>

      {/* Quick Action Banner */}
      <Card className="bg-primary text-primary-foreground border-none shadow-xl overflow-hidden relative">
        <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4">
          <Wand2 className="h-64 w-64" />
        </div>
        <CardContent className="p-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-white/20 text-white mb-2">
                <Zap className="mr-1 h-3 w-3" /> New Feature
              </div>
              <h2 className="text-2xl font-bold">Turn Research into Revenue</h2>
              <p className="text-primary-foreground/80 max-w-md">
                Upload a PDF (arXiv, Whitepaper, or Notes) and let our AI engine architect a 12-week high-ticket cohort curriculum for you.
              </p>
            </div>
            <Button variant="secondary" size="lg" asChild className="rounded-full font-bold px-8">
              <Link href="/admin/builder">Launch Course Builder <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Pending Apps</CardTitle>
            <ClipboardList className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingApps}</div>
            <p className="text-xs text-green-600 font-medium">+2 from yesterday</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Active Students</CardTitle>
            <Users className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeStudents}</div>
            <p className="text-xs text-muted-foreground">Across 2 cohorts</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Completion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-green-600 font-medium">+5.2% from last cohort</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Revenue (MTD)</CardTitle>
            <DollarSign className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$124,500</div>
            <p className="text-xs text-muted-foreground">Target: $150,000</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Active Cohorts</CardTitle>
            <CardDescription>Managed via Roster Control</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {MOCK_COHORTS.map(cohort => (
                <div key={cohort.id} className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm hover:border-primary/20 transition-colors">
                  <div>
                    <h4 className="font-semibold text-primary">{cohort.name}</h4>
                    <p className="text-sm text-muted-foreground">{cohort.theme}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Ends: {new Date(cohort.endDate).toLocaleDateString()}</p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">Active</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>Awaiting Admissions Vetting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {MOCK_APPLICATIONS.map(app => (
                <div key={app.id} className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                      {app.studentName[0]}
                    </div>
                    <div>
                      <h4 className="font-semibold">{app.studentName}</h4>
                      <p className="text-xs text-muted-foreground">{app.email}</p>
                    </div>
                  </div>
                  <span className={cn(
                    "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                    app.status === 'pending' ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"
                  )}>
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
