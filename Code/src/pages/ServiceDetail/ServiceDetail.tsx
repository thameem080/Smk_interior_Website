import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Check, ShieldCheck, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '../../components/WhatsAppButton/WhatsAppIcon';
import { SEOComponent } from '../../components/SEO/SEOComponent';
import { servicesData } from '../../data/services';
import { openWhatsApp } from '../../lib/whatsapp';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const prevService = servicesData[(currentIndex - 1 + servicesData.length) % servicesData.length];
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];

  return (
    <div className="w-full pt-28 sm:pt-32 pb-24 relative grain-overlay overflow-hidden">
      <SEOComponent
        title={service.seoTitle}
        description={service.seoDescription}
        image={service.coverImage}
      />

      {/* Top Header Controls (Breadcrumb + Prev/Next Service Buttons) */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-6 flex items-center justify-between gap-4">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-tan hover:text-brand-brown transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Services</span>
        </Link>

        {/* Top Service Navigation Switcher */}
        <div className="flex items-center gap-2">
          <Link
            to={`/services/${prevService.slug}`}
            className="px-3.5 py-1.5 rounded-full bg-brand-brown/5 hover:bg-brand-brown hover:text-white border border-brand-brown/15 text-brand-brown text-xs font-mono font-semibold transition-all flex items-center gap-1.5 shadow-sm"
            title={`Previous: ${prevService.title}`}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Prev: {prevService.title}</span>
            <span className="sm:hidden">Prev</span>
          </Link>
          <Link
            to={`/services/${nextService.slug}`}
            className="px-3.5 py-1.5 rounded-full bg-brand-brown/5 hover:bg-brand-brown hover:text-white border border-brand-brown/15 text-brand-brown text-xs font-mono font-semibold transition-all flex items-center gap-1.5 shadow-sm"
            title={`Next: ${nextService.title}`}
          >
            <span className="hidden sm:inline">Next: {nextService.title}</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          
          {/* Header Badges */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-brand-tan bg-brand-brown/10 px-3.5 py-1 rounded-full border border-brand-brown/15">
              SERVICE {service.number}
            </span>
            <span className="text-xs font-mono text-brand-muted uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>10-Year Structural Warranty</span>
            </span>
          </div>

          {/* Main Title Only */}
          <div className="flex flex-col gap-4">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-brand-primary leading-[1.1]">
              {service.title}
            </h1>
          </div>

          {/* Main Cover Image Frame */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-brown/15 shadow-2xl mt-2 group">
            <img
              src={service.coverImage}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3">
              <span className="bg-brand-dark/90 text-white font-mono text-[10px] sm:text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-white/10 font-semibold backdrop-blur-md">
                Certified Turnkey Standard
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Two-Column Specifications & Content Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-brand-surface-warm/40 border-y border-brand-brown/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Main Narrative (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Overview & Scope */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-tan" />
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-tan font-bold">
                  Design Scope & Intent
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-primary">
                Architectural Overview
              </h2>
              <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed whitespace-pre-line">
                {service.fullDescription}
              </p>
            </div>

            {/* Key Deliverables Grid */}
            <div className="flex flex-col gap-4 pt-4 border-t border-brand-brown/10">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-tan font-bold">
                Specifications
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-primary">
                Key Features & Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="mono-card p-4 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs text-brand-primary font-medium leading-normal">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials Used */}
            <div className="flex flex-col gap-4 pt-4 border-t border-brand-brown/10">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-tan font-bold">
                Craft Quality
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-primary">
                Premium Materials & Hardware
              </h3>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {service.materials.map((m, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-brand-brown/5 border border-brand-brown/15 text-brand-brown text-xs font-semibold tracking-wide flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-tan" />
                    <span>{m}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery Image Grid */}
            {service.galleryImages.length > 0 && (
              <div className="flex flex-col gap-4 pt-4 border-t border-brand-brown/10">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-tan font-bold">
                  Visual References
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-primary">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {service.galleryImages.map((img, idx) => (
                    <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden border border-brand-brown/15 shadow-md group">
                      <img
                        src={img}
                        alt={`${service.title} reference ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Sticky Sidebar Specifications Box (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="sticky top-28">
              <div className="mono-card-dark p-6 sm:p-8 flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-brown/20 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-tan font-bold">
                    Service Spec Summary
                  </span>
                  <h3 className="font-serif text-2xl text-white font-normal">
                    {service.title}
                  </h3>
                </div>
                
                <div className="flex flex-col gap-4 text-xs font-light text-brand-cream/80 divide-y divide-white/10">
                  <div className="pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-brand-tan font-semibold block">Ideal Property Type</span>
                    <p className="text-sm text-white mt-1 font-medium leading-relaxed">{service.idealFor}</p>
                  </div>

                  <div className="pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-brand-tan font-semibold block">Warranty Commitment</span>
                    <p className="text-sm text-white mt-1 font-medium">10-Year Structural Material Warranty</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-2">
                  <button
                    onClick={() => openWhatsApp(`Hello SMK Interior, I'd like to consult regarding ${service.title} for my project.`)}
                    className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-colors shadow-lg"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>Inquire via WhatsApp</span>
                  </button>

                  <Link
                    to="/contact"
                    className="w-full py-3.5 rounded-full bg-brand-cream text-brand-dark hover:bg-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md text-center"
                  >
                    <span>Schedule 3D Consultation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
