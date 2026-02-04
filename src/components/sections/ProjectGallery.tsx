import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader, Button } from "@/components/ui";

const projects = [
  {
    title: "Modern Kitchen Remodel",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    size: "large",
  },
  {
    title: "Closing Repairs - Deck Restoration",
    category: "Repairs",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&q=80",
    size: "small",
  },
  {
    title: "Spa Bathroom Renovation",
    category: "Bathroom",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    size: "small",
  },
  {
    title: "Sunroom Addition",
    category: "Addition",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    size: "medium",
  },
  {
    title: "HVAC Repair - Pre-Closing",
    category: "Repairs",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    size: "small",
  },
  {
    title: "Whole Home Renovation",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    size: "medium",
  },
];

export function ProjectGallery() {
  return (
    <Section background="light">
      <SectionHeader
        title="Recent Projects"
        subtitle="From small repairs to major renovations—see the range of work we deliver."
      />

      {/* Masonry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {projects.map((project, index) => {
          // Determine grid span based on size
          const spanClass =
            project.size === "large"
              ? "col-span-2 row-span-2"
              : project.size === "medium"
              ? "col-span-2"
              : "col-span-1";

          return (
            <Link
              key={index}
              href="/our-work"
              className={`group relative overflow-hidden rounded-xl ${spanClass}`}
            >
              <div
                className={`relative ${
                  project.size === "large"
                    ? "aspect-square"
                    : project.size === "medium"
                    ? "aspect-video"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                      project.category === "Repairs"
                        ? "text-gold-400"
                        : "text-neutral-300"
                    }`}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-white font-semibold text-sm md:text-base">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* View All CTA */}
      <div className="mt-12 text-center">
        <Button href="/our-work" size="lg">
          View All Projects
        </Button>
      </div>
    </Section>
  );
}
