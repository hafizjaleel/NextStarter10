'use client';

import { Sidebar } from './components/sidebar';
import { Topbar } from './components/topbar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden pl-64">
        {/* Topbar */}
        <Topbar />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto px-8 py-6">
          <div className="mx-auto max-w-screen-2xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
