import { useState, useEffect, useRef } from "react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello! I'm ARIA — Kishore's AI assistant. Ask me anything about his projects, skills, or experience." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [pulse, setPulse] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setPulse((p) => !p), 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const KISHORE_CONTEXT = `
You are ARIA, an AI assistant embedded in Kishore Kumar's futuristic portfolio. Answer only based on this context.

Kishore Kumar is an AI & Data Science Engineer from Chennai, India.
- Education: B.Tech in Artificial Intelligence & Data Science, graduating 2026
- Skills: Python, Machine Learning, Deep Learning, SQL, Streamlit, Power BI, Data Analytics, TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Computer Vision, NLP
- LeetCode: 350+ problems solved, 1650+ rating, top 15% globally
- GitHub: 40+ repositories, 200+ contributions, 15+ stars
- Certifications: Google Data Analytics, IBM Machine Learning, AWS Cloud Practitioner, TensorFlow Developer Certificate, Meta Python Programming
- Internship: AI/ML Intern at TechSolutions India (2024), Data Science Intern at Analytics Hub (2023)
- Projects: SentimentScope (NLP sentiment analysis), VisionNet (real-time object detection), PredictIQ (ML prediction platform), DataMind (Power BI analytics dashboard), AutoML Studio (automated ML pipeline), ChurnGuard (customer churn predictor)
- Achievements: Hackathon winner (2023, 2024), Published research paper on CNN optimization, Smart India Hackathon finalist
- Contact: kishore07887@gmail.com | LinkedIn: linkedin.com/in/kishore-kumar-c-78b281295/ | GitHub: github.com/kicha7887
Keep answers concise, friendly, and professional. Respond as ARIA.
`;

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((m) => [...m, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: KISHORE_CONTEXT,
          messages: [
            ...messages.filter((m) => m.role !== "assistant" || messages.indexOf(m) > 0).map((m) => ({
              role: m.role,
              content: m.text,
            })),
            { role: "user", content: userMsg },
          ],
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "I couldn't process that. Try again!";
      setMessages((m) => [...m, { role: "assistant", text: reply }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", text: "Connection error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Orb Button */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, #ef4444, #7f1d1d)",
          boxShadow: pulse
            ? "0 0 40px rgba(220,38,38,0.8), 0 0 80px rgba(220,38,38,0.4)"
            : "0 0 20px rgba(220,38,38,0.5), 0 0 40px rgba(220,38,38,0.2)",
          cursor: "pointer",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.6rem",
          transition: "box-shadow 1s ease",
          animation: "floatBob 3s ease-in-out infinite",
        }}
        title="Ask ARIA"
      >
        🤖
      </div>

      {/* Chat Panel */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 110,
            right: 32,
            width: 360,
            height: 480,
            background: "linear-gradient(135deg, rgba(10,10,15,0.97), rgba(20,5,5,0.97))",
            border: "1px solid rgba(220,38,38,0.4)",
            borderRadius: 20,
            zIndex: 998,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 0 60px rgba(220,38,38,0.3)",
            backdropFilter: "blur(20px)",
            animation: "slideUp 0.3s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid rgba(220,38,38,0.2)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "radial-gradient(circle, #ef4444, #7f1d1d)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
                boxShadow: "0 0 12px rgba(220,38,38,0.6)",
              }}
            >
              🤖
            </div>
            <div>
              <div style={{ color: "#f9fafb", fontWeight: 700, fontSize: "0.9rem" }}>ARIA</div>
              <div style={{ color: "#22c55e", fontSize: "0.7rem" }}>● Online</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ marginLeft: "auto", background: "none", border: "none", color: "#6b7280", cursor: "pointer", fontSize: "1rem" }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    background:
                      m.role === "user"
                        ? "linear-gradient(135deg, #dc2626, #b91c1c)"
                        : "rgba(255,255,255,0.05)",
                    border: m.role === "assistant" ? "1px solid rgba(255,255,255,0.08)" : "none",
                    color: "#f3f4f6",
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", gap: 4, padding: "8px 14px" }}>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#ef4444",
                      animation: `bounce 0.8s ease ${i * 0.15}s infinite`,
                    }}
                  />
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(220,38,38,0.2)", display: "flex", gap: 8 }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about Kishore..."
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(220,38,38,0.2)",
                borderRadius: 10,
                padding: "8px 14px",
                color: "#f3f4f6",
                fontSize: "0.82rem",
                outline: "none",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                padding: "8px 16px",
                background: "linear-gradient(135deg, #dc2626, #b91c1c)",
                border: "none",
                borderRadius: 10,
                color: "#fff",
                cursor: "pointer",
                fontSize: "0.82rem",
                fontWeight: 600,
              }}
            >
              ↗
            </button>
          </div>
        </div>
      )}
    </>
  );
}
