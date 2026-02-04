import { cn } from "@/lib/utils";

type ContainerSize = "narrow" | "default" | "wide" | "full";

interface ContainerProps {
  size?: ContainerSize;
  className?: string;
  children: React.ReactNode;
}

const sizes: Record<ContainerSize, string> = {
  narrow: "max-w-4xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

export function Container({ size = "default", className, children }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}
