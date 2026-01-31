import React, { useState } from 'react';
import { Home as HomeIcon, BarChart3, Camera, HelpCircle, Settings, Check } from 'lucide-react';

const protocols = [
  {
    id: 'data-entry',
    name: 'Data Entry',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
  },
  {
    id: 'clouds',
    name: 'Clouds',
    image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400&h=300&fit=crop'
  },
  {
    id: 'mosquito',
    name: 'Mosquito Habitat-Mapper',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop'
  },
  {
    id: 'land-cover',
    name: 'Land Cover',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop'
  },
  {
    id: 'trees',
    name: 'Trees',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop'
  }
];

export default function Home() {
  const [selectedProtocol, setSelectedProtocol] = useState(null);
  const [activeNav, setActiveNav] = useState('home');

  const handleProtocolSelect = (protocolId) => {
    setSelectedProtocol(selectedProtocol === protocolId ? null : protocolId);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-[#1e3a5f] text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <ellipse cx="12" cy="12" rx="10" ry="4"/>
              <line x1="12" y1="2" x2="12" y2="22"/>
            </svg>
          </div>
          <span className="text-sm font-medium tracking-wide">THE <span className="font-bold">GLOBE</span> PROGRAM</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <span className="text-[#1e3a5f] text-xs font-bold">NASA</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 overflow-auto">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-3 mb-2">
            {/* GLOBE Logo - Magnifying glass with globe */}
            <div className="relative w-20 h-20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Globe with grid lines */}
                <circle cx="38" cy="55" r="28" fill="none" stroke="#c0c7cf" strokeWidth="3"/>
                {/* Horizontal lines on globe */}
                <ellipse cx="38" cy="45" rx="28" ry="8" fill="none" stroke="#c0c7cf" strokeWidth="1.5"/>
                <ellipse cx="38" cy="55" rx="28" ry="12" fill="none" stroke="#c0c7cf" strokeWidth="1.5"/>
                <ellipse cx="38" cy="65" rx="28" ry="8" fill="none" stroke="#c0c7cf" strokeWidth="1.5"/>
                {/* Vertical lines on globe */}
                <ellipse cx="38" cy="55" rx="10" ry="28" fill="none" stroke="#c0c7cf" strokeWidth="1.5"/>
                <line x1="38" y1="27" x2="38" y2="83" stroke="#c0c7cf" strokeWidth="1.5"/>
                {/* Magnifying glass circle */}
                <circle cx="62" cy="38" r="24" fill="none" stroke="#c0c7cf" strokeWidth="4"/>
                {/* Magnifying glass handle */}
                <line x1="38" y1="55" x2="18" y2="78" stroke="#c0c7cf" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-light text-[#c0c7cf] tracking-tight">GLOBE</span>
              <span className="text-2xl font-bold text-[#2563eb] -mt-1">Observer</span>
            </div>
          </div>
          <p className="text-gray-600 text-lg mt-2">Choose your protocol:</p>
        </div>

        {/* Protocol Grid */}
        <div className="grid grid-cols-2 gap-3">
          {protocols.map((protocol) => (
            <button
              key={protocol.id}
              onClick={() => handleProtocolSelect(protocol.id)}
              className={`relative overflow-hidden rounded-xl h-28 transition-all duration-300 transform ${
                selectedProtocol === protocol.id 
                  ? 'ring-4 ring-[#2563eb] scale-[1.02] shadow-lg' 
                  : 'shadow-md hover:shadow-lg hover:scale-[1.01]'
              }`}
            >
              {/* Background Image */}
              <img 
                src={protocol.image} 
                alt={protocol.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Selection indicator */}
              {selectedProtocol === protocol.id && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-[#2563eb] rounded-full flex items-center justify-center z-10">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
              
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/80 to-transparent" />
              
              {/* Text */}
              <div className="absolute inset-0 p-3 flex flex-col justify-end">
                <span className="text-white font-bold text-sm leading-tight drop-shadow-md text-left">
                  {protocol.name}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Protocol Info */}
        {selectedProtocol && (
          <div className="mt-6 bg-white rounded-xl p-4 shadow-md animate-in slide-in-from-bottom-2 duration-300">
            <p className="text-[#1e3a5f] font-semibold text-center">
              {protocols.find(p => p.id === selectedProtocol)?.name} selected
            </p>
            <button className="w-full mt-3 bg-[#2563eb] text-white py-3 rounded-xl font-semibold hover:bg-[#1d4ed8] transition-colors">
              Start Observation
            </button>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-[#1e3a5f] px-2 py-2 safe-area-bottom">
        <div className="flex justify-around items-center">
          {[
            { id: 'home', icon: HomeIcon, label: 'Home' },
            { id: 'data', icon: BarChart3, label: 'Data', badge: 1 },
            { id: 'camera', icon: Camera, label: 'Observe', isMain: true },
            { id: 'help', icon: HelpCircle, label: 'Help' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`relative flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
                item.isMain 
                  ? 'bg-sky-400 -mt-6 w-16 h-16 rounded-2xl shadow-lg' 
                  : activeNav === item.id 
                    ? 'text-sky-400' 
                    : 'text-white/70 hover:text-white'
              }`}
            >
              <item.icon className={`${item.isMain ? 'w-8 h-8 text-white' : 'w-6 h-6'}`} />
              {item.badge && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
