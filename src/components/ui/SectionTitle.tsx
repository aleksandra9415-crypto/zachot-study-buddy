import { cn } from "@/lib/utils";

interface SectionTitleProps {
  className?: string;
  children: React.ReactNode;
}

export function SectionTitle({ className, children }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "font-display font-800 tracking-[-0.01em] text-[26px] md:text-[40px] text-navy-900 text-center leading-tight",
        className
      )}
    >
      {children}
    </h2>
  );
}
