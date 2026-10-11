import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MessageSquare, X } from 'lucide-react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { openWhatsApp } from '../../lib/whatsapp';

export const Navbar: React.FC = () => {
  const { scrolled } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Process', path: '/process' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-500 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Floating Glass Pill Navigation Shell */}
        <nav 
          className={`pointer-events-auto w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-700 ease-fluid ${
            scrolled 
              ? 'bg-brand-cream/90 backdrop-blur-2xl border border-brand-brown/10 shadow-bezel' 
              : 'bg-brand-dark/40 backdrop-blur-md border border-white/10 text-brand-cream'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.jpeg"
              alt="SMK Interior Logo"
              className="w-9 h-9 rounded-full object-cover border border-brand-brown/20 shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className={`font-serif font-bold tracking-widest text-lg leading-none ${scrolled ? 'text-brand-brown' : 'text-brand-cream'}`}>
                SMK INTERIOR
              </span>
              <span className={`text-[9px] uppercase tracking-[0.25em] font-medium mt-0.5 ${scrolled ? 'text-brand-muted' : 'text-brand-cream/70'}`}>
                Studio • Chennai
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                    isActive
                      ? (scrolled 
                          ? 'bg-brand-brown text-white font-bold shadow-md' 
                          : 'bg-brand-tan text-brand-dark font-bold shadow-md')
                      : (scrolled 
                          ? 'text-brand-primary/80 hover:text-brand-brown hover:bg-brand-brown/10 font-medium' 
                          : 'text-brand-cream/80 hover:text-white hover:bg-white/10 font-medium')
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => openWhatsApp()}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                scrolled 
                  ? 'border-brand-brown/20 text-brand-brown hover:bg-brand-brown/5' 
                  : 'border-white/20 text-brand-cream hover:bg-white/10'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp</span>
            </button>

            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full bg-brand-brown text-brand-cream text-xs font-semibold tracking-wide hover:bg-brand-dark transition-colors duration-300"
            >
              <span>Start a Project</span>
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-cream" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${
              scrolled ? 'text-brand-brown hover:bg-brand-brown/10' : 'text-brand-cream hover:bg-white/10'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between items-center">
              <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-brand-brown' : 'bg-brand-cream'} ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-brand-brown' : 'bg-brand-cream'} ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-brand-brown' : 'bg-brand-cream'} ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>

        </nav>
      </div>

      {/* Fullscreen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="pointer-events-auto fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-3xl text-brand-cream flex flex-col justify-between p-6 pt-28"
          >
            {/* Top Right Close Cross Button */}
            <div className="absolute top-6 right-6 z-50">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-[0.95] text-brand-cream border border-white/15 flex items-center justify-center transition-all duration-300 shadow-xl"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5 text-brand-cream" />
              </button>
            </div>

            {/* Background ambient lighting */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-brown/20 rounded-full blur-3xl pointer-events-none" />

            {/* Menu Links */}
            <div className="flex flex-col gap-6 max-w-md mx-auto w-full">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-tan font-bold">
                Navigation Menu
              </span>
              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      className="font-serif text-3xl sm:text-4xl text-brand-cream hover:text-brand-tan transition-colors flex items-center justify-between group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-brand-tan" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation CTA */}
            <div className="max-w-md mx-auto w-full flex flex-col gap-3 pb-8">
              <div className="h-px bg-white/10 w-full my-2" />
              <Link
                to="/contact"
                className="w-full text-center py-3.5 rounded-full bg-brand-brown hover:bg-brand-tan text-brand-cream text-xs uppercase tracking-wider font-semibold transition-colors active:scale-[0.97]"
              >
                Request 3D Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
