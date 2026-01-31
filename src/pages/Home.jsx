import React, { useState } from 'react';
import { Check, Globe, ExternalLink } from 'lucide-react';

const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://www.facebook.com/TheGLOBEProgram/', icon: 'facebook' },
  { name: 'X', href: 'https://x.com/globeprogram', icon: 'x' },
  { name: 'Instagram', href: 'https://www.instagram.com/globeprogram/', icon: 'instagram' },
  { name: 'YouTube', href: 'https://youtube.com/@globeprogram?si=bfNqfrsw5F3vzRTH', icon: 'youtube' },
];

const WEBSITE_LINKS = [
  { label: 'Visit the GLOBE Website', href: 'https://www.globe.gov' },
  { label: 'Visit the Observer Website', href: 'https://observer.globe.gov' },
];

const protocols = [
  {
    id: 'data-entry',
    name: 'Data Entry',
    image: '/images/forest-canopy.png'
  },
  {
    id: 'clouds',
    name: 'Clouds',
    image: '/images/sky-clouds.png'
  },
  {
    id: 'mosquito',
    name: 'Mosquito Habitat-Mapper',
    image: '/images/mosquito-leaf.png'
  },
  {
    id: 'land-cover',
    name: 'Land Cover',
    image: '/images/forest-canopy.png'
  },
  {
    id: 'trees',
    name: 'Trees',
    image: '/images/forest-canopy.png'
  }
];

export default function Home() {
  const [selectedProtocol, setSelectedProtocol] = useState(null);

  const handleProtocolSelect = (protocolId) => {
    setSelectedProtocol(selectedProtocol === protocolId ? null : protocolId);
  };

  return (
    <>
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-6">
          <div className="flex flex-col items-center gap-2 mb-2">
            <img
              src="/images/globe-observer-logo.png"
              alt="GLOBE Observer"
              className="h-20 w-auto object-contain"
            />
          </div>
          <p className="text-slate-600 text-lg mt-2">Choose your protocol:</p>
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
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              
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
          <div className="mt-6 bg-white rounded-xl p-4 shadow-md animate-in slide-in-from-bottom-2 duration-300 border border-sky-100">
            <p className="text-[#2563eb] font-semibold text-center">
              {protocols.find(p => p.id === selectedProtocol)?.name} selected
            </p>
            <button className="w-full mt-3 bg-[#2563eb] text-white py-3 rounded-xl font-semibold hover:bg-[#1d4ed8] transition-colors">
              Start Observation
            </button>
          </div>
        )}

      {/* Footer: Social, Websites, Sponsors */}
      <footer className="mt-8 rounded-2xl overflow-hidden bg-[#2563eb] text-white shadow-lg border border-sky-200">
        {/* Social media row */}
        <div className="flex justify-center gap-3 p-4">
          {SOCIAL_LINKS.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center border border-white/20 transition-colors"
              aria-label={name}
            >
              {icon === 'facebook' && (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              )}
              {icon === 'x' && (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              )}
              {icon === 'instagram' && (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              )}
              {icon === 'youtube' && (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Website buttons */}
        <div className="px-4 pb-4 flex flex-col gap-2">
          {WEBSITE_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-white/60 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              {label === 'Visit the GLOBE Website' ? <Globe className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
              {label}
            </a>
          ))}
        </div>

        {/* Sponsored by / Supported by */}
        <div className="px-4 pb-5 pt-2 border-t border-white/20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col items-center min-w-[100px]">
              <span className="text-xs font-medium text-white/90 uppercase tracking-wider mb-2">Sponsored by</span>
              <img
                src="/images/nasa-logo.png"
                alt="NASA"
                className="h-14 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col items-center flex-1 min-w-[160px]">
              <span className="text-xs font-medium text-white/90 uppercase tracking-wider mb-2">Supported by</span>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <img
                  src="/images/nsf-logo.png"
                  alt="National Science Foundation"
                  className="h-12 w-auto object-contain"
                />
                <img
                  src="/images/noaa-logo.png"
                  alt="NOAA"
                  className="h-12 w-auto object-contain"
                />
                <img
                  src="/images/state-dept-logo.png"
                  alt="U.S. Department of State"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
