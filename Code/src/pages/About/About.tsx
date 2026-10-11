import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck, Layers, Sparkles } from 'lucide-react';
import { SEOComponent } from '../../components/SEO/SEOComponent';
import { openWhatsApp } from '../../lib/whatsapp';

export const About: React.FC = () => {
  return (
    <div className="w-full pt-28 pb-20">
      <SEOComponent
        title="About Studio | SMK Interior Chennai"
        description="Learn about SMK Interior's studio philosophy, architectural craftsmanship, 10-year material guarantee, and passion for modern residential & commercial design in Chennai."
      />

      {/* Split-Screen Story & Craftsmanship */}
      <section className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-bezel border border-brand-brown/10">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
              alt="SMK Interior Studio Philosophy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-brand-tan">
              Studio Story & Craft
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-brand-primary leading-tight">
              Where Detail Meets Transformation
            </h1>
            <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
              Founded and led by Mohammed Sheik, SMK Interior is built around an uncompromising promise: zero hidden costs, 100% BWR Marine Plywood structural joinery, 10-year warranty, and photorealistic 3D rendering before any factory production begins.
            </p>
            <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
              Based at GST Road, Guduvanchery, our studio delivers turnkey interior transformations, modular kitchens, custom Pooja mandirs, and bespoke living spaces across Chennai. We bridge the gap between luxury architectural quality and disciplined execution timeline guarantees.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-brand-brown/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-primary">
                <Check className="w-4 h-4 text-brand-tan shrink-0" />
                <span>100% BWR Marine Plywood</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-primary">
                <Check className="w-4 h-4 text-brand-tan shrink-0" />
                <span>German Blum Hardware</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-primary">
                <Check className="w-4 h-4 text-brand-tan shrink-0" />
                <span>Factory CNC Millwork</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-primary">
                <Check className="w-4 h-4 text-brand-tan shrink-0" />
                <span>10-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="text-center flex flex-col gap-2">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-brand-tan">
              Studio Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-primary">
              Our Core Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="mono-card p-6 sm:p-8 flex flex-col gap-4">
              <Sparkles className="w-7 h-7 text-brand-brown" />
              <h3 className="font-serif text-2xl text-brand-primary font-semibold">1. Architectural Proportion</h3>
              <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                We don't just fill rooms with cabinets. We calibrate ceiling height ratios, continuous floor tile planes, and concealed door entryways to make spaces feel grand.
              </p>
            </div>

            <div className="mono-card p-6 sm:p-8 flex flex-col gap-4">
              <Layers className="w-7 h-7 text-brand-brown" />
              <h3 className="font-serif text-2xl text-brand-primary font-semibold">2. Material Honesty</h3>
              <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                We use genuine BWR marine plywood, solid hardwood louvers, sintered stone backdrops, and anti-fingerprint acrylic laminates built for tropical climates.
              </p>
            </div>

            <div className="mono-card p-6 sm:p-8 flex flex-col gap-4">
              <ShieldCheck className="w-7 h-7 text-brand-brown" />
              <h3 className="font-serif text-2xl text-brand-primary font-semibold">3. Execution Discipline</h3>
              <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                Factory precision cutting means minimum dust and noise on-site. We guarantee precision installation and 10-year structural warranty handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 rounded-2xl bg-brand-brown text-white text-center sm:text-left">
          <div className="flex flex-col gap-1">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold">Ready to Discuss Your Space?</h3>
            <p className="text-xs sm:text-sm text-brand-cream/80 font-light">Connect directly with our lead interior architects for an on-site consultation.</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-brand-cream text-brand-brown font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors"
            >
              Consultation
            </Link>
            <button
              onClick={() => openWhatsApp("Hi SMK Interior, I'd like to discuss an interior project with your studio.")}
              className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
