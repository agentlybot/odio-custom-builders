import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, SectionHeader, Button } from "@/components/ui";
import { SITE_CONFIG, TESTIMONIALS } from "@/lib/constants";
import { formatPhone, telLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "For Realtors | Partner Program",
  description: `A contractor realtors actually want to recommend. ${SITE_CONFIG.name} offers priority scheduling, closing repairs, and a realtor partner program in ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}.`,
};

const benefits = [
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
    title: "Priority Scheduling",
    description:
      "Closing deadlines don't wait. Our realtor partners get priority scheduling to keep deals on track.",
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
      "We can be paid at closing, just like you. Our incentives are aligned with getting your deal done.",
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
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: "Direct Communication",
    description:
      "We communicate directly with you and your clients. No phone tag, no confusion, no delays.",
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Clear Estimates",
    description:
      "Detailed, itemized estimates that help with negotiations. No surprises, no hidden fees.",
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
    title: "Guaranteed Work",
    description:
      "All our work is guaranteed. If there's ever an issue, we make it right—no questions asked.",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "One Point of Contact",
    description:
      "We handle multiple trades. One call, one contractor, one solution for your entire punch list.",
  },
];

const services = [
  "Inspection punch list items",
  "HVAC repairs and maintenance",
  "Plumbing fixes",
  "Electrical repairs",
  "Roof repairs",
  "Structural repairs",
  "Window and door repairs",
  "Deck and patio repairs",
  "Painting and touch-ups",
  "Flooring repairs",
  "Prelisting improvements",
  "Curb appeal updates",
];

// Show top 2 testimonials that highlight communication and quality
const realtorTestimonials = TESTIMONIALS.slice(0, 2);

export default function ForRealtorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="Real estate closing"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-navy-900/70" />
        </div>

        <Container className="relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-wider mb-4">
              Realtor Partner Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-400 mb-6">
              A Contractor Realtors Actually Want to Recommend
            </h1>
            <p className="text-xl text-neutral-200 mb-8">
              Closing repairs can kill deals or delay closings. We make sure that
              doesn&apos;t happen. Dozens of local realtors trust us to get their
              clients smoothly to closing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Become a Partner
              </Button>
              <Button
                href={telLink(SITE_CONFIG.phone)}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy-900"
              >
                Call: {formatPhone(SITE_CONFIG.phone)}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Grid */}
      <Section background="white">
        <SectionHeader
          title="Why Realtors Choose Us"
          subtitle="We understand the transaction process and what it takes to keep deals on track."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-neutral-50 hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center text-gold-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-neutral-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section background="light">
        <SectionHeader
          title="How It Works"
          subtitle="Getting started is simple. Here's the process."
        />
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Send the Punch List",
              description:
                "Email or call us with the inspection report or repair list. Include closing date.",
            },
            {
              step: "2",
              title: "We Assess & Quote",
              description:
                "We review the scope and provide a detailed estimate within 24 hours.",
            },
            {
              step: "3",
              title: "We Complete the Work",
              description:
                "Our team handles the repairs efficiently, keeping all parties informed.",
            },
            {
              step: "4",
              title: "Close the Deal",
              description:
                "We provide documentation for closing. Payment can be handled at closing.",
            },
          ].map((phase, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gold-300" />
              )}
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold text-2xl mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-neutral-600 text-sm">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Services List */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              What We Handle
            </h2>
            <p className="text-neutral-600 text-lg mb-6">
              From minor repairs to major punch list items, we&apos;ve got you
              covered. One call handles it all.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service, index) => (
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
                  <span className="text-neutral-700 text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
              alt="Repair work in progress"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="navy">
        <SectionHeader
          title="What Clients Say"
          subtitle="Quality workmanship and clear communication—what every realtor wants to hear from their referrals."
          dark
        />
        <div className="grid md:grid-cols-2 gap-8">
          {realtorTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8">
              <svg
                className="w-10 h-10 text-gold-500 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-lg text-neutral-800 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center text-navy-700 font-bold">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-navy-900">
                    {testimonial.author}
                  </p>
                  <p className="text-neutral-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Form CTA */}
      <Section background="gradient">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Realtor Partner Network
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Get priority access, a direct line to our team, and the peace of mind
            that comes from working with a contractor who understands your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Become a Partner
            </Button>
            <Button
              href={telLink(SITE_CONFIG.phone)}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy-900"
            >
              Call: {formatPhone(SITE_CONFIG.phone)}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
