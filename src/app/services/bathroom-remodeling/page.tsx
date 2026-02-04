import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, SectionHeader, Button } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bathroom Remodeling",
  description: `Create your personal retreat with ${SITE_CONFIG.name}. From powder rooms to spa-like master baths in ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}.`,
};

const features = [
  "Custom vanities and cabinetry",
  "Tile work and flooring",
  "Shower and tub installations",
  "Lighting and ventilation",
  "Plumbing fixtures",
  "Heated floors",
  "Glass enclosures",
  "Accessibility features",
];

export default function BathroomRemodelingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80"
            alt="Luxury bathroom remodel"
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
              Your Personal Retreat
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-400 mb-6">
              Bathroom Remodeling
            </h1>
            <p className="text-xl text-neutral-200 mb-8">
              Create your personal retreat. From powder rooms to spa-like master
              baths, we handle every detail.
            </p>
            <Button href="/contact" size="lg">
              Start Your Bathroom Project
            </Button>
          </div>
        </Container>
      </section>

      {/* Types of Bathrooms */}
      <Section background="white">
        <SectionHeader
          title="Bathroom Renovations for Every Space"
          subtitle="Whether it's a small update or a complete transformation, we have solutions for every bathroom."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Master Bathrooms",
              description:
                "Create a spa-like retreat with luxury finishes, soaking tubs, walk-in showers, and custom vanities.",
              image:
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
            },
            {
              title: "Guest & Hall Baths",
              description:
                "Functional and stylish updates that impress guests and add value to your home.",
              image:
                "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
            },
            {
              title: "Powder Rooms",
              description:
                "Make a statement with bold design choices in these smaller spaces.",
              image:
                "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80",
            },
          ].map((type, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden bg-neutral-50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-neutral-600">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section background="light">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              What We Include
            </h2>
            <p className="text-neutral-600 text-lg mb-6">
              From tile selection to fixture installation, we handle every aspect
              of your bathroom renovation:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
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
                  <span className="text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80"
              alt="Bathroom tile detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

          </>
  );
}
