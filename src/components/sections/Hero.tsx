import Image from "next/image";
import { Button, Container } from "@/components/ui";

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function Hero({
  title = "Forever Homes and First Repairs",
  subtitle = "Trusted by realtors and homeowners for closing repairs, home maintenance, and transformative renovations.",
  backgroundImage = "https://images.unsplash.com/photo-719ljc33Fgs?w=1920&q=80",
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Beautiful home renovation"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/50" />
      </div>

      {/* Content */}
      <Container size="wide" className="relative z-10 py-24">
        <div className="max-w-3xl">
          {/* Broken Grid Element - Decorative */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-32 bg-gold-500 hidden lg:block" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gold-400 mb-6 leading-tight">
            Forever Homes
            <br />
            and First Repairs
          </h1>

          <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-2xl">
            {subtitle}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/services/kitchen-remodeling" size="lg">
              I&apos;m Planning a Renovation
            </Button>
            <Button
              href="/services/home-repairs"
              variant="outline"
              size="lg"
              className="bg-white border-gold-400 text-gold-500 hover:bg-white hover:border-gold-500 hover:text-gold-600"
            >
              I Need Repairs
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-neutral-300 text-sm mb-4">
              Trusted by homeowners and realtors across the Upstate
            </p>
            <div className="flex items-center gap-3">
              <div className="flex text-gold-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-medium">5-Star Rated by Our Customers</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
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
    </section>
  );
}
