import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowUpRight, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { openWhatsApp } from '../../lib/whatsapp';

interface MaterialItem {
  id: string;
  num: string;
  name: string;
  category: string;
  grade: string;
  image: string;
  highlights: string[];
}

const materialsData: MaterialItem[] = [
  {
    id: 'mat-1',
    num: '01',
    name: 'IS:710 Marine Plywood',
    category: 'Core Joinery',
    grade: 'BWP Marine Grade',
    image: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1200&q=80',
    highlights: ['100% Water Proof', 'Termite Treated', '18mm Calibrated']
  },
  {
    id: 'mat-2',
    num: '02',
    name: 'Italian Calacatta Slabs',
    category: 'Marble Cladding',
    grade: 'Grade A Italy',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Book-Matched Veins', 'Zero Porosity', 'Thermal Resistant']
  },
  {
    id: 'mat-3',
    num: '03',
    name: 'Blum Servo-Drive',
    category: 'Hardware Motion',
    grade: 'Blum Austria',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Electric Soft-Close', '50kg Drawer Capacity', '200k Cycle Tested']
  },
  {
    id: 'mat-4',
    num: '04',
    name: 'Super Matte Acrylic',
    category: 'Cabinet Finish',
    grade: 'German Tech',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Anti-Fingerprint', 'Thermal Micro-Healing', 'UV Fade Guard']
  }
];

export const MaterialSpecBoard: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(materialsData[0].id);
  const [direction, setDirection] = useState<number>(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const activeIndex = materialsData.findIndex((m) => m.id === selectedId);
  const activeMaterial = materialsData[activeIndex >= 0 ? activeIndex : 0];

  const handlePrevTab = () => {
    setDirection(-1);
    const prevIndex = (activeIndex - 1 + materialsData.length) % materialsData.length;
    setSelectedId(materialsData[prevIndex].id);
  };

  const handleNextTab = () => {
    setDirection(1);
    const nextIndex = (activeIndex + 1) % materialsData.length;
    setSelectedId(materialsData[nextIndex].id);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-8">
        
        {/* Section Header & Arrow Navigation Controls */}
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-brand-tan">
              Material Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-primary">
              Craft & Precision
            </h2>
          </div>

          {/* Clean Arrow Navigation Buttons */}
          <div className="flex items-center gap-2">
            {/* Left Arrow Button */}
            <button
              onClick={handlePrevTab}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-brand-brown/10 hover:bg-brand-brown hover:text-white text-brand-brown flex items-center justify-center transition-colors shrink-0 shadow-sm"
              aria-label="Previous Material Standard"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={handleNextTab}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-brand-brown/10 hover:bg-brand-brown hover:text-white text-brand-brown flex items-center justify-center transition-colors shrink-0 shadow-sm"
              aria-label="Next Material Standard"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Material Showcase Card / Interactive Image Carousel */}
        <div className="mono-card-dark p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-brown/20 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeMaterial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Interactive Image Carousel Frame (Web & Mobile) */}
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group touch-pan-y">
                
                {/* Touch Drag & Animated Image Container */}
                <motion.img
                  key={activeMaterial.image}
                  src={activeMaterial.image}
                  alt={activeMaterial.name}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -40) handleNextTab();
                    if (info.offset.x > 40) handlePrevTab();
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-grab active:cursor-grabbing select-none"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Top Grade Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-brand-dark/90 text-white font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 font-semibold shadow-md">
                    {activeMaterial.grade}
                  </span>
                </div>

                {/* Carousel Direct Arrow Buttons Overlay on Image (Web & Mobile) */}
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrevTab(); }}
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 shadow-xl opacity-90 sm:opacity-0 group-hover:opacity-100 active:scale-90 transition-all duration-300 z-20 hover:bg-brand-brown hover:border-brand-brown"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNextTab(); }}
                  className="absolute right-3 sm:left-auto sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 shadow-xl opacity-90 sm:opacity-0 group-hover:opacity-100 active:scale-90 transition-all duration-300 z-20 hover:bg-brand-brown hover:border-brand-brown"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Slide Indicator Dots Overlay (Web & Mobile) */}
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                  {materialsData.map((m, idx) => (
                    <button
                      key={m.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setDirection(idx > activeIndex ? 1 : -1);
                        setSelectedId(m.id);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? 'w-6 bg-brand-tan' : 'w-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>

              {/* Right Minimal Details & Direct Action */}
              <div className="lg:col-span-5 flex flex-col gap-6 text-white">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-tan font-bold">
                    {activeMaterial.category} • {activeMaterial.num}
                  </span>
                  <h3 className="font-serif text-3xl font-semibold text-white">
                    {activeMaterial.name}
                  </h3>
                </div>

                {/* Minimal Bullet Points */}
                <div className="flex flex-col gap-2.5">
                  {activeMaterial.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs text-brand-cream/90 font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-tan">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Certified Standard</span>
                  </div>
                  <button
                    onClick={() => openWhatsApp(`Hi SMK Interior, I'd like to inspect physical material samples of ${activeMaterial.name}.`)}
                    className="px-5 py-2.5 rounded-full bg-brand-cream text-brand-dark font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-1.5 shadow-lg"
                  >
                    <span>Inspect Sample</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
