import React from "react";
import { cn } from "@/lib/utils";

interface MarkerProps {
  children: React.ReactNode;
  className?: string;
}

export const Marker = ({ children, className }: MarkerProps) => {
  return (
    <span className={cn("relative inline-block px-1", className)}>
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute bottom-0 left-[-4px] z-0 h-[0.55em] w-[calc(100%+8px)] -rotate-1 fill-amber-500"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
      >
        <path d="M0,5 Q25,0 50,5 T100,5 L100,15 Q75,20 50,15 T0,15 Z" />
      </svg>
    </span>
  );
};
