import React from 'react';
import { Camera, MapPin } from 'lucide-react';

export default function Observe() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center">
          <Camera className="w-6 h-6 text-[#2563eb]" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-800">Observe</h1>
          <p className="text-slate-600 text-sm">Record new observations in the field</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md border border-sky-100 text-center">
        <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
          <Camera className="w-10 h-10 text-[#2563eb]" />
        </div>
        <h2 className="font-semibold text-slate-800 mb-2">Quick observation</h2>
        <p className="text-slate-600 text-sm mb-4">
          Choose a protocol on Home, then tap Start Observation to begin recording.
        </p>
        <button className="w-full bg-[#2563eb] text-white py-3 rounded-xl font-semibold hover:bg-[#1d4ed8] transition-colors">
          Start new observation
        </button>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-md border border-sky-100">
        <h2 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#2563eb]" />
          Location
        </h2>
        <p className="text-slate-600 text-sm">
          Observations are tagged with your current location. Enable location services for accurate mapping.
        </p>
      </div>
    </div>
  );
}
