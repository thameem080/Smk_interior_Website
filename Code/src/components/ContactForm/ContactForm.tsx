import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, MessageSquare, ArrowRight, ArrowLeft, Building2, Home as HomeIcon, Briefcase, RefreshCw, Check } from 'lucide-react';
import { openWhatsApp } from '../../lib/whatsapp';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(10, 'Please enter a valid 10-digit mobile number'),
  location: z.string().min(2, 'Please enter your project location / area in Chennai'),
  propertyType: z.string().min(1, 'Please select your property type'),
  service: z.string().min(1, 'Please select the service required'),
  timeline: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      propertyType: '3BHK Apartment',
      service: 'Complete Home Interiors',
      timeline: 'Within 1 Month',
    },
  });

  const selectedProperty = watch('propertyType');
  const selectedService = watch('service');

  const propertyOptions = [
    { label: '2BHK Apartment', icon: HomeIcon, desc: 'Ideal for compact luxury flats' },
    { label: '3BHK Apartment', icon: HomeIcon, desc: 'Spacious modern family home' },
    { label: '4BHK / Villa', icon: Building2, desc: 'Independent villa & penthouses' },
    { label: 'Commercial Office', icon: Briefcase, desc: 'Corporate & workspace fitouts' },
    { label: 'Renovation', icon: RefreshCw, desc: 'Complete home overhaul' },
  ];

  const serviceOptions = [
    'Complete Home Interiors',
    'Modular Kitchen',
    'Bedrooms & Closets',
    'Living & TV Units',
    'False Ceiling & Lighting',
    'Commercial Fitout',
  ];

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();

    const waText = `Hi Mohammed Sheik (SMK Interior), I submitted a 3D consultation request:\n• Name: ${data.name}\n• Phone: ${data.phone}\n• Location: ${data.location}\n• Property: ${data.propertyType}\n• Service: ${data.service}`;
    setTimeout(() => {
      openWhatsApp(waText);
    }, 1200);
  };

  return (
    <div className="mono-card w-full">
      <div className="p-6 sm:p-10 flex flex-col gap-6">
        
        {/* Step Indicator Bar */}
        {!submitted && (
          <div className="flex items-center justify-between border-b border-brand-brown/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-brand-brown text-white text-xs font-bold flex items-center justify-center font-mono">
                0{currentStep}
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-brand-primary">
                {currentStep === 1 && 'Step 1: Property Type'}
                {currentStep === 2 && 'Step 2: Service Required'}
                {currentStep === 3 && 'Step 3: Contact Details'}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    step === currentStep
                      ? 'w-8 bg-brand-brown'
                      : step < currentStep
                      ? 'w-4 bg-brand-tan'
                      : 'w-4 bg-brand-brown/15'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col items-center text-center gap-4 my-4"
          >
            <CheckCircle2 className="w-14 h-14 text-emerald-600 animate-bounce" />
            <h4 className="font-serif text-3xl text-emerald-950 font-semibold">
              Consultation Request Received!
            </h4>
            <p className="text-xs sm:text-sm text-emerald-800 font-light max-w-md leading-relaxed">
              Thank you for reaching out to SMK Interior. Our senior interior architect is reviewing your property details and will call you within 24 hours. Redirecting to WhatsApp...
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setCurrentStep(1);
              }}
              className="text-xs text-brand-brown font-semibold underline mt-2"
            >
              Submit another inquiry
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            
            <AnimatePresence mode="wait">
              {/* STEP 1: PROPERTY TYPE SELECTOR */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-5"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-primary">
                      What type of space are we designing?
                    </h3>
                    <p className="text-xs text-brand-muted font-light">
                      Select your property type below to calibrate our spatial estimation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {propertyOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = selectedProperty === opt.label;
                      return (
                        <div
                          key={opt.label}
                          onClick={() => setValue('propertyType', opt.label)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 flex items-start gap-3.5 ${
                            isSelected
                              ? 'bg-brand-brown text-white border-brand-brown shadow-lg scale-[1.02]'
                              : 'bg-brand-cream/30 hover:bg-brand-cream/60 border-brand-brown/15 text-brand-primary'
                          }`}
                        >
                          <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-white/15 text-white' : 'bg-brand-brown/10 text-brand-brown'}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-serif font-semibold text-base">{opt.label}</span>
                            <span className={`text-[11px] font-light mt-0.5 ${isSelected ? 'text-brand-cream/80' : 'text-brand-muted'}`}>
                              {opt.desc}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-4 border-t border-brand-brown/10">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-7 py-3 rounded-full bg-brand-brown text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-brand-dark transition-colors shadow-md"
                    >
                      <span>Next: Select Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: SERVICE REQUIRED SELECTOR */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-5"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-primary">
                      Which interior service do you need?
                    </h3>
                    <p className="text-xs text-brand-muted font-light">
                      Choose the primary scope of work for your {selectedProperty}.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map((serv) => {
                      const isSelected = selectedService === serv;
                      return (
                        <div
                          key={serv}
                          onClick={() => setValue('service', serv)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                            isSelected
                              ? 'bg-brand-brown text-white border-brand-brown shadow-lg'
                              : 'bg-brand-cream/30 hover:bg-brand-cream/60 border-brand-brown/15 text-brand-primary'
                          }`}
                        >
                          <span className="font-serif font-medium text-sm">{serv}</span>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                            isSelected ? 'bg-white text-brand-brown border-white' : 'border-brand-brown/30'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-brand-brown/10">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-5 py-2.5 rounded-full border border-brand-brown/20 text-brand-primary text-xs font-semibold flex items-center gap-1.5 hover:bg-brand-brown/5 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-7 py-3 rounded-full bg-brand-brown text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-brand-dark transition-colors shadow-md"
                    >
                      <span>Next: Contact Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: CONTACT & LOCATION FORM */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-5"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-primary">
                      Where should we contact you?
                    </h3>
                    <p className="text-xs text-brand-muted font-light">
                      Enter your contact information to receive your customized 3D design briefing.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-brand-primary">Full Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Rajesh Sundaram"
                        {...register('name')}
                        className="w-full px-4 py-3 rounded-xl bg-brand-cream/40 border border-brand-brown/15 text-sm focus:outline-none focus:border-brand-brown transition-colors"
                      />
                      {errors.name && <span className="text-[11px] text-red-600">{errors.name.message}</span>}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-brand-primary">Mobile Number *</label>
                      <input
                        type="tel"
                        placeholder="+91 80562 94510"
                        {...register('phone')}
                        className="w-full px-4 py-3 rounded-xl bg-brand-cream/40 border border-brand-brown/15 text-sm focus:outline-none focus:border-brand-brown transition-colors"
                      />
                      {errors.phone && <span className="text-[11px] text-red-600">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Location */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-brand-primary">Project Location in Chennai *</label>
                      <input
                        type="text"
                        placeholder="e.g. ECR / Anna Nagar / OMR"
                        {...register('location')}
                        className="w-full px-4 py-3 rounded-xl bg-brand-cream/40 border border-brand-brown/15 text-sm focus:outline-none focus:border-brand-brown transition-colors"
                      />
                      {errors.location && <span className="text-[11px] text-red-600">{errors.location.message}</span>}
                    </div>

                    {/* Timeline */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-brand-primary">Estimated Timeline</label>
                      <select
                        {...register('timeline')}
                        className="w-full px-4 py-3 rounded-xl bg-brand-cream/40 border border-brand-brown/15 text-sm focus:outline-none focus:border-brand-brown transition-colors"
                      >
                        <option value="Immediate / Ready Possession">Immediate / Ready Possession</option>
                        <option value="Within 1 Month">Within 1 Month</option>
                        <option value="1 to 3 Months">1 to 3 Months</option>
                        <option value="Exploring & Planning">Exploring & Planning</option>
                      </select>
                    </div>
                  </div>

                  {/* Summary Tag */}
                  <div className="p-3 rounded-xl bg-brand-brown/5 border border-brand-brown/10 text-xs text-brand-muted flex items-center justify-between">
                    <span>Selected: <strong className="text-brand-brown font-semibold">{selectedProperty}</strong> • <strong className="text-brand-brown font-semibold">{selectedService}</strong></span>
                    <button type="button" onClick={() => setCurrentStep(1)} className="text-[11px] text-brand-tan font-bold underline">Edit</button>
                  </div>

                  {/* Submit Actions */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-brand-brown/10">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="w-full sm:w-auto px-5 py-3 rounded-full border border-brand-brown/20 text-brand-primary text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-brand-brown/5 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex-1 group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-brown text-white font-semibold text-xs uppercase tracking-wider hover:bg-brand-dark transition-colors disabled:opacity-50 shadow-lg"
                    >
                      <span>{isSubmitting ? 'Submitting Request...' : 'Request 3D Consultation'}</span>
                      <Send className="w-4 h-4 text-brand-tan group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </form>
        )}

      </div>
    </div>
  );
};
