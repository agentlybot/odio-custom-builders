/**
 * Site-wide constants
 * Single source of truth for contact info, SEO, and content
 */

export const SITE_CONFIG = {
  name: "Odio Custom Builders",
  tagline: "Forever Homes and First Repairs",
  description:
    "Trusted by realtors and homeowners for closing repairs, home maintenance, and transformative renovations.",
  url: "https://odiocustombuilders.com",
  phone: "8646261555",
  email: "info@odiocustombuilders.com",
  address: {
    street: "123 Main Street",
    city: "Greenville",
    state: "SC",
    zip: "29601",
  },
  hours: "Monday - Friday: 8AM - 5PM",
  social: {
    facebook: "https://www.facebook.com/OdioCustomBuilders/",
    instagram: "https://instagram.com/odio_custom.builders",
  },
};

export const NAV_ITEMS = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
      { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
      { label: "Additions & Custom Builds", href: "/services/additions" },
      { label: "Closing & Prelisting Repairs", href: "/services/closing-repairs" },
      { label: "Home Repairs", href: "/services/home-repairs" },
    ],
  },
  { label: "Our Work", href: "/our-work" },
  { label: "For Realtors", href: "/for-realtors" },
  { label: "Contact", href: "/#start-project" },
];

export const SERVICES = [
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
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
  },
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
      "Will Odio responded with an amazing plan to extend our wall into the garage to fit our washer and dryer behind custom built cabinets. We are beyond pleased and more than satisfied with how our custom laundry and pantry cabinets turned out!",
    author: "Verified Customer",
    role: "Custom Cabinetry Project",
    type: "renovation",
  },
  {
    quote:
      "They offered honest and direct insight into what they could and couldn't do. The level of excellence in execution and materials used for our complete bathroom rebuild after mold remediation was outstanding.",
    author: "Verified Customer",
    role: "Bathroom Renovation",
    type: "renovation",
  },
  {
    quote:
      "They designed and built a reading nook that surpassed our expectations—complete with electrical outlets, lighting, and toy storage. The attention to detail was incredible.",
    author: "Verified Customer",
    role: "Custom Build Project",
    type: "renovation",
  },
  {
    quote:
      "William and Eric are excellent communicators. Their quality craftsmanship and cleanliness is above average for the construction industry. As a family-owned, owner-led team, they're on-site and hands-on for every project.",
    author: "Verified Customer",
    role: "Home Renovation",
    type: "renovation",
  },
];
