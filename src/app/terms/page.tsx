import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Odio Custom Builders terms of service. Services are subject to written estimates. Use of this site constitutes acceptance of these terms, governed by South Carolina law.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy-900 py-16">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gold-400 mb-4">
              Terms of Service
            </h1>
            <p className="text-neutral-300 text-lg">
              Last updated: April 14, 2025
            </p>
          </div>
        </Container>
      </section>

      <Section background="white" containerSize="narrow">
        <div className="prose prose-neutral max-w-none">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Acceptance of Terms</h2>
          <p className="text-neutral-600 mb-6">
            By accessing or using the website at{" "}
            <a href={SITE_CONFIG.url} className="text-gold-600 hover:underline">
              {SITE_CONFIG.url}
            </a>
            , you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">Use of This Website</h2>
          <p className="text-neutral-600 mb-6">
            This website is provided for informational purposes and to allow potential customers to contact {SITE_CONFIG.name} regarding home remodeling and repair services. You agree to use this site only for lawful purposes and in a manner consistent with these terms.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">Services and Estimates</h2>
          <p className="text-neutral-600 mb-4">
            Submitting a contact form or inquiry through this website does not constitute a contract or guarantee of service. All work performed by {SITE_CONFIG.name} is subject to a written estimate and signed agreement. Specifically:
          </p>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>All services are subject to a written estimate provided prior to commencement of work.</li>
            <li>Pricing, scope, and timelines are not finalized until a written agreement is executed by both parties.</li>
            <li>We do not guarantee availability for any specific project or timeline until confirmed in writing.</li>
            <li>Project scopes may change based on site conditions discovered during work; any changes will be communicated and documented via written change orders.</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">No Guarantee of Availability</h2>
          <p className="text-neutral-600 mb-6">
            Submitting an inquiry through this website does not reserve your project or guarantee that {SITE_CONFIG.name} will be available to complete your project. Availability is subject to current scheduling and project load.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">Intellectual Property</h2>
          <p className="text-neutral-600 mb-6">
            All content on this website, including text, images, logos, and design elements, is the property of {SITE_CONFIG.name} or its licensors. You may not reproduce, distribute, or use any content from this site without our prior written permission.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">Disclaimer of Warranties</h2>
          <p className="text-neutral-600 mb-6">
            This website is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. We make no representations about the accuracy or completeness of the content on this site. We are not liable for any errors or omissions, or for any actions taken in reliance on information contained here.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">Limitation of Liability</h2>
          <p className="text-neutral-600 mb-6">
            To the fullest extent permitted by law, {SITE_CONFIG.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or reliance on any information provided here.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">Governing Law</h2>
          <p className="text-neutral-600 mb-6">
            These Terms of Service and any disputes arising from or related to your use of this website shall be governed by and construed in accordance with the laws of the State of South Carolina, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">Changes to These Terms</h2>
          <p className="text-neutral-600 mb-6">
            We reserve the right to update these Terms of Service at any time. Continued use of this website after changes are posted constitutes your acceptance of the revised terms.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Us</h2>
          <p className="text-neutral-600">
            Questions about these Terms of Service? Contact us at{" "}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-gold-600 hover:underline"
            >
              {SITE_CONFIG.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
