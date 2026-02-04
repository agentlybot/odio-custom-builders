import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader, Button } from "@/components/ui";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  // Split services: first 2 are repairs (equal prominence), rest are renovations
  const repairServices = SERVICES.slice(0, 2);
  const renovationServices = SERVICES.slice(2);

  return (
    <Section background="white">
      <SectionHeader
        title="Our Services"
        subtitle="Whether you need a quick fix before closing or a complete transformation, we bring the same quality and professionalism to every project."
      />

      {/* Services Grid - Broken Grid Layout */}
      <div className="space-y-8">
        {/* Top Row - Repairs (Equal Weight) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repairServices.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-navy-900 aspect-[4/3]",
                // Broken grid effect
                index === 0 ? "md:-rotate-1" : "md:rotate-1"
              )}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  {index === 0 ? "For Realtors & Sellers" : "No Job Too Small"}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-300 mb-4 max-w-md">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-gold-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                  Learn More
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Row - Renovations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renovationServices.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={cn(
                "group relative overflow-hidden rounded-xl bg-white border border-neutral-200 hover:border-gold-400 hover:shadow-xl transition-all duration-300",
                // Staggered heights for broken grid
                index === 1 && "md:translate-y-4"
              )}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-navy-700 text-sm font-medium group-hover:text-gold-600 group-hover:gap-2 gap-1 transition-all">
                  View Projects
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* View All CTA */}
      <div className="mt-12 text-center">
        <Button href="/services" variant="outline" size="lg">
          View All Services
        </Button>
      </div>
    </Section>
  );
}
