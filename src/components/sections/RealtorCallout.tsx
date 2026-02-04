import { Button, Container } from "@/components/ui";

export function RealtorCallout() {
  return (
    <section className="bg-navy-900 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-wider mb-4">
              For Real Estate Professionals
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Realtors: We Get You to Closing
            </h2>
            <p className="text-neutral-300 text-lg mb-6">
              Dozens of local realtors trust us for inspection repairs, prelisting
              prep, and everything in between. We get paid at closing, just like you.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              {[
                "Priority scheduling for closing deadlines",
                "Direct communication with your clients",
                "Transparent pricing, no surprises",
                "We get paid at closing—aligned incentives",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-200">
                  <svg
                    className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5"
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
                  {benefit}
                </li>
              ))}
            </ul>

            <Button href="/for-realtors" size="lg">
              Join Our Realtor Partner Program
            </Button>
          </div>

          {/* Testimonial Card */}
          <div className="relative">
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-500 rounded-lg opacity-20" />

            <div className="bg-white rounded-2xl p-8 relative">
              <svg
                className="w-12 h-12 text-gold-500 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="text-xl text-neutral-800 mb-6">
                &ldquo;As a realtor, I need a contractor I can trust to get deals done on
                time. Odio has never let me down. They understand urgency and
                communicate every step of the way.&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center text-navy-700 font-bold text-xl">
                  MJ
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Mike Johnson</p>
                  <p className="text-neutral-600">RE/MAX Agent, Greenville</p>
                </div>
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

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gold-500 rounded-lg opacity-20" />
          </div>
        </div>
      </Container>
    </section>
  );
}
