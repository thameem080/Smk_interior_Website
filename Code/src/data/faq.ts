export interface FAQItem {
  id: string;
  category: "General" | "Process" | "Pricing & Warranty" | "Services";
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What services does SMK Interior provide?",
    answer: "SMK Interior offers complete end-to-end turnkey residential and commercial interior solutions. This includes spatial 3D design, modular kitchens, custom wardrobes, living room TV units, false ceiling & lighting, acoustic wall paneling, office fitouts, and complete home renovation."
  },
  {
    id: "faq-2",
    category: "General",
    question: "Do you provide complete home interior solutions in Chennai?",
    answer: "Yes, we specialize in complete home interiors across Chennai (ECR, OMR, Anna Nagar, Adyar, Nungambakkam, Velachery, and surrounding areas). We handle everything from design to final execution."
  },
  {
    id: "faq-3",
    category: "Process",
    question: "How long does a typical home interior project take?",
    answer: "Modular kitchen projects take approximately 25 working days. A complete 2BHK or 3BHK home interior takes between 40 to 60 working days from 3D layout approval."
  },
  {
    id: "faq-4",
    category: "Pricing & Warranty",
    question: "What material quality and warranty do you offer?",
    answer: "We use 100% Boiling Water Resistant (BWR/BWP) marine plywood, anti-fingerprint acrylic/PU finishes, and imported soft-close hardware (Blum/Hettich). All structural woodwork comes with a 10-year warranty."
  },
  {
    id: "faq-5",
    category: "Process",
    question: "How can I request a quotation or initial site visit?",
    answer: "You can click on 'Start a Project' or connect directly via WhatsApp/Call at +91 80562 94510. Our founder Mohammed Sheik and design team will schedule a site measurement and 3D consultation."
  },
  {
    id: "faq-6",
    category: "Services",
    question: "Do you design custom modular kitchens for heavy Indian cooking?",
    answer: "Absolutely. We engineer heavy-duty modular kitchens with stain-resistant quartz/granite tops, waterproof marine plywood bases, anti-bacterial surfaces, and high-load capacity tandem drawer boxes."
  }
];
