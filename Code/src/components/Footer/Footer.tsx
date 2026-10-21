import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from '../WhatsAppButton/WhatsAppIcon';
import { openWhatsApp, PHONE_NUMBER_DISPLAY, STUDIO_ADDRESS, STUDIO_EMAIL, STUDIO_HOURS, GOOGLE_MAPS_LINK } from '../../lib/whatsapp';
import { servicesData } from '../../data/services';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-cream pt-20 pb-28 md:pb-16 px-6 relative overflow-hidden border-t border-white/10">
      {/* Ambient Radial Mesh Backdrop */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-brown/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-start">
              <img
                src="/logo.jpeg"
                alt="SMK Interior Logo"
                className="h-36 sm:h-48 w-auto rounded-2xl object-contain border border-white/15 shadow-2xl bg-white/5 p-2"
              />
            </div>

            <p className="text-sm text-brand-cream/70 font-light leading-relaxed max-w-sm">
              We design and craft bespoke residential and commercial interiors where architectural proportion, material integrity, and modern living converge.
            </p>

            {/* Quick Contact Badge */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => openWhatsApp("Hi SMK Interior, I'd like to schedule a free site consultation.")}
                className="px-4 py-2.5 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold tracking-wide flex items-center gap-2 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp Consultation</span>
              </button>
              <a
                href={`tel:${PHONE_NUMBER_DISPLAY}`}
                className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold tracking-wide flex items-center gap-2 transition-colors border border-white/10"
              >
                <Phone className="w-4 h-4 text-brand-tan" />
                <span>{PHONE_NUMBER_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Sitemap Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-tan">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-brand-cream/70 font-light">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Studio</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Interior Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Portfolio Projects</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors">Our 5-Step Process</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ & Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Studio</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-tan">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-brand-cream/70 font-light">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Office Location */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-tan">
              Studio Location
            </h4>
            <div className="flex flex-col gap-3 text-sm text-brand-cream/70 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-tan shrink-0 mt-1" />
                <div>
                  <span className="block">{STUDIO_ADDRESS}</span>
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-brand-tan hover:text-white mt-1 underline"
                  >
                    <span>View on Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-tan shrink-0" />
                <a href={`mailto:${STUDIO_EMAIL}`} className="hover:text-white transition-colors">
                  {STUDIO_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-tan shrink-0" />
                <a href={`tel:${PHONE_NUMBER_DISPLAY}`} className="hover:text-white transition-colors">
                  {PHONE_NUMBER_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs text-brand-cream/60">
                <Clock className="w-4 h-4 text-brand-tan shrink-0" />
                <span>Hours: {STUDIO_HOURS}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-cream/50 font-light">
          <p>© {new Date().getFullYear()} SMK Interior. All rights reserved. Designed for Modern Spaces.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-brand-cream transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-cream transition-colors">Terms of Service</Link>
            <a href="https://smkinterior.com/sitemap.xml" target="_blank" rel="noreferrer" className="hover:text-brand-cream transition-colors flex items-center gap-1">
              <span>Sitemap</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
