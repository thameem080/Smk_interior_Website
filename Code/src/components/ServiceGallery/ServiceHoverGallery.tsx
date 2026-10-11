import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { servicesData, ServiceItem } from '../../data/services';

export const ServiceHoverGallery: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(servicesData[0].id);
  const activeService = servicesData.find((s) => s.id === activeId) || servicesData[0];

  return (
    <div className="w-full">
      {/* Desktop Interactive Service Hover Gallery */}
      <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
        
        {/* Left List of Services */}
        <div className="col-span-6 flex flex-col divide-y divide-brand-brown/10">
          {servicesData.map((service) => {
            const isHovered = activeId === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                className="group py-6 flex items-center justify-between cursor-pointer transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <span className={`text-xs font-mono tracking-widest ${isHovered ? 'text-brand-tan font-bold' : 'text-brand-muted'}`}>
                    {service.number}
                  </span>
                  <Link
                    to="/contact"
                    className={`font-serif text-2xl xl:text-3xl transition-all duration-300 ${
                      isHovered ? 'text-brand-brown font-semibold translate-x-2' : 'text-brand-primary/80 hover:text-brand-brown'
                    }`}
                  >
                    {service.title}
                  </Link>
                </div>

                <Link
                  to="/contact"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isHovered ? 'bg-brand-brown text-white scale-110' : 'bg-brand-brown/5 text-brand-brown opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Right Dynamic Sticky Image Preview */}
        <div className="col-span-6 relative h-[520px] rounded-[2rem] overflow-hidden shadow-bezel border border-brand-brown/10 bg-brand-dark">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0"
            >
              <img
                src={activeService.coverImage}
                alt={activeService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />

              {/* Overlay Details */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-4 text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-tan">
                  Service Feature • {activeService.number}
                </span>
                <h3 className="font-serif text-3xl text-white leading-tight">
                  {activeService.title}
                </h3>
                <p className="text-sm text-brand-cream/80 line-clamp-2 font-light">
                  {activeService.shortDescription}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-brand-cream/90">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>10-Year Warranty Handover</span>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-tan hover:text-white transition-colors"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Mobile Vertical Accordion / Card Stack Fallback */}
      <div className="lg:hidden flex flex-col gap-6">
        {servicesData.map((service) => (
          <div key={service.id} className="mono-card">
            <div className="p-6 flex flex-col gap-4">
              <div className="aspect-[16/10] overflow-hidden rounded-xl">
                <img
                  src={service.coverImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-brand-tan font-bold">{service.number}</span>
                <span className="text-[10px] uppercase tracking-wider bg-brand-brown/5 text-brand-brown px-2.5 py-1 rounded-full font-medium">
                  10-Year Warranty
                </span>
              </div>

              <h3 className="font-serif text-2xl text-brand-primary">{service.title}</h3>
              <p className="text-xs text-brand-muted leading-relaxed font-light">{service.shortDescription}</p>

              <Link
                to="/contact"
                className="w-full text-center py-3.5 rounded-full bg-brand-brown hover:bg-brand-dark active:scale-[0.98] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
