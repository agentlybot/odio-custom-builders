"use client";

import { useState } from "react";
import { Section } from "@/components/ui";

export function RealtorPartnerForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const form = e.currentTarget;
      const body = {
        name: (form.elements.namedItem("name") as HTMLInputElement).value,
        brokerage: (form.elements.namedItem("brokerage") as HTMLInputElement).value,
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
        message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      };

      const res = await fetch("/api/submit-realtor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please call us at (864) 626-1555 instead.");
    }
  }

  return (
    <Section id="realtor-partner" background="navy" className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Realtor Partner Network
          </h2>
          <p className="text-neutral-300 text-lg">
            Get priority access, a direct line to our team, and the peace of mind that comes from working with a contractor who understands your business.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
            <svg className="w-12 h-12 text-green-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">Welcome to the Network!</h3>
            <p className="text-neutral-300 mb-4">
              A member of our team will reach out within 1 business day to set up your partner account and discuss how we can best support your transactions.
            </p>
            <p className="text-neutral-400 text-sm">
              Need to reach us sooner? Call <a href="tel:8646261555" className="text-gold-400 hover:text-gold-300">(864) 626-1555</a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Brokerage row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="realtor-name" className="block text-sm font-medium text-neutral-300 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="realtor-name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-navy-700 border border-navy-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="realtor-brokerage" className="block text-sm font-medium text-neutral-300 mb-1">
                  Brokerage
                </label>
                <input
                  type="text"
                  id="realtor-brokerage"
                  name="brokerage"
                  className="w-full px-4 py-3 rounded-lg bg-navy-700 border border-navy-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Your brokerage name"
                />
              </div>
            </div>

            {/* Email + Phone row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="realtor-email" className="block text-sm font-medium text-neutral-300 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="realtor-email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-navy-700 border border-navy-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="realtor-phone" className="block text-sm font-medium text-neutral-300 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="realtor-phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-navy-700 border border-navy-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="(864) 555-1234"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="realtor-message" className="block text-sm font-medium text-neutral-300 mb-1">
                Message
              </label>
              <textarea
                id="realtor-message"
                name="message"
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-navy-700 border border-navy-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                placeholder="Tell us about your needs, typical transaction volume, etc."
              />
            </div>

            {/* Error Message */}
            {status === "error" && (
              <p className="text-red-400 text-sm">{errorMessage}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full px-8 py-4 bg-gold-500 text-navy-900 text-lg font-semibold rounded-lg hover:bg-gold-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-navy-900"
            >
              {status === "submitting" ? "Sending..." : "Become a Partner"}
            </button>

            <p className="text-neutral-400 text-sm text-center">
              We&apos;ll reach out within 1 business day to get you set up
            </p>
          </form>
        )}
      </div>
    </Section>
  );
}
