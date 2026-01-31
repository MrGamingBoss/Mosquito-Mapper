import React from 'react';
import { Camera, MapPin } from 'lucide-react';

export default function Observe() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
          <Camera className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">Observe</h1>
          <p className="text-white/80 text-sm">Record new observations in the field</p>
        </div>
      </div>

      <div className="bg-white/10 rounded-xl p-6 shadow-md border border-white/20 text-center">
        <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
          <Camera className="w-10 h-10 text-white" />
        </div>
        <h2 className="font-semibold text-white mb-2">Quick observation</h2>
        <p className="text-white/90 text-sm mb-4">
          Choose a protocol on Home, then tap Start Observation to begin recording.
        </p>
        <button className="w-full bg-[#123259] text-white py-3 rounded-xl font-semibold hover:bg-[#0f2a4a] transition-colors">
          Start new observation
        </button>
      </div>

      <div className="bg-white/10 rounded-xl p-4 shadow-md border border-white/20">
        <h2 className="font-semibold text-white mb-3 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-white" />
          Location
        </h2>
        <p className="text-white/90 text-sm">
          Observations are tagged with your current location. Enable location services for accurate mapping.
        </p>
      </div>
    </div>
  );
}
