import { Project, Service, SkillItem } from '../types';
import rajDarbarThumb from '../assets/images/projects/raj-darbar.jpg';
import hotelAryavartThumb from '../assets/images/projects/hotel-aryavart.jpg';
import hotelKdissonThumb from '../assets/images/projects/hotel-kdisson.jpg';
import hotelKuberKaimurThumb from '../assets/images/projects/hotel-kuber-kaimur-lazeez.jpg';
import shardaPalaceThumb from '../assets/images/projects/sharda-palace.jpg';
import pradeepProfilePhoto from '../assets/images/regenerated_image_1792427492884.jpg';

export const defaultPortrait = pradeepProfilePhoto;

export const BRAND_INFO = {
  brandName: 'PPW DevStudio',
  ownerName: 'Pradeep Kumar',
  professionalTitle: 'Web Developer | AI Enthusiast | Data Visualization',
  tagline: "Building Digital Experiences. Creating What's Next.",
  heroIntro: 'I build modern, responsive, and user-friendly digital experiences.',
  heroShortTitle: 'Web Developer',
  email: 'ppradeepchaurasiya676@gmail.com',
  phone: '+91 76542 24826',
  whatsappNumber: '+91 76542 24826',
  whatsappUrl: 'https://wa.me/917654224826?text=Hi%20Pradeep,%20I%20saw%20your%20portfolio%20at%20PPW%20DevStudio%20and%20would%20like%20to%20discuss%20a%20project!',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://www.linkedin.com/in/pradeep-kumar-957279398',
  instagramUrl: 'https://www.instagram.com/pradeepk_2.0?srtk=MWQzcmg4NHN4czdpbw==',
  location: 'Bhabua, Bihar, India',
  availability: 'Available for freelance & full-time opportunities',
};

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    shortDesc: 'Custom high-performance web applications built with modern frameworks and robust clean code.',
    fullDesc: 'End-to-end web engineering tailored to business objectives. I build lightning-fast web applications, modern architectures, landing pages, and interactive client portals optimized for speed, reliability, and search visibility.',
    iconName: 'Code2',
    deliverables: [
      'Single Page Applications (SPAs) & Portals',
      'Custom React Web Architecture',
      'API Integration & Dynamic Databases',
      'Search Engine Optimized Code Structure',
      'Security & Cross-Browser Compatibility'
    ]
  },
  {
    id: 'responsive-design',
    title: 'Responsive Web Design',
    shortDesc: 'Pixel-perfect, fluid layouts that adapt seamlessly across smartphones, tablets, and desktop displays.',
    fullDesc: 'Ensuring your users enjoy an intuitive, frictionless digital experience regardless of screen size. Every layout is crafted mobile-first with touch-friendly elements, flexible grids, and polished micro-interactions.',
    iconName: 'Layout',
    deliverables: [
      'Mobile-First Fluid Layouts',
      'Touch-Optimized User Interfaces',
      'High-DPI Retina Ready Assets',
      'Modern Typography & Spacing Hierarchy',
      'Accessibility & WCAG AA Contrast Compliance'
    ]
  },
  {
    id: 'ai-solutions',
    title: 'AI-Powered Web Solutions',
    shortDesc: 'Integrating intelligent features, smart automations, and modern AI capabilities into web workflows.',
    fullDesc: 'Empowering modern web platforms with cutting-edge artificial intelligence. From automated customer inquiry workflows to smart content recommendation engines and generative capabilities.',
    iconName: 'Sparkles',
    deliverables: [
      'Intelligent Client Interaction Flows',
      'Smart Form & Data Auto-Processing',
      'AI Workflow Integrations & APIs',
      'Context-Aware Search & Filtering',
      'Automated Lead Qualification'
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Visualization',
    shortDesc: 'Transforming complex data into clear, interactive charts, metric dashboards, and actionable business insights.',
    fullDesc: 'Helping business owners see the story behind their numbers. I craft visual dashboards, engagement tracking widgets, and structured data reports using Python, modern charting libraries, and analytical frameworks.',
    iconName: 'BarChart3',
    deliverables: [
      'Interactive Performance Dashboards',
      'Custom Charting & Metric Visualizations',
      'User Journey & Conversion Analysis',
      'Data Cleansing & Structured Reports',
      'Business Intelligence Summaries'
    ]
  }
];

export const SKILLS: SkillItem[] = [
  {
    name: 'HTML',
    category: 'Core',
    description: 'Semantic markup, SEO architecture, accessibility standards (ARIA), and structured web foundations.',
    icon: 'FileCode',
    level: 'Advanced'
  },
  {
    name: 'CSS',
    category: 'Core',
    description: 'Modern flexbox, CSS grid, animations, responsive media queries, and Tailwind CSS design systems.',
    icon: 'Palette',
    level: 'Advanced'
  },
  {
    name: 'JavaScript',
    category: 'Core',
    description: 'ES6+ standards, asynchronous programming, DOM manipulation, APIs, and modern JavaScript design patterns.',
    icon: 'Terminal',
    level: 'Advanced'
  },
  {
    name: 'React',
    category: 'Frontend',
    description: 'Component architecture, state management hooks, virtual DOM optimization, and reactive user interfaces.',
    icon: 'Layers',
    level: 'Proficient'
  },
  {
    name: 'Python',
    category: 'Data & AI',
    description: 'Scripting, backend logic, data processing, automation scripts, and analytical computation.',
    icon: 'Cpu',
    level: 'Proficient'
  },
  {
    name: 'Git',
    category: 'Tools',
    description: 'Version control, branch management, GitHub collaboration, commit hygiene, and continuous deployment.',
    icon: 'GitBranch',
    level: 'Proficient'
  },
  {
    name: 'Data Visualization',
    category: 'Data & AI',
    description: 'Transforming numbers into interactive charts, metric dashboards, and clear visual business insights.',
    icon: 'TrendingUp',
    level: 'Proficient'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'raj-darbar',
    name: 'Raj Darbar Restaurant & Hotel',
    tagline: 'Luxury Dining & Royal Accommodation Web Platform',
    category: 'Restaurant & Hotel Website',
    designTheme: 'Premium dark theme with elegant gold accents',
    description: 'A premium restaurant and hotel website featuring elegant design, table reservations, room booking, and customer contact options.',
    longDescription: 'A premium restaurant and hotel web experience engineered with an elegant dark theme and royal gold accents. It integrates online room reservations, fine dining table bookings, chef specials showcases, banquet inquiry workflows, and direct customer contact options.',
    thumbnail: rajDarbarThumb,
    technologies: ['React', 'CSS', 'JavaScript', 'Responsive Design'],
    liveDemoUrl: 'https://raj-darbar-restaurant-hotel-726267703593.asia-southeast1.run.app/',
    client: 'Raj Darbar Restaurant & Hotel',
    year: '2024',
    status: 'Live & Operational',
    isLiveUrlPending: false,
    highlights: [
      'Online room booking & deluxe suite showcase',
      'Fine dining table reservation & culinary menu',
      'Rich royal gold typography with luxury dark aesthetic',
      'Direct telephone, email, and customer contact options'
    ]
  },
  {
    id: 'hotel-aryavart',
    name: 'Hotel Aryavart',
    tagline: 'Luxury Hospitality & Real-Time Availability Checking Portal',
    category: 'Hotel & Hospitality Website',
    designTheme: 'Luxury hotel background imagery with gold highlights',
    description: 'A luxury hospitality website featuring hotel information, room booking, availability checking, and contact options.',
    longDescription: 'A premier luxury hospitality portal designed for Hotel Aryavart. Featuring an imposing illuminated hotel facade, real-time room availability checker, luxury suite tariffs, amenities directory, customer testimonials, and quick reservation channels.',
    thumbnail: hotelAryavartThumb,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    liveDemoUrl: 'https://hotel-aryavart-luxury-hotel-events-726267703593.asia-southeast1.run.app/',
    client: 'Hotel Aryavart',
    year: '2024',
    status: 'Live & Operational',
    isLiveUrlPending: false,
    highlights: [
      'Real-time room availability checker & date selection',
      'Maharaja, Royal Heritage, and Deluxe Executive suites showcase',
      'Amenities showcase (Fine Dining, Pool, Rooftop, Spa)',
      'Direct booking options and customer reviews'
    ]
  },
  {
    id: 'hotel-kdisson',
    name: 'Hotel Kdisson',
    tagline: 'Modern Hotel & Accommodation Tariff Selection Experience',
    category: 'Hotel Website',
    designTheme: 'Premium light theme with elegant typography & clean booking interface',
    description: 'A modern hotel website featuring accommodation options, room tariffs, and a convenient reservation interface.',
    longDescription: 'An ultra-clean, modern hotel portal featuring refined light styling, bespoke typography, and an intuitive room tariff selection interface. Guests can effortlessly browse accommodation options, check tariffs, review amenities, and complete reservations.',
    thumbnail: hotelKdissonThumb,
    technologies: ['React', 'CSS', 'JavaScript', 'Modern UI'],
    liveDemoUrl: 'https://hotel-kidssion-a859-a9uxxmikl-kidssonhotel-3520s-projects.vercel.app/',
    client: 'Hotel Kdisson',
    year: '2024',
    status: 'Live & Operational',
    isLiveUrlPending: false,
    highlights: [
      'Clean room tariff cards with instant reservation interface',
      'Minimalist light luxury layout with elegant typography',
      'Interactive room filter by guest count & dates',
      'Comprehensive hotel amenities and accommodation options'
    ]
  },
  {
    id: 'hotel-kuber-kaimur-lazeez',
    name: 'Hotel Kuber & Kaimur Lazeez',
    tagline: 'Combined Hotel Stay & Royal Culinary Destination',
    category: 'Hotel & Restaurant Website',
    designTheme: 'Premium black and gold theme with food gallery',
    description: 'A premium hotel and restaurant website featuring accommodation, dining, galleries, services, reviews, and contact information.',
    longDescription: 'A comprehensive premium hotel and restaurant portal celebrating Hotel Kuber accommodation and Kaimur Lazeez dining. Features interactive room galleries, dining menus, service showcases, guest reviews, and direct contact options.',
    thumbnail: hotelKuberKaimurThumb,
    technologies: ['React', 'CSS', 'JavaScript', 'WhatsApp API'],
    liveDemoUrl: 'https://kaimur-lazeez.vercel.app/',
    client: 'Hotel Kuber & Kaimur Lazeez',
    year: '2024',
    status: 'Live & Operational',
    isLiveUrlPending: false,
    highlights: [
      'Dual platform for premium accommodation & restaurant dining',
      'Interactive food and room galleries showcasing culinary specials',
      'Direct customer contact and table inquiry options',
      'Verified guest reviews and comprehensive services overview'
    ]
  },
  {
    id: 'sharda-palace',
    name: 'Sharda Palace',
    tagline: 'Hotel, Grand Banquet Hall & Rooftop Restaurant Portal',
    category: 'Hotel, Banquet & Rooftop Restaurant',
    designTheme: 'Premium white theme with black typography & elegant green accents',
    description: 'A professional hospitality website showcasing banquet facilities, rooftop dining, event booking, and digital menu access.',
    longDescription: 'A professional hospitality website for Sharda Palace showcasing grand banquet facilities for weddings and celebrations, open-air rooftop dining, online event booking, and digital menu access.',
    thumbnail: shardaPalaceThumb,
    technologies: ['React', 'CSS', 'JavaScript', 'Responsive Design'],
    liveDemoUrl: 'https://sharda-palace-bhabua.vercel.app/',
    client: 'Sharda Palace',
    year: '2024',
    status: 'Live & Operational',
    isLiveUrlPending: false,
    highlights: [
      'Grand banquet facilities showcase for weddings & events',
      'Open-air rooftop restaurant showcase with digital menu access',
      'Online event booking & catering inquiry workflow',
      'Responsive design with elegant emerald accents'
    ]
  }
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'Understanding your business goals, target audience, and brand vision to outline a clear technical roadmap.'
  },
  {
    step: '02',
    title: 'Modern Architecture',
    description: 'Structuring clean semantic code, responsive layouts, and lightning-fast loading assets tailored for real users.'
  },
  {
    step: '03',
    title: 'Integration & AI Polish',
    description: 'Connecting contact channels, WhatsApp ordering, dynamic data, and intelligent automations.'
  },
  {
    step: '04',
    title: 'Launch & Optimization',
    description: 'Rigorous cross-device testing, SEO optimization, speed auditing, and smooth production deployment.'
  }
];
