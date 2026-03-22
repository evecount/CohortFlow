
"use client"

import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Linkedin, Mail, Filter } from 'lucide-react';
import { MOCK_ALUMNI } from '@/lib/mock-data';

export default function AlumniDirectory() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary font-headline">Alumni Directory</h1>
          <p className="text-muted-foreground">Network with high-performers from all past cohorts.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search alumni..." className="pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_ALUMNI.map((alum) => (
          <Card key={alum.id} className="hover:shadow-md transition-shadow group">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl">
                {alum.name[0]}
              </div>
              <div className="space-y-1">
                <CardTitle className="group-hover:text-primary transition-colors">{alum.name}</CardTitle>
                <CardDescription>{alum.role} @ {alum.company}</CardDescription>
                <span className="text-xs bg-slate-100 px-2 py-0.5 rounded text-muted-foreground font-medium">{alum.cohortName}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                {alum.bio}
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 rounded-full text-xs" asChild>
                  <a href={alum.linkedIn} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-3 w-3 mr-1" /> LinkedIn
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="flex-1 rounded-full text-xs">
                  <Mail className="h-3 w-3 mr-1" /> Message
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="p-8 bg-slate-100 rounded-xl border border-dashed border-slate-300 text-center space-y-2">
        <h3 className="font-bold text-slate-600">Want to join the directory?</h3>
        <p className="text-sm text-slate-500 max-w-sm mx-auto">Completion of your current cohort requirements will automatically grant you full directory privileges.</p>
      </div>
    </div>
  );
}
