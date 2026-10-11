import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Play, CheckCircle2, MessageSquare, ChevronDown, Award, Clock, ShieldCheck, Sparkles, Building2, Layers, Compass } from 'lucide-react';
import { SEOComponent } from '../../components/SEO/SEOComponent';
import { ServiceHoverGallery } from '../../components/ServiceGallery/ServiceHoverGallery';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { BeforeAfterSlider } from '../../components/BeforeAfterSlider/BeforeAfterSlider';
import { MaterialSpecBoard } from '../../components/MaterialBoard/MaterialSpecBoard';
import { projectsData } from '../../data/projects';
import { testimonialsData } from '../../data/testimonials';
import { faqData } from '../../data/faq';
import { openWhatsApp } from '../../lib/whatsapp';

export const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<string | null>(faqData[0].id);

  return (
    <div className="w-full relative grain-overlay overflow-hidden">
      <SEOComponent
        title="SMK Interior | Architectural Interior Designers in Chennai"
        description="SMK Interior delivers complete turnkey home interiors, modular kitchens, bedroom designs, and commercial spaces in Chennai. Large imagery, craftsmanship, 10-year warranty."
      />

      {/* SECTION 1 — CINEMATIC HERO */}
      <section className="relative min-h-[100dvh] flex flex-col justify-between pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-brand-dark text-white overflow-hidden bg-grid-pattern-dark">
        
        {/* Ambient Radial Mesh Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
            alt="SMK Interior Hero Ambient Room"
            className="w-full h-full object-cover scale-105 filter brightness-45 contrast-125 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-brand-dark/50 to-brand-dark" />
        </div>

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-brand-brown/25 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto w-full my-auto flex flex-col items-center text-center gap-6 sm:gap-8">
          

          {/* Main Display Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight max-w-5xl"
          >
            CRAFTING MODERN <br className="hidden sm:block" />
            <span className="italic font-light text-brand-tan">INTERIOR</span> SPACES.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-brand-cream/85 font-light max-w-2xl leading-relaxed"
          >
            Architectural spatial design, custom factory millwork, and turnkey execution for modern homes & commercial spaces in Chennai.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 pt-2 sm:pt-4 w-full max-w-xs sm:max-w-none mx-auto"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 pl-6 pr-2 py-2.5 sm:py-3 rounded-full bg-brand-cream hover:bg-white text-brand-dark font-semibold text-xs uppercase tracking-wider active:scale-[0.97] transition-all duration-300 shadow-xl"
            >
              <span>Start a Project</span>
              <span className="w-6 h-6 rounded-full bg-brand-brown text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow-sm shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <button
              onClick={() => openWhatsApp("Hello SMK Interior, I'd like to inquire about an interior design consultation.")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-400/60 text-emerald-300 font-semibold text-xs uppercase tracking-wider backdrop-blur-md active:scale-[0.97] transition-all duration-300 shadow-lg"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-400 shrink-0" />
              <span>WhatsApp Direct Inquiry</span>
            </button>
          </motion.div>

          {/* Key Floating Metrics Card (Mobile Compact 2x2 Grid) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-4 sm:mt-8 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 max-w-4xl w-full text-left shadow-2xl"
          >
            <div className="flex flex-col gap-0.5 p-1.5 sm:p-3 border-r border-white/15 sm:last:border-0">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-brand-tan font-bold">Execution</span>
              <span className="text-xs sm:text-sm font-mono font-semibold text-white">45 Days Handover</span>
            </div>
            <div className="flex flex-col gap-0.5 p-1.5 sm:p-3 sm:border-r border-white/15">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-brand-tan font-bold">Materials</span>
              <span className="text-xs sm:text-sm font-serif font-semibold text-white">100% Marine BWR</span>
            </div>
            <div className="flex flex-col gap-0.5 p-1.5 sm:p-3 border-r border-white/15">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-brand-tan font-bold">Hardware</span>
              <span className="text-xs sm:text-sm font-serif font-semibold text-white">Blum / Hettich</span>
            </div>
            <div className="flex flex-col gap-0.5 p-1.5 sm:p-3">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-brand-tan font-bold">Warranty</span>
              <span className="text-xs sm:text-sm font-mono font-semibold text-white">10-Year Guarantee</span>
            </div>
          </motion.div>

        </div>


      </section>

      {/* SECTION 2 — INTRODUCTION EDITORIAL STATEMENT */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-brand-cream text-brand-primary bg-grid-pattern">
        <div className="max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8 text-center sm:text-left">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-brand-tan">
            Architectural Vision & Philosophy
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-brand-primary">
            “INTERIORS DESIGNED AROUND THE WAY YOU LIVE.”
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

      {/* SECTION 3 — INTERACTIVE SERVICES GALLERY */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-brand-surface-warm/50 border-y border-brand-brown/10">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div className="flex flex-col gap-2 sm:gap-3">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-brand-tan font-bold">
                Tailored Offerings
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-primary">
                Interior Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-brown hover:text-brand-dark transition-colors"
            >
              <span>View All Services Catalog</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <ServiceHoverGallery />
        </div>
      </section>

      {/* SECTION 4 — ARCHITECTURAL MATERIAL SPEC BOARD */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-brand-cream border-b border-brand-brown/10">
        <div className="max-w-6xl mx-auto">
          <MaterialSpecBoard />
        </div>
      </section>

      {/* SECTION 5 — FEATURED PROJECTS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-brand-cream">
        <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div className="flex flex-col gap-2 sm:gap-3">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-brand-tan font-bold">
                Selected Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-primary">
                Featured Work
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-brown hover:text-brand-dark transition-colors"
            >
              <span>Explore All Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Asymmetric Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.slice(0, 4).map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                className={idx % 2 === 1 ? 'md:mt-12' : ''}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — CINEMATIC VIDEO & DESIGN IN MOTION */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-brand-dark text-white relative overflow-hidden bg-grid-pattern-dark">
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

      {/* SECTION 7 — BEFORE / AFTER TRANSFORMATION SLIDER */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-brand-cream">
        <div className="max-w-5xl mx-auto flex flex-col gap-10 sm:gap-12 text-center">
          <div className="flex flex-col gap-2 sm:gap-3 items-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-brand-tan">
              Real Space Renovation
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-primary">
              The Power of Transformation
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted max-w-lg font-light">
              Drag the interactive divider below to compare the bare shell before renovation against the finished SMK interior.
            </p>
          </div>

          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80"
            afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
            beforeLabel="BEFORE — RAW SHELL"
            afterLabel="AFTER — SMK INTERIOR TRANSFORMATION"
          />
        </div>
      </section>

      {/* SECTION 8 — STUDIO STATS & PROMISE */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-brand-surface-warm/40 border-y border-brand-brown/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="flex flex-col gap-2 p-5 sm:p-6 rounded-2xl bg-white/60 border border-brand-brown/10">
            <span className="font-serif text-3xl sm:text-5xl font-bold text-brand-brown">50+</span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-brand-muted font-medium">Completed Projects</span>
          </div>
          <div className="flex flex-col gap-2 p-5 sm:p-6 rounded-2xl bg-white/60 border border-brand-brown/10">
            <span className="font-serif text-3xl sm:text-5xl font-bold text-brand-brown">100%</span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-brand-muted font-medium">Marine BWR Plywood</span>
          </div>
          <div className="flex flex-col gap-2 p-5 sm:p-6 rounded-2xl bg-white/60 border border-brand-brown/10">
            <span className="font-serif text-3xl sm:text-5xl font-bold text-brand-brown">10 Year</span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-brand-muted font-medium">Material Warranty</span>
          </div>
          <div className="flex flex-col gap-2 p-5 sm:p-6 rounded-2xl bg-white/60 border border-brand-brown/10">
            <span className="font-serif text-3xl sm:text-5xl font-bold text-brand-brown">45 Days</span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-brand-muted font-medium">On-Time Execution</span>
          </div>
        </div>
      </section>

      {/* SECTION 9 — 5-STEP PROCESS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-brand-cream">
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

      {/* SECTION 10 — TESTIMONIALS */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-brand-surface-warm/40 border-t border-brand-brown/10">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 sm:gap-3 text-center items-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-brand-tan">
              Verified Reviews
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-primary">
              Client Transformations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((t) => (
              <div key={t.id} className="mono-card">
                <div className="p-6 sm:p-8 flex flex-col gap-6 justify-between h-full">
                  <p className="font-serif italic text-base sm:text-xl text-brand-primary leading-relaxed">
                    “{t.quote}”
                  </p>

                  <div className="pt-4 border-t border-brand-brown/10 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-semibold text-xs sm:text-sm text-brand-brown">{t.clientName}</span>
                      <span className="text-[11px] sm:text-xs text-brand-muted font-light">{t.projectType} • {t.location}</span>
                    </div>
                    <div className="flex text-amber-500 text-xs">
                      {"★".repeat(t.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — FAQ ACCORDION */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-brand-cream">
        <div className="max-w-4xl mx-auto flex flex-col gap-10 sm:gap-12">
          <div className="flex flex-col gap-2 sm:gap-3 text-center items-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-brand-tan">
              Common Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-primary">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqData.map((item) => {
              const isOpen = activeFaq === item.id;
              return (
                <div key={item.id} className="mono-card">
                  <div className="p-5 sm:p-6 flex flex-col gap-3">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : item.id)}
                      className="w-full flex items-center justify-between text-left font-serif text-lg sm:text-2xl text-brand-primary font-semibold hover:text-brand-brown transition-colors"
                    >
                      <span>{item.question}</span>
                      <ChevronDown className={`w-5 h-5 text-brand-tan shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                      <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed pt-2 border-t border-brand-brown/10">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 12 — FINAL DARK LUXURY CTA */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-brand-brown text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8 relative z-10">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-brand-tan">
            Let's Talk Design
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            LET'S CREATE A SPACE YOU'LL LOVE TO COME HOME TO.
          </h2>

          <p className="text-xs sm:text-base text-brand-cream/80 font-light max-w-xl">
            Schedule a free on-site measurement and 3D consultation with our senior interior architects in Chennai.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 pt-2 sm:pt-4 w-full max-w-xs sm:max-w-none mx-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 pl-6 pr-2 py-2.5 sm:py-3 rounded-full bg-brand-cream hover:bg-white text-brand-brown font-semibold text-xs uppercase tracking-wider active:scale-[0.97] transition-all duration-300 shadow-xl"
            >
              <span>Start a Project</span>
              <span className="w-6 h-6 rounded-full bg-brand-brown text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow-sm shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <button
              onClick={() => openWhatsApp("Hi SMK Interior, I want to book a free 3D design consultation for my home.")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-400/60 text-emerald-300 font-semibold text-xs uppercase tracking-wider backdrop-blur-md active:scale-[0.97] transition-all duration-300 shadow-lg"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-400 shrink-0" />
              <span>WhatsApp Direct Chat</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
