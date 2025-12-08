'use client';

import { Users } from 'lucide-react';

export function WebinarAnalytics() {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Webinar Registrations</h3>
          <p className="mt-1 text-sm text-slate-600">Last 7 days</p>
        </div>
        <div className="rounded-lg bg-purple-100 p-3">
          <Users className="h-6 w-6 text-purple-600" strokeWidth={2} />
        </div>
      </div>

      {/* Placeholder Chart Area */}
      <div className="mt-6 h-64 rounded-lg bg-slate-100" />
    </div>
  );
}
