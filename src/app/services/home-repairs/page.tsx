import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, SectionHeader, Button } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Repairs",
  description: `No job too small. ${SITE_CONFIG.name} provides quality home repair services in ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}. From leaky faucets to deck repairs, we bring professionalism to every project.`,
};

const repairCategories = [
  {
    title: "Interior Repairs",
    items: [
      "Drywall repair and patching",
      "Door adjustments and replacements",
      "Trim and molding repairs",
      "Flooring repairs",
      "Cabinet repairs",
      "Stair repairs",
    ],
  },
  {
    title: "Exterior Repairs",
    items: [
      "Deck and porch repairs",
      "Siding repairs",
      "Gutter cleaning and repair",
      "Fence repairs",
      "Concrete patching",
      "Pressure washing",
    ],
  },
  {
    title: "Systems",
    items: [
      "Minor plumbing repairs",
      "Fixture installations",
      "Electrical repairs",
      "Light fixture installation",
      "Ceiling fan installation",
      "Outlet and switch repairs",
    ],
  },
];

export default function HomeRepairsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
            alt="Home repair work"
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
              No Job Too Small
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-400 mb-6">
              Home Repairs
            </h1>
            <p className="text-xl text-neutral-200 mb-8">
              From leaky faucets to deck repairs, we bring the same quality and
              professionalism to every project—big or small.
            </p>
            <Button href="/contact" size="lg">
              Schedule a Repair
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Why Trust Us With Your Repairs?
            </h2>
            <p className="text-neutral-600 text-lg mb-6">
              Many contractors won&apos;t take small jobs. We do—because we know
              that&apos;s where trust begins. The same team that handles a $500 repair
              handles a $200,000 renovation.
            </p>
            <ul className="space-y-4">
              {[
                "Licensed and insured professionals",
                "Clear communication and scheduling",
                "Fair, transparent pricing",
                "Quality work guaranteed",
                "Same-day response for urgent repairs",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <svg
                    className="w-6 h-6 text-gold-500 flex-shrink-0"
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
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80"
              alt="Quality craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Repair Categories */}
      <Section background="light">
        <SectionHeader
          title="What We Repair"
          subtitle="A comprehensive list of our home repair services."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {repairCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2 text-neutral-600"
                  >
                    <svg
                      className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* The Journey */}
      <Section background="white">
        <div className="bg-navy-900 rounded-2xl p-8 md:p-12 text-center">
          <span className="text-gold-400 text-5xl md:text-6xl font-bold">
            70%
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-4">
            of our major renovations come from past repair clients
          </h3>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
            What starts as a small repair often becomes a long-term relationship.
            Many clients who call us for a leaky faucet or deck repair eventually
            trust us with their dream kitchen or home addition.
          </p>
          <Button href="/services" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">
            Explore All Services
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Something Fixed?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Tell us what&apos;s broken and we&apos;ll get it taken care of. No job too
            small, no hassle, no runaround.
          </p>
          <Button href="/contact" size="lg">
            Request a Repair
          </Button>
        </div>
      </Section>
    </>
  );
}
