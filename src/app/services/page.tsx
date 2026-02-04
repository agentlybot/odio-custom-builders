import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Section, SectionHeader, Button } from "@/components/ui";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description: `From closing repairs to complete home renovations, ${SITE_CONFIG.name} delivers quality craftsmanship for every project. Serving ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}.`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-neutral-300">
              Whether you need a quick fix before closing or a complete home
              transformation, we bring the same quality and professionalism to
              every project.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <Section background="white">
        <div className="grid gap-12">
          {SERVICES.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Image - alternating sides */}
              <div
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">
                  {index < 2 ? "Quick Turnaround" : "Transformative"}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h2>
                <p className="text-neutral-600 text-lg mb-6">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-navy-800 font-semibold group-hover:text-gold-600 group-hover:gap-3 gap-2 transition-all">
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
      </Section>

      {/* CTA Section */}
      <Section background="light">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            Whether it&apos;s a small repair or a major renovation, we&apos;re happy to
            discuss your project and help you find the right solution.
          </p>
          <Button href="/contact" size="lg">
            Schedule a Free Consultation
          </Button>
        </div>
      </Section>
    </>
  );
}
