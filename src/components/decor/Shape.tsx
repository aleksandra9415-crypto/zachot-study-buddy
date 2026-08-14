import React from "react";
import { cn } from "@/lib/utils";

type ShapeKind = "circle" | "square" | "diamond";

interface ShapeProps {
  kind: ShapeKind;
  size: number;
  color: string; // Tailwind color class like "bg-teal-600"
  position: {
    top?: number | string;
    right?: number | string;
    bottom?: number | string;
    left?: number | string;
  };
  className?: string;
}

export const Shape = ({ kind, size, color, position, className }: ShapeProps) => {
  const style: React.CSSProperties = {
    width: size,
    height: size,
    ...position,
  };

  return (
    <div
      style={style}
      className={cn(
        "absolute z-0 pointer-events-none",
        color,
        kind === "circle" && "rounded-full",
        kind === "square" && "rounded-[16px]",
        kind === "diamond" && "rounded-[8px] rotate-45",
        className
      )}
    />
  );
};
