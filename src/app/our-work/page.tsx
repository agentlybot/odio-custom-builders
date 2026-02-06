import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, SectionHeader, Button } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Work",
  description: `View our portfolio of home repairs, kitchen remodels, bathroom renovations, and custom builds in ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}.`,
};

const projects = [
  {
    title: "Modern Kitchen Transformation",
    category: "Kitchen",
    description:
      "Complete kitchen remodel featuring custom shaker cabinets, quartz countertops, and professional-grade appliances.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    title: "Closing Repairs - Full Punch List",
    category: "Repairs",
    description:
      "Comprehensive closing repairs including deck restoration, HVAC repair, and electrical updates. Completed in 3 days.",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&q=80",
  },
  {
    title: "Spa-Like Master Bath",
    category: "Bathroom",
    description:
      "Luxurious master bathroom with walk-in shower, soaking tub, and custom vanity with dual sinks.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  },
  {
    title: "Sunroom Addition",
    category: "Addition",
    description:
      "Four-season sunroom addition that seamlessly extends the living space with floor-to-ceiling windows.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    title: "Pre-Listing Kitchen Update",
    category: "Repairs",
    description:
      "Quick turnaround kitchen refresh with new cabinet hardware, backsplash, and lighting to increase home value.",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80",
  },
  {
    title: "Whole Home Renovation",
    category: "Renovation",
    description:
      "Complete transformation of a 1970s ranch including open floor plan, updated finishes, and modern amenities.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "Guest Bathroom Remodel",
    category: "Bathroom",
    description:
      "Updated guest bathroom with new tile, vanity, and fixtures. Transformed in under two weeks.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  },
  {
    title: "Deck Repair & Restoration",
    category: "Repairs",
    description:
      "Structural deck repair and complete restoration including new boards, railings, and stain.",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&q=80",
  },
  {
    title: "Custom Kitchen Island",
    category: "Kitchen",
    description:
      "Custom-built kitchen island with seating, storage, and integrated appliances.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
];

const categories = ["All", "Kitchen", "Bathroom", "Repairs", "Addition", "Renovation"];

export default function OurWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gold-400 mb-4">
              Our Work
            </h1>
            <p className="text-xl text-neutral-300">
              From small repairs to complete transformations—see the range and
              quality of projects we deliver.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter Tabs (Visual Only - Would need client component for functionality) */}
      <Section background="white" className="py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-navy-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Projects Grid */}
      <Section background="light" className="pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === "Repairs"
                        ? "bg-gold-500 text-navy-900"
                        : "bg-navy-900 text-white"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Whether you have a vision in mind or need help exploring options,
            we&apos;re here to guide you through the process.
          </p>
          <Button href="/#start-project" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </Section>
    </>
  );
}
