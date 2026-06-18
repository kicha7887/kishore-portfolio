export default function MiniBarChart({ data }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "flex-end", height: 60 }}>
      {data.map((d, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
          <div
            style={{
              width: "100%",
              height: (d.value / max) * 52,
              background: `linear-gradient(to top, #dc2626, #ef4444)`,
              borderRadius: "3px 3px 0 0",
              boxShadow: "0 0 8px rgba(220,38,38,0.5)",
              transition: "height 0.6s ease",
            }}
          />
          <div style={{ fontSize: "0.5rem", color: "#6b7280", marginTop: 2 }}>{d.label}</div>
        </div>
      ))}
    </div>
  );
}
