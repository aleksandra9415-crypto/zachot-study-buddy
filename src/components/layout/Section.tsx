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
    <section 
      id={id} 
      className={cn(
        "w-full first:pt-[32px] last:pb-[32px]", 
        outerClassName
      )}
    >
      <div className={cn("mx-auto max-w-[1200px]", className)}>
        {children}
      </div>
    </section>
  );
};
