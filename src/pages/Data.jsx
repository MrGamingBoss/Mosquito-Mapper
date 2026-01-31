import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export default function Data() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-[#2563eb]" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-800">Data</h1>
          <p className="text-slate-600 text-sm">View your observations and statistics</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-md border border-sky-100">
        <h2 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#2563eb]" />
          Recent observations
        </h2>
        <p className="text-slate-600 text-sm">
          Your submitted observations will appear here. Start an observation from Home to add data.
        </p>
        <div className="mt-4 p-4 rounded-lg bg-sky-50 border border-sky-100 text-center text-slate-500 text-sm">
          No observations yet
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-md border border-sky-100">
        <h2 className="font-semibold text-slate-800 mb-3">Summary</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-sky-50 text-center">
            <p className="text-2xl font-bold text-[#2563eb]">0</p>
            <p className="text-xs text-slate-600">Total observations</p>
          </div>
          <div className="p-3 rounded-lg bg-sky-50 text-center">
            <p className="text-2xl font-bold text-[#2563eb]">0</p>
            <p className="text-xs text-slate-600">This month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
