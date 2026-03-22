
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, ThumbsUp, MessageCircle, Search, TrendingUp, Plus } from 'lucide-react';

export default function StudentDiscussions() {
  const mockThreads = [
    {
      id: 1,
      author: "Dr. Aris Thorne",
      role: "Instructor",
      title: "Thoughts on the latest arXiv paper on Sparse Autoencoders?",
      excerpt: "The methodology used in section 3 seems particularly relevant to our upcoming module on interpretability...",
      replies: 12,
      likes: 45,
      tag: "Academic Deep Dive"
    },
    {
      id: 2,
      author: "Sarah Jenkins",
      role: "Student",
      title: "Help with Gradient Descent implementation",
      excerpt: "I'm seeing some unusual oscillations in my loss curve even with a low learning rate. Has anyone else...",
      replies: 8,
      likes: 12,
      tag: "Technical Support"
    },
    {
      id: 3,
      author: "Marcus Wong",
      role: "Student",
      title: "Study Group for Sunday's Deadline?",
      excerpt: "Looking for 3-4 people to do a virtual deep work session this Sunday at 10 AM EST.",
      replies: 5,
      likes: 7,
      tag: "Networking"
    }
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary font-headline">Cohort Discussions</h1>
          <p className="text-muted-foreground">Exchange high-signal insights with your elite peer group.</p>
        </div>
        <Button className="rounded-full bg-accent hover:bg-accent/90 font-bold">
          <Plus className="mr-2 h-4 w-4" /> Start New Thread
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm uppercase tracking-widest text-slate-400">Trending Tags</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="cursor-pointer">#NeuralNetworks</Badge>
              <Badge variant="secondary" className="cursor-pointer">#StudyGroup</Badge>
              <Badge variant="secondary" className="cursor-pointer">#Interpretability</Badge>
              <Badge variant="secondary" className="cursor-pointer">#IndustryTrends</Badge>
            </CardContent>
          </Card>
          
          <Card className="bg-primary text-white border-none shadow-lg">
            <CardContent className="pt-6">
              <TrendingUp className="h-8 w-8 mb-4 opacity-50" />
              <h3 className="font-bold mb-2">High Activity</h3>
              <p className="text-xs text-white/70">Your cohort has been 40% more active this week than the historical average.</p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search discussions..." className="pl-10 h-11" />
          </div>

          <div className="space-y-4">
            {mockThreads.map((thread) => (
              <Card key={thread.id} className="hover:border-accent/20 transition-all cursor-pointer group">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="text-[10px] uppercase font-bold text-accent border-accent/20">{thread.tag}</Badge>
                    <div className="flex items-center gap-4 text-slate-400">
                      <span className="text-xs flex items-center gap-1"><ThumbsUp className="h-3 w-3" /> {thread.likes}</span>
                      <span className="text-xs flex items-center gap-1"><MessageCircle className="h-3 w-3" /> {thread.replies}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors pt-2">{thread.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 pt-1">
                    <div className="h-5 w-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">
                      {thread.author[0]}
                    </div>
                    {thread.author} • <span className="font-medium text-accent/80">{thread.role}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {thread.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
