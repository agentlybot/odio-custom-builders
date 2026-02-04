import { Section, SectionHeader } from "@/components/ui";

const journeySteps = [
  {
    step: "1",
    title: "Closing Repair",
    description: "We met at closing",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    step: "2",
    title: "Trust Earned",
    description: "On time, on budget",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    step: "3",
    title: "Years Later",
    description: "They remembered us",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: "4",
    title: "Dream Renovation",
    description: "Now we're building their dream kitchen",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

export function Journey() {
  return (
    <Section background="light">
      <SectionHeader
        title="The Journey Home"
        subtitle="70% of our major renovations come from past repair clients. Here's how relationships are built."
      />

      {/* Journey Timeline */}
      <div className="relative">
        {/* Connection Line - Desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 -translate-y-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {journeySteps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Step Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg relative z-10 text-center">
                {/* Step Number */}
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="text-navy-700 mb-4 flex justify-center">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-sm">{step.description}</p>
              </div>

              {/* Arrow - Mobile */}
              {index < journeySteps.length - 1 && (
                <div className="flex justify-center my-4 md:hidden">
                  <svg
                    className="w-6 h-6 text-gold-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stat Callout */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-4 bg-navy-900 text-white px-8 py-4 rounded-full">
          <span className="text-4xl font-bold text-gold-400">70%</span>
          <span className="text-left text-sm">
            of our major renovations
            <br />
            come from past repair clients
          </span>
        </div>
      </div>
    </Section>
  );
}
