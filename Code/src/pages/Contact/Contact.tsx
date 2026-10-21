import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles, CheckCircle2, Navigation, UserCheck } from 'lucide-react';
import { WhatsAppIcon } from '../../components/WhatsAppButton/WhatsAppIcon';
import { SEOComponent } from '../../components/SEO/SEOComponent';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { openWhatsApp, PHONE_NUMBER_DISPLAY, STUDIO_ADDRESS, STUDIO_EMAIL, STUDIO_HOURS, STUDIO_LEAD, GOOGLE_MAPS_LINK, GOOGLE_MAPS_EMBED_URL, WARRANTY_TEXT } from '../../lib/whatsapp';

export const Contact: React.FC = () => {
  return (
    <div className="w-full pt-28 pb-20">
      <SEOComponent
        title="Contact Studio | SMK Interior Chennai"
        description="Get in touch with Mohammed Sheik at SMK Interior. Visit our studio at GST Road Guduvanchery, Chennai. 10 years warranty on interior works, open 10am to 11pm."
      />

      {/* Reassurance Value Strip */}
      <section className="px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="mono-card p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-brand-brown/10 text-brand-brown shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-serif font-bold text-brand-primary">Free 3D Architectural Renders</span>
                <span className="text-[11px] text-brand-muted font-light">Visualize before factory production</span>
              </div>
            </div>
          </div>

          <div className="mono-card p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-600/10 text-emerald-600 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-serif font-bold text-brand-primary">No Obligation Site Measurement</span>
                <span className="text-[11px] text-brand-muted font-light">Laser scan & spatial assessment</span>
              </div>
            </div>
          </div>

          <div className="mono-card p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-brand-brown/10 text-brand-brown shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-serif font-bold text-brand-primary">{WARRANTY_TEXT}</span>
                <span className="text-[11px] text-brand-muted font-light">100% BWR Marine Plywood base</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split-Screen Layout: Form on Left, Address + Small Map aligned on Right */}
      <section className="px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Interactive 3-Step Form Wizard */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <ContactForm />
          </div>

          {/* Right Column: Address Details (Top) + Compact Small Map (Bottom) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="mono-card h-full p-6 flex flex-col justify-between gap-5">
                
                {/* Top: Studio Contact Info */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-brand-brown/10 pb-3">
                    <h2 className="font-serif text-2xl font-semibold text-brand-primary">Studio Contact</h2>
                    <span className="text-[10px] uppercase tracking-widest bg-brand-brown/5 text-brand-brown px-2.5 py-0.5 rounded-full font-bold">
                      Guduvanchery Studio
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 text-xs text-brand-muted font-light">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-brand-brown/10 text-brand-brown flex items-center justify-center shrink-0">
                        <UserCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="block text-[10px] uppercase tracking-wider text-brand-brown font-semibold">Contact Person</strong>
                        <span className="text-brand-primary font-medium">{STUDIO_LEAD}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-brand-brown/10 text-brand-brown flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="block text-[10px] uppercase tracking-wider text-brand-brown font-semibold">Studio Address</strong>
                        <span className="text-brand-primary leading-tight">{STUDIO_ADDRESS}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-brand-brown/10 text-brand-brown flex items-center justify-center shrink-0">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="block text-[10px] uppercase tracking-wider text-brand-brown font-semibold">Phone Consultation</strong>
                        <a href={`tel:${PHONE_NUMBER_DISPLAY}`} className="text-brand-primary font-medium hover:underline">
                          {PHONE_NUMBER_DISPLAY}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-brand-brown/10 text-brand-brown flex items-center justify-center shrink-0">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="block text-[10px] uppercase tracking-wider text-brand-brown font-semibold">Email Inquiries</strong>
                        <a href={`mailto:${STUDIO_EMAIL}`} className="text-brand-primary font-medium hover:underline">
                          {STUDIO_EMAIL}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-brand-brown/10 text-brand-brown flex items-center justify-center shrink-0">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="block text-[10px] uppercase tracking-wider text-brand-brown font-semibold">Working Hours</strong>
                        <span className="text-brand-primary font-medium">{STUDIO_HOURS}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom: Compact Integrated Small Map */}
                <div className="flex flex-col gap-2 pt-2 border-t border-brand-brown/10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-brand-tan font-bold flex items-center gap-1">
                      <Navigation className="w-3 h-3 text-brand-brown" />
                      <span>Location Map</span>
                    </span>
                    <a
                      href={GOOGLE_MAPS_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] text-brand-brown font-semibold underline hover:text-brand-dark"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>

                  <div className="h-44 w-full rounded-xl overflow-hidden bg-brand-dark/10 relative sheen-glow border border-brand-brown/10">
                    <iframe
                      title="Smart Modular Kitchens Studio Location Map Guduvanchery"
                      src={GOOGLE_MAPS_EMBED_URL}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>

                  <button
                    onClick={() => openWhatsApp("Hello Mohammed Sheik, I would like to schedule a visit to your Guduvanchery studio.")}
                    className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md mt-1 active:scale-[0.97]"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>WhatsApp Direct Chat</span>
                  </button>
                </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
