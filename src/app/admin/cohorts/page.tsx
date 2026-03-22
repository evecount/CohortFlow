"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Calendar, UserPlus, Plus, MoreHorizontal, Mail } from 'lucide-react';
import { MOCK_COHORTS } from '@/lib/mock-data';

export default function CohortFacultyManagement() {
  const [activeTab, setActiveTab] = useState("cohorts");

  const mockFaculty = [
    { id: 'f-1', name: 'Dr. Aris Thorne', role: 'Lead Instructor', status: 'Active', classes: 12 },
    { id: 'f-2', name: 'Sarah Miller', role: 'Guest Lecturer', status: 'Onboarding', classes: 2 },
    { id: 'f-3', name: 'James Wilson', role: 'Teaching Assistant', status: 'Active', classes: 8 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-primary font-headline text-primary">Academy Roster</h1>
          <p className="text-muted-foreground">Manage your active cohorts, faculty members, and student enrollment.</p>
        </div>
        <Button className="rounded-full">
          <Plus className="mr-2 h-4 w-4" /> 
          {activeTab === "cohorts" ? "Create Cohort" : "Invite Faculty"}
        </Button>
      </div>

      <Tabs defaultValue="cohorts" onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-white border mb-4">
          <TabsTrigger value="cohorts" className="data-[state=active]:bg-primary data-[state=active]:text-white">Active Cohorts</TabsTrigger>
          <TabsTrigger value="faculty" className="data-[state=active]:bg-primary data-[state=active]:text-white">Faculty & Lecturers</TabsTrigger>
        </TabsList>

        <TabsContent value="cohorts">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cohort Name</TableHead>
                    <TableHead>Theme</TableHead>
                    <TableHead>Timeline</TableHead>
                    <TableHead>Enrollment</TableHead>
                    <TableHead className="text-right">Manage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_COHORTS.map((cohort) => (
                    <TableRow key={cohort.id}>
                      <TableCell className="font-bold text-primary">{cohort.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{cohort.theme}</Badge>
                      </TableCell>
                      <TableCell className="text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {new Date(cohort.startDate).toLocaleDateString()} - {new Date(cohort.endDate).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3 text-accent" />
                          <span className="font-medium">42 Students</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faculty">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockFaculty.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="bg-slate-50 border-b">
                  <div className="flex justify-between items-start">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {member.name[0]}
                    </div>
                    <Badge variant={member.status === 'Active' ? 'default' : 'secondary'}>
                      {member.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-4">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Sessions Conducted</span>
                    <span className="font-bold">{member.classes}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Mail className="mr-2 h-3 w-3" /> Email
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card className="border-dashed flex items-center justify-center p-8 bg-slate-50/50 cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="text-center space-y-2">
                <div className="mx-auto h-10 w-10 rounded-full bg-white border flex items-center justify-center">
                  <UserPlus className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-sm font-medium">Add New Faculty</p>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
