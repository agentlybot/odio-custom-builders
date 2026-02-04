import type { Metadata } from "next";
import { Container, Section, Button, Input, Textarea, Select } from "@/components/ui";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { formatPhone, telLink, mailtoLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${SITE_CONFIG.name} for a free consultation. Home repairs, remodeling, and custom builds in ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}.`,
};

const projectTypes = [
  { value: "", label: "Select a project type" },
  { value: "closing-repairs", label: "Closing / Prelisting Repairs" },
  { value: "home-repairs", label: "Home Repairs" },
  { value: "kitchen", label: "Kitchen Remodeling" },
  { value: "bathroom", label: "Bathroom Remodeling" },
  { value: "addition", label: "Addition / Custom Build" },
  { value: "other", label: "Other" },
];

const timelines = [
  { value: "", label: "When do you need this done?" },
  { value: "asap", label: "ASAP - I have a closing deadline" },
  { value: "1-month", label: "Within 1 month" },
  { value: "1-3-months", label: "1-3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "planning", label: "Just planning / researching" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gold-400 mb-4">
              Let&apos;s Talk About Your Project
            </h1>
            <p className="text-xl text-neutral-300">
              Whether you need a quick repair or you&apos;re planning a major
              renovation, we&apos;re here to help. Fill out the form below and
              we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Content */}
      <Section background="light">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">Phone</h3>
                  <a
                    href={telLink(SITE_CONFIG.phone)}
                    className="text-gold-600 hover:text-gold-700 font-medium"
                  >
                    {formatPhone(SITE_CONFIG.phone)}
                  </a>
                  <p className="text-sm text-neutral-500 mt-1">
                    {SITE_CONFIG.hours}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">Email</h3>
                  <a
                    href={mailtoLink(SITE_CONFIG.email)}
                    className="text-gold-600 hover:text-gold-700 font-medium"
                  >
                    {SITE_CONFIG.email}
                  </a>
                  <p className="text-sm text-neutral-500 mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Links */}
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <h3 className="font-semibold text-navy-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a
                  href="/for-realtors"
                  className="block text-gold-600 hover:text-gold-700"
                >
                  Realtor Partner Program →
                </a>
                <a
                  href="/services/closing-repairs"
                  className="block text-gold-600 hover:text-gold-700"
                >
                  Closing Repairs →
                </a>
                <a
                  href="/our-work"
                  className="block text-gold-600 hover:text-gold-700"
                >
                  View Our Work →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                Request a Consultation
              </h2>

              <form className="space-y-6">
                {/* Name & Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name *"
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Smith"
                  />
                  <Input
                    label="Phone Number *"
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(864) 555-1234"
                  />
                </div>

                {/* Email */}
                <Input
                  label="Email Address *"
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                />

                {/* Property Address */}
                <Input
                  label="Property Address"
                  id="address"
                  name="address"
                  type="text"
                  placeholder="123 Main St, Greenville, SC"
                />

                {/* Project Type & Timeline Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Select
                    label="Project Type *"
                    id="projectType"
                    name="projectType"
                    required
                    options={projectTypes}
                  />
                  <Select
                    label="Timeline"
                    id="timeline"
                    name="timeline"
                    options={timelines}
                  />
                </div>

                {/* Message */}
                <Textarea
                  label="Tell Us About Your Project"
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe what you're looking to accomplish..."
                />

                {/* Realtor Referral */}
                <Input
                  label="Referred by a Realtor? (Name)"
                  id="realtor"
                  name="realtor"
                  type="text"
                  placeholder="Realtor's name (optional)"
                />

                {/* Submit */}
                <div className="flex items-center justify-between">
                  <p className="text-sm text-neutral-500">
                    * Required fields
                  </p>
                  <Button type="submit" size="lg">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Response Promise */}
      <Section background="white">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 mx-auto mb-6">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">
            Our Response Promise
          </h2>
          <p className="text-neutral-600 text-lg">
            We understand that your time is valuable. That&apos;s why we commit to
            responding to all inquiries within 24 hours—usually much faster. If
            you have an urgent closing deadline, call us directly and we&apos;ll
            prioritize your request.
          </p>
        </div>
      </Section>
    </>
  );
}
