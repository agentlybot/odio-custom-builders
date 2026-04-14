"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import { Section } from "@/components/ui";

const inputClasses =
  "w-full px-4 py-3 rounded-lg bg-navy-700 border border-navy-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent";

const labelClasses = "block text-sm font-medium text-neutral-300 mb-1";

const REFERRAL_OPTIONS = [
  "Referral",
  "Internet Search",
  "Facebook",
  "Instagram",
  "Google",
  "BBB Website",
  "Physical Ad",
  "Meta Ad",
  "Insurance",
];

const BUDGET_OPTIONS = [
  "Less than $10k",
  "$10k-$50k",
  "$50k-$100k",
  "$100k-$200k",
  "$200k-$500k",
  "$500k+",
];

export default function NewClientPage() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = formRef.current;
    if (!container) return;

    const observer = new MutationObserver(() => {
      const form = container.querySelector("form");
      if (!form) {
        setSubmitted(true);
        observer.disconnect();
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Section
        background="navy"
        className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              New Client Intake
            </h2>
            <p className="text-neutral-300 text-lg">
              Welcome! Please fill out the information below and you&apos;ll be
              able to schedule your in-person consultation.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
              <svg
                className="w-12 h-12 text-green-400 mx-auto mb-4"
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
              <h3 className="text-xl font-semibold text-white mb-2">
                Thank You!
              </h3>
              <p className="text-neutral-300 mb-4">
                Please schedule an in-person consultation at a time that works
                best for you. You should be redirected shortly.
              </p>
              <a
                href="https://calendar.app.google/mWmrg4CL22Gusiin8"
                className="inline-block px-6 py-3 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors duration-200"
              >
                Schedule Consultation
              </a>
            </div>
          ) : (
            <div ref={formRef}>
              <form
                data-jobtread-web-form="true"
                data-key="22THjmYZY7kn5F2wvY6FZxZBSmzaR5tmf5"
                data-success-message="Thank you! Please schedule an in person consultation at a time that works best for you."
                data-success-url="https://calendar.app.google/mWmrg4CL22Gusiin8"
                className="space-y-6"
              >
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="jt-nc-name" className={labelClasses}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="jt-nc-name"
                      name="contact.name"
                      required
                      className={inputClasses}
                      placeholder="First and Last"
                    />
                  </div>
                  <div>
                    <label htmlFor="jt-nc-email" className={labelClasses}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="jt-nc-email"
                      name="contact.custom.22Nm4tBrGdQC"
                      required
                      className={inputClasses}
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Referral Source */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="jt-nc-phone" className={labelClasses}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="jt-nc-phone"
                      name="contact.custom.22Nm4tBzExMy"
                      required
                      className={inputClasses}
                      placeholder="(864) 555-1234"
                    />
                  </div>
                  <div>
                    <label htmlFor="jt-nc-referral" className={labelClasses}>
                      Where did you hear about us? *
                    </label>
                    <select
                      id="jt-nc-referral"
                      name="account.custom.22NmDniyLkCc"
                      required
                      className={inputClasses}
                    >
                      <option value="">Select one...</option>
                      {REFERRAL_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Address */}
                <div>
                  <label htmlFor="jt-nc-address" className={labelClasses}>
                    Address *
                  </label>
                  <textarea
                    id="jt-nc-address"
                    name="location.address"
                    required
                    rows={2}
                    className={`${inputClasses} resize-none`}
                    placeholder="Street address, city, state, zip"
                  />
                </div>

                {/* Row 4: Referred By */}
                <div>
                  <label htmlFor="jt-nc-referred-by" className={labelClasses}>
                    Referred By *
                  </label>
                  <textarea
                    id="jt-nc-referred-by"
                    name="account.custom.22NmujbGp3cm"
                    required
                    rows={2}
                    className={`${inputClasses} resize-none`}
                    placeholder="Who referred you to us?"
                  />
                </div>

                {/* Row 5: Project Description */}
                <div>
                  <label htmlFor="jt-nc-description" className={labelClasses}>
                    Briefly Describe Your Project *
                  </label>
                  <textarea
                    id="jt-nc-description"
                    name="account.custom.22NpA3EKVPrA"
                    required
                    rows={3}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Row 6: Files + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="jt-nc-files" className={labelClasses}>
                      Files &amp; Photos
                    </label>
                    <input
                      type="file"
                      id="jt-nc-files"
                      name="account.files"
                      multiple
                      className={`${inputClasses} file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-navy-600 file:text-neutral-300 hover:file:bg-navy-500`}
                    />
                    <p className="text-neutral-500 text-xs mt-1">
                      Upload photos of the current space
                    </p>
                  </div>
                  <div>
                    <label htmlFor="jt-nc-budget" className={labelClasses}>
                      Budget *
                    </label>
                    <select
                      id="jt-nc-budget"
                      name="account.custom.22PLmRWQ3eAw"
                      required
                      className={inputClasses}
                    >
                      <option value="">Select a range...</option>
                      {BUDGET_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 7: Submit */}
                <button
                  type="submit"
                  data-submit-button="true"
                  className="w-full px-8 py-4 bg-gold-500 text-navy-900 text-lg font-semibold rounded-lg hover:bg-gold-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-navy-900"
                >
                  Submit
                </button>

                <p className="text-neutral-400 text-sm text-center">
                  After submitting, you&apos;ll be able to schedule your
                  in-person consultation
                </p>
              </form>
            </div>
          )}
        </div>

        <Script
          src="https://app.jobtread.com/web-form.js"
          strategy="afterInteractive"
        />
      </Section>
    </>
  );
}
