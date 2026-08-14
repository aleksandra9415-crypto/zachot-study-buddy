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
    <section id={id} className={cn("w-full py-14 md:py-24 first:pt-0", outerClassName)}>
      <div className={cn("mx-auto max-w-[1200px]", className)}>
        {children}
      </div>
    </section>
  );
};
