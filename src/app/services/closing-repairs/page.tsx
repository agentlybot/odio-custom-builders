import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, SectionHeader, Button } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Closing & Prelisting Repairs",
  description: `Get smoothly to closing with a contractor you can depend on. ${SITE_CONFIG.name} handles inspection repairs, prelisting prep, and everything in between in ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}.`,
};

const services = [
  "Inspection punch list items",
  "HVAC repairs and maintenance",
  "Plumbing fixes and updates",
  "Electrical repairs",
  "Roof repairs",
  "Structural repairs",
  "Window and door repairs",
  "Deck and patio repairs",
  "Painting touch-ups",
  "Flooring repairs",
];

const faqs = [
  {
    question: "How quickly can you complete closing repairs?",
    answer:
      "We understand the urgency of closing deadlines. Most closing repairs can be completed within 1-5 business days depending on scope. We prioritize these projects and communicate closely with all parties to meet your timeline.",
  },
  {
    question: "Do you work directly with realtors?",
    answer:
      "We partner with dozens of local realtors and understand the transaction process. We can communicate directly with your client, provide detailed estimates for negotiations, and coordinate scheduling to keep deals on track.",
  },
  {
    question: "How does payment work for closing repairs?",
    answer:
      "We can be paid at closing, just like the other service providers in the transaction. This aligns our incentives and reduces friction for all parties involved.",
  },
  {
    question: "Can you handle the entire inspection punch list?",
    answer:
      "Yes, we can handle comprehensive punch lists covering multiple trades. Our team includes specialists in plumbing, electrical, HVAC, structural, and general repairs—so you have one point of contact for everything.",
  },
];

export default function ClosingRepairsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="Home ready for closing"
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
              For Realtors & Home Sellers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-400 mb-6">
              Closing & Prelisting Repairs
            </h1>
            <p className="text-xl text-neutral-200 mb-8">
              Get smoothly to closing with a contractor you can depend on. We
              handle inspection repairs, prelisting prep, and everything in
              between.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/#start-project" size="lg">
                Get a Quote
              </Button>
              <Button
                href="/for-realtors"
                variant="outline"
                size="lg"
                className="bg-white border-gold-400 text-gold-500 hover:bg-white hover:border-gold-500 hover:text-gold-600"
              >
                Realtor Partner Program
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Value Props */}
      <Section background="white">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
              title: "Fast Turnaround",
              description:
                "We understand closing deadlines. Most repairs completed within 1-5 business days.",
            },
            {
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ),
              title: "Paid at Closing",
              description:
                "We can be paid at closing, just like you. Aligned incentives for a smooth transaction.",
            },
            {
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              ),
              title: "One Point of Contact",
              description:
                "We handle multiple trades. One call, one contractor, one solution for your entire punch list.",
            },
          ].map((prop, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-neutral-50"
            >
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 mx-auto mb-4">
                {prop.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">
                {prop.title}
              </h3>
              <p className="text-neutral-600">{prop.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services List */}
      <Section background="light">
        <SectionHeader
          title="What We Handle"
          subtitle="From minor repairs to major punch list items, we've got you covered."
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white p-4 rounded-lg"
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
              <span className="text-neutral-800">{service}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <SectionHeader title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-neutral-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-neutral-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

          </>
  );
}
