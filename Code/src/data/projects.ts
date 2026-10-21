export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  city: string;
  category: "Residential" | "Modular Kitchen" | "Commercial" | "Renovation" | "Pooja Unit" | "TV Unit" | "Hall Unit";
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
    id: "architectural-hall-unit-chennai",
    slug: "architectural-hall-unit-chennai",
    title: "Contemporary Architectural Hall Unit",
    subtitle: "Custom CNC geometric louvers, concealed display storage, and ambient LED backlit feature partition.",
    location: "Medavakkam, Chennai",
    city: "Chennai",
    category: "Hall Unit",
    propertyType: "Living Room Partition & Hall Unit",
    area: "140 Sq. Ft.",
    timeline: "14 Days",
    year: "2026",
    coverImage: "/works/hall-unit/hall-03.jpeg",
    heroImage: "/works/hall-unit/hall-01.jpeg",
    overview: "Crafted for an open-plan contemporary residence in Chennai, this multi-functional hall unit acts as an elegant spatial divider between the foyer and living room. Featuring bespoke CNC geometric detailing, display shelving, and soft warm ambient backlighting.",
    designApproach: "We designed an architectural partition unit that maximizes natural light flow while offering functional storage and display niches. Built with 100% Marine BWR plywood and finished with premium laminates and soft-close hardware.",
    highlights: [
      {
        room: "Geometric Louver Screen",
        description: "Precision CNC cut timber screen allowing filtered light while defining the living hall zone.",
        image: "/works/hall-unit/hall-01.jpeg"
      },
      {
        room: "Integrated Display Shelving",
        description: "Backlit curio niches with warm 3000K LED wash to showcase artifacts and family keepsakes.",
        image: "/works/hall-unit/hall-02.jpeg"
      },
      {
        room: "Concealed Base Console",
        description: "Soft-close storage cabinets with seamless push-to-open hardware for clutter-free living.",
        image: "/works/hall-unit/hall-03.jpeg"
      }
    ],
    beforeAfter: {
      beforeImage: "/works/hall-unit/hall-02.jpeg",
      afterImage: "/works/hall-unit/hall-03.jpeg",
      label: "Hall Unit Transformation"
    },
    gallery: [
      "/works/hall-unit/hall-03.jpeg",
      "/works/hall-unit/hall-01.jpeg",
      "/works/hall-unit/hall-02.jpeg"
    ],
    testimonial: {
      quote: "The hall partition unit is the first thing guests notice when they enter. The craftsmanship and lighting are exceptional.",
      author: "Karthik & Divya",
      role: "Homeowners, Medavakkam Chennai"
    }
  },
  {
    id: "luxury-modular-kitchen-chennai",
    slug: "luxury-modular-kitchen-chennai",
    title: "Precision Modular Kitchen Execution",
    subtitle: "High-gloss acrylic cabinetry, heavy-duty tandem drawers, and ergonomic workflow engineering.",
    location: "Pallikaranai, Chennai",
    city: "Chennai",
    category: "Modular Kitchen",
    propertyType: "L-Shape Modular Kitchen",
    area: "160 Sq. Ft.",
    timeline: "20 Days",
    year: "2026",
    coverImage: "/works/kitchen-unit/kitchen-05.jpeg",
    heroImage: "/works/kitchen-unit/kitchen-05.jpeg",
    overview: "A chef-grade contemporary modular kitchen delivered in Chennai, designed for maximum durability and effortless everyday use. Built with 100% waterproof BWP grade marine plywood, scratch-resistant acrylic shutters, and German soft-close fittings.",
    designApproach: "We engineered an optimized work triangle between the cooking hub, sink, and refrigerator. Features heavy-duty cutlery trays, corner pull-out carousels, dedicated appliance tall units, and seamless overhead storage.",
    highlights: [
      {
        room: "Acrylic High-Gloss Storage",
        description: "Anti-fingerprint, easy-clean high-gloss acrylic panels in a balanced two-tone color scheme.",
        image: "/works/kitchen-unit/kitchen-05.jpeg"
      },
      {
        room: "Heavy-Duty Tandem Drawers",
        description: "German soft-close drawer runners rated for 40kg capacity with modular utensil organizers.",
        image: "/works/kitchen-unit/kitchen-01.jpeg"
      },
      {
        room: "Overhead Lift-Up Cabinets",
        description: "Bi-fold pneumatic lift-up overhead shutters with integrated under-cabinet task lighting.",
        image: "/works/kitchen-unit/kitchen-02.jpeg"
      }
    ],
    beforeAfter: {
      beforeImage: "/works/kitchen-unit/kitchen-03.jpeg",
      afterImage: "/works/kitchen-unit/kitchen-05.jpeg",
      label: "Modular Kitchen Transformation"
    },
    gallery: [
      "/works/kitchen-unit/kitchen-05.jpeg",
      "/works/kitchen-unit/kitchen-01.jpeg",
      "/works/kitchen-unit/kitchen-02.jpeg",
      "/works/kitchen-unit/kitchen-03.jpeg",
      "/works/kitchen-unit/kitchen-04.jpeg"
    ],
    testimonial: {
      quote: "SMK Interior delivered our kitchen exactly on the promised 20th day. The soft-close drawers and waterproof marine plywood give us total peace of mind.",
      author: "Venkatesh & Sowmya",
      role: "Homeowners, Pallikaranai Chennai"
    }
  },
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
    id: "dressing-table-wardrobe-chennai",
    slug: "dressing-table-wardrobe-chennai",
    title: "Integrated Dressing Table & Wardrobe",
    subtitle: "Space-saving teak & white gloss wardrobe with built-in LED mirror dressing unit and pull-out drawers.",
    location: "Guduvanchery, Chennai",
    city: "Chennai",
    category: "TV Unit",
    propertyType: "Bedroom Furniture",
    area: "80 Sq. Ft.",
    timeline: "10 Days",
    year: "2026",
    coverImage: "/works/dressing-table.jpeg",
    heroImage: "/works/dressing-table.jpeg",
    overview: "A beautifully integrated bedroom solution combining a full-height wardrobe with a built-in dressing unit. Features warm teak wood upper cabinets, crisp white gloss lower panels, an LED-backlit vanity mirror, and two smooth pull-out drawers.",
    designApproach: "We maximised vertical space with floor-to-ceiling teak veneered overhead cabinets while the lower section uses anti-fingerprint white gloss for a bright, spacious feel. The integrated LED mirror dressing unit sits seamlessly between the wardrobe panels.",
    highlights: [
      {
        room: "LED Vanity Mirror",
        description: "Built-in backlit LED mirror with warm 3000K ring lighting and integrated power socket for styling tools.",
        image: "/works/dressing-table.jpeg"
      },
      {
        room: "Teak & White Wardrobe",
        description: "Floor-to-ceiling teak veneer overhead storage combined with white gloss push-to-open wardrobe panels.",
        image: "/works/dressing-table.jpeg"
      }
    ],
    beforeAfter: {
      beforeImage: "/works/dressing-table.jpeg",
      afterImage: "/works/dressing-table.jpeg",
      label: "Bedroom Dressing Unit"
    },
    gallery: [
      "/works/dressing-table.jpeg"
    ],
    testimonial: {
      quote: "The dressing unit blends perfectly with the wardrobe. The LED mirror and pull-out drawers make our bedroom feel like a boutique hotel.",
      author: "Fatima & Shan",
      role: "Homeowners, Guduvanchery"
    }
  }
];
