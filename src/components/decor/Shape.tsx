import React from 'react';

export default function Shape({
  kind = "circle",
  size = 200,
  className = "",
  style = {},
  depth = 0,        // максимальный сдвиг за курсором в px; 0 = без параллакса
  float = 0,        // длительность плавания в секундах; 0 = без плавания
  floatDelay = 0,
}: {
  kind?: "circle" | "square" | "diamond" | "triangle",
  size?: number,
  className?: string,
  style?: React.CSSProperties,
  depth?: number,
  float?: number,
  floatDelay?: number,
}) {
  const { top, right, bottom, left, transform: rotate, ...rest } = style as any;

  const outer: React.CSSProperties = {
    position: "absolute",
    top, right, bottom, left,
    width: size,
    height: size,
    pointerEvents: "none",
    zIndex: 0,
    transform: `translate(calc(var(--mx, 0) * ${depth}px), calc(var(--my, 0) * ${depth}px))`,
    transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
    ...rest,
  };

  const inner: React.CSSProperties = {
    width: "100%",
    height: "100%",
    transform: rotate,
    animation: float ? `shape-float ${float}s ease-in-out ${floatDelay}s infinite alternate` : undefined,
  };

  let figure;
  if (kind === "circle") figure = (
    <div className={`w-full h-full rounded-full ${className}`} />
  );
  if (kind === "square") figure = (
    <div className={`w-full h-full rounded-[16px] ${className}`} />
  );
  if (kind === "diamond") figure = (
    <div className={`w-full h-full rounded-[8px] rotate-45 ${className}`} />
  );
  if (kind === "triangle")
    figure = (
      <svg
        className={className}
        viewBox="0 0 100 88"
        style={{ width: '100%', height: '100%' }}
      >
        <path
          fill="currentColor"
          d="M43.3 6.5 C47.2 -0.2 52.8 -0.2 56.7 6.5 L96.4 75.2 C100.3 81.9 97.5 87.3 89.7 87.3 L10.3 87.3 C2.5 87.3 -0.3 81.9 3.6 75.2 Z"
        />
      </svg>
    );

  return (
    <div aria-hidden="true" style={outer}>
      <div style={inner}>
        {figure}
      </div>
    </div>
  );
}
