export default function Marker({ children, className = "text-orange-500" }) {
  return (
    <span style={{ position: "relative", display: "inline-block", whiteSpace: "nowrap" }}>
      <svg
        aria-hidden="true"
        className={className}
        viewBox="0 0 200 24"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          left: -5,
          bottom: "0.02em",
          width: "calc(100% + 10px)",
          height: "0.55em",
          zIndex: 0,
          transform: "rotate(-1.2deg)",
          pointerEvents: "none",
        }}
      >
        <path
          fill="currentColor"
          d="M1,6.5 C35,2.4 78,5.6 120,3.4 C152,1.8 180,6.2 199,3.8 L199,18.6 C165,22.2 120,18.4 72,20.6 C44,21.8 20,18.9 1,21.2 Z"
        />
      </svg>
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </span>
  );
}
