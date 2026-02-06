import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, SectionHeader, Button } from "@/components/ui";
import { SITE_CONFIG, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE_CONFIG.name} - your trusted partner for home repairs and renovations in ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}. Our story, team, and values.`,
};

const values = [
  {
    title: "Quality First",
    description:
      "We never cut corners. Every project, whether a small repair or major renovation, receives the same attention to detail.",
  },
  {
    title: "Clear Communication",
    description:
      "You'll always know what's happening with your project. We believe in transparency at every step.",
  },
  {
    title: "Respect Your Home",
    description:
      "We treat your home like it's our own. Clean jobsites, protected floors, and careful work.",
  },
  {
    title: "Stand Behind Our Work",
    description:
      "Every project comes with our guarantee. If something isn't right, we make it right.",
  },
];

const team = [
  {
    name: "Owner Name",
    role: "Founder & Lead Builder",
    bio: "With over 15 years in construction, Owner founded Odio Custom Builders with a simple mission: treat every home like it's your own.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Team Member",
    role: "Project Manager",
    bio: "Coordinates all projects from start to finish, ensuring clear communication and on-time delivery.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Team Member",
    role: "Lead Carpenter",
    bio: "A master craftsman with an eye for detail and over a decade of experience in custom woodwork.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Construction team"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-navy-900/70" />
        </div>

        <Container className="relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-400 mb-6">
              Building Trust, One Project at a Time
            </h1>
            <p className="text-xl text-neutral-200">
              From small repairs to dream renovations, we&apos;ve built our
              reputation on quality work and honest relationships.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <Section background="white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Story */}
      <Section background="light">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6">
              Why We Started
            </h2>
            <div className="space-y-4 text-neutral-600">
              <p>
                Odio Custom Builders was founded on a simple observation: homeowners
                needed a contractor they could trust for both small repairs and
                major projects. Too often, quality contractors wouldn&apos;t take
                small jobs, leaving homeowners stuck with unreliable handymen.
              </p>
              <p>
                We decided to do things differently. We bring the same
                professionalism, communication, and quality to a $500 repair that
                we bring to a $200,000 renovation. The result? 70% of our major
                renovations come from clients who first called us for a small
                repair.
              </p>
              <p>
                Today, we&apos;re proud to serve homeowners and realtors across the
                Upstate. From closing repairs that save deals to dream kitchens
                that transform homes, we&apos;re here to help at every stage of
                your journey.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
              alt="Team at work"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="white">
        <SectionHeader
          title="What We Believe"
          subtitle="These principles guide everything we do."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center text-gold-600 flex-shrink-0">
                <svg
                  className="w-6 h-6"
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
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section background="light">
        <SectionHeader
          title="Meet the Team"
          subtitle="The people behind every successful project."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <div className="relative aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900">
                  {member.name}
                </h3>
                <p className="text-gold-600 text-sm mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Whether it&apos;s a small repair or a big dream, we&apos;d love to
            hear about your project.
          </p>
          <Button href="/#start-project" size="lg">
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  );
}
