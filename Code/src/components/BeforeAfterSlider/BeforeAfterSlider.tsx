import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE — RAW SHELL",
  afterLabel = "AFTER — SMK INTERIOR TRANSFORMATION",
  className = ""
}) => {
  const [activeMode, setActiveMode] = useState<'after' | 'before'>('after');

  const isAfter = activeMode === 'after';

  const toggleMode = () => {
    setActiveMode(prev => (prev === 'after' ? 'before' : 'after'));
  };

  return (
    <div className={`relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-[2rem] border border-brand-brown/10 shadow-bezel group bg-brand-dark ${className}`}>
      
      {/* Main Image Display with Motion */}
      <AnimatePresence mode="wait">
        <motion.img
          key={activeMode}
          src={isAfter ? afterImage : beforeImage}
          alt={isAfter ? afterLabel : beforeLabel}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Mode Badge Top Left */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2">
        <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-lg border transition-all duration-300 flex items-center gap-1.5 ${
          isAfter
            ? 'bg-brand-brown/90 text-white border-white/20'
            : 'bg-black/75 text-brand-cream border-white/10'
        }`}>
          {isAfter ? <Sparkles className="w-3.5 h-3.5 text-amber-300" /> : <Layers className="w-3.5 h-3.5 text-brand-tan" />}
          <span>{isAfter ? afterLabel : beforeLabel}</span>
        </span>
      </div>

      {/* Left and Right Navigation Arrow Overlay Buttons */}
      <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-3 sm:px-6 pointer-events-none">
        <button
          onClick={toggleMode}
          className="pointer-events-auto w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-brand-dark/80 hover:bg-brand-brown text-white border border-white/20 flex items-center justify-center shadow-2xl active:scale-[0.93] transition-all duration-300 group/btn"
          aria-label="View Before Renovation Image"
        >
          <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 group-hover/btn:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={toggleMode}
          className="pointer-events-auto w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-brand-dark/80 hover:bg-brand-brown text-white border border-white/20 flex items-center justify-center shadow-2xl active:scale-[0.93] transition-all duration-300 group/btn"
          aria-label="View After Transformation Image"
        >
          <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Bottom Mode Switcher Pills */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 p-1.5 rounded-full bg-brand-dark/80 backdrop-blur-md border border-white/15 shadow-2xl">
        <button
          onClick={() => setActiveMode('before')}
          className={`px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
            !isAfter ? 'bg-brand-tan text-brand-dark font-bold shadow-md' : 'text-brand-cream/70 hover:text-white'
          }`}
        >
          Before
        </button>
        <button
          onClick={() => setActiveMode('after')}
          className={`px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
            isAfter ? 'bg-brand-brown text-white font-bold shadow-md' : 'text-brand-cream/70 hover:text-white'
          }`}
        >
          After SMK
        </button>
      </div>

    </div>
  );
};
