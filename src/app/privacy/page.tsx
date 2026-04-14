import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Odio Custom Builders privacy policy. Learn how we collect, use, and protect your personal information when you contact us or request a project estimate.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy-900 py-16">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gold-400 mb-4">
              Privacy Policy
            </h1>
            <p className="text-neutral-300 text-lg">
              Last updated: April 14, 2025
            </p>
          </div>
        </Container>
      </section>

      <Section background="white" containerSize="narrow">
        <div className="prose prose-neutral max-w-none">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Overview</h2>
          <p className="text-neutral-600 mb-6">
            {SITE_CONFIG.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website at{" "}
            <a href={SITE_CONFIG.url} className="text-gold-600 hover:underline">
              {SITE_CONFIG.url}
            </a>
            . This Privacy Policy explains what information we collect, how we use it, and your choices regarding that information.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">Information We Collect</h2>
          <p className="text-neutral-600 mb-4">
            When you submit a contact or project request form on our website, we may collect the following:
          </p>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your phone number</li>
            <li>A description of your project or inquiry</li>
          </ul>
          <p className="text-neutral-600 mb-6">
            We may also collect standard web analytics data (such as pages visited and browser type) through third-party analytics services. This data is aggregated and not personally identifiable.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">How We Use Your Information</h2>
          <p className="text-neutral-600 mb-4">
            We use the information you provide solely to:
          </p>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>Respond to your inquiry or estimate request</li>
            <li>Schedule consultations and coordinate project details</li>
            <li>Send relevant follow-up communications related to your project</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">We Do Not Sell Your Data</h2>
          <p className="text-neutral-600 mb-6">
            We do not sell, rent, or share your personal information with third parties for marketing purposes. Your contact information is used only to communicate with you about your project.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">Data Retention</h2>
          <p className="text-neutral-600 mb-6">
            We retain your information only as long as necessary to fulfill the purpose for which it was collected or as required by law. You may request deletion of your information at any time by contacting us.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">Third-Party Services</h2>
          <p className="text-neutral-600 mb-6">
            Our website may use third-party services such as hosting providers or analytics tools. These services may collect limited data according to their own privacy policies. We do not control those third parties and encourage you to review their policies.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">Your Rights</h2>
          <p className="text-neutral-600 mb-6">
            You may request to access, correct, or delete any personal information we hold about you. To do so, contact us at the email address below.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">Changes to This Policy</h2>
          <p className="text-neutral-600 mb-6">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Us</h2>
          <p className="text-neutral-600">
            If you have questions about this Privacy Policy, please contact us at{" "}
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
