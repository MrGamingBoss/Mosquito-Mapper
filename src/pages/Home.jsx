import React, { useState } from 'react';
import { Check } from 'lucide-react';

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
              <span className="text-2xl font-light text-slate-500 tracking-tight">GLOBE</span>
              <span className="text-2xl font-bold text-[#2563eb] -mt-1">Observer</span>
            </div>
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
    </>
  );
}
