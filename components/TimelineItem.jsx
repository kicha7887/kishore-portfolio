import { useState, useEffect, useRef } from "react";

export default function TimelineItem({ year, title, subtitle, desc, side = "left" }) {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 24,
        marginBottom: 32,
        opacity: vis ? 1 : 0,
        transform: vis ? "translateX(0)" : `translateX(${side === "left" ? -40 : 40}px)`,
        transition: "all 0.6s ease",
        flexDirection: side === "left" ? "row" : "row-reverse",
      }}
    >
      <div style={{ flex: 1, textAlign: side === "left" ? "right" : "left" }}>
        <div style={{ color: "#ef4444", fontSize: "0.75rem", fontWeight: 700, marginBottom: 4 }}>{year}</div>
        <div style={{ color: "#f9fafb", fontWeight: 700, marginBottom: 4 }}>{title}</div>
        <div style={{ color: "#9ca3af", fontSize: "0.82rem", marginBottom: 4 }}>{subtitle}</div>
        <div style={{ color: "#6b7280", fontSize: "0.78rem" }}>{desc}</div>
      </div>
      <div style={{ flexShrink: 0, position: "relative" }}>
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#ef4444",
            boxShadow: "0 0 20px rgba(220,38,38,0.8), 0 0 40px rgba(220,38,38,0.4)",
            zIndex: 2,
            position: "relative",
          }}
        />
      </div>
      <div style={{ flex: 1 }} />
    </div>
  );
}
