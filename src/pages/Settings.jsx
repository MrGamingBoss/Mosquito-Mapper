import React from 'react';
import { Settings as SettingsIcon, User, Bell, MapPin, Moon } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
          <SettingsIcon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">Settings</h1>
          <p className="text-white/80 text-sm">Manage your account and preferences</p>
        </div>
      </div>

      <div className="bg-white/10 rounded-xl shadow-md border border-white/20 overflow-hidden">
        <a href="#" className="flex items-center gap-3 p-4 hover:bg-white/10 transition-colors">
          <User className="w-5 h-5 text-white shrink-0" />
          <div className="flex-1 text-left">
            <p className="font-medium text-white">Account</p>
            <p className="text-sm text-white/80">Profile and login</p>
          </div>
        </a>
        <a href="#" className="flex items-center gap-3 p-4 border-t border-white/20 hover:bg-white/10 transition-colors">
          <Bell className="w-5 h-5 text-white shrink-0" />
          <div className="flex-1 text-left">
            <p className="font-medium text-white">Notifications</p>
            <p className="text-sm text-white/80">Alerts and reminders</p>
          </div>
        </a>
        <a href="#" className="flex items-center gap-3 p-4 border-t border-white/20 hover:bg-white/10 transition-colors">
          <MapPin className="w-5 h-5 text-white shrink-0" />
          <div className="flex-1 text-left">
            <p className="font-medium text-white">Location</p>
            <p className="text-sm text-white/80">GPS and location accuracy</p>
          </div>
        </a>
        <a href="#" className="flex items-center gap-3 p-4 border-t border-white/20 hover:bg-white/10 transition-colors">
          <Moon className="w-5 h-5 text-white shrink-0" />
          <div className="flex-1 text-left">
            <p className="font-medium text-white">Appearance</p>
            <p className="text-sm text-white/80">Theme and display</p>
          </div>
        </a>
      </div>

      <div className="text-center">
        <p className="text-xs text-white/70">GLOBE Observer • Mosquito Mapper</p>
      </div>
    </div>
  );
}
