import { useState, useRef } from "react";

export default function FloatCard({ children, delay = 0, className = "", onClick }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / rect.height) * 12;
    const ry = (-(e.clientX - cx) / rect.width) * 12;
    setTilt({ x: rx, y: ry });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const floatAnim = `float-${(delay * 10) % 5}`;

  return (
    <div
      ref={cardRef}
      className={`float-card ${className}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${hovered ? -8 : 0}px)`,
        transition: "transform 0.15s ease, box-shadow 0.3s ease",
        boxShadow: hovered
          ? "0 20px 60px rgba(220,38,38,0.35), 0 0 30px rgba(220,38,38,0.2), inset 0 1px 0 rgba(255,255,255,0.1)"
          : "0 8px 32px rgba(0,0,0,0.5), 0 0 12px rgba(220,38,38,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
        animationDelay: `${delay}s`,
        cursor: onClick ? "pointer" : "default",
      }}
    >
      {children}
    </div>
  );
}
