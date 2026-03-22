
"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, ExternalLink, Clock, Video } from 'lucide-react';
import { MOCK_SESSIONS, MOCK_COHORTS } from '@/lib/mock-data';

export default function StudentDashboard() {
  const [mounted, setMounted] = useState(false);
  const activeCohort = MOCK_COHORTS[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-primary font-headline">Welcome back, Sarah</h1>
          <p className="text-muted-foreground">You are currently in <span className="font-semibold text-primary">{activeCohort.name}</span>.</p>
        </div>
        <div className="bg-white p-3 rounded-lg border shadow-sm flex items-center gap-2">
          <Clock className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">Your Local Time: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Schedule */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-primary" />
            Upcoming Sessions & Deadlines
          </h2>
          
          <div className="space-y-4">
            {MOCK_SESSIONS.map((session) => (
              <Card key={session.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant={session.type === 'live' ? 'default' : 'secondary'}>
                          {session.type === 'live' ? 'Live Workshop' : 'Assignment'}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {new Date(session.startTime).toLocaleDateString()} at {new Date(session.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-primary">{session.title}</h3>
                      <p className="text-sm text-muted-foreground">{session.description}</p>
                    </div>
                    {session.type === 'live' && (
                      <Button asChild className="rounded-full">
                        <a href={session.link} target="_blank" rel="noopener noreferrer">
                          <Video className="mr-2 h-4 w-4" /> Join Session
                        </a>
                      </Button>
                    )}
                    {session.type === 'deadline' && (
                      <Button variant="outline" className="rounded-full">
                        Submit Assignment
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cohort Progress</CardTitle>
              <CardDescription>Week 4 of 12</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="w-full bg-slate-100 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '33%' }}></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-slate-50 p-3 rounded-lg border">
                    <p className="text-2xl font-bold">12/36</p>
                    <p className="text-xs text-muted-foreground uppercase">Lessons</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border">
                    <p className="text-2xl font-bold">3/10</p>
                    <p className="text-xs text-muted-foreground uppercase">Tasks</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-accent text-white border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Quick Help</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/80 mb-4">Need technical support or have a curriculum question?</p>
              <Button variant="secondary" className="w-full font-bold">Message Support</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
