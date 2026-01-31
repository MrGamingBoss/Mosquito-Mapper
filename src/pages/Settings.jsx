import React from 'react';
import { Settings as SettingsIcon, User, Bell, MapPin, Moon } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center">
          <SettingsIcon className="w-6 h-6 text-[#2563eb]" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-800">Settings</h1>
          <p className="text-slate-600 text-sm">Manage your account and preferences</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-sky-100 overflow-hidden">
        <a href="#" className="flex items-center gap-3 p-4 hover:bg-sky-50/50 transition-colors">
          <User className="w-5 h-5 text-[#2563eb] shrink-0" />
          <div className="flex-1 text-left">
            <p className="font-medium text-slate-800">Account</p>
            <p className="text-sm text-slate-600">Profile and login</p>
          </div>
        </a>
        <a href="#" className="flex items-center gap-3 p-4 border-t border-sky-100 hover:bg-sky-50/50 transition-colors">
          <Bell className="w-5 h-5 text-[#2563eb] shrink-0" />
          <div className="flex-1 text-left">
            <p className="font-medium text-slate-800">Notifications</p>
            <p className="text-sm text-slate-600">Alerts and reminders</p>
          </div>
        </a>
        <a href="#" className="flex items-center gap-3 p-4 border-t border-sky-100 hover:bg-sky-50/50 transition-colors">
          <MapPin className="w-5 h-5 text-[#2563eb] shrink-0" />
          <div className="flex-1 text-left">
            <p className="font-medium text-slate-800">Location</p>
            <p className="text-sm text-slate-600">GPS and location accuracy</p>
          </div>
        </a>
        <a href="#" className="flex items-center gap-3 p-4 border-t border-sky-100 hover:bg-sky-50/50 transition-colors">
          <Moon className="w-5 h-5 text-[#2563eb] shrink-0" />
          <div className="flex-1 text-left">
            <p className="font-medium text-slate-800">Appearance</p>
            <p className="text-sm text-slate-600">Theme and display</p>
          </div>
        </a>
      </div>

      <div className="text-center">
        <p className="text-xs text-slate-500">GLOBE Observer • Mosquito Mapper</p>
      </div>
    </div>
  );
}
