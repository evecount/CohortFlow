
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Palette, Globe, Shield, Bell, Laptop, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminSettings() {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings Synchronized",
      description: "Academy white-label configurations have been updated."
    });
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-primary font-headline">Academy Settings</h1>
        <p className="text-muted-foreground">Configure your white-label infrastructure and agentic permissions.</p>
      </div>

      <Tabs defaultValue="branding" className="w-full">
        <TabsList className="bg-white border mb-6">
          <TabsTrigger value="branding" className="flex items-center gap-2">
            <Palette className="h-4 w-4" /> Branding
          </TabsTrigger>
          <TabsTrigger value="domain" className="flex items-center gap-2">
            <Globe className="h-4 w-4" /> Domain & SEO
          </TabsTrigger>
          <TabsTrigger value="agents" className="flex items-center gap-2">
            <Laptop className="h-4 w-4" /> Agentic Config
          </TabsTrigger>
        </TabsList>

        <TabsContent value="branding">
          <Card>
            <CardHeader>
              <CardTitle>Visual Identity</CardTitle>
              <CardDescription>Customize the student experience to match your premium brand.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Academy Name</Label>
                  <Input defaultValue="DataScience Pro Academy" />
                </div>
                <div className="space-y-2">
                  <Label>Primary Color (Hex)</Label>
                  <div className="flex gap-2">
                    <Input defaultValue="#2966A3" className="font-mono" />
                    <div className="w-10 h-10 rounded-md border bg-[#2966A3]" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Academy Logo</Label>
                <div className="flex items-center gap-4 p-4 border rounded-lg bg-slate-50">
                  <div className="h-12 w-12 bg-white rounded border flex items-center justify-center font-bold text-primary">DS</div>
                  <Button variant="outline" size="sm">Replace Logo</Button>
                </div>
              </div>

              <div className="pt-4 space-y-4 border-t">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Dark Mode by Default</Label>
                    <p className="text-xs text-muted-foreground">Force the dashboard into high-contrast dark mode for all students.</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-50 border-t justify-end">
              <Button onClick={handleSave} className="bg-primary rounded-full font-bold">
                <Save className="mr-2 h-4 w-4" /> Save Branding
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="domain">
          <Card>
            <CardHeader>
              <CardTitle>Custom Domain</CardTitle>
              <CardDescription>Host your academy on your own professional domain.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Domain Name</Label>
                <div className="flex gap-2">
                  <Input placeholder="academy.yourbrand.com" />
                  <Button variant="outline">Verify DNS</Button>
                </div>
                <p className="text-xs text-muted-foreground">Point your CNAME records to <code>ingress.cohortflow.io</code></p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="agents">
          <Card>
            <CardHeader>
              <CardTitle>Agentic Orchestration</CardTitle>
              <CardDescription>Define how AI agents interact with your curriculum and students.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="space-y-0.5">
                    <Label className="text-base">Autonomous Admissions</Label>
                    <p className="text-xs text-muted-foreground">Allow agents to auto-approve high-signal applicants (Score > 90).</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="space-y-0.5">
                    <Label className="text-base">Curriculum Architecting</Label>
                    <p className="text-xs text-muted-foreground">Allow Instructional Agents to modify module descriptions based on feedback.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Multimodal Research Pipeline</Label>
                    <p className="text-xs text-muted-foreground text-accent font-medium">Enable high-frequency data capture for deep learning research.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
