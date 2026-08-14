import React from 'react';

export default function Shape({ kind = "circle", size = 200, className = "", style = {} }: { kind?: "circle" | "square" | "diamond", size?: number, className?: string, style?: React.CSSProperties }) {
  const base: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    pointerEvents: "none",
    zIndex: 0,
    ...style,
  };

  if (kind === "circle") base.borderRadius = "50%";
  if (kind === "square") base.borderRadius = 16;
  if (kind === "diamond") {
    base.borderRadius = 8;
    base.transform = "rotate(45deg)";
  }

  return <div aria-hidden="true" className={className} style={base} />;
}
