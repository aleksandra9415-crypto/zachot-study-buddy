import React, { useState, useEffect } from 'react';

export default function Shape({ 
  kind = "circle", 
  size = 200, 
  className = "", 
  style = {} 
}: { 
  kind?: "circle" | "square" | "diamond" | "triangle", 
  size?: number, 
  className?: string, 
  style?: React.CSSProperties 
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const currentSize = isMobile ? size / 2 : size;

  const base: React.CSSProperties = {
    position: "absolute",
    width: currentSize,
    height: currentSize,
    pointerEvents: "none",
    zIndex: 0,
    ...style,
  };

  if (kind === "circle") base.borderRadius = "50%";
  if (kind === "square") base.borderRadius = isMobile ? 8 : 16;
  if (kind === "diamond") {
    base.borderRadius = isMobile ? 4 : 8;
    base.transform = (style.transform || "") + " rotate(45deg)";
  }

  if (kind === "triangle") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        viewBox="0 0 100 88"
        style={base}
      >
        <path
          fill="currentColor"
          d="M43.3 6.5 C47.2 -0.2 52.8 -0.2 56.7 6.5 L96.4 75.2 C100.3 81.9 97.5 87.3 89.7 87.3 L10.3 87.3 C2.5 87.3 -0.3 81.9 3.6 75.2 Z"
        />
      </svg>
    );
  }

  return <div aria-hidden="true" className={className} style={base} />;
}
