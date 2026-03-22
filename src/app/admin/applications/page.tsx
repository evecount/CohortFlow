
"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { CheckCircle, XCircle, Eye, Search } from 'lucide-react';
import { MOCK_APPLICATIONS } from '@/lib/mock-data';

export default function ApplicationsManagement() {
  const [apps, setApps] = useState(MOCK_APPLICATIONS);

  const updateStatus = (id: string, status: 'approved' | 'rejected') => {
    setApps(prev => prev.map(app => app.id === id ? { ...app, status } : app));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-primary font-headline">Application Funnel</h1>
          <p className="text-muted-foreground">Review and process student applications for upcoming cohorts.</p>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search applicants..." className="pl-8" />
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Applicant</TableHead>
                <TableHead>Date Applied</TableHead>
                <TableHead>Motivation Summary</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apps.map((app) => (
                <TableRow key={app.id}>
                  <TableCell>
                    <div className="font-medium">{app.studentName}</div>
                    <div className="text-xs text-muted-foreground">{app.email}</div>
                  </TableCell>
                  <TableCell>{app.appliedDate}</TableCell>
                  <TableCell className="max-w-md truncate text-sm">
                    {app.motivation}
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      app.status === 'pending' ? 'outline' : 
                      app.status === 'approved' ? 'default' : 'destructive'
                    }>
                      {app.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="icon" variant="ghost" title="View Details">
                        <Eye className="h-4 w-4" />
                      </Button>
                      {app.status === 'pending' && (
                        <>
                          <Button 
                            size="icon" 
                            variant="ghost" 
                            className="text-green-600 hover:text-green-700 hover:bg-green-50"
                            onClick={() => updateStatus(app.id, 'approved')}
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="icon" 
                            variant="ghost" 
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            onClick={() => updateStatus(app.id, 'rejected')}
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
