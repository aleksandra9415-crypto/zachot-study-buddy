import { cn } from "@/lib/utils";

interface ShapeProps {
  kind: "circle" | "square" | "diamond";
  size: number;
  color: "teal-600" | "teal-500" | "teal-100" | "amber-500" | "amber-100" | "pink-500" | "pink-100";
  position: {
    top?: number | string;
    right?: number | string;
    bottom?: number | string;
    left?: number | string;
  };
  className?: string;
}

export const Shape = ({ kind, size, color, position, className }: ShapeProps) => {
  const colorMap = {
    "teal-600": "bg-teal-600",
    "teal-500": "bg-teal-500",
    "teal-100": "bg-teal-100",
    "amber-500": "bg-amber-500",
    "amber-100": "bg-amber-100",
    "pink-500": "bg-pink-500",
    "pink-100": "bg-pink-100",
  };

  return (
    <div
      className={cn(
        "absolute pointer-events-none z-0",
        kind === "circle" && "rounded-full",
        kind === "square" && "rounded-[16px]",
        kind === "diamond" && "rounded-[8px] rotate-45",
        colorMap[color],
        className
      )}
      style={{
        width: size,
        height: size,
        top: position.top,
        right: position.right,
        bottom: position.bottom,
        left: position.left,
      }}
    />
  );
};
