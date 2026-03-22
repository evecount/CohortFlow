
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <DashboardSidebar type="admin" />
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
