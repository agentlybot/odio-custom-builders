import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "gold" | "navy" | "success";

interface BadgeProps {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-neutral-100 text-neutral-700",
  gold: "bg-gold-100 text-gold-700",
  navy: "bg-navy-100 text-navy-700",
  success: "bg-green-100 text-green-700",
};

export function Badge({ variant = "default", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
