import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionBackground = "white" | "light" | "navy" | "gradient";

interface SectionProps {
  background?: SectionBackground;
  className?: string;
  containerSize?: "narrow" | "default" | "wide" | "full";
  children: React.ReactNode;
  id?: string;
}

const backgrounds: Record<SectionBackground, string> = {
  white: "bg-white",
  light: "bg-neutral-50",
  navy: "bg-navy-900 text-white",
  gradient: "bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white",
};

export function Section({
  background = "white",
  className,
  containerSize = "default",
  children,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", backgrounds[background], className)}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg md:text-xl text-neutral-600 max-w-3xl",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
