export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  city: string;
  category: "Residential" | "Modular Kitchen" | "Commercial" | "Renovation" | "Pooja Unit" | "TV Unit";
  propertyType: string;
  area: string;
  timeline: string;
  year: string;
  coverImage: string;
  heroImage: string;
  overview: string;
  designApproach: string;
  highlights: {
    room: string;
    description: string;
    image: string;
  }[];
  beforeAfter: {
    beforeImage: string;
    afterImage: string;
    label: string;
  };
  gallery: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "modern-2bhk-chennai",
    slug: "modern-2bhk-chennai",
    title: "The Emerald Penthouse & Residence",
    subtitle: "A seamless blend of minimalist warmth, concealed storage, and fluted timber accents.",
    location: "ECR, Chennai",
    city: "Chennai",
    category: "Residential",
    propertyType: "3BHK Luxury Apartment",
    area: "1,850 Sq. Ft.",
    timeline: "45 Days",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85",
    overview: "Located along East Coast Road, Chennai, this 3BHK residence was transformed into an architectural sanctuary. The client desired an uncluttered modern aesthetic with warm earthy tones, integrated smart lighting, and concealed utility areas.",
    designApproach: "We utilized an open-plan layout connecting the living and dining spaces using continuous Italian marble flooring. Fluted oak wood wall paneling hides the master bedroom entryway, creating a unified architectural wall plane.",
    highlights: [
      {
        room: "Living Room & Foyer",
        description: "Backlit sintered stone media wall flanked by warm LED cove profiles and custom low-profile seating.",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
      },
      {
        room: "Modular Island Kitchen",
        description: "Matte olive acrylic cabinetry paired with white quartz countertops and Blum soft-close tandem boxes.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85"
      },
      {
        room: "Master Suite",
        description: "Upholstered velvet acoustic headboard wall with integrated floating bedside tables and tinted glass sliding wardrobe.",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85"
      }
    ],
    beforeAfter: {
      beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
      afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      label: "Living Room Renovation"
    },
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85"
    ],
    testimonial: {
      quote: "SMK Interior took our bare shell apartment and turned it into an architectural masterpiece. The attention to detail and zero-delay execution was unmatched.",
      author: "Rajesh & Priya Sundaram",
      role: "Homeowners, ECR Chennai"
    }
  },
  {
    id: "luxury-villa-omr",
    slug: "luxury-villa-omr",
    title: "Vanguard Villa",
    subtitle: "Double-height living space with custom brass trim, walnut joinery, and private garden views.",
    location: "OMR, Chennai",
    city: "Chennai",
    category: "Residential",
    propertyType: "4BHK Independent Villa",
    area: "3,400 Sq. Ft.",
    timeline: "60 Days",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=85",
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=85",
    overview: "A multi-generational family villa in OMR requiring sophisticated luxury, private family suites, and a grand central double-height living area.",
    designApproach: "We introduced a custom 18-foot travertine TV accent wall with integrated vertical linear lights. Walnut veneers and champagne brass trims unify the ground floor lounge.",
    highlights: [
      {
        room: "Double Height Lounge",
        description: "Dramatic 18-foot stone clad accent wall with floating walnut console and architectural pendant cluster.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85"
      },
      {
        room: "Chef's Kitchen & Pantry",
        description: "Parallel layout with dark charcoal nano-laminate cabinets and motorized bi-fold appliance garages.",
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=85"
      }
    ],
    beforeAfter: {
      beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
      afterImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
      label: "Double-Height Lounge Transformation"
    },
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85"
    ],
    testimonial: {
      quote: "From initial 3D design to the final handover, SMK Interior handled our villa project with exceptional craftsmanship and professionalism.",
      author: "Dr. Vikram K.",
      role: "Villa Owner, OMR"
    }
  },
  {
    id: "minimalist-kitchen-anna-nagar",
    slug: "minimalist-kitchen-anna-nagar",
    title: "Nordic Quartz Kitchen",
    subtitle: "Handleless anti-fingerprint acrylic modular kitchen with hidden breakfast counter.",
    location: "Anna Nagar, Chennai",
    city: "Chennai",
    category: "Modular Kitchen",
    propertyType: "Kitchen Renovation",
    area: "240 Sq. Ft.",
    timeline: "25 Days",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=85",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=85",
    overview: "A complete kitchen overhaul replacing an outdated tile setup with a handleless Nordic-inspired quartz modular kitchen.",
    designApproach: "Gola profile handleless channels, soft-touch matte surfaces, and integrated under-cabinet LED tracks for shadowless meal preparation.",
    highlights: [
      {
        room: "Breakfast Island",
        description: "Waterfall quartz counter with built-in wireless charging pad and wine rack.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85"
      }
    ],
    beforeAfter: {
      beforeImage: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1600&q=85",
      afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
      label: "Modular Kitchen Remodel"
    },
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "tech-hq-nungambakkam",
    slug: "tech-hq-nungambakkam",
    title: "Apex Tech Studio",
    subtitle: "Modern open-plan office space featuring acoustic glass pods, timber ceilings, and vibrant lounge zones.",
    location: "Nungambakkam, Chennai",
    city: "Chennai",
    category: "Commercial",
    propertyType: "Corporate Office",
    area: "4,200 Sq. Ft.",
    timeline: "40 Days",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85",
    overview: "Designed for a fast-growing financial software enterprise, this workspace supports 60 employees with private glass focus rooms and a central break-out cafe.",
    designApproach: "Exposed concrete ceiling grids combined with acoustic baffle panels and indirect 3000K lighting.",
    highlights: [
      {
        room: "Boardroom",
        description: "14-seater walnut conference table with smart AV integration and acoustic glass enclosure.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85"
      }
    ],
    beforeAfter: {
      beforeImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85",
      afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
      label: "Office Space Fitout"
    },
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "custom-tv-units-chennai",
    slug: "custom-tv-units-chennai",
    title: "Sintered Stone TV Units & Media Walls",
    subtitle: "Commanding entertainment walls featuring backlit sintered slabs, acoustic fluted timber, and floating consoles.",
    location: "Anna Nagar, Chennai",
    city: "Chennai",
    category: "TV Unit",
    propertyType: "Living Room Feature Wall",
    area: "350 Sq. Ft.",
    timeline: "15 Days",
    year: "2026",
    coverImage: "/works/tv-unit/tv-01.jpeg",
    heroImage: "/works/tv-unit/tv-01.jpeg",
    overview: "Designed for a luxury apartment in Anna Nagar, this TV feature wall transforms the main living area into an architectural focal point. It integrates ambient cove illumination, concealed cable channels, and heavy-duty Blum soft-close floating drawers.",
    designApproach: "We paired book-matched sintered stone slabs with vertical charcoal fluted louvers to create depth, warmth, and sound absorption.",
    highlights: [
      {
        room: "Main Media Console",
        description: "Backlit sintered stone panel with low-profile matte floating drawers and concealed AV cable routing.",
        image: "/works/tv-unit/tv-02.jpeg"
      },
      {
        room: "Acoustic Wall Paneling",
        description: "Fluted timber louvers with warm 3000K indirect LED strip lighting.",
        image: "/works/tv-unit/tv-03.jpeg"
      }
    ],
    beforeAfter: {
      beforeImage: "/works/tv-unit/tv-05.jpeg",
      afterImage: "/works/tv-unit/tv-01.jpeg",
      label: "Living Room Wall Transformation"
    },
    gallery: [
      "/works/tv-unit/tv-01.jpeg",
      "/works/tv-unit/tv-02.jpeg",
      "/works/tv-unit/tv-03.jpeg",
      "/works/tv-unit/tv-04.jpeg",
      "/works/tv-unit/tv-05.jpeg",
      "/works/tv-unit/tv-06.jpeg",
      "/works/tv-unit/tv-07.jpeg",
      "/works/tv-unit/tv-08.jpeg"
    ],
    testimonial: {
      quote: "The TV wall is the centerpiece of our home now. The floating console finish and concealed wiring execution are world-class.",
      author: "Karthik & Ananya",
      role: "Homeowners, Anna Nagar"
    }
  },
  {
    id: "bespoke-pooja-units-chennai",
    slug: "bespoke-pooja-units-chennai",
    title: "Architectural Sacred Pooja Mandirs",
    subtitle: "Custom Vastu-compliant Pooja sanctuaries with CNC brass jali screens, backlit onyx, and bells.",
    location: "ECR, Chennai",
    city: "Chennai",
    category: "Pooja Unit",
    propertyType: "Sacred Space Mandir",
    area: "180 Sq. Ft.",
    timeline: "15 Days",
    year: "2026",
    coverImage: "/works/pooja-unit/pooja-01.jpeg",
    heroImage: "/works/pooja-unit/pooja-01.jpeg",
    overview: "Crafted for a seaside villa on ECR, this bespoke Pooja unit balances traditional reverence with modern architectural elegance. It incorporates Vastu directional alignment, laser-cut brass mesh doors, and warm backlit translucent onyx.",
    designApproach: "We utilized teak wood frames paired with CNC brass lattice screens and integrated drawer storage for brass lamps, incense, and prayer items.",
    highlights: [
      {
        room: "Main Sanctuary Niche",
        description: "Backlit translucent onyx backdrop with solid teak wood carvings and integrated brass bells.",
        image: "/works/pooja-unit/pooja-02.jpeg"
      },
      {
        room: "CNC Jali Folding Doors",
        description: "Intricate laser-etched brass lattice folding doors with soft-close magnetic catches.",
        image: "/works/pooja-unit/pooja-03.jpeg"
      }
    ],
    beforeAfter: {
      beforeImage: "/works/pooja-unit/pooja-05.jpeg",
      afterImage: "/works/pooja-unit/pooja-01.jpeg",
      label: "Pooja Room Transformation"
    },
    gallery: [
      "/works/pooja-unit/pooja-01.jpeg",
      "/works/pooja-unit/pooja-02.jpeg",
      "/works/pooja-unit/pooja-03.jpeg",
      "/works/pooja-unit/pooja-04.jpeg",
      "/works/pooja-unit/pooja-05.jpeg",
      "/works/pooja-unit/pooja-06.jpeg",
      "/works/pooja-unit/pooja-07.jpeg",
      "/works/pooja-unit/pooja-08.jpeg",
      "/works/pooja-unit/pooja-09.jpeg"
    ],
    testimonial: {
      quote: "SMK Interior designed a divine Pooja space for our villa. The CNC jali work and warm backlit onyx create such a tranquil atmosphere.",
      author: "Srimathi Ramanathan",
      role: "Villa Owner, ECR Chennai"
    }
  },
  {
    id: "fluted-walnut-tv-wall-omr",
    slug: "fluted-walnut-tv-wall-omr",
    title: "Fluted Walnut Entertainment Wall",
    subtitle: "Warm walnut louver paneling with concealed soundbar niche, ambient LED wash, and floating matte console.",
    location: "OMR, Chennai",
    city: "Chennai",
    category: "TV Unit",
    propertyType: "Living Room Media Wall",
    area: "280 Sq. Ft.",
    timeline: "12 Days",
    year: "2026",
    coverImage: "/works/tv-unit/tv-04.jpeg",
    heroImage: "/works/tv-unit/tv-04.jpeg",
    overview: "Designed for a modern apartment on OMR, this entertainment wall blends warm walnut fluted panels with a recessed soundbar cavity and soft LED cove lighting to create a cinematic living room experience.",
    designApproach: "Vertical walnut louvers are paired with a matte charcoal floating console featuring Blum soft-close drawers. Concealed cable routing keeps the wall clean while integrated LED strips provide ambient wash lighting.",
    highlights: [
      {
        room: "Fluted Walnut Panel Wall",
        description: "Floor-to-ceiling walnut louvers with hidden AV niche and warm 2700K indirect LED wash.",
        image: "/works/tv-unit/tv-06.jpeg"
      },
      {
        room: "Floating Matte Console",
        description: "Charcoal nano-laminate floating drawers with German Blum soft-close hardware and cable management.",
        image: "/works/tv-unit/tv-07.jpeg"
      }
    ],
    beforeAfter: {
      beforeImage: "/works/tv-unit/tv-08.jpeg",
      afterImage: "/works/tv-unit/tv-04.jpeg",
      label: "Entertainment Wall Makeover"
    },
    gallery: [
      "/works/tv-unit/tv-04.jpeg",
      "/works/tv-unit/tv-06.jpeg",
      "/works/tv-unit/tv-07.jpeg",
      "/works/tv-unit/tv-08.jpeg"
    ],
    testimonial: {
      quote: "The walnut paneling and hidden soundbar niche transformed our living room into a private cinema. Absolutely stunning craftsmanship.",
      author: "Deepak & Meera",
      role: "Homeowners, OMR Chennai"
    }
  },
  {
    id: "contemporary-brass-pooja-guduvanchery",
    slug: "contemporary-brass-pooja-guduvanchery",
    title: "Contemporary Brass & Teak Pooja Sanctum",
    subtitle: "Modern Vastu-aligned prayer niche with CNC geometric brass screens, backlit marble, and pull-out prayer drawers.",
    location: "Guduvanchery, Chennai",
    city: "Chennai",
    category: "Pooja Unit",
    propertyType: "Sacred Space Mandir",
    area: "120 Sq. Ft.",
    timeline: "10 Days",
    year: "2026",
    coverImage: "/works/pooja-unit/pooja-03.jpeg",
    heroImage: "/works/pooja-unit/pooja-03.jpeg",
    overview: "A contemporary take on the traditional Pooja mandir, designed for a new villa in Guduvanchery. This unit merges modern geometric brass lattice work with warm teak joinery and a backlit Italian marble altar backdrop.",
    designApproach: "CNC-cut geometric brass screens replace traditional jali patterns, while a backlit marble panel casts a warm ambient glow. Pull-out teak drawers store puja essentials, and soft-close folding doors conceal the sanctum when not in use.",
    highlights: [
      {
        room: "Geometric Brass Screen Doors",
        description: "CNC-precision brass folding doors with modern geometric motifs and magnetic soft-close latches.",
        image: "/works/pooja-unit/pooja-06.jpeg"
      },
      {
        room: "Backlit Marble Altar",
        description: "Italian marble backdrop panel with warm amber LED backlighting and solid teak shelf frame.",
        image: "/works/pooja-unit/pooja-07.jpeg"
      }
    ],
    beforeAfter: {
      beforeImage: "/works/pooja-unit/pooja-08.jpeg",
      afterImage: "/works/pooja-unit/pooja-04.jpeg",
      label: "Pooja Sanctum Transformation"
    },
    gallery: [
      "/works/pooja-unit/pooja-03.jpeg",
      "/works/pooja-unit/pooja-04.jpeg",
      "/works/pooja-unit/pooja-06.jpeg",
      "/works/pooja-unit/pooja-07.jpeg",
      "/works/pooja-unit/pooja-08.jpeg",
      "/works/pooja-unit/pooja-09.jpeg"
    ],
    testimonial: {
      quote: "The contemporary brass lattice work is breathtaking. SMK Interior created a prayer space that feels both modern and deeply spiritual.",
      author: "Lakshmi & Venkat",
      role: "Villa Owners, Guduvanchery"
    }
  }
];
