
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ClipboardList, TrendingUp, DollarSign } from 'lucide-react';
import { MOCK_COHORTS, MOCK_APPLICATIONS } from '@/lib/mock-data';

export default function AdminDashboard() {
  const pendingApps = MOCK_APPLICATIONS.filter(app => app.status === 'pending').length;
  const activeStudents = 42; // Simulated

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-primary font-headline">Dashboard Overview</h1>
        <p className="text-muted-foreground">Manage your academy and monitor applicant growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Apps</CardTitle>
            <ClipboardList className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingApps}</div>
            <p className="text-xs text-muted-foreground">+2 from yesterday</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Students</CardTitle>
            <Users className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeStudents}</div>
            <p className="text-xs text-muted-foreground">Across 2 cohorts</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">+5.2% from last cohort</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue (MTD)</CardTitle>
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
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {MOCK_COHORTS.map(cohort => (
                <div key={cohort.id} className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm">
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

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
