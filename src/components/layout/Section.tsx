import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  outerClassName?: string;
}

export const Section = ({ id, className, children, outerClassName }: SectionProps) => {
  return (
    <section id={id} className={cn("w-full py-14 md:py-24", outerClassName)}>
      <div className={cn("mx-auto max-w-[1200px] px-6", className)}>
        {children}
      </div>
    </section>
  );
};
