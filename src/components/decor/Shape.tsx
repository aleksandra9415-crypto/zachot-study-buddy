import React, { useState, useEffect } from 'react';

export default function Shape({ 
  kind = "circle", 
  size = 200, 
  className = "", 
  style = {} 
}: { 
  kind?: "circle" | "square" | "diamond", 
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

  return <div aria-hidden="true" className={className} style={base} />;
}
