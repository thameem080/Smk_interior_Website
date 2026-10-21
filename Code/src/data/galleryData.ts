export interface GalleryItem {
  id: string;
  title: string;
  category: 'Modular Kitchen' | 'Hall Unit' | 'TV Unit' | 'Pooja Unit' | 'Dressing Table';
  image: string;
  tag: string;
  description: string;
}

export const galleryData: GalleryItem[] = [
  // --- MODULAR KITCHEN (5 PHOTOS) ---
  {
    id: 'kitchen-05',
    title: 'Modern L-Shape Modular Kitchen',
    category: 'Modular Kitchen',
    image: '/works/kitchen-unit/kitchen-05.jpeg',
    tag: 'Execution Complete',
    description: 'High-gloss dual-tone acrylic cabinetry, quartz countertop, and Blum soft-close tandem drawers.'
  },
  {
    id: 'kitchen-01',
    title: 'Precision Modular Kitchen Storage',
    category: 'Modular Kitchen',
    image: '/works/kitchen-unit/kitchen-01.jpeg',
    tag: 'Plywood & Hardware',
    description: '100% Waterproof BWP marine plywood construction with heavy-duty tandem runners.'
  },
  {
    id: 'kitchen-02',
    title: 'Overhead Kitchen Lift-Up Units',
    category: 'Modular Kitchen',
    image: '/works/kitchen-unit/kitchen-02.jpeg',
    tag: 'Cabinetry Detail',
    description: 'Pneumatic bi-fold overhead cabinets with anti-fingerprint acrylic shutters.'
  },
  {
    id: 'kitchen-03',
    title: 'Kitchen Corner & Pullout Organizers',
    category: 'Modular Kitchen',
    image: '/works/kitchen-unit/kitchen-03.jpeg',
    tag: 'Ergonomic Layout',
    description: 'Custom corner carousel and tall appliance pantry for maximum kitchen ergonomics.'
  },
  {
    id: 'kitchen-04',
    title: 'Under-Counter Tandem Baskets',
    category: 'Modular Kitchen',
    image: '/works/kitchen-unit/kitchen-04.jpeg',
    tag: 'Heavy-Duty Hardware',
    description: 'Modular stainless steel cutlery and thali trays with smooth soft-close slides.'
  },

  // --- HALL UNIT & LIVING ROOM (3 PHOTOS) ---
  {
    id: 'hall-03',
    title: 'Architectural Hall Divider & Unit',
    category: 'Hall Unit',
    image: '/works/hall-unit/hall-03.jpeg',
    tag: 'Hall Partition',
    description: 'Custom hall unit with geometric wooden screen and push-to-open concealed console.'
  },
  {
    id: 'hall-01',
    title: 'CNC Geometric Louver Hall Partition',
    category: 'Hall Unit',
    image: '/works/hall-unit/hall-01.jpeg',
    tag: 'CNC Joinery',
    description: 'Precision CNC-cut timber louvers creating an elegant foyer-to-living room transition.'
  },
  {
    id: 'hall-02',
    title: 'Integrated Hall Display Shelving',
    category: 'Hall Unit',
    image: '/works/hall-unit/hall-02.jpeg',
    tag: 'Ambient Lighting',
    description: 'Backlit curio niches with warm 3000K LED wash to showcase artifacts.'
  },

  // --- TV UNIT & MEDIA WALLS (8 PHOTOS) ---
  {
    id: 'tv-01',
    title: 'Sintered Stone TV Media Wall',
    category: 'TV Unit',
    image: '/works/tv-unit/tv-01.jpeg',
    tag: 'Sintered Slab',
    description: 'Book-matched sintered marble feature wall with vertical acoustic louvers and warm LED glow.'
  },
  {
    id: 'tv-04',
    title: 'Fluted Walnut Entertainment Wall',
    category: 'TV Unit',
    image: '/works/tv-unit/tv-04.jpeg',
    tag: 'Acoustic Louvers',
    description: 'Natural walnut vertical fluted panels with recessed soundbar niche and floating console.'
  },
  {
    id: 'tv-02',
    title: 'Backlit Living Room TV Console',
    category: 'TV Unit',
    image: '/works/tv-unit/tv-02.jpeg',
    tag: 'LED Profile',
    description: 'Concealed wiring conduit system with floating drawers and warm perimeter lighting.'
  },
  {
    id: 'tv-03',
    title: 'Minimalist Entertainment Unit',
    category: 'TV Unit',
    image: '/works/tv-unit/tv-03.jpeg',
    tag: 'Floating Joinery',
    description: 'Handleless push-to-open floating drawers in matte charcoal nano-laminate.'
  },
  {
    id: 'tv-05',
    title: 'Full Height Media Feature Wall',
    category: 'TV Unit',
    image: '/works/tv-unit/tv-05.jpeg',
    tag: 'Turnkey Joinery',
    description: 'Floor-to-ceiling architectural TV wall balancing wood louvers with stone textures.'
  },
  {
    id: 'tv-06',
    title: 'Walnut & Charcoal Living Room Wall',
    category: 'TV Unit',
    image: '/works/tv-unit/tv-06.jpeg',
    tag: 'Woodwork Finish',
    description: 'Precision on-site assembly with zero visible screws and concealed AV conduits.'
  },
  {
    id: 'tv-07',
    title: 'Floating AV Console & Drawer Unit',
    category: 'TV Unit',
    image: '/works/tv-unit/tv-07.jpeg',
    tag: 'Soft-Close Drawers',
    description: 'German Blum soft-close undermount runners rated for 40kg weight capacity.'
  },
  {
    id: 'tv-08',
    title: 'Contemporary Hall TV Entertainment Zone',
    category: 'TV Unit',
    image: '/works/tv-unit/tv-08.jpeg',
    tag: 'Living Space',
    description: 'Integrated spatial design uniting storage, sound, and lighting into one aesthetic.'
  },

  // --- POOJA MANDIR UNITS (9 PHOTOS) ---
  {
    id: 'pooja-01',
    title: 'Sacred Mandir with Brass Lattice Doors',
    category: 'Pooja Unit',
    image: '/works/pooja-unit/pooja-01.jpeg',
    tag: 'Vastu Compliant',
    description: 'Vastu-aligned Pooja sanctum featuring CNC brass jali screens and translucent backlit onyx.'
  },
  {
    id: 'pooja-02',
    title: 'Backlit Translucent Onyx Shrine Altar',
    category: 'Pooja Unit',
    image: '/works/pooja-unit/pooja-02.jpeg',
    tag: 'Onyx & Teak',
    description: 'Ambient warm amber backlit onyx panel with solid teak frame and hanging brass bells.'
  },
  {
    id: 'pooja-03',
    title: 'CNC Brass Jali Folding Screens',
    category: 'Pooja Unit',
    image: '/works/pooja-unit/pooja-03.jpeg',
    tag: 'Brass CNC',
    description: 'Intricate laser-etched brass lattice folding doors with soft-close magnetic catches.'
  },
  {
    id: 'pooja-04',
    title: 'Traditional Teak Wood Pooja Mandir',
    category: 'Pooja Unit',
    image: '/works/pooja-unit/pooja-04.jpeg',
    tag: 'Teak Wood',
    description: '100% BWR Marine Teak plywood structure finished with rich natural PU lacquer polish.'
  },
  {
    id: 'pooja-05',
    title: 'Contemporary Villa Mandir Joinery',
    category: 'Pooja Unit',
    image: '/works/pooja-unit/pooja-05.jpeg',
    tag: 'Villa Project',
    description: 'Sacred niche with pull-out brass prayer tray and incense storage drawers.'
  },
  {
    id: 'pooja-06',
    title: 'Geometric Brass Lattice Screen Mandir',
    category: 'Pooja Unit',
    image: '/works/pooja-unit/pooja-06.jpeg',
    tag: 'Custom Screens',
    description: 'Modern geometric brass patterns replacing traditional jali for a contemporary home.'
  },
  {
    id: 'pooja-07',
    title: 'Backlit Marble Shrine Backdrop',
    category: 'Pooja Unit',
    image: '/works/pooja-unit/pooja-07.jpeg',
    tag: 'Marble Shrine',
    description: 'Flawless Italian marble altar backdrop casting a soothing spiritual ambient aura.'
  },
  {
    id: 'pooja-08',
    title: 'Intricate Pooja Joinery & Trim Detailing',
    category: 'Pooja Unit',
    image: '/works/pooja-unit/pooja-08.jpeg',
    tag: 'Handcrafted',
    description: 'Precision mitred joints and hand-polished teak trims built by SMK master carpenters.'
  },
  {
    id: 'pooja-09',
    title: 'Ambient Concealed LED Pooja Mandir',
    category: 'Pooja Unit',
    image: '/works/pooja-unit/pooja-09.jpeg',
    tag: 'Sacred Light',
    description: 'Dimmable warm 2700K indirect LED cove illumination for meditative focus.'
  },

  // --- DRESSING TABLE & WARDROBE (1 PHOTO) ---
  {
    id: 'dressing-01',
    title: 'Integrated Dressing Unit & Wardrobe',
    category: 'Dressing Table',
    image: '/works/dressing-table.jpeg',
    tag: 'LED Vanity Mirror',
    description: 'Teak veneer overhead storage, white gloss wardrobe panels, and built-in LED vanity mirror.'
  }
];
