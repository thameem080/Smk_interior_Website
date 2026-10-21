import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { WhatsAppIcon } from '../../components/WhatsAppButton/WhatsAppIcon';
import { SEOComponent } from '../../components/SEO/SEOComponent';
import { MaterialSpecBoard } from '../../components/MaterialBoard/MaterialSpecBoard';
import { servicesData } from '../../data/services';
import { openWhatsApp } from '../../lib/whatsapp';

export const Services: React.FC = () => {
  return (
    <div className="w-full pt-28 pb-20">
      <SEOComponent
        title="Interior Design Services | SMK Interior Catalog"
        description="Explore SMK Interior's 8 specialized interior services in Chennai: Complete Home Interiors, Modular Kitchens, Bedroom Interiors, Wardrobes, False Ceiling, Office Fitouts."
      />

      {/* Services Grid — Straight to Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div key={service.id} className="mono-card">
              <div className="p-6 sm:p-7 flex flex-col gap-5 h-full justify-between">
                
                <div className="flex flex-col gap-4">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-brand-dark">
                    <img
                      src={service.coverImage}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-brand-dark/80 backdrop-blur-md text-white text-xs font-mono px-3 py-1 rounded-full border border-white/10">
                      {service.number}
                    </div>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-brand-primary font-semibold">
                    <Link to="/contact" className="hover:text-brand-brown transition-colors">
                      {service.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.features.slice(0, 3).map((f, i) => (
                      <span key={i} className="text-[11px] bg-brand-brown/5 text-brand-brown px-3 py-1 rounded-full font-medium flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-brand-tan shrink-0" />
                        <span>{f}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-brown/10 flex items-center justify-between">
                  <span className="text-xs text-brand-muted font-medium font-mono">
                    10-Year Warranty
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openWhatsApp(`Hi SMK Interior, I want to inquire about ${service.title}.`)}
                      className="p-2.5 rounded-full bg-emerald-600/10 text-emerald-600 active:scale-95 transition-transform"
                      aria-label={`WhatsApp Inquiry for ${service.title}`}
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                    </button>

                    <Link
                      to="/contact"
                      className="px-5 py-2.5 rounded-full bg-brand-brown text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 hover:bg-brand-dark active:scale-[0.97] transition-all shadow-md"
                    >
                      <span>Schedule</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MATERIAL STANDARDS — CRAFT & PRECISION */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-brand-cream border-t border-brand-brown/10">
        <div className="max-w-6xl mx-auto">
          <MaterialSpecBoard />
        </div>
      </section>

    </div>
  );
};
