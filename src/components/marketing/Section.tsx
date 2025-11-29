// src/components/marketing/Section.tsx
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
}