/**
 * Site-wide constants
 * Single source of truth for contact info, SEO, and content
 */

export const SITE_CONFIG = {
  name: "Odio Custom Builders",
  tagline: "From First Repairs to Forever Home",
  description:
    "Trusted by realtors and homeowners for closing repairs, home maintenance, and transformative renovations.",
  url: "https://odiocustombuilders.com",
  phone: "8641234567", // Update with real number
  email: "info@odiocustombuilders.com", // Update with real email
  address: {
    street: "123 Main Street",
    city: "Greenville",
    state: "SC",
    zip: "29601",
  },
  hours: "Monday - Friday: 8AM - 5PM",
  social: {
    facebook: "https://facebook.com/odiocustombuilders",
    instagram: "https://instagram.com/odiocustombuilders",
    linkedin: "https://linkedin.com/company/odiocustombuilders",
  },
};

export const NAV_ITEMS = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Closing & Prelisting Repairs", href: "/services/closing-repairs" },
      { label: "Home Repairs", href: "/services/home-repairs" },
      { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
      { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
      { label: "Additions & Custom Builds", href: "/services/additions" },
    ],
  },
  { label: "Our Work", href: "/our-work" },
  { label: "About", href: "/about" },
  { label: "For Realtors", href: "/for-realtors" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    slug: "closing-repairs",
    title: "Closing & Prelisting Repairs",
    shortTitle: "Closing Repairs",
    description:
      "Get smoothly to closing with a contractor you can depend on. We handle inspection repairs, prelisting prep, and everything in between.",
    icon: "key",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    slug: "home-repairs",
    title: "Home Repairs",
    shortTitle: "Home Repairs",
    description:
      "No job too small. From leaky faucets to deck repairs, we bring the same quality and professionalism to every project.",
    icon: "wrench",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  },
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    shortTitle: "Kitchens",
    description:
      "Transform the heart of your home. Custom cabinetry, countertops, appliances, and layouts designed for how you live.",
    icon: "kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    shortTitle: "Bathrooms",
    description:
      "Create your personal retreat. From powder rooms to spa-like master baths, we handle every detail.",
    icon: "bath",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  },
  {
    slug: "additions",
    title: "Additions & Custom Builds",
    shortTitle: "Additions",
    description:
      "Expand your living space. Room additions, sunrooms, and custom builds that seamlessly integrate with your existing home.",
    icon: "home",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

export const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "5-Star Reviews" },
  { value: "70%", label: "Repeat Clients" },
];

export const TESTIMONIALS = [
  {
    quote:
      "They handled our closing repairs flawlessly. Three years later, they built our dream kitchen. Couldn't recommend them more.",
    author: "Sarah M.",
    role: "Homeowner",
    type: "renovation",
  },
  {
    quote:
      "As a realtor, I need a contractor I can trust to get deals done on time. Odio has never let me down.",
    author: "Mike Johnson",
    role: "RE/MAX Agent",
    type: "realtor",
  },
  {
    quote:
      "What started as a simple deck repair turned into a beautiful addition. They earned our trust one project at a time.",
    author: "The Hendersons",
    role: "Homeowners",
    type: "renovation",
  },
  {
    quote:
      "Professional, communicative, and they actually show up when they say they will. That's rare in this industry.",
    author: "Jennifer Park",
    role: "Keller Williams Agent",
    type: "realtor",
  },
];
