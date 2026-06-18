import { useState, useEffect, useRef } from "react";

export default function SkillOrb({ skill, angle, radius, speed, color }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const angleRef = useRef(angle);

  useEffect(() => {
    let raf;
    const animate = () => {
      angleRef.current += speed;
      const x = Math.cos(angleRef.current) * radius;
      const y = Math.sin(angleRef.current) * radius * 0.4;
      setPos({ x, y });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [radius, speed]);

  return (
    <div
      style={{
        position: "absolute",
        left: `calc(50% + ${pos.x}px)`,
        top: `calc(50% + ${pos.y}px)`,
        transform: "translate(-50%,-50%)",
        background: `radial-gradient(circle at 35% 35%, ${color}44, ${color}11)`,
        border: `1px solid ${color}66`,
        borderRadius: "50%",
        width: 72,
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.65rem",
        fontWeight: 700,
        color: color,
        textAlign: "center",
        boxShadow: `0 0 20px ${color}44`,
        backdropFilter: "blur(8px)",
        zIndex: 2,
        transition: "box-shadow 0.3s",
        cursor: "default",
        userSelect: "none",
      }}
    >
      {skill}
    </div>
  );
}
