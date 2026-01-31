import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home as HomeIcon, BarChart3, Camera, HelpCircle, Settings } from 'lucide-react';

const navItems = [
  { id: 'home', path: '/', icon: HomeIcon, label: 'Home' },
  { id: 'data', path: '/data', icon: BarChart3, label: 'Data', badge: 1 },
  { id: 'observe', path: '/observe', icon: Camera, label: 'Observe', isMain: true },
  { id: 'help', path: '/help', icon: HelpCircle, label: 'Help' },
  { id: 'settings', path: '/settings', icon: Settings, label: 'Settings' },
];

export default function AppLayout({ children, currentPageName }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (path) => {
    if (path === '/') return pathname === '/' || pathname === '/Home';
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <div className="min-h-screen bg-[#123259] flex flex-col">
      {/* Header */}
      <header className="bg-[#123259] text-white px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2 min-w-0">
          <img
            src="/images/globe-observer-logo.png"
            alt="GLOBE Observer"
            className="h-8 w-auto object-contain"
          />
          <span className="text-sm font-medium tracking-wide shrink-0">GLOBE Observer</span>
        </div>
        <img
          src="/images/nasa-logo.png"
          alt="NASA"
          className="h-10 w-auto object-contain shrink-0"
        />
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 overflow-auto">
        {children}
      </main>

      {/* Bottom Navigation - white only */}
      <nav className="bg-white px-2 py-2 safe-area-bottom shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`relative flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
                  item.isMain
                    ? 'bg-[#123259] -mt-6 w-16 h-16 rounded-2xl shadow-lg text-white'
                    : active
                      ? 'text-[#123259]'
                      : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <item.icon className={item.isMain ? 'w-8 h-8 text-white' : 'w-6 h-6'} />
                {item.badge && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
