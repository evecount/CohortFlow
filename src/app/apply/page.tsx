
"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { GraduationCap, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center py-10">
          <CardHeader>
            <div className="mx-auto bg-green-100 p-3 rounded-full w-fit mb-4">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold">Application Received</CardTitle>
            <CardDescription className="text-lg">
              Thank you for applying to CohortFlow. Our admissions committee will review your application and get back to you within 48 hours.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-12 px-4">
      <Link href="/" className="flex items-center text-primary font-semibold mb-8 hover:opacity-80 transition-opacity">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
      
      <Card className="max-w-2xl w-full shadow-xl">
        <CardHeader className="text-center bg-primary text-primary-foreground rounded-t-lg py-8">
          <div className="mx-auto bg-white/20 p-2 rounded-lg w-fit mb-4">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-headline">Academy Application</CardTitle>
          <CardDescription className="text-primary-foreground/80">
            Tell us about your background and why you want to join our next cohort.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input required placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input required type="email" placeholder="email@example.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">LinkedIn Profile URL</label>
              <Input placeholder="https://linkedin.com/in/..." />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Current Role & Company</label>
              <Input required placeholder="Senior Developer at TechCorp" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Why do you want to join this cohort?</label>
              <Textarea 
                required 
                placeholder="Share your goals and what you hope to achieve..." 
                className="min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">What is your biggest professional achievement?</label>
              <Textarea 
                required 
                placeholder="Help us understand your experience level..." 
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
          <CardFooter className="pb-8">
            <Button type="submit" className="w-full h-12 text-lg font-semibold" disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      <p className="mt-8 text-sm text-muted-foreground">
        By submitting, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}
