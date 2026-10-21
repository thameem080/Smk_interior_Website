import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck, Layers, Sparkles, Play } from 'lucide-react';
import { SEOComponent } from '../../components/SEO/SEOComponent';
import { WhatsAppIcon } from '../../components/WhatsAppButton/WhatsAppIcon';
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

      {/* CINEMATIC VIDEO & DESIGN IN MOTION */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-brand-dark text-white relative overflow-hidden bg-grid-pattern-dark my-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-brand-tan">
              Behind The Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
              DESIGN IN MOTION.
            </h2>
            <p className="text-xs sm:text-sm font-light text-brand-cream/80 leading-relaxed">
              Witness how bare concrete structures are systematically transformed into warm, modern spaces. From initial CAD 3D layout measurement to precision factory millwork and final zero-dust installation.
            </p>

            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-brown/50 text-brand-tan flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-cream">3D Architectural Spatial Rendering</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-brown/50 text-brand-tan flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-cream">German CNC Factory Manufacturing</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-brown/50 text-brand-tan flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-cream">On-Site Assembly & QC Inspection</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 shadow-bezel-dark group sheen-glow">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
                alt="Design in Motion Studio Video Showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button
                  onClick={() => openWhatsApp("Hi SMK Interior, I'd like to see video walkthroughs of your recent projects.")}
                  className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-brand-brown/90 hover:bg-brand-tan text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
                  aria-label="Play Project Video"
                >
                  <Play className="w-6 sm:w-8 h-6 sm:h-8 fill-current translate-x-0.5" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-brand-dark/80 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] uppercase tracking-widest text-brand-cream border border-white/10">
                Cinematic Project Walkthrough
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5-STEP PROCESS — HOW WE WORK */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-brand-cream">
        <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
          <div className="flex flex-col gap-2 sm:gap-3 text-center items-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-brand-tan">
              How We Work
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-primary">
              Our 5-Step Execution Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Discover', desc: 'Detailed site measurement, lifestyle consultation, and space budget planning.' },
              { step: '02', title: 'Plan', desc: 'Ergonomic 2D spatial layouts, Vastu alignment, and material selection.' },
              { step: '03', title: 'Design', desc: 'Photorealistic 3D architectural renders and sample board approvals.' },
              { step: '04', title: 'Execute', desc: 'German CNC factory production and precision on-site assembly.' },
              { step: '05', title: 'Transform', desc: 'Quality inspection, deep cleaning, and formal 10-year warranty handover.' }
            ].map((p) => (
              <div key={p.step} className="mono-card h-full">
                <div className="p-6 flex flex-col gap-4 h-full">
                  <span className="font-mono text-xs font-bold text-brand-tan">{p.step}</span>
                  <h3 className="font-serif text-xl sm:text-2xl text-brand-brown font-semibold">{p.title}</h3>
                  <p className="text-xs text-brand-muted font-light leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
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

      {/* ARCHITECTURAL VISION & PHILOSOPHY */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-brand-cream text-brand-primary bg-grid-pattern">
        <div className="max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8 text-center sm:text-left">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-brand-tan">
            Architectural Vision & Philosophy
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-brand-primary">
            "INTERIORS DESIGNED AROUND THE WAY YOU LIVE."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-brand-brown/15 text-brand-muted font-light leading-relaxed text-sm sm:text-base">
            <p>
              At SMK Interior, we believe every space holds an architectural story waiting to unfold. We eliminate cookie-cutter modular templates in favor of tailored interior joinery, stone backdrops, and harmonious light layering.
            </p>
            <p>
              From custom modular kitchens and living interiors in Guduvanchery to full-home apartment fitouts across Chennai, our team manages design, factory manufacturing, and site handover under one roof.
            </p>
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
              className="px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md active:scale-[0.97]"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
