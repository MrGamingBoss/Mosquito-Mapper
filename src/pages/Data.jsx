import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export default function Data() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">Data</h1>
          <p className="text-white/80 text-sm">View your observations and statistics</p>
        </div>
      </div>

      <div className="bg-white/10 rounded-xl p-4 shadow-md border border-white/20">
        <h2 className="font-semibold text-white mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-white" />
          Recent observations
        </h2>
        <p className="text-white/90 text-sm">
          Your submitted observations will appear here. Start an observation from Home to add data.
        </p>
        <div className="mt-4 p-4 rounded-lg bg-white/10 border border-white/20 text-center text-white/80 text-sm">
          No observations yet
        </div>
      </div>

      <div className="bg-white/10 rounded-xl p-4 shadow-md border border-white/20">
        <h2 className="font-semibold text-white mb-3">Summary</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-white/10 text-center">
            <p className="text-2xl font-bold text-white">0</p>
            <p className="text-xs text-white/80">Total observations</p>
          </div>
          <div className="p-3 rounded-lg bg-white/10 text-center">
            <p className="text-2xl font-bold text-white">0</p>
            <p className="text-xs text-white/80">This month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
