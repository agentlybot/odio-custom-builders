import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, SectionHeader, Button } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Additions & Custom Builds",
  description: `Expand your living space with ${SITE_CONFIG.name}. Room additions, sunrooms, and custom builds in ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}.`,
};

export default function AdditionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Home addition"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60" />
        </div>

        <Container className="relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-wider mb-4">
              Expand Your Space
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-400 mb-6">
              Additions & Custom Builds
            </h1>
            <p className="text-xl text-neutral-200 mb-8">
              Expand your living space. Room additions, sunrooms, and custom builds
              that seamlessly integrate with your existing home.
            </p>
            <Button href="/contact" size="lg">
              Discuss Your Addition
            </Button>
          </div>
        </Container>
      </section>

      {/* Types of Additions */}
      <Section background="white">
        <SectionHeader
          title="Types of Additions We Build"
          subtitle="From single rooms to complete second stories, we have the expertise to expand your home."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Room Additions",
              description:
                "Add a bedroom, home office, or family room that blends seamlessly with your existing home.",
              features: [
                "Bedroom additions",
                "Home offices",
                "Family rooms",
                "In-law suites",
              ],
            },
            {
              title: "Sunrooms & Porches",
              description:
                "Bring the outdoors in with a beautiful sunroom or screened porch addition.",
              features: [
                "Three-season rooms",
                "Four-season sunrooms",
                "Screened porches",
                "Enclosed patios",
              ],
            },
            {
              title: "Second Story Additions",
              description:
                "Double your living space by adding a full second story to your home.",
              features: [
                "Master suites",
                "Multiple bedrooms",
                "Bonus rooms",
                "Home theaters",
              ],
            },
            {
              title: "Garage Additions",
              description:
                "Add parking, storage, or a workshop with a custom garage build.",
              features: [
                "Attached garages",
                "Detached garages",
                "Garage apartments",
                "Workshop spaces",
              ],
            },
          ].map((type, index) => (
            <div key={index} className="bg-neutral-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                {type.title}
              </h3>
              <p className="text-neutral-600 mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center gap-2 text-neutral-700"
                  >
                    <svg
                      className="w-5 h-5 text-gold-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section background="light">
        <SectionHeader
          title="Our Addition Process"
          subtitle="Building an addition is a significant project. Here's how we make it smooth and stress-free."
        />
        <div className="grid md:grid-cols-5 gap-6">
          {[
            {
              step: "1",
              title: "Consultation",
              description: "We discuss your needs and assess your property.",
            },
            {
              step: "2",
              title: "Design",
              description: "Architectural plans that match your home's style.",
            },
            {
              step: "3",
              title: "Permits",
              description: "We handle all permitting and approvals.",
            },
            {
              step: "4",
              title: "Construction",
              description: "Expert building with minimal disruption.",
            },
            {
              step: "5",
              title: "Completion",
              description: "Final walkthrough and quality assurance.",
            },
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold mx-auto mb-3">
                {phase.step}
              </div>
              <h3 className="font-semibold text-navy-900 mb-1">{phase.title}</h3>
              <p className="text-sm text-neutral-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </Section>

          </>
  );
}
