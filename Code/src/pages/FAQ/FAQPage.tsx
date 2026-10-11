import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { SEOComponent } from '../../components/SEO/SEOComponent';
import { faqData } from '../../data/faq';
import { openWhatsApp } from '../../lib/whatsapp';

export const FAQPage: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(faqData[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Process', 'Pricing & Warranty', 'Services'];

  const filteredFaq = selectedCategory === 'All'
    ? faqData
    : faqData.filter((f) => f.category === selectedCategory);

  return (
    <div className="w-full pt-32 pb-20">
      <SEOComponent
        title="FAQ & Pricing | SMK Interior"
        description="Find answers to common questions regarding home interior costs, execution timelines, 10-year warranty, materials used, and 3D design process at SMK Interior Chennai."
      />

      {/* Minimal Page Header Title */}
      <section className="px-4 sm:px-6 lg:px-8 pb-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-2 items-center">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-brand-tan">
            Help & Guidance
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-brand-primary">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* Category Pills */}
      <section className="px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                  active
                    ? 'bg-brand-brown text-white'
                    : 'bg-brand-brown/5 text-brand-primary hover:bg-brand-brown/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Accordion Questions List */}
      <section className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-4xl mx-auto flex flex-col gap-3.5">
          {filteredFaq.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div key={item.id} className="mono-card">
                <div className="p-5 sm:p-6 flex flex-col gap-3">
                  <button
                    onClick={() => setActiveId(isOpen ? null : item.id)}
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
      </section>

      {/* Direct WhatsApp Prompt */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-brand-brown text-white">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span className="font-serif text-xl sm:text-2xl font-semibold text-white">Have a specific question?</span>
            <span className="text-xs text-brand-cream/80 font-light">Ask our lead interior architect directly on WhatsApp.</span>
          </div>
          <button
            onClick={() => openWhatsApp("Hi SMK Interior, I have a custom question about your interior services.")}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Ask on WhatsApp</span>
          </button>
        </div>
      </section>

    </div>
  );
};
