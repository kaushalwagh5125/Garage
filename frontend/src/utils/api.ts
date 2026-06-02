export interface BrandConfig {
  nameMarathi: string;
  nameEnglish: string;
  tagline: string;
  whatsappPhone: string;
  supportEmail: string;
  address: string;
  workingHours: {
    weekdays: string;
    sunday: string;
  };
  googleMapEmbedUrl: string;
  logoUrl?: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
  highlight: boolean;
  tag: string;
  color: string;
}

export interface AboutConfig {
  story: string;
  mission: string;
  vision: string;
  timeline: {
    year: string;
    title: string;
    description: string;
  }[];
}

export interface StatConfig {
  count: number;
  label: string;
  suffix: string;
  color: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  tag: string;
  img: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  vehicleModel: string;
  textMarathi: string;
  textEnglish: string;
  date: string;
}

export interface SiteConfig {
  brand: BrandConfig;
  navigation: NavigationLink[];
  trustBadges: TrustBadge[];
  services: Service[];
  about: AboutConfig;
  stats: StatConfig[];
  gallery: GalleryItem[];
  reviews: Review[];
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

// Fallback configuration if backend API is not accessible
const DEFAULT_FALLBACK_CONFIG: SiteConfig = {
  brand: {
    nameMarathi: "मोरया इ. व्ही. सर्व्हिसेस",
    nameEnglish: "Moraya EV Services",
    tagline: "Complete Electric Scooter & EV Repair Solutions",
    whatsappPhone: "+91 7875524360",
    supportEmail: "moryaevservices@gmail.com",
    address: "Plot no 12, Kuldeep, Mauli Nagar, Near Surya Lawns, Beed Bypass Road, Chh. Sambhajinagar 431005",
    workingHours: {
      weekdays: "Mon - Sat: 10:00 AM - 7:00 PM",
      sunday: "Sunday: Open"
    },
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.1205937402685!2d75.35643701497217!3d19.849899799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba300532c6355%3A0x8802320f8aa3fdf7!2sMorya%20EV%20Services!5e0!3m2!1sen!2sin!4v1717256500000!5m2!1sen!2sin",
    logoUrl: "/logo.png"
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" }
  ],
  trustBadges: [
    {
      id: "fast-service",
      title: "Fast Service",
      description: "Same day diagnostics & repair delivery for major scoots.",
      icon: "Zap",
      color: "glow-green"
    },
    {
      id: "genuine-parts",
      title: "Genuine Parts",
      description: "100% certified EV components & high-performance BMS cells.",
      icon: "ShieldCheck",
      color: "glow-black"
    },
    {
      id: "expert-mechanics",
      title: "Expert EV Mechanics",
      description: "Certified technicians trained in lithium-ion & brushless motors.",
      icon: "Wrench",
      color: "glow-green"
    },
    {
      id: "affordable-pricing",
      title: "Affordable Pricing",
      description: "Transparent billing with zero hidden diagnostics fees.",
      icon: "DollarSign",
      color: "glow-black"
    }
  ],
  services: [
    {
      id: "battery-repair",
      title: "Battery Repair",
      description: "High-voltage Lithium-ion diagnostics, thermal cell balancing, cell replacement, custom nickel spot-welding, and Smart BMS configurations.",
      details: ["Thermal Tracing & Cell Balancing", "Custom BMS Replacement & Programming", "Water Damage Circuit Recovery", "Full Capacity Restoration"],
      icon: "BatteryCharging",
      highlight: true,
      tag: "CORE SERVICE",
      color: "#03C03C"
    },
    {
      id: "motor-service",
      title: "Motor Service",
      description: "Premium repair for Hub motors and Mid-drive powertrains, hall sensor replacements, high-temperature winding repair, waterproofing, and bearing changes.",
      details: ["Hall Sensor Fault Diagnostic", "Custom High-Temp Winding Rebuilds", "Waterproofing & Gasket Overhaul", "Neodymium Magnet Alignment"],
      icon: "Settings",
      highlight: false,
      tag: "PERFORMANCE",
      color: "#1F1E26"
    },
    {
      id: "ev-diagnostics",
      title: "EV Diagnostics",
      description: "Advanced computerized circuit board tracing, speed controller calibrations, throttle signal mapping, and wiring harness error code resolution.",
      details: ["MCU Controller Mapping", "CAN-bus Signal Analysis", "Throttle & Brake Sensor Calibration", "Leakage Current Inspection"],
      icon: "Cpu",
      highlight: false,
      tag: "DIGITAL SCAN",
      color: "#A2D43D"
    },
    {
      id: "wiring-electrical",
      title: "Wiring & Electrical",
      description: "Heavy-duty electric wiring harness repairs, waterproof connector replacements, dynamic LED lighting custom retrofitting, and high-low DC converter upgrades.",
      details: ["Full Harness Overhaul & Insulation", "Heavy-Duty Connector Upgrades", "Auxiliary Neon & LED Fitting", "12V DC-DC Converter Installation"],
      icon: "Lightbulb",
      highlight: false,
      tag: "SAFETY",
      color: "#1F1E26"
    },
    {
      id: "general-service",
      title: "General Service",
      description: "Futuristic 32-point inspection covering hydraulic disc brake bleeding, performance tire upgrades, heavy-duty suspension tuning, and premium aerodynamic deep cleaning.",
      details: ["Hydraulic Brake Bleeding", "Suspension Damping Adjustment", "Chassis Lubrication & Inspection", "Anti-Static Protective Coating"],
      icon: "CheckCircle",
      highlight: false,
      tag: "MAINTENANCE",
      color: "#A2D43D"
    },
    {
      id: "pickup-drop",
      title: "Pickup & Drop",
      description: "Hassle-free doorstep collection and return utilizing dedicated EV transit trailers, ensuring 100% security and real-time transit telemetry updates.",
      details: ["Secure Transit Trailers", "Zero Mechanical Strain Transport", "Real-Time GPS Booking Link", "Flexible Scheduling Window"],
      icon: "Truck",
      highlight: true,
      tag: "LUXURY PERK",
      color: "#03C03C"
    }
  ],
  about: {
    story: "Established at the dawn of the Indian green mobility transition, मोरया इ. व्ही. सर्व्हिसेस stands as Chh.Sambhajinagar's first premium independent luxury EV workshop. We recognized that electric vehicles are not just mechanical devices with battery packs—they are complex software-driven electronics demanding clean-room precision, advanced micro-soldering tools, and specialized battery engineering. Over the years, we have served hundreds of high-performance scooters, converting conventional garage service into an expert laboratory clean-room environment.",
    mission: "To eliminate range anxiety and deliver premium, high-integrity servicing, returning electric two-wheelers to peak aerospace-grade operating efficiency.",
    vision: "To become the state's leading carbon-neutral EV engineering network, powering clean transportation through technical mastery.",
    timeline: [
      { year: "2023", title: "Clean Room Launch", description: "Inaugurated Chh.Sambhajinagar's first dedicated high-voltage battery diagnostic room with specialized thermal imagers." },
      { year: "2024", title: "1000+ EV Milestones", description: "Successfully serviced over 1,000 electric scooters and motorcycles across Chh.Sambhajinagar, expanding to door-step pick-and-drop." },
      { year: "2025", title: "Smart BMS R&D", description: "Introduced smart programmable Bluetooth BMS integrations, allowing riders to track battery telemetry in real-time." },
      { year: "2026", title: "Hyper-Garage Era", description: "Launched our full-scale digital diagnostic suite and fast chargers, defining futuristic luxury garage aesthetics." }
    ]
  },
  stats: [
    { count: 500, label: "Happy Customers", suffix: "+", color: "text-green" },
    { count: 1000, label: "Services Done", suffix: "+", color: "text-black" },
    { count: 3, label: "Years Experience", suffix: "+", color: "text-green" },
    { count: 12, label: "EV Specialists", suffix: "", color: "text-black" }
  ],
  gallery: [
    { id: 1, title: "Custom Lithium Battery Rebuild", tag: "Battery", img: "battery_work" },
    { id: 2, title: "High-Voltage Diagnostics Cleanroom", tag: "Workshop", img: "workshop_cleanroom" },
    { id: 3, title: "High-Torque Hub Motor Rebuild", tag: "Motor", img: "motor_rebuild" },
    { id: 4, title: "Digital Signal Tracing", tag: "Diagnostics", img: "controller_tracing" },
    { id: 5, title: "Futuristic Custom LED Upgrades", tag: "Electrical", img: "custom_scooter" },
    { id: 6, title: "Dedicated Safe EV Flatbed Towing", tag: "Pickup", img: "flatbed_towing" }
  ],
  reviews: [
    {
      id: 1,
      name: "राहुल देशपांडे (Rahul Deshpande)",
      rating: 5,
      vehicleModel: "Ola S1 Pro Gen 2",
      textMarathi: "माझ्या ओला स्कूटरच्या बॅटरीची रेंज खूप कमी झाली होती. मोरया इ. व्ही. च्या टीमने बॅटरी संतुलित (cell balancing) करून दिली, आता नवीन सारखी चालते!",
      textEnglish: "My Ola scooter's battery range had dropped severely. The team at Moraya EV performed cell balancing, and now it rides exactly like new! Absolute genius level diagnostics.",
      date: "May 2026"
    },
    {
      id: 2,
      name: "प्रिया कुलकर्णी (Priya Kulkarni)",
      rating: 5,
      vehicleModel: "Ather 450X",
      textMarathi: "मोटरमधून खूप मोठा आवाज येत होता. मोरया इ. व्ही. सर्व्हिसेसने ३ तासांच्या आत नवीन बेअरिंग्स आणि वॉटरप्रूफिंग करून स्कूटर दिली. खूपच भारी सेवा!",
      textEnglish: "There was a loud grinding sound from the motor. Moraya EV Services replaced the bearings and did full waterproofing in under 3 hours. Phenomenal, rapid service!",
      date: "April 2026"
    },
    {
      id: 3,
      name: "अमित सावंत (Amit Sawant)",
      rating: 5,
      vehicleModel: "TVS iQube",
      textMarathi: "स्कूटर अचानक बंद पडली होती आणि कुठलाच गॅरेजवाला दुरुस्त करू शकत नव्हता. मोरया इ. व्ही. ने कंट्रोलरचे वायर शॉर्ट-सर्किट शोधून त्वरित दुरुस्त केले. अत्यंत तज्ञ मेकॅनिक्स!",
      textEnglish: "My scooter shut down suddenly and no local mechanic could fix it. Moraya EV traced the short-circuit inside the controller and fixed it instantly. Highly certified experts!",
      date: "March 2026"
    }
  ]
};

export async function fetchSiteConfig(): Promise<SiteConfig> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/config`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 60 } // NextJS cache revalidate in seconds
    });
    if (!res.ok) throw new Error('API request failed');
    return await res.json();
  } catch (error) {
    console.warn('[Moraya EV] Failed to load configuration from backend server, falling back to local dataset.', error);
    return DEFAULT_FALLBACK_CONFIG;
  }
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<{ success: boolean; message: string; submissionId?: string }> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (error) {
    console.error('[Moraya EV] Failed to submit contact form to API.', error);
    return {
      success: false,
      message: "Could not connect to service API. Please check your internet or retry."
    };
  }
}
