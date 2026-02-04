"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section background="white">
      <SectionHeader
        title="What Our Clients Say"
        subtitle="From quick repairs to dream renovations, hear from the homeowners and realtors who trust us."
      />

      {/* Testimonial Cards - Broken Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className={cn(
              "bg-neutral-50 rounded-2xl p-8 transition-all duration-300",
              // Broken grid stagger
              index % 2 === 1 && "md:translate-y-8",
              activeIndex === index && "ring-2 ring-gold-500 bg-white shadow-lg"
            )}
            onClick={() => setActiveIndex(index)}
          >
            {/* Quote Icon */}
            <svg
              className={cn(
                "w-10 h-10 mb-4 transition-colors",
                activeIndex === index ? "text-gold-500" : "text-neutral-300"
              )}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            {/* Quote */}
            <blockquote className="text-lg text-neutral-800 mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between">
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

              {/* Type Badge */}
              <span
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium",
                  testimonial.type === "realtor"
                    ? "bg-navy-100 text-navy-700"
                    : "bg-gold-100 text-gold-700"
                )}
              >
                {testimonial.type === "realtor" ? "Realtor" : "Homeowner"}
              </span>
            </div>

            {/* Rating */}
            <div className="flex text-gold-500 mt-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              activeIndex === index
                ? "bg-gold-500 w-8"
                : "bg-neutral-300 hover:bg-neutral-400"
            )}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </Section>
  );
}
