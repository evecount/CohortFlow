"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  MessageSquare, 
  Award, 
  Settings, 
  LogOut,
  GraduationCap,
  ClipboardList,
  BookOpen,
  Wand2,
  Laptop
} from 'lucide-react';

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

interface DashboardSidebarProps {
  type: 'admin' | 'student';
}

export function DashboardSidebar({ type }: DashboardSidebarProps) {
  const pathname = usePathname();

  const adminItems: SidebarItem[] = [
    { icon: LayoutDashboard, label: 'Overview', href: '/admin/dashboard' },
    { icon: ClipboardList, label: 'Applications', href: '/admin/applications' },
    { icon: Wand2, label: 'Course Builder', href: '/admin/builder' },
    { icon: Laptop, label: 'Rehearsal Lab', href: '/admin/rehearsal' },
    { icon: Users, label: 'Cohorts', href: '/admin/cohorts' },
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
  ];

  const studentItems: SidebarItem[] = [
    { icon: LayoutDashboard, label: 'My Dashboard', href: '/dashboard' },
    { icon: Calendar, label: 'Schedule', href: '/dashboard/schedule' },
    { icon: Award, label: 'Peer Reviews', href: '/dashboard/peer-review' },
    { icon: BookOpen, label: 'Alumni Directory', href: '/dashboard/alumni' },
    { icon: MessageSquare, label: 'Discussions', href: '/dashboard/discussions' },
  ];

  const items = type === 'admin' ? adminItems : studentItems;

  return (
    <aside className="w-64 bg-white border-r flex flex-col h-screen fixed left-0 top-0">
      <div className="p-6 border-b flex items-center gap-2">
        <GraduationCap className="h-8 w-8 text-primary" />
        <div className="flex flex-col">
          <span className="font-bold text-lg text-primary leading-none">CohortFlow</span>
          <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
            {type} Portal
          </span>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors",
                isActive 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:bg-slate-100 hover:text-primary"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-sm font-medium text-red-500 hover:bg-red-50 rounded-md transition-colors">
          <LogOut className="h-5 w-5" />
          Log Out
        </button>
      </div>
    </aside>
  );
}
