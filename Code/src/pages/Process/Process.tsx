import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from '../../components/WhatsAppButton/WhatsAppIcon';
import { SEOComponent } from '../../components/SEO/SEOComponent';
import { openWhatsApp } from '../../lib/whatsapp';

export const ProcessPage: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Site Measurement & Discovery',
      sub: 'Step 1: Understanding Your Space',
      desc: 'Our interior architect visits your residence or commercial site in Chennai to record laser measurements, assess natural lighting angles, inspect plumbing/electrical layouts, and understand your needs.',
      details: ['Laser 3D Room Scan', 'Budget & Material Preference Alignment', 'Vastu & Structural Compliance Check']
    },
    {
      num: '02',
      title: 'Spatial Planning & 2D Layouts',
      sub: 'Step 2: Ergonomic Architecture',
      desc: 'We map out multi-option 2D floor plans optimizing traffic movement, storage volume, and furniture clearances. We align cabinet height with daily ergonomic comfort.',
      details: ['2D Furniture Layout Options', 'Electrical & Plumbing Layout Marking', 'Cabinet Storage Capacity Calculation']
    },
    {
      num: '03',
      title: '3D Photorealistic Rendering',
      sub: 'Step 3: Visualizing Your Space',
      desc: 'Before a single wood panel is cut, you will receive full 3D architectural renders showing exact colors, veneer grains, ambient cove lights, wallpaper textures, and sanitary fixtures.',
      details: ['360-Degree Photorealistic 3D Views', 'Material Sample Board Handout', 'Fixed Itemized Quotation']
    },
    {
      num: '04',
      title: 'German CNC Factory Precision Production',
      sub: 'Step 4: Millwork & Crafting',
      desc: 'All modular cabinets, wardrobes, and kitchen carcasses are pre-cut and edge-banded in our automated German CNC factory. This ensures zero dust clutter and 100% moisture-sealed edges.',
      details: ['100% BWR Marine Plywood Base', 'PUR Waterproof Edge Banding', 'Factory Quality Inspection & Fitting Test']
    },
    {
      num: '05',
      title: 'Zero-Dust On-Site Assembly & Handover',
      sub: 'Step 5: Handover with 10-Year Warranty',
      desc: 'Pre-finished components arrive at your site and are assembled by our master carpenters within 15–20 days. We complete deep cleaning, electrical fitting checks, and issue your formal 10-year warranty card.',
      details: ['Hettich / Blum Soft-Close Adjustment', 'Deep Site Cleaning & Polishing', '10-Year Structural Material Warranty Card']
    }
  ];

  return (
    <div className="w-full pt-32 pb-20">
      <SEOComponent
        title="Our Process | SMK Interior Chennai"
        description="Learn how SMK Interior delivers interior design projects in Chennai through laser measurement, 3D renders, factory CNC production, and 10-year warranty handover."
      />

      {/* Minimal Page Header Title */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8 text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-2 items-center">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-brand-tan">
            Execution Workflow
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-brand-primary">
            Our 5-Step Process
          </h1>
        </div>
      </section>

      {/* Steps List */}
      <section className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-5xl mx-auto flex flex-col gap-8 sm:gap-10">
          {steps.map((step) => (
            <div key={step.num} className="mono-card">
              <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-brand-brown text-white font-mono font-bold text-xl sm:text-2xl flex items-center justify-center shrink-0 shadow-md">
                  {step.num}
                </div>

                <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-brand-tan font-bold">{step.sub}</span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-brand-primary font-semibold">{step.title}</h2>
                  <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">{step.desc}</p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {step.details.map((d, i) => (
                      <span key={i} className="text-[11px] sm:text-xs bg-brand-brown/5 text-brand-brown px-3 py-1 rounded-full font-medium flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{d}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct WhatsApp CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-brand-brown text-white">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span className="font-serif text-xl sm:text-2xl font-semibold text-white">Ready for Step 01 Site Measurement?</span>
            <span className="text-xs text-brand-cream/80 font-light">Book your on-site measurement directly with our team.</span>
          </div>
          <button
            onClick={() => openWhatsApp("Hi SMK Interior, I'd like to book Step 1 Site Measurement for my property.")}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Book via WhatsApp</span>
          </button>
        </div>
      </section>

    </div>
  );
};
