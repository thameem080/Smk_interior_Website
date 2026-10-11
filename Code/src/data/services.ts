export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  galleryImages: string[];
  features: string[];
  materials: string[];
  idealFor: string;
  turnaroundTime: string;
  seoTitle: string;
  seoDescription: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "home-interiors",
    slug: "home-interiors",
    number: "01",
    title: "Complete Home Interiors",
    shortDescription: "End-to-end turnkey residential interior transformation customized to your lifestyle and space ergonomics.",
    fullDescription: "Our complete home interior solution covers everything from spatial layout planning and 3D architectural renders to custom joinery, electrical work, wallpaper, lighting, and soft furnishings. We craft homes that elevate daily living while retaining enduring visual warmth.",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85"
    ],
    features: [
      "Turnkey 3D Design & Execution",
      "Bespoke Furniture & Architectural Millwork",
      "Smart Concealed Lighting & Automation",
      "Vastu-Compliant Spatial Planning",
      "Dedicated Project Manager & 10-Year Warranty"
    ],
    materials: ["Boiling Water Resistant (BWR) Plywood", "German Hettich / Blum Hardware", "PU Lacquer & Italian Veneer", "Quartz & Granite Countertops"],
    idealFor: "2BHK, 3BHK, 4BHK apartments, independent villas, and luxury penthouses.",
    turnaroundTime: "45 Working Days",
    seoTitle: "Complete Home Interior Designers in Chennai | SMK Interior",
    seoDescription: "Transform your apartment or villa with SMK Interior's complete turnkey residential interior solutions in Chennai."
  },
  {
    id: "modular-kitchen",
    slug: "modular-kitchen",
    number: "02",
    title: "Modular Kitchens",
    shortDescription: "Precision-engineered kitchens blending ergonomic workflows, soft-close hardware, and pristine finishes.",
    fullDescription: "A kitchen is the heart of every modern home. We design custom modular kitchens optimized for Indian cooking styles, featuring heavy-duty drawer systems, pull-out larders, stain-resistant quartz tops, and seamless chimney integrations.",
    coverImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1600&q=85"
    ],
    features: [
      "L-Shape, Parallel, Island & U-Shape Configurations",
      "Anti-Bacterial & Heat-Resistant Surfaces",
      "Soft-Close Tandem Boxes & Corner Carousel Units",
      "Built-in Appliance Towers & Pantry Cabinets",
      "100% Water-Proof BWP Grade Plywood Base"
    ],
    materials: ["BWP Marine Plywood", "Acrylic & Anti-Fingerprint Matte Laminates", "Blum Servo-Drive Hardware", "Nano Quartz & Calacatta Countertops"],
    idealFor: "Modern homes seeking functional efficiency and aesthetic elegance.",
    turnaroundTime: "25 Working Days",
    seoTitle: "Modular Kitchen Designers in Chennai | SMK Interior",
    seoDescription: "Custom luxury modular kitchens designed and installed in Chennai. Heavy-duty hardware, waterproof plywood, and acrylic/matte finishes by SMK Interior."
  },
  {
    id: "bedroom-interiors",
    slug: "bedroom-interiors",
    number: "03",
    title: "Bedroom Interiors",
    shortDescription: "Sanctuaries of calm featuring tailored headboards, acoustic wall paneling, and intelligent ambient lighting.",
    fullDescription: "Your bedroom should be a sanctuary. We craft serene sleeping environments featuring upholstered acoustic headboards, integrated study desks, ambient cove lighting, and space-saving wardrobes tailored to your daily routine.",
    coverImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1920&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1600&q=85"
    ],
    features: [
      "Custom King/Queen Bed Frames with Hydraulic Storage",
      "Acoustic Fabric & Wooden Fluted Wall Paneling",
      "Dimmable Smart Bedside Lighting & Charging Docks",
      "Floating Vanity Mirrors & Integrated Workstations"
    ],
    materials: ["Teak Wood Accents", "Velvet & Linen Upholstery", "Warm Oak Fluted Panels", "Hafele Magnetic Door Locks"],
    idealFor: "Master bedrooms, guest bedrooms, and kids' themed bedrooms.",
    turnaroundTime: "20 Working Days",
    seoTitle: "Modern Bedroom Interior Design in Chennai | SMK Interior",
    seoDescription: "Sleek, comforting bedroom interior designs by SMK Interior Chennai. Hydraulic beds, acoustic headboards, customized wardrobes, and warm ambient lighting."
  },
  {
    id: "living-room-interiors",
    slug: "living-room-interiors",
    number: "04",
    title: "Living Room Interiors",
    shortDescription: "Statement living zones featuring stone TV walls, custom sectional sofas, and architectural louvers.",
    fullDescription: "The living room sets the tone for your entire home. We design commanding entertainment units with sintered stone backdrops, fluted wood louvers, custom seating arrangements, and warm ambient light layers.",
    coverImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85"
    ],
    features: [
      "Sintered Stone & Marble Backlit TV Walls",
      "Custom Sectional Sofas & Ottoman Seating",
      "Charcoal & Timber Architectural Louvers",
      "Foyer Shoe Storage & Divider Partitions"
    ],
    materials: ["Italian Marble & Sintered Slab", "Solid Charcoal Louvers", "Top-Grain Leatherette & Bouclé Fabrics"],
    idealFor: "Modern living rooms, open-plan dining zones, and penthouse lounges.",
    turnaroundTime: "20 Working Days",
    seoTitle: "Luxury Living Room Interior Designers in Chennai | SMK Interior",
    seoDescription: "Create a stunning living room with custom TV units, Italian marble walls, and architectural louvers by SMK Interior Chennai."
  },
  {
    id: "wardrobes",
    slug: "wardrobes",
    number: "05",
    title: "Custom Wardrobes",
    shortDescription: "Sleek sliding glass, tinted aluminum profile, and floor-to-ceiling walk-in wardrobes with internal LED sensors.",
    fullDescription: "Maximize storage while elevating your bedroom aesthetics with our floor-to-ceiling wardrobes. We offer sliding profile doors, tinted glass walk-in closets, and customized organizers for accessories, shoes, and suits.",
    coverImage: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1920&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1600&q=85"
    ],
    features: [
      "Aluminum Tinted Glass Sliding Doors",
      "Integrated Sensor LED Wardrobe Strips",
      "Pull-Out Trouser & Watch Organizers",
      "Soft-Close Soft-Touch Hinges & Handles"
    ],
    materials: ["Anodized Aluminum Profiles", "Toughened Fluted Glass", "Linen-Textured Laminates", "Ebony Wood Veneers"],
    idealFor: "Walk-in closets and space-efficient bedroom storage.",
    turnaroundTime: "15 Working Days",
    seoTitle: "Custom Modular Wardrobes & Walk-In Closets | SMK Interior Chennai",
    seoDescription: "Explore luxury sliding glass wardrobes, walk-in closets, and hinged door designs in Chennai by SMK Interior."
  },
  {
    id: "false-ceiling",
    slug: "false-ceiling",
    number: "06",
    title: "False Ceiling & Lighting",
    shortDescription: "Architectural Gypsum ceiling designs, magnetic tracking lights, and indirect mood cove lights.",
    fullDescription: "Transform spatial ambience with custom architectural ceiling plans. We seamlessly embed linear magnetic tracking lights, anti-glare recessed COB spotlights, and warm LED cove channels into seamlessly finished Saint-Gobain Gyproc false ceilings.",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85"
    ],
    features: [
      "Seamless Saint-Gobain Gyproc Gypsum Boards",
      "Magnetic Low-Voltage Track Profile Lighting",
      "Anti-Glare Deep Recessed Architectural Spotlights",
      "Custom Perimeter Cove & Step Ceiling Designs"
    ],
    materials: ["Saint-Gobain Gyproc Gypsum", "Anodized Aluminum Magnetic Tracks", "CRI 90+ Warm White LED Strips"],
    idealFor: "Living rooms, dining halls, master suites, and commercial spaces.",
    turnaroundTime: "10 Working Days",
    seoTitle: "False Ceiling & Lighting Design in Chennai | SMK Interior",
    seoDescription: "Elevate your ceilings with architectural gypsum design and magnetic track lighting by SMK Interior Chennai."
  },
  {
    id: "tv-units",
    slug: "tv-units",
    number: "07",
    title: "TV Units & Media Walls",
    shortDescription: "Sintered stone feature walls, acoustic fluted louvers, and floating consoles with concealed wiring tracks.",
    fullDescription: "Transform your main living room into a commanding visual centerpiece. Our custom TV unit designs combine backlit sintered marble slabs, vertical acoustic louvers, integrated LED cove channels, and soft-close floating consoles.",
    coverImage: "/works/tv-unit/tv-01.jpeg",
    galleryImages: [
      "/works/tv-unit/tv-01.jpeg",
      "/works/tv-unit/tv-02.jpeg",
      "/works/tv-unit/tv-03.jpeg",
      "/works/tv-unit/tv-04.jpeg",
      "/works/tv-unit/tv-05.jpeg",
      "/works/tv-unit/tv-06.jpeg",
      "/works/tv-unit/tv-07.jpeg",
      "/works/tv-unit/tv-08.jpeg"
    ],
    features: [
      "Sintered Stone & Italian Marble Wall Cladding",
      "Acoustic Timber & Charcoal Fluted Louvers",
      "Floating Storage Consoles with Soft-Close Tandem Drawers",
      "Concealed AV Wiring & Smart Home Automation Routing",
      "3000K Warm Ambient LED Cove & Spotlight Profiles"
    ],
    materials: ["Book-matched Sintered Slabs", "Solid Teak & Oak Fluted Panels", "Hettich / Blum Tandem Boxes", "Toughened Tinted Glass"],
    idealFor: "Modern living rooms, penthouse lounges, and dedicated home theater suites.",
    turnaroundTime: "15 Working Days",
    seoTitle: "Modern TV Unit & Feature Wall Designers in Chennai | SMK Interior",
    seoDescription: "Bespoke TV units and sintered stone media walls designed and installed in Chennai by SMK Interior. Concealed wiring, fluted louvers, 10-year warranty."
  },
  {
    id: "pooja-units",
    slug: "pooja-units",
    number: "08",
    title: "Pooja Units & Mandir Joinery",
    shortDescription: "Serene Vastu-aligned sacred mandir spaces crafted with CNC brass jali, backlit onyx, and teak wood.",
    fullDescription: "Bring tranquility and sacred elegance into your home with our custom Pooja unit designs. Engineered according to strict Vastu principles, we integrate laser-etched brass lattice screens, warm backlit translucent onyx backdrops, dedicated incense drawers, and brass bell accents.",
    coverImage: "/works/pooja-unit/pooja-01.jpeg",
    galleryImages: [
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
    features: [
      "Vastu-Compliant Directional Orientation & Ergonomics",
      "CNC Laser-Cut Brass & Wood Jali Folding Screens",
      "Backlit Translucent Onyx & Marble Shrine Niche",
      "Pull-Out Brass Trays & Incense Storage Drawers",
      "Warm Concealed LED Illumination"
    ],
    materials: ["100% BWR Teak Plywood", "Solid Brass Hardware & Jali Screens", "Translucent Onyx Stone", "PU Lacquer Polish"],
    idealFor: "Apartment mandir alcoves, villa pooja rooms, and sacred wall niches.",
    turnaroundTime: "15 Working Days",
    seoTitle: "Custom Pooja Mandir Unit Designers in Chennai | SMK Interior",
    seoDescription: "Craft sacred Vastu-compliant Pooja mandir units in Chennai with SMK Interior. CNC brass jali screens, backlit onyx, and teak joinery."
  }
];
