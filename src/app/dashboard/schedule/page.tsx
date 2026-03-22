
"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Video, MapPin, CalendarDays, ChevronRight } from 'lucide-react';
import { MOCK_SESSIONS } from '@/lib/mock-data';

export default function StudentSchedule() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-primary font-headline">Academy Schedule</h1>
        <p className="text-muted-foreground">Manage your time across workshops, peer reviews, and deep-work sessions.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-1 h-fit">
          <CardHeader>
            <CardTitle className="text-lg">Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow-sm"
            />
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-accent" />
            Session Timeline
          </h2>
          
          <div className="space-y-4">
            {MOCK_SESSIONS.map((session) => (
              <div key={session.id} className="relative pl-8 pb-8 last:pb-0 group">
                {/* Timeline Line */}
                <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200 group-last:bg-transparent" />
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 h-6 w-6 rounded-full bg-white border-2 border-accent flex items-center justify-center z-10">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>

                <Card className="hover:border-accent/30 transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant={session.type === 'live' ? 'default' : 'outline'} className={session.type === 'live' ? "bg-accent" : ""}>
                            {session.type === 'live' ? 'Live Workshop' : 'Project Deadline'}
                          </Badge>
                          <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {new Date(session.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-primary">{session.title}</h3>
                        <p className="text-sm text-muted-foreground">{session.description}</p>
                      </div>
                      
                      {session.type === 'live' ? (
                        <Button className="rounded-full bg-accent hover:bg-accent/90">
                          <Video className="mr-2 h-4 w-4" /> Enter Zoom
                        </Button>
                      ) : (
                        <Button variant="outline" className="rounded-full">
                          Submit Materials <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
