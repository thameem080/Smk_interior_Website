import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Eye } from 'lucide-react';
import { SEOComponent } from '../../components/SEO/SEOComponent';
import { WhatsAppIcon } from '../../components/WhatsAppButton/WhatsAppIcon';
import { galleryData, GalleryItem } from '../../data/galleryData';
import { openWhatsApp } from '../../lib/whatsapp';

type CategoryFilter = 'All' | 'Modular Kitchen' | 'Hall Unit' | 'TV Unit' | 'Pooja Unit' | 'Dressing Table';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: CategoryFilter[] = [
    'All',
    'Modular Kitchen',
    'Hall Unit',
    'TV Unit',
    'Pooja Unit',
    'Dressing Table',
  ];

  const filteredPhotos = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  const currentPhoto: GalleryItem | null =
    lightboxIndex !== null && filteredPhotos[lightboxIndex]
      ? filteredPhotos[lightboxIndex]
      : null;

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredPhotos.length);
    }
  }, [lightboxIndex, filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  }, [lightboxIndex, filteredPhotos.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleClose, handleNext, handlePrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  // Get count for a category
  const getCategoryCount = (cat: CategoryFilter) => {
    if (cat === 'All') return galleryData.length;
    return galleryData.filter((i) => i.category === cat).length;
  };

  return (
    <div className="w-full pt-28 pb-24">
      <SEOComponent
        title="Project Photo Gallery | SMK Interior Chennai"
        description="Browse all 26 completed interior woodwork and execution photos by SMK Interior: Modular Kitchens, Hall Partitions, TV Units, Sacred Pooja Mandirs, and Dressing Units."
      />

      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-3">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-brand-tan">
            Real Work Portfolio
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-brand-primary font-normal">
            Project Photo Gallery
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted max-w-xl font-light leading-relaxed">
            Authentic on-site photographs of bespoke woodwork, modular kitchens, geometric hall partitions,
            luxury TV feature walls, and sacred Pooja mandirs built in Chennai.
          </p>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-brown/10 text-brand-brown text-xs font-mono font-semibold mt-1">
            <span>{galleryData.length} Real Project Photos</span>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8 sticky top-20 z-30 bg-brand-cream/80 backdrop-blur-md py-3 border-y border-brand-brown/10">
        <div className="max-w-6xl mx-auto flex items-center sm:justify-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            const count = getCategoryCount(cat);
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap shrink-0 transition-all duration-300 flex items-center gap-2 active:scale-95 ${
                  active
                    ? 'bg-brand-brown text-white shadow-md ring-2 ring-brand-brown/20'
                    : 'bg-white/80 hover:bg-brand-brown/15 text-brand-primary border border-brand-brown/10'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    active ? 'bg-white/20 text-white' : 'bg-brand-brown/10 text-brand-brown'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pt-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredPhotos.map((photo, idx) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-brand-dark shadow-md hover:shadow-2xl transition-all duration-500 border border-brand-brown/10"
                >
                  {/* Photo Container */}
                  <div className="aspect-[4/3] w-full overflow-hidden bg-brand-dark/40">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-brand-dark/80 text-brand-cream backdrop-blur-md border border-white/10">
                      {photo.category}
                    </span>
                  </div>

                  {/* Quick Expand Button */}
                  <div className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-brand-dark/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  {/* Bottom Gradient Overlay & Title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-brand-tan font-bold">
                      {photo.tag}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-medium leading-snug line-clamp-1 group-hover:text-brand-cream transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-brand-cream/75 line-clamp-1 font-light mt-1">
                      {photo.description}
                    </p>

                    <div className="pt-2.5 mt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-brand-tan font-semibold uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-brand-tan" />
                        <span>View Photo</span>
                      </span>
                      <span className="text-white/60 font-mono text-[10px]">Tap to enlarge</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Full-Screen Interactive Lightbox Modal */}
      <AnimatePresence>
        {currentPhoto && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
            onClick={handleClose}
          >
            {/* Top Toolbar */}
            <div
              className="flex items-center justify-between text-white z-10 w-full max-w-6xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white/15 text-xs font-mono text-brand-tan border border-white/15">
                  {currentPhoto.category}
                </span>
                <span className="text-xs text-white/70 font-mono">
                  {lightboxIndex + 1} / {filteredPhotos.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Hello SMK Interior, I'm inquiring about this design: "${currentPhoto.title}" (${currentPhoto.category}). Could you share pricing and details?`
                    )
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                  <span className="hidden sm:inline">Inquire on WhatsApp</span>
                  <span className="sm:hidden">WhatsApp</span>
                </button>

                <button
                  onClick={handleClose}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
                  aria-label="Close photo preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Central Main Image & Prev/Next Arrows */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 overflow-hidden w-full max-w-5xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              {filteredPhotos.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Main Image */}
              <motion.div
                key={currentPhoto.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="max-h-[70vh] sm:max-h-[75vh] max-w-full flex items-center justify-center"
              >
                <img
                  src={currentPhoto.image}
                  alt={currentPhoto.title}
                  className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                />
              </motion.div>

              {/* Next Button */}
              {filteredPhotos.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Bottom Caption & WhatsApp CTA */}
            <div
              className="w-full max-w-3xl mx-auto text-center text-white z-10 flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="font-serif text-lg sm:text-2xl font-normal text-brand-cream">
                {currentPhoto.title}
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-light max-w-xl">
                {currentPhoto.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
