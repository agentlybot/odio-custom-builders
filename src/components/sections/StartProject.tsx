"use client";

import { useState } from "react";
import { Section } from "@/components/ui";
import { submitProject } from "@/app/actions/submitProject";

type ProjectType = "renovation" | "repair";

export function StartProject() {
  const [projectType, setProjectType] = useState<ProjectType>("renovation");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const formData = new FormData(e.currentTarget);
      formData.set("projectType", projectType);

      const result = await submitProject(formData);

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
    <Section background="navy" className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Project
          </h2>
          <p className="text-neutral-300 text-lg">
            Tell us about your project and we&apos;ll call for a free 5-10 minute phone consultation.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
            <svg className="w-12 h-12 text-green-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">We Got Your Request!</h3>
            <p className="text-neutral-300 mb-4">
              A member of our team will follow up within 1 business day to schedule your free phone consultation.
            </p>
            <p className="text-neutral-400 text-sm">
              Need to reach us sooner? Call <a href="tel:8646261555" className="text-gold-400 hover:text-gold-300">(864) 626-1555</a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Renovation / Repair Toggle */}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-3">
                What type of project?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setProjectType("renovation")}
                  className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-200 ${
                    projectType === "renovation"
                      ? "bg-gold-500 text-navy-900"
                      : "bg-navy-700 text-neutral-300 hover:bg-navy-600"
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Renovation
                </button>
                <button
                  type="button"
                  onClick={() => setProjectType("repair")}
                  className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-200 ${
                    projectType === "repair"
                      ? "bg-gold-500 text-navy-900"
                      : "bg-navy-700 text-neutral-300 hover:bg-navy-600"
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Repair
                </button>
              </div>
            </div>

            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-navy-700 border border-navy-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-navy-700 border border-navy-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-1">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-lg bg-navy-700 border border-navy-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="(864) 555-1234"
              />
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-neutral-300 mb-1">
                Project Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-navy-700 border border-navy-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Preferred Consultation Time */}
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-neutral-300 mb-1">
                Preferred Consultation Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                className="w-full px-4 py-3 rounded-lg bg-navy-700 border border-navy-600 text-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              >
                <option value="">No preference</option>
                <option value="morning">Morning (8AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 5PM)</option>
                <option value="evening">Evening (5PM - 7PM)</option>
              </select>
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
              {status === "submitting" ? "Sending..." : "Start Your Project"}
            </button>

            <p className="text-neutral-400 text-sm text-center">
              We&apos;ll call for a free 5-10 min phone consultation
            </p>
          </form>
        )}
      </div>
    </Section>
  );
}
