import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Layers, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { SEOComponent } from '../../components/SEO/SEOComponent';
import { projectsData } from '../../data/projects';
import { BeforeAfterSlider } from '../../components/BeforeAfterSlider/BeforeAfterSlider';
import { openWhatsApp } from '../../lib/whatsapp';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="w-full pt-28 pb-24">
      <SEOComponent
        title={`${project.title} | SMK Interior Project Showcase`}
        description={`Explore ${project.title} in ${project.location} by SMK Interior. ${project.propertyType}, ${project.area} interior design.`}
        image={project.coverImage}
      />

      {/* Breadcrumb */}
      <section className="px-6 py-4 max-w-7xl mx-auto">
        <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-semibold text-brand-muted hover:text-brand-brown transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </section>

      {/* Project Hero Header */}
      <section className="px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-brand-muted font-medium">
            <span className="bg-brand-brown text-white px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-brand-brown font-semibold">
              <MapPin className="w-3.5 h-3.5 text-brand-tan" />
              {project.location}
            </span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-brand-primary leading-tight">
            {project.title}
          </h1>
          <p className="text-base sm:text-xl text-brand-muted font-light max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>

          <div className="relative aspect-[16/9] w-full rounded-[2rem] overflow-hidden shadow-bezel border border-brand-brown/10 mt-4">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Metadata Specs Strip */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-brand-surface-warm/40 border-y border-brand-brown/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="mono-card p-5 flex flex-col gap-1.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-tan font-bold">
              Property Type
            </span>
            <span className="text-sm sm:text-base font-serif font-semibold text-brand-primary">
              {project.propertyType}
            </span>
          </div>

          <div className="mono-card p-5 flex flex-col gap-1.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-tan font-bold">
              Total Area
            </span>
            <span className="text-sm sm:text-base font-mono font-bold text-brand-brown tracking-wide">
              {project.area}
            </span>
          </div>

          <div className="mono-card p-5 flex flex-col gap-1.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-tan font-bold">
              Execution Timeline
            </span>
            <span className="text-sm sm:text-base font-mono font-bold text-brand-brown tracking-wide">
              {project.timeline}
            </span>
          </div>

          <div className="mono-card p-5 flex flex-col gap-1.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-tan font-bold">
              Location
            </span>
            <span className="text-sm sm:text-base font-serif font-semibold text-brand-primary">
              {project.city}
            </span>
          </div>
        </div>
      </section>

      {/* Narrative & Design Approach */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-3xl font-normal text-brand-primary">Project Overview</h2>
            <p className="text-sm text-brand-muted font-light leading-relaxed">
              {project.overview}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-3xl font-normal text-brand-brown">Design Approach</h2>
            <p className="text-sm text-brand-muted font-light leading-relaxed">
              {project.designApproach}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights by Room */}
      {project.highlights.length > 0 && (
        <section className="px-6 py-16 bg-brand-surface-warm/30 border-y border-brand-brown/10">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="text-center flex flex-col gap-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-brand-tan">Architectural Details</span>
              <h2 className="font-serif text-4xl font-normal text-brand-primary">Room Highlights</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.highlights.map((h, i) => (
                <div key={i} className="mono-card p-6 flex flex-col gap-4">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img src={h.image} alt={h.room} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-serif text-2xl text-brand-brown font-semibold">{h.room}</h3>
                  <p className="text-xs text-brand-muted font-light leading-relaxed">{h.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Before / After Transformation */}
      {project.beforeAfter && (
        <section className="px-6 py-20 bg-brand-cream">
          <div className="max-w-5xl mx-auto flex flex-col gap-8 text-center">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-tan">Renovation Proof</span>
              <h2 className="font-serif text-4xl font-normal text-brand-primary">{project.beforeAfter.label}</h2>
            </div>

            <BeforeAfterSlider
              beforeImage={project.beforeAfter.beforeImage}
              afterImage={project.beforeAfter.afterImage}
            />
          </div>
        </section>
      )}

      {/* Photo Gallery Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <h2 className="font-serif text-3xl font-normal text-brand-primary text-center">Full Project Photo Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-bezel border border-brand-brown/10">
                <img src={img} alt={`${project.title} photo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      {project.testimonial && (
        <section className="px-6 py-16 bg-brand-brown text-white text-center">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <p className="font-serif italic text-2xl sm:text-3xl leading-relaxed text-brand-cream">
              “{project.testimonial.quote}”
            </p>
            <span className="text-xs uppercase tracking-widest text-brand-tan font-bold pt-2">
              — {project.testimonial.author} ({project.testimonial.role})
            </span>
          </div>
        </section>
      )}

      {/* Project Inquiry CTA */}
      <section className="px-6 py-16 bg-brand-cream text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-brand-primary">
            Want a Similar Interior Transformation for Your Space?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-brand-brown text-white font-semibold text-xs uppercase tracking-wider hover:bg-brand-dark transition-colors"
            >
              Start Your Project
            </Link>
            <button
              onClick={() => openWhatsApp(`Hi SMK Interior, I love your ${project.title} project. I'd like to discuss a similar interior project.`)}
              className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Inquire about this design on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
