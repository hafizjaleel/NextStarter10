'use client';

import { Search, Bell, User } from 'lucide-react';

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-100 bg-white px-8">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full bg-slate-50 px-5 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-emerald-100"
          />
          <Search className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-slate-50 rounded-lg transition">
          <Bell className="h-5 w-5 text-slate-400" stroke-width={2} />
          <span className="absolute top-1 right-1 h-2 w-2 bg-rose-500 rounded-full" />
        </button>

        <button className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-50 transition">
          <div className="h-8 w-8 rounded-full bg-emerald-100" />
          <div className="hidden sm:block text-right">
            <p className="text-xs font-medium text-slate-900">Admin</p>
            <p className="text-xs text-slate-500">Administrator</p>
          </div>
        </button>
      </div>
    </header>
  );
}
