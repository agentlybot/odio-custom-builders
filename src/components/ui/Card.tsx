import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
  hover?: boolean;
}

export function Card({ className, children, href, hover = false }: CardProps) {
  const baseStyles = cn(
    "bg-white rounded-xl overflow-hidden",
    hover && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
    className
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, "block")}>
        {children}
      </Link>
    );
  }

  return <div className={baseStyles}>{children}</div>;
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait";
  overlay?: boolean;
}

export function CardImage({
  src,
  alt,
  className,
  aspectRatio = "video",
  overlay = false,
}: CardImageProps) {
  const aspectRatios = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  };

  return (
    <div className={cn("relative overflow-hidden", aspectRatios[aspectRatio], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
      )}
    </div>
  );
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
  as?: "h2" | "h3" | "h4";
}

export function CardTitle({ className, children, as: Tag = "h3" }: CardTitleProps) {
  return (
    <Tag className={cn("text-xl font-semibold text-neutral-900 mb-2", className)}>
      {children}
    </Tag>
  );
}

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export function CardDescription({ className, children }: CardDescriptionProps) {
  return (
    <p className={cn("text-neutral-600 leading-relaxed", className)}>{children}</p>
  );
}
