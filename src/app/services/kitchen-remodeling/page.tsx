import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, SectionHeader, Button } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kitchen Remodeling",
  description: `Transform the heart of your home with ${SITE_CONFIG.name}. Custom kitchen remodeling in ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}. From design to completion.`,
};

const features = [
  "Custom cabinetry design",
  "Countertop selection and installation",
  "Appliance upgrades",
  "Lighting design",
  "Flooring installation",
  "Plumbing and electrical",
  "Islands and breakfast bars",
  "Pantry solutions",
];

export default function KitchenRemodelingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
            alt="Modern kitchen remodel"
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
              Transformative
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-400 mb-6">
              Kitchen Remodeling
            </h1>
            <p className="text-xl text-neutral-200 mb-8">
              Transform the heart of your home. Custom cabinetry, countertops,
              appliances, and layouts designed for how you live.
            </p>
            <Button href="/contact" size="lg">
              Start Your Kitchen Project
            </Button>
          </div>
        </Container>
      </section>

      {/* Process */}
      <Section background="white">
        <SectionHeader
          title="Our Kitchen Remodeling Process"
          subtitle="From initial concept to final walkthrough, we guide you every step of the way."
        />
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Consultation",
              description:
                "We visit your home, discuss your vision, and understand how you use your kitchen.",
            },
            {
              step: "02",
              title: "Design",
              description:
                "Our team creates detailed plans including layout, materials, and 3D renderings.",
            },
            {
              step: "03",
              title: "Build",
              description:
                "Expert craftsmen bring your design to life with attention to every detail.",
            },
            {
              step: "04",
              title: "Enjoy",
              description:
                "We do a final walkthrough to ensure everything exceeds your expectations.",
            },
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold text-xl mx-auto mb-4">
                {phase.step}
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">
                {phase.title}
              </h3>
              <p className="text-neutral-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section background="light">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80"
              alt="Kitchen details"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              What&apos;s Included
            </h2>
            <p className="text-neutral-600 text-lg mb-6">
              Every kitchen remodel is unique, but here are the elements we commonly
              handle:
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
        </div>
      </Section>

          </>
  );
}
