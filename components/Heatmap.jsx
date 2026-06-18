export default function Heatmap() {
  const weeks = 24;
  const days = 7;
  const cells = Array.from({ length: weeks * days }, () => Math.random());

  return (
    <div style={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      {cells.map((v, i) => (
        <div
          key={i}
          title={`${Math.floor(v * 8)} contributions`}
          style={{
            width: 10,
            height: 10,
            borderRadius: 2,
            background:
              v < 0.2
                ? "#1f2937"
                : v < 0.4
                ? "#7f1d1d"
                : v < 0.6
                ? "#b91c1c"
                : v < 0.8
                ? "#dc2626"
                : "#ef4444",
            boxShadow: v > 0.7 ? "0 0 4px rgba(220,38,38,0.6)" : "none",
          }}
        />
      ))}
    </div>
  );
}
