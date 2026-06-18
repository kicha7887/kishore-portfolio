export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "linear-gradient(135deg, rgba(15,15,20,0.98), rgba(25,10,10,0.98))",
          border: "1px solid rgba(220,38,38,0.4)",
          borderRadius: 20,
          padding: "2rem",
          maxWidth: 640,
          width: "90%",
          boxShadow: "0 0 60px rgba(220,38,38,0.3), 0 0 120px rgba(220,38,38,0.1)",
          position: "relative",
          maxHeight: "85vh",
          overflowY: "auto",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "rgba(220,38,38,0.2)",
            border: "1px solid rgba(220,38,38,0.4)",
            borderRadius: "50%",
            width: 32,
            height: 32,
            color: "#ef4444",
            cursor: "pointer",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✕
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
          <div style={{ fontSize: "2rem" }}>{project.icon}</div>
          <div>
            <h2 style={{ color: "#f9fafb", fontSize: "1.4rem", fontWeight: 700, margin: 0 }}>{project.title}</h2>
            <p style={{ color: "#ef4444", fontSize: "0.85rem", margin: 0 }}>{project.category}</p>
          </div>
        </div>

        <p style={{ color: "#d1d5db", lineHeight: 1.7, marginBottom: "1.5rem" }}>{project.fullDesc}</p>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4 style={{ color: "#9ca3af", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
            Technologies Used
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  padding: "4px 12px",
                  background: "rgba(220,38,38,0.1)",
                  border: "1px solid rgba(220,38,38,0.3)",
                  borderRadius: 20,
                  color: "#ef4444",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4 style={{ color: "#9ca3af", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
            Key Features
          </h4>
          <ul style={{ color: "#d1d5db", paddingLeft: "1.2rem", lineHeight: 2 }}>
            {project.features.map((f, i) => (
              <li key={i} style={{ fontSize: "0.875rem" }}>{f}</li>
            ))}
          </ul>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1,
              padding: "10px 0",
              background: "rgba(220,38,38,0.15)",
              border: "1px solid rgba(220,38,38,0.4)",
              borderRadius: 10,
              color: "#ef4444",
              textDecoration: "none",
              textAlign: "center",
              fontSize: "0.875rem",
              fontWeight: 600,
              transition: "background 0.2s",
            }}
          >
            ⌥ GitHub Repo
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1,
                padding: "10px 0",
                background: "linear-gradient(135deg, #dc2626, #b91c1c)",
                borderRadius: 10,
                color: "#fff",
                textDecoration: "none",
                textAlign: "center",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              ▶ Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
