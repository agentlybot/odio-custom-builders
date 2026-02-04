import { Section } from "@/components/ui";
import { STATS } from "@/lib/constants";

export function TrustStack() {
  return (
    <Section background="light">
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">
              {stat.value}
            </div>
            <div className="text-neutral-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Certifications Row */}
      <div className="border-t border-neutral-200 pt-12">
        <p className="text-center text-neutral-500 text-sm uppercase tracking-wider mb-8">
          Licensed, Insured & Certified
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* BBB Badge */}
          <div className="flex items-center gap-2 text-neutral-600">
            <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center text-white font-bold text-xs">
              BBB
            </div>
            <span className="text-sm">A+ Rated</span>
          </div>

          {/* HBA Badge */}
          <div className="flex items-center gap-2 text-neutral-600">
            <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center text-white font-bold text-xs">
              HBA
            </div>
            <span className="text-sm">Home Builders Assoc.</span>
          </div>

          {/* Licensed Badge */}
          <div className="flex items-center gap-2 text-neutral-600">
            <svg
              className="w-12 h-12 text-navy-900"
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
            <span className="text-sm">Licensed & Insured</span>
          </div>

          {/* Chamber Badge */}
          <div className="flex items-center gap-2 text-neutral-600">
            <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center text-white font-bold text-xs">
              COC
            </div>
            <span className="text-sm">Chamber Member</span>
          </div>

          {/* Google Reviews */}
          <div className="flex items-center gap-2 text-neutral-600">
            <div className="flex text-gold-500">
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
            <span className="text-sm">Google Reviews</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
