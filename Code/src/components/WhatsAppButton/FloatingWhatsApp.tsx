import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { openWhatsApp } from '../../lib/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40 hidden md:block">
      <button
        onClick={() => openWhatsApp("Hello SMK Interior, I'd like to inquire about interior design services.")}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ring-4 ring-emerald-500/20"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing notification badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
        </span>

        <WhatsAppIcon className="w-8 h-8 drop-shadow-sm" />

        {/* Floating Tooltip */}
        <span className="absolute right-16 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap bg-brand-dark/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-white/10">
          WhatsApp Direct Chat
        </span>
      </button>
    </div>
  );
};
