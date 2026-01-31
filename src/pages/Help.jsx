import React from 'react';
import { HelpCircle, BookOpen, Mail, ExternalLink } from 'lucide-react';

export default function Help() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center">
          <HelpCircle className="w-6 h-6 text-[#2563eb]" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-800">Help</h1>
          <p className="text-slate-600 text-sm">Guides and support for GLOBE Observer</p>
        </div>
      </div>

      <div className="space-y-3">
        <a href="#" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border border-sky-100 hover:border-[#2563eb]/30 transition-colors">
          <BookOpen className="w-5 h-5 text-[#2563eb] shrink-0" />
          <div className="flex-1 text-left">
            <p className="font-semibold text-slate-800">Getting started</p>
            <p className="text-sm text-slate-600">Learn how to use the app and submit observations</p>
          </div>
          <ExternalLink className="w-4 h-4 text-slate-400" />
        </a>

        <a href="#" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border border-sky-100 hover:border-[#2563eb]/30 transition-colors">
          <HelpCircle className="w-5 h-5 text-[#2563eb] shrink-0" />
          <div className="flex-1 text-left">
            <p className="font-semibold text-slate-800">FAQ</p>
            <p className="text-sm text-slate-600">Common questions about protocols and data</p>
          </div>
          <ExternalLink className="w-4 h-4 text-slate-400" />
        </a>

        <a href="#" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border border-sky-100 hover:border-[#2563eb]/30 transition-colors">
          <Mail className="w-5 h-5 text-[#2563eb] shrink-0" />
          <div className="flex-1 text-left">
            <p className="font-semibold text-slate-800">Contact support</p>
            <p className="text-sm text-slate-600">Get help from the GLOBE team</p>
          </div>
          <ExternalLink className="w-4 h-4 text-slate-400" />
        </a>
      </div>

      <div className="bg-sky-50 rounded-xl p-4 border border-sky-100">
        <p className="text-sm text-slate-600">
          <strong className="text-slate-800">GLOBE Observer</strong> is part of NASA&apos;s GLOBE Program. Your observations help scientists study Earth.
        </p>
      </div>
    </div>
  );
}
